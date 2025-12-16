import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// 3D Woman Developer with Laptop - Modern minimalist style
const WomanDeveloper = () => {
  const groupRef = useRef();
  const laptopRef = useRef();
  const hairRef = useRef();
  
  useFrame((state) => {
    // Gentle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    
    // Subtle laptop tilt animation
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    // Hair sway animation
    if (hairRef.current) {
      hairRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Head */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Hair - Dark blue ponytail */}
      <group ref={hairRef} position={[0, 1.5, -0.05]}>
        {/* Main hair */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.25, 0.2, 0.12]} />
          <meshStandardMaterial color="#1E3A5F" />
        </mesh>
        {/* Ponytail */}
        <mesh position={[0, 0.25, -0.05]}>
          <cylinderGeometry args={[0.08, 0.1, 0.3, 16]} />
          <meshStandardMaterial color="#1E3A5F" />
        </mesh>
        {/* Hair tie - golden yellow */}
        <mesh position={[0, 0.35, -0.05]}>
          <torusGeometry args={[0.09, 0.015, 8, 16]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>
      
      {/* Face features */}
      {/* Eyes */}
      <mesh position={[-0.06, 1.42, 0.15]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.06, 1.42, 0.15]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Blush */}
      <mesh position={[-0.1, 1.35, 0.14]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#FFB6C1" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.1, 1.35, 0.14]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#FFB6C1" transparent opacity={0.6} />
      </mesh>
      
      {/* Body - Light blue sweater */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.35, 0.7, 0.25]} />
        <meshStandardMaterial color="#B0E0E6" />
      </mesh>
      
      {/* Left Arm - holding laptop */}
      <group position={[-0.2, 0.9, 0]}>
        {/* Upper arm */}
        <mesh position={[-0.1, -0.15, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.1, 0.35, 0.1]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Lower arm */}
        <mesh position={[-0.2, -0.4, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.1, 0.35, 0.1]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.25, -0.6, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
      </group>
      
      {/* Right Arm - holding laptop */}
      <group position={[0.2, 0.9, 0]}>
        {/* Upper arm */}
        <mesh position={[0.1, -0.15, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.1, 0.35, 0.1]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Lower arm */}
        <mesh position={[0.2, -0.4, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.1, 0.35, 0.1]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
        {/* Hand */}
        <mesh position={[0.25, -0.6, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#FFDBAC" />
        </mesh>
      </group>
      
      {/* Laptop - White MacBook style */}
      <group ref={laptopRef} position={[0, 0.1, 0.2]}>
        {/* Laptop base */}
        <mesh position={[0, 0, 0]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.5, 0.35, 0.05]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Laptop screen */}
        <mesh position={[0, 0.2, -0.15]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.5, 0.35, 0.02]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Screen display - dark */}
        <mesh position={[0, 0.2, -0.13]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.45, 0.3, 0.01]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Apple logo on lid */}
        <mesh position={[0, 0.35, -0.14]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.04, 0.04, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        {/* Keyboard area */}
        <mesh position={[0, -0.05, 0.01]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.45, 0.25, 0.01]} />
          <meshStandardMaterial color="#E5E5E5" />
        </mesh>
      </group>
      
      {/* Pants - Light blue */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.32, 0.5, 0.22]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.1, -0.3, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      <mesh position={[0.1, -0.3, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      {/* Shoes - White sneakers */}
      <mesh position={[-0.1, -0.65, 0.05]}>
        <boxGeometry args={[0.12, 0.08, 0.15]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.1, -0.65, 0.05]}>
        <boxGeometry args={[0.12, 0.08, 0.15]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      
      {/* Shadow on ground */}
      <mesh position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const WomanDeveloperCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 3], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting setup for light blue aesthetic */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E0F7FA" />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#B0E0E6" />
        <pointLight position={[0, 5, 0]} intensity={0.8} color="#FFFFFF" />
        
        <Suspense fallback={null}>
          <WomanDeveloper />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default WomanDeveloperCanvas;
