<template>
  <div class="head">
    <div class="head-title">
      <div class="line"></div>
      <h1>Совместное проектирование</h1>
      <p>
        Соржинский инструментальный завод делится своими знаниями о
        производственных процессах и материаловедении на критическом этапе
        разработки нового продукта. Наш многолетний опыт имеет решающее значение
        для понимания осуществимости проекта, идеального дизайна, наиболее
        эффективного производственного процесса и оценки стоимости серийного
        производства.
      </p>
      <modalForm></modalForm>
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
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.head {
  width: 100vw;
  height: 48vw;
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
  color: white;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  gap: 50px;
  @include fluid("height", 500);
}
.content-item {
  width: 800px;
  p {
    margin-top: 10px;
  }
  h1 {
    display: block;
    margin-left: 20px;
  }
}
.y-square {
  @include fluid("width", 20);
  @include fluid("height", 20);
  background: #ffd400;
}
.wrap-content-title {
  display: flex;
  align-items: center;
}
</style>
