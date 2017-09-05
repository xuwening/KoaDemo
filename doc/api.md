# RN组件管理接口


## 登录接口

只有管理员可以登录，管理员初始用户名及密码默认存入数据库中（登录后设置页面可以更改密码）。登录成功返回token作为会话标识，下次请求cookie中携带token做身份识别。

url[post]: `/RN/login`

请求体：

```js
{
    userName: '',
    password: ''   // 密码的md5值
}
```

响应体：

```js
{
    retCode: '000000',  //非零失败
    errDesc: '',        //错误描述
    resBody: {
        token: ''       //会话id
    }
}
```

## 文件上传接口

遵循form表单文件上传方式

url[post]: `/RN/upload`


## 生成appID接口

url[post]: `/RN/genAppID`

## 修改管理员密码接口

url[post]: `/RN/modifyPassword`


## 查看App信息接口

url[get]: `/RN/appInfo`

## 版本请求接口

接口名称[POST]：/RN/patchVersion

请求body:

```js
{
appKey: "",                   //app唯一标识
appVersion: "",               //app当前版本
rnVersion: "",                //react native集成版本
platform: "",                 //平台ios android
resBody: { 
        "LDBizName1": "1.2",  //业务名称: 版本号
        "LDBizName2": "1.1", 
        ...
    } 
}
```

响应body:

```js
{
    retCode: "000000",      //响应码：000000代表成功，其他代表失败
    retDesc: "xxx",         //失败原因描述
    rspBody: {

        patchs:[   
            { 
                "zipPath": "https://xx.xx.com/patchzip/LDBizModuleName1.zip",   //下载路径
                "version": "1.3",                                               //业务版本号
                "moduleName": "LDBizName1",                                     //jsBundle名称
                "zipHash": "xxxxxx",                                            //zip文件md5值
                "jsbundleHash": "xxxxxx",                                       //差异合并后js文件md5值
                "downloadNow": "3",                                             //0：总是下载, 1:wifi下载，2: 4g和wifi下载
                "uploadNow": "true",                                            //true:即刻更新，false:下次启动更新
                "needGoBack": "false",                                          //是否需要回退版本
            },

            ...
          ]
    }
}

