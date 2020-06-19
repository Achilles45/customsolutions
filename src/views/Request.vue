<template>
  <div class="request">
     <Navbar />
     <div class="container">
         <div class="row contents">
             <div class="col-md-2"></div>
             <div class="col-md-8">
                 <h1 class="text-center">Tell us about what you want</h1>
                 <form action="">
                    <div class="form-group">
                        <label for="name">Your Name *</label>
                        <input type="text" class="form-control" placeholder="Your full name">
                    </div>
                    <div class="form-group">
                        <label for="name">Mobile Number *</label>
                        <input type="tel" class="form-control" placeholder="Phone Number">
                    </div>
                    <div class="form-group">
                        <label for="name">Referral ID (Optional) *</label>
                        <input type="tel" class="form-control" placeholder="Referral ID">
                    </div>
                    <label for="message">Tell us about what you want to build</label>
                    <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder="Do you need a website or graphics design or mobile application? Tell us ..."></textarea>
                    <div class="text-center">
                        <button type="submit" class="form__btn">Make Request</button>
                    </div>
                 </form>
             </div>
             <div class="col-md-2"></div>
         </div>
     </div>
     <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
components:{
    Navbar,
    Footer
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.request{
    .contents{
        h1{
            font-weight: bold;
            color: #2b2b2b;
            text-transform: capitalize;
        }
        padding: 5rem 0;
        form{
            padding-top: 3rem;
            label{
                font-weight: bold;
                font-size: .85rem;
                color: #627081;
            }
            input{
                height: 3.3rem;
                box-shadow: none;
                outline: none;
                border-radius: 1px;
                &::placeholder{
                    font-size: .85rem;
                    color: #627081;
                    opacity: .7;
                }
            }
            textarea{
                margin-bottom: 2rem;
                height: 14rem;
                box-shadow: none;
                &::placeholder{
                    font-size: .85rem;
                    color: #627081;
                    opacity: .7;
                }
            }
            .form__btn{
            background: linear-gradient(to right, $secondary-color , $tertiary-color);
            color: #fff;
            text-decoration: none;
            padding: 1.2rem 5rem;
            border-radius: 50px;
            transition: all ease-in-out .5s;
            border: none;
            width: 100%;
            &:hover{
            background: $secondary-color;
            }
  }
        }
    }
}


//Media Queries
@media only screen and (max-width: 600px){
    .request{
        .contents{
            h1{
                font-size: 1.7rem;
                line-height: 1.4;
            }       
        }
    }
}
</style>