<template>
  <div class="content">
    <h1 class="content__title c">Промышленный дизайн</h1>
    <div class="content__head c">
      <div class="content__txt">
        <div class="head__txt">
          <p class="txt">
            Требуется модернизация техники или нужно создать новое устройство от
            идеи до запуска в производство? Всё это возможно в промышленном
            дизайне.
          </p>
          <p class="txt-bold bl">
            Конструкторское бюро «Соржанского завода» поможет найти баланс между
            красотой и удобством применения, технологичностью материалов и
            соответствием производственным возможностям.
          </p>
          <br />
          <modalForm></modalForm>
        </div>
        <div class="content-img">
          <img src="/src/assets/co-eng.jpg" alt="" />
        </div>
      </div>
      <div class="txt-bold mt">
        Наши дизайнеры подходят к задаче не как подбору разных красивых
        картинок, не имеющих связи с реальностью. Благодаря опыту в области
        машиностроения, в центре нашего внимания — функционал и
        работоспособность всех систем. Грамотно проведённый промдизайн может и
        должен решать не только визуальные, но и технические вопросы.
        <br />
        <br />
        В конструкторской компании «Соржанский завод» вы можете заказать услугу
        проектирования изделия в области машиностроения любой сложности и этапа:
        от опытного образца до серийного производства.
      </div>
    </div>
    <div class="content-midle c">
      <div class="mt">
        <h3>
          Промышленный дизайн — процесс поиска оптимальных решений, который
          учитывает самые разные аспекты:
        </h3>
        <ul class="list">
          <li>новизна;</li>
          <li>сфера и особенности применения;</li>
          <li>внешний вид и функционал;</li>
          <li>технологии в зависимости от тиража и пожеланий;</li>
          <li>функциональность и эргономические свойства;</li>
          <li>применяемое сырьё;</li>
          <li>хранение и транспортабельность;</li>
          <li>безопасность;</li>
          <li>экономичность и экологичность.</li>
        </ul>
      </div>
      <div class="mt">
        <h3>3D-моделирование</h3>
        <p class="txt">
          Дизайнер выполняет моделирование и направляет электронный файл с
          3D-моделью, чтобы продемонстрировать и согласовать результата. В
          модели отображаются текстуры, цвета, графика, формы. Модель можно
          построить в одной или нескольких программах. Например, в CAD
          (SolidWorks, Компас и т.п.), либо в дизайнерском ПО (3D-Max и т.п.).
        </p>
      </div>
      <div class="mt">
        <h3>Дальнейшие стадии работы:</h3>
        <ul class="list">
          <li>
            Создание 3Д-моделей каждой детали в CAD-программе и сборка общей
            модели с деревом построений
          </li>
          <li>Конструкторская работа с документацией</li>
          <li>Сопровождение процесса прототипирования (опытного образца)</li>
          <li>Серийное производство</li>
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 50px;
}
h3{
  margin-bottom: 10px;
}
h5{
  margin-bottom: 10px;
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
