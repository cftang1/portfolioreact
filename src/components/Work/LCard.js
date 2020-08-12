import React, { useState, useRef, Suspense } from "react";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader,
} from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import card from '../../content/card2.gltf'
// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();

//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   // Rotate mesh every frame, this is outside of React without overhead
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial
//         attach="material"
//         color={hovered ? "hotpink" : "orange"}
//       />
//     </mesh>
//   );
// }

extend({ OrbitControls });

// function Keen() {
//   const { nodes, materials } = useLoader(GLTFLoader, "/card3.glb", draco());
//   console.log(nodes);
//   console.log(materials);
//   return (
//     <group position={[0, 3, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
//       <mesh material={materials.scene} geometry={nodes.Scene} />
//     </group>
//     // null
//   );
// }

function Card() {
  const gltf = useLoader(GLTFLoader, "/card56.gltf");
  const primitive = useRef();
  let num = 0.0;
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    spin: hovered ? (num = 0.0) : (num = 0.01),
  });

  useFrame(
    () => (primitive.current.rotation.x = primitive.current.rotation.y += num)
  );

  return (
    <group>
      <a.primitive
        ref={primitive}
        object={gltf.scene}
        material={gltf.scene}
        scale={props.scale}
        // scale={console.log(props.scale)}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, Math.PI / 1, 0]}
      />
    </group>
  );
}

function Controls() {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => orbitRef.current.update());

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
}

// function Plane() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshPhysicalMaterial attach="material" color={"white"} />
//     </mesh>
//   );
// }

// function Box() {
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const props = useSpring({
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? "lightgreen" : "grey",
//   });

//   return (
//     <a.mesh
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       scale={props.scale}
//     >
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <a.meshPhysicalMaterial attach="material" color={props.color} />
//     </a.mesh>
//   );
// }
function LCard() {
  return (
    <>
      <Canvas>
        <Controls />
        <fog attach="fog" args={["red", 10, 50]} />
        <spotLight position={[0, 2, 20]} penumbra={1} />
        <spotLight position={[0, 2, -20]} penumbra={1} />
        <ambientLight intensity={[0.5]} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        <Suspense fallback={null}>
          {/* <Keen /> */}
          <Card />
        </Suspense>
        {/* <Plane /> */}
        {/* <Box /> */}
        {/* <Card /> */}
      </Canvas>
    </>
  );
}

export default LCard;
