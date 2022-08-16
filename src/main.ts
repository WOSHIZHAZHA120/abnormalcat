import "./styles/tailwindcss.scss";
import {deploy} from "./core/client";

window.addEventListener('load', () => {
    deploy();
});
