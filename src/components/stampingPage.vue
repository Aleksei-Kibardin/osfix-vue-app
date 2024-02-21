<template>
  <div class="head">
    <div class="head-title">
      <div class="line"></div>
      <h1>ХОЛОДНАЯ ШТАМПОВКА</h1>
      <p>
        Холодная штамповка металла — это современный метод обработки давлением.
        Благодаря данной технологии удается получить металлические изделия
        разнообразных форм и габаритов. Такие заготовки отличаются
        геометрической точностью, высоким качеством поверхности. Благодаря этому
        они не нуждаются в дополнительной обработке.
      </p>
      <div class="copy-btn" @click="copyPhoneNumber()">Позвонить</div>
      <div class="copy-message" v-if="showCopied.active === true">
        <div class="bg">
        </div>
        {{ showCopied.message }}
      </div>
    </div>
  </div>
  <div class="content">
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const showCopied = ref({
  active: false,
  message: "",
});

const copyPhoneNumber = () => {
  const phone = "+7 (901) 971-46-64";
  navigator.clipboard
    .writeText(phone)
    .then(() => {
      showCopied.value.message = "Телефон скопирован в буфер обмена";
      showCopiedMessage();
    })
    .catch((err) => {
      showCopied.value.message = "Ошибка копирования телефона";
      console.error("Ошибка копирования: ", err);
    });
};
const showCopiedMessage = () => {
  showCopied.value.active = true;
  setTimeout(() => {
    showCopied.value.active = false;
  }, 5000);
};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.head {
  width: 100vw;
  height: 40vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://downloader.disk.yandex.ru/preview/1e8c7115f64afe9e794c9e7d8a248edcebb54868b9661a3c2290a3eebc1dae88/65cf87d9/WzWiVhhiyyXjU4fFNd5s3E7QIo-gQ_BfQgwz-T9RgSgMtD_1Na4lEgJB3lXrcwwUScrouFi8Yp_5rNcCQR3Zeg%3D%3D?uid=0&filename=%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F%20%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2%D0%BA%D0%B0.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1903x894);
  background-size: cover;
}
.head-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  @include fluid("gap", 30);
  @include fluid("width", 660);
  @include fluid("height", 540);
  @include fluid("padding", 40);
  @include fluid("top", 100);
  right: 0px;
  color: white;
  background: #242424;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  h1 {
    @include fluid("font-size", 36);
  }
  .line {
    @include fluid("width", 100);
    border: #ecfd00 3px solid;
  }
  p {
    @include fluid("font-size", 19);
  }
  .copy-btn {
    text-align: center;
    background: #ffd400;
    color: #242424;
    font-weight: 900;
    @include fluid("width", 150);
    @include fluid("padding", 10);
    cursor: pointer;
    transition: all 0.2s ease 0s;
  }
  .copy-btn:hover {
    box-shadow: 0px 0px 10px 2px rgba(228, 253, 6, 0.178);
    transform: translateY(-5%);
  }
  .copy-message {
    position: relative;
    overflow: hidden;
    text-align: center;
    color: white;
    padding: 10px;
    margin-top: 10px;
  }

  .bg::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    border: #00ff00 1px solid; /* Задайте градиент для затемнения */
    animation: slideIn 5s linear forwards; /* Анимация */
  }

  @keyframes slideIn {
    from {
      transform: translateX(
        -100%
      ); /* Начальное положение слева за пределами блока */
    }
    to {
      transform: translateX(0); /* Конечное положение */
    }
  }
  .content {
    display: flex;
    width: 100vw;
    height: 1000px;
  }
}
</style>
