/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./public/A1-A4/A2.glb 
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useLoader } from '@react-three/fiber'
import faceColorAtom from './src/atoms/faceColor'
import armColorAtom from './src/atoms/armColor'
import { useRecoilState } from 'recoil'
import * as THREE from 'three';


export default function A2(props) {
  // const { nodes, materials } = useGLTF('/A1-A4/A2.glb')
  const [armColor , setArmColor] = useRecoilState(armColorAtom)
  const [faceColor , setFaceColor] = useRecoilState(faceColorAtom)
  const gltf = useLoader(GLTFLoader, '/A1-A4/A2.glb');

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.name == "平面003" && child.isMesh) {
        child.material.color = new THREE.Color(armColor); // Change color to red
        child.material.needsUpdate = true;
      }
      if (child.name == "平面011" && child.isMesh) {
        child.material.color = new THREE.Color(faceColor); // Change color to red
        child.material.needsUpdate = true;
      }
    });
    // gltf.scene.current.parent.remove(gltf.current);
  }, [gltf , armColor,faceColor]);

  return (
    <primitive object={gltf.scene}/>
  )
}

useGLTF.preload('/A1-A4/A2.glb')
