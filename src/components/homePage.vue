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
      <div class="about a-first">
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
      <hr class="about-line" />
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
      <servicesList></servicesList>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import sliderHome from "./sliderHome.vue";
import servicesList from "./servicesList.vue";

(function () {
  window.scrollTo({ top: 0 }); // после перезагрузки нас перекидывает на верх сайта
})();

const scrollCount = ref(1);
const parallaxContainer = ref(null);
const parallaxPosition = ref("50% 0");

let par;

const isFixed = computed(() => {
 return scrollCount.value < 0 ? false : true;
})

const scroll = () => {
  scrollCount.value = 1 - window.scrollY / 800; // уменьшаем значение с 1 до 0 при прокрутке страницы
  parallaxPosition.value = `50% ${(window.scrollY - par) / 2}px`;
};

onMounted(() => {
  window.addEventListener("scroll", scroll); // Добавляем обработчик прокрутки 

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
  z-index: -1;
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
.fixed {
  position: fixed;
}
.stop {
  display: none;
  position: relative;
  top: 1000px;
}
.main-container {
  @include fluid("font-size", 24);
  position: relative;
  top: 1380px;
  color: #fff;
  transition: all 1s ease 0.01s;
}
.about--wrap {
  flex-direction: column;
  @include fluid("gap", 50);
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
.about-line{
  @include fluid("width", 1500);
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
  @include fluid("padding-bottom", 50);
}
.a-last {
  display: flex;
  align-items: center;
  font-weight: 900;
  @include fluid("margin-top", 200);
  @include fluid("height", 980);
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url(https://www.chapmantaylor.com/uploads/Factory-of-the-Future-3.jpg)  ;
    
  color: #fff;
}
</style>
