<template>
  <div class="content">
    <h1 class="content__title c">3D модель</h1>
    <div class="content__head c">
      <div class="content__txt">
        <div class="head__txt">
          <p class="txt">
            Если вам требуется 3D модель объектов, специалисты Конструкторского
            бюрот «ИнКАД» разработают трёхмерные модели любого типа и
            предоставят готовые файлы в нужном формате. Мы выполняем 3D модели
            для различных типов производства (ЧПУ, печать, литьё, архитектурные
            макеты) или презентационных целей, соблюдаем дедлайны и получаем
            приятные отзывы от наших клиентов.
          </p>
          <p class="txt-bold bl">
            Мы также оказываем полный комплекс услуг — от эскиза до
            сопровождения производства
          </p>
          <br />
          <modalForm></modalForm>
        </div>
        <div class="content-img">
          <img src="/src/assets/co-eng.jpg" alt="" />
        </div>
      </div>
      <div class="txt mt">
        Процесс создания 3D моделей представляет построение трехмерного
        цифрового облика в электронном виде. 3D модель — промежуточный этап
        между эскизным проектированием и чертежами, который применяется в
        большинстве конструкторских задач. Модель является конечным результатом
        при изготовлении печатью, литьём или на ЧПУ-станке. Для прототипирования
        очень хорошо подходит печать на 3D принтере. Учитывая, что принтеры
        используют разные технологии, мы подготовим для вас необходимые файлы.
        <br />
        <br />
        3D визуализация помогает проверить собираемость, выполнить прочностные
        расчёты и задать параметры. Это дает возможность найти возможные
        недочеты еще на начальном этапе.
        <br />
        <br />
        На этапе визуализации можно оценить общий вид, проанализировать
        составные части оборудования, внести изменения до производства опытного
        образца, что позволяет сэкономить бюджет и сроки при изготовлении с
        помощью прототипов. В серийном производстве это помогает выбрать
        оптимальный вариант, исключить возможные ошибки до этапа производства.
        <br />
        <br />
        Используя трехмерную графику можно спроектировать дизайн предметов
        интерьера и других профессиональных сфер, работать с различными
        проектами.
        <br />
        <br />
        В художественной сфере — для компьютерных игр одна модель людей или
        животных (например, созданная в 3Ds Max) используется в создании
        анимации и множества фигур игрового пространства. Таким образом,
        моделирование помогает оптимизировать финансовые, а также трудозатраты.
        <br />
        <br />
        У нас вы можете сделать заказ на создание трехмерной модели разных типов
        в требуемом вам формате. Для этого оставьте контактные данные для
        обратного звонка или позвоните по телефону.
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
