<template>
  <div class="content">
    <h1 class="content__title c">Разработка конструкторской документации</h1>
    <div class="content__head c">
      <div class="content__txt">
        <div class="head__txt">
          <p class="txt">
            Конструкторская документация (КД) — это система графических и
            текстовых документов, которая содержит необходимое количество
            технических чертежей, электрических, гидравлических, пневматических
            схем, а также паспорта, руководства по эксплуатации, ведомости
            покупных изделий и другую инженерную базу. Документация оформляется
            по ГОСТ, определяет составляющие проектируемого оборудования,
            включает совокупность технической информации для его изготовления,
            контроля и эксплуатации.
          </p>
          <p class="txt-bold bl">
            Мы разрабатываем конструкторскую документацию в соответствии с
            нормами Единой системы конструкторской документации (ЕСКД).
            Документация проходят нормативный и технологический контроль.
          </p>
          <br />
          <modalForm></modalForm>
        </div>
        <img class="content-img" src="/src/assets/co-eng.jpg" alt="" />
      </div>
      <div class="txt-bold mt">
        Проектирование нового оборудования всегда сопровождается
        научно-исследовательской деятельностью конструкторского отдела. Процесс
        работы состоит из генерации предложений, выполнения расчётов, отбора
        вариантов изделия, проработки в графическом виде и приведения к
        стандартам для дальнейшего применения в производстве.
        <br />
        <br />
        В конструкторской компании «Соржанский завод» вы можете заказать услугу
        проектирования изделия в области машиностроения любой сложности и этапа:
        от опытного образца до серийного производства.
      </div>
    </div>
    <div class="content-midle c">
      <h1>Список документации</h1>
      <div class="mt">
        <h3>Чаще всего разработка конструкторской документации включает:</h3>
        <ul class="list">
          <li>
            3Д-модели деталей в универсальном формате .stp или .m3d (Компас),
            .sldprt (SolidWorks)
          </li>
          <li>
            Модели сборочных единиц в универсальном формате .stp или a3d
            (Компас), .sldasm (SolidWorks)
          </li>
          <li>Чертежи: на детали, на сборку</li>
          <li>Спецификации (СП)</li>
          <li>Ведомости покупных изделий (ВП)</li>
        </ul>
      </div>
      <div class="mt">
        <h3>Также могут быть включены:</h3>
        <ul class="list">
          <li>Инженерные расчеты</li>
          <li>
            Чертеж общего вида или габаритный для сертификации или презентации
          </li>
          <li>Электромонтажный</li>
          <li>Монтажный</li>
        </ul>
      </div>
      <div class="mt">
        <h3>
          Кроме КД мы можем разработать технические, технологические,
          эксплуатационные, ремонтные документы, в том числе:
        </h3>
        <ul class="list">
          <li>Паспорт</li>
          <li>Руководство по эксплуатации</li>
          <li>Инструкцию по сборке</li>
          <li>
            Технические условия и др. сопутствующие изготовлению и поставке
            готовой продукции документы.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import modalForm from "../modalForm.vue";
</script>

<style lang="scss" scoped>

li {
  margin-top: 20px;
}
.txt {
  font-size: 16px;
}
h3 {
  margin-bottom: 10px;
}
h5 {
  margin-bottom: 10px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
}
.c {
  width: 80%;
}
.head__txt {
  width: 100%;
}
.content__txt {
  position: relative;
  display: flex;
  gap: 50px;
  p {
    width: 100%;
  }
  .content-img {
    width: 50%;
    height: 50%;
    box-shadow: 0 0 8px rgb(0, 0, 0);
  }
}
.txt-bold {
  margin-top: 50px;
  font-size: 20px;
  padding-left: 15px;
  font-weight: bold;
}
.bl {
  border-left: 2px #ffe70d solid;
}
.mt {
  margin-top: 50px;
}
@media (min-width: 200px) and (max-width: 800px) {
  .content__txt {
    flex-direction: column-reverse;

    .content-img {
      width: 100%;
      height: 100%;
      box-shadow: 0 0 8px rgb(0, 0, 0);
    }
  }
}
@media (min-width: 200px) and (max-width: 500px) {
  p{
    font-size: 12px;
  }
  li{
    font-size: 12px;
  }
  .txt {
    font-size: 12px;
  }
  .txt-bold {
    font-size: 15px;
  }
}
</style>
