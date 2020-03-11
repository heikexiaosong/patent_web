# patent

项
 - JDK版本： JDK1.8
 - 管理工具: Maven 3.3.9
 - 数据库: SQL-Server
 
 启动步骤
 - 进入项目根目录 
 ```
    cd patent_web
 ``` 
  - 编译项目 
  ```
    mvn clean intall -Dmaven.test.skip=true
  ``` 
  - 启动项目 
  ```
    cd patent
    mvn clean jetty:run
  ``` 
  



