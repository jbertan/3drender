import * as THREE from "three";
import { useRef, useEffect } from "react";

interface props {
  size: number;
}

const Sphere: React.FC<props> = ({ size }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  console.log(size);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas!.clientWidth / canvas!.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.background = new THREE.Color(0xffffff);
    scene.add(cube);
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      // cleanup code
      renderer.dispose();
    };
  }, [size]);
  return <canvas className="size" ref={canvasRef}></canvas>;
};
export default Sphere;
