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
    // gltf.scene.current.parent.remove(gltf.current);
  }, [gltf , armColor,faceColor]);

  return (
    <>
      {/* <group {...props} dispose={null}>
        <group position={[0, 0.015, 0.013]} rotation={[-0.134, 0, 0]} scale={0.126}>
          <group position={[-0.245, -0.033, 0.483]} rotation={[0.134, 0, 0.105]} scale={0.244}>
            <mesh geometry={nodes['___--__12006'].geometry} material={materials['Default.001']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03}>
              <mesh geometry={nodes['Retopo_??020'].geometry} material={nodes['Retopo_??020'].material} position={[-11.534, -1.722, 0.053]} rotation={[-1.454, 0.74, 1.476]} scale={[53.734, 51.375, 47.261]} />
            </mesh>
            <mesh geometry={nodes['___--__6006'].geometry} material={materials.Default} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes.___1006.geometry} material={materials['材质.020']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes.____1006.geometry} material={materials.Default} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes._____6006.geometry} material={materials['Default.001']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
          </group>
          <group position={[0.245, -0.033, 0.483]} rotation={[0.134, 0, -0.105]} scale={0.244}>
            <mesh geometry={nodes['___--__12007'].geometry} material={materials['Default.001']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03}>
              <mesh geometry={nodes['Retopo_??021'].geometry} material={nodes['Retopo_??021'].material} position={[-11.704, -1.434, 0.13]} rotation={[-1.738, 0.737, 1.666]} scale={[53.734, 51.375, 47.261]} />
            </mesh>
            <mesh geometry={nodes['___--__6007'].geometry} material={materials.Default} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes.___1007.geometry} material={materials['材质.020']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes.____1007.geometry} material={materials.Default} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
            <mesh geometry={nodes._____6007.geometry} material={materials['Default.001']} rotation={[2.407, -Math.PI / 2, 0]} scale={0.03} />
          </group>
          <group position={[0.001, -0.002, 0.424]} rotation={[0, -0.003, 0]} scale={0.803}>
            <mesh geometry={nodes['???-??1001'].geometry} material={materials['材质3.004']} />
            <mesh geometry={nodes['???-??1001_1'].geometry} material={materials['材质.032']} />
          </group>
          <mesh geometry={nodes['????1001'].geometry} material={materials['Level 4_1']} position={[0.557, 0.117, 0.246]} rotation={[-1.796, 0.013, 2.859]} scale={0.648} />
          <mesh geometry={nodes['????1002'].geometry} material={materials['Level 4_1']} position={[-0.557, 0.117, 0.248]} rotation={[1.798, 0.01, -0.318]} scale={0.648} />
          <group position={[0, -0.081, 0.271]} rotation={[Math.PI / 2, 0, 0]} scale={[0.809, 0.551, 0.809]}>
            <mesh geometry={nodes.mesh046.geometry} material={materials['材质3.001']} />
            <mesh geometry={nodes.mesh046_1.geometry} material={materials['材质.028']} />
            <mesh geometry={nodes.mesh046_2.geometry} material={materials['材质.031']} />
          </group>
          <mesh geometry={nodes.Retopo_平面013.geometry} material={materials['材质.003']} position={[-0.304, -0.013, 0.305]} rotation={[-1.567, 0, 0]} scale={7.887}>
            <mesh geometry={nodes.Retopo_平面014.geometry} material={materials['材质.003']} />
          </mesh>
          <mesh geometry={nodes.平面009.geometry} material={materials['材质.017']} position={[0, -0.014, 0.258]} rotation={[-0.052, 0, 0]} scale={7.94} />
          <mesh geometry={nodes.平面013.geometry} material={materials['材质.001']} position={[0, 0, 0.259]} rotation={[0.05, 0, 0]} scale={7.94} />
          <mesh geometry={nodes.球体002.geometry} material={materials['材质.012']} position={[0, -0.005, 0.262]} rotation={[3.134, 0, Math.PI]} scale={8.525} />
        </group>
        <group position={[0, 0.015, 0.013]} rotation={[-0.134, 0, 0]} scale={0.126}>
          <mesh geometry={nodes['Retopo_??001'].geometry} material={materials['default.001']} position={[-0.586, 0.113, 0.134]} rotation={[1.558, -0.012, 1.54]} scale={0.924} />
          <mesh geometry={nodes['Retopo_??019'].geometry} material={materials['default.001']} position={[0.59, 0.113, 0.134]} rotation={[Math.PI / 2, 0, -1.515]} scale={0.924} />
        </group>
        <mesh geometry={nodes.Retopo_平面015.geometry} material={materials['蓝色.002']} position={[0, 0.037, 0.055]} rotation={[1.572, 0, 0]} scale={[0.014, 0.012, 0.014]} />
        <mesh geometry={nodes['Retopo_??022'].geometry} material={materials.螺丝} position={[0.001, 0.037, 0.055]} rotation={[1.572, 0, 0]} scale={[0.073, 0.069, 0.069]} />
      </group> */}
      <primitive object={gltf.scene}/>
    </>
  
  )
}

useGLTF.preload('/A1-A4/A1.glb')
