/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import scene from "../assets/3d/orcs.glb";
const Orcs = ({...props}) => {
    const { nodes, materials } = useGLTF(scene);
    const group = useRef();
    return (
     <group {...props} dispose={null}  ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.048}>
        <group position={[-77.584, -73.158, -3.134]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Skin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Weapons}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.MergeddefaultMat2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.MergeddefaultMat23}
          />
         
        </group>
      </group>
    </group>
  )
}

export default Orcs