<template>
  <header>
    <a href="#" class="logo">Portfolio</a>
    <nav class="navbar ">
      <a href="#" :class="activeMenu.Home" style="--i: 1">Home</a>
      <a href="#portfolio" :class="activeMenu.Portfolio" style="--i: 2">Portfolio</a>
    </nav>
  </header>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Pavlo Mozil</h1>
      <h3>
        And I'm <span>{{ typeValue }}</span
        ><span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h3>
      <p>
        I am a junior frontend developer with experience in using the Vue3 framework to create responsive and dynamic web applications. I am actively looking for opportunities to grow and expand my skillset, and I am confident that my dedication and enthusiasm make me a valuable addition to any development team.
      </p>
      <div class="social-media">
        <a href="https://www.linkedin.com/in/pawe%C5%82-mozil-34470514b"><fa :icon="['fab', 'linkedin-in']" /></a>
      </div>
      <a href="PavloMozilCV.pdf" download class="btn">Download CV</a>
    </div>
    
    <div class="home-img">
      <img src="../../public/img/photo.png" alt="" />
    </div>
  </section>
  <section ref="test" class="portfolio"  id="portfolio">
<h2 class="heading"><span>Single </span>Page <span>Applications</span></h2>
<div class="portfolio-container">
  <div class="portfolio-box">
    <img src="../../public/img/platePal.png" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive PlatePall App</h4>
      <p>
        Access a collection of recipes with the PlatePal App. Created using vue3.
      </p>
      <p>p.s. the same app using only JS you can find on my github</p>
      <a href="https://p-mozil.github.io/PlatePalApp/"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
  <div class="portfolio-box">
    <img src="../../public/img/toDo.png" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive ToDoList SPA</h4>
      <p>
        Simple todo created using only JS. You can add,delete,check and edit.
      </p>
      <a href="https://p-mozil.github.io/toDoList/"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
</div>
  </section>
  <section class="portfolio mainColor">
<h2 class="heading"><span>PSD</span>2<span>HTML</span></h2>
<div class="portfolio-container">
  <div class="portfolio-box">
    <img src="../../public/img/digital.jpg" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      <a href="layouts/digitalAgencies/index.html"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
  <div class="portfolio-box">
    <img src="../../public/img/fine-art.jpg" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      <a href="layouts/FineArt/index.html"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
  <div class="portfolio-box">
    <img src="../../public/img/tiny.jpg" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using bootstrap 4.
      </p>
      <a href="layouts/tinyone/index.html"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
  <div class="portfolio-box">
    <img src="../../public/img/realty.jpg" alt=""/>
    <div class="portfolio-layer">
      <h4>Responsive Layout</h4>
      <p>
        Fully responsive layout using flexbox.
      </p>
      <a href="layouts/realtypoland/index.html"><fa :icon="['fa', 'fa-external-link']" /></a>
    </div>
  </div>
</div>

  </section>
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

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  padding:15px 0;
  width: 100%;
  background: #1f242d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  
}

.logo {
   width: 35vw;
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
  opacity: 0;
  animation: slideRight 1s ease forwards;
}

.navbar a {
  display: inline-block;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-right: 35px;
  opacity: 0;
  animation: slideTop 0.5s ease forwards;
  animation-delay: calc(0.1s * var(--i));
  transition: all 1s linear;
}

.navbar a:hover,
.navbar a.active {
  color: #0ef;
}


.home-content {
  flex-basis:350px;
}

.home-img img {
  width: 35vw;
  opacity: 0;
  animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
  animation-delay: 2s, 3s;
}

.home-content h3 {
  font-size: 32px;
  font-weight: 700;
  opacity: 0;
  animation: slideBottom 1s ease forwards;
  animation-delay: 0.7s;
  width: 35vw;
}
.home-content h3:nth-of-type(2) {
  margin-bottom: 30px;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 0.7s;
}
.home-content h3 span {
  color: #0ef;
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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items: center;
  padding: 70px 10% 0;
}

