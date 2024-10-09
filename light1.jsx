/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./public/A1-A4/A1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useRecoilValue } from 'recoil';
import selectFrameAtom from './src/atoms/selectFrame';
import handleYAxis from './src/utlities/handleYAxis';

export function Light3d1() {

    const gltf = useLoader(GLTFLoader, '/lights/3.5.glb');
    const frame = useRecoilValue(selectFrameAtom)

   

  return (
    <>
      <primitive object={gltf.scene} position={[0.0, 0.015, handleYAxis(frame)]} rotation={[ 0,Math.PI / 2, 0]}/>
    </>
  
  )
}

useGLTF.preload('/lights/3.5.glb')
