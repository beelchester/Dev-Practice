import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

export function Avatar(props) {

    const {animation} = props

    const {headFollow, cursorFollow} = useControls({
        headFollow: false,
        cursorFollow: false
    })

    const group = useRef()
  const { nodes, materials } = useGLTF('models/6472d00a004f1ebc6498cac0.glb')

    // animations
    const {animations:typingAnimation} = useFBX('animations/Typing.fbx')
    const {animations:fallingAnimation} = useFBX('animations/Falling Idle.fbx')
    const {animations:standingAnimation} = useFBX('animations/Neutral Idle.fbx')

    typingAnimation[0].name = "Typing"
    fallingAnimation[0].name = "Falling"
    standingAnimation[0].name = "Standing"

    // actions
    const {actions} = useAnimations([typingAnimation[0],fallingAnimation[0],standingAnimation[0]
    ],group)

    console.log(animation)

    useFrame((state)=>{
        if(headFollow){
        group.current.getObjectByName("Head").lookAt(state.camera.position)
        }
        if(cursorFollow){
        group.current.getObjectByName("Spine2").lookAt(state.mouse.x,state.mouse.y,1)
        }
    })

    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play()
        return () => {
            actions[animation].reset().fadeOut(0.5)
        }
    }, [animation])

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
</group>
  )
}

useGLTF.preload('models/6472d00a004f1ebc6498cac0.glb')

