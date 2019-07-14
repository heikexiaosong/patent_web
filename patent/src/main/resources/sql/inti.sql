CREATE DATABASE patent COLLATE Chinese_PRC_Stroke_90_CI_AI;

/*----业务数据脚本----*/ /*----数据表 AUTOINC, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('AUTOINC') and sysstat & 0xf = 3)drop table AUTOINC
GO
create table AUTOINC
(
    AUTOINC_FLID varchar(40) not null ,
    AUTOINC_PREFIX varchar(20) not null ,
    AUTOINC_VALUE int null
)
GO
alter table AUTOINC with nocheck add
    CONSTRAINT DF_AUTOINC_AUTOINC_VALUE default(0) for AUTOINC_VALUE
GO
alter table AUTOINC with nocheck add
    CONSTRAINT PK_AUTOINC PRIMARY KEY CLUSTERED
    (AUTOINC_FLID,AUTOINC_PREFIX) ON [PRIMARY]
GO

/*----数据表 CYGN, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('CYGN') and sysstat & 0xf = 3)drop table CYGN
GO
create table CYGN
(
    CYGN_USERID varchar(10) not null ,
    CYGN_MKID varchar(10) not null ,
    CYGN_COUNT float null
)
GO
alter table CYGN with nocheck add
    CONSTRAINT DF_CYGN_CYGN_COUNT default(0) for CYGN_COUNT
GO
alter table CYGN with nocheck add
    CONSTRAINT PK_CYGN PRIMARY KEY CLUSTERED
    (CYGN_USERID,CYGN_MKID) ON [PRIMARY]
GO

/*----数据表 DBVERSION, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('DBVERSION') and sysstat & 0xf = 3)drop table DBVERSION
GO
create table DBVERSION
(
    DBVERSION_VERSION varchar(20) null ,
    DBVERSION_WHSJ datetime null
)
GO
alter table DBVERSION with nocheck add
    CONSTRAINT DF_DBVERSION_DBVERSION_WHSJ default(0) for DBVERSION_WHSJ
GO


/*----数据表 DBVERSION, 基础平台第一版本*/
/* -- 修改字段: DBVERSION_VERSION varchar(20) null  -> DBVERSION_VERSION int null  -- */
alter table DBVERSION add
    TMP_DBVERSION_VERSION int null
GO
update DBVERSION/* 转换字段数据类型(DIY) */
set TMP_DBVERSION_VERSION = DBVERSION_VERSION
GO

alter table DBVERSION drop column
    DBVERSION_VERSION
GO
alter table DBVERSION add
    DBVERSION_VERSION int null
GO
update DBVERSION/* -- 复制字段数据 -- */
set DBVERSION_VERSION=TMP_DBVERSION_VERSION
GO
alter table DBVERSION drop column
    TMP_DBVERSION_VERSION
GO
alter table DBVERSION add
    CONSTRAINT DF_DBVERSION_DBVERSION_VERSION default(0) for DBVERSION_VERSION
GO


/*----数据表 FZSR, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('FZSR') and sysstat & 0xf = 3)drop table FZSR
GO
create table FZSR
(
    FZSR_ID varchar(40) not null ,
    FZSR_CODE varchar(80) not null ,
    FZSR_NAME nvarchar(40) null ,
    FZSR_YYID varchar(80) null ,
    FZSR_MKID varchar(10) null ,
    FZSR_SQL varchar(4000) null ,
    FZSR_FLID varchar(1) null ,
    FZSR_MUTSEL varchar(1) null ,
    FZSR_BZ nvarchar(250) null ,
    FZSR_WHRID varchar(10) null ,
    FZSR_WHR nvarchar(30) null ,
    FZSR_WHSJ datetime null
)
GO
alter table FZSR with nocheck add
    CONSTRAINT DF_FZSR_FZSR_WHSJ default(0) for FZSR_WHSJ
GO
alter table FZSR with nocheck add
    CONSTRAINT PK_FZSR PRIMARY KEY CLUSTERED
    (FZSR_ID) ON [PRIMARY]
GO

/*----数据表 FZSRSZ, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('FZSRSZ') and sysstat & 0xf = 3)drop table FZSRSZ
GO
create table FZSRSZ
(
    FZSRSZ_ID varchar(40) not null ,
    FZSRSZ_MID varchar(40) null ,
    FZSRSZ_FIELD varchar(50) null ,
    FZSRSZ_WIDTH float null ,
    FZSRSZ_CAPTION nvarchar(30) null ,
    FZSRSZ_XH float null ,
    FZSRSZ_FH varchar(1) null ,
    FZSRSZ_WHRID varchar(10) null ,
    FZSRSZ_WHR nvarchar(30) null ,
    FZSRSZ_WHSJ datetime null
)
GO
alter table FZSRSZ with nocheck add
    CONSTRAINT DF_FZSRSZ_FZSRSZ_WIDTH default(0) for FZSRSZ_WIDTH,
    CONSTRAINT DF_FZSRSZ_FZSRSZ_XH default(0) for FZSRSZ_XH,
    CONSTRAINT DF_FZSRSZ_FZSRSZ_WHSJ default(0) for FZSRSZ_WHSJ
GO
alter table FZSRSZ with nocheck add
    CONSTRAINT PK_FZSRSZ PRIMARY KEY CLUSTERED
    (FZSRSZ_ID) ON [PRIMARY]
GO

/*----数据表 GNMX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('GNMX') and sysstat & 0xf = 3)
drop table GNMX
GO
create table GNMX
(
    GNMX_FMKID varchar(10) not null ,
    GNMX_MKID varchar(10) not null ,
    GNMX_XH float null ,
    GNMX_GNLX varchar(1) null ,
    GNMX_GNBM nvarchar(100) null
)
GO
alter table GNMX with nocheck add
    CONSTRAINT DF_GNMX_GNMX_XH default(0) for GNMX_XH
GO
alter table GNMX with nocheck add
    CONSTRAINT PK_GNMX PRIMARY KEY CLUSTERED
    (GNMX_FMKID,GNMX_MKID) ON [PRIMARY]
GO

/*----数据表 MENUS, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('MENUS') and sysstat & 0xf = 3)drop table MENUS
GO
create table MENUS
(
    MENUS_ID varchar(32) not null ,
    MENUS_FMKID varchar(20) not null ,
    MENUS_MKID varchar(20) not null ,
    MENUS_NAME nvarchar(60) null ,
    MENUS_POSITION int null ,
    MENUS_TYPE varchar(1) null ,
    MENUS_ENVITYPE varchar(1) null ,
    MENUS_ICON text null ,
    MENUS_WHRID varchar(20) null ,
    MENUS_WHR nvarchar(30) null ,
    MENUS_WHSJ datetime null ,
    MENUS_CJRID varchar(20) null ,
    MENUS_CJR nvarchar(30) null ,
    MENUS_CJSJ datetime null
)
GO
alter table MENUS with nocheck add
    CONSTRAINT DF_MENUS_MENUS_POSITION default(0) for MENUS_POSITION,
    CONSTRAINT DF_MENUS_MENUS_WHSJ default(0) for MENUS_WHSJ,
    CONSTRAINT DF_MENUS_MENUS_CJSJ default(0) for MENUS_CJSJ
GO
alter table MENUS with nocheck add
    CONSTRAINT PK_MENUS PRIMARY KEY CLUSTERED
    (MENUS_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_MENUS
    on MENUS (MENUS_FMKID,MENUS_MKID)
GO
/*----数据表 MESSAGE, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('MESSAGE') and sysstat & 0xf = 3)drop table MESSAGE
GO
create table MESSAGE
(
    MESSAGE_ID varchar(40) not null ,
    MESSAGE_TYPE varchar(16) not null ,
    MESSAGE_TITLE nvarchar(128) not null ,
    MESSAGE_BODY nvarchar(1024) not null ,
    MESSAGE_RECEIVERID varchar(32) not null ,
    MESSAGE_RECEIVER varchar(64) not null ,
    MESSAGE_STAT varchar(8) not null ,
    MESSAGE_CJRID varchar(20) null ,
    MESSAGE_CJR nvarchar(30) null
)
GO

alter table MESSAGE with nocheck add
    CONSTRAINT PK_MESSAGE PRIMARY KEY CLUSTERED
    (MESSAGE_ID) ON [PRIMARY]
GO

/*----数据表 MKCZ, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('MKCZ') and sysstat & 0xf = 3)drop table MKCZ
GO
create table MKCZ
(
    MKCZ_MKID varchar(10) not null ,
    MKCZ_CZID varchar(10) not null ,
    MKCZ_CZMC nvarchar(60) null ,
    MKCZ_VALUE varchar(10) null ,
    MKCZ_WHRID varchar(10) null ,
    MKCZ_WHR nvarchar(30) null ,
    MKCZ_WHSJ datetime null
)
GO
alter table MKCZ with nocheck add
    CONSTRAINT DF_MKCZ_MKCZ_WHSJ default(0) for MKCZ_WHSJ
GO
alter table MKCZ with nocheck add
    CONSTRAINT PK_MKCZ PRIMARY KEY CLUSTERED
    (MKCZ_MKID,MKCZ_CZID) ON [PRIMARY]
GO

/*----数据表 MKQX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('MKQX') and sysstat & 0xf = 3)
drop table MKQX
GO
create table MKQX
(
    MKQX_MKID varchar(10) not null ,
    MKQX_USERID varchar(10) not null ,
    MKQX_ROLEID varchar(10) not null ,
    MKQX_CZID varchar(10) not null ,
    MKQX_VALUE varchar(10) null ,
    MKQX_WHRID varchar(10) null ,
    MKQX_WHR nvarchar(30) null ,
    MKQX_WHSJ datetime null
)
GO
alter table MKQX with nocheck add
    CONSTRAINT DF_MKQX_MKQX_WHSJ default(0) for MKQX_WHSJ
GO
alter table MKQX with nocheck add
    CONSTRAINT PK_MKQX PRIMARY KEY CLUSTERED
    (MKQX_MKID,MKQX_USERID,MKQX_ROLEID,MKQX_CZID) ON [PRIMARY]
GO

/*----数据表 ORG, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('ORG') and sysstat & 0xf = 3)
drop table ORG
GO
create table ORG
(
    ORG_ID varchar(40) not null ,
    ORG_BMID varchar(20) null ,
    ORG_BMMC nvarchar(64) null ,
    ORG_FZR nvarchar(30) null ,
    ORG_SHBMID varchar(20) null ,
    ORG_CJM varchar(256) null ,
    ORG_TYBZ varchar(1) null ,
    ORG_TYRQ datetime null ,
    ORG_BZ nvarchar(256) null ,
    ORG_WHRID varchar(20) null ,
    ORG_WHR nvarchar(30) null ,
    ORG_WHSJ datetime null
)
GO
alter table ORG with nocheck add
    CONSTRAINT DF_ORG_ORG_TYRQ default(0) for ORG_TYRQ,
    CONSTRAINT DF_ORG_ORG_WHSJ default(0) for ORG_WHSJ
GO
alter table ORG with nocheck add
    CONSTRAINT PK_ORG PRIMARY KEY CLUSTERED
    (ORG_ID) ON [PRIMARY]
GO

/*----数据表 PRINTCONF, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('PRINTCONF') and sysstat & 0xf = 3)drop table PRINTCONF
GO
create table PRINTCONF
(
    PRINTCONF_ID varchar(32) not null ,
    PRINTCONF_MKID varchar(32) null ,
    PRINTCONF_TYPE varchar(8) null ,
    PRINTCONF_DEFTYPE varchar(8) null ,
    PRINTCONF_ENTITY varchar(128) null
)
GO

alter table PRINTCONF with nocheck add
    CONSTRAINT PK_PRINTCONF PRIMARY KEY CLUSTERED
    (PRINTCONF_ID) ON [PRIMARY]
GO

/*----数据表 PRINTCONF, 基础平台第一版本*/
/* -- 修改字段: PRINTCONF_MKID varchar(32) null  -> PRINTCONF_MKID varchar(20) null  -- */
update PRINTCONF/* -- 缩减字段内容长度(DIY) -- */
  set PRINTCONF_MKID = PRINTCONF_MKID
GO
alter table PRINTCONF alter column
    PRINTCONF_MKID varchar(20) null
GO


