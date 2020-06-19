<template>
  <div class="about">
    <Navbar />
    <div class="about__wrapper">
      <div class="container">
        <h1>About Us</h1>
        <p>Get to know us today!</p>
      </div>
    </div>
    <div class="about__content">
      <div class="container">
       <div class="row">
         <div class="col-md-6 image__holder">
            <img src="../assets/images/designs2.jpg" class="img-fluid" alt="">
         </div>
         <div class="col-md-1"></div>
         <div class="col-md-5">
           <h3>5+ YEARS OF BUILDING AMAZING USER EXPERIENCES</h3>
           <p>We enable businesses to take advantage of the numerous opportunities that the internet provides today. The COVID-19 pandemic has caused a shift into how businesses are conducted and if your business has no online presense, then you are seriously loosing out. Our solutions either in website design and development, graphics design, mobile applications development are beautifully crafted with your users in mind. Talk to us today!</p>
           <router-link to="/request" class="request__btn">Begin a Project</router-link>
         </div>
       </div>
      </div>
    </div>
    <div class="trust">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center heading">
            <p>WE ARE EXCELLENT IN WHAT WE DO</p>
            <h3>SEE WHY OUR CLIENTS TRUST US</h3>
          </div>
        </div>
        <div class="row text-center pt-5">
          <div class="col-md-3">
            <img src="../assets/images/care.svg" class="icons" alt="">
            <h5>24/7 Customer Support</h5>
            <p>Our top notch customer support team is always ready to respond to your concerns.</p>
          </div>
           <div class="col-md-3">
            <img src="../assets/images/speed.svg" class="icons" alt="">
            <h5>Speed and Efficiency</h5>
            <p>We deliver our projects on the set-out date. No stories!</p>
          </div>
           <div class="col-md-3">
            <img src="../assets/images/innovation.svg" class="icons" alt="">
            <h5>Innovated Solutions</h5>
            <p>Our products and services are innovative and custom built to suit your business needs.</p>
          </div>
           <div class="col-md-3">
          <img src="../assets/images/money.svg" class="icons" alt="">
            <h5>Fair Pricing</h5>
            <p>We price our products and services to be competitive and affordable.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="team">
      <div class="container">
        <div class="row">
          <div class="col-12 heading">
            <h2>Meet The Awsome Team</h2>
          </div>
        </div>
        <div class="team__wrapper">
          <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/achilles.png" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>Achilles Usuoyibo</h5>
              <h6>Team Lead/Developer</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/achilles.png" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>Achilles Usuoyibo</h5>
              <h6>Team Lead/Developer</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/achilles.png" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>Achilles Usuoyibo</h5>
              <h6>Team Lead/Developer</h6>
            </div>
          </div>
           <div class="team__card">
            <div class="img__wrapper">
              <img src="../assets/images/achilles.png" class="team__img img-fluid" alt="">
            </div>
            <div class="body">
              <h5>Achilles Usuoyibo</h5>
              <h6>Team Lead/Developer</h6>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
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
.about{
  .about__wrapper{
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
        font-size: .9rem;
        opacity: .6;
    }
  }
  .about__content{
    padding: 6rem 0;
    h3{
      font-weight: bold;
      color: #212121;
      padding-bottom: 1rem;
    }
    p{
      line-height: 2;
      color: #627081;
      font-size: .95rem;
      padding-bottom: 2rem;
    }
     .image__holder::after{
        content: "";
        width: 200px;
        position: absolute;
        margin: 0 auto;
        height: 100%;
        width: 95%;
        background: transparent;
        border: 5px solid $primary-color;
        left: 50px;
        right: 0;
        bottom: 30px;
        z-index: -10;
    }
    .request__btn{
      background: linear-gradient(to right, $secondary-color , $tertiary-color);
      padding: 1.2rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      color: #fff;
      &:hover{
        background: $secondary-color;
        transition: all ease-in-out .5s;
      }
    }
  }
  .trust{
    padding-top: 4rem;
    padding-bottom: 4rem;
    // background: #fafafa;
    .heading{
      p{
        color: $tertiary-color;
        font-size: .85rem;
        font-weight: bold;
      }
      h3{
        font-weight: bold;
        color: #212121;
        font-size: 2rem;
      }
    }
    .holder{
       box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
       padding: 2rem;
    }
    .icons{
      max-width: 60px;
      height: auto;
      padding-bottom: 1rem;
    }
    h5{
      font-weight: bold;
      color: #2b2b2b;
      font-size: 1.1rem;
    }
    p{
      color: #627081;
      font-size: .9rem;
      opacity: .9;
      line-height: 1.6;
      padding-top: 1rem;
    }
  }

  .team{
    padding: 4rem 0;
    h2{
      font-weight: bold;
      color: #2b2b2b;
    }
    .team__wrapper{
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: 30px;
      .team__card{
        box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
        &:hover{
            transform: translateY(-10px);
            transition: all ease-in-out .5s;
          }
        .img__wrapper{
          background: #000;
        }
        .body{
          padding:1.3rem 2rem;
          text-align: center;
          h5{
            font-weight: bold;
            color: #2b2b2b;
            font-size: 1rem;
          }
          h6{
            font-size: .9rem;
          }
        }
      }
    }
  }
}

//Media queries
@media only screen and (max-width: 600px){
  //  .about__wrapper{
  //    padding: 2rem 0 !important;
  //  }
   .about__content{
     h3{
       padding-top: 3rem;
       font-size: 1.3rem !important;
       line-height: 1.5;
     }
     .image__holder::after{
       display: none !important;
     }
   }
   .trust{
     h3{
       font-size: 1.5rem !important;
     }
   }
    .team{
     h2{
       font-size: 1.5rem !important;
       font-weight: bolder;
       text-align: center;
     }
   }
}
</style>