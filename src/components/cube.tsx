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

    // reference to mesh elemen
    const cube = useRef<THREE.Mesh>(null!);

    // alter the cube every frame
    useFrame((state: any, delta: any) => {
        cube.current.rotation.x += xRotation;
        cube.current.rotation.y += yRotation;

        cube.current.position.y += verticalSpeed;

        // if the cube goes offscreen
        // then move it back down with a random x position
        if (cube.current.position.y >= 8) {
            cube.current.position.y = -8;
            cube.current.position.x = Math.ceil(Math.random() * 8) * (Math.round(Math.random()) ? 1 : -1);
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