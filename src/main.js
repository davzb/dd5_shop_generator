import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';

import './../node_modules/bulma/css/bulma.css';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        en: {},
    },
})

new Vue ({ i18n, router, store, render: h => h(App) }).$mount('#app');