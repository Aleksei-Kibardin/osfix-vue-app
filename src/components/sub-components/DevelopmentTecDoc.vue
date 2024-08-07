<template>
  <div class="content">
    <h1 class="content__title c">Разработка технической документации</h1>
    <div class="content__head c">
      <div class="content__txt">
        <div class="head__txt">
          <p class="txt">
            Специалисты нашего конструкторского бюро разработают все необходимые
            документы (инструкции, схемы, техпаспорта, ТУ и др.) в оответствии с
            вашими целями и требованиями
          </p>
          <p class="txt-bold bl">
            Технические материалы состоят из ряда графических и текстовых
            элементов, которые необходимы для производства, поставки, монтажа и
            использования оборудования
          </p>
          <br />
          <modalForm></modalForm>
        </div>
        <div class="content-img">
          <img src="/src/assets/co-eng.jpg" alt="" />
        </div>
      </div>
      <div class="txt mt">
        Обычно при серийном выпуске и сертификации изделий встаёт вопрос о
        наличии документов, которые нужно оформить согласно нормам
        госстандартов. Конструкторское бюро «ИнКАД» занимается созданием
        технической документации на оборудование и устройства для промышленного
        применения. Сюда же относится оформление технических условий (ТУ) для
        регистрации продукции. Как правило, этот этап выполняется параллельно с
        проектированием КД и входит в общий состав РКД.
        <br />
        <br />
        Техдокументация должна прилагаться к поставляемой продукции. В ней
        описывается продукт, его производственные характеристики, правила
        использования, ремонта, обслуживания, транспортирования и утилизации.
      </div>
    </div>
    <div class="content-midle c">
      <h1>Перечень материалов</h1>
      <div class="mt">
        <h3>
          Разработка технической документации может включать в себя следующий
          перечень:
        </h3>
        <ul class="list">
          <li>
            <h5>Руководство по эксплуатации (РЭ)</h5>
            <p class="txt">
              Описывает устройство конструкции, общий вид, основные
              характеристики, принцип действия, порядок использования, ремонта,
              хранения, транспортировки.
            </p>
          </li>
          <li>
            <h5>Инструкция по монтажу (ИМ)</h5>
            <p class="txt">Регламентирует порядок и способ сборки объекта.</p>
          </li>
          <li>
            <h5>Паспорт изделия (ПС)</h5>
            <p class="txt">
              Брошюра, содержащая основные характеристики, срок гарантии,
              перечень сертификатов и порядок утилизации.
            </p>
          </li>
          <li>
            <h5>
              Ведомость комплекта запасных частей, инструмента и принадлежностей
              (ЗИП)
            </h5>
            <p class="txt">
              Включает полные сведения по запасным частям (перечень,
              количество), инструментам, материалам, необходимым на время
              использования.
            </p>
          </li>
          <li>
            <h5>Ведомость эксплуатационных документов (ВЭ)</h5>
            <p class="txt">
              Является обязательным, если на продукцию разработано два и более
              конструкторских документа. Представляет собой перечень с указанием
              обозначения, названия, количества экземпляров, месторасположения.
            </p>
          </li>
        </ul>
      </div>
      <div class="mt">
        <h1>Этапы работ</h1>
        <h3 class="mt30">Мы выделяем несколько этапов, чтобы процесс был прозрачным и понятным для каждой из сторон:</h3>
        <ul class="list">
          <li>
            <h5>Согласование технического задания (ТЗ)</h5>
            <p class="txt">
              На этом этапе мы с вами определяем задачу разработки, состав и структуру проекта, требования к разработке.
            </p>
          </li>
          <li>
            <h5>Разработка и проверка технических материалов</h5>
            <p class="txt">
              Перед отправкой мы проводим внутренний контроль для соответствия всем требованиям организации.
            </p>
          </li>
          <li>
            <h5>Передача результата работ</h5>
            <p class="txt">
              После проведения проверки комплект материалов в оговоренных форматах направляется Вам в электронном виде.
            </p>
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

.txt {
  font-size: 16px;
}
li{
  margin-top: 20px;
}
h3{
  margin-bottom: 10px;
}
h5{
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
.mt30{
  margin-top: 20px;
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
