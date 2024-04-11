<template>
  <div class="head">
    <div class="current-page">
      <current-page></current-page>
    </div>
    <img
      src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.cgr-international.com/wp-content/uploads/2020/03/CGR_metal-spinning_2.jpg"
      alt=""
    />
  </div>
  <div class="wrap-container">
    <div class="container">
      <h1>Обучение</h1>
      <p>
        Добро пожаловать в наши образовательные программы! Здесь у вас есть
        возможность освоить новую профессию и получить ценный опыт на
        производстве. Наши образовательные программы спроектированы так, чтобы
        предоставить вам конкретные навыки и знания, необходимые для успешного
        начала работы в выбранной области.
      </p>
      <h2>Программы обучения</h2>
      <ul>
        <h3>Штамповка Металла</h3>
        <li>
          Узнайте, как создавать штампы для штамповки металла, калибры,
          приспособления и сопутствующие компоненты.
        </li>
        <li>
          Вы изучите прототипирование и то, что входит в производство
          функционирующей детали.
        </li>
        <li>
          Вы поймете, как работают штамповочные прессы по металлу и что нужно
          для изготовления качественной детали.
        </li>
        <h3>ЧПУ</h3>
        <li>Вы изучите и используйте современные станки с ЧПУ.</li>
        <li>
          Вы будете практиковаться в точном шлифовании и механической обработке.
        </li>
        <li>
          Вы изучите 4-осевую обработку, 3D-обработку, 10-осевую токарную
          обработку, токарную обработку подшпинделем, горизонтальную обработку,
          различия и преимущества каждого типа.
        </li>
        <h3>качество и многое другое</h3>
        <li>
          Используйте проволочную электроэрозионную обработку для изготовления
          компонентов инструментов.
        </li>
        <li>
          Примите участие в различных проверках деталей и научитесь использовать
          прецизионные инструменты контроля.
        </li>
        <li>
          Вы также узнаете о таких методах изготовления, как волоконная лазерная
          резка, сварка и многое другое!
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import currentPage from "./currentPage.vue";
</script>

<style scoped lang="scss">
@import "../fluid.sass";
.head {
  @include fluid("height", 500);
  img {
    width: 94vw;
    height: 100%;
  }
}
.current-page {
  position: absolute;
  z-index: 2;
  @include fluid("top", 450);
  @include fluid("left", 140);
}
.wrap-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 94vw;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 1100px;
  h3 {
    margin-bottom: 10px;
    margin-top: 29px;
  }
  li {
    margin: 8px;
  }
}
@media (min-width: 200px) and (max-width: 600px) {

}
</style>
