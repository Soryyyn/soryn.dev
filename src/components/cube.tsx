import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, Vector3 } from "@react-three/fiber";


export default function Cube({ color, scale, position, verticalSpeed, xRotation, yRotation }: {
    color: string,
    scale: number,
    position: Vector3,
    verticalSpeed: number,
    xRotation: number,
    yRotation: number
}) {

    // reference to mesh element
    const cube = useRef<THREE.Mesh>(null!);

    // alter the cube every frame
    useFrame(() => {
        cube.current.rotation.x += xRotation;
        cube.current.rotation.y += yRotation;

        cube.current.position.y += verticalSpeed;

        // if the cube goes offscreen
        // then move it back down with a random x position
        if (cube.current.position.y >= 5) {
            cube.current.position.y = -5;
            cube.current.position.x = (Math.floor(Math.random() * window.innerWidth) / 150) * (Math.round(Math.random()) ? 1 : -1);
        }
    });

    return (
        <mesh
            ref={cube}
            position={position}
            scale={scale}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}