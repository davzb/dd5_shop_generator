import Vue from "vue";
import Vuex from "vuex";
import yamljs from "yamljs";
import $ from "jquery";

Vue.use(Vuex);

let htmlLang = $("html").attr("lang");
let langExist = htmlLang > -1;

// Default language if no language in the HTML markup tag
if (!langExist) {
    htmlLang = "en";
}

// Load our yml file
let staticData = yamljs.load(
    "./public/i18n/" +
    htmlLang +
    ".yml"
);

export default new Vuex.Store({
    state: {
      staticData: staticData
    },
    mutations: {},
    actions: {}
  });