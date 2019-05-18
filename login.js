http://zzyy.sdyu.edu.cn/

加密示例

this.$axios({
                method: 'post',
                url: this.url+'/oauth/v1/login',
                params: {
                  //account: this.username,//"abc",
                  account: rsaEncrypt,//"abc",
                  passWord: Math.random().toString(36).substr(2).toString(),//'123',
                  verfyCode:this.code,
                  redirectURI:this.redirectURI
                  // redirectURI:''
                }
              });

account: rsaEncrypt

rsaEncrypt = encryptor.encrypt(s);

encryptor = new JSEncrypt();

publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrdpdYMaIJjCT9/2aeyr442SR930wuykmpQWh+8p+DbZ/BzYMYOMFjzinf8bPYgMjRTHM/LiJfK1FP+Id1FKlpeUYansdAz7tpl4FzqALnhGxaAw2CqPMVs8brep142LOOyVnrvUz3XrZ+DrfflWpixwV4825HMhGUDfnNL6iS6wIDAQAB`;  //把之前生成的贴进来，实际开发过程中，可以是后台传过来的
encryptor.setPublicKey(publicKey);

var s = Math.random().toString(36).substr(2).toString() + '-' +this.username + '-' + this.password + '-' + (new Date().getTime()*17-23456).toString() + '-'+ (new Date().getTime()*3).toString();
let rsaEncrypt = encryptor.encrypt(s);