/*----数据表 PRINTSTYLE, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('PRINTSTYLE') and sysstat & 0xf = 3)drop table PRINTSTYLE
GO
create table PRINTSTYLE
(
    PRINTSTYLE_ID varchar(40) not null ,
    PRINTSTYLE_MKID varchar(10) null ,
    PRINTSTYLE_XH float null ,
    PRINTSTYLE_MC nvarchar(60) null ,
    PRINTSTYLE_NR text null ,
    PRINTSTYLE_TOOL varchar(1) null ,
    PRINTSTYLE_TYPE varchar(1) null ,
    PRINTSTYLE_TYBZ varchar(1) null ,
    PRINTSTYLE_TYRQ datetime null ,
    PRINTSTYLE_WHRID varchar(10) null ,
    PRINTSTYLE_WHR nvarchar(30) null ,
    PRINTSTYLE_WHSJ datetime null
)
GO
alter table PRINTSTYLE with nocheck add
    CONSTRAINT DF_PRINTSTYLE_PRINTSTYLE_XH default(0) for PRINTSTYLE_XH,
    CONSTRAINT DF_PRINTSTYLE_PRINTSTYLE_TYRQ default(0) for PRINTSTYLE_TYRQ,
    CONSTRAINT DF_PRINTSTYLE_PRINTSTYLE_WHSJ default(0) for PRINTSTYLE_WHSJ
GO
alter table PRINTSTYLE with nocheck add
    CONSTRAINT PK_PRINTSTYLE PRIMARY KEY CLUSTERED
    (PRINTSTYLE_ID) ON [PRIMARY]
GO


/*----数据表 PROFILE, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('PROFILE') and sysstat & 0xf = 3)drop table PROFILE
GO
create table PROFILE
(
    PROFILE_ID varchar(40) not null ,
    PROFILE_UID varchar(20) null ,
    PROFILE_TYPE varchar(64) null ,
    PROFILE_PARAM varchar(1024) null ,
    PROFILE_VALUE varchar(32) null ,
    PROFILE_URL varchar(1024) null ,
    PROFILE_TEXT nvarchar(128) null
)
GO

alter table PROFILE with nocheck add
    CONSTRAINT PK_PROFILE PRIMARY KEY CLUSTERED
    (PROFILE_ID) ON [PRIMARY]
GO

/*----数据表 REG, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('REG') and sysstat & 0xf = 3)drop table REG
GO
create table REG
(
    REG_CNAME nvarchar(100) null ,
    REG_SNO varchar(40) null ,
    REG_LICENSE float null ,
    REG_LDATE datetime null ,
    REG_REGNO1 varchar(15) null ,
    REG_REGNO2 varchar(15) null ,
    REG_REGNO3 varchar(15) null ,
    REG_DBID varchar(20) null
)
GO
alter table REG with nocheck add
    CONSTRAINT DF_REG_REG_LICENSE default(0) for REG_LICENSE,
    CONSTRAINT DF_REG_REG_LDATE default(0) for REG_LDATE
GO


/*----数据表 ROLES, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('ROLES') and sysstat & 0xf = 3)drop table ROLES
GO
create table ROLES
(
    ROLES_ID varchar(40) not null ,
    ROLES_ROLEID varchar(10) not null ,
    ROLES_ROLENAME nvarchar(40) not null ,
    ROLES_TYBZ varchar(1) null ,
    ROLES_TYRQ datetime null ,
    ROLES_BZ nvarchar(250) null ,
    ROLES_WHRID varchar(10) null ,
    ROLES_WHR nvarchar(30) null ,
    ROLES_WHSJ datetime null
)
GO
alter table ROLES with nocheck add
    CONSTRAINT DF_ROLES_ROLES_TYRQ default(0) for ROLES_TYRQ,
    CONSTRAINT DF_ROLES_ROLES_WHSJ default(0) for ROLES_WHSJ
GO
alter table ROLES with nocheck add
    CONSTRAINT PK_ROLES PRIMARY KEY CLUSTERED
    (ROLES_ID) ON [PRIMARY]
GO

/*----数据表 ROLES, 基础平台第一版本*/
/* -- 增加字段: ROLES_TYPE varchar(10) null  -- */
alter table ROLES add
    ROLES_TYPE varchar(10) null
GO
/*----数据表 SJZD, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('SJZD') and sysstat & 0xf = 3)drop table SJZD
GO
create table SJZD
(
    SJZD_BM varchar(20) not null ,
    SJZD_NAME nvarchar(64) null ,
    SJZD_SJXID varchar(20) null ,
    SJZD_SJXMC nvarchar(64) null ,
    SJZD_ZJM varchar(128) null ,
    SJZD_TYBZ varchar(1) null ,
    SJZD_TYRQ datetime null ,
    SJZD_BZ nvarchar(255) null ,
    SJZD_WHRID varchar(20) null ,
    SJZD_WHR nvarchar(64) null ,
    SJZD_WHSJ datetime null
)
GO
alter table SJZD with nocheck add
    CONSTRAINT DF_SJZD_SJZD_TYRQ default(0) for SJZD_TYRQ,
    CONSTRAINT DF_SJZD_SJZD_WHSJ default(0) for SJZD_WHSJ
GO
alter table SJZD with nocheck add
    CONSTRAINT PK_SJZD PRIMARY KEY CLUSTERED
    (SJZD_BM) ON [PRIMARY]
GO

/*----数据表 SJZDX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('SJZDX') and sysstat & 0xf = 3)drop table SJZDX
GO
create table SJZDX
(
    SJZDX_ID varchar(40) not null ,
    SJZDX_CODE varchar(20) null ,
    SJZDX_NAME nvarchar(64) null
)
GO

alter table SJZDX with nocheck add
    CONSTRAINT PK_SJZDX PRIMARY KEY CLUSTERED
    (SJZDX_ID) ON [PRIMARY]
GO

/*----数据表 USERROLES, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('USERROLES') and sysstat & 0xf = 3)drop table USERROLES
GO
create table USERROLES
(
    USERROLES_USERID varchar(10) not null ,
    USERROLES_ROLEID varchar(10) not null ,
    USERROLES_WHRID varchar(10) null ,
    USERROLES_WHR nvarchar(30) null ,
    USERROLES_WHSJ datetime null
)
GO
alter table USERROLES with nocheck add
    CONSTRAINT DF_USERROLES_USERROLES_WHSJ default(0) for USERROLES_WHSJ
GO
alter table USERROLES with nocheck add
    CONSTRAINT PK_USERROLES PRIMARY KEY CLUSTERED
    (USERROLES_USERID,USERROLES_ROLEID) ON [PRIMARY]
GO

/*----数据表 USERS, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('USERS') and sysstat & 0xf = 3)drop table USERS
GO
create table USERS
(
    USERS_ID varchar(40) not null ,
    USERS_USERID varchar(10) not null ,
    USERS_USERNAME nvarchar(30) not null ,
    USERS_PASSWORD varchar(40) null ,
    USERS_ZJM varchar(10) null ,
    USERS_BMID varchar(20) null ,
    USERS_PHONE varchar(15) null ,
    USERS_EMAIL varchar(40) null ,
    USERS_TYBZ varchar(1) null ,
    USERS_TYRQ datetime null ,
    USERS_BZ nvarchar(250) null ,
    USERS_SUPERUSER varchar(1) null ,
    USERS_WHRID varchar(10) null ,
    USERS_WHR nvarchar(30) null ,
    USERS_WHSJ datetime null
)
GO
alter table USERS with nocheck add
    CONSTRAINT DF_USERS_USERS_TYRQ default(0) for USERS_TYRQ,
    CONSTRAINT DF_USERS_USERS_WHSJ default(0) for USERS_WHSJ
GO
alter table USERS with nocheck add
    CONSTRAINT PK_USERS PRIMARY KEY CLUSTERED
    (USERS_ID) ON [PRIMARY]
GO

/*----数据表 WFAWT, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFAWT') and sysstat & 0xf = 3)drop table WFAWT
GO
create table WFAWT
(
    WFAWT_INSTID varchar(40) not null ,
    WFAWT_WUSERID varchar(10) not null ,
    WFAWT_WFID varchar(20) null ,
    WFAWT_NODEID varchar(10) null ,
    WFAWT_NODENAME nvarchar(40) null ,
    WFAWT_PERNODEID varchar(10) null ,
    WFAWT_PRENODENAME nvarchar(40) null ,
    WFAWT_PREUSERID varchar(10) null ,
    WFAWT_TITLE nvarchar(200) null ,
    WFAWT_CONTENT nvarchar(500) null ,
    WFAWT_ACTION varchar(1) null ,
    WFAWT_ACTIONTIME datetime null
)
GO
alter table WFAWT with nocheck add
    CONSTRAINT DF_WFAWT_WFAWT_ACTIONTIME default(0) for WFAWT_ACTIONTIME
GO
alter table WFAWT with nocheck add
    CONSTRAINT PK_WFAWT PRIMARY KEY CLUSTERED
    (WFAWT_INSTID,WFAWT_WUSERID) ON [PRIMARY]
GO

/*----数据表 WFDEF, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFDEF') and sysstat & 0xf = 3)drop table WFDEF
GO
create table WFDEF
(
    WFDEF_WFID varchar(20) not null ,
    WFDEF_WFNAME nvarchar(100) null ,
    WFDEF_SM nvarchar(255) null ,
    WFDEF_CONTENT text null ,
    WFDEF_ZTLIST nvarchar(200) null ,
    WFDEF_MKID varchar(20) null
)
GO

alter table WFDEF with nocheck add
    CONSTRAINT PK_WFDEF PRIMARY KEY CLUSTERED
    (WFDEF_WFID) ON [PRIMARY]
GO

/*----数据表 WFINST, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFINST') and sysstat & 0xf = 3)drop table WFINST
GO
create table WFINST
(
    WFINST_INSTID varchar(40) not null ,
    WFINST_WFID varchar(20) null ,
    WFINST_CREATEUSERID varchar(10) null ,
    WFINST_NODEID varchar(10) null ,
    WFINST_NODENAME nvarchar(40) null ,
    WFINST_WUSERID varchar(1000) null ,
    WFINST_WUSERNAME nvarchar(1000) null ,
    WFINST_HUSERID varchar(1000) null ,
    WFINST_HUSERNAME nvarchar(1000) null ,
    WFINST_LOCKED varchar(1) null ,
    WFINST_TITLE nvarchar(100) null ,
    WFINST_URL varchar(100) null
)
GO

alter table WFINST with nocheck add
    CONSTRAINT PK_WFINST PRIMARY KEY CLUSTERED
    (WFINST_INSTID) ON [PRIMARY]
GO

/*----数据表 WFINST, 基础平台第一版本*/
/* -- 主键改变，删除原主键定义  -- */
alter table WFINST drop
    CONSTRAINT PK_WFINST
GO

/* -- 修改字段: WFINST_INSTID varchar(40) not null  -> WFINST_INSTID varchar(32) not null  -- */
update WFINST/* -- 缩减字段内容长度(DIY) -- */
  set WFINST_INSTID = WFINST_INSTID
GO
alter table WFINST alter column
    WFINST_INSTID varchar(32) not null
GO
/* -- 修改字段: WFINST_WFID varchar(20) null  -> WFINST_WFID varchar(40) null  -- */
alter table WFINST alter column
    WFINST_WFID varchar(40) null
GO
/* -- 修改字段: WFINST_CREATEUSERID varchar(10) null  -> WFINST_CREATEUSERID varchar(40) null  -- */
alter table WFINST alter column
    WFINST_CREATEUSERID varchar(40) null
GO
/* -- 修改字段: WFINST_NODEID varchar(10) null  -> WFINST_NODEID varchar(20) null  -- */
alter table WFINST alter column
    WFINST_NODEID varchar(20) null
GO
/* -- 修改字段: WFINST_NODENAME varchar(40) null  -> WFINST_NODENAME varchar(60) null  -- */
alter table WFINST alter column
    WFINST_NODENAME nvarchar(60) null
GO
/* -- 修改字段: WFINST_WUSERID varchar(1000) null  -> WFINST_WUSERID varchar(1024) null  -- */
alter table WFINST alter column
    WFINST_WUSERID varchar(1024) null
GO
/* -- 修改字段: WFINST_WUSERNAME varchar(1000) null  -> WFINST_WUSERNAME varchar(1024) null  -- */
alter table WFINST alter column
    WFINST_WUSERNAME nvarchar(1024) null
GO
/* -- 修改字段: WFINST_HUSERID varchar(1000) null  -> WFINST_HUSERID varchar(1024) null  -- */
alter table WFINST alter column
    WFINST_HUSERID varchar(1024) null
GO
/* -- 修改字段: WFINST_HUSERNAME varchar(1000) null  -> WFINST_HUSERNAME varchar(1024) null  -- */
alter table WFINST alter column
    WFINST_HUSERNAME nvarchar(1024) null
GO
/* -- 修改字段: WFINST_TITLE varchar(100) null  -> WFINST_TITLE varchar(128) null  -- */
alter table WFINST alter column
    WFINST_TITLE nvarchar(128) null
GO


/* -- 创建主键约束  -- */
alter table WFINST with nocheck add
    CONSTRAINT PK_WFINST PRIMARY KEY CLUSTERED
    (WFINST_INSTID) ON [PRIMARY]
