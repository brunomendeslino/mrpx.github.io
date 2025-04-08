import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackground = () => {
	const linesRef = useRef(null);

	useEffect(() => {
		// Scene Setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		linesRef.current.appendChild(renderer.domElement);

		// Line Properties
		const n = 20;
		const spacing = 10 / (n + 1);
		const lineMaterial = new THREE.LineBasicMaterial({ color: 0x555555 });
		const lines = [];

		let interactionForce = { x: 0, y: 0 };

		// Create static lines
		for (let i = 1; i <= n; i++) {
			const baseY = i * spacing - 5;
			const points = [new THREE.Vector3(-50, baseY, 0), new THREE.Vector3(50, baseY, 0)];

			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			const line = new THREE.Line(geometry, lineMaterial);
			scene.add(line);
			lines.push({ line, points, baseY });
		}

		// Handle window resize
		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};
		window.addEventListener('resize', handleResize);

		// Mouse move interaction handler
		const handleMouseMove = event => {
			const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
			const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1;

			interactionForce.x = normalizedX * 20;
			interactionForce.y = normalizedY * 20;
		};
		window.addEventListener('mousemove', handleMouseMove);

		// Simulate a mouse move event on page load
		const simulatedMouseMove = new MouseEvent('mousemove', {
			clientX: 100, // Change this to a non-center value
			clientY: 100, // Change this to a non-center value
			bubbles: true,
			cancelable: true,
		});
		window.dispatchEvent(simulatedMouseMove);

		// Animate elastic response
		const animate = () => {
			requestAnimationFrame(animate);

			lines.forEach(({ line, points, baseY }, index) => {
				const distanceFactor = Math.sin(performance.now() * 0.005 + index) * 0.1;
				const offset = interactionForce.y * (1 - index / n) * distanceFactor;
				const boundedOffset = Math.max(Math.min(offset, 20), -20);

				points[0].y = baseY + boundedOffset;
				points[1].y = baseY + boundedOffset;
				line.geometry.setFromPoints(points);
			});

			// Smooth decay for interactionForce
			interactionForce.x *= 0.95;
			interactionForce.y *= 0.95;

			renderer.render(scene, camera);
		};
		animate();

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
			if (linesRef.current && renderer.domElement.parentNode === linesRef.current) {
				linesRef.current.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);

	return <div ref={linesRef} className='interactive-background' />;
};

export default InteractiveBackground;