.social-media a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid #0ef;
  border-radius: 50%;
  font-size: 20px;
  color: #0ef;
  text-decoration: none;
  margin: 20px;
  transition: 0.5s ease;
  opacity: 0;
  animation: slideLeft 1s ease forwards;
  animation-delay: 1s;
  margin-left:60px;
}

.social-media a:hover {
  background: #0ef;
  color: #1f242d;
  box-shadow: 0 0 20px #0ef;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  background: #0ef;
  border-radius: 40px;
  box-shadow: 0 0 10px #0ef;
  font-size: 16px;
  color: #1f242d;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.5s ease;
  opacity: 0;
  animation: slideTop 1s ease forwards;
  animation-delay: 2s;
}

.btn:hover {
  color: #1f242d;
  box-shadow: 0 0 20px #0ef;
}

.heading{
  padding-top:2rem;
  text-align:center;
  font-size:2.5rem;
  letter-spacing: 3px;
}

.heading span{
  color: #0ef;
}

.portfolio{
  background-color:#323946;
  padding-top:30px;
  margin-bottom:30px;
}
.portfolio h2{
margin-bottom:2rem;
}

.portfolio .portfolio-container{
  margin:0 auto;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  max-width:1000px;

}

.portfolio .portfolio-container .portfolio-box{
  position:relative;
  flex-basis:350px;
  height: 250px;
  margin:20px;
  border-radius:2rem;
  flex-grow:1;
  box-shadow : 0 0 1rem #1f242d;
  overflow:hidden;
  display:flex;
}
.portfolio .portfolio-container .portfolio-box img{
  
width:100%;
transition: .5s ease;
}



.portfolio .portfolio-container .portfolio-box img:hover{
transform:scale(1.1);
}

.mainColor{
  background:#1f242d;
}


.portfolio-box .portfolio-layer{
  padding:20px;
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0, .1), #0ef);
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 0 3rem;
transform:translateY(100%);
transition: .5s ease;
}


.portfolio-box:hover .portfolio-layer{
  transform:translateY(0);
}
.portfolio-layer h4{
  font-size: 1.5rem;
}

.portfolio-layer p{
  font-size: 1rem;
  margin: 10px 
}

.portfolio-layer a{
 display:inline-flex;
 justify-content:center;
 background:#1f242d;
 border-radius:50%;
 align-items:center;
 width:2.5rem;
 height: 2.5rem;
 background:#fff;
}

.footer{
display:flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
padding:1rem 5%;
background:#323946;
}

@keyframes cursorBlink {
  49% {
    background-color: #0ef;
  }
  40% {
    background-color: transparent;
  }
  99% {
    background-color: #0ef;
  }
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

@media screen and (max-width:774px){
  .btn{
    margin:0;
    padding: 15px 32px;
    font-size:18px;
  }
  .navbar a{
    margin:0 15px;
    font-size:22px;
  }
  .home{
padding:60px 5%;
  }
  .home-content h1 {
  font-size: 32px;
  margin: 3px 0;
  }
  .home-content h3 {
  font-size:24px;
  width:100%;
  }
  
  .home-content p{
    font-size:4vw;
    text-align: justify;
    
  }
  .home-content{
   text-align: center;
   flex-basis:100%;
   
  }
  .logo{
    display:none;
    margin-left:35px;
  }
  .social-media a {
    margin:40px;
    width: 50px;
    height: 50px;
    font-size:22px;
    
  }
  .home-img img {
  width: 70vw;
  margin-top:30px;
}
}
@media screen and (max-width:400px){
  .navbar a{
    font-size:18px;
  }
  .home-content p{
    font-size:3.5vw;
    text-align: justify;
    
  }
  .social-media a {
    margin:20px;
  }
  .btn{
    margin:0;
    padding: 12px 28px;
    font-size:16px;
  }
  .home-content h3{
    width:100%;
  }

.portfolio .portfolio-container .portfolio-box{
margin:20px 0;
}

.portfolio{
  padding:0 5%;
}
footer p{
  font-size: 10px;
}

.home-img img {
  width: 60vw;
  margin-top:45px;
}
}

</style>
