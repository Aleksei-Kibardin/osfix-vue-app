<template>
  <div class="wrap--tab-container">
    <div class="tab-container">
      <div class="tab--title">УСЛУГИ:</div>
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
        <h1>Работаем с любыми видами метала</h1>
        <span>от алюминия и меди до твердых сплавов</span>
        <div class="tab--content">
          <div>
            <img
              class="tab--img"
              :src="`${currentTab.url}`"
              :alt="`${currentTab.title}`"
            />
          </div>
          <span>О услуге:</span>
          <div class="tab--txt">{{ currentTab.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentTab = ref(store.state.tabs[0]);

const activeBtn = (c, b) => {};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.wrap--tab-container {
  display: flex;
  @include fluid("height", 980);
  justify-content: center;
  width: 100vw;
}
.tab-container {
  display: flex;
  @include fluid("gap", 40);
  @include fluid("margin-top", 40);
  @include fluid("width", 1500);
}
.line {
  @include fluid("margin-top", 50);
  align-self: center;
  @include fluid("width", 1500);
  height: 0;
  border: #fff 1px solid;
}
.tab--title {
  position: absolute;
  color: #696969;
  @include fluid("font-size", 20);
}
.tab--list {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 20);
  position: relative;
  @include fluid("margin-top", 100);
}
.tab-btn {
  text-align: center;
  @include fluid("font-size", 18);
  @include fluid("width", 300);
  @include fluid("border-radius", 20);
  color: #717171;
  border: #ffffff46 1px solid;
  transition: all 0.5s ease 0.01s;
}
.activeTab {
  color: #fff;
}
.tab-btn:hover {
  border: #fffffffd 1px solid;
}
.wrap--tab--content {
  @include fluid("margin-top", 100);
  @include fluid("margin-left", 100);
  display: flex;
  @include fluid("gap", 40);
  justify-content: center;
  flex-direction: column;
}
.tab--content span {
  @include fluid("margin-top", 15);
  @include fluid("font-size", 16);
}
.tab--txt {
  @include fluid("margin-top", 20);
  transition: all 0.5s ease 0.01s;
}
.tab--img {
  @include fluid("width", 1024);
  @include fluid("height", 616);
  @include fluid("border-radius", 10);
  transition: all 0.5s ease 0.01s;
}
</style>
