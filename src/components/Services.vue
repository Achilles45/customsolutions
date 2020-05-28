<template>
  <div class="services">
      <div class="container">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 text text-center">
              <h1><strong>OUR SERVICES</strong></h1>
              <p>We provide quality products and services to our clients</p>
              <P></P>
            </div>
            <div class="col-md-3"></div>
          </div>
          <div class="service__wrapper">
            <div class="service__card">
              <div class="border__images">
                <img src="../assets/images/half-maze-orange.png" class="border__img" alt="">
              </div>
              <img src="../assets/images/website.jpg" class="img-fluid service__img" alt="">
              <div class="services__body">
                <h5><router-link to="/" class="heading">Website Design and Development</router-link></h5>
                <p>Get beautifully crafted, functional websites and web applications that will increase leads for your business today.</p>
                <router-link to="/about" class="card__link">Read more <i class="fa fa-long-arrow-alt-right"></i></router-link>
              </div>
            </div>
             <div class="service__card">
              <div class="service__card">
                <div class="border__images">
                <img src="../assets/images/half-maze-green.png" class="border__img" alt="">
              </div>
              <img src="../assets/images/designs3.jpg" class="img-fluid service__img" alt="">
              <div class="services__body">
                <h5><router-link to="/" class="heading">Branding and Graphics Design</router-link></h5>
                <p>Engage with your customers with our colorful and expertly designed graphics for your brand</p>
                <router-link to="/" class="card__link">Read more <i class="fa fa-long-arrow-alt-right"></i></router-link>
              </div>
            </div>
            </div>
             <div class="service__card">
              <div class="service__card">
                <div class="border__images">
                <img src="../assets/images/half-maze-gray.png" class="border__img" alt="">
              </div>
              <img src="../assets/images/app.png" class="img-fluid service__img" alt="">
              <div class="services__body">
                <h5><router-link to="/" class="heading">Mobile Applications Development</router-link></h5>
                <p>You need a mobile app for your business or idea, we've got your back. Reach out to us today!</p>
                <router-link to="/" class="card__link">Read more <i class="fa fa-long-arrow-alt-right"></i></router-link>
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
.services{
 .text{
    h1{
    font-weight: bolder;
    color: #000;
    font-size: 3rem;
    text-shadow: 0.01em 0.01em 0.01em rgba(0,0,0,.5);
  }
  p{
    color: #676767
  }
  p::after {
	content: "";
	width: 200px;
	position: absolute;
	margin: 0 auto;
	height: 5px;
	background: $tertiary-color;
	left: 0;
	right: 0;
	bottom: -10px;
}
 }
  .service__wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 30px;
    margin-top: 4rem;
    margin-bottom: 5rem;
    .service__card{
      display: block;
      position: relative;
      overflow: hidden;
      width: 100%;
      box-shadow: 0 7px 50px -10px rgba(0,0,0,.17);
      border-radius: 3px;
      // border: 1px solid rgba(0, 0, 0, 0.03);
      margin-bottom: 0px;
      transition: all 0.3s ease 0s;
      .border__images{
        position: absolute;
        bottom: 0;
        right: 0;
        .border__img{
          max-width: 100px;
          height: auto;
        }
      }
      .service__img{
        position: relative;
        overflow: hidden;
        border-radius: 3px;
        &:hover{
          transform: scale(1.1);
          display: block;
          transition: all ease-in-out .5s;
        }
      }
      .services__body{
        padding: 35px 25px 32px;
        background: #fff;
        p{
          color: #676767;
          font-size: .9rem;
          line-height: 1.7;
          padding-top: .7rem;
          // opacity: .9;
          padding-bottom: .5rem;
          font-weight: 500;
        }
        .heading{
          color:#000;
          font-weight: bold;
          line-height: 1.4;
          font-size: 1.3rem;
          text-transform: capitalize;
          text-decoration: none;
          &:hover{
            color: $tertiary-color;
            transition: all ease-out .5s;
          }
        }
        .card__link{
          color:#627081;
          text-decoration: none;
          font-weight: 400;
          font-size: 1rem;
          &:hover{
            color: $tertiary-color;
          }
        }
        .fa-long-arrow-alt-right{
          animation-name: moveIcon;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
        }
      }
    }
  }
}

//Animations
@keyframes moveIcon{
  from{
    transform: translateX(20px) ;
  }
  to{
    transform: translateX(0px);
  }
}
</style>