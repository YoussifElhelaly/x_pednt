/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React, { Suspense, useEffect, useState } from 'react'
import { MeshReflectorMaterial, OrbitControls, PresentationControls, Stage, useGLTF, useTexture } from '@react-three/drei'
import Carbon from '../Carbon'
import NewModel from '../NewModel'
import { A1 } from '../A1'
import A2 from '../A2'
import A3 from '../A3'
import A4 from '../A4'
import Atest from '../Test'


export default function Model(props) {

  return (
    <PresentationControls speed={1.5} global zoom={5000} polar={[-0.1, Math.PI / 4]}>
      <Stage environment={"apartment"} intensity={1} contactShadow={false} shadowBias={-0.0015}>
      <ambientLight intensity={100}  />
      {/* <OrbitControls/> */}
        <Suspense fallback={null}>
          {/* <Carbon/> */}
          {/* <NewModel/> */}
          <A1/>
          {/* <A2/> */}
          {/* <A3/> */}
          {/* <A4/> */}
          {/* <Atest/> */}
        </Suspense>
      </Stage>
      {/* <mesh rotation={[-Math.PI / 0, 0, 0]}> 
      <planeGeometry args={ [170, 170]} />
        <MeshReflectorMaterial 
        blur={[300, 100]} 
        resolution={2048}
        mixBlur={1}
        mixStrength={40} 
        roughness={1} 
        depthScale={25} 
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="black" 
        metalness={0.5}
        />
      </mesh> */}
    </PresentationControls>
  )
}