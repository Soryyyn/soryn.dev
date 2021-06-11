import React from "react";
import * as THREE from "three";
import { Canvas, Vector3 } from "@react-three/fiber";

// components
import Cube from "./cube";

export default function Background() {

    let amountOfCubes: number = 4;
    const cubes: any = [];

    // add cubes with random initial values
    for (let i = 0; i < amountOfCubes; i++) {
        let initScale: number = Math.floor(Math.random() * 2) + 2;
        let initPos: Vector3 = [
            Math.ceil(Math.random() * 8) * (Math.round(Math.random()) ? 1 : -1),
            Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1),
            0
        ];
        let initVerticalSpeed: number = (Math.random() * 0.025) + 0.025;

        cubes.push(
            <Cube
                key={i}
                color="black"
                scale={initScale}
                position={initPos}
                verticalSpeed={initVerticalSpeed}
                xRotation={0.01}
                yRotation={0.01}
            />
        );
    }

    return (
        <Canvas>
            <pointLight
                color="white"
                position={[5, 5, 5]}
                intensity={10}
                decay={5}
                distance={0}
            />
            {cubes}
        </Canvas>
    );

}