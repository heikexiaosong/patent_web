package com.gavel.report.spreadsheet;

import com.gavel.report.model.CellBorder;
import com.gavel.report.model.CellFont;
import com.gavel.report.model.CellStyle;
import com.google.common.base.Strings;

import java.util.List;

public class SpreadsheetUtils {

    /**
     *
     * color;background;text-align;font-family;font-size;斜体;下划线;bold;middle;自动换行;;;right;bottom;left;top
     *
     * @param cellStyle
     * @param formats
     * @return
     */
    public static String buildStyle(CellStyle cellStyle, List<String[]> formats){
        String[] props = new String[16];
        for (int i = 0; i < props.length; i++) {
            props[i]="";
        }

        props[0] = "#000000";
        props[3] = "Arial, Helvetica, sans-serif";

        if ( cellStyle!=null ){

            props[1] = (cellStyle.getBgcolor()==null ? "" : cellStyle.getBgcolor());

            if ( cellStyle.getFormat() != null && cellStyle.getFormat().length() > 0 ){
                for (String[] format : formats) {
                    if ( format!=null && format.length==2 && cellStyle.getFormat().equalsIgnoreCase(format[1]) ){
                        props[11] = format[0];
                    }
                }

                if (  props[11]==null ||  props[11].length()==0 ){
                    String[] _format = new String[]{"fmt_" + (formats.size() +1), cellStyle.getFormat()};
                    formats.add(_format);
                    props[11] = _format[0];
                }
            }

            if ( cellStyle.getFont()!=null ){
                CellFont font = cellStyle.getFont();
                if ( !Strings.isNullOrEmpty(font.getColor()) ){
                    props[0] = font.getColor();
                }

                if ( !Strings.isNullOrEmpty(font.getName()) ){
                    props[3] = font.getName();
                }

                if (font.getSize()!=null ){
                    props[4] = String.valueOf(font.getSize().intValue()) + "px";
                }

                if ( Boolean.TRUE.equals(font.isBold())  ){
                    props[7] = "bold";
                }
            }

            if ( cellStyle.getAlign() != null ){
                props[2] = cellStyle.getAlign().name().toLowerCase();
            }

            if ( cellStyle.getValign() != null ){
                props[8] = cellStyle.getValign().getValue();
            }

            if ( cellStyle.getBorder()!=null ){
                CellBorder border = cellStyle.getBorder();
                if ( border.getTop()!=null ){
                    props[15] = "#000000";
                }
                if ( border.getLeft()!=null ){
                    props[14] = "#000000";
                }
                if ( border.getBottom()!=null ){
                    props[13] = "#000000";
                }
                if ( border.getRight()!=null ){
                    props[12] = "#000000";
                }
            }
        }

        return String.format("%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s", props);
    }
}
