<template>
  <div class="request">
     <Navbar />
     <div class="container">
         <div class="row contents">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <h1 class="text-center">Tell us about what you want</h1>
                 <form @submit.prevent="request()">
                    <div class="form-group">
                        <label for="name">Your Name *</label>
                        <input type="text" class="form-control" placeholder="Your full name" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="name">Mobile Number *</label>
                        <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
                    </div>
                    <div class="form-group">
                        <label for="name">Referral ID (Optional) *</label>
                        <input type="tel" class="form-control" placeholder="Referral ID" v-model="referral">
                    </div>
                    <label for="message">Tell us about what you want to build</label>
                    <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder="Do you need a website or graphics design or mobile application? Tell us ..." v-model="message"></textarea>
                    <div v-if="err" class="alert alert-danger">
                        {{err}}
                    </div>
                      <div v-if="success" class="alert alert-success">
                        {{success}}
                    </div>
                     <div v-if="loading" class="loader text-center">
                        <img src="../assets/images/loader.gif" class="loader__img" alt="">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="form__btn">Make Request</button>
                    </div>
                 </form>
             </div>
             <div class="col-md-2"></div>
         </div>
     </div>
     <Footer />
  </div>
</template>

<script>
import db from "@/firebase/init"
import firebase from 'firebase'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
components:{
    Navbar,
    Footer
},
data(){
    return{
        name: null,
        phone: null,
        message: null,
        err: null,
        success: null,
        referral: null,
        loading: false
    }
},
methods:{
    request(){
        if(!this.name || !this.phone || !this.message){
            this.err = 'Error! Completely fill the form and try again.'
        }else{
            this.loading = true
            db.collection('request').add({
                name: this.name,
                phone: this.phone,
                messagez: this.message,
                referral: this.referral
            }).then(()=>{
                this.loading = false;
                this.success = "Request successfully submitted. We will get back to you shortly"
            })
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.request{
    .contents{
        h1{
            font-weight: bold;
            color: #2b2b2b;
            text-transform: capitalize;
        }
        padding: 5rem 0;
        form{
            padding-top: 3rem;
            label{
                font-weight: bold;
                font-size: .85rem;
                color: #627081;
            }
            input{
                height: 3.3rem;
                box-shadow: none;
                outline: none;
                border-radius: 1px;
                color: #627081;
                opacity: .8;
                font-size: .9rem;
                &::placeholder{
                    font-size: .85rem;
                    color: #627081;
                    opacity: .7;
                }
            }
            textarea{
                color: #627081;
                opacity: .8;
                font-size: .9rem;
                margin-bottom: 2rem;
                height: 14rem;
                box-shadow: none;
                &::placeholder{
                    font-size: .85rem;
                    color: #627081;
                    opacity: .7;
                }
            }
             .loader__img{
            max-width: 100px;
            height: auto;
        }
            .form__btn{
            background: linear-gradient(to right, $secondary-color , $tertiary-color);
            color: #fff;
            text-decoration: none;
            padding: 1.2rem 5rem;
            border-radius: 50px;
            transition: all ease-in-out .5s;
            border: none;
            width: 100%;
            outline: none;
            &:hover{
            background: $secondary-color;
            }
  }
        }
    }
}


//Media Queries
@media only screen and (max-width: 600px){
    .request{
        .contents{
            h1{
                font-size: 1.7rem;
                line-height: 1.4;
            }       
        }
    }
}
</style>