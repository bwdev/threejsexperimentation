/// <reference path="../node_modules/@types/physijs/index.d.ts" />

(function () {
    // Physijs.scripts.worker = 'vendor/physijs_worker.js';
    // Physijs.scripts.ammo = 'vendor/ammo.js';

    init();
})();

function init() {
    const container = setupContainer();
    // const scene = new Physijs.Scene()


}

function setupContainer() {
    return document.querySelector('#scene-container');
}