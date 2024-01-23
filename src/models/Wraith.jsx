/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import wraithScene from "../assets/3d/wraith.glb";
import {a} from '@react-spring/three'

import * as THREE from 'three';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { extend } from "@react-three/fiber";
import { PointLight } from 'three';
import { MeshStandardMaterial } from 'three';
import { SpotLight, SpotLightHelper } from "three";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const redMaterial = new MeshStandardMaterial({ color: 0xff0000 });
const grayMaterial = new MeshStandardMaterial({ color: '#4f5250' }); 

const Wraith =({setCurrentStage,isRotating,setIsRotating,...props}) => {
    const { scene, gl, camera, size,viewport } = useThree();

  const { nodes, materials } = useGLTF(wraithScene);

  const wraithRef = useRef();
  const spotlightRef = useRef();
  const spotlightHelperRef = useRef();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0.01);
  const dampingFactor = 0.95;

  useFrame(() => {

      wraithRef.current.rotation.y += 0.0;
    
  });

		
  return (
    <a.group {...props} ref={wraithRef}   
    >
     <group rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
        <group rotation={[Math.PI / 2, 0, 0]}>   
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface291_blinn15_0.geometry}
            material={materials.blinn15}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface291_blinn14_0.geometry}
            material={materials.blinn14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface291_blinn13_0.geometry}
            material={materials.blinn13}
          />        
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface295_blinn28_0.geometry}
            material={materials.blinn28}
            position={[66.492, 99.133, 33.871]}
            rotation={[-0.993, -1.341, -1.687]}
            scale={[1, 0.502, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface297_blinn28_0.geometry}
            material={materials.blinn28}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_Sceneman5defaultMat1_0.geometry}
            material={materials.Sceneman5defaultMat1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn21_0.geometry}
            material={materials.blinn21}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn20_0.geometry}
            material={materials.blinn20}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn22_0.geometry}
            material={materials.blinn22}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn19_0.geometry}
            material={materials.blinn19}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn26_0.geometry}
            material={materials.blinn26}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn25_0.geometry}
            material={materials.blinn25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn24_0.geometry}
            material={materials.blinn24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn23_0.geometry}
            material={materials.blinn23}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn27_0.geometry}
            material={materials.blinn27}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn17_0.geometry}
            material={materials.blinn17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn11_0.geometry}
            material={materials.blinn11}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface299_blinn18_0.geometry}
            material={materials.blinn18}
          />
        </group>
      </group>
    </a.group>
    
 
  );
}
export default Wraith
