<template>
<myportfolio></myportfolio>
</template>

<script>
import myportfolio from './components/myportfolio.vue'

export default {
  name: 'App',
  components: {
   myportfolio
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap');
  html{
    scroll-behavior: smooth;
  }
#app {

  font-family: 'Roboto', sans-serif;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box; 
}

body{
  background: #1f242d;
  color:#fff;
}
.header{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    padding:20px 10%;
    background: transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:100;
  }

</style>
