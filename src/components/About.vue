<template>
  <div class="about">
      <div class="container">
          <div class="row">
              <!-- <div class="col-md-2"></div> -->
              <div class="col-md-6 about__img__holder">
                  <img src="../assets/images/designs2.jpg" class="img-fluid" alt=""><br><br>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5 text mt-1">
                   <div class="heading">
                  <h1><strong>WHO ARE WE</strong></h1>
              </div>
                  <p>We are a technology agency who build solutions that specifically suit your business needs and make your operations simplified and more efficient. More than anyone else, we understand the digital landscape and our professionals are waiting to fly your brand to the moon.</p>
                  <router-link to="/about" class="about__btn">Read more</router-link>
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
.about{
    padding: 8rem 0;
    .about__img__holder::after{
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
    .text{
        .heading{
        h1{
            font-weight: 900;
            color: #2b2b2b;
            font-size: 2.8rem;
        }
    }
         p{
        color: #2b2b2b;
        padding-top: .7rem;
        line-height: 2;
        padding-bottom: 2rem;
        opacity: .9;
    }
    .about__btn{
        background: $primary-color;
        color: #fff;
        text-decoration: none;
        padding: 1.2rem 3rem;
        border-radius: 4px;
        font-size: .9rem;
        &:hover{
           background-image: linear-gradient(to right, $secondary-color , $tertiary-color);
           transition: all ease-in-out .5s !important;
        }
    }
    }
}

//Media queries
@media only screen and (max-width: 600px){
    .about{
        padding: 4rem 0 !important;
        .about__img__holder::after{
        display: none !important;
    } 
    .text{
        .heading{
        h1{
            font-weight: 900;
            color: #2b2b2b;
            font-size: 2.3rem !important;
        }
    }
    }
    }
}
</style>