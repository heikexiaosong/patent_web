package com.gavel.report.common;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

public class Range {

    private static char[] CHARS = new char[]{
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    };

    private Set<String> values = new CopyOnWriteArraySet<>();

    public static Range of(String str){
        Range range = new Range();

        if ( str==null || str.trim().length()==0 ){
            return range;
        }

        if ( str.contains(":") ){

            String[] arr = str.split(":");
            if ( arr==null || arr.length!=2 ){
                return range;
            }

            String regex = "(?<=[a-zA-Z])(?=[0-9])";

            String[] begins = arr[0].split(regex);

            String[] ends = arr[1].split(regex);

            if ( !begins[0].equalsIgnoreCase(ends[0])
                    && !begins[1].equalsIgnoreCase(ends[1])  ){
                System.out.println("[" + str + "][格式错误]只支持一行或者同一列数据计算");
                return range;
            }

            if ( begins[0].equalsIgnoreCase(ends[0]) ){

                int lower = Integer.parseInt(begins[1]);
                int upper = Integer.parseInt(ends[1]);

                for (int i = lower; i <= upper ; i++) {
                    range.values().add(begins[0] + i);
                }

            } else if ( begins[1].equalsIgnoreCase(ends[1]) ){

                String lower = begins[0];
                String upper = ends[0];

                for (int i = toInt(lower); i <= toInt(upper); i++) {
                    range.values().add(toColumnName(i) + begins[1]);
                }
                range.values().add(arr[1]);

            }
        }

        return range;
    }

    private static  int toInt(String  str){

        if ( str==null || str.trim().length()==0 ){
            return 0;
        }

        String org = str.trim().toUpperCase();
        if ( org.length()==1 ){
            return org.charAt(0) - 'A';
        }

        if ( org.length()==2 ){

            return  (org.charAt(0) -  'A' + 1)*26 + (org.charAt(1) -  'A');
        }

        return 0;
    }

    public static  String toColumnName(int  i){

        if ( i <= 25 ){
            return String.valueOf(CHARS[i]);
        }

        char[] chs = new char[2];

        chs[0] = CHARS[i/26-1];
        chs[1] = CHARS[i%26];

        return String.valueOf(chs);
    }

    public Set<String> values() {
        return values;
    }

    public static void main(String[] args) {

        System.out.println(toInt("A"));
        System.out.println(toInt("Z"));

        System.out.println(toInt("AA"));

        System.out.println(toInt("AC"));

        System.out.println(toColumnName(0));
        System.out.println(toColumnName(25));

        System.out.println(toColumnName(26));

        System.out.println(toColumnName(27));

        System.out.println(Range.of("Z1:BA1").values());

        for (int i = 0; i <26 ; i++) {
            System.out.print("'" + (char)('A' + i) + "', ");
        }


    }
}
