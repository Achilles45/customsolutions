<template>
  <footer class="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-4 logo__text">
                  <img src="../assets/images/logo.png" class="img-fluid" alt="">
                  <p>&copy; 2020. Custom Solutions Technologies <br>All rights reserved</p>
              </div>
              <div class="col-md-4 contact">
                  <h6>Contact Details</h6>
                  <p><i class="fa fa-envelope"></i> &nbsp;&nbsp; <a href="mailto: support@customsolutions.com">support@customsolutions.com</a></p>
                  <p><i class="fa fa-phone"></i> &nbsp;&nbsp; <a href="tel:08103515205">(+234)8103515205</a></p>
                  <p><i class="fa fa-map-marker"></i> &nbsp;&nbsp; Remote</p>
              </div>
              <div class="col-md-4">
                  <h6>Message Desk</h6>
                  <p>We're glad to have you here. We have over 5 years of experience building digital products and solutions that increase sales and brand awareness for your business. Try us today!</p>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    background: #000;
    color: #fff;
    padding-top: 2rem;
    padding-bottom: 3rem;
    h6{
        padding-top: 1.5rem;
        opacity: .8;
        font-weight: bold;
        padding-bottom: 1.5rem;
    }
    p{
        font-size: .8rem;
        opacity: .4;
        line-height: 1.8;
    }
    .fa-envelope, .fa-phone, .fa-map-marker{
        margin-right: 1rem;
    }
    a{
        color: #fff !important;
        text-decoration: none;
    }
    .logo__text{
        p{
            font-size: .8rem;
            opacity: .4;
            padding-top: 1rem !important;
        }
    }
}
</style>