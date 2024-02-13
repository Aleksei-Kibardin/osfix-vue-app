<template>
  
  <nav class="wrap-menu">
    <div class="main-menu">
      <div class="logo">Первый завод</div>
      <div class="menu-btn" :class="{ active: isActive }" @click="toggleClass">
        <span></span>
      </div>
      <div class="callBack">
        <img class="phone" src="./assets/Phone.svg" alt="phone" />
        <img class="nav-link" src="./assets/Telegram.svg" alt="telegram link" />
        <img class="nav-link" src="./assets/WhatsApp.svg" alt="WhatsApp" />
        <img class="nav-link" src="./assets/Frame.svg" alt="Vkontakte" />
      </div>
    </div>
    <div class="nav-menu" :class="{ open: isActive, hidden: !isActive }">
    <div class="menu-col">
      <div v-for="t in routeName" :key="t" class="route">
        {{ t.txt }}
      </div>
    </div>
    </div>
  </nav>
  <main>
      <video  class="video" autoplay muted loop  :style="{ opacity: scrollCount }">
      <source src="https://rr5---sn-4g5lznls.googlevideo.com/videoplayback?expire=1707859312&ei=EInLZbPEN_CX2_gPjbig6A8&ip=191.96.67.198&id=o-AOqBOknjWW7Fb_HnC6esUN3q65Z3EL2KmQucDWBYngT4&itag=248&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=5949113&dur=39.541&lmt=1674238577957017&keepalive=yes&fexp=24007246&c=ANDROID&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJdOcBhzNOT48G81_l1fFEFxOpMhOsDxsPq1HRNliYfNAiBTkZ335RjfZfVO6qbva8KoYPATaEQSrvSJ366uWMh-NA%3D%3D&redirect_counter=1&cm2rm=sn-q4fezk7l&req_id=54eaf310e9fda3ee&cms_redirect=yes&cmsv=e&mh=6Z&mip=81.211.107.130&mm=34&mn=sn-4g5lznls&ms=ltu&mt=1707837084&mv=u&mvi=5&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRgIhAJ-SaB4lCsN4Zk_Mn03pbMOhHyWDyV1I6QDfXAs0h3-sAiEAmXGmgg8tvB-YqmvM54ZoIKdy4XIZ4Oy_lUXvy9NAH2g%3D" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const isActive = ref(false);

const toggleClass = () => {
    isActive.value = !isActive.value;
  console.log(isActive.value)
};

const routeName= [
  {
    name: 'home',
    txt: "Главная"
  },
  {
    name: 'Stamping',
    txt: "Штамповка метала"
  },
  {
    name: 'services',
    txt: "Другие услуги"
  },
  {
    name: 'studies',
    txt: "Обучение"
  },
  {
    name: 'news',
    txt: "Новости"
  },
  {
    name: 'jobs',
    txt: "Вакансии"
  },
  {
    name: 'contacts',
    txt: "Контакты"
  },
]

const scrollCount = ref(1);

const handleScroll = () => {

  scrollCount.value = 1 - window.scrollY / 1000
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll); // Добавляем обработчик прокрутки при монтировании компонента
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll); // Удаляем обработчик прокрутки при размонтировании компонента
});


</script>

<style lang="scss">
@import "./fluid.sass";

* {
  font-family: "Rubik";
}

body {
  height: 5000px;
  background: #30363d;
}
.wrap-menu {
  display: flex;
  height: 100%;
}
.main-menu {
  padding: 100px 0 100px 0;
  color: aliceblue;
  display: flex;
  background-color: #060606;
  @include fluid("width", 95);
  // @include fluid("height", 1080);
  height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
@keyframes slideInLeft {
  0% {
    color: #fff;
    /* Сдвигаем меню влево на 100% при начале анимации */
  }
  100% {
    color: #ffffff00;
     /* Возвращаем меню на исходное положение */
  }
}
@keyframes slideInRight {
  0% {
    color: #ffffff00;
    /* Сдвигаем меню влево на 100% при начале анимации */
  }
  100% {
    color: #fff;
     /* Возвращаем меню на исходное положение */
  }
}


.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100vh;
  transition: all 1s ease 0s;
}
.hidden {
  position: fixed;
  width: 0vw; /* Ширина равна ширине экрана */
  animation: slideInLeft 0.5s forwards;
}
.nav-menu.open {
  color: #fff;
  overflow: hidden;
  position: fixed;
  width: 50vw; /* Ширина равна ширине экрана */
  animation: slideInRight 3s forwards;
}

.menu-btn.active::before {
  position: relative;
  transform: rotate(45deg);
  @include fluid("top", 9);
}
.menu-btn.active::after {
  position: relative;
  transform: rotate(-45deg);
  @include fluid("bottom", 9);
}
.menu-btn.active span {
  transform: scale(0);
}

.menu-btn {
  display: flex;
  justify-content: center;
  flex-direction: column;
  @include fluid("gap", 7);
  @include fluid("width", 40);
  @include fluid("height", 30);
  position: relative;
  cursor: pointer;
}
.menu-btn:hover.menu-btn span {
  transform: scale(0);
}

.menu-btn span {
  background-color: #7c7c7c;
  height: 2px;
  @include fluid("width", 40);
  @include fluid("top", 14);
  transition: all 0.3s ease 0s;
}

.menu-btn::before,
.menu-btn::after {
  content: "";
  background-color: #7c7c7c;
  height: 2px;
  // @include fluid("height", 2);
  @include fluid("width", 40);
  transition: all 0.3s ease 0s;
}
.menu-btn::before {
  top: 0px;
}
.menu-btn::after {
  bottom: 0px;
}
.logo {
  @include fluid("width", 190);
  @include fluid("font-size", 28);
  transform: rotate(-90deg);
  cursor: default;
}
.callBack {
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
}
.nav-link {
  cursor: pointer;
  @include fluid("width", 48);
  @include fluid("height", 48);
}
.phone {
  @include fluid("width", 28);
  @include fluid("height", 28);
  cursor: pointer;
}
.menu-col{
  display: flex;
  flex-direction: column;
  gap: 20px
}
.route{
  @include fluid("font-size", 28);
}
main{
  @include fluid("margin-left", 95);
}
.video{
  position: fixed;
  width: 100vw;
  z-index: -1;
}
</style>
