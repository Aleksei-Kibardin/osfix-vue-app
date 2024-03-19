<template>
  <div class="content">
    <h1 class="content__title c">Разработка изделий или устройств с нуля</h1>
    <div class="content-midle c">
      <div class="mt">
        <h3>Причиной для разработки нового изделия может служить:</h3>
        <ul class="list">
          <li>
            необходимость решения возникшей у вас задачи, как вашей личной
            задачи, так и задач в рамках бизнеса или производства;
          </li>
          <li>значительная стоимость аналогов на рынке;</li>
          <li>
            ограниченный или недостаточный функционал аналогичных изделий;
          </li>
          <li>
            модернизация оборудования и производственного цикла на вашем
            предприятии;
          </li>
          <li>
            или просто нужно помочь воплотить ваш замысел в сухом языке
            чертежей.
          </li>
        </ul>
      </div>
      <div class="mt">
        <h3>Какими бы ни были эти причины, мы готовы решить вашу задачу!</h3>
        <p class="txt">
          <br>
          Ниже будут описаны стадии разработки нового
          изделия/устройства/станка/агрегата и требования к исходным данным,
          которые нам необходимы для ознакомления с задачей и предварительной
          оценки проекта.
          <br />
          <br />
          Пожалуйста, ознакомьтесь с этими пунктами и отправляйте задачу нам на
          почту
        </p>
      </div>
      <div class="mt">
        <h3>Этапы разработки нового изделия:</h3>
        <ul class="list">
          <li>Разработка и согласование Технического задания (ТЗ)</li>
          <li>Разработка Технического предложения</li>
          <li>Разработка Эскизного проекта</li>
          <li>Техническое проектирование</li>
          <li>Изготовление, настройка и эксплуатация опытного образца</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  color: #fff;
}
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
li{
  margin-top: 20px;
}
h3{
  margin-bottom: 10px;
}
h5{
  margin-bottom: 10px;
}
</style>
