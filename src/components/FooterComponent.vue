<template>
   <div class="footer-section container-fluid position-relative">
    <div class="footer-container container">
      <div class="row justify-content-between align-items-center col-12 position-relative">
          <a href="/" class="logo col-6 col-xl-3 justify-content-start">
                        
          </a>
          <nav class="col-6 col-xl-6 d-flex justify-content-center">
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
            
          </nav>
          <div class="some col-xl-3 d-none d-xl-flex justify-content-end">
            <a href="https://www.behance.net/maryroseavenido/" target="_blank"> <img src="../assets/behance.svg" width="45px" height="45px" alt="behance" class="me-3"> </a>
           
            <a href="https://www.linkedin.com/in/mary-rose-avenido/" target="_blank">
            <img src="../assets/linkedin.svg" width="45px" height="45px" alt="linkedin" class="me-3">
            </a>
            
            <a href="https://www.instagram.com/rosesandnotesphoto/" target="_blank">
            <img src="../assets/instagram.svg" width="45px" height="45px" alt="instagram" class="me-3">
            </a>

            <a href="https://www.youtube.com/channel/UC3uquB3Iz8vUclbpmLUQVew" target="_blank">
            <img src="../assets/youtube.svg" width="45px" height="45px" alt="youtube" >
            </a>
            
          </div>
          <a href="#" class="nav-mobile col-6 d-flex d-xl-none justify-content-end position-absolute end-0" @click="showMobileMenu = true">
             <span> <img class="burgermenu" src="../assets/bars-solid.svg" alt=""> </span> 
          </a>
          
      </div>
         <div v-if="showMobileMenu" class="col-12  d-flex d-xl-none  menu-modal"  >
          <span class="close-btn"  @click="showMobileMenu = false" > 
              <img src="../assets/xmark-solid.svg" width="30" height="30" alt="close"  > 
          </span>
          <div class="mobile-menu-container position-absolute" >
              <ul class="d-flex flex-column my-5 " @click="showMobileMenu = false">
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
 .footer-section{
    height: 87px;
    // width: 100vw;
    background-color: #2D4B41;
    overflow: none;
  }

  .logo{
    background-image: url("../assets/roselogo_v1.svg");
    height: 61px;
    width: 61px;
  }

  nav{

    padding: 30px;
     height: 82px;
     text-transform: uppercase;
     
     a{
        color: #D7E0DD;

        &:hover{
            color: #C7A1A0;
          }
     }
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
  overflow: hidden;
  scrollbar-width: none;

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