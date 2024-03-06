<template>
  <div class="copy-btn" @click="openModal()">Связаться</div>
  <div class="backdrop" @click="closeModal" v-if="active === true"></div>
  <div class="modal-window" v-if="active === true">
    <div class="modal-title">
      <h1>Обратный звонок</h1>
      <p>Заполните поля, и мы вам перезвоним</p>
    </div>
    <form
      class="obratnuj-zvonok"
      name="contact"
      action="mail.php"
      method="POST"
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="name_of_my_form" />

      <div class="form-zvonok">
        <div>
          <label>Имя <span>*</span></label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Почта <span>*</span></label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label>Номер телефона (с кодом) <span>*</span></label>
          <input type="text" name="number" required />
        </div>
        <div>
          <label>Сообщение</label>
          <input type="text" name="question" />
        </div>
        <button class="bot-send-mail" type="submit">Послать заявку</button>
      </div>
    </form>
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
  background-color: #ffde3b;
  cursor: pointer;
  border: 3px #ffd50034 solid;
  border-radius: 5px;
}
.form-zvonok .bot-send-mail:hover {
  color: #009b97;
  background-color: #fff;
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
</style>
