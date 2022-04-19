<template>
  <div class="hero-section container-fluid d-flex align-items-center justify-content-center position-relative">
      <div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>

    <div class="hero-container container d-flex flex-column position-relative">
      <div class="row header-text">
        <transition
        appear
        @before-enter = "beforeEnter"
        @enter = "enter"
        >
             <h1 class="mb-2">
              <!-- {{ printMyName() }}  -->
              {{myname}}
          </h1>
        </transition>
          <h2>
               UX / UI Designer
          </h2>
        
         
      </div>
      <div class="row button-container d-flex justify-content-center gx-5">

        <div class="col-12 col-md-6 col-lg-6  col-xl-4  mb-5 d-grid hireme-container"> 
          <a href="#contact" class="btn btn-primary btn-lg d-flex align-items-center justify-content-center">hire me</a>
        </div>


        <div @click="showVideo = true" class="col-12 col-md-6 col-lg-6  col-xl-4  mb-5 d-grid watchvideo-container align-items-center justify-space-between" >
          <a href="#" class="cvbutton d-flex align-items-center"> <i class="fa fa-play-circle"></i> <span class="ps-2"> Watch my CV video </span> </a>
        </div>
      </div>

      <!-- Video Popup Original Version -->
      <div v-if="showVideo" class="popup-video" @click="showVideo = false">
            <span class="close-btn"> 
              <img src="../assets/xmark-solid.svg" width="24" height="24" alt="close"  > 
            </span>
          <!-- <video :src="myVideo"  muted autoplay controls></video> -->
          <!-- <video src="youtu.be/Dl-YN7wqPLY" muted autoplay controls>
          </video> -->

          <iframe width="560" height="315" src="https://www.youtube.com/embed/Dl-YN7wqPLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      </div>
    </div>

      
  </div>
</template>

<script >



  import {ref} from 'vue';
  import gsap from 'gsap';

  export default {
    setup() {
      let showVideo = ref(false)
      let myname = ref("Mary Rose Avenido")
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

      return {
        myname,
        showVideo,
        beforeEnter,
        enter
       }
    }, 
  }
</script>

<style lang="scss" scoped>

// stars css


@mixin translate50
{
  -webkit-transform: translate(-50, -50%);
  -ms-transform: translate(-50, -50%);
  -o-transform: translate(-50, -50%);
  transform: translate(-50, -50%);
}

@mixin roundedCorners
{
  -webkit-border-radius: 50%; 
  -moz-border-radius: 50%; 
  border-radius: 50%;
}

@mixin rotateBase
{
  -webkit-transform: rotate3d(-1, 1, 0, 0deg);
  -ms-transform: rotate3d(-1, 1, 0, 0deg);
  -o-transform: rotate3d(-1, 1, 0, 0deg);
  transform: rotate3d(-1, 1, 0, 0deg);
}

@mixin rotateRight
{
  -webkit-transform: rotate3d(-1, 1, 0, 30deg);
  -ms-transform: rotate3d(-1, 1, 0, 30deg);
  -o-transform: rotate3d(-1, 1, 0, 30deg);
  transform: rotate3d(-1, 1, 0, 30deg);
}

@mixin rotateLeft
{
  -webkit-transform: rotate3d(-1, 1, 0, -30deg);
  -ms-transform: rotate3d(-1, 1, 0, -30deg);
  -o-transform: rotate3d(-1, 1, 0, -30deg);
  transform: rotate3d(-1, 1, 0, -30deg);
}

// n is number of stars generated
@function generateStars ($n)
{ 
  $value: '#{0} #{random(2000)}px #{random(2000)}px #FFF';

  @for $i from 2 through $n
  {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
  }

  @return unquote($value);
}

$stars-small:  generateStars(700);
$stars-medium: generateStars(200);
$stars-big:    generateStars(100);


#stars
{
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $stars-small;
  animation : animateStars 28.5s ease-in-out infinite;
  @include roundedCorners;

  &::after
  {
    content: " ";
    position: absolute;
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $stars-small;
    @include roundedCorners;
  }
}
    
#stars2
{
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $stars-medium;
  animation : animateStars 30s ease-in-out infinite;
  @include roundedCorners;
    
  &::after
  {
    content: " ";
    position: absolute;
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $stars-medium;
    @include roundedCorners;
  }
}
    
#stars3
{
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: $stars-big;
  animation : animateStars 31.5s ease-in-out infinite;
  @include roundedCorners;
    
  &:after
  {
    content: " ";
    position: absolute;
    margin: auto;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $stars-big;
    @include roundedCorners;
  }
}

@keyframes animateStars
{
  0%{@include rotateBase;}
  25%{@include rotateRight;}
  50%{@include rotateBase;}
  75%{@include rotateLeft;}
  100%{@include rotateBase;}
}

// end stars css


.hero-section{
  
  background: url("../assets/bg.jpeg"), rgba(10, 31, 16, 0.6);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  height: 100vh;
  overflow: hidden;
  // @include translate50;
}


.popup-video{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0,0,0,.8);
  height: 100%;
  width: 100%;
}

.popup-video iframe{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width: 750px;
  // height: 500px;
  border-radius: 5px;
  border: 3px solid #fff;
  object-fit: cover;
}


.popup-video span{
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 20px;
  color: #fff;
  // font-weight: bold;
  z-index: 100;
  // text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 768px){
  .popup-video video {
    width: 95%;
  }
}


.button-container{
  min-height: 72px;
}

h1{
  font-weight: bold;

}

h2{
  font-size: 36px;
  font-weight: 400;
}


h2, h1 {
  color: #D7E0DD;
}

.watchvideo-container {
  :hover{
     color: #C7A1A099;
  }
}

.cvbutton{
  color: #C7A1A0;
  font-weight: 500;
}

.fa-play-circle{
  font-size: 72px;
}

.watchvideo-container{
  span{
    font-size: 24px;
  }
}

.btn-primary{
  font-size: 24px;
}

.header-text{
  margin-bottom: 103px;
}

</style>