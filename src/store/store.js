import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentPage: {
        name: "about",
        title: "О КОМПАНИИ",
        submenu: ["О компании", "Руководство", "Лицензии", "принципы работы"],
      },
      currentMenu: {},
    };
  },
  mutations: {
    uploadPage(state, newState) {
      state.currentPage = newState;
    },
    uploadMenu(state, newState) {
        state.currentMenu = newState;
      },
  },
});

export default store;
