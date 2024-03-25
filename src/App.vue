<template>
  <div class="wrap--window">
    <nav class="wrap-menu">
      <div class="main-menu">
        <div class="logo">Первый завод</div>
        <div
          class="menu-btn"
          :class="{ active: isActive }"
          @click="toggleClass(), closeMenu()"
        >
          <span></span>
        </div>
        <div class="callBack">
          <img class="phone" src="./assets/Phone.svg" alt="phone" />
        </div>
      </div>
      <div class="nav-wrap">
        <div class="nav-menu" :class="{ open: isActive, hidden: !isActive }">
          <div class="menu-col">
            <div
              ref="block"
              v-for="(t, index) in allRoute"
              :key="t"
              @click="menuHandler(t, index)"
              v-show="isActive"
            >
              <div
                class="route"
                :class="{
                  'arrow-route': t.subMenu,
                  'open-route': activeRoute === index,
                }"
              >
                {{ t.txt }}
              </div>
              <transition name="bounce">
                <div
                  class="mobile-menu"
                  :class="{ show: openSubMenu() }"
                  :style="{ '--num-items': num }"
                  v-if="activeRoute === index"
                >
                  <div
                    v-for="(j, i) in currentRoute"
                    :key="j"
                    class="route"
                    @click="menuHandler(j, i)"
                  >
                    {{ j.txt }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="sub-menu" :class="{ open: openSubMenu() }">
          <div class="menu-col">
            <div
              v-for="(t, index) in currentRoute"
              :key="t"
              class="route"
              @click="menuHandler(t, index)"
            >
              {{ t.txt }}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main @click="(isActive = false), closeMenu()">
      <RouterView />
    </main>
  </div>
  <footer>
    <div class="wrap-footer">
      <div class="col1">
        <img src="./assets/logo.svg" alt="logo" />
        <br />
        © 2024
      </div>
      <a href="#/contacts/">Узнать адресс</a>
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
import { useRouter } from "vue-router";

const router = useRouter();

const allRoute = [
  {
    name: "home",
    txt: "Главная",
  },
  {
    name: "",
    txt: "О заводе",
    subMenu: [
      {
        name: "about",
        txt: "Конструкторское бюро",
      },
      {
        name: "security",
        txt: "Охрана труда",
      },
      {
        name: "antiCorruption",
        txt: "Противодействие коррупции",
      },
      {
        name: "ecology",
        txt: "Экологическое развитие",
      },
      {
        name: "news",
        txt: "Новости",
      },
    ],
  },
  {
    name: "",
    txt: "Услуги",
    subMenu: [
      {
        name: "stamping",
        txt: "Штамповка метала",
      },
      {
        name: "services",
        txt: "Металообработка",
      },
      {
        name: "engineering",
        txt: "Проектирование ",
      },
      {
        name: "co-engineering",
        txt: "Инженерное сопровождение ",
      },
    ],
  },
  {
    name: "",
    txt: "Направления деятельности",
    subMenu: [
      {
        name: "spaceIndustry",
        txt: "Космическая отрасль ",
      },
      {
        name: "automobileIndustry",
        txt: "Автомобильная промышленность",
      },
      {
        name: "energyIndustry",
        txt: "Электроника и энергетика ",
      },
      {
        name: "medicalIndustry",
        txt: "Медицинское оборудование ",
      },
      {
        name: "gost",
        txt: "Изделия по ГОСТ",
      },
    ],
  },
  {
    name: "",
    txt: "Закупки и реализация имущества ",
    subMenu: [
      {
        name: "download",
        txt: "Закупки",
      },
      {
        name: "download",
        txt: "Реализация имущества",
      },
    ],
  },
  {
    name: "",
    txt: "Работа и карьера",
    subMenu: [
      {
        name: "vacancies",
        txt: "Вакансии",
      },
      {
        name: "studies",
        txt: "Обучение",
      },
      {
        name: "",
        txt: "Программы развития сотрудников ",
      },
    ],
  },

  {
    name: "",
    txt: "Контакты",
    subMenu: [
      {
        name: "",
        txt: "Приёмная завода",
      },
      {
        name: "",
        txt: "Отдел персонала",
      },
      {
        name: "",
        txt: "Коммерческий отдел",
      },
      {
        name: "",
        txt: "Технический отдел",
      },
    ],
  },
];

const activeRoute = ref(null);
const isActive = ref(false);
const currentRoute = ref(null);
const block = ref(null);
let pages = [];
let num = null;

const toggleClass = () => {
  isActive.value = !isActive.value;
};

const reboot = (list, i) => {
  currentRoute.value = null;
  setTimeout(() => {
    currentRoute.value = list;
  }, 500);
  num = list.length;
  activeRoute.value = i;
};

const openSubMenu = () => {
  return isActive.value === true && currentRoute.value !== null;
};

const closeMenu = () => {
  setTimeout(() => {
    activeRoute.value = null;
  }, 500);
  currentRoute.value = null;
};

const handleSubMenu = (t, i) => {
  if (activeRoute.value == i) {
    closeMenu();
  } else {
    reboot(t.subMenu, i);
  }
};

const handleNoSubMenu = (t, i) => {
  pages.push(t.txt);
  localStorage.setItem("pages", JSON.stringify(pages));
  pages = [];
  router.push({ name: `${t.name}`, params: { id: i } });
  closeMenu();
  isActive.value = false;
};

const menuHandler = (t, i) => {
  if (t.subMenu) {
    pages = [t.txt];
    handleSubMenu(t, i);
  } else {
    handleNoSubMenu(t, i);
  }
};
</script>

<style lang="scss">
@import "./fluid.sass";

:root {
  --num-items: 0;
}

* {
  font-family: "Rubik";
}

body {
  overflow-x: hidden;
  background: #121212;
}

body::-webkit-scrollbar {
  width: 12px; /* ширина всей полосы прокрутки */
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent; /* цвет зоны отслеживания */
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(63, 63, 63); /* цвет бегунка */
  border-radius: 20px; /* округлось бегунка */
  border: 1px solid rgba(0, 0, 0, 0.199); /* отступ вокруг бегунка */
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
  height: 100%;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (min-width: 200px) and (max-width: 1100px) {
    justify-content: center;
    gap: 14%;
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
  from,
  50% {
    color: #ffffff00;
  }
  to {
    color: #fff;
  }
}

@media (min-width: 800px) and (max-width: 1100px) {
  nav {
    position: absolute;
  }
}

.nav-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100vh;
  transition: all 1s ease 0s;
  z-index: 9;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.route {
  @include fluid("font-size", 28);
  cursor: pointer;
  animation: fadeIn 1s ease forwards;
}

.arrow-route.route::after {
  content: "";
  position: absolute;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  display: inline-block;
  @include fluid("margin-left", 10);
  @include fluid("margin-top", 16);
  @include fluid("padding", 5);
  border: solid rgb(255, 255, 255);
  border-width: 0 2px 2px 0;
  animation: fadeIn 2s ease forwards;
  transition: all 0.5s ease 0.5s;
}

.open-route.route::after {
  content: "";
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

@media (min-width: 200px) and (max-width: 1000px) {
  .arrow-route.route::after {
    padding: 4px;
    margin-left: 10px;
    margin-top: 9px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .open-route.route::after {
    content: "";
    position: absolute;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  .arrow-route.route::after {
    margin-top: 3px;
  }
}

@media (min-height: 500px) and (max-height: 700px) {
  .arrow-route.route::after {
    margin-top: 5px;
  }
}

@media (min-height: 200px) and (max-height: 499px) {
  .arrow-route.route::after {
    padding: 2px;
  }
  .arrow-route.route::after {
    margin-top: 3px;
  }
}

.hidden {
  position: fixed;
  width: 0vw;
  animation: slideInLeft 0.2s forwards;
}

.open {
  color: #fff;
  overflow: hidden;
  position: fixed;
  @include fluid("width", 700);
  animation: slideInRight 1s ease forwards;
}

.sub-menu {
  position: fixed;
  display: flex;
  justify-content: end;
  text-align: right;
  align-items: center;
  height: 100%;
  width: 0px;
  background: #1a1a1a;
  z-index: 8;
  transition: all 1s ease 0s;
}

.sub-menu.open {
  @include fluid("padding-right", 80);
  @include fluid("width", 1300);
  transition: all 1s ease 0s;
}

.mobile-menu {
  height: 0px;
  display: none;
  transition: all 0.5s ease 0s;
}

@media (min-width: 200px) and (max-width: 1000px) {
  .nav-menu {
    height: 0vh;
    width: 100%;
  }
  .hidden {
    width: 100%;
    height: 0px;
  }
  .open {
    height: 100%;
  }
  .sub-menu {
    display: none;
  }
  .mobile-menu {
    height: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease 0s;
    gap: 10px;
    margin-left: 10px;
  }
  .mobile-menu.show {
    font-size: 15px;
    height: calc(28px * var(--num-items));
  }
}

.menu-btn.active::before {
  position: relative;
  transform: rotate(45deg);
  @include fluid("top", 10);
}

.menu-btn.active::after {
  position: relative;
  transform: rotate(-90deg);
  cursor: default;
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
  @include fluid("width", 45);
  @include fluid("top", 14);
  transition: all 0.3s ease 0s;
}

.menu-btn::before,
.menu-btn::after {
  content: "";
  background-color: #7c7c7c;
  height: 2px;
  @include fluid("width", 45);
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

.phone {
  @include fluid("width", 28);
  @include fluid("height", 28);
  cursor: pointer;
}

@media (min-width: 200px) and (max-width: 1100px) {
  .phone {
    width: 10px;
    height: 10px;
  }
}

.menu-col {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 40);
  @include fluid("margin-left", 50);
}

@media (min-width: 200px) and (max-width: 1100px) {
  .menu-col {
    display: flex;
    gap: 20px;
    font-size: 20px;
    margin-top: 30px;
  }
}

@media (min-height: 200px) and (max-height: 500px) {
  .nav-menu .open {
    height: 60%;
    font-size: 10px;
  }
  .menu-col {
    display: flex;
    gap: 10px;
    font-size: 10px;
    margin-top: 30px;
  }
  .mobile-menu.show {
    font-size: 12px;
    padding: 10px;
    gap: 7px;
  }
}

@media (min-height: 501px) and (max-height: 700px) {
  .nav-menu .open {
    height: 60%;
    font-size: 16px;
  }
  .menu-col {
    display: flex;
    gap: 10px;
    font-size: 16px;
    margin-top: 30px;
  }
  .mobile-menu.show {
    font-size: 13px;
    padding: 10px;
    gap: 7px;
  }
}

footer {
  bottom: 0px;
}

.wrap-footer {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: #fff;
}

.wrap-footer a {
  text-decoration: none;
}

.col2 {
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
