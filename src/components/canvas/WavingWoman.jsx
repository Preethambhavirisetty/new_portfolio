import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Simple 3D woman figure with waving animation
const WavingWoman = () => {
  const groupRef = useRef();
  const handRef = useRef();
  
  useFrame((state) => {
    if (handRef.current) {
      // Waving animation - rotate hand back and forth
      handRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.5;
      handRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
    
    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.2]} />
        <meshStandardMaterial color="#5D4E37" />
      </mesh>
      
      {/* Left Arm (waving) */}
      <group ref={handRef} position={[-0.25, 0.8, 0]}>
        {/* Upper arm */}
        <mesh position={[-0.1, -0.2, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Lower arm */}
        <mesh position={[-0.25, -0.4, 0]} rotation={[0, 0, 0.5]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.35, -0.55, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
      </group>
      
      {/* Right Arm */}
      <group position={[0.25, 0.8, 0]}>
        <mesh position={[0.1, -0.2, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        <mesh position={[0.25, -0.4, 0]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        <mesh position={[0.35, -0.55, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
      </group>
      
      {/* Skirt/Dress */}
      <mesh position={[0, 0.3, 0]}>
        <coneGeometry args={[0.25, 0.5, 8]} />
        <meshStandardMaterial color="#E8E8D3" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.1, -0.2, 0]}>
        <boxGeometry args={[0.08, 0.4, 0.08]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
      <mesh position={[0.1, -0.2, 0]}>
        <boxGeometry args={[0.08, 0.4, 0.08]} />
        <meshStandardMaterial color="#2C3E50" />
      </mesh>
      
      {/* Hair */}
      <mesh position={[0, 1.3, -0.05]}>
        <boxGeometry args={[0.2, 0.15, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
};

const WavingWomanCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <WavingWoman />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default WavingWomanCanvas;

