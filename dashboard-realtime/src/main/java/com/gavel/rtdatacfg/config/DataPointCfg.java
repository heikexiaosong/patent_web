package com.gavel.rtdatacfg.config;

import java.util.ArrayList;
import java.util.List;

public class DataPointCfg {

    public static Config loadConfig(String type){

        if ( type==null || type.length()==0 ){
            return null;
        }

        if ( type.equalsIgnoreCase("hs2") ){

            Config config = new Config();
            config.setName("2号烧结");
            config.setDownsample("30m-avg");
            config.setDuration(1000L*60*60*48);
            config.setInterval(1000*60*30);
            config.setPunctually(true);

            List<ConfigItem> items = new ArrayList<>();
            List<ConfigItemGroup> groups = new ArrayList<>();


            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.BCDYDYQHL", "北侧大烟道氧气含量", "%"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.NCDYDYQHL", "南侧大烟道氧气含量", "%"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.NCDYDWD", "南侧大烟道温度", "℃"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.BCDYDWD", "北侧大烟道温度", "℃"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.BCDYDYL", "北侧大烟道压力", "kPa"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.NCDYDYL", "南侧大烟道压力", "kPa"));


            ConfigItemGroup group1 = new ConfigItemGroup("大烟道温度、氧气含量、压力");
            group1.addMetric("shaojie2.shaojie.shaoleng.BCDYDYQHL")
                    .addMetric("shaojie2.shaojie.shaoleng.NCDYDYQHL")
                    .addMetric("shaojie2.shaojie.shaoleng.NCDYDWD")
                    .addMetric("shaojie2.shaojie.shaoleng.BCDYDWD")
                    .addMetric("shaojie2.shaojie.shaoleng.BCDYDYL")
                    .addMetric("shaojie2.shaojie.shaoleng.NCDYDYL");
            groups.add(group1);


            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.SJJSD", "烧结机速度", "m/min"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.HLJSD", "环冷机速度", "m/min"));

            ConfigItemGroup group2 = new ConfigItemGroup("烧结机速度、环冷机速度");
            group2.addMetric("shaojie2.shaojie.shaoleng.SJJSD")
                    .addMetric("shaojie2.shaojie.shaoleng.HLJSD");
            groups.add(group2);

            items.add(new ConfigItem("shaojie2.peiliao.Y4DZLLFKL", "原4带总料量反馈量", "t/h"));
            ConfigItemGroup group3 = new ConfigItemGroup("配总料量反馈量");
            group3.addMetric("shaojie2.peiliao.Y4DZLLFKL");
            groups.add(group3);


            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.DHMQLL", "点火煤气流量", "m3/h"));
            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.DHKQLL", "点火空气流量", "m3/h"));

            ConfigItemGroup group4 = new ConfigItemGroup("点火空气、煤气流量");
            group4.addMetric("shaojie2.shaojie.shaoleng.DHMQLL")
                    .addMetric("shaojie2.shaojie.shaoleng.DHKQLL");
            groups.add(group4);



            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.DHWD", "点火温度", "℃"));
            ConfigItemGroup group5 = new ConfigItemGroup("点火温度");
            group5.addMetric("shaojie2.shaojie.shaoleng.DHWD");
            groups.add(group5);

            items.add(new ConfigItem("shaojie2.shaojie.shaoleng.SJKWD", "烧结矿温度", "℃"));
            ConfigItemGroup group6 = new ConfigItemGroup("烧结矿温度");
            group6.addMetric("shaojie2.shaojie.shaoleng.SJKWD");
            groups.add(group6);

            config.setItems(items);
            config.setGroups(groups);

            return config;
        }

        Config config = new Config();
        config.setName("3号高炉");

        if ( type==null || type.length()==0 ){
            return null;
        }

        switch (type.trim()){

            case "1":
            case "2":
            case "3":
                List<ConfigItem> items = new ArrayList<>();
                List<ConfigItemGroup> groups = new ArrayList<>();


                items.add(new ConfigItem("Channel1.Device1.RFY", "热风风力 ", "kPa"));
                items.add(new ConfigItem("Channel1.Device1.LFY", "冷风风力", "kPa"));
                items.add(new ConfigItem("Channel1.Device1.RFWD", "热风温度", "℃"));
                items.add(new ConfigItem("Channel1.Device1.LFLL", "冷风流量", "m3/min"));

                ConfigItemGroup group1 = new ConfigItemGroup("GROUP_3_1");
                group1.addMetric("Channel1.Device1.RFY")
                        .addMetric("Channel1.Device1.LFY")
                        .addMetric("Channel1.Device1.RFWD")
                        .addMetric("Channel1.Device1.LFLL");
                groups.add(group1);


                items.add(new ConfigItem("Channel1.Device1.SSGYL-N", "上升管压力(南))", "kPa"));
                items.add(new ConfigItem("Channel1.Device2.QMXYL", "气密箱压力", "kPa"));
                items.add(new ConfigItem("Channel1.Device2.LDDY", "炉顶顶压", "kPa"));

                ConfigItemGroup group2 = new ConfigItemGroup("GROUP_3_2");
                group2.addMetric("Channel1.Device1.SSGYL-N")
                        .addMetric("Channel1.Device2.QMXYL")
                        .addMetric("Channel1.Device2.LDDY");
                groups.add(group2);


                items.add(new ConfigItem("Channel1.Device2.1TCWZ", "1#探尺位置 ", "m"));
                items.add(new ConfigItem("Channel1.Device2.2TCWZ", "2#探尺位置", "m"));
                items.add(new ConfigItem("Channel1.Device2.3TCWZ", "3#探尺位置", "m"));

                ConfigItemGroup group3 = new ConfigItemGroup("GROUP_3_3");
                group3.addMetric("Channel1.Device2.1TCWZ")
                        .addMetric("Channel1.Device2.2TCWZ")
                        .addMetric("Channel1.Device2.3TCWZ");
                groups.add(group3);



                items.add(new ConfigItem("Channel1.Device1.FYL", "富氧量 ", "m3/h"));
                items.add(new ConfigItem("Channel1.Device1.TQXZS", "透气性指数", ""));
                items.add(new ConfigItem("Channel1.Device1.YC", "压差", "kPa"));
                items.add(new ConfigItem("Channel1.Device1.LYB", "量压比", ""));
                items.add(new ConfigItem("Channel1.Device1.PZGYW", "膨胀罐液位", "m"));

                ConfigItemGroup group4 = new ConfigItemGroup("GROUP_3_4");
                group4.addMetric("Channel1.Device1.FYL")
                        .addMetric("Channel1.Device1.TQXZS")
                        .addMetric("Channel1.Device1.YC")
                        .addMetric("Channel1.Device1.LYB")
                        .addMetric("Channel1.Device1.PZGYW");
                groups.add(group4);


                items.add(new ConfigItem("Channel1.Device2.SSG-DB", "东北", "℃"));
                items.add(new ConfigItem("Channel1.Device2.SSG-DN", "东南", "℃"));
                items.add(new ConfigItem("Channel1.Device2.SSG-XB", "西北", "℃"));
                items.add(new ConfigItem("Channel1.Device2.SSG-XN", "西南", "℃"));

                ConfigItemGroup group5 = new ConfigItemGroup("上升管温度");
                group5.addMetric("Channel1.Device2.SSG-DB")
                        .addMetric("Channel1.Device2.SSG-DN")
                        .addMetric("Channel1.Device2.SSG-XB")
                        .addMetric("Channel1.Device2.SSG-XN");
                groups.add(group5);

                config.setItems(items);
                config.setGroups(groups);
            case "4":
            case "5":

                break;

        }

        return config;
    }

    public static void main(String[] args) {
        Config config = loadConfig("hs2");

        for (ConfigItem configItem : config.getItems()) {
            System.out.println("tagIds.add(\"" + configItem.getId() + "\");");
        }
    }

}
