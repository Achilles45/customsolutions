<template>
  <div class="home">
    <Navbar />
   <Herosection />
   <About />
   <Services />
   <Testimonials />
   <Projects />
   <Banner />
   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Herosection from '@/components/Herosection.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Testimonials from '@/components/Testimonials.vue'
import Projects from '@/components/Projects.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'
export default {
components:{
  Navbar,
  Herosection,
  About,
  Services,
  Testimonials,
  Projects,
  Banner,
  Footer
}
}
</script>
