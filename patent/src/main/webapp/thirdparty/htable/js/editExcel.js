$(function(){
  	var data = [//四行五列  
	 	[, , , , , , , , , , , , , , , , , , , , ],  
      	 ["2001", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2002", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2003", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2004", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2005", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2006", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2007", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2008", 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,87,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2009", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,8,6,78,5,6,6,35,6,3,6,3,8,38,3],  
      	["2010", 30, 15, 12, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,52,6,3,5,3,8,6,8,5,6,56,355,6,3,66,23,8,38,3],  
      	["2011", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,26,3,5,26,3,5,3,8,6,8,5,56,6,35,6,3,6,23,8,38,3],  
      	["2012", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,666,5,8,6,3,9,6,3,5,56,3,5,3,78,6,58,55,6,6,35,6,23,6,3,8,38,3],  
      	["2013", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,68,6,3,9,6,3,5,26,3,5,3,8,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2014", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,26,3,5,3,8,6,58,5,6,6,35,6,3,6,3,8,38,3],  
      	["2015", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,29,26,3,5,6,3,5,3,78,76,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2016", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,55,6,3,5,3,8,6,28,5,6,6,35,6,3,6,3,8,38,3],  
      	["2017", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,43,9,6,3,5,6,3,5,3,8,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2018", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,62,3,29,6,3,5,6,3,5,3,8,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2019", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,48,6,3,9,6,3,5,6,3,5,3,8,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2020", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,68,6,3,9,6,3,5,6,3,5,3,8,6,8,5,6,6,345,6,3,64,3,8,38,3],  
      	["2021", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,6,3,5,6,3,5,3,8,6,8,5,6,6,35,6,3,6,3,8,38,3],  
      	["2022", 20, 11, 14, 13,14,15,16,17,18,19,20,21,22,22,3,3,55,66,5,8,6,3,9,66,3,5,6,3,5,3,8,6,8,5,6,6,35,6,3,6,3,48,38,23]  
  	];  
  	var data1 = [["烧结矿质量指标",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["日期",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["批次",null,null,"1","3","5","7","9","11","13","15","17","19","21","23",null,null,null,null,null,null,null,null,null,null,null],["1#烧结机质量指标",null,"Tfe","=SJZLZB01(\"01\",\"03\",\"TFe\")","=SJZLZB01(\"03\",\"05\",\"TFe\")","=SJZLZB01(\"05\",\"07\",\"TFe\")","=SJZLZB01(\"07\",\"09\",\"TFe\")","=SJZLZB01(\"09\",\"11\",\"TFe\")","=SJZLZB01(\"11\",\"13\",\"TFe\")","=SJZLZB01(\"13\",\"15\",\"TFe\")","=SJZLZB01(\"15\",\"17\",\"TFe\")","=SJZLZB01(\"17\",\"19\",\"TFe\")","=SJZLZB01(\"19\",\"21\",\"TFe\")","=SJZLZB01(\"21\",\"23\",\"TFe\")","=SJZLZB01(\"22\",\"23\",\"TFe\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO","=SJZLZB01(\"01\",\"03\",\"FeO\")","=SJZLZB01(\"03\",\"05\",\"FeO\")","=SJZLZB01(\"05\",\"07\",\"FeO\")","=SJZLZB01(\"07\",\"09\",\"FeO\")","=SJZLZB01(\"09\",\"11\",\"FeO\")","=SJZLZB01(\"11\",\"13\",\"FeO\")","=SJZLZB01(\"13\",\"15\",\"FeO\")","=SJZLZB01(\"15\",\"17\",\"FeO\")","=SJZLZB01(\"17\",\"19\",\"FeO\")","=SJZLZB01(\"19\",\"21\",\"FeO\")","=SJZLZB01(\"21\",\"23\",\"FeO\")","=SJZLZB01(\"22\",\"23\",\"FeO\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"SiO2","=SJZLZB01(\"01\",\"03\",\"SiO2\")","=SJZLZB01(\"03\",\"05\",\"SiO2\")","=SJZLZB01(\"05\",\"07\",\"SiO2\")","=SJZLZB01(\"07\",\"09\",\"SiO2\")","=SJZLZB01(\"09\",\"11\",\"SiO2\")","=SJZLZB01(\"11\",\"13\",\"SiO2\")","=SJZLZB01(\"13\",\"15\",\"SiO2\")","=SJZLZB01(\"15\",\"17\",\"SiO2\")","=SJZLZB01(\"17\",\"19\",\"SiO2\")","=SJZLZB01(\"19\",\"21\",\"SiO2\")","=SJZLZB01(\"21\",\"23\",\"SiO2\")","=SJZLZB01(\"22\",\"23\",\"SiO2\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"CaO","=SJZLZB01(\"01\",\"03\",\"CaO\")","=SJZLZB01(\"03\",\"05\",\"CaO\")","=SJZLZB01(\"05\",\"07\",\"CaO\")","=SJZLZB01(\"07\",\"09\",\"CaO\")","=SJZLZB01(\"09\",\"11\",\"CaO\")","=SJZLZB01(\"11\",\"13\",\"CaO\")","=SJZLZB01(\"13\",\"15\",\"CaO\")","=SJZLZB01(\"15\",\"17\",\"CaO\")","=SJZLZB01(\"17\",\"19\",\"CaO\")","=SJZLZB01(\"19\",\"21\",\"CaO\")","=SJZLZB01(\"21\",\"23\",\"CaO\")","=SJZLZB01(\"22\",\"23\",\"CaO\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"MgO","=SJZLZB01(\"01\",\"03\",\"MgO\")","=SJZLZB01(\"03\",\"05\",\"MgO\")","=SJZLZB01(\"05\",\"07\",\"MgO\")","=SJZLZB01(\"07\",\"09\",\"MgO\")","=SJZLZB01(\"09\",\"11\",\"MgO\")","=SJZLZB01(\"11\",\"13\",\"MgO\")","=SJZLZB01(\"13\",\"15\",\"MgO\")","=SJZLZB01(\"15\",\"17\",\"MgO\")","=SJZLZB01(\"17\",\"19\",\"MgO\")","=SJZLZB01(\"19\",\"21\",\"MgO\")","=SJZLZB01(\"21\",\"23\",\"MgO\")","=SJZLZB01(\"22\",\"23\",\"MgO\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"Al2O3","=SJZLZB01(\"01\",\"03\",\"Al2O3\")","=SJZLZB01(\"03\",\"05\",\"Al2O3\")","=SJZLZB01(\"05\",\"07\",\"Al2O3\")","=SJZLZB01(\"07\",\"09\",\"Al2O3\")","=SJZLZB01(\"09\",\"11\",\"Al2O3\")","=SJZLZB01(\"11\",\"13\",\"Al2O3\")","=SJZLZB01(\"13\",\"15\",\"Al2O3\")","=SJZLZB01(\"15\",\"17\",\"Al2O3\")","=SJZLZB01(\"17\",\"19\",\"Al2O3\")","=SJZLZB01(\"19\",\"21\",\"Al2O3\")","=SJZLZB01(\"21\",\"23\",\"Al2O3\")","=SJZLZB01(\"22\",\"23\",\"Al2O3\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"P","=SJZLZB01(\"01\",\"03\",\"P\")","=SJZLZB01(\"03\",\"05\",\"P\")","=SJZLZB01(\"05\",\"07\",\"P\")","=SJZLZB01(\"07\",\"09\",\"P\")","=SJZLZB01(\"09\",\"11\",\"P\")","=SJZLZB01(\"11\",\"13\",\"P\")","=SJZLZB01(\"13\",\"15\",\"P\")","=SJZLZB01(\"15\",\"17\",\"P\")","=SJZLZB01(\"17\",\"19\",\"P\")","=SJZLZB01(\"19\",\"21\",\"P\")","=SJZLZB01(\"21\",\"23\",\"P\")","=SJZLZB01(\"22\",\"23\",\"P\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"S","=SJZLZB01(\"01\",\"03\",\"S\")","=SJZLZB01(\"03\",\"05\",\"S\")","=SJZLZB01(\"05\",\"07\",\"S\")","=SJZLZB01(\"07\",\"09\",\"S\")","=SJZLZB01(\"09\",\"11\",\"S\")","=SJZLZB01(\"11\",\"13\",\"S\")","=SJZLZB01(\"13\",\"15\",\"S\")","=SJZLZB01(\"15\",\"17\",\"S\")","=SJZLZB01(\"17\",\"19\",\"S\")","=SJZLZB01(\"19\",\"21\",\"S\")","=SJZLZB01(\"21\",\"23\",\"S\")","=SJZLZB01(\"22\",\"23\",\"S\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"R","=SJZLZB01(\"01\",\"03\",\"碱度\")","=SJZLZB01(\"03\",\"05\",\"碱度\")","=SJZLZB01(\"05\",\"07\",\"碱度\")","=SJZLZB01(\"07\",\"09\",\"碱度\")","=SJZLZB01(\"09\",\"11\",\"碱度\")","=SJZLZB01(\"11\",\"13\",\"碱度\")","=SJZLZB01(\"13\",\"15\",\"碱度\")","=SJZLZB01(\"15\",\"17\",\"碱度\")","=SJZLZB01(\"17\",\"19\",\"碱度\")","=SJZLZB01(\"19\",\"21\",\"碱度\")","=SJZLZB01(\"21\",\"23\",\"碱度\")","=SJZLZB01(\"22\",\"23\",\"碱度\")",null,null,null,null,null,null,null,null,null,null,null],["2#烧结机质量指标",null,"Tfe","=SJZLZB02(\"01\",\"03\",\"TFe\")","=SJZLZB02(\"03\",\"05\",\"TFe\")","=SJZLZB02(\"05\",\"07\",\"TFe\")","=SJZLZB02(\"07\",\"09\",\"TFe\")","=SJZLZB02(\"09\",\"11\",\"TFe\")","=SJZLZB02(\"11\",\"13\",\"TFe\")","=SJZLZB02(\"13\",\"15\",\"TFe\")","=SJZLZB02(\"15\",\"17\",\"TFe\")","=SJZLZB02(\"17\",\"19\",\"TFe\")","=SJZLZB02(\"19\",\"21\",\"TFe\")","=SJZLZB02(\"21\",\"23\",\"TFe\")","=SJZLZB02(\"22\",\"23\",\"TFe\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO","=SJZLZB02(\"01\",\"03\",\"FeO\")","=SJZLZB02(\"03\",\"05\",\"FeO\")","=SJZLZB02(\"05\",\"07\",\"FeO\")","=SJZLZB02(\"07\",\"09\",\"FeO\")","=SJZLZB02(\"09\",\"11\",\"FeO\")","=SJZLZB02(\"11\",\"13\",\"FeO\")","=SJZLZB02(\"13\",\"15\",\"FeO\")","=SJZLZB02(\"15\",\"17\",\"FeO\")","=SJZLZB02(\"17\",\"19\",\"FeO\")","=SJZLZB02(\"19\",\"21\",\"FeO\")","=SJZLZB02(\"21\",\"23\",\"FeO\")","=SJZLZB02(\"22\",\"23\",\"FeO\")",null,"",null,null,null,null,null,null,null,null,null],[null,null,"SiO2","=SJZLZB02(\"01\",\"03\",\"SiO2\")","=SJZLZB02(\"03\",\"05\",\"SiO2\")","=SJZLZB02(\"05\",\"07\",\"SiO2\")","=SJZLZB02(\"07\",\"09\",\"SiO2\")","=SJZLZB02(\"09\",\"11\",\"SiO2\")","=SJZLZB02(\"11\",\"13\",\"SiO2\")","=SJZLZB02(\"13\",\"15\",\"SiO2\")","=SJZLZB02(\"15\",\"17\",\"SiO2\")","=SJZLZB02(\"17\",\"19\",\"SiO2\")","=SJZLZB02(\"19\",\"21\",\"SiO2\")","=SJZLZB02(\"21\",\"23\",\"SiO2\")","=SJZLZB02(\"22\",\"23\",\"SiO2\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"CaO","=SJZLZB02(\"01\",\"03\",\"CaO\")","=SJZLZB02(\"03\",\"05\",\"CaO\")","=SJZLZB02(\"05\",\"07\",\"CaO\")","=SJZLZB02(\"07\",\"09\",\"CaO\")","=SJZLZB02(\"09\",\"11\",\"CaO\")","=SJZLZB02(\"11\",\"13\",\"CaO\")","=SJZLZB02(\"13\",\"15\",\"CaO\")","=SJZLZB02(\"15\",\"17\",\"CaO\")","=SJZLZB02(\"17\",\"19\",\"CaO\")","=SJZLZB02(\"19\",\"21\",\"CaO\")","=SJZLZB02(\"21\",\"23\",\"CaO\")","=SJZLZB02(\"22\",\"23\",\"CaO\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"MgO","=SJZLZB02(\"01\",\"03\",\"MgO\")","=SJZLZB02(\"03\",\"05\",\"MgO\")","=SJZLZB02(\"05\",\"07\",\"MgO\")","=SJZLZB02(\"07\",\"09\",\"MgO\")","=SJZLZB02(\"09\",\"11\",\"MgO\")","=SJZLZB02(\"11\",\"13\",\"MgO\")","=SJZLZB02(\"13\",\"15\",\"MgO\")","=SJZLZB02(\"15\",\"17\",\"MgO\")","=SJZLZB02(\"17\",\"19\",\"MgO\")","=SJZLZB02(\"19\",\"21\",\"MgO\")","=SJZLZB02(\"21\",\"23\",\"MgO\")","=SJZLZB02(\"22\",\"23\",\"MgO\")",null,"",null,null,null,null,null,null,null,null,null],[null,null,"Al2O3","=SJZLZB02(\"01\",\"03\",\"Al2O3\")","=SJZLZB02(\"03\",\"05\",\"Al2O3\")","=SJZLZB02(\"05\",\"07\",\"Al2O3\")","=SJZLZB02(\"07\",\"09\",\"Al2O3\")","=SJZLZB02(\"09\",\"11\",\"Al2O3\")","=SJZLZB02(\"11\",\"13\",\"Al2O3\")","=SJZLZB02(\"13\",\"15\",\"Al2O3\")","=SJZLZB02(\"15\",\"17\",\"Al2O3\")","=SJZLZB02(\"17\",\"19\",\"Al2O3\")","=SJZLZB02(\"19\",\"21\",\"Al2O3\")","=SJZLZB02(\"21\",\"23\",\"Al2O3\")","=SJZLZB02(\"22\",\"23\",\"Al2O3\")","",null,null,null,null,null,null,null,null,null,null],[null,null,"P","=SJZLZB02(\"01\",\"03\",\"P\")","=SJZLZB02(\"03\",\"05\",\"P\")","=SJZLZB02(\"05\",\"07\",\"P\")","=SJZLZB02(\"07\",\"09\",\"P\")","=SJZLZB02(\"09\",\"11\",\"P\")","=SJZLZB02(\"11\",\"13\",\"P\")","=SJZLZB02(\"13\",\"15\",\"P\")","=SJZLZB02(\"15\",\"17\",\"P\")","=SJZLZB02(\"17\",\"19\",\"P\")","=SJZLZB02(\"19\",\"21\",\"P\")","=SJZLZB02(\"21\",\"23\",\"P\")","=SJZLZB02(\"22\",\"23\",\"P\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"S","=SJZLZB02(\"01\",\"03\",\"S\")","=SJZLZB02(\"03\",\"05\",\"S\")","=SJZLZB02(\"05\",\"07\",\"S\")","=SJZLZB02(\"07\",\"09\",\"S\")","=SJZLZB02(\"09\",\"11\",\"S\")","=SJZLZB02(\"11\",\"13\",\"S\")","=SJZLZB02(\"13\",\"15\",\"S\")","=SJZLZB02(\"15\",\"17\",\"S\")","=SJZLZB02(\"17\",\"19\",\"S\")","=SJZLZB02(\"19\",\"21\",\"S\")","=SJZLZB02(\"21\",\"23\",\"S\")","=SJZLZB02(\"22\",\"23\",\"S\")",null,null,null,null,null,null,null,null,null,null,null],[null,null,"R","=SJZLZB02(\"01\",\"03\",\"碱度\")","=SJZLZB02(\"03\",\"05\",\"碱度\")","=SJZLZB02(\"05\",\"07\",\"碱度\")","=SJZLZB02(\"07\",\"09\",\"碱度\")","=SJZLZB02(\"09\",\"11\",\"碱度\")","=SJZLZB02(\"11\",\"13\",\"碱度\")","=SJZLZB02(\"13\",\"15\",\"碱度\")","=SJZLZB02(\"15\",\"17\",\"碱度\")","=SJZLZB02(\"17\",\"19\",\"碱度\")","=SJZLZB02(\"19\",\"21\",\"碱度\")","=SJZLZB02(\"21\",\"23\",\"碱度\")","=SJZLZB02(\"22\",\"23\",\"碱度\")",null,null,null,null,null,null,null,null,null,null,null],["1#烧结","TFe",null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"FeO",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"R(±0.15)","0.15",null,null,"","",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"0.1",null,null,"",null,"","",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"合格",null,null,null,null,null,null,null,null,null,"","","",null,null,null,null,null,null,null,null,null,null,null,null],[null,"母项",null,null,null,null,null,null,"","",null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null],["2#烧结","TFe",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"FeO",null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"R(±0.15)","0.15",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"0.1",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"合格",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"母项",null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["1#","子项","TFe",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R    0.15","",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R 0.1","",null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"合格","",null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"母项",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["2#","子项","TFe",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO","","",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R 0.15","","",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R    0.1",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"合格",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"母项",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["1#稳定率",null,"TFe",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R？0.10",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"合格",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["2#稳定率",null,"TFe",null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO",null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R 0.10",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"合格",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["当日累计","子项","TFe",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO",null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R 0.10",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"烧结矿",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"母项",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"稳定率（抽样合格率）","TFe","","","",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"FeO",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"R（0.1）",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"烧结矿","","",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,"(±0.15)稳定率","一烧",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"二烧",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,"分厂",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]];
	var container = document.getElementById('example');  
	var hot = new Handsontable(container,  
	 {  
	    data:data,
	    minSpareRows:10,	//空出多少行  
	    width:"100%",
	    stretchH:"all",
	    minCols:26, // 最小列数
		minRows:30,
	    colHeaders:true,	//显示列表头 可取 true/fals/数组 ，当值为数组时，列头为数组的值
	    rowHeaders:true,	//显示行表头 可取 true/fals/数组 ，当值为数组时，列头为数组的值      
		columnSorting:false, // 点击列表头可进行当前列单元格排序   
		manualColumnResize:true,//当值为true时，允许拖动，当为false时禁止拖动
		manualRowResize:true,//当值为true时，允许拖动，当为false时禁止拖动
		//  columnSorting manualColumnFreeze 不能同时设置为true
		mergeCells:true,
		wordWrap:true, //默认
		autoColumnSize:false,
		customBorder:true,
		customBorders:[{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":0,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":1,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":2,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":3,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":4,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":5,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":6,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":7,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":8,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":9,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":10,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":11,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":12,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":13,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":14,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":15,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":16,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":17,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":18,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":19,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":20,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":21,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":22,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":23,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":24,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":25,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":26,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":27,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":28,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":29,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":30,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":31,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":32,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":33,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":34,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":35,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":36,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":37,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":38,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":39,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":40,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":41,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":42,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":43,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":44,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":45,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":46,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":47,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":48,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":49,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":50,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":51,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":52,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":53,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":54,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":55,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":56,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":57,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":58,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":59,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":60,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":61,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":62,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":63,"right":"{\"color\":\"black\",\"width\":2}"},{"col":0,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":1,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":2,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":3,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":4,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":5,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":6,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":7,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":8,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":9,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":10,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":11,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":12,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":13,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"},{"col":14,"top":"{\"color\":\"black\",\"width\":2}","left":"{\"color\":\"black\",\"width\":2}","bottom":"{\"color\":\"black\",\"width\":2}","row":64,"right":"{\"color\":\"black\",\"width\":2}"}]
,
		//readOnly:true,
		//显示表头下拉菜单 可取 true/false/自定义数组 右键任意单元格触发
		//汉化下拉菜单
		contextMenu: {
			items: {
				'mergeCells':{ name: '合并单元格' , },
				'row_above': { name: '上方添加一行', },
				'row_below': { name: '下方添加一行', },
				'col_left': { name: '左侧添加一列', },
				'col_right': { name: '右侧添加一列', },
				'remove_row': { name: '移除此行', },
				'remove_col': { name: '移除此列', },
				'copy': { name: '复制', },
				'cut': { name: '剪切', },
				'make_read_only': { name: '禁止编辑选中项', },
				'alignment': { },
				'undo': { name: '还原上次操作', },
				'redo': { name: '重复上次动作', },
				'setAlias':{
					name:'设置别名',
					callback:function(){
						if( $(Ccell) != undefined ){
							addAliasDialog();
						}else{
							alert("请先选择单元格...");
						}						
					}
				}
			}
		}	
	});  
	function addAliasDialog(){
		var html = '<div class="alias" style="text-align:center;margin-top:20px;"><label>请输入别名：<input type="text" id="aliasVal" /></label></div>';
		layer.open({
			type: 1,
			btn: ['确认', '取消'],
			shadeClose:true,
			title:"设置别名",
			area: ['420px', '240px'], //宽高
			content: html,
			yes:function(index,layero){
				var val = $("#aliasVal").val();
				var cellMeta = hot.getCellMeta(Crow, Ccol);
				if( val != "" ){
					hot.setCellMeta(Crow, Ccol, "alias", val);
					layer.msg('设置成功', {
					  	icon: 1,
					  	time: 1000 //1秒关闭（如果不配置，默认是3秒）
					}, function(){
					  	console.log(cellMeta);
						layer.close(index);
					}); 
				}else{
					alert("别名不能为空!");
				}				
			},
			cancel:function(index,layero){
			  	layer.close(index);
			},btn2: function(index, layero){
			    layer.confirm('确认取消设置别名吗？', {icon: 3, title:'提示'}, function(index){
				  	layer.close(index);
				},function(index){
					addAliasDialog();
				});
			}
		});
	}

	// 列出全局变量
	var Crow,Ccol,Ccell,valT,selectRange,selectRangeArr = [];
	// 获取所选区域单元格数组 当前高亮
	hot.addHook('afterOnCellMouseDown', function (event, cellCoords) {
	    Crow = cellCoords.row,
	    Ccol = cellCoords.col;
	    selectRangeArr = []; // 所选区域所有单元格数组
	    Ccell = hot.getCell(Crow, Ccol)
	    selectRange = hot.getSelected(); // 获取所选区域范围
	    console.log(selectRange);
	    var txt = hot.getDataAtCell(selectRange[0],selectRange[1]); // 获取所选区域第一个单元格值
        // 单击任意单元格取消编辑状态
	    $(".handsontableInputHolder").css({
	    	"display":"none"
	    });
	    $("#templateCellInput").val(txt);
	    var rangeRowArr = []; // 所选区域行数组
	    var rangeColArr = []; // 所选区域列数组	    
	    for( var i=selectRange[0];i<selectRange[2]+1;i++ ){
	    	rangeRowArr.push(i);
	    }
	    for( var i=selectRange[1];i<selectRange[3]+1;i++ ){
	    	rangeColArr.push(i);
	    }
	    for( var i=0;i<rangeRowArr.length;i++ ){
	    	for( var n=0;n<rangeColArr.length;n++ ){
	    		var selectRangeCell = { row:rangeRowArr[i],col:rangeColArr[n] };
	    		selectRangeArr.push(selectRangeCell);
	    	}
	    }
	    // 添加表格失去焦点时的当前单元格类
	    $("td").removeClass("currentTd"); 
	    for( var i=0;i<selectRangeArr.length;i++ ){				
			var rangeCell = hot.getCell(selectRangeArr[i].row, selectRangeArr[i].col);
			$(rangeCell).addClass("currentTd");				
		}
	});

	// 所选单元格的值和input同步
	$("#templateCellInput").keyup(function(){
		var val = $(this).val();
		if(selectRangeArr.length>0){
			for( var i=0;i<selectRangeArr.length;i++ ){				
				hot.setDataAtCell(selectRangeArr[i].row, selectRangeArr[i].col,val)		
			}
		}		
	});

	$("#example").on("blur", "textarea.handsontableInput", function(e){
		valT = $(this).val();
		hot.setDataAtCell(Crow,Ccol,valT);
	})
	// 修改单元格样式
	$(".btn-group label.btn").click(function(e){
		console.log(e.target);
		var _index = $(this).index();
		var styleType = $(this).parent();
		var StyleClassName = ''; 
		// 修改单元格文本样式
		var toogleSwitch = true;
		if( styleType.hasClass("fontStyle") ){
			var fontClass = "";
			switch(_index){
				case 0 : fontClass = "htBold"; // 加粗
				break;
				case 1 : fontClass = "htItalic"; // 斜体
				break;
				case 2 : fontClass = "htUnderline"; // 下划线
				break;
			}
			StyleClassName = fontClass;
		}
		// 修改单元格对齐方式
		if( styleType.hasClass("alignStyle") ){
			var alignClass = "";
			switch(_index){
				case 0 : alignClass = "htLeft"; // 左对齐
				break;
				case 1 : alignClass = "htCenter"; // 居中对齐
				break;
				case 2 : alignClass = "htRight"; // 右对齐
				break;
				case 3 : alignClass = "htJustify"; // 两端对齐
				break;
			}
			StyleClassName = alignClass;
		}
		// 修改所选区域所有单元格样式并赋予属性
		for( var i=0;i<selectRangeArr.length;i++ ){				
			var rangeCell = hot.getCell(selectRangeArr[i].row, selectRangeArr[i].col);
			var checkMergeCell = $(rangeCell).attr("rowspan");
			$(rangeCell).removeClass("htLeft htCenter htRight htJustify");
			// 定义修改类名 创建对应属性方法
			var setRangeCellClass = function(){
				$(rangeCell).toggleClass(StyleClassName);
				var cellClass = $(rangeCell)[0].className;
				hot.setCellMeta(selectRangeArr[i].row, selectRangeArr[i].col,"cellClass",cellClass);
			}
			if( checkMergeCell != undefined ){
				if( toogleSwitch ){
					setRangeCellClass();
					toogleSwitch = false;
				}else{
					continue;
				}
			}else{
				setRangeCellClass();
			}				
		}
	});
	$(".ColorStyle input").each(function(){
		$(this).colorpicker();
	})
	$(".ColorStyle input").blur(function(){
		var val = $(this).val();
		var _index = $(this).parent().index(); 
		$(this).css("cssText","background:"+val+"!important;color:"+val+"!important;");
		// 定义改变样式方法
		var changeCellStyle = function(){
			if( _index == 0 ){
				$(rangeCell).css({"background":val});
				hot.setCellMeta(selectRangeArr[i].row, selectRangeArr[i].col,"bkColor",val);
			}
			if( _index == 1 ){
				$(rangeCell).css({"color":val});
				hot.setCellMeta(selectRangeArr[i].row, selectRangeArr[i].col,"ftColor",val);
			}
			if( _index == 2 ){
				$(rangeCell).css({"border":"solid 1px "+val});
				hot.setCellMeta(selectRangeArr[i].row, selectRangeArr[i].col,"bdColor",val);
			}
		};
		for( var i=0;i<selectRangeArr.length;i++ ){				
			var rangeCell = hot.getCell(selectRangeArr[i].row, selectRangeArr[i].col);
			var checkMergeCell = $(rangeCell).attr("rowspan");
			if( checkMergeCell != undefined ){
				if( toogleSwitch ){
					changeCellStyle();
					toogleSwitch = false;
				}else{
					continue;
				}
			}else{
				changeCellStyle();
			}				
		}
	});

	//重新加载数据
	$("#loadData").click(function(){
		hot.loadData(data1);
		hot.updateSettings({
			/*mergeCells: [
			  {row: 1, col: 1, rowspan: 3, colspan: 3},
			  {row: 3, col: 4, rowspan: 2, colspan: 2},
			  {row: 5, col: 6, rowspan: 3, colspan: 3},
			  {row: 0, col: 0, rowspan: 1, colspan: 2}
			]*/
		colWidths:[
        86,
        108,
        88,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50,
        50
    ],
	mergeCells:[
        {
            "colspan":2,
            "col":0,
            "rowspan":9,
            "row":3
        },
        {
            "colspan":2,
            "col":0,
            "rowspan":9,
            "row":12
        },
        {
            "colspan":1,
            "col":0,
            "rowspan":6,
            "row":21
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":21
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":22
        },
        {
            "colspan":1,
            "col":1,
            "rowspan":2,
            "row":23
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":25
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":26
        },
        {
            "colspan":1,
            "col":0,
            "rowspan":6,
            "row":27
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":27
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":28
        },
        {
            "colspan":1,
            "col":1,
            "rowspan":2,
            "row":29
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":31
        },
        {
            "colspan":2,
            "col":1,
            "rowspan":1,
            "row":32
        }
    ],cell:[
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":0
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":1
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":2
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":3
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":4
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":5
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":6
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":7
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":8
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":9
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":10
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":11
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":12
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":13
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":14
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":15
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":16
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":17
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":18
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":19
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":20
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":21
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":22
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":23
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":24
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":25
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":26
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":27
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":28
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":29
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":30
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":31
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":32
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":33
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":34
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":35
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":36
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":37
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":38
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":39
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":40
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":41
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":42
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":43
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":44
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":45
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":46
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":47
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":48
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":49
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":50
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":51
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":52
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":53
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":54
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":55
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":56
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":57
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":58
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":59
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":60
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":61
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":62
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":63
        },
        {
            "col":0,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":1,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":2,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":3,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":4,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":5,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":6,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":7,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":8,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":9,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":10,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":11,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":12,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":13,
            "className":"htCenter htMiddle",
            "row":64
        },
        {
            "col":14,
            "className":"htCenter htMiddle",
            "row":64
        }
    ],rowHeights:[
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
		});
	})
})

$(function(){
	$("#example").on("focus", "textarea.handsontableInput", function(e){
		var init = $(this).attr("init");
		if(init)return;		
		$("textarea.handsontableInput").editTips({
            triggerCharacterArr : ['$','@'],
            levelCharacter: '.',
            dropdownWidth:'150px',  
            keyPressAction:function(selectVal,callbacktips){
                var arr_json;
                if( selectVal == "$" ||  selectVal == "@"){
                    arr_json = ["a","ab","$b","bb","a","ab","$b","bb","a","ab","$b","bb"]
                }
                if(selectVal && selectVal.indexOf("$a")== 0){
                    arr_json = ["a","a","a","a"]
                }
                if(selectVal && selectVal.indexOf("$a.")== 0){
                    arr_json = ["b","bb"];
                }
                if(selectVal && selectVal.indexOf("$a.a")== 0){
                    arr_json = ["a.a","a.b","a.c"];
                }
                if(selectVal && selectVal.indexOf("$a.a.")== 0){
                    arr_json = ["b.a","b.b","b.c"];
                }
                if(selectVal && selectVal.indexOf("ab.")== 0){
                    arr_json = ["ab.a","ab.b","ab.c"];
                }
                if(selectVal && selectVal.indexOf("bb.")== 0){
                    arr_json = ["bb.a","bb.b","bb.c"];
                }
                callbacktips(arr_json);
            }           
        });
		
	})
/*	function aa(){
		console.log($("textarea.handsontableInput").val());
	}
	setInterval(aa,500);
		*/
});

