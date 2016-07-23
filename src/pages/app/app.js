import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../index/index.vue';
Vue.use(VueRouter);


var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/': {
        component: Index
    }
});

router.start(App, '#app');
