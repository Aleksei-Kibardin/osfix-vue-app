<template>
  <div class="current-page">
    <current-page></current-page>
  </div>
  <div class="wrap-content">
    <div class="content">
      <div class="wrap-title">
        <div class="y-square"></div>
        <h1>Экология</h1>
      </div>
      <h3>
        Ответственное отношение к использованию природных ресурсов — одна из ключевых составляющих корпоративной социальной ответственности и важный фактор устойчивого развития Компании.
      </h3>
      <p>
        <br />
        "В "Соржинском заводе" мы не только производим качественные изделия, но
        и активно заботимся о окружающей среде. Мы осознаем важность сохранения
        природы для будущих поколений, поэтому внедряем передовые технологии и
        методы, направленные на снижение экологического воздействия наших
        производственных процессов. Наша компания активно участвует в
        экологических инициативах, сотрудничает с экологическими организациями и
        государственными инстанциями для поиска оптимальных решений по 
        минимизации выбросов и улучшению состояния окружающей среды.
        <br />
        <br />
        Мы стремимся к устойчивому развитию, придерживаясь высоких стандартов
        экологической ответственности и социального вклада. Наша цель - не
        только процветание бизнеса, но и создание здоровой и безопасной среды
        для всех. Мы работаем над улучшением нашей экологической
        производственной деятельности, чтобы оставить мир чище и зеленее для
        будущих поколений."
      </p>
    </div>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
a {
  color: #000;
}
.current-page {
  margin-top: 50px;
  margin-left: 30px;
}
.wrap-title {
  display: flex;
  align-items: center;
  @include fluid("gap", 10);
}
.y-square {
  @include fullFluid("width", 30);
  @include fullFluid("height", 30);
  background: #4e70af;
}
.wrap-content {
  @include fluid("min-height", 711);
  @include fluid("padding", 20);
  display: flex;
  width: 95vw;
  justify-content: center;
}
.content {
  @include fluid("margin-top", 40);
  @include fluid("gap", 15);
  @include fluid("width", 1000);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
p {
  @include fluid("margin-top", 17);
  @include fluid("font-size", 18);
  text-align: left;
}
ul {
  text-align: left;
}
li {
  @include fluid("margin-top", 6);
  @include fluid("font-size", 20);
}
.wrap-cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @include fluid("gap", 10);
  gap: 10px;
}
.service-card {
  text-align: left;
  @include fluid("width", 320);
  @include fluid("padding", 3);
  @include fluid("margin-bottom", 30);
  @include fluid("border-radius", 15);
  border: 1px solid #f39d23;
}
.desc {
  p {
    @include fluid("font-size", 15);
    @include fluid("margin-bottom", 20);
  }
}
.outer {
  height: 100%;
  @include fluid("font-size", 14);
  box-shadow: 0 0 6px rgba(107, 107, 107, 0.692);
  background: rgb(10, 10, 10);
  border-radius: 10px;
  padding: 15px 60px 35px 20px;
  position: relative;
}
.more {
  display: flow-root;
  position: absolute;
  width: 0px;
  border-bottom: solid 1px #fff;
  letter-spacing: 3px;
  transition: all 1s ease 0s;
  bottom: 15px;
}
.more:hover {
  width: 40%;
}
@media (min-width: 200px) and (max-width: 800px) {
  .wrap-content {
    @include fluid("min-height", 711);
    @include fluid("padding", 20);
    display: flex;
    padding: 14px;
    width: 100%;
    justify-content: center;
  }
  li {
    font-size: 13px;
  }
  h1 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
}
@media (min-width: 200px) and (max-width: 1100px) {
  li {
    list-style: none;
  }
  .wrap-title {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    width: 95%;
    margin-top: 17px;
    font-size: 15px;
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  li {
    list-style: none;
  }
  .wrap-title {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  p {
    margin-top: 16px;
    font-size: 12px;
  }
}
</style>
