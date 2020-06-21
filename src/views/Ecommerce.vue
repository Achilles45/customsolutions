<template>
  <div class="details">
      <Navbar />
      <div class="detials__wrapper">
          <div class="container">
              <h1>eCommerce Solution</h1>
              <p>If you are not selling online, then you are seriously loosing out</p>
          </div>
      </div>
      <div class="details__content">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                      <img src="../assets/images/ecommerce2.png" class="img-fluid" alt=""><br><br>
                  </div>
                  <div class="col-md-5">
                      <h2>Complete eCommerce Solution</h2>
                      <hr>
                      <p>If you are not selling your products or services online in 2020, then you are seriously loosing and you need to get yourselve our custom made e-commerce solution. <br> We can create for you a beautiful ecommerce website where you begin selling your products, manage sales, manage products and inventory all from the comfort of your mobile phone or laptop. Don't be left out. You need to start selling onine today</p>
                      <h6>What we promise you if you buy this solution</h6>
                       <div class="row mb-4">
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>Beautiful Design</p>
                              <p><i class="fa fa-check-circle"></i>Responsive Design</p>
                                 <p><i class="fa fa-check-circle"></i>Free Domain name</p>
                          </div>
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>24/7 Customer support</p>
                              <p><i class="fa fa-check-circle"></i>Working features</p>
                            <p><i class="fa fa-check-circle"></i>Corporate email</p>
                          </div>
                      </div>
                      <router-link to="/request" class="request__btn">Request Product</router-link>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.details{
    .detials__wrapper{
        background: linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url('../assets/images/img1.jpeg');
        color: #fff;
        padding: 5rem 0;
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
    .details__content{
        padding: 4rem 0;
        h2{
            // padding-top: 1rem;
            font-weight: 500;
            color: #000;
        }
        p{
            color: #627081;
            font-size: .95rem;
            padding-bottom: 1rem;
            line-height: 2.2;
            opacity: .9;
        }
        h6{
            font-weight: bold;
            color: #627081;
        }
        .request__btn{
            background: $primary-color;
            padding: 1rem 2rem;
            border-radius: 3px;
            color: #fff;
            text-decoration: none;
            font-size: .9rem;
        }
    }
}

//Media queries
@media only screen and (max-width: 600px){
   .detials__wrapper{
       h1{
        font-size: 1.5rem !important;
       }
   } 
}
</style>