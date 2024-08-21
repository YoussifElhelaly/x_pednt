/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./public/A1-A4/A4.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function A4(props) {
  const { nodes, materials } = useGLTF('/A1-A4/A4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.平面018.geometry} material={materials.镜片玻璃} position={[0, -0.019, 0.041]} rotation={[0, -1.57, 0]} scale={1.076} />
      <mesh geometry={nodes.平面017.geometry} material={materials['材质.034']} position={[0, -0.019, 0.041]} rotation={[0, -1.57, 0]} scale={1.076} />
      <mesh geometry={nodes.平面015.geometry} material={materials['金属.002']} position={[0, 0.013, 0.074]} rotation={[Math.PI / 2, 0, -0.001]} scale={1.076} />
      <mesh geometry={nodes['Retopo_??018'].geometry} material={materials['default.009']} position={[-0.08, 0.026, 0.009]} rotation={[1.555, 0.018, 1.468]} scale={0.078} />
      <group position={[0, 0, 0.12]} scale={0.073}>
        <mesh geometry={nodes.平面001_1.geometry} material={materials['金属.002']} />
        <mesh geometry={nodes.平面001_2.geometry} material={materials['材质.034']} />
      </group>
      <mesh geometry={nodes['Retopo_??001'].geometry} material={materials['default.009']} position={[0.08, 0.026, 0.014]} rotation={[1.582, -0.016, -1.586]} scale={0.078} />
    </group>
  )
}

useGLTF.preload('/A1-A4/A4.glb')
