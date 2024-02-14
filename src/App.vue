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
        <div class="line" :class="{ open: isActive, hidden: !isActive }"></div>
      </div>
    </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { ref} from 'vue';

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
</script>

<style lang="scss">
@import "./fluid.sass";

* {
  font-family: "Rubik";
}

body {
  height: 5000px;
  background: #121212;
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
  }
  100% {
    color: #ffffff00;
  }
}
@keyframes slideInRight {
  0% {
    color: #ffffff00;
  }
  100% {
    color: #fff;
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
.line{
  width: 0vw; /* Ширина равна ширине экрана */
  transition: all 1s ease 0s;
  animation: slideInLeft 0.5s forwards;
}
.hidden {
  position: fixed;
  width: 0vw; /* Ширина равна ширине экрана */
  animation: slideInLeft 0.5s forwards;
}
.open {
  color: #fff;
  overflow: hidden;
  position: fixed;
  width: 50vw; /* Ширина равна ширине экрана */
  animation: slideInRight 3s forwards;
}

.line.open{
  border: solid 1px;
  width: 300px;
  color: #7c7c7c;
  transition: all 1s ease 0s;
  animation: slideInRight 7s forwards;
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
</style>
