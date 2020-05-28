<template>
  <div class="details">
      <Navbar />
      <div class="detials__wrapper">
          <div class="container">
              <h1>School Management Solution</h1>
              <p>Take your school management process online today!</p>
          </div>
      </div>
      <div class="details__content">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                      <img src="../assets/images/school3.jpg" class="img-fluid" alt=""><br><br>
                  </div>
                  <div class="col-md-5">
                      <h3>Complete School Management Solution</h3>
                      <hr>
                      <p>COVID19 has definitely changed how we learn forever and there is no better time to position your school for this new reality than now. We procide with a very robust, efficient and scallable online school management portal allows you to remain competitive in the educational <br />Our solution allows your school to interact with parents and students online, assign assignments, take attendance, result posting and checking, staff and finance management and many more. Let's empower your school to be different today!</p>
                      <h6>What we promise you if you buy this solution</h6>
                      <div class="row mb-4">
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>Beautiful Design</p>
                              <p><i class="fa fa-check-circle"></i>Responsive Design</p>
                          </div>
                          <div class="col-md-6">
                              <p><i class="fa fa-check-circle"></i>24/7 Customer support</p>
                              <p><i class="fa fa-check-circle"></i>Working features</p>
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
            color: #676767;
            font-weight: 400;
            line-height: 1.8;
            // padding-bottom: 2rem;
            font-size: .95rem;
        }
        h6{
            font-weight: bold;
        }
        .request__btn{
            background: $primary-color;
            padding: 1rem 2rem;
            border-radius: 3px;
            color: #fff;
            text-decoration: none;
            font-size: .9rem;
             transition: all ease-in .5s;
            &:hover{
                background-image: linear-gradient(to right, $secondary-color , $tertiary-color);
                transition: all ease-in .5s;
                border-radius: 3px;
            }
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