<template>
  <div class="services-container container-fluid">
      <div id="service" class="container d-flex flex-column align-items-start">
         <h3 class="mb-2"> 
            My services
          </h3> 
          <h2 class="mb-5">
            What I can do
          </h2>
          <div class="row gx-2 gy-2 overflow-hidden">
            <transition-group
            appear
            @before-enter = "beforeEnter"
            @enter = "enter"
            >
             <div v-for="(service, index) in servicesArray" :key="service" :data-index="index" class="col-md-12 col-lg-6 col-xl-4 service-item-container">
              <div class="service-item px-2 py-5">
                  <img :src="service.icon" :alt="service.title" width="80" height="60" class="mb-5">
                  <h4 class="mb-4 px-4">{{service.title}}</h4>
                  <p class="px-4">
                    {{service.desc}}
                  </p>
              </div>
            </div>
            </transition-group>
          </div>
      </div>
  </div>
</template>

<script>

  import {ref} from 'vue';
  import gsap from 'gsap';

  export default {
     setup() {
      let servicesArray = ref([
        {
          title: "Logo Design",
          desc: "Delivering high quality logo design that will suit your business values and identity using Adobe Indesign. ",
          icon: require('@/assets/pen.svg')
        },
        {
        title: "User Interface Design",
        desc: "Designing up-to-date user design solutions for your business needs using Adobe XD.",
         icon: require('@/assets/laptop.svg')
        },
        {
        title: "User Experience Design",
        desc: "Providing user-centered web design solutions from user research to prototypes using Adobe XD.",
         icon: require('@/assets/user.svg')
        },
        {
        title: "Frontend Development",
        desc: "Developing front-end solutions using CSS, HTML, Javascript, Vue JS, and Bootstrap.",
         icon: require('@/assets/code.svg')
        },
        {
        title: "Photography",
        desc: "Delivering creative portrait and landscape photos edited using Adobe Lightroom and Adobe Photoshop.",
         icon: require('@/assets/camera.svg')
        },
        {
        title: "Videography",
        desc: "Delivering creative videos edited using Adobe Premiere Pro.",
         icon: require('@/assets/video.svg')
        }
      ])

      const beforeEnter = (el) => {
        el.style.transform = "translateY(200px)"
        el.style.opacity = 0
      }
      const enter = (el, done) => {
        gsap.to(el, {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          onComplete: done,
          delay: el.dataset.index * 0.5
        })
      }

      return{
        servicesArray,
        beforeEnter,
        enter
      }
    }
  }
</script>

<style lang="scss" scoped>
.services-container{
  min-height: 110vh;
  background-color: #2D4B41;
}

#service{
  // height: 100vh;
  padding-top: 8vh;
  padding-bottom: 8vh;

  h3, h2{
    color: #D7E0DD;
  }
}

.service-item{
  background-color: #1A2C26;
  min-height: 40vh;
  overflow: hidden;
  color: #D7E0DD;
}

.service-item-container{
  // height: 50vh;
}

h4{
  font-size: 24px;
  font-weight: 500;
  text-align: left;
}

</style>