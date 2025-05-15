import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type * as THREE from 'three';

function RotatingBox() {
	const meshRef = useRef<THREE.Mesh | null>(null);
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	});
	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={'orange'} />
		</mesh>
	);
}

const Sample2 = () => (
	<div style={{ width: '100%', height: '400px' }}>
		<Canvas camera={{ position: [2, 2, 2] }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 5, 5]} intensity={1} />
			<RotatingBox />
			<OrbitControls />
		</Canvas>
	</div>
);

export default Sample2;
