<template>
  <div class="copy-btn" @click="openModal()">Связаться</div>
  <div class="backdrop" @click="closeModal" v-if="active === true"></div>
  <div class="modal-window" v-if="active === true">
    <form
      class="obratnuj-zvonok"
      @submit.prevent="submitForm"
      v-if="!formSubmitted"
    >
      <div class="modal-title">
        <h1>Обратный звонок</h1>
        <p>Заполните поля, и мы вам перезвоним</p>
      </div>
      <input type="hidden" name="form-name" value="name_of_my_form" />

      <div class="form-zvonok">
        <div>
          <label>Имя <span>*</span></label>
          <input v-model="formData.name" type="text" name="name" required />
        </div>
        <div>
          <label>Почта <span>*</span></label>
          <input v-model="formData.email" type="text" name="email" required />
        </div>
        <div>
          <label>Номер телефона (с кодом) <span>*</span></label>
          <input v-model="formData.number" type="text" name="number" required />
        </div>
        <div>
          <label>Сообщение</label>
          <input v-model="formData.question" type="text" name="question" />
        </div>
        <button @click="post()" class="bot-send-mail" type="submit">Послать заявку</button>
      </div>
    </form>
    <div v-else>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { submitForm } from "../services/form.js";


const active = ref(false);
const formSubmitted = ref(false);
const message = ref("");
const formData = reactive({
  name: "",
  number: "",
  email: "",
  question: "",
});

watch(formData, () => {
  formData.number = formData.number.replace(/[^\d+()]/g, "");
});

const openModal = () => {
  active.value = true;
  document.body.classList.add("modal-open");
};

const closeModal = (event) => {
  event.stopPropagation();
  document.body.classList.remove("modal-open");
  active.value = false;
};

const post = async () => {
  await submitForm(formData, formSubmitted, message);
};

// const submitForm = async () => {
//   try {
//     const response = await fetch("/mail.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData.value), // Преобразуем данные формы в JSON и отправляем на сервер
//     });

//     // Устанавливаем formSubmitted в true, чтобы показать сообщение об успешной отправке
//     formSubmitted.value = true;

//     // Проверяем успешность запроса
//     if (!response.ok) {
//       message.value = "Ошибка при отправке формы";
//       throw new Error("Ошибка при отправке формы, попробуйте позже");
//     } else {
//       message.value = "Заявка успешно отправлена!";
//     }
//     console.log(response);
//     setTimeout(() => {
//       formSubmitted.value = false;
//     }, 4000);
//   } catch (error) {
//     console.error(error);
//     // Обработка ошибки отправки формы
//   }
// };
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
  background-color: #eeeeee;
  padding: 30px;
  z-index: 999;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.3);
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
  
  font-weight: 700;
  background-color: #f89537;
  cursor: pointer;
  border: 3px #ffd50034 solid;
  
}
.form-zvonok .bot-send-mail:hover {
  color: #009b97;
  background-color: #fff;
}
.copy-btn {
  text-align: center;
  background: #f89537;
  color: #fff;
  font-weight: 500;
  @include fluid("width", 180);
  @include fluid("padding", 10);
  cursor: pointer;
  transition: all 0.5s ease 0s;
}
.copy-btn:hover {
  background: #ff7b00;
}
@media (min-width: 200px) and (max-width: 500px) {
  .modal-window {
    width: 230px;
    padding: 5px;
  }
  .modal-title {
    font-size: 8px;
  }
  .form-zvonok {
    font-size: 10px;
  }
  .bot-send-mail {
    font-size: 10px;
    padding: 3px !important;
  }
  .form-zvonok div {
    padding: 10px px;
  }
  .form-zvonok input {
    padding: 10px;
    margin-top: 10px;
  }
  .copy-btn {
    width: 100px;
    padding: 3px;
  }
}
</style>
