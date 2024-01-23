/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
const GradientBackground = () => {
  const { size } = useThree();  // Changed from viewport to size for full canvas size
  
  return (
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec2 resolution;

          void main() {
            vec2 uv = gl_FragCoord.xy / resolution;
            gl_FragColor = vec4(mix(vec3(0.10, 0.0, 0.0), vec3(0.0, 0.0, 0.0), length(uv - 0.5) * 2.0), 0.0);
          }
        `}
        uniforms={{
          resolution: { value: new THREE.Vector2(size.width, size.height) }
        }}
        transparent={true}
      />
    </mesh>
  );
};

export default GradientBackground;