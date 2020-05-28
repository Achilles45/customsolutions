<template>
  <div class="project">
      <div class="pattern__holder d-none d-md-block">
          <img src="../assets/images/pattern1.svg" class="img-fluid pattern" alt="">
      </div>
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h6>PROJECT SHOWCASE</h6>
                  <h2>SEE OUR RECENT PROJECTS</h2>
              </div>
          </div>
          <div class="projects__wrapper">
              <div class="project__card card1">
                  <div class="project__detials details1 animate__animated animate__zoomIn text-center">
                      <p>Forex trade training and investment website</p>
                      <p><a href="https://www.uratraining.net" target="_blank">uratraining.net</a></p>
                  </div>
                  <img src="../assets/images/screenshot1.jpg" class="img-fluid screenshot" alt="">
              </div>
               <div class="project__card card2">
                    <div class="project__detials details2 animate__animated animate__zoomIn text-center">
                      <p>Website for Jubilee Rentals, an event rental outfit in Delta State</p>
                      <p><a href="https://jubileerentalsoz.com" target="_blank">jubileerentalsoz.com</a></p>
                  </div>
                  <img src="../assets/images/screenshot2.jpg" class="img-fluid screenshot" alt="">
              </div>
               <div class="project__card card3">
                    <div class="project__detials details3 animate__animated animate__zoomIn text-center">
                       <p>A tool to manage the agricultural activities of Springfarms</p>
                      <p><a href="https://springfarms.co" target="_blank">springfarms.co</a></p>
                  </div>
                 <img src="../assets/images/screenshot3.jpg" class="img-fluid screenshot" alt="">
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
.project{
   padding: 6rem 0;
   position: relative;
   h2{
       font-weight: bolder;
       color: #000;
       font-size: 2.5rem;
   }
   h2::after {
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
   h6{
       color: $tertiary-color;
   }
   .pattern__holder{
       position: absolute;
       right: 5%;
       bottom: 52%;
       z-index: -1000;
   }
   .projects__wrapper{
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
       grid-gap: 30px;
       padding-top: 4rem;
       margin-bottom: 2.5rem;
       .project__card{
        //    background: #373A49;
           border-radius: 4px;
           position: relative;
           .project__detials{
               position: absolute;
               color: #fff;
               background: rgba(4,9,30,.9);
               height: 100%;
               width: 100%;
               border-radius: 4px;
               z-index: 1000;
               padding: 4rem 2rem;
               display: none;
               p{
                   font-size: .9rem;
                   line-height: 1.7;
                   opacity: .8;
               }
               a{
                   color:$tertiary-color;
                   text-decoration: none;
                   font-size: .9rem;
                   &:hover{
                       color: $secondary-color;
                       transition: all ease-in .5s;
                   }
               }
           }
           .screenshot{
              border-radius: 4px; 
           }
       }
   }
}
.card1:hover .details1{
    display: block !important;
    transition: all ease-in-out .5s;
}
.card2:hover .details2{
    display: block !important;
    transition: all ease-in-out .5s;
}
.card3:hover .details3{
    display: block !important;
    transition: all ease-in-out .5s;
}

//Media queries
@media only screen and (max-width: 600px){
    .project{
        h2{
            font-size: 2rem !important;
        }
    }
    .projects__wrapper{
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
        grid-gap: 40px !important;
    }
}
</style>