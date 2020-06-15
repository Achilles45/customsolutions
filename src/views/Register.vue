<template>
  <div class="register">
    <Navbar />
    <div class="register__content">
        <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <h1>Become an affiliate</h1>
                <form @submit.prevent="register()">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Full Name *" v-model="name">
                    </div>
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email Address *" v-model="email">
                    </div>
                     <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Phone Number *" v-model="phone">
                    </div>
                     <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password *" v-model="password">
                    </div>
                     <div class="form-group">
                        <input type="password" class="form-control" placeholder="Repeat Password *" v-model="repeat__password">
                    </div>
                    <!-- <div class="form-group">
                        <select name="" id="" class="form-control">
                            <option value="" disabled selected>Please select your name</option>
                            <option value="">Okoro</option>
                            <option value="">Okoro</option>
                            <option value="">Okoro</option>
                            <option value="">Okoro</option>
                        </select>
                    </div> -->
                    <small>By clicking on the register button, you agree to our terms and conditions</small><br>
                    <small>Have an account already? <router-link to="/affiliate/login">Log in</router-link></small><br><br>
                    <div v-if="err" class="alert alert-danger">
                        {{ err }}
                    </div>
                     <div v-if="success" class="alert alert-success">
                        {{ success }}
                    </div>
                    <button type="submit" class="register__btn">{{ text }}</button>
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
            name: null,
            email: null,
            phone: null,
            password: null,
            repeat__password: null,
            err: null,
            success: null,
            text: 'Sign In'
        }
    },
    methods:{
        register(){
            //Check if all fields has been filled out
            if(!this.name || !this.email || !this.phone || !this.password || !this.repeat__password){
                this.err = "jdalfajkdfhakjf"
                this.text = ''
            }else{
                this.success = 'Successful'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.register__content{
    padding: 5rem 0;
    h1{
        font-weight: bolder;
        color: #000;;
        font-size: 2.4rem;
        text-transform: uppercase;
        text-shadow: 0.01em 0.01em 0.03em rgba(0,0,0,.5);
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
                color: #2b2b2b;
                font-size: .92rem;
            }
        }
        small{
            color: #2b2b2b;
            font-size: .9rem;
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
        font-size: 1.7rem !important;
        text-align: center;
        line-height: 1.6;
    }
}
</style>