<template>
  <div class="wrap--tab-container">
    <div class="tab-container">
      <div class="tab--list">
        <div
          class="tab-btn"
          v-for="t in store.state.tabs"
          :key="t"
          :class="{ activeTab: currentTab.title === t.title }"
          @click="currentTab = t"
        >
          {{ t.title }}
        </div>
      </div>
      <div class="wrap--tab--content">
        <div class="title--content">
          <h1>Работаем с любыми видами метала</h1>
          <span>от алюминия и меди до твердых сплавов</span>
        </div>
        <div class="tab--content">
          <div>
            <img
              class="tab--img"
              :src="`/img/${currentTab.url}.png`"
              :alt="`${currentTab.title}`"
            />
          </div>
          <span>О услуге:</span>
          <div class="tab--txt">{{ currentTab.description }}</div>
          <br />
          <modal-form></modal-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import modalForm from "./modalForm.vue";

const store = useStore();

const currentTab = ref(store.state.tabs[0]);
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.wrap--tab-container {
  display: flex;
  @include fluid("height", 1080);
  justify-content: center;
}
.tab-container {
  background-color: #525252;
  display: flex;
  @include fluid("padding", 20);
  @include fluid("gap", 40);
  @include fluid("margin-top", 40);
  @include fluid("width", 1500);
}
.tab--list {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 20);
  position: relative;
  @include fluid("margin-top", 50);
}
.tab-btn {
  text-align: center;
  @include fluid("font-size", 18);
  @include fluid("width", 300);
  color: #ffffff;
  border: #ffffff86 2px solid;
  cursor: pointer;
  transition: all 0.5s ease 0.01s;
}
.activeTab {
  color: #ff954ffd;
  border: #ff954ffd 2px solid;
}
.tab-btn:hover {
  border: #ff954ffd 2px solid;
}
.wrap--tab--content {
  @include fluid("margin-left", 100);
  display: flex;
  color: #fff;
  @include fluid("gap", 10);
  justify-content: center;
  flex-direction: column;
}
.title--content{
  @include fluid("margin-bottom", 30);
}
.tab--content span {
  @include fluid("font-size", 16);
}
.tab--txt {
  @include fluid("margin-top", 20);
  @include fluid("font-size", 18);
  transition: all 0.5s ease 0.01s;
}
@media (min-width: 800px) and (max-width: 1000px) {
  .wrap--tab-container {
    height: 780px;
  }
}
@media (min-width: 200px) and (max-width: 1000px) {
  .wrap--tab-container {
    height: 780px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .tab-container {
    box-shadow: none;
    background-color: unset;
  }
  .tab--list {
    margin-top: 50px;
    padding-right: 10px;
  }
  .tab-btn {
    border: none;
    border-bottom: #696969 1px solid;
    font-size: 12px;
  }
  .tab--txt {
    font-size: 11px;
  }
  .wrap--tab--content {
    gap: 20px;
  }
  .wrap--tab--content h1 {
    font-size: 16px;
  }
  .wrap--tab--content span {
    font-size: 12px;
  }
}
.tab--img {
  @include fluid("width", 924);
  @include fluid("height", 516);
  transition: all 0.5s ease 0.01s;
}
</style>
