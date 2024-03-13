<template>
  <div class="head">
    <div class="head-title">
      <div class="line"></div>
      <h1>Услуги прототипирования и реверс-инжиниринга Прототипирование</h1>
      <p>
        Соржинский завод предоставляет предварительные прототипы для функциональных
        испытаний. Благодаря нашим хорошо оснащенным производственным системам
        мы можем изготовить ваши прототипы с использованием лазерной резки,
        механической обработки или штамповки деталей, в зависимости от ваших
        потребностей. Наш стандартный инструмент также может принести вам
        большую выгоду. Все это выполняется внутри компании.
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
        <h1>Категории прототипов:</h1>
      </div>
      <p>
        Мы рассматриваем прототипы в двух категориях. Первый будет изготовлен с
        использованием тех же методов, что и запланированный производственный
        процесс. Обычно это обходится дороже, поскольку для воспроизведения
        метода производства требуется больше инструментов. Второй вариант —
        изготовить детали любым методом, необходимым для получения детали
        правильных размеров. У нас есть такие варианты, как проволочная
        электроэрозионная обработка , волоконный лазер , штамповка с ЧПУ и
        обработка с ЧПУ , чтобы предоставить вам лучшие детали при минимальных
        затратах. Мы также используем мягкую оснастку и разделяем модульную
        оснастку, чтобы контролировать затраты на оснастку. Давайте посмотрим на
        ваши конкретные потребности проекта и разработаем соответствующий план
        действий.
      </p>
    </div>
    <div class="content-item">
      <div class="wrap-content-title">
        <div class="y-square"></div>
        <h1>Обратный инжиниринг:</h1>
      </div>
      <p>
        Есть деталь, но нет чертежей? Мы также предоставляем услуги обратного
        инжиниринга металлических деталей, включая отливки, штамповки и узлы. Мы
        успешно помогли промышленным клиентам воссоздать металлические детали,
        когда запасные части недоступны. WMPI также может заняться изготовлением
        металла и распечатать все компоненты для будущего производства, если
        исходные чертежи недоступны. В этих случаях можно выполнить проверку и
        создать копию детали в виде модели Solidworks. После этого мы сможем
        выбрать лучший метод для воспроизведения вашей детали.
      </p>
    </div>
    <div class="content-item">
      <hr />
      Обычно мы получаем запросы на обратное проектирование для замены
      поврежденных деталей, уникальных для машины или инструмента. WMPI может
      использовать любую комбинацию возможностей обработки с ЧПУ , волоконного
      лазера , тормоза с ЧПУ, сварки , электроэрозионной обработки проволоки и
      инструментального цеха для воссоздания вашей детали. Нам также необходимо
      помнить об авторском праве и патентном законодательстве при копировании
      компонентов.
    </div>
  </div>
</template>

<script setup>
import modalForm from "./modalForm.vue";
import currentPage from "./currentPage.vue";
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.current-page{
  position: absolute;
  @include fluid("left", 160);
  bottom: 0px;
}
.head {
  width: 100vw;
  height: 48vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/eng.png);
  background-size: cover;
}
.head-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  @include fluid("gap", 30);
  @include fluid("width", 660);
  @include fluid("height", 580);
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
  @include fluid("height", 800);
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
  align-items: center;;
}
@media (min-width: 450px) and (max-width: 800px) {
  .head {
    height: 100vw;
  }
  .head-title {
    gap: 20px;
    width: 300px;
    height: 290px;
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
    height: 100vw;
  }
  .head-title {
    gap: 10px;
    width: 220px;
    height: 240px;
    padding: 10px;
    top: 50px;
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
    height: 100vw;
  }
  .head-title {
    gap: 10px;
    width: 180px;
    height: 180px;
    padding: 10px;
    top: 50px;
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
</style>
