<template>
  <div class="websites">
      <Navbar />
       <div class="detials__wrapper">
          <div class="container">
              <h1>Apps Development</h1>
              <p>Our apps development services is tailored to meet your specific need.</p>
          </div>
      </div>
      <div class="details__content">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <img src="../assets/images/app.png" class="img-fluid" alt="">
                  </div><br>
                  <div class="col-md-6 text">
                      <h1>Performant & Functional Mobile Apps</h1>
                      <p>Most of your users will be using mobile devices to interface with your business, so having performant and functional mobile applications can drive growth for your business. Our experience team of designers and developers are ready to build for you robust mobile applications on the andriod or IOS platforms.</p><br>
                    <router-link to="/request" class="request__btn">Request a Quote</router-link>
                  </div>
              </div>
              <div class="advantage__grid">
                      <div class="advantages__wrapper d-flex">
                          <div class="icon__holder">
                              <i class="fa fa-mobile"></i>
                          </div>
                          <div class="advantages__content">
                              <h4>Responsive Designs</h4>
                              <p>Our team will craft for you business beautiful mobile applications that will help drive growth.</p>
                          </div>
                      </div>
                      <div class="advantages__wrapper d-flex">
                          <div class="icon__holder">
                              <i class="fa fa-cubes"></i>
                          </div>
                          <div class="advantages__content">
                              <h4>Great User Experience</h4>
                              <p>We craft for you mobile applications that are not only beautiful, but very easy to use by your customers.</p>
                          </div>
                      </div>
                      <div class="advantages__wrapper d-flex">
                          <div class="icon__holder">
                              <i class="fa fa-lock"></i>
                          </div>
                          <div class="advantages__content">
                              <h4>Safe & Secured</h4>
                              <p>Your security is important. We enable SSL Security to protect against malicious activities.</p>
                          </div>
                      </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.websites{
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
.details__content{
    padding: 4rem 0;
        h1{
            color: #000;
            text-transform: capitalize !important;
            font-weight: bold;
            padding-bottom: 1.5rem;
            opacity: .8;
    }
    p{
        color: #627081;
        line-height: 2;
        opacity: .8;
        font-size: .95rem;
    }
    .request__btn{
        background: $primary-color;
        border-radius: 3px;
        padding: 1.3rem 2rem;
        text-decoration: none;
        margin-top: 2rem;
        color: #fff;
        &:hover{
            background: linear-gradient(to right, $secondary-color , $tertiary-color);
        }
    }
}
.advantage__grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin-top: 5rem;
    .advantages__wrapper{
        padding-top: 1rem;
        .icon__holder{
            background: #8AEFEA;
            border-radius: 50%;
            height: 60px;
            width: 150px;
            text-align: center;
            position: relative;
            margin-right: 2rem;
             .fa-mobile, .fa-lock, .fa-cubes{
                color: #15B2EC;
                margin-top: 1.2rem;
                font-size: 1.5rem;
            }
        }
        .advantages__content{
            h4{
                font-weight: bold;
                color: #2b2b2b;
                opacity: .85;
                font-size: 1.2rem;
            }
            p{
                font-size: .9rem;
                padding-top: .5rem;
            }
        }
    }
}
}

//Media Queries
@media only screen and (max-width: 600px){
    .detials__wrapper{
        h1{
            font-size: 2rem !important;
        }
        P{
            line-height: 2;
            padding-top: 1rem;
        }
    }
    .details__content{
        h1{
            font-size:1.7rem !important;
            padding-top: 2rem;
            line-height: 1.5;
        }
    }
}
</style>