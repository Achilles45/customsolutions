<template>
  <div class="about">
      <div class="container">
          <div class="row">
              <!-- <div class="col-md-2"></div> -->
              <div class="col-md-6 about__img__holder">
                  <img src="../assets/images/designs2.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5 text">
                   <div class="heading">
                  <h1><strong>WHO ARE WE</strong></h1>
              </div>
                  <p>We're a technology agency that provides beautiful and top notch digital products and services ranging from website design, graphics design, digital marketing and others that makes business operations efficient and thus increasing sales for our clients.</p>
                  <router-link to="/marketplace" class="about__btn">Begin a Project</router-link>
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
            color: #000;
            font-size: 2.8rem;
        }
    }
         p{
        color: #676767;
        padding-top: .7rem;
        line-height: 2;
        padding-bottom: 2rem;
    }
    .about__btn{
        background: $secondary-color;
        color: #fff;
        text-decoration: none;
        padding: 1rem 3rem;
        border-radius: 4px;
        font-size: .9rem;
        &:hover{
           background-image: linear-gradient(to right, $secondary-color , $tertiary-color);
           transition: all ease-in-out .5s !important;
        }
    }
    }
}
</style>