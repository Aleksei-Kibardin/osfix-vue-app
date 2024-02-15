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
      <hr style="width: 1500px" />
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

      <div class="slide-list">
        <div class="foo" ref="sliderWight"></div>
        <div class="slider">
          <div class="carousel" ref="sliderContainer" :style="sliderScroll()">
            <div v-for="t in slideUrl" :key="t">
              <img class="slide" :src="`${t}`" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrap--tab-container">
        <div class="tab-container">
          <div class="tab--title"></div>
          <div class="tab--list"></div>
          <div class="tab--img"></div>
          <div class="tab--txt"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

(function () {
  window.scrollTo({ top: 0 }); // после перезагрузки нас перекидывает на верх сайта
})();

const router = useRouter();
const store = useStore();

const scrollCount = ref(1);
const sliderContainer = ref(null);
const sliderWight = ref(null);
const parallaxContainer = ref(null);
const parallaxPosition = ref("50% 0");

let rect = { top: 1000 };
let sizeScrolSlider = { top: 1000 };
let par;

const slideUrl = [
  "https://static.tildacdn.com/tild6663-3837-4063-a432-376264313735/01.svg",
  "https://static.tildacdn.com/tild6164-6231-4230-a466-343633643665/02.svg",
  "https://static.tildacdn.com/tild3738-6266-4437-b835-646462356366/03.svg",
  "https://static.tildacdn.com/tild6137-3538-4461-a662-636136333464/04.svg",
  "https://static.tildacdn.com/tild6436-6466-4862-b033-393861323432/05.svg",
  "https://static.tildacdn.com/tild3266-3138-4437-b064-306539643436/06.svg",
  "https://static.tildacdn.com/tild3164-3231-4764-b164-616465383034/07.svg",
  "https://static.tildacdn.com/tild6161-3363-4264-b037-643961656561/08.svg",
];

const isFixed = computed(() => {
 return scrollCount.value < 0 ? false : true;
})

const sliderScroll = () => {
  let y = window.scrollY - rect.top;
  if (y < 0) {
    return {
      "--multiplier": 0,
    };
  }

  if (y > sizeScrolSlider) {
    console.log(rect);
    return {
      "--multiplier": sizeScrolSlider,
    };
  }
  return {
    "--multiplier": y,
  }; // переписать на swich case
};

const scroll = () => {
  scrollCount.value = 1 - window.scrollY / 800; // уменьшаем значение с 1 до 0 при прокрутке страницы
  parallaxPosition.value = `50% ${(window.scrollY - par) / 2}px`;
  if (window.scrollY >= rect.top) {
    sliderScroll();
  }
};

const handleResize = () => {
  sizeScrolSlider = sliderWight.value.getBoundingClientRect().height; // Обновляем значение ширины окна при изменении размеров окна
};

onMounted(() => {
  window.addEventListener("scroll", scroll); // Добавляем обработчик прокрутки 
  window.addEventListener("resize", handleResize); // Добавляем обработчик события resize

  rect = sliderContainer.value.getBoundingClientRect();
  sizeScrolSlider = sliderWight.value.getBoundingClientRect().height;
  par = parallaxContainer.value.getBoundingClientRect().top;
});

onUnmounted(() => {
  window.removeEventListener("scroll", scroll); // Удаляем обработчик прокрутки
  window.removeEventListener("resize", handleResize); // Удаляем обработчик события resize
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
  @include fluid("padding", 95);
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
  @include fluid("margin-left", 100);
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
  justify-content: center;
  @include fluid("gap", 30);
  flex-wrap: wrap;
}
.about-us {
  color: rgb(238, 238, 112);
}
.misisons {
  color: #733cf3;
}
.about--txt {
  @include fluid("width", 700);
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
    url(https://www.chapmantaylor.com/uploads/Factory-of-the-Future-3.jpg);
  color: #fff;
}
.slide-list {
  display: flex;
  justify-content: center;
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
  width: 100vw;
  @include fluid("height", 3740);
  background: #f7f7f7;
}
.slider {
  @include fluid("margin-top", 250);
  @include fluid("top", 250);
  position: -webkit-sticky;
  position: sticky;
  @include fluid("width", 1280);
  @include fluid("height", 440);
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
}
.carousel {
  display: flex;
  @include fluid("gap", 40);
  @include fluid("padding-left", 40);
  @include fluid("padding-top", 20);
  @include fluid("padding-bottom", 20);
  flex-wrap: nowrap;
  @include fluid("width", 3800);
  transform: translate(calc(-1px * var(--multiplier)));
}
.slide {
  @include fluid("height", 400);
}
.foo {
  position: absolute;
  @include fluid("height", 2202);
}
</style>
