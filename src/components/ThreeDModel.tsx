import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {   Environment, PresentationControls } from '@react-three/drei';
import { Mesh } from 'three';
import { useInView } from 'react-intersection-observer';

// This is a placeholder component that would normally load a real 3D model
// In a production environment, you would use actual GLTF models
const KitchenModel = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#e6e6e6" />
      </mesh>
      
      {/* Kitchen counter */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.1, 2.5]} />
        <meshStandardMaterial color="#d4a76a" />
      </mesh>
      
      {/* Kitchen cabinets */}
      <mesh position={[-1.5, -1, 0]}>
        <boxGeometry args={[0.8, 1, 2]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[0.8, 1, 2]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      
      <mesh position={[1.5, -1, 0]}>
        <boxGeometry args={[0.8, 1, 2]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      
      {/* Sink */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 0.2, 1]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Faucet */}
      <mesh position={[0, 0.3, -0.4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6]} />
        <meshStandardMaterial color="#a0a0a0" />
      </mesh>
    </group>
  );
};

interface ThreeDModelProps {
  modelType?: 'kitchen' | 'interior' | 'automation';
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ modelType = 'kitchen' }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <div ref={ref} className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
      {inView && (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <KitchenModel />
          </PresentationControls>
          <Environment preset="apartment" />
        </Canvas>
      )}
    </div>
  );
};

export default ThreeDModel;