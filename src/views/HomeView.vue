<template>
  <div class="home">
    <HeroComponent />
   <AboutComponent />
   <ServicesComponent />
   <WorksComponent />
   <ContactComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from '../components/HeroComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import WorksComponent from '../components/WorksComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    ContactComponent, 
  }
}
</script>
