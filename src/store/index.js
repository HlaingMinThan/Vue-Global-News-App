import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visitedRoutes: [],
  },
  mutations: {
    ADD_VISITED_PAGE(state, route) {
      const paths = state.visitedRoutes.map((r) => r.path);
      if (!paths.includes(route.path)) {
        state.visitedRoutes.push(route);
      }
    },
  },
  getters: {
    getVisitedRoutes(state) {
      return state.visitedRoutes;
    },
  },
  actions: {},
  modules: {},
});
