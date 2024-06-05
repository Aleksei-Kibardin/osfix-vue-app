<template>
  <div class="head">
    <div class="head-title">
      <div class="line"></div>
      <h1>Совместное проектирование</h1>
      <p>
        Соржинский завод делится своими знаниями о производственных процессах и
        материаловедении на критическом этапе разработки нового продукта. Наш
        многолетний опыт имеет решающее значение для понимания осуществимости
        проекта, идеального дизайна, наиболее эффективного производственного
        процесса и оценки стоимости серийного производства.
      </p>
      <modalForm></modalForm>
    </div>
    <div class="current-page">
      <current-page></current-page>
    </div>
  </div>
  <div class="content">
    <div class="content-item">
      <div class="wrap-content-title">
        <div class="y-square"></div>
        <h1>Проектирование, прототипирование и оснастка:</h1>
      </div>
      <p>
        Наши собственные инженерные группы обучены использованию новейших
        программных инструментов для проектирования (******) и численного
        моделирования (****). У них есть средства для быстрого прототипирования
        с помощью 3D-печати, гидроабразивной резки и электроэрозионной
        обработки. Изготовленные детали можно контролировать на месте на
        соответствие размеров путем зондирования, сканирования и трехмерного
        зрения. Мы также оцениваем структурные параметры, такие как твердость,
        прочность на разрыв и усталостная прочность. Наконец, мы производим
        собственные производственные инструменты и автоматизированные сборочные
        линии, обеспечивая глубокий контроль над всем производственным
        процессом.
      </p>
    </div>
    <div class="content-item">
      <div class="wrap-content-title">
        <div class="y-square"></div>
        <h1>Сокращение времени выхода на рынок:</h1>
      </div>
      <p>
        Клиенты полагаются на наш опыт и техническую помощь от ранней стадии
        разработки продукта до его индустриализации и серийного производства.
        Это означает, что мы можем помочь клиентам сократить время выхода на
        рынок, увеличить выход продукции, оптимизировать затраты и повысить
        качество.
      </p>
    </div>
  </div>
</template>

<script setup>
import modalForm from "./modalForm.vue";
import currentPage from "./currentPage.vue";
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.current-page {
  position: absolute;
  @include fluid("left", 160);
  bottom: 0px;
}
.head {
  width: 100vw;
  height: 50vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/co-eng.jpg);
  background-size: cover;
}
.head-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  @include fluid("gap", 30);
  @include fluid("width", 660);
  @include fluid("height", 480);
  @include fluid("padding", 40);
  @include fluid("top", 100);
  right: 0px;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  h1 {
    @include fluid("font-size", 36);
  }
  .line {
    @include fluid("width", 100);
    border: #4e70af 3px solid;
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
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include fluid("margin-top", 40);
  @include fluid("gap", 50);
  @include fluid("height", 600);
}
.content-item {
  @include fluid("width", 800);
  p {
    @include fluid("margin-top", 10);
    @include fluid("font-size", 18);
  }
  h1 {
    display: block;
    @include fluid("margin-left", 20);
    @include fluid("font-size", 24);
  }
}
.y-square {
  @include fullFluid("width", 20);
  @include fullFluid("height", 20);
  background: #4e70af;
}
.wrap-content-title {
  display: flex;
  align-items: center;
}
@media (min-width: 450px) and (max-width: 800px) {
  .head {
    height: 110vw;
  }
  .head-title {
    gap: 20px;
    width: 300px;
    height: 310px;
    padding: 40px;
    top: 100px;
    h1 {
      font-size: 15px;
    }
    .line {
      width: 40px;
    }
    p {
      font-size: 10px;
    }
  }
}
@media (min-width: 301px) and (max-width: 449px) {
  .head {
    height: 110vw;
  }
  .head-title {
    gap: 10px;
    width: 200px;
    height: 250px;
    padding: 10px;
    top: 70px;
    h1 {
      font-size: 12px;
    }
    .line {
      width: 40px;
    }
    p {
      font-size: 9px;
    }
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .head {
    height: 110vw;
  }
  .head-title {
    gap: 10px;
    width: 180px;
    height: 200px;
    padding: 10px;
    top: 70px;
    h1 {
      font-size: 10px;
    }
    .line {
      width: 40px;
    }
    p {
      font-size: 7px;
    }
  }
}
@media (min-width: 450px) and (max-width: 800px) {
  .current-page {
    top: 50px;
    left: 20px;
  }
  .content {
    padding: 30px;
    gap: 40px;
    margin-top: 35px;
  }
  .content-item {
    p {
      margin-top: 10px;
      font-size: 14px;
    }
    h1{
      margin-left: 10px;
      font-size: 17px;
    }
  }
  .y-square {
    width: 20px;
    height: 20px;
  }
}
@media (min-width: 200px) and (max-width: 449px) {
  .current-page {
    top: 50px;
    left: 20px;
  }
  .content {
    padding: 30px;
    gap: 40px;
    margin-top: 35px;
  }
  .content-item {
    p {
      margin-top: 10px;
      font-size: 10px;
    }
    h1{
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .y-square {
    width: 20px;
    height: 20px;
  }
}
</style>
