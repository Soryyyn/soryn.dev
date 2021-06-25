import React from "react";
import * as THREE from "three";
import { Canvas, Vector3 } from "@react-three/fiber";

// components
import Cube from "./cube";

export default function Background() {
    const camera = new THREE.OrthographicCamera(innerWidth / -2, innerWidth / 2, innerHeight / 2, innerHeight / -2, 1, 100);

    let amountOfCubes: number = 4;
    const cubes: any = [];

    // add cubes with random initial values
    for (let i = 0; i < amountOfCubes; i++) {
        const initScale: number = Math.floor(Math.random() * 3);
        const initPos: Vector3 = [
            (Math.floor(Math.random() * window.innerWidth) / 150) * (Math.round(Math.random()) ? 1 : -1),
            (Math.floor(Math.random() * window.innerHeight) / 150) * (Math.round(Math.random()) ? 1 : -1),
            0
        ];
        const initVerticalSpeed: number = (Math.random() * 0.01) + 0.025;
        const randRotation = [
            Math.random() * 0.02,
            Math.random() * 0.02
        ];

        cubes.push(
            <Cube
                key={i}
                color="blue"
                scale={initScale}
                position={initPos}
                verticalSpeed={initVerticalSpeed}
                xRotation={randRotation[0]}
                yRotation={randRotation[1]}
            />
        );
    }

    return (
        <Canvas>
            <camera>
                <ambientLight />
                <pointLight
                    color="white"
                    position={[5, 5, 5]}
                    intensity={10}
                    decay={5}
                    distance={0}
                />
                {cubes}
            </camera>
        </Canvas>
    );

}