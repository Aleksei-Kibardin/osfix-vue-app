<template>
  <div class="current-page">
    <current-page></current-page>
  </div>
  <div class="wrap-content">
    <div class="content">
      <h1 class="content-title">
        Прототипы и детали для медицинской промышленности
      </h1>
      <p class="content-txt">
        Наш широкий спектр производственных технологий и вариантов
        биосовместимых материалов способствует предоставлению опыта цифрового
        производства компаниям, разрабатывающим продукцию в медицинской
        промышленности. Мы предлагаем:
        <br />
        <br />
        Последние технологические разработки привели к увеличению инноваций в
        медицинском секторе. От специализированных медицинских приборов до
        медицинского оборудования, обслуживающего конечного пользователя, в
        последнее время на рынке появилось много новых продуктов, и многие
        другие уже в пути.
        <br />
        Наша сеть обладает необходимыми мощностями для прототипирования или
        серийного производства. Благодаря нашей широкой сети тщательно
        проверенных производителей мы подберем для вашего проекта наиболее
        подходящего поставщика для производства ваших моделей и запускаем
        производство как можно скорее.
      </p>
    </div>
    <div class="list">
      <h1>Соржинский завод в качестве производственного партнера это:</h1>
      <ul>
        <li>
          <h1>
            <div class="y-square"></div>
            Универсальный магазин металлических деталей
          </h1>
          <p>
            Соржинский завод предлагает услуги обработки с ЧПУ и производства
            оснастки на единой платформе. У нас также есть большой выбор
            промышленных металлов (алюминий, сталь и сплавы нержавеющей стали)
            Кроме того, мы всегда находим подходящего поставщика со свободными
            мощностями благодаря нашей сети из 2000 высококвалифицированных
            поставщиков.
          </p>
          <hr />
        </li>
        <li>
          <h1>
            <div class="y-square"></div>
            Доступны бесконечные возможности
          </h1>
          <p>
            Выбирайте комбинаций материалов, отделки поверхности, допусков и
            сертификатов. Соржинский завод предлагает 16 производственных
            технологий, и множество материалов, а также индивидуальные
            альтернативы для обеспечения индивидуального производства. Наша сеть
            также может производить детали с жесткими допусками.
          </p>
          <hr />
        </li>
        <li>
          <h1>
            <div class="y-square"></div>
            Специальные варианты отделки
          </h1>
          <p>
            Соржинский завод предлагает большой выбор вариантов постобработки
            (анодирование, пассивация, гальваника, порошковое покрытие,
            термообработка и т. д.), а также индивидуальные альтернативы. Эти
            отделки могут улучшить эстетические и механические свойства, такие
            как термостойкость, коррозионная стойкость, прочность и т. д.
          </p>
          <hr />
        </li>
        <li>
          <h1>
            <div class="y-square"></div>
            Улучшен процесс прототипирования
          </h1>
          <p>
            мы знаем, что создание правильного прототипа требует времени и
            денег. Нужен совет? Наш отдел продаж и инженеры по продажам могут
            помочь вам на протяжении всего производственного процесса, включая
            этап проектирования.
          </p>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
</script>

<style lang="scss" scoped>
@import "../fluid.sass";

.current-page {
  margin-top: 50px;
  margin-left: 20px;
}
.wrap-content {
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
}
.content {
  @include fluid("width", 900);
  .content-title {
    @include fluid("font-size", 50);
  }
  .content-txt {
    @include fluid("font-size", 18);
    margin-top: 40px;
  }
}
.list {
  margin-top: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    @include fluid("width", 900);
    margin-top: 15px;
    @include fluid("font-size", 18);
    list-style-type: none;
  }
  h1 {
    @include fluid("font-size", 24);
    align-items: center;
    display: flex;
    gap: 10px;
  }
  p {
    @include fluid("font-size", 16);
    margin-top: 10px;
  }
}
.y-square {
  @include fullFluid("width", 20);
  @include fullFluid("height", 20);
  background: #4e70af;
}
@media (min-width: 400px) and (max-width: 800px) {
  .current-page {
    margin-top: 50px;
    margin-left: 20px;
  }
  .wrap-content {
    padding: 30px;
  }
  .content-title {
    font-size: 19px;
  }
  .content-txt {
    font-size: 13px;
    margin-top: 40px;
  }
  .list {
    li {
      width: 100%;
    }
    h1 {
      font-size: 17px;
      gap: 10px;
    }
    p {
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .y-square {
    width: 10px;
    height: 10px;
  }
}
@media (min-width: 200px) and (max-width: 399px) {
  .current-page {
    margin-top: 50px;
    margin-left: 20px;
  }
  .wrap-content {
    padding: 20px;
  }
  .content-title {
    font-size: 16px;
  }
  .content-txt {
    font-size: 11px;
    margin-top: 40px;
  }
  .list {
    li {
      width: 100%;
    }
    h1 {
      font-size: 14px;
      gap: 10px;
    }
    p {
      font-size: 10px;
      margin-top: 10px;
    }
  }
}
</style>
