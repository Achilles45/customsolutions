<template>
  <div class="testimonial">
     <div class="container">
	<div class="row">
		<div class="col-sm-12">
			<h2>Testimonials</h2>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- Carousel indicators -->
	<!-- <ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		<li data-target="#myCarousel" data-slide-to="4"></li>
	</ol>    -->
	<!-- Wrapper for carousel items -->
	<div class="carousel-inner">		
		<div class="item carousel-item active">
			<div class="img-box"><img src="../assets/images/Famous.jpg" alt=""></div>
			<p class="testimonial">My experience with Custom Solutions has been refreshingly different in the web/creative field. They were extremely clear in outlining the project and scope of work so there was never any confusion or unmet expectations. They delivered each phase of the project in lesser time than they originally projected.</p>
			<p class="overview"><b>CEO Jubilee Rentals</b></p>
		</div>	
		<!-- <div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/Famous.jpg" alt=""></div>
			<p class="testimonial">My experience with Custom Solutions has been refreshingly different in the web/creative field. They were extremely clear in outlining the project and scope of work so there was never any confusion or unmet expectations. They delivered each phase of the project in lesser time than they originally projected.</p>
			<p class="overview"><b>CEO Jubilee Rentals</b></p>
		</div>	 -->
		<!-- <div class="item carousel-item">
			<div class="img-box"><img src="../assets/images/Famous.jpg" alt=""></div>
			<p class="testimonial">My experience with Custom Solutions has been refreshingly different in the web/creative field. They were extremely clear in outlining the project and scope of work so there was never any confusion or unmet expectations. They delivered each phase of the project in lesser time than they originally projected.</p>
			<p class="overview"><b>CEO Jubilee Rentals</b></p>
		</div>		 -->
	</div>
	<!-- Carousel controls -->
	<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
		<i class="fa fa-angle-left"></i>
	</a>
	<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
		<i class="fa fa-angle-right"></i>
	</a>
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
.testimonial{
    padding: 4rem 0;
    background: url('../assets/images/img10.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
  h2 {
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	position: relative;
	margin: 25px 0 50px;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 3px;
	background: #ffdc12;
	left: 0;
	right: 0;
	bottom: -10px;
}
.carousel {
	max-width: 650px;
	margin: 0 auto;
    padding-bottom: 50px;
    background: transparent !important;
    border: none !important;
}
.carousel .item {
	color: #fff;
	font-size: .9rem;
    text-align: center;
	overflow: hidden;
	opacity: .8;
	line-height: 2;
}
.carousel .item a {
	color: #eb7245;
}
.carousel .img-box {
	width: 145px;
	height: 145px;
	margin: 0 auto;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {	
    padding: 30px 0 10px;
    background: transparent;
}
.carousel .overview {	
	text-align: center;
	padding-bottom: 5px;
}
.carousel .overview b {
	color: #fff;
	font-size: 15px;
	text-transform: uppercase;
	display: block;	
	padding-bottom: 5px;
}
.carousel .star-rating i {
	font-size: 18px;
	color: #ffdc12;
}
.carousel .carousel-control {
	width: 30px;
	height: 30px;
	border-radius: 50%;
    background: #999;
    text-shadow: none;
	top: 4px;
}
.carousel-control i {
	font-size: 20px;
	margin-right: 2px;
}
.carousel-control.left {
	left: auto;
	right: 40px;
}
.carousel-control.right i {
	margin-right: -2px;
}
.carousel .carousel-indicators {
	bottom: 15px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 11px;
	height: 11px;
	margin: 1px 5px;
	border-radius: 50%;
}
.carousel-indicators li {	
	background: #e2e2e2;
	border-color: transparent;
}
.carousel-indicators li.active {
	border: none;
	background: #888;		
}
}
</style>