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
        Первый завод - Предприятие полного цикла
        <br />
        Холодной штамповки. С широким спектром продукции и услуг
        <hr />
      </span>
    </div>

    <div class="main-container">
      <div class="about a-first" :style="{ opacity: handleScroll()-0.2 }">
        <div class="about--txt">
          <h1>О нас</h1>
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
          <hr>
        </div>
        <img
          class="about--img"
          src="https://cdn-p.cian.site/images/64/132/301/1032314645-6.jpg"
          alt=""
        />
      </div>

      <div class="about a-last" :style="{ opacity: handleScroll()-0.8 }">
        <img
          class="about--img"
          src="https://www.conceptcarz.com/images/articleimages/warren-fca_stamping-plant-01-400.jpg"
          alt=""
        />
        <div class="about--txt" >
          <h1>Миссия компании</h1>
          <hr />
          Наша миссия состоит в том, чтобы вывести стандарты сервиса Питерского
          рынка на новый уровень. Благодаря детальному изучению наших клиентов
          мы создаем эффективное решение индивидуально для каждого бизнеса.
          Вместе с вами мы думаем над тем как оптимизировать процесс закупок и
          создать для вашей компании конкурентное преимущество. <br />
          Мы стремимся стать для нашего клиента не поставщиком, а частью его
          команды.
          <hr>
        </div>
      </div>
      <div class="services-list"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const scrollCount = ref(1);
let isFixed = true;

const handleScroll = () => {
  scrollCount.value = 1 - window.scrollY / 800; // уменьшаем значение с 1 до 0 при прокрутке страницы
  isFixed = scrollCount.value < 0 ? false : true;
  console.log(window.scrollY);
  return 0 + window.scrollY / 1000; // увеличиваем значение с 0 до 1 при прокрутке страницы
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Добавляем обработчик прокрутки при монтировании компонента
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll); // Удаляем обработчик прокрутки при размонтировании компонента
});
</script>

<style lang="scss" scoped>
@import "../fluid.sass";

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
.home__title {
  line-height: normal;
  display: block;
  font-weight: 900;
  @include fluid("width", 800);
  @include fluid("margin-top", 250);
  @include fluid("margin-left", 100);
  color: #fff;
  @include fluid("font-size", 32);
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
.about--wrap{
  flex-direction: column;
  @include fluid("gap", 50);
  
}
.about{
  display: flex;
  justify-content: center; 
  @include fluid("gap", 30);
  flex-wrap: wrap;
}
.about--txt {
  @include fluid("width", 700);
}
.about--img {
  @include fluid("width", 700);
}

.a-first{
  @include fluid("padding-bottom", 50);
}
.a-last{
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
  width: 100vw;
  background: #f7f7f7;
  color: #000;
}
.services-list{
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
  width: 100vw;
  background: #fff;
}
</style>
