<template>
  <div class="register">
    <Navbar />
    <div class="register__content">
        <div class="container">
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <h1>Signin to your account</h1>
                <form action="">
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email Address *">
                    </div>
                     <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password *">
                    </div>
                    <small>Yet to have an account? <router-link to="/affiliate/register">Create a free account</router-link></small><br><br>
                    <button type="submit" class="register__btn">Sign In</button>
                </form>
            </div>
            <div class="col-md-3"></div>
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
.register__content{
    padding: 5rem 0;
    h1{
        font-weight: bolder;
        color: #000;;
        font-size: 2.4rem;
        text-transform: uppercase;
        text-shadow: 0.01em 0.01em 0.03em rgba(0,0,0,.5);
    }
    form{
        margin-top: 2rem;
        padding: 2rem 0rem;
        input{
            border-radius: 0px;
            border:none;
            box-shadow: none;
            border-bottom: 1px solid #ccc;
            margin-bottom: 2rem;
            &::placeholder{
                color: #2b2b2b;
                font-size: .92rem;
            }
        }
        small{
            color: #2b2b2b;
            font-size: .9rem;
        }
        .register__btn{
             background: linear-gradient(to right, $secondary-color , $tertiary-color);
             border: none;
             padding: 1rem 2rem;
             border-radius: 50px;
             width: 100%;
             color: #fff;
             &:hover{
                 background: $tertiary-color;
             }
        }
    }
}
</style>