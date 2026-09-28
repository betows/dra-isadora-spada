"use client";

import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

function MorphField() {
  const group = useRef<Group>(null);
  const gold = useRef<Mesh>(null);
  const clay = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.08;
      group.current.rotation.x = Math.sin(t * 0.12) * 0.08;
    }
    if (gold.current) {
      gold.current.position.y = Math.sin(t * 0.55) * 0.18;
    }
    if (clay.current) {
      clay.current.position.y = Math.cos(t * 0.42) * 0.16 - 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh ref={gold} position={[-0.35, 0.15, 0]} scale={1.35}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#E6A317"
            distort={0.38}
            speed={1.6}
            roughness={0.28}
            metalness={0.42}
            transparent
            opacity={0.92}
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.28} floatIntensity={0.4}>
        <mesh ref={clay} position={[0.7, -0.2, -0.2]} scale={1.05}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#C45A3A"
            distort={0.32}
            speed={1.3}
            roughness={0.34}
            metalness={0.18}
            transparent
            opacity={0.88}
          />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0.05, 0.75, 0.35]} scale={0.62}>
          <sphereGeometry args={[1, 48, 48]} />
          <MeshDistortMaterial
            color="#D8B8A4"
            distort={0.28}
            speed={1.8}
            roughness={0.22}
            metalness={0.12}
            transparent
            opacity={0.9}
          />
        </mesh>
      </Float>
      <Sparkles
        count={42}
        scale={[5.2, 5.6, 3]}
        size={2.4}
        speed={0.25}
        color="#F0B429"
        opacity={0.7}
      />
    </group>
  );
}

function AmbientRig() {
  const lights = useMemo(
    () => ({
      key: "#F0B429",
      fill: "#C45A3A",
      rim: "#FAF7F2",
    }),
    [],
  );

  return (
    <>
      <color attach="background" args={["#F4EFE8"]} />
      <ambientLight intensity={0.72} color="#FAF7F2" />
      <pointLight position={[2.4, 2.2, 2.6]} intensity={18} color={lights.key} distance={12} />
      <pointLight position={[-2.6, -1.2, 1.8]} intensity={10} color={lights.fill} distance={10} />
      <directionalLight position={[0, 3, 4]} intensity={0.55} color={lights.rim} />
      <MorphField />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <AmbientRig />
    </Canvas>
  );
}

export function HeroFallback() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-cream">
      <div className="blob-drift absolute -left-6 top-10 h-52 w-52 rounded-full bg-gold/70 blur-2xl" />
      <div className="blob-drift absolute right-0 top-24 h-44 w-44 rounded-full bg-terracotta/70 blur-2xl [animation-delay:-6s]" />
      <div className="blob-drift absolute bottom-8 left-1/3 h-36 w-36 rounded-full bg-nude/80 blur-xl [animation-delay:-3s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,#f4efe8_78%)]" />
    </div>
  );
}
