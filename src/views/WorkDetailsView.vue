<template>
  <div class="workdetails-section overflow-hidden" >
    <div v-for="work in filteredWorkOnId" :key="work.workID" >
         <div class="title-section d-flex align-items-center justify-content-center py-5">
              <div class="container d-flex flex-column align-items-center justify-content-center " >
                <div class="row gx-5 py-3 d-flex align-items-center justify-content-center">
                  <transition
                  appear
                  @before-enter = "beforeEnter"
                  @enter = "enter"
                  >
                      <h1 class="mb-3">
                      {{ work.workTitle }}
                      </h1>
                  </transition>
                  
                  <h2 class="mb-4">
                  {{ work.workCategory }}
                  </h2>
                  <!-- <img :src="work.mockupImage" :alt="work.mockUpImageAlt" width="850" height="500"> -->
                </div>
                <div class="col-xl-10 col-12">
                    <img :src="work.mockupImage" :alt="work.mockUpImageAlt" class="mockupImage">
                </div>
                
              </div>
          </div>
          <div class="details-section gx-5  d-flex align-items-center justify-content-between">
            <div class="container">
              <div class="row my-5">
                  <div class="col-12 col-sm-12 col-md-8 d-flex flex-column align-items-start justify-content-start">
                    <h2 class="mb-4">
                          Project Brief
                        </h2>
                        <p>
                          {{work.projectBrief}}
                        </p>
                  </div>
              
              </div>
              <div class="row mb-5">
                <div class="col-12 d-flex align-items-start justify-content-start flex-wrap">
                    <div class="colors d-flex flex-column col-xl-4 col-m-4 col-12 align-items-start justify-content-start mb-5">
                        <h2 class="mb-4">
                          Colors
                        </h2>
                        <div class="colors-container d-flex  ">
                          <div class="color-group d-flex flex-column align-items-center justify-content-center" v-for="color in work.colors" :key="color" :style="color.stylePosition" >
                              <div class="color-image mb-2" :style="color.styleBackground" >

                              </div>
                              <div class="color-desc first-color-text">
                                <p>
                                {{color.colorID}}
                                </p>
                              </div>
                          </div>
                        </div>
                    </div>
                    
                <!-- </div>
                <div class="typography-section col-xl-8 d-flex flex-column align-items-start justify-content-start mb-5"> -->
                    <div class="typography d-flex flex-column col-xl-6 col-m-6 col-12 align-items-start justify-content-start mb-5">
                          <h2 class="mb-4 ">
                            Typography
                          </h2>
                          <div class="typo-container first-typo d-flex alig-items-center justify-content-between flex-wrap" :style="work.primaryFontStyle.fontFamily">
                            <p class="typo-title me-4 ">
                              {{work.primaryFontStyle.fontName}}
                            </p>
                            <p class="typo-letters mb-5" >
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ
                              
                            <span v-if="work.primaryFontStyle.lowercaseAlphabet"> <br> abcdefghijklmnopqrstuvwxyz </span>
                              <br>
                              0123456789 
                            </p>
                          </div>
                          <div v-if="work.secondaryFontAvailable" class="typo-container second-typo d-flex alig-items-center justify-content-between flex-wrap" :style="work.secondaryFontStyle.fontFamily">
                            <p class="typo-title me-4">
                            {{work.secondaryFontStyle.fontName}}
                            </p>
                            <p class="typo-letters">
                              ABCDEFGHIJKLMNOPQRSTUVWXYZ
                            <span v-if="work.secondaryFontStyle.lowercaseAlphabet"> <br> abcdefghijklmnopqrstuvwxyz</span>
                              <br>
                              0123456789 
                            </p>
                          </div>

                    </div>
                      
                      <div class="tool d-flex flex-column col-xl-2 col-m-2 col-12 align-items-start justify-content-start">
                            <h2>
                              Tool
                            </h2>
                          <div v-if="work.toolAdobeXD" class="tool-image-xd mb-4 d-flex flex-column align-items-start justify-content-start">
                          </div>
                          <div v-if="work.toolAI" class="tool-image-ai mb-4 d-flex flex-column align-items-start justify-content-start">
                          </div>
                      </div>
                  </div>
                
              </div>
                
            </div>
          </div>
      <div class="pages-section">
              <img :src="work.pagesMockupImage" :alt="pagesMockupImageAlt" class="pages-image">
      </div>   
      <div class="onepage-section gx-5 py-5 d-flex flex-column align-items-center justify-content-center">
        <h2 class="mb-4">
          {{work.onePageTitle}}
        </h2>
        <img :src="work.onePageImage" :alt="work.onePageImageAlt" class="onepage-image">
      </div>
    </div>
  </div>
</template>

<script>

import {useRoute} from 'vue-router'
import {ref, computed} from 'vue'
import getWorks from '../data/getWorks'
import gsap from 'gsap';

  export default {
    setup() {
      const route = useRoute()
      const routeId = ref(route.params.id)

      const {works} = getWorks();

      const filteredWorkOnId = computed( () => {
        return works.value.filter( item => item.workID == routeId.value)
      })

      const beforeEnter = (el) => {
        el.style.transform = "translateY(100px)"
        el.style.opacity = 0
      }
      const enter = (el, done) => {
        gsap.to(el, {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: 'back.out',
          onComplete: done
        })
      }

      return{
        route,
        works,
        filteredWorkOnId,
         beforeEnter,
        enter
      }
      
    }
  }
</script>

<style lang="scss" scoped>
.workdetails-section{
  min-height: 80vh;

}

.title-section{
  background-color:  #1A2C26;
  h2, h1{
      color: #D7E0DD;
  }
}

h1{
  font-weight: bold;
}


.details-section{
  background-color: #D7E0DD;
  
}

h2{
    font-weight: 700;
  }

.colors-container{
  position: relative;
  p {
    font-size: 12px;
  }
}

.color-image{
  height: 100px;
  width: 100px;
  border-radius: 50px;
}

.color-desc{
  font-weight: 700;
  text-align: center;
}

.tool-image-xd{
  background-image: url("../assets/adobexd.svg");
  width: 120px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.tool-image-ai{
  background-image: url("../assets/ai-logo.png");
  width: 120px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.first-typo{
  h3{
    // font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-decoration: none;
    text-transform: none;
    text-align: left;
    font-size: 24px;
  }
}

.pages-image{
  width: 100vw;
}

.onepage-image{
  width: 80vw;
}

.mockupImage{
  width: 100%;
}

.typo-title{
  font-weight: 700;
}



</style>