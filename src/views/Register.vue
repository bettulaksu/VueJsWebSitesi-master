<template>
  <div class="form-wrap">
      <form class="register">
          <p class="login-register">
              Zaten hesabınız var mı?
              <router-link class="router-link" :to="{name: 'Login'}">Giriş Yap</router-link>
          </p>
          <h2>Mendeley Hesabı Oluşturun</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="Adınız" v-model="firstName">
                  <user class="icon"/>
              </div>
              <div class="input">
                  <input type="text" placeholder="Soyadınız" v-model="lastName">
                  <user class="icon"/>
              </div>
              <div class="input">
                  <input type="text" placeholder="Kullanıcı Adınız" v-model="username">
                  <user class="icon"/>
              </div>
              <div class="input">
                  <input type="text" placeholder="Mail Adresiniz" v-model="email">
                  <email class="icon"/>
              </div>
              
               <div class="input">
                  <input type="password" placeholder="Şifreniz" v-model="password">
                  <password class="icon"/>
              </div>
              <div v-show="error" class="error">{{this.errorMsg}}</div>
          </div>
          <button @click.prevent="register">Kayıt Ol</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div> 
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "@firebase/app";
import "@firebase/auth";
import db from "../firebase/firebaseInit";
export default {
    name: "Register",
    components: {
        email,
        password,
        user,
    },
    data(){
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: null,
            errorMsg: "",
        };
    },
    methods: {
        async register() {
            if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""  
            ){
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();

                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
            
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email,
                });
                this.$router.push({name: "Home"});
                return;
            }
            this.error = true;
            this.errorMsg = "Lütfen tüm alanları doldurun!";
            return;
        },
    },

};
</script>
<style lang="scss" scoped>
.register{
    h2{
        max-width: 350px;
    }
}
</style>