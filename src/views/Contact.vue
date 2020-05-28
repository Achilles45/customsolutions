<template>
  <div class="contact">
    <Navbar />
    <div class="contact__wrapper">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have any question, reach out to us today!</p>
      </div>
    </div>
    <div class="contact__content">
      <div class="container">
       <div class="row">
         <div class="col-md-5 text">
             <h2>Contact us today!</h2>
            <h5>The customer support team is always ready to answer all your questions</h5>
            <h6><i class="fa fa-home"></i>Contact Office</h6>
            <p>Opposite main gate, University of Nigeria, Nsukka, Enugu State, Nigeria.</p>
            <h6><i class="fa fa-envelope"></i>Email Address</h6>
            <p>support@customsolutions.com</p>
             <h6><i class="fa fa-phone"></i>Phone Number/Whatsapp</h6>
             <p><a href="tel:08103515205">08103515205</a></p>
         </div>
         <div class="col-md-1"></div>
         <div class="col-md-5 text">
           <h2>Send us a message</h2>
           <p>You can send in your enquiries and the team will reach you in less than 24 hours</p>
           <form action="">
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Full name">
               </div>
                <div class="form-group">
                   <input type="text" class="form-control" placeholder="Email address">
               </div>
                <div class="form-group">
                   <input type="tel" class="form-control" placeholder="Phone Number">
               </div>
               <div class="form-group">
                   <textarea name="" id="" cols="10" rows="6" class="form-control">Your mesage</textarea>
               </div>
               <button type="submit" class="form__btn">Send Message</button>
           </form>
         </div>
       </div>
      </div>
    </div>
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
.contact{
  .contact__wrapper{
    background: linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url('../assets/images/img1.jpeg');
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
  .contact__content{
      padding: 4rem 0;
    .text{
     h2{
         font-weight: bold;
         color:#212121;
         font-size: 2.3rem;
     }
     h5{
         color: #627081;
         font-size: 1rem;
         font-weight: 400;
         padding-top: .5rem;
         line-height: 1.5;
         padding-bottom: 1.5rem;
     }
     .fa-home, .fa-envelope, .fa-phone{
         margin-right: .5rem;
         color: $secondary-color;
     }
     h6{
         font-weight: bold;
         font-size: 1rem;
         color: #2b2b2b;
         padding-bottom: .5rem;
     }
     p, a{
         color: #627081;
         text-decoration: none;
     }

 }
  }
}
form{
    margin-top: 2rem;
    input{
        border-radius: 0;
        box-shadow: none;
        height: 3rem;
        &::placeholder{
            font-size: .9rem;
            font-weight: 500;
            color: #676767;
            opacity: .7;
        }
    }
    textarea{
        border-radius: 0;
        box-shadow: none;
            font-size: .9rem;
            font-weight: 500;
            color: #676767;
            opacity: .7;
            margin-bottom: 2rem;
    }
    .form__btn{
        background: linear-gradient(to right, $secondary-color , $tertiary-color);
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        color: #fff;
        &:hover{
            background: $tertiary-color;
            transition: all ease-in-out .5s;
        }
    }
}
</style>