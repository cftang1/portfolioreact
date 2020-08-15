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

extend({ OrbitControls });

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

function LCard() {
  return (
    <>
      <Canvas>
        <Controls />
        <fog attach="fog" args={["red", 10, 50]} />
        <spotLight position={[0, 2, 20]} penumbra={1} />
        <spotLight position={[0, 2, -20]} penumbra={1} />
        <ambientLight intensity={[0.5]} />
        <Suspense fallback={null}>
          <Card />
        </Suspense>
      </Canvas>
    </>
  );
}

export default LCard;
