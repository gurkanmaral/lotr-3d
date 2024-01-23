/* eslint-disable react/no-unknown-property */

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import eyeScene from "../assets/3d/sauron_eye.glb";
import {a} from '@react-spring/three'
import { CubeTextureLoader, TextureLoader } from "three";
import ringTexture from "../assets/images/magma.jpg";
import * as THREE from 'three';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { extend } from "@react-three/fiber";
import { PointLight } from 'three';

extend({ EffectComposer, RenderPass, UnrealBloomPass });



const Eye =({isRotating,setIsRotating,...props}) => {
    const { scene, gl, camera, size,viewport } = useThree();
  const { nodes, materials } = useGLTF(eyeScene);
  const composer = useRef();
  const eyeRef = useRef();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0.01);
  const dampingFactor = 0.95;

  const bloomParams  = {
    threshold: 0,
    strength: 2.0,
    radius: 1.3,
    exposure: 1
};



  useEffect(() => {
  
    const pointLight = new PointLight(0xff0000, 2, 100);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);
  
    return () => {
      scene.remove(pointLight);
    };
  }, [scene]);


  useEffect(() => {
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.width, size.height),
      bloomParams.strength,
      bloomParams.radius,
      bloomParams.threshold
    );

    composer.current = new EffectComposer(gl);
    composer.current.addPass(renderPass);
    composer.current.addPass(bloomPass);
  }, [scene, camera, gl, size.width, size.height, bloomParams]);

  useFrame(() => {
    if (eyeRef.current) {
      eyeRef.current.rotation.y += 0.00;
    }
  });

  useFrame(() => {
    if (composer.current) {
      composer.current.render();
    }
  }, 1);

  return (
    <a.group {...props} ref={eyeRef}>
      <group position={[-10.596, 226.681, -0.221]} scale={[1.38, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Eye_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Eye_07_-_Default_0"].geometry}
          material={materials["07_-_Default"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tower_02_-_Default_0"].geometry}
        material={materials["02_-_Default"]}
        position={[-10.596, -253.017, -0.221]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
    
 
  );
}
export default Eye
