import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface BlueprintVisualizationProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BlueprintVisualization({
  width = 400,
  height = 300,
  className = '',
}: BlueprintVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x06060a);
    scene.fog = new THREE.Fog(0x06060a, 100, 1000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    containerRef.current.appendChild(renderer.domElement);

    // Create blueprint grid planes
    const gridGeometry = new THREE.PlaneGeometry(20, 20, 20, 20);
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x35e0c9,
      transparent: true,
      opacity: 0.4,
    });
    const gridLines = new THREE.LineSegments(gridGeometry, gridMaterial);
    gridLines.position.z = 0;
    scene.add(gridLines);

    // Create rotating cube (blueprint structure)
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x7c5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-5, 0, 0);
    scene.add(cube);

    // Create accent sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(2, 4);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x35e0c9,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(5, 0, 0);
    scene.add(sphere);

    // Add lights
    const light1 = new THREE.PointLight(0x7c5cff, 1);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x35e0c9, 0.8);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate shapes
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.008;
      sphere.rotation.x -= 0.003;
      sphere.rotation.y -= 0.006;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    const currentContainer = containerRef.current;
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (currentContainer) {
        currentContainer.removeChild(renderer.domElement);
      }
      gridGeometry.dispose();
      gridMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    />
  );
}
