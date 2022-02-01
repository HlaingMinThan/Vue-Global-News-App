import Vue from "vue";
import Vuex from "vuex";
import axios from "../../helpers/axios";

const apiKey = "099148be22804e849a0c6fe022b7cf5e";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    errorMsg: "No results found. :(",
    newHeadlines: [],
    sources: [],
    visitedRoutes: [],
  },
  mutations: {
    ADD_VISITED_PAGE(state, route) {
      const paths = state.visitedRoutes.map((r) => r.path);
      if (!paths.includes(route.path)) {
        state.visitedRoutes.push(route);
      }
    },
    SET_HEADLINES(state, articles) {
      state.newHeadlines = articles;
    },
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_ERROR_MSG(state, msg) {
      state.errorMsg = msg;
    },
    UPDATE_HEADLINE(state, { oldTitle, newTitle }) {
      const headline = state.newHeadlines.find((h) => h.title === oldTitle);
      headline.title = newTitle;
    },
  },
  getters: {
    getVisitedRoutes(state) {
      return state.visitedRoutes;
    },
    newHeadlines(state) {
      let id = 0;
      // fake id added for detail page.
      return state.newHeadlines.map((article) => ({
        // eslint-disable-next-line no-plusplus
        id: ++id,
        ...article,
      }));
    },
    sources: (state) => state.sources,
    isLoading: (state) => state.isLoading,
    errorMsg: (state) => state.errorMsg,
  },
  actions: {
    async getHeadlines({ commit }) {
      try {
        commit("SET_LOADING", true);
        const res = await axios.get(`/top-headlines?country=us&apiKey=${apiKey}`);
        commit("SET_HEADLINES", res.data.articles);
        commit("SET_LOADING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERROR_MSG", err.message);
      }
    },
    async getSources({ commit }) {
      try {
        commit("SET_LOADING", true);
        const res = await axios.get(`/sources?apiKey=${apiKey}`);
        commit("SET_SOURCES", res.data.sources);
        commit("SET_LOADING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERROR_MSG", err.message);
      }
    },
    async searchHeadlines({ commit }, search) {
      try {
        commit("SET_LOADING", true);
        const res = await axios.get(`/top-headlines?q=${search}&apiKey=${apiKey}`);
        commit("SET_HEADLINES", res.data.articles);
        commit("SET_LOADING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERROR_MSG", err.message);
      }
    },
    async filterBySource({ commit }, filterBy) {
      try {
        commit("SET_LOADING", true);
        const res = await axios.get(`/top-headlines?sources=${filterBy}&apiKey=${apiKey}`);
        commit("SET_HEADLINES", res.data.articles);
        commit("SET_LOADING", false);
      } catch (err) {
        console.log(err);
        commit("SET_ERROR_MSG", err.message);
      }
    },
  },
});
