---
typora-root-url: ./readmeIMG
---

# ReactStack
React + Typescript的项目模版。

**这个项目旨在搭建一个高可用的React + typescript技术栈的通用模版。typescript在这个项目中扮演了类型约束和编译器的角色。**

------

如何使用？

**基本：**

在src/pages目录下添加属于自己的模块：

![image-20190218142323787](/readmeIMG/image-20190218142323787.png)

然后在navData.ts中配置路由信息即可：

![image-20190218142353190](/readmeIMG/image-20190218142353190.png)

**类型约束：**

在src/interface中定义你的类型，globalInterface用于全局接口的定义，其余的接口请按照模块进行分文件夹：

![image-20190218142529172](/readmeIMG/image-20190218142529172.png)



------

已有特性：

1. React@16 + React-router@4
2. Typescript@3.3.x
3. TS编译器使用ts-loader@5.3.3
4. webpack@4.29.x + webpack-dev-server@3.1.x
5. 路由动态加载（webpack4识别async实现）

------

*下一步👉：集成react-redux*
