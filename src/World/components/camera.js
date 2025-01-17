import { PerspectiveCamera } from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, //fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(0, -10, 10);

    return camera;
}

export { createCamera };