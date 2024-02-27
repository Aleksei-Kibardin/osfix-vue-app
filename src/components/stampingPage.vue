<template>
  <div class="backdrop" @click="closeModal" v-if="active === true"></div>
  <div class="modal-window" v-if="active === true">
    <div class="modal-title">
      <h1>Обратный звонок</h1>
      <p>Заполните поля, и мы вам перезвоним</p>
    </div>
    <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </div>
  <div class="head">
    <div class="head-title">
      <div class="line"></div>
      <h1>ХОЛОДНАЯ ШТАМПОВКА</h1>
      <p>
        Холодная штамповка металла — это современный метод обработки давлением.
        Благодаря данной технологии удается получить металлические изделия
        разнообразных форм и габаритов. Такие заготовки отличаются
        геометрической точностью, высоким качеством поверхности. Благодаря этому
        они не нуждаются в дополнительной обработке.
      </p>
      <div class="copy-btn" @click="openModal()">Связаться</div>
    </div>
  </div>
  <div class="content">
    <div class="desc-wrap">
      <div class="desc right first">
        <div class="desc-title">
          <div class="circle"></div>
          Особенности технологии холодной штамповки металла
        </div>
        <div class="desc-txt">
          Это холодный способ обработки листового или сортового металла, который
          осуществляется без нагрева материала, отсюда и название. Именно это и
          является его основной особенностью, которая отличает его от горячего
          метода. Изготовление деталей расчленяется на операции и переходы,
          выполняемые в специальных штампах. Холодное штампование сопровождается
          упрочнением. Иными словами, увеличением прочности обрабатываемого
          материала и уменьшения его пластичности. Благодаря этому при
          дальнейших операциях снижает риск деформации металла. Чтобы снизить
          вредное влияние упрочнения, используется межоперационная термическая
          обработка, которая называется рекристаллизационным отжигом.
        </div>
      </div>
      <div class="desc midle">
        <div class="desc-title">
          <div class="circle"></div>
          Преимущества технологии
        </div>
        <div class="desc-txt">
          Этот штамповочный метод обладает несколькими преимуществами:
          <ul>
            <li>
              Универсальность. Благодаря ему металл может получить любую форму,
              что позволяет изготавливать детали различной геометрии и
              габаритов, разного назначения. Они не нуждаются в дальнейшей
              обработке, сразу готовы к использованию.
            </li>
            <li>
              Высокая точность. Если сравнивать с ковкой, у холодной штамповки
              она выше.
            </li>
            <li>
              Возможность оптимизации производственных процессов. Высокая
              производительность обеспечивается благодаря роторно-конвейерным
              линиям. Это позволяет выпускать изделия в большом количестве, что
              является очевидным достоинством.
            </li>
          </ul>
        </div>
      </div>
      <div class="desc right last">
        <div class="desc-title">
          <div class="circle"></div>
          Виды холодной штамповки
        </div>
        <div class="desc-txt">
          За несколько веков появился целый ряд методов данной технологии. До
          современного производства дошли те, которые смогли обеспечить высокую
          скорость выполнения работ, точность, качество, безопасность рабочего
          процесса. Существуют следующие виды в зависимости от типа
          обрабатываемых полуфабрикатов:
          <ul>
            <li>
              Листовой тип. Формоизменяющая и разделительная, в процессе которой
              излишки материала отсекаются. Как правило, используется при
              массовом производстве. Готовая деталь формируется при помощи
              специализированного оборудования.
            </li>
            <li>
              Объемный тип. Штампы для поэтапного приближения к окончательной
              форме. Суть заключается в том, что за счет пластической деформации
              сразу по 3-м плоскостям из простых заготовок делают более сложные.
            </li>
          </ul>
          По принципу проведения работ ХШ подразделяется на следующие виды:
          выдавливание, высадка, объемная формовка. В первом случае металл
          выдавливается из матрицы. Данный метод производства элементов их
          хромистой стали в машиностроении (для гильз, маховиков). Высадка
          подразумевает обработку с использованием неоднократных ударных усилий
          (11 000 ударов/мин). На металл воздействуют так, чтобы он уменьшался в
          длину, увеличивался при этом в ширину. Данный метод используют для
          производства метизов, заклепок, винтов. Так как металл упрочняется,
          необходим неоднократный подход с промежуточными отжигами. Объемная
          формовка подразумевает изменение конфигураций с использованием
          обжимающих воздействий. Если штамп открытый, излишки металла вытекают.
          Закрытые формовки подразумевают безотходное производство.
          Предварительно заготовкам придают необходимую форму вырубкой. Такую
          технологию обычно применяют для высокоточных деталей небольшого
          размера.
        </div>
      </div>
    </div>
    <div class="wrap-process">
      <h1>Этапы работы</h1>
      <div class="process">
        <div class="grid-process1">
          <h2>Коммерческое обоснование</h2>
          <p>
            На основании Ваших требований к продукту, мы выработаем оптимальный
            алгоритм работы. На его основании определим затраты на материалы,
            производство и упаковку продукции. После чего мы составим
            коммерческое предложение с подробным разъяснением всего
            технологического процесса и сроков производства.
          </p>
        </div>
        <div class="midle-line">
          <div class="line-item">
            <p>1</p>
          </div>
          <div class="line-item">
            <p>2</p>
          </div>
          <div class="line-item">
            <p>3</p>
          </div>
          <div class="line-item">
            <p>4</p>
          </div>
        </div>
        <div class="grid-process2">
          <h2>Старт</h2>
          <p>
            После заключения договора мы приступаем к проектированию оснастки,
            согласовываем сроки поставки сырья, упаковки и комплектующих с
            субподрядчиками. От сложности изделия и процесса его производства
            зависят сроки проектирования, изготовления оснастки, и
            подготовительных работ. Обычно полный процесс производства от
            чертежа до упаковки занимает от одного до трёх месяцев.
          </p>
        </div>
        <div class="grid-process3">
          <h2>Процесс работы</h2>
          <p>
            После создания оснастки, и утверждения опытного образца мы
            приступаем к работе. Средний срок производства установочной партии –
            две недели. Документальное оформление не займет много времени, в
            комплекте с документами мы можем вложить сертификаты на
            использованные материалы и другие необходимые справки и лицензии.
          </p>
        </div>
        <div class="grid-process4">
          <h2>Поставки крупносерийных партий</h2>
          <p>
            Начиная с этого этапа Вы просто заказываете очередную партию товаров
            по мере необходимости. По согласованию с Вами мы можем формировать
            складской запас, и отгружать день-в-день, либо же производить
            продукцию по мере поступления заказов на неё. Все вопросы по
            поддержанию и обновлению оснастки, заказу упаковки, соответствию
            маркировок мы берём на себя.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(false);

