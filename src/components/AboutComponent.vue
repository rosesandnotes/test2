<template>
  <div class="about-container container-fluid">
    <div id="about" class="container container-md  container-sm">
      <div class="row gx-5 py-5">
        <div class="about-image col-lg-6 col-md-6 col-sm-12 col-12 my-3">

        </div>
        <div class="about-text col-lg-6  col-md-6 col-sm-12 col-12 d-flex align-items-start flex-column my-3">
              <h3 class="mb-2 about-title "> About me</h3> 
              <h2 class="mb-5">
                Get to know me
              </h2>
              <p class="col-lg-11 col-md-12 mb-5">
                Hi! I am Rose.
                <br> <br>
                I am currently studying Multimedia Design in Business Academy Southwest in Esbjerg, Denmark. 
                <br> <br>
                I am passionate about creating user experience solutions to websites. I specialise in building wireframes using Adobe XD. 
               <br> <br>
                When I am not designing, I am doing portrait and landscape photography.
              </p>
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 skills mb-5">
                <div class="row g-4 py-4">
                  <div v-for="skillItem in skillsArray" :key="skillItem"  class="col-lg-4  col-md-6 d-flex flex-column ">

                   <div class="skill-item">
                      {{skillItem.title}}
                     </div>
                    <span class="star-rating">
                    
                      <img  v-for="fs in skillItem.fullstar" :key="fs" src="../assets/star-solid.svg"  width="16" height="16" alt="" class="me-1">

                      <img  v-for="hs in skillItem.halfstar" :key="hs" src="../assets/star-half-stroke-solid.svg"  width="16" height="16" alt="" class="me-1">
                      
                      <img  v-for="es in skillItem.emptystar" :key="es" src="../assets/star-regular.svg"  width="16" height="16" alt="" class="me-1">
                    </span>
                  </div>
                </div>
              </div>

              <a href="/CV.pdf" download="MaryRoseAvenido_Resume" type="button" class="btn btn-primary col-12 col-xl-6 btn-lg mt-auto">download resume</a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {ref} from 'vue'

  export default {
    setup() {
   

      let skillsArray = ref([
        {
          title: "Adobe XD",
          fullstar: 4,
          halfstar: 0,
          emptystar: 1,
        },
        {
          title: "Illustrator",
          fullstar: 3,
          halfstar: 1,
          emptystar: 1,
        },
        {
          title: "Premier Pro",
          fullstar: 3,
          halfstar: 0,
          emptystar: 2,
        },
        {
          title: "After Effects",
          fullstar: 2,
          halfstar: 0,
          emptystar: 3,
        },
        {
          title: "Indesign",
          fullstar: 2,
          halfstar: 1,
          emptystar: 2,
        },
        {
          title: "Miro & Trello",
          fullstar: 3,
          halfstar: 1,
          emptystar: 1,
        },
        {
          title: "Github",
          fullstar: 3,
          halfstar: 1,
          emptystar: 1,
        },
        {
          title: "Photoshop",
          fullstar: 4,
          halfstar: 0,
          emptystar: 1,
        },
        {
          title: "Microsoft",
          fullstar: 5,
          halfstar: 0,
          emptystar: 0,
        }
        
      ])

      return{
        skillsArray,
      }
    }
  }
</script>

<style lang="scss" scoped>

.about-container{
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

.about-container{
height: 100%;
}

#about{
  height: 100%;

  // padding-top: 8vh;
  // padding-bottom: 8vh;
}

.about-image{
  background-image: url("../assets/profile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height:100vh;
}

.about-text{
  
  min-height: 100%;
}

.skills{
  background-color: #D7E0DD;
  padding: 10px 20px;
  box-shadow: 0px 35px 90px #2D4B4115;
}

.skill-item{
  font-size: 16px;
  font-weight: 500;
}



</style>