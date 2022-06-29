import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import SpaceShip from "./Starwars-ship";
const Model = () => {
  const myMesh = useRef();
  useFrame(() => {
    myMesh.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={myMesh}>
      <SpaceShip scale={0.5} />
    </mesh>
  );
};

export default Model;