GO
/*----数据表 WFLCSP, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFLCSP') and sysstat & 0xf = 3)drop table WFLCSP
GO
create table WFLCSP
(
    WFLCSP_ID varchar(40) not null ,
    WFLCSP_LCID varchar(40) not null ,
    WFLCSP_LCMC nvarchar(60) null ,
    WFLCSP_SPRID varchar(20) null ,
    WFLCSP_PID varchar(40) null ,
    WFLCSP_BZ nvarchar(250) null ,
    WFLCSP_WHRID varchar(20) null ,
    WFLCSP_WHR nvarchar(30) null ,
    WFLCSP_WHSJ datetime null ,
    WFLCSP_CJRID varchar(20) null ,
    WFLCSP_CJR nvarchar(30) null ,
    WFLCSP_CJSJ datetime null
)
GO
alter table WFLCSP with nocheck add
    CONSTRAINT DF_WFLCSP_WFLCSP_WHSJ default(0) for WFLCSP_WHSJ,
    CONSTRAINT DF_WFLCSP_WFLCSP_CJSJ default(0) for WFLCSP_CJSJ
GO
alter table WFLCSP with nocheck add
    CONSTRAINT PK_WFLCSP PRIMARY KEY CLUSTERED
    (WFLCSP_ID) ON [PRIMARY]
GO

/*----数据表 WFLOG, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFLOG') and sysstat & 0xf = 3)drop table WFLOG
GO
create table WFLOG
(
    WFLOG_ID varchar(20) not null ,
    WFLOG_WFID varchar(20) null ,
    WFLOG_INSTID varchar(40) null ,
    WFLOG_NODEID varchar(10) null ,
    WFLOG_NODENAME nvarchar(40) null ,
    WFLOG_WUSERID varchar(1000) null ,
    WFLOG_WUSERNAME nvarchar(1000) null ,
    WFLOG_NEXTNODEID varchar(10) null ,
    WFLOG_NEXTNODENAME nvarchar(40) null ,
    WFLOG_NEXTUSERID varchar(1000) null ,
    WFLOG_NEXTUSERNAME nvarchar(1000) null ,
    WFLOG_ACTION varchar(1) null ,
    WFLOG_ACTIONUSERID varchar(10) null ,
    WFLOG_ACTIONUSERNAME nvarchar(10) null ,
    WFLOG_ACTIONTIME datetime null ,
    WFLOG_COMMENT nvarchar(1000) null
)
GO
alter table WFLOG with nocheck add
    CONSTRAINT DF_WFLOG_WFLOG_ACTIONTIME default(0) for WFLOG_ACTIONTIME
GO
alter table WFLOG with nocheck add
    CONSTRAINT PK_WFLOG PRIMARY KEY CLUSTERED
    (WFLOG_ID) ON [PRIMARY]
GO

/*----数据表 WFVER, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('WFVER') and sysstat & 0xf = 3)drop table WFVER
GO
create table WFVER
(
    WFVER_ID varchar(40) not null ,
    WFVER_WFID varchar(40) not null ,
    WFVER_VERS int not null ,
    WFVER_CONTENT text null ,
    WFVER_ZTLIST varchar(256) null ,
    WFVER_MKID varchar(32) null ,
    WFVER_BZ nvarchar(250) null ,
    WFVER_WHRID varchar(20) null ,
    WFVER_WHR nvarchar(30) null ,
    WFVER_WHSJ datetime null
)
GO
alter table WFVER with nocheck add
    CONSTRAINT DF_WFVER_WFVER_VERS default(0) for WFVER_VERS,
    CONSTRAINT DF_WFVER_WFVER_WHSJ default(0) for WFVER_WHSJ
GO
alter table WFVER with nocheck add
    CONSTRAINT PK_WFVER PRIMARY KEY CLUSTERED
    (WFVER_ID) ON [PRIMARY]
GO

/*----数据表 XTCS, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('XTCS') and sysstat & 0xf = 3)drop table XTCS
GO
create table XTCS
(
    XTCS_CSID varchar(10) not null ,
    XTCS_CSMC nvarchar(100) not null ,
    XTCS_CSLX varchar(1) not null ,
    XTCS_CSSM nvarchar(1000) null ,
    XTCS_ZLX varchar(1) null ,
    XTCS_ZY nvarchar(2000) null ,
    XTCS_QSZ nvarchar(255) null ,
    XTCS_QSZSM nvarchar(255) null ,
    XTCS_YXY varchar(2) null ,
    XTCS_ZJID varchar(10) null
)
GO

alter table XTCS with nocheck add
    CONSTRAINT PK_XTCS PRIMARY KEY CLUSTERED
    (XTCS_CSID) ON [PRIMARY]
GO

/*----数据表 XTCSFL, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('XTCSFL') and sysstat & 0xf = 3)drop table XTCSFL
GO
create table XTCSFL
(
    XTCSFL_FLID varchar(1) not null ,
    XTCSFL_FLMC nvarchar(100) null ,
    XTCSFL_XH int null ,
    XTCSFL_WHRID varchar(10) null ,
    XTCSFL_WHR nvarchar(30) null ,
    XTCSFL_WHSJ datetime null
)
GO
alter table XTCSFL with nocheck add
    CONSTRAINT DF_XTCSFL_XTCSFL_XH default(0) for XTCSFL_XH,
    CONSTRAINT DF_XTCSFL_XTCSFL_WHSJ default(0) for XTCSFL_WHSJ
GO
alter table XTCSFL with nocheck add
    CONSTRAINT PK_XTCSFL PRIMARY KEY CLUSTERED
    (XTCSFL_FLID) ON [PRIMARY]
GO

/*----数据表 XTCSSZ, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('XTCSSZ') and sysstat & 0xf = 3)
drop table XTCSSZ
GO
create table XTCSSZ
(
    XTCSSZ_CSID varchar(10) not null ,
    XTCSSZ_ROLEID varchar(10) not null ,
    XTCSSZ_USERID varchar(10) not null ,
    XTCSSZ_YXY varchar(10) not null ,
    XTCSSZ_CSZ nvarchar(1000) null ,
    XTCSSZ_CSZSM nvarchar(1000) null ,
    XTCSSZ_WHRID varchar(10) null ,
    XTCSSZ_WHR nvarchar(30) null ,
    XTCSSZ_WHSJ datetime null
)
GO
alter table XTCSSZ with nocheck add
    CONSTRAINT DF_XTCSSZ_XTCSSZ_WHSJ default(0) for XTCSSZ_WHSJ
GO
alter table XTCSSZ with nocheck add
    CONSTRAINT PK_XTCSSZ PRIMARY KEY CLUSTERED
    (XTCSSZ_CSID,XTCSSZ_ROLEID,XTCSSZ_USERID,XTCSSZ_YXY) ON [PRIMARY]
GO

/*----数据表 YHQX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('YHQX') and sysstat & 0xf = 3)drop table YHQX
GO
create table YHQX
(
    YHQX_ROLEID varchar(10) not null ,
    YHQX_USERID varchar(10) not null ,
    YHQX_MKID varchar(10) not null
)
GO

alter table YHQX with nocheck add
    CONSTRAINT PK_YHQX PRIMARY KEY CLUSTERED
    (YHQX_ROLEID,YHQX_USERID,YHQX_MKID) ON [PRIMARY]
GO

/*----数据表 YYMK, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('YYMK') and sysstat & 0xf = 3)drop table YYMK
GO
create table YYMK
(
    YYMK_MKID varchar(10) not null ,
    YYMK_ZJID varchar(10) null ,
    YYMK_FMKID varchar(10) not null ,
    YYMK_MKMC nvarchar(100) not null ,
    YYMK_ALIAS nvarchar(100) null ,
    YYMK_FLID varchar(1) not null ,
    YYMK_PAGE varchar(1) null ,
    YYMK_ZJM varchar(10) null ,
    YYMK_URL varchar(60) null ,
    YYMK_TYBZ varchar(1) null ,
    YYMK_TYRQ datetime null ,
    YYMK_ZDY varchar(1) null ,
    YYMK_WHRID varchar(10) null ,
    YYMK_WHR nvarchar(30) null ,
    YYMK_WHSJ datetime null ,
    YYMK_GNLX varchar(10) null ,
    YYMK_YXCS varchar(250) null
)
GO
alter table YYMK with nocheck add
    CONSTRAINT DF_YYMK_YYMK_TYRQ default(0) for YYMK_TYRQ,
    CONSTRAINT DF_YYMK_YYMK_WHSJ default(0) for YYMK_WHSJ
GO
alter table YYMK with nocheck add
    CONSTRAINT PK_YYMK PRIMARY KEY CLUSTERED
    (YYMK_MKID) ON [PRIMARY]
GO

/*----数据表 YYMK, 基础平台第一版本*/
/* -- 增加字段: YYMK_POSITION int not null  -- */
alter table YYMK add
    YYMK_POSITION int null
GO
alter table YYMK add
    CONSTRAINT DF_YYMK_YYMK_POSITION default(0) for YYMK_POSITION
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */update YYMK                    /* 替换已有记录空值 */
  set YYMK_POSITION = 0
where YYMK_POSITION is null
GO
alter table YYMK alter column
    YYMK_POSITION int not null
GO


/*----数据表 YYZJ, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('YYZJ') and sysstat & 0xf = 3)drop table YYZJ
GO
create table YYZJ
(
    YYZJ_ZJID varchar(10) not null ,
    YYZJ_ZJMC nvarchar(40) not null ,
    YYZJ_ZJM varchar(10) null ,
    YYZJ_REG varchar(1) null ,
    YYZJ_VERSION varchar(20) not null ,
    YYZJ_WHRID varchar(10) null ,
    YYZJ_WHR nvarchar(30) null ,
    YYZJ_WHSJ datetime null
)
GO
alter table YYZJ with nocheck add
    CONSTRAINT DF_YYZJ_YYZJ_WHSJ default(0) for YYZJ_WHSJ
GO
alter table YYZJ with nocheck add
    CONSTRAINT PK_YYZJ PRIMARY KEY CLUSTERED
    (YYZJ_ZJID) ON [PRIMARY]
GO

/*----数据表 ZDYCX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('ZDYCX') and sysstat & 0xf = 3)drop table ZDYCX
GO
create table ZDYCX
(
    ZDYCX_ID varchar(40) not null ,
    ZDYCX_CXID varchar(20) null ,
    ZDYCX_CXMC nvarchar(64) null ,
    ZDYCX_SQL text null ,
    ZDYCX_WHRID varchar(20) null ,
    ZDYCX_WHR nvarchar(64) null ,
    ZDYCX_WHSJ datetime null
)
GO
alter table ZDYCX with nocheck add
    CONSTRAINT DF_ZDYCX_ZDYCX_WHSJ default(0) for ZDYCX_WHSJ
GO
alter table ZDYCX with nocheck add
    CONSTRAINT PK_ZDYCX PRIMARY KEY CLUSTERED
    (ZDYCX_ID) ON [PRIMARY]
GO

/*----数据表 ZDYCXMX, 基础平台第一版本*/
if exists (select * from dbo.sysobjects where id = object_id('ZDYCXMX') and sysstat & 0xf = 3)drop table ZDYCXMX
GO
create table ZDYCXMX
(
    ZDYCXMX_ID varchar(40) not null ,
    ZDYCXMX_CXID varchar(20) null ,
    ZDYCXMX_XH int null ,
    ZDYCXMX_FIELD varchar(64) null ,
    ZDYCXMX_TITLE nvarchar(64) null
)
GO
alter table ZDYCXMX with nocheck add
    CONSTRAINT DF_ZDYCXMX_ZDYCXMX_XH default(0) for ZDYCXMX_XH
GO
alter table ZDYCXMX with nocheck add
    CONSTRAINT PK_ZDYCXMX PRIMARY KEY CLUSTERED
    (ZDYCXMX_ID) ON [PRIMARY]
GO

/*----数据 GNMX, 基础平台第一版本*/
insert into GNMX(GNMX_FMKID, GNMX_MKID, GNMX_XH,GNMX_GNLX,GNMX_GNBM)
values('0', '101000000', 0,null,null)
GO
insert into GNMX(GNMX_FMKID, GNMX_MKID, GNMX_XH,GNMX_GNLX,GNMX_GNBM)
values('101000000', '101000100', 0,null,null)
GO
insert into GNMX(GNMX_FMKID, GNMX_MKID, GNMX_XH,GNMX_GNLX,GNMX_GNBM)
values('101000000', '101000900', 1000,'C','应用组件')
GO
insert into GNMX(GNMX_FMKID, GNMX_MKID, GNMX_XH,GNMX_GNLX,GNMX_GNBM)
values('101000000', '101009900',1000,'C','首页')
GO








/*----数据 MENUS, 基础平台第一版本*/
insert into MENUS(MENUS_ID, MENUS_FMKID, MENUS_MKID, MENUS_NAME,
	MENUS_POSITION, MENUS_TYPE, MENUS_WHRID, MENUS_WHR, MENUS_WHSJ,
	MENUS_CJRID, MENUS_CJR, MENUS_CJSJ)
values(replace(newid(), '-', ''), '0', '101000000', '系统管理',
  0, 'C', 'SUPERUSER', '超级用户', getdate(),
  'SUPERUSER', '超级用户', getdate())
GO
insert into MENUS(MENUS_ID, MENUS_FMKID, MENUS_MKID, MENUS_NAME,
	MENUS_POSITION, MENUS_TYPE, MENUS_WHRID, MENUS_WHR, MENUS_WHSJ,
	MENUS_CJRID, MENUS_CJR, MENUS_CJSJ)
values(replace(newid(), '-', ''), '101000000', '101000100', '用户管理',
  0, 'F', 'SUPERUSER', '超级用户', getdate(),
  'SUPERUSER', '超级用户', getdate())
GO
insert into MENUS(MENUS_ID, MENUS_FMKID, MENUS_MKID, MENUS_NAME,
	MENUS_POSITION, MENUS_TYPE, MENUS_WHRID, MENUS_WHR, MENUS_WHSJ,
	MENUS_CJRID, MENUS_CJR, MENUS_CJSJ)
values(replace(newid(), '-', ''), '101000000', '101000900', '应用组件',
  0, 'F', 'SUPERUSER', '超级用户', getdate(),
  'SUPERUSER', '超级用户', getdate())
