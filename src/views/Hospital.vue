<template>
  <div class="details">
      <Navbar />
      <div class="detials__wrapper">
          <div class="container">
              <h1>Hospital/Pharmarcy Solution</h1>
              <p>You can keep better data and provide better services for your patients.</p>
          </div>
      </div>
      <div class="details__content">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                      <img src="../assets/images/hospital2.jpg" class="img-fluid" alt=""><br><br>
                  </div>
                  <div class="col-md-5">
                      <h3>Hospital/Pharmarcy Solution</h3>
                      <hr>
                      <p>We have created a smart software to help you serve your patients more efficiently. You can now completely keep your record online, accessit anytime, track your patients progress<br>We enable you to serve your patients effectively. You can now manage your drug inventory, employees, and position your brand for greatness.</p>
                        <div class="row mb-4">
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>Beautiful Design</p>
                              <p><i class="fa fa-check-circle"></i>Responsive Design</p>
                                 <p><i class="fa fa-check-circle"></i>Free Domain name</p>
                          </div>
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>24/7 Customer support</p>
                              <p><i class="fa fa-check-circle"></i>Working features</p>
                            <p><i class="fa fa-check-circle"></i>24/7 Corporate email</p>
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
        h3{
            // padding-top: 1rem;
            font-weight: bold;
            color: #2b2b2b;
        }
        p{
            color: #627081;
            font-weight: 400;
            line-height: 1.8;
            // padding-bottom: 2rem;
            font-size: .95rem;
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