const openModal = () => {
  active.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = (event) => {
  event.stopPropagation();
  document.body.classList.remove("modal-open");
  active.value = false;
};
</script>

<style lang="scss">
@import "../fluid.sass";
.head {
  width: 100vw;
  height: 48vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/Stamping-header.jpg);
  background-size: cover;
}
.head-title {
  display: flex;
  flex-direction: column;
  position: absolute;
  @include fluid("gap", 30);
  @include fluid("width", 660);
  @include fluid("height", 540);
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
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}
.modal-open {
  overflow: hidden;
}
.modal-window {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #242424;
  width: 20vw;
  height: 30vw;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
}
.desc-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @include fluid("gap", 50);
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
}
.desc-title {
  display: flex;
  align-items: center;
  @include fluid("gap", 10);
  @include fluid("font-size", 23);
  font-weight: bold;
}
.desc {
  flex-direction: column;
  display: flex;
  color: #fff;
  @include fluid("gap", 25);
  @include fluid("font-size", 18);
}
.desc-txt {
  width: 60%;
}
.first {
  grid-area: a;
}
.midle {
  grid-area: b;
}
.last {
  grid-area: c;
}

.circle {
  @include fluid("width", 20);
  @include fluid("height", 20);
  background: #ffd400;
  border-radius: 50%;
}
.wrap-process {
  background-color: #060606;
  color: #fff;
  @include fluid("padding-top", 50);
  @include fluid("padding-bottom", 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap-process h1 {
  @include fluid("padding-bottom", 50);
}
.process {
  width: 60%;
  height: 40vw;
  display: grid;
  @include fluid("font-size", 16);
  grid-template-areas:
    "a a a m . . ."
    ". . . m b b b"
    "c c c m . . ."
    ". . . m d d d";
}
.midle-line {
  display: grid;
  align-self: stretch;
  grid-area: m;
  position: relative;
  @include fluid("margin-right", 20);
  @include fluid(" margin-left", 20);
}
.midle-line::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  background-color: white;
  @include fluid("width", 2);
  z-index: 1;
}
.grid-process1 {
  grid-area: a;
}
.grid-process2 {
  grid-area: b;
}
.grid-process3 {
  grid-area: c;
}
.grid-process4 {
  grid-area: d;
}
.line-item p {
  text-align: center;
  color: #000;
  background-color: #fff;
  @include fluid("width", 40);
  @include fluid("height", 40);
  @include fluid("font-size", 25);
  border-radius: 50%;
}
.line-item {
  z-index: 3;
}
.obratnuj-zvonok {
  width: 100%;
  max-width: 350px;
}
.form-zvonok {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  box-sizing: border-box;
}
.form-zvonok div {
  padding: 15px 0;
}
.bot-send-mail {
  box-sizing: border-box;
  width: 100%;
}
.form-zvonok label,
.form-zvonok input {
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.form-zvonok label {
  margin-bottom: 5px;
  font-weight: bold;
}
.form-zvonok input {
  padding: 10px 15px;
  margin-top: 10px;
}
.form-zvonok label span {
  color: red;
}
.form-zvonok .bot-send-mail {
  padding: 15px;
  margin-top: 10px;
  background: none;
  border: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  background-color: #009b97;
  cursor: pointer;
  border: 3px #009b97 solid;
  border-radius: 5px;
}
.form-zvonok .bot-send-mail:hover {
  color: #009b97;
  background-color: #fff;
}
</style>
