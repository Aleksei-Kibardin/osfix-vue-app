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
        <div class="y-square"></div>
        <div>
          <span>СОРЖЕНСКИЙ ИНСТРУМЕНТАЛЬНЫЙ ЗАВОД</span>
          <br />
          Предприятие полного цикла Холодной штамповки. С широким спектром
          продукции и услуг
        </div>
      </span>
    </div>

    <div class="main-container">
      <div class="about a-first" :class="{ show: scrollCount < 0 }">
        <div class="about--txt">
          <h1 class="about-us">
            <div class="y-square"></div>
            О нас
          </h1>
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

      <!-- <slider-home></slider-home> -->
      <div class="services-list">
        <services-list></services-list>
      </div>

      <div class="bg-news">
        <news-list></news-list>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import servicesList from "./servicesList.vue";
import newsList from "./newsList.vue";

(function () {
  window.scrollTo({ top: 0 }); // после перезагрузки нас перекидывает на верх сайта
})();
let par;

const scrollCount = ref(1);
const parallaxContainer = ref(null);
const parallaxPosition = ref("50% 0");

const isFixed = computed(() => {
  return scrollCount.value < 0 ? false : true;
});

const scroll = () => {
  scrollCount.value = 1 - window.scrollY / 300; // уменьшаем значение с 1 до 0 при прокрутке страницы
  parallaxPosition.value = `10% ${(window.scrollY - par) / 9}px`;
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
.y-square {
  @include fullFluid("width", 30);
  @include fullFluid("height", 30);
  background: #4e70af;
}
.home__title .y-square {
  @include fullFluid("width", 160);
  @include fullFluid("height", 45);
  @include fullFluid("margin-top", 5);
  @include fullFluid("margin-right", 20);
}
.home__title span {
  @include fluid("font-size", 45);
  font-weight: 900;
}
.home__title {
  line-height: normal;
  display: flex;
  align-items: flex-start;
  color: #fff;
  @include fluid("padding", 50);

  @include fluid("font-size", 24);
}
@media (min-width: 200px) and (max-width: 1000px) {
  .home__title {
    padding: 40px;
    margin-top: 150px;
    font-size: 19px;
  }
  .video {
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 200px) and (max-width: 400px) {
  .home__title {
    font-size: 15px;
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
  color: #000000;
  transition: all 1s ease 0.01s;
}
.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include fluid("gap", 30);
}
.about-us {
  display: flex;
  align-items: center;
  @include fluid("gap", 15);
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
  .home__title  {
  padding: 0
}
}

.about--txt {
  @include fluid("width", 750);
}
.about--img {
  @include fluid("width", 700);
  box-shadow: 15px 15px #4e70af;
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
  width: 100vw;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://www.chapmantaylor.com/uploads/Factory-of-the-Future-3.jpg);
  background-size: cover;
  color: #fff;
  .about--txt {
    gap: 20px;
    width: 60vw;
    display: flex;
    flex-direction: row;
  }
}
@media (min-width: 200px) and (max-width: 500px) {
  .a-last {
    width: 100%;
    font-size: 13px;
    background-size: auto;
    background-repeat: repeat;
    background-size: 250%;
    .about--txt {
      flex-direction: column;
      width: 100%;
    }
    hr{
      display: none;
    }
  }
}
@media (min-width: 501px) and (max-width: 1000px) {
  .a-last {
    padding: 10px;
    width: 100vw;
    font-size: 13px;
    background-size: auto;
    background-repeat: repeat;
    background-size: 250%;
    .about--txt {
      flex-direction: column;
    }
    hr{
      display: none;
    }
  }
}

.bg-news {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 100px;
}
.services-list {
  padding: 20px;
}
</style>
