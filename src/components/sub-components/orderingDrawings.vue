<template>
  <div class="content">
    <h1 class="content__title c">Чертежи на заказ</h1>
    <div class="content__head c">
      <div class="content__txt">
        <div class="head__txt">
          <p class="txt">
            У нас Вы можете заказать конструкторские чертежи на детали, узлы
            механизмов, устройства и т.п.
            <br />
            Мы готовы разработать для Вас машиностроительные чертежи любой
            сложности для производства нового уникального изделия или уже
            имеющегося у Вас, а также для других целей.
          </p>
          <p class="txt-bold bl">
            Чертежи оформляем по нормам Единой системы конструкторской
            документации (ЕСКД) согласно ГОСТ. Все чертежные материалы проходят
            технический и нормативный контроль.
          </p>
          <br />
          <modalForm></modalForm>
        </div>
        <div class="content-img">
          <img src="/src/assets/co-eng.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="content-midle c">
      <h1>Причинами для заказа чертежей чаще всего служат:</h1>
      <div class="mt">
        <ul class="list">
          <li>
            <h5>Необходимость изготовить деталь по образцу</h5>
            <p class="txt">
              При наличии изделия, устройства мы готовы создать комплект
              графических и текстовых материалов, по которым возможно
              изготовление, сертификация или решение др. задач.
            </p>
          </li>
          <li>
            <h5>Необходимость изготовить новую деталь</h5>
            <p class="txt">
              Для реализации данного задания потребуется информация об объекте
              проектирования, эскизы с предполагаемыми размерами, сведения об
              условиях эксплуатации и рабочих режимах. Чаще всего работы данного
              типа разрабатываются в рамках направления «разработка изделий».
            </p>
          </li>
          <li>
            <h5>Необходимость выполнить оцифровку</h5>
            <p class="txt">
              Позволяет не только сохранить чертежи, но и дает возможность
              работать с ними в дальнейшем. Работа строится следующим образом:
              <br />
              1. Сначала на основе сканированных или отрисованных чертежей
              строятся 3d-модели объектов.
              <br />
              Перевести технические материалы в электронный вид поможет такой
              процесс, как векторизация или оцифровка. Также в рамках такой
              задачи можно получить данные в редактируемой версии. Для этого
              заранее сообщите какие требования к оформлению и содержанию хотите
              учесть, и мы с удовольствием поможем.
            </p>
          </li>
        </ul>
      </div>
      <div class="mt">
        <h3>Для обеспечения качества мы придерживаемся следующего порядка выполнения работы:</h3>
        <ul class="list">
          <li>Построение 3d-модели;</li>
          <li>
            Построение чертежа;
          </li>
          <li>Проверка на соответствие ГОСТам (нормоконтроль);</li>
          <li>Сдача проекта заказчику. На данном этапе мы быстро уточняем все возникающие вопросы, при необходимости выполняем доработки в согласованные сроки.</li>
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
li{
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
    box-shadow: 0 0 8px rgb(0, 0, 0);
  }
}
h3{
  margin-bottom: 10px;
}
h5{
  margin-bottom: 10px;
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
