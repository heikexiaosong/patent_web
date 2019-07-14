package com.gavel.report.common;

import java.text.CharacterIterator;
import java.text.StringCharacterIterator;
import java.util.Stack;

import com.gavel.common.utils.StringUtils;

public class FunctionParser {


    private static final String LEFT_PARENTHESIS  = "(";
    private static final String RIGHT_PARENTHESIS = ")";

    private static final String COMMA = ",";


    private final String  express;

    public FunctionParser(String express) {
    	if (StringUtils.contains(express, "("))
    		this.express = express;
    	else
    		this.express = express+"()";
    }

    /**
     * express := ID | ID ( var_list )
     *
     * var_list := var | var, var_list
     *
     *      var := express
     *
     */

    private Stack<Object> tokens = new Stack<Object>();

    private Object lookahead;

    private CharacterIterator iterator;

    private char peek;


    public Token parse(){


        if ( express==null || express.trim().length()==0 ){
            return FunctionToken.EMPTY;
        }

        String functionStr = express.trim();

        this.iterator = new StringCharacterIterator(functionStr);

        this.peek = this.iterator.current();

        lookahead = scan();

        return express();


    }

    private void nextChar() {
        this.peek = this.iterator.next();
    }

    private void match(Object token) {
        if ( token.equals(lookahead)){
            tokens.push(lookahead);
            lookahead = scan();
        } else {
            throw  new RuntimeException("[" + token +  "]附近有格式錯誤");
        }
    }


    private Object scan(){

        for (;; this.nextChar()) {
            if (this.peek == CharacterIterator.DONE) {
                return null;
            }
            if (this.peek == ' ' || this.peek == '\t' || this.peek == '\r') {
                continue;
            }
            if (this.peek == '\n') {
                throw new RuntimeException("不支持多行表达式[Position: " + this.iterator.getIndex() + "]");
            }
            break;
        }


        if ( Character.isDigit(this.peek) || this.peek == '.') {
            StringBuffer sb = new StringBuffer();
            boolean hasDot = false;
            do {
                sb.append(this.peek);
                if (this.peek == '.') {
                    if (hasDot) {
                        throw new RuntimeException("Illegal Number " + sb + " at " + this.iterator.getIndex());
                    }
                    hasDot = true;
                }
                this.nextChar();
            } while (Character.isDigit(this.peek) || this.peek == '.');
            if (sb.indexOf(".") > 0)
            	return Double.valueOf(sb.toString());
            else
            	return Long.parseLong(sb.toString());
        }

        if ( this.peek == '‘' ) {
            this.nextChar();
            StringBuilder sb = new StringBuilder();
            while ( this.peek != '’' ){
                sb.append(this.peek);
                this.nextChar();
            }
            this.nextChar();
            return sb.toString();
        }

        if ( this.peek == '\'' || this.peek == '\"' ) {
            char delimiter = this.peek;
            this.nextChar();
            StringBuilder sb = new StringBuilder();
            while ( this.peek != delimiter ) {
                sb.append(this.peek);
                this.nextChar();
            }
            this.nextChar();
            return sb.toString();
        }

        if ( Character.isJavaIdentifierStart(this.peek) ) {
            StringBuilder sb = new StringBuilder();
            do {
                sb.append(this.peek);
                this.nextChar();
            } while ( Character.isJavaIdentifierPart(this.peek) || ':' == this.peek );

            return sb.toString();
        }

        Character character = this.peek;
        this.nextChar();

        return character.toString();
    }


    private Token express(){
        identifier();
        if ( LEFT_PARENTHESIS.equalsIgnoreCase(lookahead.toString())){
            FunctionToken token = new FunctionToken(tokens.pop().toString());
            match( LEFT_PARENTHESIS);
            varlist(token);
            match( RIGHT_PARENTHESIS );
            return token;
        } else {
            return new IDToken(tokens.pop());
        }
    }

    private void identifier(){
        match(lookahead);
    }

    private void varlist(FunctionToken token){
        var(token);
        if ( COMMA.equalsIgnoreCase(lookahead.toString())){
            match(COMMA);
            varlist(token);
        }
    }

    private void var(FunctionToken token){
        if ( RIGHT_PARENTHESIS.equalsIgnoreCase(lookahead.toString())){
            return;
        }

        token.getParams().add(express());
    }

}
