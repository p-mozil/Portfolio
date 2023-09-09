<template>
  <div class="container-fluid header">
    <div class="container">
    <div class="row align-items-center h64">
    <div class="offset-1 col"><a href="#" class="logo">Portfolio</a></div>
    <div class="col navbar d-flex justify-content-end offset-right-1">
      <a href="#" :class="activeMenu.Home" style="--i: 1">Home</a>
      <a href="#portfolio" :class="activeMenu.Portfolio" style="--i: 2">Portfolio</a>
    </div>
  </div>
  </div>


</div>
<div class="container">
<div class="row align-items-center">
  <div class="offset-1 col-5"> 
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Pavlo Mozil</h1>
      <h3>
        And I'm <span>{{ typeValue }}</span
        ><span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h3>
      <p class="description">
        I am a junior frontend developer with experience in using the Vue3 framework to create responsive and dynamic web applications. I am actively looking for opportunities to grow and expand my skillset, and I am confident that my dedication and enthusiasm make me a valuable addition to any development team.
      </p>
      <div class="row links align-items-center justify-content-between">
        <div class="col"> <div class="social-media">
        <a href="https://www.linkedin.com/in/pawe%C5%82-mozil-34470514b"><fa :icon="['fab', 'linkedin-in']" /></a>
      </div></div>
        <div class="col"><a href="PavloMozilCV.pdf" download class="downloadBtn">Download CV</a></div>
      </div>
     
      </div>
    </div>
  <div class="col-4 offset-1 justify-content-center"><div class="home-img">
      <img class="photo" src="../../public/img/photo.png" alt="" />
    </div></div>
</div>
</div>

<div class="container-fluid portfolio">
<div class="container spa" ref="test">
  <h2 class="heading"><span>Single Page </span>Applications<span></span></h2>

  <div class="portfolio-container">
  <div  class="row">
    <div class="offset-1 col">
      <div class="portfolio-box" @mouseover="onhover($event)">
      <a href="https://p-mozil.github.io/PlatePalApp/"><img class="w-100" src="../../public/img/platePal.png" :class="{'img-hover': hover}" alt=""/></a> 
    <div class="portfolio-layer" :class="{'hover-layer': hover}">
      <div class="portfolio-layer-elements">
        <h4>Responsive PlatePall App</h4>
      <p>
        Access a collection of recipes with the PlatePal App. Created using vue3.
      </p>
      </div>
      
    </div>
  </div>
</div>

  <div class="offset-right-1 col">
    
    <div class="portfolio-box">
      <a href="https://p-mozil.github.io/toDoList/">
        <img class="w-100" src="../../public/img/toDo.png" alt=""/></a> 
    <div class="portfolio-layer">
      <div class="portfolio-layer-elements">
        <h4>Responsive ToDoList SPA</h4>
      <p>
        Simple todo created using only JS. You can add,delete,check and edit.
      </p>
      </div>
      
    </div>
  </div></div>
  </div>
  </div>
  </div>
</div>
<div class="container-fluid mainColor psd2html">
  <h2 class="heading"><span>PSD</span>2<span>HTML</span></h2>
  <div class="container">
    <div class="portfolio-container">
  <div  class="row mb-4">
    <div class="offset-1 col">
      <div class="portfolio-box">
      <a href="layouts/digitalAgencies/index.html"><img class="w-100" src="../../public/img/digital.jpg" alt=""/></a> 
    <div class="portfolio-layer">
      <div class="portfolio-layer-elements">
        <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      </div>
      
    </div>
  </div>
</div>

  <div class="offset-right-1 col"> <div class="portfolio-box">
      <a href="layouts/digitalAgencies/index.html"><img class="w-100" src="../../public/img/digital.jpg" alt=""/></a> 
    <div class="portfolio-layer">
      <div class="portfolio-layer-elements">
        <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      </div>
      
    </div>
  </div></div>
  </div>
  <div  class="row">
    <div class="offset-1 col">
      <div class="portfolio-box">
      <a href="layouts/digitalAgencies/index.html"><img class="w-100" src="../../public/img/digital.jpg" alt=""/></a> 
    <div class="portfolio-layer">
      <div class="portfolio-layer-elements">
        <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      </div>
      
    </div>
  </div>
</div>

  <div class="offset-right-1 col"> <div class="portfolio-box" :class="hover">
      <a href="layouts/digitalAgencies/index.html"><img class="w-100" src="../../public/img/digital.jpg" alt=""/></a> 
    <div class="portfolio-layer">
      <div class="portfolio-layer-elements">
        <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      </div>
      
    </div>
  </div></div>
  </div>
  </div>
  </div>

  
</div>








<footer class="footer">
    <div class="footer-text">
      <p>Copyright &copy; 2023 by Pavlo Mozil | All Rights Reserved.</p>
    </div>
  </footer>

</template>

