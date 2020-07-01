<template>
  <div class="affiliates">
      <div class="container">
          <div class="row">
              <div class="col-md-7">
                  <img src="../assets/images/img8.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-md-5">
                  <h2>Earn money with us today!</h2>
                  <p>You don't need any of our products services, no problem. You can still earn as much as 5% when you refer a friend, relative or anyone to use any of our products and services. That's all you need to do and your money will be paid to your bank account immedidately. No stories!</p>
                  <router-link to="/affiliate/register" class="affiliate__btn">Become an Affiliate</router-link>
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
.affiliates{
    padding-bottom: 6rem;
    padding-top: 2rem;
    h2{
    font-weight: bolder;
    color: #000;
    font-size: 2.3rem;
    text-transform: capitalize;
    line-height: 1.3;
}
p{
    color: #627081;
    line-height: 2;
    opacity: .9;
    font-size: .95rem;
    padding-top: 1.3rem;
    padding-bottom: 2rem;
}
.affiliate__btn{
    color: #fff;
    background: $primary-color;
    padding: 1.3rem 3rem;
    border-radius: 3px;
    text-decoration: none;
    &:hover{
           background-image: linear-gradient(to right, $secondary-color , $tertiary-color);
           transition: all ease-in-out .5s !important;
        }
}
}
</style>