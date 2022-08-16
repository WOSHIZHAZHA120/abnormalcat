import {createPinia} from "pinia";
import {createRouter, createWebHashHistory} from "vue-router";
import Component from "../components/App.vue";
import {createApp} from "vue";
import persist from "pinia-plugin-persist";

export const container = document.createElement('div');
export const instance = createApp(Component);
export const pinia = createPinia();
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Component
        }
    ]
});


export function deploy() {
    pinia.use(persist);
    instance.use(pinia);
    instance.use(router);
    instance.mount(container);
    container.classList.add('h-full');
    document.body.appendChild(container);
}
