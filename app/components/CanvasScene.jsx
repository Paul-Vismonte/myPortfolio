"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Orb({ position, color, size }) {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh position={position} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

export default function CanvasScene() {
  return (
    <Canvas
      className="pointer-events-none fixed inset-0 -z-10"
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <color attach="background" args={["#fefaf3"]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <group position={[0, -1, 0]}>
        <Orb position={[-2.5, 1.4, 0]} size={1.3} color="#ffb3a1" />
        <Orb position={[2.2, 0.8, -1]} size={1.1} color="#d5c3ff" />
        <Orb position={[0.5, -0.6, 0.5]} size={1.6} color="#ffe8c3" />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
