# Spring React/Vue Login
[hoonti study demo code](https://github.com/hoonti06/study-demo-code/tree/master/spring-react-google-login)를 clone해 서버 사용
[youtube 영상](https://www.youtube.com/watch?v=HV-9EIU9JVY&t=246s)


## Setting up Gmail Login

https://console.cloud.google.com/apis/credentials

## Client(React)

### Install Node

https://nodejs.org/en/

### Project Creation
```
npx create-react-app client
```

### Start Up
```
npm start
```
port number: 8081

### References

https://nodejs.org/en/

https://create-react-app.dev/docs/getting-started

## Vue-Client
install node-module 
```
npm install
```
start project
```
npm run serve
```
## 정리
서버의 `application.yml`의 client.-id, client-key를 수정해야 함.  
클라이언트 포트랑 google oauth2 포트 번호를 일치 
