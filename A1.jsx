/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./public/A1-A4/A1.glb 
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { useRecoilState } from 'recoil';
import armColorAtom from './src/atoms/armColor';
import faceColorAtom from './src/atoms/faceColor';

export function A1(props) {
  // const { nodes, materials } = useGLTF('/A1-A4/A1.glb')
  const [armColor , setArmColor] = useRecoilState(armColorAtom)
  const [faceColor , setFaceColor] = useRecoilState(faceColorAtom)

  const gltf = useLoader(GLTFLoader, '/A1-A4/A1.glb');

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.name == "???-??1001" && child.isMesh) {
        child.material.color = new THREE.Color(armColor); // Change color to red
        child.material.needsUpdate = true;
      }
      if (child.name == "mesh046" && child.isMesh) {
        child.material.color = new THREE.Color(faceColor); // Change color to red
        child.material.needsUpdate = true;
      }
    });
  }, [gltf , armColor,faceColor]);

  return (
    <>
      <primitive object={gltf.scene}/>
    </>
  
  )
}

useGLTF.preload('/A1-A4/A1.glb')