GO
insert into MENUS(MENUS_ID, MENUS_FMKID, MENUS_MKID, MENUS_NAME,
	MENUS_POSITION, MENUS_TYPE, MENUS_WHRID, MENUS_WHR, MENUS_WHSJ,
	MENUS_CJRID, MENUS_CJR, MENUS_CJSJ)
values(replace(newid(), '-', ''), '101000000', '101009900', '首页',
  0, 'F', 'SUPERUSER', '超级用户', getdate(),
  'SUPERUSER', '超级用户', getdate())
GO
/*----数据 USERS, 基础平台第一版本*/
insert into USERS(USERS_ID, USERS_USERID, USERS_USERNAME, USERS_PASSWORD,
  USERS_ZJM, USERS_TYBZ, USERS_SUPERUSER, USERS_WHRID, USERS_WHR, USERS_WHSJ)
values('SUPERUSER', 'SUPERUSER', '超级用户', 'a734b9713bff86c8b53d98e17c78198b',
  'CJYH', 'N', 'Y', 'SUPERUSER', '超级用户', getdate())
GO



/*----数据 WFVER, 基础平台第一版本*/
/* -- 处理历史数据 -- */
insert into WFVER(
    WFVER_ID, WFVER_WFID, WFVER_VERS, WFVER_CONTENT, WFVER_ZTLIST,
    WFVER_MKID, WFVER_BZ, WFVER_WHRID, WFVER_WHR,WFVER_WHSJ
)
select WFDEF_WFID, WFDEF_WFID, 1, WFDEF_CONTENT, WFDEF_ZTLIST,
  WFDEF_MKID, '', 'SUPERUSER', '超级用户', GETDATE()
from WFDEF
where 1 = 1
GO
/*----数据 XTCS, 基础平台第一版本*/
insert into XTCS(XTCS_CSID, XTCS_CSMC, XTCS_CSLX, XTCS_CSSM, XTCS_ZLX,
  XTCS_ZY, XTCS_QSZ, XTCS_QSZSM, XTCS_YXY, XTCS_ZJID)
values('FILES001', '文件存储方式', 'S', '文档附件在服务器上的存储方式', 'S',
  '1:服务器本地存储', '1', '', '', '101000000')
GO
insert into XTCS(XTCS_CSID, XTCS_CSMC, XTCS_CSLX, XTCS_CSSM, XTCS_ZLX,
  XTCS_ZY, XTCS_QSZ, XTCS_QSZSM, XTCS_YXY, XTCS_ZJID)
values('FILES002', '文档存储路径', 'S', '文档附件在服务器上的存储路径', 'S',
  '', '', '', '', '101000000')
GO
/*----数据 XTCSFL, 基础平台第一版本*/
insert into XTCSFL(XTCSFL_FLID, XTCSFL_FLMC, XTCSFL_XH, XTCSFL_WHRID, XTCSFL_WHR, XTCSFL_WHSJ)
values('U', '用户配置参数', 1, 'SUPERUSER', '超级用户', GETDATE())
GO
insert into XTCSFL(XTCSFL_FLID, XTCSFL_FLMC, XTCSFL_XH, XTCSFL_WHRID, XTCSFL_WHR, XTCSFL_WHSJ)
values('S', '系统配置参数', 2, 'SUPERUSER', '超级用户', GETDATE())
GO
insert into XTCSFL(XTCSFL_FLID, XTCSFL_FLMC, XTCSFL_XH, XTCSFL_WHRID, XTCSFL_WHR, XTCSFL_WHSJ)
values('B', '业务配置参数', 3, 'SUPERUSER', '超级用户', GETDATE())
GO
insert into XTCSFL(XTCSFL_FLID, XTCSFL_FLMC, XTCSFL_XH, XTCSFL_WHRID, XTCSFL_WHR, XTCSFL_WHSJ)
values('C', '编码格式参数', 4, 'SUPERUSER', '超级用户', GETDATE())
GO
/*----数据 YYMK, 基础平台第一版本*/
insert into YYMK(YYMK_ZJID, YYMK_MKID, YYMK_FMKID, YYMK_MKMC, YYMK_ZJM, YYMK_FLID, YYMK_PAGE,
  YYMK_URL, YYMK_TYBZ, YYMK_TYRQ, YYMK_ZDY, YYMK_WHRID, YYMK_WHR, YYMK_WHSJ)
values('101000000', '101000000', '0', '控制中心', 'KZZX', 'F', 'N',
  '', 'N', NULL, 'N', 'SUPERUSER', '超级用户', GETDATE())
GO
insert into YYMK(YYMK_ZJID, YYMK_MKID, YYMK_FMKID, YYMK_MKMC, YYMK_ZJM, YYMK_FLID, YYMK_PAGE,
  YYMK_URL, YYMK_TYBZ, YYMK_TYRQ, YYMK_ZDY, YYMK_WHRID, YYMK_WHR, YYMK_WHSJ)
values('101000000', '1010001010', '101000000', '用户管理', 'YHGL', 'F', 'E',
  'kzzx/user/index.html', 'N', NULL, 'N', 'SUPERUSER', '超级用户', GETDATE())
GO
insert into YYMK(YYMK_ZJID, YYMK_MKID, YYMK_FMKID, YYMK_MKMC, YYMK_ZJM, YYMK_FLID, YYMK_PAGE,
  YYMK_URL, YYMK_TYBZ, YYMK_TYRQ, YYMK_ZDY, YYMK_WHRID, YYMK_WHR, YYMK_WHSJ)
values('101000000', '101000900', '101000000', '应用组件', 'YYZJ', 'F', 'Q',
  'kzzx/yyzj/index.html', 'N', NULL, 'N', 'SUPERUSER', '超级用户', GETDATE())
GO
insert into YYMK(YYMK_ZJID, YYMK_MKID, YYMK_FMKID, YYMK_MKMC, YYMK_ZJM, YYMK_FLID, YYMK_PAGE,
  YYMK_URL, YYMK_TYBZ, YYMK_TYRQ, YYMK_ZDY, YYMK_WHRID, YYMK_WHR, YYMK_WHSJ)
values('101000000', '101009900', '101000000', '首页', 'Navigator', 'H', 'Q',
  'kzzx/navigator/index.html', 'N', NULL, 'N', 'SUPERUSER', '超级用户', GETDATE())
GO



/*----数据 YYZJ, 基础平台第一版本*/
insert into YYZJ(YYZJ_ZJID, YYZJ_ZJMC, YYZJ_ZJM, YYZJ_VERSION, YYZJ_WHRID, YYZJ_WHR, YYZJ_WHSJ)
values('101000000', '系统管理', 'KZZX', '1.0', 'SUPERUSER', '超级用户', GETDATE())
GO
/*----数据 DBVERSION, 基础平台第一版本*/
 insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(1, getdate())
GO

/*----业务数据脚本----*/ /*----数据表 FZSR, 增加创建人信息*/
/* -- 增加字段: FZSR_CJRID varchar(20) null  -- */
alter table FZSR add
  FZSR_CJRID varchar(20) null
GO
/* -- 增加字段: FZSR_CJR varchar(30) null  -- */
alter table FZSR add
  FZSR_CJR nvarchar(30) null
GO
/* -- 增加字段: FZSR_CJSJ datetime null  -- */
alter table FZSR add
  FZSR_CJSJ datetime null
GO
alter table FZSR add
  CONSTRAINT DF_FZSR_FZSR_CJSJ default(0) for FZSR_CJSJ
GO
/* -- 增加字段: FZSR_SYSVERSION int null  -- */
alter table FZSR add
  FZSR_SYSVERSION int null
GO
alter table FZSR add
  CONSTRAINT DF_FZSR_FZSR_SYSVERSION default(0) for FZSR_SYSVERSION
GO


/*----数据表 FZSRSZ, 增加创建人信息*/
/* -- 增加字段: FZSRSZ_CJRID varchar(20) null  -- */
alter table FZSRSZ add
  FZSRSZ_CJRID varchar(20) null
GO
/* -- 增加字段: FZSRSZ_CJR varchar(30) null  -- */
alter table FZSRSZ add
  FZSRSZ_CJR nvarchar(30) null
GO
/* -- 增加字段: FZSRSZ_CJSJ datetime null  -- */
alter table FZSRSZ add
  FZSRSZ_CJSJ datetime null
GO
alter table FZSRSZ add
  CONSTRAINT DF_FZSRSZ_FZSRSZ_CJSJ default(0) for FZSRSZ_CJSJ
GO
/* -- 增加字段: FZSRSZ_SYSVERSION int null  -- */
alter table FZSRSZ add
  FZSRSZ_SYSVERSION int null
GO
alter table FZSRSZ add
  CONSTRAINT DF_FZSRSZ_FZSRSZ_SYSVERSION default(0) for FZSRSZ_SYSVERSION
GO


/*----数据表 MENUS, 增加创建人信息*/
/* -- 增加字段: MENUS_SYSVERSION int null  -- */
alter table MENUS add
  MENUS_SYSVERSION int null
GO
alter table MENUS add
  CONSTRAINT DF_MENUS_MENUS_SYSVERSION default(0) for MENUS_SYSVERSION
GO


/*----数据表 MESSAGE, 增加创建人信息*/
/* -- 增加字段: MESSAGE_CJSJ datetime null  -- */
alter table MESSAGE add
  MESSAGE_CJSJ datetime null
GO
alter table MESSAGE add
  CONSTRAINT DF_MESSAGE_MESSAGE_CJSJ default(0) for MESSAGE_CJSJ
GO


/*----数据表 MKCZ, 增加创建人信息*/
/* -- 增加字段: MKCZ_CJRID varchar(20) null  -- */
alter table MKCZ add
  MKCZ_CJRID varchar(20) null
GO
/* -- 增加字段: MKCZ_CJR varchar(30) null  -- */
alter table MKCZ add
  MKCZ_CJR nvarchar(30) null
GO
/* -- 增加字段: MKCZ_CJSJ datetime null  -- */
alter table MKCZ add
  MKCZ_CJSJ datetime null
GO
alter table MKCZ add
  CONSTRAINT DF_MKCZ_MKCZ_CJSJ default(0) for MKCZ_CJSJ
GO

/*----数据表 MKQX, 增加创建人信息*/
/* -- 增加字段: MKQX_CJRID varchar(20) null  -- */
alter table MKQX add
  MKQX_CJRID varchar(20) null
GO
/* -- 增加字段: MKQX_CJR varchar(30) null  -- */
alter table MKQX add
  MKQX_CJR nvarchar(30) null
GO
/* -- 增加字段: MKQX_CJSJ datetime null  -- */
alter table MKQX add
  MKQX_CJSJ datetime null
GO
alter table MKQX add
  CONSTRAINT DF_MKQX_MKQX_CJSJ default(0) for MKQX_CJSJ
GO

/* -- 修改字段: MKQX_WHRID varchar(10) null  -> MKQX_WHRID varchar(20) null  -- */
alter table MKQX alter column
  MKQX_WHRID varchar(20) null
GO


/*----数据表 ORG, 增加创建人信息*/
/* -- 增加字段: ORG_CJRID varchar(20) null  -- */
alter table ORG add
  ORG_CJRID varchar(20) null
GO
/* -- 增加字段: ORG_CJR varchar(30) null  -- */
alter table ORG add
  ORG_CJR nvarchar(30) null
GO
/* -- 增加字段: ORG_CJSJ datetime null  -- */
alter table ORG add
  ORG_CJSJ datetime null
GO
alter table ORG add
  CONSTRAINT DF_ORG_ORG_CJSJ default(0) for ORG_CJSJ
GO
/* -- 增加字段: ORG_SYSVERSION int null  -- */
alter table ORG add
  ORG_SYSVERSION int null
GO
alter table ORG add
  CONSTRAINT DF_ORG_ORG_SYSVERSION default(0) for ORG_SYSVERSION
GO


/*----数据表 PRINTCONF, 增加创建人信息*/
/* -- 增加字段: PRINTCONF_URL varchar(64) null  -- */
alter table PRINTCONF add
  PRINTCONF_URL varchar(64) null
GO


/*----数据表 PRINTSTYLE, 增加创建人信息*/
/* -- 增加字段: PRINTSTYLE_CJRID varchar(20) null  -- */
alter table PRINTSTYLE add
  PRINTSTYLE_CJRID varchar(20) null
GO
/* -- 增加字段: PRINTSTYLE_CJR varchar(30) null  -- */
alter table PRINTSTYLE add
  PRINTSTYLE_CJR nvarchar(30) null
GO
/* -- 增加字段: PRINTSTYLE_CJSJ datetime null  -- */
alter table PRINTSTYLE add
  PRINTSTYLE_CJSJ datetime null
GO
alter table PRINTSTYLE add
  CONSTRAINT DF_PRINTSTYLE_PRINTSTYLE_CJSJ default(0) for PRINTSTYLE_CJSJ
GO
/* -- 增加字段: PRINTSTYLE_SYSVERSION int null  -- */
alter table PRINTSTYLE add
  PRINTSTYLE_SYSVERSION int null
GO
alter table PRINTSTYLE add
  CONSTRAINT DF_PRINTSTYLE_PRINTSTYLE_SYSVERSION default(0) for PRINTSTYLE_SYSVERSION
