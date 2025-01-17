import { 
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createLights() {
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 3);

    const mainLight = new DirectionalLight('white', 2); // (color, intensity)

    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };