<template>
  <div class="wrap--window">
    <nav class="wrap-menu">
      <div class="main-menu">
        <div class="logo">Первый завод</div>
        <div
          class="menu-btn"
          :class="{ active: isActive }"
          @click="toggleClass"
        >
          <span></span>
        </div>
        <div class="callBack">
          <img class="phone" src="./assets/Phone.svg" alt="phone" />
          <img
            class="nav-link"
            src="./assets/Telegram.svg"
            alt="telegram link"
          />
          <img class="nav-link" src="./assets/WhatsApp.svg" alt="WhatsApp" />
          <img class="nav-link" src="./assets/Frame.svg" alt="Vkontakte" />
        </div>
      </div>
      <div class="nav-menu" :class="{ open: isActive, hidden: !isActive }">
        <div class="menu-col">
          <div v-for="t in routeName" :key="t" class="route">
            {{ t.txt }}
            <div
              class="line"
              :class="{ open: isActive, hidden: !isActive }"
            ></div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
  <footer>
    <div class="wrap-footer">
      <div class="col1">
        <img src="./assets/logo.svg" alt="logo" />
        <br> 
        © 2009-2023
      </div>
      <a href="">Узнать адресс</a>
      <div class="col2">
        <span>напишите или позвоните нам:</span>
        <span>+7 (901) 971-46-64</span>
        <span>+7 (812) 971-76-64</span>
        <span>spb9714664@yandex.ru</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

const toggleClass = () => {
  isActive.value = !isActive.value;
};

const routeName = [
  {
    name: "home",
    txt: "Главная",
  },
  {
    name: "Stamping",
    txt: "Штамповка метала",
  },
  {
    name: "services",
    txt: "Другие услуги",
  },
  {
    name: "studies",
    txt: "Обучение",
  },
  {
    name: "news",
    txt: "Новости",
  },
  {
    name: "jobs",
    txt: "Вакансии",
  },
  {
    name: "contacts",
    txt: "Контакты",
  },
];
</script>

<style lang="scss">
@import "./fluid.sass";

* {
  font-family: "Rubik";
}

body {
  overflow-x: hidden;
  background: #121212;
}
main {
  height: 100%;
}
footer {
  position: relative;
  bottom: 0px;
  width: 100vw;
  @include fluid("height", 200);
  background: #222222;
}
.wrap--window {
  display: flex;
  flex-direction: row;
}
.wrap-menu {
  @include fluid("width", 95);
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
  z-index: 10;
}
@media (min-width: 200px) and (max-width: 1100px) {
  .main-menu {
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    height: 40px;
    padding: 0;
  }
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
  z-index: 9;
}
.line {
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

@media (min-width: 200px) and (max-width: 1100px) {
  .nav-menu {
    height: 0vh;
    width: 100%;
  }
  .hidden {
    width: 100%;
    height: 0px;
  }
  .open {
    height: 100px;
  }
  .line.open {
    display: none;
  }
}

.line.open {
  border: solid 1px;
  @include fluid("width", 300);
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
  @include fluid("bottom", 8);
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
  @include fluid("width", 40);
  transition: all 0.3s ease 0s;
}
@media (min-width: 200px) and (max-width: 1100px) {
  .menu-btn {
  gap: 3px;
}
  .menu-btn::before,
  .menu-btn::after {
    content: "";
    background-color: #7c7c7c;
    height: 1px;
    width: 20px;
    transition: all 0.3s ease 0s;
  }
  .menu-btn span {
    background-color: #7c7c7c;
    height: 1px;
    width: 20px;
    top: 14px;
    transition: all 0.3s ease 0s;
  }
  .menu-btn.active::before {
    position: relative;
    transform: rotate(45deg);
    top: 8px;
  }
  .menu-btn.active::after {
    position: relative;
    transform: rotate(-45deg);
    top: 0px;
  }
  .menu-btn:hover.menu-btn span {
    transform: scale(0);
  }
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
@media (min-width: 200px) and (max-width: 1100px) {
  .logo {
    transform: rotate(0);
  }
}
.callBack {
  display: flex;
  @include fluid("gap", 5);
  flex-direction: column;
  align-items: center;
}
@media (min-width: 200px) and (max-width: 1100px) {
  .callBack {
    justify-content: center;
    flex-direction: row;
  }
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
@media (min-width: 200px) and (max-width: 1100px) {
  .nav-link {
    width: 20px;
    height: 20px;
  }
  .phone {
    width: 10px;
    height: 10px;
  }
}
.ro .menu-col {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 20);
}
@media (min-width: 200px) and (max-width: 1100px) {
  .menu-col {
    display: flex;
    gap: 10px;
    font-size: 10px;
    margin-top: 30px;
    flex-direction: row;
  }
}
@media (min-width: 200px) and (max-width: 450px) {
  .menu-col {
    font-size: 7px;
  }
}
@media (min-width: 200px) and (max-width: 330px) {
  .menu-col {
    font-size: 6px;
  }
}
.route {
  @include fluid("font-size", 28);
}
.wrap-footer {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: #fff;
}
.wrap-footer a{
  text-decoration: none;
}
.col2{
 display: flex;
 flex-direction: column;
}
@media (min-width: 200px) and (max-width: 500px) {
  footer a {
  margin-left: 10px;
}
  footer {
    font-size: 10px;
  }
}
</style>
