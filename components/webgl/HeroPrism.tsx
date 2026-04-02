"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface HeroPrismProps {
  className?: string;
}

export default function HeroPrism({ className }: HeroPrismProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;
    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    const group = new THREE.Group();
    scene.add(group);

    const prismGeometry = new THREE.CylinderGeometry(0.58, 0.92, 1.95, 6, 24);
    const prismMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#dce4c5"),
      roughness: 0.12,
      metalness: 0.02,
      transparent: true,
      opacity: 0.92,
      transmission: 0.82,
      thickness: 1.6,
      ior: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.14,
      attenuationColor: new THREE.Color("#b8c483"),
      attenuationDistance: 1.4,
    });
    const prism = new THREE.Mesh(prismGeometry, prismMaterial);
    prism.rotation.z = Math.PI / 6;
    group.add(prism);

    const coreGeometry = new THREE.OctahedronGeometry(0.7, 0);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#d5c274"),
      transparent: true,
      opacity: 0.16,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const edgeGeometry = new THREE.EdgesGeometry(
      new THREE.CylinderGeometry(0.61, 0.95, 1.98, 6, 1),
    );
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#f3f7ea"),
      transparent: true,
      opacity: 0.5,
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    group.add(edges);

    const ambientLight = new THREE.AmbientLight("#f4f7e8", 0.95);
    const keyLight = new THREE.PointLight("#dbc37e", 16, 24, 2);
    keyLight.position.set(1.8, 1.2, 3.2);
    const rimLight = new THREE.PointLight("#8db495", 8, 18, 2);
    rimLight.position.set(-2.6, -1.6, 2.4);
    const lowerLight = new THREE.PointLight("#eef4df", 4, 16, 1.8);
    lowerLight.position.set(0, -2.8, 3);

    scene.add(ambientLight, keyLight, rimLight, lowerLight);

    const pointer = new THREE.Vector2(0, 0);
    const easedPointer = new THREE.Vector2(0, 0);

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.8;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.6;
    };

    const handlePointerLeave = () => {
      pointer.set(0, 0);
    };

    const render = (time: number) => {
      const seconds = time * 0.001;

      easedPointer.lerp(pointer, 0.06);

      group.rotation.y = seconds * 0.24 + easedPointer.x * 0.9;
      group.rotation.x = Math.sin(seconds * 0.9) * 0.08 + easedPointer.y * 0.55;
      group.position.y = Math.sin(seconds * 1.1) * 0.12;
      core.rotation.y = seconds * -0.45;
      core.rotation.x = seconds * 0.22;
      edges.rotation.y = group.rotation.y * 1.02;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    frameId = window.requestAnimationFrame(render);

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);

      prismGeometry.dispose();
      prismMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} aria-hidden="true" />;
}