<script>
export default {
  name: "my-portfolio",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["a Frontend Developer", "a Code Lover", "Looking for a job"],
      typingSpeed: 50,
      erasingSpeed: 50,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      charIndex: 0,
      hover: false,
      activeMenu: {
        'Home':{
          active: true
        },
        'Portfolio':{
          active: false
        }
      }
    }
  },
  methods: {
    onhover(e){
      console.log(e.target)
    },
    handleScroll () {
      if(window.scrollY > this.$refs.test.offsetTop-50){
        this.activeMenu.Home.active = false;
        this.activeMenu.Portfolio.active = true;
      }else{
        this.activeMenu.Home.active = true;
        this.activeMenu.Portfolio.active = false;
      }
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
      
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>


.offset-right-1{
  margin-right: 8.33333333%
}


.header {
  position:fixed !important;
  background: #1f242d !important;
  align-items: center;
  z-index: 100;
}



.logo {
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
  opacity: 0;
  animation: slideRight 1s ease forwards;
}

.h64{
  height: 48px;
}
.navbar{
  padding: 0 12px !important;
}

.navbar a {
  display: inline-block;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;

  opacity: 0;
  animation: slideTop 0.5s ease forwards;
  animation-delay: calc(0.1s * var(--i));
  transition: all 1s linear;
}

.navbar a:last-child{
  margin-left:24px;
}

.navbar a:hover,
.navbar a.active {
  color: #0ef;
}

.home-img img {
  margin-left:28px;
  opacity: 0;
  animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
  animation-delay: 2s, 3s;
}

.home-content{
margin:120px 0;
}

.home-content h3 {
  font-size:24px;
  font-weight: 700;
  opacity: 0;
  animation: slideBottom 1s ease forwards;
  animation-delay: 0.7s;
  margin:0.5rem 0 ;
}
.home-content h3:nth-of-type(2) {
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 0.7s;
}
.home-content h3 span {
  color: #0ef;
}
.home-content h1{
  font-size:36px;
  margin:0;
}

.home-content p{
   margin:1rem 0;
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #0ef;
  animation: cursorBlink 0.5s infinite;
}

.cursor.typing {
  animation: none;
}

.home-content h1 {
  font-size: 56px;
  font-weight: 700;
  margin: -3px 0;
  opacity: 0;
  animation: slideRight 1s ease forwards;
  animation-delay: 1s;
}
.home-content p {
  font-size: 16px;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: 1s;
}
.home {
  position: relative;
  height: 100vh;
  align-items: center;
  padding: 70px 10% 0;
}

.links{
  margin-top:2rem !important;
}

.social-media a {
  align-items: center;
  padding:8px 10px;
  background: transparent;
  border: 2px solid #0ef;
  border-radius: 50%;
  font-size: 24px;
  color: #0ef;
  text-decoration: none;
  transition: 0.5s ease;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: 1s;
}

.social-media a:hover {
  background: #0ef !important;
  color: #1f242d;
  box-shadow: 0 0 20px #0ef !important;
}

.downloadBtn {
  display: inline-block;
  padding: 12px 28px;
  background: #0ef !important;
  border-radius: 40px;
  box-shadow: 0 0 10px #0ef !important;
  font-size: 16px;
  color: #1f242d !important;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 800;
  transition: 0.5s ease;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 2s;
}

.downloadBtn:hover {
  color: #1f242d !important;
  box-shadow: 0 0 20px #0ef !important;
}

.photo{
  max-width:95%;
}

.portfolio{
  background-color:#323946 !important;
}


.heading{
  text-align:center;
  font-size:2.5rem;
  letter-spacing: 3px;
  margin-bottom:60px;
}

.heading span{
  color: #0ef;
}



.portfolio-container .portfolio-box{
  border-radius:1rem;
  box-shadow : 0 0 1rem #1f242d;
  overflow:visible;
  z-index: 3;
}

.portfolio-container .portfolio-box img{
  border-radius:1rem;
  height: 100%;
  
 
  }
  

  .hover-layer{
  background: linear-gradient(#0ef, #0000001a);
  border-top-left-radius: 0 !important;
   border-top-right-radius: 0 !important;
  }

  .img-hover{
    border-bottom-left-radius: 0 !important;
   border-bottom-right-radius: 0 !important;
  }


 .portfolio-layer{
  border-radius:1rem;
  width:100%;
  align-items: center;
  text-align: center;
  z-index: -99;
}



.portfolio-layer h4{
  font-size: 1rem;
}

.portfolio-layer p{
  font-size: 0.8rem;
  margin: 10px 
}

.portfolio-layer a{
 background:#1f242d;
 border-radius:50%;
 align-items:center;
 width:2.5rem;
 height: 2.5rem;
 background:#fff;
}

.mainColor{
  background:#1f242d;
}

.psd2html,.spa{
  padding:120px 0;
  
}

.footer{
text-align: center;
padding:1rem 5%;
background:#323946;
}

.footer p{
  margin: 0;
}

@keyframes slideRight {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideTop {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideBottom {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideLeft {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-24px);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width:1409px){
  /* .portfolio .portfolio-container .portfolio-box{
flex-basis:400px;
  } */

}
</style>