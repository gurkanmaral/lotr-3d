/* eslint-disable react/no-unknown-property */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import ringScene from "../assets/3d/ring.glb";
import {a} from '@react-spring/three'
import { CubeTextureLoader, TextureLoader } from "three";
import ringTexture from "../assets/images/magma.jpg";
import * as THREE from 'three';
import { AnaglyphEffect } from 'three/addons/effects/AnaglyphEffect.js';
import magma from "../assets/images/magma.jpg"

const Ring =({isRotating,setIsRotating,...props}) => {
    const {gl,viewport} = useThree();
  const { nodes, materials } = useGLTF(ringScene);

  const cubeTextureLoader = new CubeTextureLoader();
  const environmentMap = cubeTextureLoader.load([
    magma, // Right
    magma, // Left
    magma,
    magma,
    magma,
    magma,
  ]);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0.01);
  const dampingFactor = 0.95;

  const ringMaterial = materials["01_-_Default"];
  ringMaterial.envMap = environmentMap;
  const ringRef = useRef();

  
  useFrame(() => {
    ringRef.current.rotation.y += rotationSpeed.current;
  });


  return (
    <a.group {...props} ref={ringRef} >
      <group position={[-6.782, 2.838, 0]} rotation={[-Math.PI / 2, 0.622, 0]} >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["The_Ring_01_-_Default_0"].geometry}
            material={ringMaterial}
            position={[1.025, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
    
          />
           
        </group>
      </group>
    </a.group>
  );
}
export default Ring
