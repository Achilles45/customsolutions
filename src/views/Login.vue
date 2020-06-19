<template>
  <div class="register">
    <Navbar />
    <div class="register__content">
        <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="header">
                    <h1>Welcome Back!</h1>
                <p>Login to continue</p>
                </div>
                <form @submit.prevent="login()">
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email Address *" v-model="email">
                    </div>
                     <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password *" v-model="password">
                    </div>
                    <small>Yet to have an account? <router-link to="/affiliate/register">Create a free account</router-link></small><br><br>
                    <div v-if="loading" class="loader text-center">
                        <img src="../assets/images/loader.gif" class="loader__img" alt="">
                    </div>
                    <div v-if="err" class="alert alert-danger">
                        {{ err }}
                    </div>
                     <div v-if="success" class="alert alert-success">
                        {{ success }}
                    </div>
                    <p class="text-center text" v-if="text">{{text}}</p>
                    <button type="submit" class="register__btn">Sign In</button>
                </form>
            </div>
            <div class="col-md-3"></div>
        </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            email: null,
            password: null,
            success: null,
            err: null,
            loading: false,
            text: ''
        }
    },
    methods:{
        login(){
            //Check if the user has filled out the form
            if(!this.email || !this.password){
                this.err = 'Please provide your credentials'
            }else{
                this.loading = true;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.loading = false
                    this.text = 'Redirecting to your dashboard ....'
                    this.redirectToDashboard();
                })
                .catch(err => {
                    this.loading = false
                    this.err = 'Your credentials do not match'
                })
            }
        },
        redirectToDashboard(){
            setTimeout(() => {
                this.$router.push({name: 'dashboard'})
            }, 5000);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.register__content{
    padding: 5rem 0;
    h1{
        font-weight: bold;
        color: #2b2b2b;;
        font-size: 2.4rem;
        text-transform: uppercase;
    }
     p{
        color: #627081;
    }
    form{
        margin-top: 2rem;
        padding: 2rem 0rem;
        input{
            border-radius: 0px;
            border:none;
            box-shadow: none;
            border-bottom: 1px solid #ccc;
            margin-bottom: 2rem;
            &::placeholder{
                color: #627081;
                font-size: .92rem;
            }
        }
        small{
            color: #2b2b2b;
            font-size: .9rem;
        }
         .loader__img{
            max-width: 100px;
            height: auto;
        }
        .text{
            padding-bottom: 1rem;
        }
        .register__btn{
             background: linear-gradient(to right, $secondary-color , $tertiary-color);
             border: none;
             padding: 1rem 2rem;
             border-radius: 50px;
             width: 100%;
             color: #fff;
             outline: none;
             &:hover{
                 background: $tertiary-color;
             }
        }
    }
}

//Media Queries
@media only screen and (max-width: 600px){
    h1{
        font-size: 1.5rem !important;
        line-height: 1.6;
    }
}
</style>