<template>
  <div class="banner">
      <div class="container">
          <div class="row">
              <div class="col-12 banner__card">
                  <div class="row">
                      <div class="col-md-7">
                          <h1>Custom Made Solutions?</h1>
                          <p>We think about your users or customers while crafting our products and services to make sure our solutions specifically suit your business needs. </p>
                          <router-link to="/marketplace" class="link__btn">Our Marketplace</router-link>
                      </div>
                  </div>
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
.banner{
    background: #000;
    color: #fff;
    padding: 6rem 3rem;
    .banner__card{
        // background-image: linear-gradient(to right, $secondary-color , $tertiary-color);
         background: $secondary-color;
        border-radius: 25px;
        padding: 5rem;
        h1{
            font-weight: bolder;
            font-size: 2.7rem;
        }
        p{
            padding-top: 1.2rem;
            line-height: 2;
            opacity: .8;
            padding-bottom: 2rem;
            font-size: 1rem;
        }
        .link__btn{
            background: #000;
            color: #fff;
            text-decoration: none;
            padding: 1.3rem 3rem;
            border-radius: 6px;
            font-size: .9rem;
            &:hover{
                padding: 1.2rem 3.5rem;
                font-weight: bold;
                color: #fff;
                transition: all ease-in-out .5s;
            }
        }
    }
}

//Media queries
@media only screen and (max-width: 600px){
    .banner{
        padding: 5rem 2rem !important;
    }
    .banner__card{
        padding: 4rem 2rem !important;
        h1{
            font-weight: bold !important;
            font-size: 1.5rem !important;
            line-height: 1.6;
        }
        p{
            font-size: .9rem !important;
            opacity: .7 !important;
        }
    }
}
</style>