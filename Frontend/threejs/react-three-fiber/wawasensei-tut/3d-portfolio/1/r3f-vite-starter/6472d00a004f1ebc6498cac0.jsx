/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 public/models/6472d00a004f1ebc6498cac0.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/6472d00a004f1ebc6498cac0.glb')
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/6472d00a004f1ebc6498cac0.glb')
