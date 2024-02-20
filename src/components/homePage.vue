<template>
  <video class="video" autoplay muted loop :style="{ opacity: scrollCount }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
  <div class="content">
    <div
      class="header--container"
      :class="{ fixed: isFixed, stop: !isFixed }"
      :style="{ opacity: scrollCount }"
    >
      <span class="home__title">
        <span>Первый завод </span>- Предприятие полного цикла
        <br />
        Холодной штамповки. С широким спектром продукции и услуг
        <hr />
      </span>
    </div>

    <div class="main-container">
      <div class="about a-first" :class="{ show: scrollCount < 0 }">
        <div class="about--txt">
          <h1 class="about-us">О нас</h1>
          <hr />
          «Первый завод» работает на рынке металлообработки с 1995 года. За
          период своей деятельности из небольшого общества по производству
          строительного крепежа завод добавил несколько производственных
          площадок и выпускает электротехническую продукцию, крепления для
          железнодорожного подвижного состава, автомобилестроения и
          горнодобывающей промышленности. Мы постоянно развиваемся и ищем
          сложные вызовы, требующие внедрения новых технологий и стандартов
          производства, расширения спектра производимых операций. Но и по сей
          день основным направлением «Первого завода» является холодная
          штамповка метала
        </div>
        <img
          class="about--img"
          src="https://cdn-p.cian.site/images/64/132/301/1032314645-6.jpg"
          alt=""
        />
      </div>
      <hr class="about-line" :class="{ show: scrollCount < 0 }" />
      <div class="paralax-container" ref="parallaxContainer">
        <div
          class="about a-last"
          :style="{
            backgroundPosition: parallaxPosition,
          }"
        >
          <div class="about--txt">
            <h1 class="misisons">Миссия компании</h1>
            <hr />
            Наша миссия состоит в том, чтобы вывести стандарты сервиса
            Питерского рынка на новый уровень. Благодаря детальному изучению
            наших клиентов мы создаем эффективное решение индивидуально для
            каждого бизнеса. Вместе с вами мы думаем над тем как оптимизировать
            процесс закупок и создать для вашей компании конкурентное
            преимущество. <br />
            Мы стремимся стать для нашего клиента не поставщиком, а частью его
            команды.
          </div>
        </div>
      </div>

      <slider-home></slider-home>
      <services-list></services-list>
      <news-list></news-list>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import sliderHome from "./sliderHome.vue";
import servicesList from "./servicesList.vue";
import newsList from "./newsList.vue";

(function () {
  window.scrollTo({ top: 0 }); // после перезагрузки нас перекидывает на верх сайта
})();
let isMobile = false;
let par;

const scrollCount = ref(1);
const parallaxContainer = ref(null);
const parallaxPosition = ref("50% 0");




function checkMobile() {
  if (window.innerWidth <= 768) {
    // Примерный порог для мобильных устройств
    isMobile = true;
  }
}

const isFixed = computed(() => {
  return scrollCount.value < 0 ? false : true;
});

const scroll = () => {
  scrollCount.value = 1 - window.scrollY / 300; // уменьшаем значение с 1 до 0 при прокрутке страницы
  parallaxPosition.value = `50% ${(window.scrollY - par) / 2}px`;
};

onMounted(() => {
  window.addEventListener("scroll", scroll); // Добавляем обработчик прокрутки
  checkMobile();
  par = parallaxContainer.value.getBoundingClientRect().top;
});

onUnmounted(() => {
  window.removeEventListener("scroll", scroll); // Удаляем обработчик прокрутки
});
</script>

<style lang="scss" scoped>
@import "../fluid.sass";

:root {
  --multiplier: 0;
}

.video {
  top: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
}
.content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.header--container {
  display: flex;
  flex-wrap: nowrap;
}
.home__title span {
  @include fluid("font-size", 60);
  color: #ff0000;
}
.home__title {
  line-height: normal;
  display: block;
  color: #fff;
  font-weight: 900;
  @include fluid("width", 1200);
  @include fluid("margin-top", 250);
  @include fluid("margin-left", 200);
  @include fluid("font-size", 50);
}
@media (min-width: 200px) and (max-width: 1000px) {
  .home__title {
    padding: 40px;
    margin-top: 150px;
    font-size: 19px;
  }
}
.stop {
  position: relative;
  @include fluid("top", 1000);
}
.main-container {
  @include fluid("font-size", 24);
  position: relative;
  margin-top: 600px;
  color: #fff;
  transition: all 1s ease 0.01s;
}
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include fluid("gap", 30);
}
.about-us {
  color: rgb(238, 238, 112);
}
.about-line {
  width: 0;
  transition: all 2s ease 0.01s;
}
.about-line.show {
  @include fluid("width", 1500);
}
@media (min-width: 200px) and (max-width: 1000px) {
  .about-line.show {
    display: none;
  }
  .a-first {
    padding: 10px;
    font-size: 13px;
    padding-bottom: 50px;
  }
}
.misisons {
  color: #733cf3;
}
.about--txt {
  @include fluid("width", 750);
}
.about--img {
  @include fluid("width", 700);
}
.a-first {
  opacity: 0;
  @include fluid("padding-bottom", 50);
  transition: all 1s ease 0.01s;
}
.show {
  opacity: 1;
}
.a-last {
  display: flex;
  align-items: center;
  font-weight: 900;
  @include fluid("margin-top", 200);
  @include fluid("height", 980);
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://www.chapmantaylor.com/uploads/Factory-of-the-Future-3.jpg);
  background-size: cover;

  color: #fff;
}
@media (min-width: 200px) and (max-width: 1000px) {
  .a-last {
    padding: 10px;
    height: 100vw;
    font-size: 13px;
    background-size: 250%;
    background-repeat: repeat;
  }
}
// @media (min-width: 200px) and (max-width: 1000px) {
//   .a-last {
//     padding: 10px;
//     height: 100vw;
//     font-size: 13px;
//     background-size: auto;
//     background-repeat: repeat;
//   }
// }
</style>
