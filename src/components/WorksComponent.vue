<template>
  <div class="works-container container-fluid">
    <div id="works" class="container d-flex flex-column align-items-start">
      <h3 class="mb-2"> 
        My works
      </h3> 
      <div class="row">
        <div class="text-container col-md-12 col-xl-4">
          <h2 class="mb-4">
            Featured projects
          </h2>
          <p class="mb-5">
            Showcasing some of my best works that reflect how I work and what I am capable of doing.
          </p>
        </div>
        <div class="projects col-md-12 col-xl-8 mx-auto flex-wrap">

          <div class="row overflow-hidden justify-content-evenly align-items-center">
          <transition-group
           appear
          @before-enter = "beforeEnter"
          @enter = "enter"
          >
              <div class="card col-md-5 col-xl-5 mb-5" v-for="(work, index) in worksArray" :key="work" :data-index="index">
                    <router-link :to="work.linkUrl">
                        <img :src="work.image" class="card-img-top" alt="work.title">
                        <div class="card-body">
                          <h3>
                          {{work.title}}
                          </h3>
                          <p class="card-text">{{work.category}}</p>
                        </div>
                      </router-link>
                      
                  </div>
          </transition-group>
             <div class="col-md-5 col-xl-5 d-flex justify-content-center align-items-center">
              <a href="https://www.behance.net/maryroseavenido/projects" target="_blank" type="button" class="btn btn-primary btn-lg ">view more</a>
            </div> 
          </div>
        
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>

  import {ref} from 'vue'
   import gsap from 'gsap';

  export default {
    setup() {
      let worksArray = ref([
        {
          linkUrl: "/work/1",
          title: "Hotel Website",
          category: "UI Design",
          image: require('@/assets/hotel_3.jpg')
        },
        {
          linkUrl: "/work/2",
          title: "Bicycle Website",
          category: "UI Design",
          image: require('@/assets/bike.jpg')
        },
        {
          linkUrl: "/work/3",
          title: "Museum Website",
          category: "UI Design",
          image: require('@/assets/museum.jpg')
        },
        {
           linkUrl: "/work/4",
          title: "Loan Tracker Website",
          category: "UI Design",
          image: require('@/assets/loan.jpg')
        },
        {
           linkUrl: "/work/5",
          title: "Travel Blog Logo",
          category: "Logo Design",
          image: require('@/assets/diy.jpg')
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
          delay: el.dataset.index * 0.3
        })
      }

      return{
      worksArray,
      beforeEnter,
        enter
      }
    }
  }
</script>

<style lang="scss" scoped>

.works-container{
  // background-color: #D7E0DD;
     background:linear-gradient(
      rgba(215, 224, 221, 0.6), 
      rgba(215, 224, 221, 0.6)
    ),
    url("../assets/bg.jpg");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

#works{
   padding-top: 8vh;
  padding-bottom: 8vh;
}

.text-container{
  text-align: left;
}

.card-body{
  h3{
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    text-transform: none;
  }

  color: #1A2C26;
  text-align: left;

  // background-color: #849690;
}

.card{
  padding:0;
  transition: transform 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
}


.btn-primary{
  width: 100%;
}



</style>