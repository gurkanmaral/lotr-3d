import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

extend({ OrbitControls });

const SpotLightComponent = () => {
  const spotLightRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    spotLightRef.current.position.x = Math.cos(time) * 2.5;
    spotLightRef.current.position.z = Math.sin(time) * 2.5;
  });


  return (
    <spotLight
      ref={spotLightRef}
      position={[2.5, 5, 2.5]}
      angle={Math.PI / 6}
      penumbra={1}
      castShadow
    />
  );
};

export default SpotLightComponent