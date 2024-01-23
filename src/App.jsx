/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import Ring from "./models/Ring"
import Eye from './models/Eye';
import Wraith from './models/Wraith';
import { Box } from '@react-three/drei';
import Orcs from './models/Orcs';


const App = () => {
    const [isRotating, setIsRotating] = useState(false);

    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslanForScreenSize = ()=>{
      let screenScale = null;
      let screenPosition = [1,-6.5,-43];
      let ringRotation = [0.1,4.7,0]
      if(window.innerWidth < 768){
          screenScale = [0,9,0.9,0.9];
      }else{
          screenScale = [0.2,0.2,0.2];
      }
      return [screenScale,screenPosition,ringRotation]
  }

  
  const adjustEyeForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [1,-6.5,-43];
    let ringRotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
        screenScale = [0,9,0.9,0.9];
    }else{
        screenScale = [0.1,0.1,0.1];
    }
    return [screenScale,screenPosition,ringRotation]
}
const adjustWraithForScreenSize = ()=>{
  let screenScale = null;
  let screenPosition = [0,-15.5,-43]
  let ringRotation = [0.1,4.7,0]
  if(window.innerWidth < 768){
      screenScale = [0,9,0.9,0.9];
  }else{
      screenScale = [13,13,13];
  }
  return [screenScale,screenPosition,ringRotation]
}

const [wraithScale,wraithPosition] = adjustWraithForScreenSize();

const [eyeScale,eyePosition] = adjustEyeForScreenSize();


  const [islandScale,islandPosition,ringRotation] = adjustIslanForScreenSize();


  return (
    <div className='w-full border border-black min-h-screen flex flex-col'>
      <div className='w-full h-screen relative '>
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
        <h1 className='text-5xl font-semibold'>LORD OF THE RINGS</h1>
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.2,far:1000}}>
            <Suspense fallback="Loading">
                <directionalLight 
                 position={[1,1,1]}
                 intensity={3}
                />
                <ambientLight 
                intensity={1.5}
                />
                <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
                />
                  <Ring
                    position={islandPosition}
                    scale={islandScale}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                  />
            </Suspense>
        </Canvas>
      </div>
        <div className='w-full h-screen flex bg-black'>
          <div className='w-[50%]'>          
              <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{near:0.2,far:1000}}
            
            >
                <Suspense fallback="Loading">

                    <directionalLight 
                    position={[1,3,1]}
                    intensity={5}
                    color="red"
                    castShadow={true}

                    />
                    <ambientLight 
                    intensity={10}
                    color="#b1e1ff"
                    />
                    <hemisphereLight
                    skyColor="#b1e1ff"
                    groundColor="#000000"
                    intensity={1}
                    />
                      <Eye
                        position={islandPosition}
                        scale={eyeScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                      />
                </Suspense>
            </Canvas>
          </div>
          <div className='w-[50%] items-center justify-center flex bg-black text-white'>
            <h1>asdsad</h1>
          </div>
        </div>
        <div className='w-full h-screen flex '>
            <div className='w-[50%]'>

            </div>
            <div className='w-[50%]'>
 <Canvas className={`w-full h-screen  ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
           
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
            >
              <directionalLight position={[1, 3, 1]} intensity={1}  />
                <ambientLight intensity={1} />
                <pointLight position={[5, 10, 0]} intensity={20} />
                <spotLight
                  position={[10, 0, 0]}
                  angle={0.15}
                  penumbra={1}
                  intensity={1}
                  color="#ff0303"
                />
                <Suspense fallback="Loading">                   
                      <Wraith
                        position={wraithPosition}
                        scale={wraithScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        rotation={ringRotation}
                        setCurrentStage={setCurrentStage}
                      />
                </Suspense>
            </Canvas>
            </div>  
        </div>
        <div className='w-full h-screen '>
          <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.2,
              far: 1000,
            }}>
          <directionalLight position={[0, 1, 1]} intensity={2.5} />
          <ambientLight intensity={3} />
          <pointLight position={[5, 10, 4]} intensity={2} />
          <spotLight
            position={[0, 10, 10]}
            angle={0.35}
            penumbra={1}
            intensity={10}
          />
              <Suspense fallback="Loading">
                <Orcs
                 position={[-0.3, -0.5, 3]}
                 rotation={[12.629,0.0, 0]}
                 scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
          </Canvas>
        </div>
       
    </div>
  )
}

export default App