<template>
  <div class="hero">
    <div class="social__holder">
       <a href=""><i class="fab fa-whatsapp"></i></a><br>
      <a href=""><i class="fab fa-facebook-f"></i></a><br>
      <a href=""><i class="fab fa-twitter"></i></a><br>
    </div>
    <div class="balls__holder">
      <div class="ball ball1"></div>
      <div class="ball ball2"></div>
      <div class="ball ball3"></div>
      <div class="ball ball4"></div>
    </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 text">
            <h1 class="animate__animated animate__slideInUp"><strong>Enabling businesses with digital solutions</strong></h1>
            <p>We pride ourselves in building solutions that works. From the simplest web pages to highly complex web and mobile applications, you are sure of getting solutions that specifically suits your business needs.</p>
            <div class="pb-5">
              <div class="button__holder">
                <router-link to="/" class="hero__btn">Start A Project&nbsp;&nbsp; <i class="fa fa-long-arrow-alt-right"></i></router-link>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-1"></div> -->
          <div class="col-md-6 d-none d-md-block">
            <img src="../assets/images/img7.png" class="img-fluid hero__img" alt=""><br>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.hero{
  background: $primary-color;
  height: 100vh;
  color: #fff;
  position: relative;
  padding: 8rem 0;
 .text{
    h1{
    font-weight: 900;
    font-size: 2.9rem;
    letter-spacing: 2px;
    line-height: 1.4;
    text-shadow: 0.03em 0 0.03em #fff;
    padding-bottom: 1.5rem;
  }
  p{
    opacity: .8;
    padding-bottom: 2.8rem;
    font-size: .96rem;
    line-height: 2;
    word-spacing: 1px;
  }
  .hero__btn{
     background: linear-gradient(to right, $secondary-color , $tertiary-color);
    color: #fff;
    text-decoration: none;
    padding: 1.4rem 3rem;
    border-radius: 50px;
    transition: all ease-in-out .5s;
    &:hover{
      padding: 1.1rem 3.5rem;
    }
  }
  .fa-long-arrow-alt-right{
    animation-name: moveIcon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
 }
 //SOCIAL HOLDER
 .social__holder{
   position: fixed;
   background: #000;
  //  height: 50px;
  //  width: 50px;
   top: 30%;
   display: flex;
   flex-direction: column;
   padding: 2rem 1rem;
   .fa-facebook-f, .fa-twitter, .fa-whatsapp{
     color: #fff;
     &:hover{
       color: $secondary-color;
       transition: all ease-in-out .5s;
     }
   }
 }
 //BALL'S HOLDER
 .balls__holder{
  //  position: absolute;
   .ball{
     height: 20px;
     width: 20px;
     border-radius: 50px;
     position: absolute;
     animation-name: moveBalls;
     animation-duration: 5s;
     animation-iteration-count: infinite;
     animation-direction: alternate-reverse;
   }
   .ball1{
     background: #EB4D70;
     left: 5%;
     bottom: 50%;
   }
    .ball2{
     background: $secondary-color;
     right: 60%;
     top: 0;
     animation-delay: 4s;
   }
    .ball3{
     background: #554F7F;
     right: 30%;
   }
    .ball4{
     background: #FF9A68;
     right: 5%;
     top: 0;
     animation-delay: 7s;
   }
 }
}

//Animations
@keyframes moveIcon{
  from{
    transform: translateX(30px) ;
  }
  to{
    transform: translateX(0px);
  }
}

@keyframes moveBalls{
  from{
    transform: translateY(200px) ;
  }
  to{
    transform: translateY(0px);
  }
}

//Media queries
@media only screen and (max-width: 600px){
  .hero{
    padding: 7.5rem 0;
    height: 80vh !important;
    .social__holder{
      display: none;
    }
    .balls__holder{
      .ball{
        height: 12px !important;
        width: 12px !important;
      }
      .ball1{
     background: #EB4D70;
     left: 5%;
     bottom: 40% !important;
   }
    .ball2{
     background: $secondary-color;
     right: 60%;
     top: 10%;
     animation-delay: 4s;
   }
    .ball3{
     background: #554F7F;
     right: 30%;
   }
    .ball4{
     background: #FF9A68;
     right: 5%;
     top: 10% !important;
     animation-delay: 7s;
   }
    }
    .hero__img{
      max-width: 200px;
      height: auto;
    }
    .text{
      h1{
        font-size: 1.7rem !important;
        line-height: 1.5;
      }
    }
  }
}
</style>