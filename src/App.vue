<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <HeaderComponent />
    <router-view v-slot="{Component}">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
    </router-view>
    <FooterComponent />
    <CopyrightComponent />



</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CopyrightComponent from './components/CopyrightComponent.vue';

export default {

  components: {
    HeaderComponent,
    
    FooterComponent,
    CopyrightComponent
  }
}
</script>


<style lang="scss">
#app {
 font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

a{
  text-decoration: none;
  font-weight: 400;
 
}

.btn-primary {
  background-color: #C7A1A0;
  text-transform: uppercase;
  border-radius: 0;
  border: none;
  font-weight: 500;
  padding: 10px 20px;
  outline: none;
  // &:visited{
  //   outline: none;
  //   background-color: #f8a3a0 !important;
  // }
  &:focus{
    outline: none;
    box-shadow: none;
  }
  &:hover{
    background-color: #C7A1A099;
    border: none;
  }
  &:active{
    outline: none;
    background-color: #f8a3a0  !important;
  }
  
}

h1{
  font-size: 72px;
}

h2{
  font-size: 36px;
  font-weight: 700;
}

h3{
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: underline;
}

p{
  font-size: 16px;
  line-height: 24px;
  text-align: left;
}


.route-enter-from{
  opacity: 0;
  // transform: translateX(100px);
}

.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
  opacity: 0;
  // transform: translateX(-100px);
}

.route-leave-active{
  transition: all 0.3s ease-in;
}
</style>
