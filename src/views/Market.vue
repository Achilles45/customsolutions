<template>
  <div class="market">
      <Navbar />
      <div class="market__wrapper">
          <div class="container">
              <h1>Our Marketplace</h1>
              <p>Explore our marketplace to see some of our products!</p>
          </div>
      </div>
      <div class="container">
          <div class="market__content">
              <div class="market__card">
                  <img src="../assets/images/hotel1.png" class="img-fluid" alt="">
                  <h5>Hotel Management Solution</h5>
                  <hr>
                  <p>Our robust systems allows you to manage your hotel from anywhere, on any device...</p>
                  <router-link to="/hotel-management-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/school2.png" class="img-fluid" alt="">
                  <h5>School Management Solution</h5>
                  <hr>
                  <p>Your one stop-shop solution to comletely help position your school for today's reality...</p>
                  <router-link to="/school-management-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/ecommerce4.jpg" class="img-fluid" alt="">
                  <h5>eCommerce Solutions</h5>
                  <hr>
                  <p>If you are not selling online, then you are lossing out. Get our complete eCommerce website today.</p>
                  <router-link to="/ecommerce-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/estate1.jpg" class="img-fluid" alt="">
                  <h5>Real Estate Management Solution</h5>
                  <hr>
                  <p>List your properties for rent or sale online and allow anyone to interact with your business today....</p>
                  <router-link to="/real-estate-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/hospital2.jpg" class="img-fluid" alt="">
                  <h5>Hospital/Pharmacy Solution</h5>
                  <hr>
                  <p>Keep better record of your patients, efficiently manage your healt outfit from any device and any location...</p>
                  <router-link to="/medical-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/inventory2.jpg" class="img-fluid" alt="">
                  <h5>Inventory Management</h5>
                  <hr>
                  <p>If you keep a physical shop with goods, we can help you make sense of what's happening in your business with technology..</p>
                  <router-link to="/inventory-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <!-- <div class="market__card">
                  <img src="../assets/images/hospital2.jpg" class="img-fluid" alt="">
                  <h5>Hospital/Pharmacy Solution</h5>
                  <hr>
                  <p>Keep better record of your patients, efficiently manage your healt outfit from any device and any location...</p>
                  <router-link to="/medical-solution" class="market__btn">Read more</router-link><br><br>
              </div>
               <div class="market__card">
                  <img src="../assets/images/hospital2.jpg" class="img-fluid" alt="">
                  <h5>Hospital/Pharmacy Solution</h5>
                  <hr>
                  <p>Keep better record of your patients, efficiently manage your healt outfit from any device and any location...</p>
                  <router-link to="/medical-solution" class="market__btn">Read more</router-link><br><br>
              </div> -->
      </div>
      </div>
      <div class="action">
          <div class="container">
              <div class="action__card">
                 <div class="row">
                     <div class="col-md-7">
                          <h1>Begin A Project</h1>
                            <p>You have an idea or you want to digitally project your business? Let's help you bring your idea to life. Talk to us today!</p>
                            <router-link to="/" class="link__btn">Request a Quote</router-link>
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
.market{
    .market__wrapper{
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
    .market__content{
        margin: 4rem 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        grid-gap: 30px;
        .market__card{
              box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
              padding: 1rem;
              border-radius: 3px;
              cursor: pointer;
              &:hover{
                  transform: translateY(-10px);
                  transition: all ease-in-out .5s;
              }
            h5{
                padding-top: .5rem;
                color: #2b2b2b;
                font-size: 1.1rem;
                font-weight: bold;
                // padding-bottom: 1rem;
            }
            p{
                color: #627081;
                padding-bottom: 1rem;
                font-size: .9rem;
                line-height: 1.6;
            }
            .market__btn{
                background: $primary-color;
                text-decoration: none;
                padding: .7rem 2rem;
                border-radius: 3px;
                color: #fff;
                font-size: .8rem;
                font-weight: 400;
                &:hover{
                    background: $secondary-color;
                    transition: all ease-in-out .5s;
                }
            }
        }
    }
    .action{
        background: #000;
        padding: 4rem 0;
        color: #fff;
        .action__card{
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
            padding: 1.2rem 3rem;
            border-radius: 6px;
            font-size: .9rem;
            &:hover{
                background: $tertiary-color;
                font-weight: bold;
                color: #000;
                transition: all ease-in-out .5s;
            }
        }
    }
    }
}
</style>