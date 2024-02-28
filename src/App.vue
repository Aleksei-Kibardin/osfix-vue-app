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
        </div>
      </div>
      <div class="nav-menu" :class="{ open: isActive, hidden: !isActive }">
        <div class="menu-col">
          <div
            class="prev-menu"
            v-if="currentRoute[0].txt !== 'Главная'"
            @click="backRoute()"
          >
            Назад
          </div>
          <div
            v-for="t in currentRoute"
            :key="t"
            class="route"
            @click="nextRoute(t)"
          >
            {{ t.txt }}
          </div>
        </div>
      </div>
      <div class="sub-menu" v-if="currentRoute[0].txt !== 'Главная'"></div>
    </nav>
    <main @click="isActive = false">
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
const isActive = ref(false);

const router = useRouter();

const toggleClass = () => {
  isActive.value = !isActive.value;
};

const allRoute = [
  {
    name: "home",
    txt: "Главная",
  },
  {
    name: "about",
    txt: "О заводе",
    subMenu: [
      {
        name: "",
        txt: "Конструкторское бюро",
      },
      {
        name: "",
        txt: "Охрана труда ",
      },
      {
        name: "",
        txt: "Противодействие коррупции ",
      },
      {
        name: "",
        txt: "Устойчивое экологическое развитие",
      },
      {
        name: "news",
        txt: "Новости",
      },
    ],
  },
  {
    name: "",
    txt: "услуги",
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
        name: "",
        txt: "Проектирование ",
      },
      {
        name: "",
        txt: "Инженерное сопровождение ",
      },
    ],
  },
  {
    name: "",
    txt: "Направления деятельности",
    subMenu: [
      {
        name: "",
        txt: "Космическая отрасль ",
      },
      {
        name: "",
        txt: "Автомобильная промышленность",
      },
      {
        name: "",
        txt: "Электроника и энергетика ",
      },
      {
        name: "",
        txt: "Строительная отрасль ",
      },
      {
        name: "",
        txt: "Медицинское оборудование ",
      },
      {
        name: "",
        txt: "Изделия по ГОСТ ",
      },
    ],
  },
  {
    name: "",
    txt: "Закупки и реализация имущества ",
    subMenu: [
      {
        name: "",
        txt: "Закупки",
      },
      {
        name: "",
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

const currentRoute = ref(allRoute);

const nextRoute = (t) => {
  console.log(t);
  if (t.subMenu) {
    currentRoute.value = t.subMenu;
  } else {
    router.push({ name: `${t.name}`, params: {} });
  }
};

const backRoute = () => {
  currentRoute.value = allRoute;
};

// const copyPhoneNumber = () => {
//   const phone = "+7 (901) 971-46-64";
//   navigator.clipboard
//     .writeText(phone)
//     .then(() => {
//       showCopied.value.message = "Телефон скопирован в буфер обмена";
//       showCopiedMessage();
//     })
//     .catch((err) => {
//       showCopied.value.message = "Ошибка копирования телефона";
//       console.error("Ошибка копирования: ", err);
//     });
// };
// const showCopiedMessage = () => {
//   showCopied.value.active = true;
//   setTimeout(() => {
//     showCopied.value.active = false;
//   }, 5000);
// };
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
  from,
  50% {
    color: #ffffff00;
  }
  to {
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
.prev-menu {
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 50px;
  left: 260px;
}
@keyframes fadeIn {
  from {
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
.sub-menu{
  height: 100%;
  width: 500px;
  background: #000;
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
    top: 9px;
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