GO


/*----数据表 PROFILE, 增加创建人信息*/
/* -- 增加字段: PROFILE_ORDER int null  -- */
alter table PROFILE add
  PROFILE_ORDER int null
GO
alter table PROFILE add
  CONSTRAINT DF_PROFILE_PROFILE_ORDER default(0) for PROFILE_ORDER
GO


/*----数据表 ROLES, 增加创建人信息*/
/* -- 增加字段: ROLES_CJRID varchar(20) null  -- */
alter table ROLES add
  ROLES_CJRID varchar(20) null
GO
/* -- 增加字段: ROLES_CJR varchar(30) null  -- */
alter table ROLES add
  ROLES_CJR varchar(30) null
GO
/* -- 增加字段: ROLES_CJSJ datetime null  -- */
alter table ROLES add
  ROLES_CJSJ datetime null
GO
alter table ROLES add
  CONSTRAINT DF_ROLES_ROLES_CJSJ default(0) for ROLES_CJSJ
GO
/* -- 增加字段: ROLES_SYSVERSION int null  -- */
alter table ROLES add
  ROLES_SYSVERSION int null
GO
alter table ROLES add
  CONSTRAINT DF_ROLES_ROLES_SYSVERSION default(0) for ROLES_SYSVERSION
GO


/*----数据表 SYSDBVERSION, 增加创建人信息*/
if exists (select * from dbo.sysobjects where id = object_id('SYSDBVERSION') and sysstat & 0xf = 3)drop table SYSDBVERSION
GO
create table SYSDBVERSION
(
  SYSDBVERSION_VERSION int not null ,
  SYSDBVERSION_WHSJ datetime not null
)
GO
alter table SYSDBVERSION with nocheck add
  CONSTRAINT DF_SYSDBVERSION_SYSDBVERSION_VERSION default(0) for SYSDBVERSION_VERSION,
  CONSTRAINT DF_SYSDBVERSION_SYSDBVERSION_WHSJ default(0) for SYSDBVERSION_WHSJ
GO
alter table SYSDBVERSION with nocheck add
  CONSTRAINT PK_SYSDBVERSION PRIMARY KEY CLUSTERED
    (SYSDBVERSION_VERSION) ON [PRIMARY]
GO

/*----数据表 USERROLES, 增加创建人信息*/
/* -- 增加字段: USERROLES_CJRID varchar(20) null  -- */
alter table USERROLES add
  USERROLES_CJRID varchar(20) null
GO
/* -- 增加字段: USERROLES_CJR varchar(30) null  -- */
alter table USERROLES add
  USERROLES_CJR nvarchar(30) null
GO
/* -- 增加字段: USERROLES_CJSJ datetime null  -- */
alter table USERROLES add
  USERROLES_CJSJ datetime null
GO
alter table USERROLES add
  CONSTRAINT DF_USERROLES_USERROLES_CJSJ default(0) for USERROLES_CJSJ
GO


/*----数据表 USERS, 增加创建人信息*/
/* -- 增加字段: USERS_CJRID varchar(20) null  -- */
alter table USERS add
  USERS_CJRID varchar(20) null
GO
/* -- 增加字段: USERS_CJR varchar(30) null  -- */
alter table USERS add
  USERS_CJR nvarchar(30) null
GO
/* -- 增加字段: USERS_CJSJ datetime null  -- */
alter table USERS add
  USERS_CJSJ datetime null
GO
alter table USERS add
  CONSTRAINT DF_USERS_USERS_CJSJ default(0) for USERS_CJSJ
GO
/* -- 增加字段: USERS_SYSVERSION int null  -- */
alter table USERS add
  USERS_SYSVERSION int null
GO
alter table USERS add
  CONSTRAINT DF_USERS_USERS_SYSVERSION default(0) for USERS_SYSVERSION
GO


/*----数据表 YYMK, 增加创建人信息*/
/* -- 增加字段: YYMK_CJRID varchar(20) null  -- */
alter table YYMK add
  YYMK_CJRID varchar(20) null
GO
/* -- 增加字段: YYMK_CJR varchar(30) null  -- */
alter table YYMK add
  YYMK_CJR nvarchar(30) null
GO
/* -- 增加字段: YYMK_CJSJ datetime null  -- */
alter table YYMK add
  YYMK_CJSJ datetime null
GO
alter table YYMK add
  CONSTRAINT DF_YYMK_YYMK_CJSJ default(0) for YYMK_CJSJ
GO
/* -- 增加字段: YYMK_SYSVERSION int null  -- */
alter table YYMK add
  YYMK_SYSVERSION int null
GO
alter table YYMK add
  CONSTRAINT DF_YYMK_YYMK_SYSVERSION default(0) for YYMK_SYSVERSION
GO


/*----数据表 YYZJ, 增加创建人信息*/
/* -- 增加字段: YYZJ_CJRID varchar(20) null  -- */
alter table YYZJ add
  YYZJ_CJRID varchar(20) null
GO
/* -- 增加字段: YYZJ_CJR varchar(30) null  -- */
alter table YYZJ add
  YYZJ_CJR nvarchar(30) null
GO
/* -- 增加字段: YYZJ_CJSJ datetime null  -- */
alter table YYZJ add
  YYZJ_CJSJ datetime null
GO
alter table YYZJ add
  CONSTRAINT DF_YYZJ_YYZJ_CJSJ default(0) for YYZJ_CJSJ
GO
/* -- 增加字段: YYZJ_SYSVERSION int null  -- */
alter table YYZJ add
  YYZJ_SYSVERSION int null
GO
alter table YYZJ add
  CONSTRAINT DF_YYZJ_YYZJ_SYSVERSION default(0) for YYZJ_SYSVERSION
GO


/*----数据 XTCS, 增加创建人信息*/
insert into XTCS(XTCS_CSID, XTCS_CSMC, XTCS_CSLX, XTCS_CSSM, XTCS_ZLX, XTCS_ZY, XTCS_QSZ, XTCS_QSZSM)
values('SYS001', '系统名称', 'S', '该参数指定系统的显示名称', 'S', '', '格物软件', '')
GO
/*----数据 YYZJ, 增加创建人信息*/
update YYZJ set YYZJ_CJR = YYZJ_WHR, YYZJ_CJRID = YYZJ_WHRID, YYZJ_CJSJ=YYZJ_WHSJ
where 1=1
GO

/*----数据 DBVERSION, 增加创建人信息*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(2, getdate())
GO
/*----业务数据脚本----*/ /*----数据表 WFLOG, 补发缺省脚本*/
/* -- 主键改变，删除原主键定义  -- */
alter table WFLOG drop
  CONSTRAINT PK_WFLOG
GO

/* -- 修改字段: WFLOG_ID varchar(20) not null  -> WFLOG_ID varchar(32) not null  -- */
alter table WFLOG alter column
  WFLOG_ID varchar(32) not null
GO


/* -- 创建主键约束  -- */
alter table WFLOG with nocheck add
  CONSTRAINT PK_WFLOG PRIMARY KEY CLUSTERED
    (WFLOG_ID) ON [PRIMARY]
GO
/*----数据 DBVERSION, 补发缺省脚本*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(3, getdate())
GO

/*----业务数据脚本----*/ /*----数据表 CDTYPE, 平台表调整*/
if exists (select * from dbo.sysobjects where id = object_id('CDTYPE') and sysstat & 0xf = 3)drop table CDTYPE
GO
create table CDTYPE
(
  CDTYPE_ID varchar(40) not null ,
  CDTYPE_CDTYPE varchar(50) not null ,
  CDTYPE_CDNAME nvarchar(100) not null ,
  CDTYPE_XTNZ varchar(1) not null ,
  CDTYPE_WHRID varchar(20) null ,
  CDTYPE_WHR nvarchar(30) null ,
  CDTYPE_WHSJ datetime null ,
  CDTYPE_CJRID varchar(20) null ,
  CDTYPE_CJR nvarchar(30) null ,
  CDTYPE_CJSJ datetime null ,
  CDTYPE_SYSVERSION int null
)
GO
alter table CDTYPE with nocheck add
  CONSTRAINT DF_CDTYPE_CDTYPE_WHSJ default(0) for CDTYPE_WHSJ,
  CONSTRAINT DF_CDTYPE_CDTYPE_CJSJ default(0) for CDTYPE_CJSJ,
  CONSTRAINT DF_CDTYPE_CDTYPE_SYSVERSION default(0) for CDTYPE_SYSVERSION
