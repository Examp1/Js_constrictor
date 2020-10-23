import {model} from './model'; 
import {Site} from './classes/site';
import { Sidebar } from './classes/sidebar';
import { App } from './classes/app';
// css
import './style/main.css';

const site = new Site('#site');

site.render(model);

const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
};

new Sidebar('#panel', updateCallback);

// TODO app fix
// new App(model)