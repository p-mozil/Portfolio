<template>
<myportfolio></myportfolio>
</template>

<script>
import myportfolio from './components/newComponent.vue'

export default {
  name: 'App',
  components: {
   myportfolio
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');
  html{
    scroll-behavior: smooth;
  }
#app {
  font-family: 'Montserrat';
}


*{
  margin:0;
  padding:0;
  box-sizing:border-box; 
}

body{
  background: #1f242d !important;
  color:#fff !important;
}


</style>
