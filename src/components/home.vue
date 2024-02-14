<template>
  <video class="video" autoplay muted loop :style="{ opacity: scrollCount }">
    <source src="../assets/Холодная штамповка металла.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
  <div class="wrap-content">
    <h1 class="header-title">
      Первый завод - Предприятие полного цикла
      <br />
      Холодной штамповки. С широким спектром продукции и услуг
      <hr>
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const scrollCount = ref(1);

const handleScroll = () => {
  scrollCount.value = 1 - window.scrollY / 500;
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
.wrap-content{
 display: flex; 
 @include fluid("padding", 100);
}
.header-title {
  @include fluid("margin-top", 250);
  color: #fff;
}
</style>
