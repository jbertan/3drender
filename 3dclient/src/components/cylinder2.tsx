import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

interface CylinderProps {
  size: number;
}

const CylinderComponent: React.FC<CylinderProps> = ({ size }) => {
  return (
    <mesh rotation={[0.01, 0.01, 0]}>
      <cylinderBufferGeometry args={[size, size, 2 * size, 32]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const Cylinder2: React.FC<CylinderProps> = ({ size }) => {
  return (
    <Canvas className="size">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CylinderComponent size={size} />
      <OrbitControls />
    </Canvas>
  );
};

export default Cylinder2;
