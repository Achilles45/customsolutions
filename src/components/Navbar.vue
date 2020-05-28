<template>
  <div class="navbar__wrapper">
      <div class="container">
          <div class="navbar__contents d-flex justify-content-between align-items-center">
              <div class="navbar__logo">
                  <router-link to="/" class="logo"><img src="../assets/images/logo.png" class="logo__img" alt=""></router-link>
              </div>
              <nav class="nav__items">
                  <ul class="d-flex justify-content-between">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/about">About Us</router-link></li>
                      <li><router-link to="/marketplace">Marketplace</router-link></li>
                      <li><router-link to="/">Affiliate</router-link></li>
                      <li><router-link to="/contact">Contact Us</router-link></li>
                  </ul>
              </nav>
              <div @click="showNav()" class="navbar__toggler">
                  <i class="fa fa-bars"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.fixNav()
        this.showNav()
    },
    methods:{
         fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 150) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        },
        showNav:function(){
            const navItems = document.querySelector('.nav__items')
            navItems.classList.toggle('show__nav')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.navbar__wrapper{
    background: $primary-color;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    .navbar__contents{
        .logo__img{
            max-width: 300px;
            height: auto;
        }
      nav{
          padding-top: 1rem;
          ul li a{
              color: #fff;
              margin-left: 1.5rem;
              text-transform: capitalize;
              font-size: .95rem;
              opacity: .8;
          }
      }
      .navbar__toggler{
          display: none;
      }
    }
}

//Styling for fixing navigation
.fix__nav{
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 10000 !important;
    background: #000;
    padding: .8rem 0;
    transition: all ease-in-out .5s;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.17);
}
//Media queries
@media only screen and (max-width: 990px){
    .navbar__wrapper{
        position: relative;
        .logo__img{
        max-width: 250px !important;
        height: auto;
    }
    nav{
        display: none;
        ul{
            flex-direction: column;
            top: 100%;
            line-height: 4;
            position: absolute;
            // bottom: 100;
            background: red;
            z-index: 10000 !important;
            left: 0 !important;
            width: 100%;
        }
    }
    .navbar__toggler{
        display: block !important;
    }
    }
    .show__nav{
        display: block !important;
    }
}
</style>