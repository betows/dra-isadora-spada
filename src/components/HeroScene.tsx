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
      group.current.rotation.y = Math.sin(t * 0.07) * 0.12;
      group.current.rotation.x = 0.18 + Math.sin(t * 0.05) * 0.04;
    }
    if (silk.current) {
      silk.current.position.y = Math.sin(t * 0.22) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0.35, 0.05, 0]}>
      <mesh ref={silk} scale={[3.6, 4.4, 1]}>
        <planeGeometry args={[1, 1, 56, 56]} />
        <MeshDistortMaterial
          color="#C4A07A"
          distort={0.16}
          speed={0.7}
          roughness={0.62}
          metalness={0.28}
          transparent
          opacity={0.42}
        />
      </mesh>
      <mesh position={[0.55, -0.35, -0.35]} scale={[1.8, 2.2, 1]} rotation={[0.1, 0.2, 0.08]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <MeshDistortMaterial
          color="#B07A52"
          distort={0.12}
          speed={0.5}
          roughness={0.7}
          metalness={0.18}
          transparent
          opacity={0.22}
        />
      </mesh>
      <Sparkles
        count={16}
        scale={[4.4, 5.2, 1.6]}
        size={1.15}
        speed={0.12}
        color="#C9956C"
        opacity={0.32}
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
      <color attach="background" args={["#F3EEE6"]} />
      <ambientLight intensity={0.86} color="#F6F1EA" />
      <directionalLight position={[2.2, 1.8, 3]} intensity={0.55} color="#E8D8C4" />
      <pointLight position={[-1.4, 0.8, 2]} intensity={6} color="#C9956C" distance={8} />
      <SilkField />
    </Canvas>
  );
}

export function HeroFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ivory">
      <div className="parallax-drift plate plate-silk absolute inset-[-8%]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_40%,transparent_18%,#f3eee6_78%)]" />
    </div>
  );
}
