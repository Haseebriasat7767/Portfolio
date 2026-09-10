import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function CoreShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial
          color="#7c5cff"
          distort={0.35}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          emissive="#35e0c9"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, tilt, speed, color }: { radius: number; tilt: number; speed: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 8, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function FloatingShard({ position, scale }: { position: [number, number, number]; scale: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={2} floatIntensity={2} rotationIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.05}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.05}
          color="#35e0c9"
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#7c5cff" />
        <pointLight position={[-5, -3, -5]} intensity={1} color="#35e0c9" />
        <CoreShape />
        <OrbitRing radius={2.4} tilt={0.5} speed={0.15} color="#7c5cff" />
        <OrbitRing radius={2.9} tilt={-0.35} speed={-0.1} color="#35e0c9" />
        <FloatingShard position={[-2.8, 1.4, -1]} scale={0.35} />
        <FloatingShard position={[2.6, -1.2, 0.5]} scale={0.45} />
        <FloatingShard position={[1.8, 1.8, -1.5]} scale={0.25} />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#ffffff" />
        <hemisphereLight args={["#7c5cff", "#06060a", 0.5]} />
      </Suspense>
    </Canvas>
  );
}
