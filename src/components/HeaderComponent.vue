<template>
  <div class="header-section container-fluid position-relative">
    <div class="header-container container ">
      <div class="row justify-content-between align-items-center col-12">
          <a href="/" class="logo col-6 col-lg-1">
                        
          </a>
          <nav class="col-6 col-lg-11 d-flex justify-content-end">
            <div class="row nav-web d-none d-xl-flex">
              <div class="col">
                  <a href="/" > Home </a>
              </div>
               <div class="col">
                  <a href="/#about" > About </a>
              </div>
               <div class="col">
                   <a href="/#service" > Services </a>
              </div>
               <div class="col">
                  <a href="/#works" > Works </a>
              </div>
               <div class="col">
                    <a href="/#contact" > Contact </a>
              </div>
            </div>
            <a href="#" class="nav-mobile d-flex d-xl-none justify-content-end align-items-center" @click="showMobileMenu = true">
              <span> <img class="burgermenu" src="../assets/bars-solid.svg" alt=""> </span> 
            </a>
          </nav>

        </div>
        <div v-if="showMobileMenu" class="col-12  d-flex d-xl-none  menu-modal align-items-center  justify-content-center"  >
          <span class="close-btn"  @click="showMobileMenu = false" > 
              <img src="../assets/xmark-solid.svg" width="30" height="30" alt="close"  > 
          </span>
          <div class="mobile-menu-container position-absolute d-flex flex-column  justify-content-center" >
           
              <ul class="d-flex flex-column my-5 align-items-center justify-content-center" @click="showMobileMenu = false">
                <li class="py-2"> <a href="/"> Home </a>  </li>
                <li class="py-2"> <a href="/#about">About </a>  </li>
                <li class="py-2"> <a href="/#service">Services</a>  </li>
                <li class="py-2"> <a href="/#works">Works</a>  </li>
                <li > <a href="/#contact">Contact</a>  </li>
              </ul>
              <hr>
              <h3 class="mb-4">
                      Follow me on
              </h3>
              <div class="some d-flex justify-content-center align-items-center" >
                    
                    <a href="https://www.behance.net/maryroseavenido/" target="_blank"> <img src="../assets/behance.svg" width="45px" height="45px" alt="behance" class="me-3 "> </a>
                  
                    <a href="https://www.linkedin.com/in/mary-rose-avenido/" target="_blank">
                    <img src="../assets/linkedin.svg" width="45px" height="45px" alt="linkedin" class="me-3 ">
                    </a>
                    
                    <a href="https://www.instagram.com/rosesandnotesphoto/" target="_blank">
                    <img src="../assets/instagram.svg" width="45px" height="45px" alt="instagram" class="me-3 ">
                    </a>

                    <a href="https://www.youtube.com/channel/UC3uquB3Iz8vUclbpmLUQVew" target="_blank">
                    <img src="../assets/youtube.svg" width="45px" height="45px" alt="youtube" >
                    </a>
                
                </div>
          </div>
        </div>
         
    </div>
  </div>
    
</template>

<script>
  import {ref} from 'vue';

  export default {
    setup() {
    
      let showMobileMenu = ref(false)
      return{
      
        showMobileMenu,
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-section{
    height: 82px;
    // width: 100vw;
    background-color: #1A2C26;
    overflow: none;
  }

  .logo{
    background-image: url("../assets/roselogo_v1.svg");
    height: 61px;
    width: 61px;
  }

  nav{
    
     height: 82px;
     text-transform: uppercase;
     
     a{
        color: #D7E0DD;

        &:hover{
            color: #C7A1A0;
          }
     }
  }

.nav-mobile{
  height: 100%;
}

.nav-web{
 padding: 30px;
}

  .burgermenu{
    width: 42px;
    height: 42px;
  }

.menu-modal{
  top:0;
  left: 0;
  position:fixed;
  z-index: 100;
  background-color: #1A2C26;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;

  span{
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 20px;
  color: rgb(214, 209, 209);
  // font-weight: bold;
  z-index: 100;
  // text-transform: uppercase;
  cursor: pointer;
  }
  overflow: hidden;
}

ul {
  list-style: none;

  li a{
    font-size: 32px;
     color: #D7E0DD;
    &:hover{
            color: #C7A1A0;
          }
  }
}

.mobile-menu-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

h3{
  color: #D7E0DD;
  text-decoration: none;
}

hr {

  color: #D7E0DD;
}


</style>