GO
alter table CDTYPE with nocheck add
  CONSTRAINT PK_CDTYPE PRIMARY KEY CLUSTERED
    (CDTYPE_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_CDTYPE
  on CDTYPE (CDTYPE_CDTYPE)
GO
/*----数据表 CDVAL, 平台表调整*/
if exists (select * from dbo.sysobjects where id = object_id('CDVAL') and sysstat & 0xf = 3)drop table CDVAL
GO
create table CDVAL
(
  CDVAL_ID varchar(40) not null ,
  CDVAL_CDTYPE varchar(50) not null ,
  CDVAL_CDVAL varchar(50) not null ,
  CDVAL_CDDESCP nvarchar(100) not null ,
  CDVAL_WHRID varchar(20) null ,
  CDVAL_WHR nvarchar(30) null ,
  CDVAL_WHSJ datetime null ,
  CDVAL_CJRID varchar(20) null ,
  CDVAL_CJR nvarchar(30) null ,
  CDVAL_CJSJ datetime null ,
  CDVAL_SYSVERSION int null
)
GO
alter table CDVAL with nocheck add
  CONSTRAINT DF_CDVAL_CDVAL_WHSJ default(0) for CDVAL_WHSJ,
  CONSTRAINT DF_CDVAL_CDVAL_CJSJ default(0) for CDVAL_CJSJ,
  CONSTRAINT DF_CDVAL_CDVAL_SYSVERSION default(0) for CDVAL_SYSVERSION
GO
alter table CDVAL with nocheck add
  CONSTRAINT PK_CDVAL PRIMARY KEY CLUSTERED
    (CDVAL_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_CDVAL
  on CDVAL (CDVAL_CDTYPE,CDVAL_CDVAL)
GO
/*----数据表 FILES, 平台表调整*/
if exists (select * from dbo.sysobjects where id = object_id('FILES') and sysstat & 0xf = 3)drop table FILES
GO
create table FILES
(
  FILES_ID varchar(32) not null ,
  FILES_FOLDER varchar(32) null ,
  FILES_GROUPID varchar(32) null ,
  FILES_NAME nvarchar(128) null ,
  FILES_TYPE varchar(8) null ,
  FILES_SIZE float null ,
  FILES_PATH varchar(128) null ,
  FILES_COMPRESS varchar(8) null ,
  FILES_VERSION int null ,
  FILES_DELETE char(1) null ,
  FILES_SDRID varchar(20) null ,
  FILES_SDR nvarchar(30) null ,
  FILES_SDSJ datetime null ,
  FILES_BZ nvarchar(255) null ,
  FILES_WHRID varchar(20) null ,
  FILES_WHR nvarchar(30) null ,
  FILES_WHSJ datetime null ,
  FILES_CJRID varchar(20) null ,
  FILES_CJR nvarchar(30) null ,
  FILES_CJSJ datetime null
)
GO
alter table FILES with nocheck add
  CONSTRAINT DF_FILES_FILES_SIZE default(0) for FILES_SIZE,
  CONSTRAINT DF_FILES_FILES_VERSION default(0) for FILES_VERSION,
  CONSTRAINT DF_FILES_FILES_SDSJ default(0) for FILES_SDSJ,
  CONSTRAINT DF_FILES_FILES_WHSJ default(0) for FILES_WHSJ,
  CONSTRAINT DF_FILES_FILES_CJSJ default(0) for FILES_CJSJ
GO
alter table FILES with nocheck add
  CONSTRAINT PK_FILES PRIMARY KEY CLUSTERED
    (FILES_ID) ON [PRIMARY]
GO

/*----数据表 FOLDER, 平台表调整*/
if exists (select * from dbo.sysobjects where id = object_id('FOLDER') and sysstat & 0xf = 3)drop table FOLDER
GO
create table FOLDER
(
  FOLDER_ID varchar(32) not null ,
  FOLDER_FID varchar(32) null ,
  FOLDER_NAME nvarchar(128) null ,
  FOLDER_PATH varchar(2048) not null ,
  FOLDER_LOCK char(1) null ,
  FOLDER_VERSION char(1) null ,
  FOLDER_AUTH char(1) null ,
  FOLDER_LOG char(1) null ,
  FOLDER_RECYLED char(1) null ,
  FOLDER_BZ nvarchar(255) null ,
  FOLDER_WHRID varchar(10) null ,
  FOLDER_WHSJ datetime null ,
  FOLDER_WHR nvarchar(30) null ,
  FOLDER_CJRID varchar(20) null ,
  FOLDER_CJR nvarchar(30) null ,
  FOLDER_CJSJ datetime null
)
GO
alter table FOLDER with nocheck add
  CONSTRAINT DF_FOLDER_FOLDER_WHSJ default(0) for FOLDER_WHSJ,
  CONSTRAINT DF_FOLDER_FOLDER_CJSJ default(0) for FOLDER_CJSJ
GO
alter table FOLDER with nocheck add
  CONSTRAINT PK_FOLDER PRIMARY KEY CLUSTERED
    (FOLDER_ID) ON [PRIMARY]
GO

/*----数据表 GRIDSET, 平台表调整*/
if exists (select * from dbo.sysobjects where id = object_id('GRIDSET') and sysstat & 0xf = 3)drop table GRIDSET
GO
create table GRIDSET
(
  GRIDSET_ID varchar(32) not null ,
  GRIDSET_LISTID varchar(64) not null ,
  GRIDSET_USERID varchar(20) not null ,
  GRIDSET_DATA text null ,
  GRIDSET_WHRID varchar(20) null ,
  GRIDSET_WHR nvarchar(30) null ,
  GRIDSET_WHSJ datetime null ,
  GRIDSET_CJRID varchar(20) null ,
  GRIDSET_CJR nvarchar(30) null ,
  GRIDSET_CJSJ datetime null
)
GO
alter table GRIDSET with nocheck add
  CONSTRAINT DF_GRIDSET_GRIDSET_WHSJ default(0) for GRIDSET_WHSJ,
  CONSTRAINT DF_GRIDSET_GRIDSET_CJSJ default(0) for GRIDSET_CJSJ
GO
alter table GRIDSET with nocheck add
  CONSTRAINT PK_GRIDSET PRIMARY KEY CLUSTERED
    (GRIDSET_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_GRIDSET
  on GRIDSET (GRIDSET_LISTID,GRIDSET_USERID)
GO
/*----数据表 PRINTSTYLE, 平台表调整*/
/* -- 增加字段: PRINTSTYLE_DEFAULT varchar(1) null  -- */
alter table PRINTSTYLE add
  PRINTSTYLE_DEFAULT varchar(1) null
GO


/*----数据 DBVERSION, 平台表调整*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(4, getdate())
GO

/*----业务数据脚本----*/ /*----数据表 MESSAGE, 增加定时事务*/
/* -- 增加字段: MESSAGE_USERID varchar(20) not null  -- */
alter table MESSAGE add
  MESSAGE_USERID varchar(20) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update MESSAGE                    /* 替换已有记录空值 */
set MESSAGE_USERID = ' '
where MESSAGE_USERID is null
GO
alter table MESSAGE alter column
  MESSAGE_USERID varchar(20) not null
GO
/* -- 增加字段: MESSAGE_STATUS varchar(1) not null  -- */
alter table MESSAGE add
  MESSAGE_STATUS varchar(1) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update MESSAGE                    /* 替换已有记录空值 */
set MESSAGE_STATUS = ' '
where MESSAGE_STATUS is null
GO
alter table MESSAGE alter column
  MESSAGE_STATUS varchar(1) not null
GO
/* -- 增加字段: MESSAGE_EVENTID varchar(32) null  -- */
alter table MESSAGE add
  MESSAGE_EVENTID varchar(32) null
GO

/* -- 修改字段: MESSAGE_TYPE varchar(16) not null  -> MESSAGE_TYPE varchar(1) not null  -- */
update MESSAGE/* -- 缩减字段内容长度(DIY) -- */
set MESSAGE_TYPE = MESSAGE_TYPE
GO
alter table MESSAGE alter column
  MESSAGE_TYPE varchar(1) not null
GO
/* -- 修改字段: MESSAGE_CJRID varchar(20) null  -> MESSAGE_CJRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update MESSAGE                    /* 替换已有记录空值 */
set MESSAGE_CJRID = ' '
where MESSAGE_CJRID is null
GO
alter table MESSAGE alter column
  MESSAGE_CJRID varchar(20) not null
GO
/* -- 修改字段: MESSAGE_CJR nvarchar(30) null  -> MESSAGE_CJR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update MESSAGE                    /* 替换已有记录空值 */
set MESSAGE_CJR = ' '
where MESSAGE_CJR is null
GO
alter table MESSAGE alter column
  MESSAGE_CJR nvarchar(30) not null
GO
/* -- 修改字段: MESSAGE_CJSJ datetime null  -> MESSAGE_CJSJ datetime not null  -- */
alter table MESSAGE alter column
  MESSAGE_CJSJ datetime null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update MESSAGE                    /* 替换已有记录空值 */
set MESSAGE_CJSJ = getdate()
where MESSAGE_CJSJ is null
GO
alter table MESSAGE alter column
  MESSAGE_CJSJ datetime not null
GO

/* -- 删除字段: MESSAGE_RECEIVER,MESSAGE_RECEIVERID,MESSAGE_STAT -- */

alter table MESSAGE drop column
  MESSAGE_RECEIVER,MESSAGE_RECEIVERID,MESSAGE_STAT
GO


/*----数据表 MSG_TEMPLET, 增加定时事务*/
create table MSG_TEMPLET
(
  MSG_TEMPLET_ID varchar(32) not null ,
  MSG_TEMPLET_TITLE nvarchar(100) not null ,
  MSG_TEMPLET_CONTENT nvarchar(255) not null ,
  MSG_TEMPLET_BZ nvarchar(255) null ,
  MSG_TEMPLET_WHRID varchar(20) not null ,
  MSG_TEMPLET_WHR nvarchar(30) not null ,
  MSG_TEMPLET_WHSJ datetime not null ,
  MSG_TEMPLET_CJRID varchar(20) not null ,
  MSG_TEMPLET_CJR nvarchar(30) not null ,
  MSG_TEMPLET_CJSJ datetime not null ,
  MSG_TEMPLET_SYSVERSION int not null
)
GO
alter table MSG_TEMPLET with nocheck add
  CONSTRAINT DF_MSG_TEMPLET_MSG_TEMPLET_WHSJ default(getdate()) for MSG_TEMPLET_WHSJ,
  CONSTRAINT DF_MSG_TEMPLET_MSG_TEMPLET_CJSJ default(getdate()) for MSG_TEMPLET_CJSJ,
  CONSTRAINT DF_MSG_TEMPLET_MSG_TEMPLET_SYSVERSION default(0) for MSG_TEMPLET_SYSVERSION
GO
alter table MSG_TEMPLET with nocheck add
  CONSTRAINT PK_MSG_TEMPLET PRIMARY KEY CLUSTERED
    (MSG_TEMPLET_ID) ON [PRIMARY]
GO

/*----数据表 MSG_USER, 增加定时事务*/
create table MSG_USER
(
  MSG_USER_ID varchar(32) not null ,
  MSG_USER_USERID varchar(64) not null ,
  MSG_USER_SMS varchar(1) not null ,
  MSG_USER_EMAIL varchar(1) not null ,
  MSG_USER_WECHAT varchar(1) not null ,
  MSG_USER_TYPE varchar(1) not null ,
  MSG_USER_TASKID varchar(32) not null ,
  MSG_USER_WHRID varchar(20) not null ,
  MSG_USER_WHR nvarchar(30) not null ,
  MSG_USER_WHSJ datetime not null ,
  MSG_USER_CJRID varchar(20) not null ,
  MSG_USER_CJR nvarchar(30) not null ,
  MSG_USER_CJSJ datetime not null ,
  MSG_USER_SYSVERSION int not null
)
GO
alter table MSG_USER with nocheck add
  CONSTRAINT DF_MSG_USER_MSG_USER_SMS default('N') for MSG_USER_SMS,
  CONSTRAINT DF_MSG_USER_MSG_USER_EMAIL default('N') for MSG_USER_EMAIL,
  CONSTRAINT DF_MSG_USER_MSG_USER_WECHAT default('N') for MSG_USER_WECHAT,
  CONSTRAINT DF_MSG_USER_MSG_USER_TYPE default('U') for MSG_USER_TYPE,
  CONSTRAINT DF_MSG_USER_MSG_USER_WHSJ default(0) for MSG_USER_WHSJ,
  CONSTRAINT DF_MSG_USER_MSG_USER_CJSJ default(0) for MSG_USER_CJSJ,
  CONSTRAINT DF_MSG_USER_MSG_USER_SYSVERSION default(1) for MSG_USER_SYSVERSION
GO
alter table MSG_USER with nocheck add
  CONSTRAINT PK_MSG_USER PRIMARY KEY CLUSTERED
    (MSG_USER_ID) ON [PRIMARY]
GO

/*----数据表 MSGEVENT, 增加定时事务*/
create table MSGEVENT
(
  MSGEVENT_ID varchar(32) not null ,
  MSGEVENT_TYPE varchar(1) not null ,
  MSGEVENT_DATA ntext not null ,
  MSGEVENT_CJRID varchar(20) not null ,
  MSGEVENT_CJR nvarchar(30) not null ,
  MSGEVENT_CJSJ datetime not null
)
GO
alter table MSGEVENT with nocheck add
  CONSTRAINT DF_MSGEVENT_MSGEVENT_CJSJ default(0) for MSGEVENT_CJSJ
GO
alter table MSGEVENT with nocheck add
  CONSTRAINT PK_MSGEVENT PRIMARY KEY CLUSTERED
    (MSGEVENT_ID) ON [PRIMARY]
GO

/*----数据表 TIMER, 增加定时事务*/
create table TIMER
(
  TIMER_ID varchar(32) not null ,
  TIMER_MC nvarchar(100) not null ,
  TIMER_MS nvarchar(255) null ,
  TIMER_TYPE varchar(1) not null ,
  TIMER_URL varchar(60) null ,
  TIMER_DATA ntext not null ,
  TIMER_METHOD varchar(10) null ,
  TIMER_TYBZ varchar(1) not null ,
  TIMER_TYRQ datetime null ,
  TIMER_WHRID varchar(20) not null ,
  TIMER_WHR nvarchar(30) not null ,
  TIMER_WHSJ datetime not null ,
  TIMER_CJRID varchar(20) not null ,
  TIMER_CJR nvarchar(30) not null ,
  TIMER_CJSJ datetime not null ,
  TIMER_SYSVERSION int not null
)
GO
alter table TIMER with nocheck add
  CONSTRAINT DF_TIMER_TIMER_TYPE default('1') for TIMER_TYPE,
  CONSTRAINT DF_TIMER_TIMER_TYBZ default('N') for TIMER_TYBZ,
  CONSTRAINT DF_TIMER_TIMER_TYRQ default(0) for TIMER_TYRQ,
  CONSTRAINT DF_TIMER_TIMER_WHSJ default(getdate()) for TIMER_WHSJ,
  CONSTRAINT DF_TIMER_TIMER_CJSJ default(getdate()) for TIMER_CJSJ,
  CONSTRAINT DF_TIMER_TIMER_SYSVERSION default(0) for TIMER_SYSVERSION
GO
alter table TIMER with nocheck add
  CONSTRAINT PK_TIMER PRIMARY KEY CLUSTERED
    (TIMER_ID) ON [PRIMARY]
GO

/*----数据表 TIMER_PARAM, 增加定时事务*/
create table TIMER_PARAM
(
  TIMER_PARAM_ID varchar(32) not null ,
  TIMER_PARAM_TIMERID varchar(32) not null ,
  TIMER_PARAM_CODE varchar(32) not null ,
  TIMER_PARAM_NAME nvarchar(64) not null ,
  TIMER_PARAM_TYPE varchar(1) not null ,
  TIMER_PARAM_WHRID varchar(20) not null ,
  TIMER_PARAM_WHR nvarchar(30) not null ,
  TIMER_PARAM_WHSJ datetime not null ,
  TIMER_PARAM_CJRID varchar(20) not null ,
  TIMER_PARAM_CJR nvarchar(30) not null ,
  TIMER_PARAM_CJSJ datetime not null ,
  TIMER_PARAM_SYSVERSION int not null
)
GO
alter table TIMER_PARAM with nocheck add
  CONSTRAINT DF_TIMER_PARAM_TIMER_PARAM_WHSJ default(0) for TIMER_PARAM_WHSJ,
  CONSTRAINT DF_TIMER_PARAM_TIMER_PARAM_CJSJ default(0) for TIMER_PARAM_CJSJ,
  CONSTRAINT DF_TIMER_PARAM_TIMER_PARAM_SYSVERSION default(1) for TIMER_PARAM_SYSVERSION
GO
alter table TIMER_PARAM with nocheck add
  CONSTRAINT PK_TIMER_PARAM PRIMARY KEY CLUSTERED
    (TIMER_PARAM_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_TIMER_PARAM
  on TIMER_PARAM (TIMER_PARAM_CODE,TIMER_PARAM_TIMERID)
GO
/*----数据表 TIMER_PARAM_SET, 增加定时事务*/
create table TIMER_PARAM_SET
(
  TIMER_PARAM_SET_ID varchar(32) not null ,
  TIMER_PARAM_SET_TASKID varchar(32) not null ,
  TIMER_PARAM_SET_PARAMID varchar(32) not null ,
  TIMER_PARAM_SET_VALUE nvarchar(64) null ,
  TIMER_PARAM_SET_WHRID varchar(20) not null ,
  TIMER_PARAM_SET_WHR nvarchar(30) not null ,
  TIMER_PARAM_SET_WHSJ datetime not null ,
  TIMER_PARAM_SET_CJRID varchar(20) not null ,
  TIMER_PARAM_SET_CJR nvarchar(30) not null ,
  TIMER_PARAM_SET_CJSJ datetime not null ,
  TIMER_PARAM_SET_SYSVERSION int not null
)
GO
alter table TIMER_PARAM_SET with nocheck add
  CONSTRAINT DF_TIMER_PARAM_SET_TIMER_PARAM_SET_WHSJ default(0) for TIMER_PARAM_SET_WHSJ,
  CONSTRAINT DF_TIMER_PARAM_SET_TIMER_PARAM_SET_CJSJ default(0) for TIMER_PARAM_SET_CJSJ,
  CONSTRAINT DF_TIMER_PARAM_SET_TIMER_PARAM_SET_SYSVERSION default(0) for TIMER_PARAM_SET_SYSVERSION
GO
alter table TIMER_PARAM_SET with nocheck add
  CONSTRAINT PK_TIMER_PARAM_SET PRIMARY KEY CLUSTERED
    (TIMER_PARAM_SET_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_TIMER_PARAM_SET
  on TIMER_PARAM_SET (TIMER_PARAM_SET_PARAMID,TIMER_PARAM_SET_TASKID)
GO
/*----数据表 TIMERLOG, 增加定时事务*/
create table TIMERLOG
(
  TIMERLOG_ID varchar(32) not null ,
  TIMERLOG_TASKID varchar(32) not null ,
  TIMERLOG_KSSJ datetime not null ,
  TIMERLOG_JSSJ datetime not null ,
  TIMERLOG_IP varchar(16) not null ,
  TIMERLOG_HOST nvarchar(64) not null ,
  TIMERLOG_LOG nvarchar(255) not null ,
  TIMERLOG_STATUS varchar(1) not null ,
  TIMERLOG_CJRID varchar(20) not null ,
  TIMERLOG_CJR nvarchar(30) not null ,
  TIMERLOG_CJSJ datetime not null
)
GO
alter table TIMERLOG with nocheck add
  CONSTRAINT DF_TIMERLOG_TIMERLOG_CJSJ default(getdate()) for TIMERLOG_CJSJ
GO
alter table TIMERLOG with nocheck add
  CONSTRAINT PK_TIMERLOG PRIMARY KEY CLUSTERED
    (TIMERLOG_ID) ON [PRIMARY]
GO

/*----数据表 TIMERTASK, 增加定时事务*/
create table TIMERTASK
(
  TIMERTASK_ID varchar(32) not null ,
  TIMERTASK_TIMERID varchar(32) not null ,
  TIMERTASK_XH int not null ,
  TIMERTASK_DESC nvarchar(100) not null ,
  TIMERTASK_JLDW varchar(10) null ,
  TIMERTASK_YEAR int null ,
  TIMERTASK_MONTH int null ,
  TIMERTASK_WEEK int null ,
  TIMERTASK_DAY int null ,
  TIMERTASK_HOUR int null ,
  TIMERTASK_MINUTE int null ,
  TIMERTASK_SECOND int null ,
  TIMERTASK_BEGINTIME datetime null ,
  TIMERTASK_PRETIME datetime null ,
  TIMERTASK_NEXTTIME datetime null ,
  TIMERTASK_RESULT nvarchar(255) null ,
  TIMERTASK_STATUS varchar(1) not null ,
  TIMERTASK_WHRID varchar(20) not null ,
  TIMERTASK_WHR nvarchar(30) not null ,
  TIMERTASK_WHSJ datetime not null ,
  TIMERTASK_CJRID varchar(20) not null ,
  TIMERTASK_CJR nvarchar(30) not null ,
  TIMERTASK_CJSJ datetime not null ,
  TIMERTASK_SYSVERSION int not null
)
GO
alter table TIMERTASK with nocheck add
  CONSTRAINT DF_TIMERTASK_TIMERTASK_XH default(0) for TIMERTASK_XH,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_YEAR default(0) for TIMERTASK_YEAR,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_MONTH default(0) for TIMERTASK_MONTH,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_WEEK default(0) for TIMERTASK_WEEK,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_DAY default(0) for TIMERTASK_DAY,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_HOUR default(0) for TIMERTASK_HOUR,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_MINUTE default(0) for TIMERTASK_MINUTE,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_SECOND default(0) for TIMERTASK_SECOND,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_WHSJ default(getdate()) for TIMERTASK_WHSJ,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_CJSJ default(getdate()) for TIMERTASK_CJSJ,
  CONSTRAINT DF_TIMERTASK_TIMERTASK_SYSVERSION default(0) for TIMERTASK_SYSVERSION
GO
alter table TIMERTASK with nocheck add
  CONSTRAINT PK_TIMERTASK PRIMARY KEY CLUSTERED
    (TIMERTASK_ID) ON [PRIMARY]
GO

/*----数据 DBVERSION, 增加定时事务*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(5, getdate())
GO

/*----业务数据脚本----*/ /*----数据表 FILEAUTH, 增加文档管理*/
create table FILEAUTH
(
  FILEAUTH_ID varchar(32) not null ,
  FILEAUTH_FOLDERID varchar(32) not null ,
  FILEAUTH_ROLEID varchar(10) null ,
  FILEAUTH_USERID varchar(20) null ,
  FILEAUTH_READ varchar(1) null ,
  FILEAUTH_WRITE varchar(1) null ,
  FILEAUTH_DOWN varchar(1) null ,
  FILEAUTH_CJRID varchar(20) not null ,
  FILEAUTH_CJR nvarchar(30) not null ,
  FILEAUTH_CJSJ datetime not null ,
  FILEAUTH_WHRID varchar(20) not null ,
  FILEAUTH_WHR nvarchar(30) not null ,
  FILEAUTH_WHSJ datetime not null ,
  FILEAUTH_SYSVERSION int not null
)
GO
alter table FILEAUTH with nocheck add
  CONSTRAINT DF_FILEAUTH_FILEAUTH_CJSJ default(getdate()) for FILEAUTH_CJSJ,
  CONSTRAINT DF_FILEAUTH_FILEAUTH_WHSJ default(getdate()) for FILEAUTH_WHSJ,
  CONSTRAINT DF_FILEAUTH_FILEAUTH_SYSVERSION default(1) for FILEAUTH_SYSVERSION
GO
alter table FILEAUTH with nocheck add
  CONSTRAINT PK_FILEAUTH PRIMARY KEY CLUSTERED
    (FILEAUTH_ID) ON [PRIMARY]
GO

/*----数据表 FILEHIST, 增加文档管理*/
create table FILEHIST
(
  FILEHIST_ID varchar(32) not null ,
  FILEHIST_FILEID varchar(32) not null ,
  FILEHIST_VERSION int not null ,
  FILEHIST_NAME nvarchar(128) null ,
  FILEHIST_TYPE varchar(8) null ,
  FILEHIST_MESSAGE nvarchar(255) null ,
  FILEHIST_PATH varchar(128) null ,
  FILEHIST_SIZE bigint null ,
  FILEHIST_COMPRESS varchar(8) null ,
  FILEHIST_OPTYPE varchar(1) null ,
  FILEHIST_CJRID varchar(20) not null ,
  FILEHIST_CJR nvarchar(30) not null ,
  FILEHIST_CJSJ datetime not null
)
GO
alter table FILEHIST with nocheck add
  CONSTRAINT DF_FILEHIST_FILEHIST_VERSION default(0) for FILEHIST_VERSION,
  CONSTRAINT DF_FILEHIST_FILEHIST_SIZE default(0) for FILEHIST_SIZE,
  CONSTRAINT DF_FILEHIST_FILEHIST_CJSJ default(getdate()) for FILEHIST_CJSJ
GO
alter table FILEHIST with nocheck add
  CONSTRAINT PK_FILEHIST PRIMARY KEY CLUSTERED
    (FILEHIST_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_FILEHIST
  on FILEHIST (FILEHIST_FILEID,FILEHIST_VERSION)
GO
/*----数据表 FILELOG, 增加文档管理*/
create table FILELOG
(
  FILELOG_ID varchar(32) not null ,
  FILELOG_FILEID varchar(32) not null ,
  FILELOG_OP varchar(10) not null ,
  FILELOG_USERID varchar(20) not null ,
  FILELOG_USERNAME varchar(30) not null ,
  FILELOG_OPTIME datetime not null ,
  FILELOG_HISTID varchar(32) null ,
  FILELOG_MESSAGE nvarchar(255) null
)
GO

alter table FILELOG with nocheck add
  CONSTRAINT PK_FILELOG PRIMARY KEY CLUSTERED
    (FILELOG_ID) ON [PRIMARY]
GO

/*----数据表 FILES, 增加文档管理*/
/* -- 增加字段: FILES_MESSAGE nvarchar(255) null  -- */
alter table FILES add
  FILES_MESSAGE nvarchar(255) null
GO

/* -- 修改字段: FILES_NAME nvarchar(128) null  -> FILES_NAME nvarchar(128) not null  -- */
alter table FILES alter column
  FILES_NAME nvarchar(128) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_NAME = ' '
where FILES_NAME is null
GO
alter table FILES alter column
  FILES_NAME nvarchar(128) not null
GO
/* -- 修改字段: FILES_TYPE varchar(8) null  -> FILES_TYPE varchar(32) null  -- */
alter table FILES alter column
  FILES_TYPE varchar(32) null
GO
/* -- 修改字段: FILES_SIZE float null  -> FILES_SIZE bigint null  -- */
alter table FILES add
  TMP_FILES_SIZE bigint null
GO
update FILES/* 转换字段数据类型(DIY) */
set TMP_FILES_SIZE = FILES_SIZE
GO
alter table FILES drop
  DF_FILES_FILES_SIZE
GO
alter table FILES drop column
  FILES_SIZE
GO
alter table FILES add
  FILES_SIZE bigint null
GO
update FILES/* -- 复制字段数据 -- */
set FILES_SIZE=TMP_FILES_SIZE
GO
alter table FILES drop column
  TMP_FILES_SIZE
GO
alter table FILES add
  CONSTRAINT DF_FILES_FILES_SIZE default(0) for FILES_SIZE
GO
/* -- 修改字段: FILES_PATH varchar(128) null  -> FILES_PATH varchar(1024) null  -- */
alter table FILES alter column
  FILES_PATH varchar(1024) null
GO
/* -- 修改字段: FILES_DELETE char(1) null  -> FILES_DELETE varchar(1) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_DELETE = ' '
where FILES_DELETE is null
GO
alter table FILES alter column
  FILES_DELETE varchar(1) not null
GO
/* -- 修改字段: FILES_WHRID varchar(20) null  -> FILES_WHRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_WHRID = ' '
where FILES_WHRID is null
GO
alter table FILES alter column
  FILES_WHRID varchar(20) not null
GO
/* -- 修改字段: FILES_WHR nvarchar(30) null  -> FILES_WHR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_WHR = ' '
where FILES_WHR is null
GO
alter table FILES alter column
  FILES_WHR nvarchar(30) not null
GO
/* -- 修改字段: FILES_WHSJ datetime null  -> FILES_WHSJ datetime not null  -- */
alter table FILES alter column
  FILES_WHSJ datetime null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_WHSJ = getdate()
where FILES_WHSJ is null
GO
alter table FILES alter column
  FILES_WHSJ datetime not null
GO
/* -- 修改字段: FILES_CJRID varchar(20) null  -> FILES_CJRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_CJRID = ' '
where FILES_CJRID is null
GO
alter table FILES alter column
  FILES_CJRID varchar(20) not null
GO
/* -- 修改字段: FILES_CJR nvarchar(30) null  -> FILES_CJR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_CJR = ' '
where FILES_CJR is null
GO
alter table FILES alter column
  FILES_CJR nvarchar(30) not null
GO
/* -- 修改字段: FILES_CJSJ datetime null  -> FILES_CJSJ datetime not null  -- */
alter table FILES alter column
  FILES_CJSJ datetime null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_CJSJ = getdate()
where FILES_CJSJ is null
GO
alter table FILES alter column
  FILES_CJSJ datetime not null
GO


/*----数据表 FOLDER, 增加文档管理*/
/* -- 增加字段: FOLDER_AUTHTYPE varchar(10) not null  -- */
alter table FOLDER add
  FOLDER_AUTHTYPE varchar(10) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_AUTHTYPE = ' '
where FOLDER_AUTHTYPE is null
GO
alter table FOLDER alter column
  FOLDER_AUTHTYPE varchar(10) not null
GO

/* -- 修改字段: FOLDER_NAME nvarchar(128) null  -> FOLDER_NAME nvarchar(128) not null  -- */
alter table FOLDER alter column
  FOLDER_NAME nvarchar(128) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_NAME = ' '
where FOLDER_NAME is null
GO
alter table FOLDER alter column
  FOLDER_NAME nvarchar(128) not null
GO
/* -- 修改字段: FOLDER_PATH varchar(2048) not null  -> FOLDER_PATH varchar(1024) null  -- */
update FOLDER/* -- 缩减字段内容长度(DIY) -- */
set FOLDER_PATH = FOLDER_PATH
GO
alter table FOLDER alter column
  FOLDER_PATH varchar(1024) not null
GO
alter table FOLDER alter column
  FOLDER_PATH varchar(1024) null
GO
/* -- 修改字段: FOLDER_VERSION char(1) null  -> FOLDER_VERSION varchar(1) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_VERSION = ' '
where FOLDER_VERSION is null
GO
alter table FOLDER alter column
  FOLDER_VERSION varchar(1) not null
GO
/* -- 修改字段: FOLDER_WHRID varchar(10) null  -> FOLDER_WHRID varchar(20) not null  -- */
alter table FOLDER alter column
  FOLDER_WHRID varchar(20) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_WHRID = ' '
where FOLDER_WHRID is null
GO
alter table FOLDER alter column
  FOLDER_WHRID varchar(20) not null
GO
/* -- 修改字段: FOLDER_WHSJ datetime null  -> FOLDER_WHSJ datetime not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_WHSJ = getdate()
where FOLDER_WHSJ is null
GO
alter table FOLDER alter column
  FOLDER_WHSJ datetime not null
GO
/* -- 修改字段: FOLDER_WHR nvarchar(30) null  -> FOLDER_WHR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_WHR = ' '
where FOLDER_WHR is null
GO
alter table FOLDER alter column
  FOLDER_WHR nvarchar(30) not null
GO
/* -- 修改字段: FOLDER_CJRID varchar(20) null  -> FOLDER_CJRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_CJRID = ' '
where FOLDER_CJRID is null
GO
alter table FOLDER alter column
  FOLDER_CJRID varchar(20) not null
GO
/* -- 修改字段: FOLDER_CJR nvarchar(30) null  -> FOLDER_CJR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_CJR = ' '
where FOLDER_CJR is null
GO
alter table FOLDER alter column
  FOLDER_CJR nvarchar(30) not null
GO
/* -- 修改字段: FOLDER_CJSJ datetime null  -> FOLDER_CJSJ datetime not null  -- */
alter table FOLDER alter column
  FOLDER_CJSJ datetime null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_CJSJ = getdate()
where FOLDER_CJSJ is null
GO
alter table FOLDER alter column
  FOLDER_CJSJ datetime not null
GO

/* -- 删除字段: FOLDER_AUTH,FOLDER_LOCK,FOLDER_LOG,FOLDER_RECYLED -- */

alter table FOLDER drop column
  FOLDER_AUTH,FOLDER_LOCK,FOLDER_LOG,FOLDER_RECYLED
GO


/*----数据 DBVERSION, 增加文档管理*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(6, getdate())
GO

/*----业务数据脚本----*/ /*----数据表 BM, 调整部门表*/
create table BM
(
  BM_ID varchar(32) not null ,
  BM_BMID varchar(20) not null ,
  BM_BMMC nvarchar(60) not null ,
  BM_FZR varchar(30) null ,
  BM_TYBZ varchar(1) not null ,
  BM_TYRQ datetime null ,
  BM_BZ nvarchar(255) null ,
  BM_CJRID varchar(20) not null ,
  BM_CJR nvarchar(30) not null ,
  BM_CJSJ datetime not null ,
  BM_WHRID varchar(20) not null ,
  BM_WHR nvarchar(30) not null ,
  BM_WHSJ datetime not null ,
  BM_SYSVERSION int not null
)
GO
alter table BM with nocheck add
  CONSTRAINT DF_BM_BM_CJSJ default(getdate()) for BM_CJSJ,
  CONSTRAINT DF_BM_BM_WHSJ default(getdate()) for BM_WHSJ,
  CONSTRAINT DF_BM_BM_SYSVERSION default(1) for BM_SYSVERSION
GO
alter table BM with nocheck add
  CONSTRAINT PK_BM PRIMARY KEY CLUSTERED
    (BM_ID) ON [PRIMARY]
GO
/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_BM
  on BM (BM_BMID)
GO
/*----数据表 FILEAUTH, 调整部门表*/
/* -- 增加字段: FILEAUTH_FOLDER varchar(32) not null  -- */
alter table FILEAUTH add
  FILEAUTH_FOLDER varchar(32) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILEAUTH                    /* 替换已有记录空值 */
set FILEAUTH_FOLDER = ' '
where FILEAUTH_FOLDER is null
GO
alter table FILEAUTH alter column
  FILEAUTH_FOLDER varchar(32) not null
GO
/* -- 增加字段: FILEAUTH_TYPE varchar(1) not null  -- */
alter table FILEAUTH add
  FILEAUTH_TYPE varchar(1) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILEAUTH                    /* 替换已有记录空值 */
set FILEAUTH_TYPE = ' '
where FILEAUTH_TYPE is null
GO
alter table FILEAUTH alter column
  FILEAUTH_TYPE varchar(1) not null
GO
/* -- 增加字段: FILEAUTH_CODE varchar(20) not null  -- */
alter table FILEAUTH add
  FILEAUTH_CODE varchar(20) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILEAUTH                    /* 替换已有记录空值 */
set FILEAUTH_CODE = ' '
where FILEAUTH_CODE is null
GO
alter table FILEAUTH alter column
  FILEAUTH_CODE varchar(20) not null
GO

/* -- 删除字段: FILEAUTH_ROLEID,FILEAUTH_USERID -- */

alter table FILEAUTH drop column
  FILEAUTH_ROLEID,FILEAUTH_USERID
GO


/* -- 创建唯一索引 -- */create unique index IX_UNIQUE_FILEAUTH
  on FILEAUTH (FILEAUTH_CODE,FILEAUTH_FOLDER,FILEAUTH_TYPE)
GO
/*----数据表 FILES, 调整部门表*/
/* -- 增加字段: FILES_MESSAGE nvarchar(255) null  -- */
alter table FILES add
  FILES_MESSAGE nvarchar(255) null
GO

/* -- 修改字段: FILES_FOLDER varchar(32) null  -> FILES_FOLDER varchar(32) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FILES                    /* 替换已有记录空值 */
set FILES_FOLDER = ' '
where FILES_FOLDER is null
GO
alter table FILES alter column
  FILES_FOLDER varchar(32) not null
GO


/*----数据表 FOLDER, 调整部门表*/
/* -- 增加字段: FOLDER_PID varchar(32) null  -- */
alter table FOLDER add
  FOLDER_PID varchar(32) null
GO
/* -- 增加字段: FOLDER_AUTHTYPE varchar(10) not null  -- */
alter table FOLDER add
  FOLDER_AUTHTYPE varchar(10) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_AUTHTYPE = ' '
where FOLDER_AUTHTYPE is null
GO
alter table FOLDER alter column
  FOLDER_AUTHTYPE varchar(10) not null
GO
/* -- 增加字段: FOLDER_LOG varchar(1) not null  -- */
alter table FOLDER add
  FOLDER_LOG varchar(1) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_LOG = 'Y'
where FOLDER_LOG is null
GO
alter table FOLDER alter column
  FOLDER_LOG varchar(1) not null
GO

/* -- 增加字段: FOLDER_TYPE varchar(10) not null  -- */
alter table FOLDER add
  FOLDER_TYPE varchar(1) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update FOLDER                    /* 替换已有记录空值 */
set FOLDER_TYPE = 'A'
where FOLDER_TYPE is null
GO
alter table FOLDER alter column
  FOLDER_TYPE varchar(1) not null
GO

/*---更新历史数据------*/
update FOLDER set FOLDER_PID = FOLDER_FID
where 1=1
GO

update FOLDER set FOLDER_PID = 'root'
where isnull(FOLDER_PID, ' ') = ' '
GO

/* -- 删除字段: FOLDER_FID -- */

alter table FOLDER drop column
  FOLDER_FID
GO


/*----数据表 ORG, 调整部门表*/
/* -- 主键改变，删除原主键定义  -- */
alter table ORG drop
  CONSTRAINT PK_ORG
GO


/* -- 增加字段: ORG_PID varchar(32) null  -- */
alter table ORG add
  ORG_PID varchar(32) null
GO
/* -- 增加字段: ORG_ORGID varchar(20) not null  -- */
alter table ORG add
  ORG_ORGID varchar(20) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_ORGID = ' '
where ORG_ORGID is null
GO
alter table ORG alter column
  ORG_ORGID varchar(20) not null
GO
/* -- 增加字段: ORG_NAME nvarchar(64) not null  -- */
alter table ORG add
  ORG_NAME nvarchar(64) null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_NAME = ' '
where ORG_NAME is null
GO
alter table ORG alter column
  ORG_NAME nvarchar(64) not null
GO

/* -- 修改字段: ORG_ID varchar(40) not null  -> ORG_ID varchar(32) not null  -- */
update ORG/* -- 缩减字段内容长度(DIY) -- */
set ORG_ID = ORG_ID
GO
alter table ORG alter column
  ORG_ID varchar(32) not null
GO
/* -- 修改字段: ORG_BMID varchar(20) null  -> ORG_BMID varchar(32) null  -- */
alter table ORG alter column
  ORG_BMID varchar(32) null
GO
/* -- 修改字段: ORG_TYBZ varchar(1) null  -> ORG_TYBZ varchar(1) not null  -- */

alter table ORG add
  CONSTRAINT DF_ORG_ORG_TYBZ default('N') for ORG_TYBZ
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_TYBZ = 'N'
where ORG_TYBZ is null
GO
alter table ORG alter column
  ORG_TYBZ varchar(1) not null
GO
/* -- 修改字段: ORG_WHRID varchar(20) null  -> ORG_WHRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_WHRID = ' '
where ORG_WHRID is null
GO
alter table ORG alter column
  ORG_WHRID varchar(20) not null
GO
/* -- 修改字段: ORG_WHSJ datetime null  -> ORG_WHSJ datetime not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_WHSJ = getdate()
where ORG_WHSJ is null
GO
alter table ORG alter column
  ORG_WHSJ datetime not null
GO
/* -- 修改字段: ORG_CJRID varchar(20) null  -> ORG_CJRID varchar(20) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_CJRID = ' '
where ORG_CJRID is null
GO
alter table ORG alter column
  ORG_CJRID varchar(20) not null
GO
/* -- 修改字段: ORG_CJR nvarchar(30) null  -> ORG_CJR nvarchar(30) not null  -- */

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_CJR = ' '
where ORG_CJR is null
GO
alter table ORG alter column
  ORG_CJR nvarchar(30) not null
GO
/* -- 修改字段: ORG_CJSJ datetime null  -> ORG_CJSJ datetime not null  -- */
alter table ORG alter column
  ORG_CJSJ datetime null
GO



/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_CJSJ = getdate()
where ORG_CJSJ is null
GO
alter table ORG alter column
  ORG_CJSJ datetime not null
GO
/* -- 修改字段: ORG_SYSVERSION int null  -> ORG_SYSVERSION int not null  -- */
alter table ORG alter column
  ORG_SYSVERSION int null
GO

/* -- 增加NOT NULL约束，要求该字段所有记录没有空值 -- */
update ORG                    /* 替换已有记录空值 */
set ORG_SYSVERSION = 0
where ORG_SYSVERSION is null
GO
alter table ORG alter column
  ORG_SYSVERSION int not null
GO

/* -- 删除字段: ORG_BMMC,ORG_SHBMID -- */

alter table ORG drop column
  ORG_BMMC,ORG_SHBMID
GO


/* -- 创建主键约束  -- */
alter table ORG with nocheck add
  CONSTRAINT PK_ORG PRIMARY KEY CLUSTERED
    (ORG_ID) ON [PRIMARY]
GO
/*----数据表 USERS, 调整部门表*/
/* -- 增加字段: USERS_LAST_LOGIN_TIME datetime null  -- */
alter table USERS add
  USERS_LAST_LOGIN_TIME datetime null
GO

/* -- 修改字段: USERS_CJSJ datetime null  -> USERS_CJSJ datetime null  -- */
alter table USERS alter column
  USERS_CJSJ datetime null
GO


/*----数据 XTCS, 调整部门表*/
insert into XTCS (XTCS_CSID, XTCS_CSMC, XTCS_CSLX, XTCS_CSSM, XTCS_ZLX, XTCS_ZY, XTCS_QSZ, XTCS_QSZSM, XTCS_YXY, XTCS_ZJID)
values ('SYSU001', '用户首页功能', 'U', '用户首页功能', 'L', 'select YYMK_MKID as ID , YYMK_MKMC as MC from YYMK', '', '', '', '101000000')
GO
/*----数据 DBVERSION, 调整部门表*/
insert into DBVERSION(DBVERSION_VERSION, DBVERSION_WHSJ)values(7, getdate())
GO



create table KHGL
(
  KHGL_ID varchar(32) not null ,
  KHGL_KHMC nvarchar(300) null ,
  KHGL_DWMC nvarchar(300) null ,
  KHGL_LXDH varchar(50) null ,
  KHGL_YX varchar(128) null ,
  KHGL_DZ nvarchar(300) null ,
  KHGL_ZYFW nvarchar(200) null ,
  KHGL_BZ nvarchar(1000) null ,
  KHGL_WHRID varchar(20) not null ,
  KHGL_WHR nvarchar(30) not null ,
  KHGL_WHSJ datetime not null ,
  KHGL_SYSVERSION int not null
)
GO
alter table KHGL with nocheck add
  CONSTRAINT DF_KHGL_KHGL_WHSJ default(getdate()) for KHGL_WHSJ,
  CONSTRAINT DF_KHGL_KHGL_SYSVERSION default(1) for KHGL_SYSVERSION
GO
alter table KHGL with nocheck add
  CONSTRAINT PK_KHGL PRIMARY KEY CLUSTERED
    (KHGL_ID) ON [PRIMARY]
GO

