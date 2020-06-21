<template>
  <div class="affiliate">
      <Navbar />
      <div class="detials__wrapper">
          <div class="container">
              <h1>Affiliate Program</h1>
              <p>Make money when people buy our products/services through your recommendation!</p>
          </div>
      </div>
      <div class="affiliate__body">
          <div class="container">
              <div class="row">
                  <div class="col-md-6 image__holder">
                      <!-- <div class="img__overlay"></div> -->
                      <img src="../assets/images/img4.jpeg" class="img-fluid image" alt="">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-5 text">
                      <h2>Earn 5% when you refer a client to us</h2>
                      <p>We have an amazing affiliate program that allows you to earn money irrespective of your skills when you refer someone to buy any of our products or services. The 5% of the total value of the sale will be paid instantly to your back account. No stress as you can actually do this from home.</p>
                      <div class="button__holder">
                          <router-link to="/affiliate/register" class="affiliate__btn register">Create Account</router-link>
                          <router-link to="/affiliate/login" class="affiliate__btn login">Login</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from "@/components/Footer.vue"
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.detials__wrapper{
    background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url('../assets/images/img1.jpeg');
    color: #fff;
    padding: 4rem 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    h1{
        font-weight: bold;
        font-size: 2.8rem;
    }
    p{
        opacity: .7;
        font-size: .9rem;
    }
}
.affiliate__body{
    padding-top: 6rem;
    padding-bottom: 5rem;
        .image__holder::after{
        content: "";
        width: 200px;
        position: absolute;
        margin: 0 auto;
        height: 100%;
        width: 95%;
        background: transparent;
        border: 5px solid $tertiary-color;
        left: 50px;
        right: 0;
        bottom: 30px;
        z-index: -10;
    }
}
.image{
    border-radius: 4px;
}
.text{
    h2{
        font-weight: bold;
        color: #2b2b2b;
        font-size: 2.25rem;
        text-transform: capitalize;
    }
    p{
        color: #676767;
        font-size: .95rem;
        line-height: 2;
        padding-top: 1rem;
        padding-bottom: 1.7rem;
    }
    .affiliate__btn{
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        background: $primary-color;
        color: #fff;
        margin-right: 1rem;
        font-size: .9rem;
        &:hover{
            background: linear-gradient(to right, $secondary-color , $tertiary-color);
            transition: all ease-in-out .5s;
        }
    }
    .login{
    background: $secondary-color;  
    }
}

//Media queries
@media only screen and (max-width: 600px){
   .detials__wrapper{
       h1{
        font-size: 1.5rem !important;
       }
   } 
   .image__holder::after{
       display: none !important;
   }
   .affiliate__body{
       padding-top: 3rem !important;
       padding-bottom: 3rem !important;
       h2{
           padding-top: 2rem;
           font-size: 2rem !important;
       }
       p{
           padding-bottom: 3rem !important;
       }
   }
}
</style>