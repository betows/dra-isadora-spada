"use client";

import { MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function SilkField() {
  const group = useRef<Group>(null);
  const silk = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.07) * 0.1;
      group.current.rotation.x = 0.22 + Math.sin(t * 0.05) * 0.04;
    }
    if (silk.current) {
      silk.current.position.y = Math.sin(t * 0.22) * 0.06;
    }
  });

  return (
    <group ref={group} position={[0.1, 0.05, 0]}>
      <mesh ref={silk} scale={[3.2, 4.1, 1]}>
        <planeGeometry args={[1, 1, 56, 56]} />
        <MeshDistortMaterial
          color="#C9A07A"
          distort={0.14}
          speed={0.65}
          roughness={0.48}
          metalness={0.38}
          transparent
          opacity={0.55}
        />
      </mesh>
      <Sparkles
        count={14}
        scale={[3.6, 4.4, 1.2]}
        size={1.05}
        speed={0.1}
        color="#E2C4A0"
        opacity={0.4}
      />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 4.6], fov: 36 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.9} color="#F6F1EA" />
      <directionalLight position={[2.2, 1.8, 3]} intensity={0.7} color="#E8D8C4" />
      <pointLight position={[-1.2, 0.6, 2]} intensity={7} color="#C9956C" distance={8} />
      <SilkField />
    </Canvas>
  );
}

export function HeroFallback() {
  return (
    <div className="parallax-drift plate plate-silk absolute inset-[-6%]" aria-hidden="true" />
  );
}
