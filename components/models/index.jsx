import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Katana from "./katana";
const Model = () => {
  const myMesh = useRef();
  useFrame(() => {
    // myMesh.current.rotation.x += 0.005;
  });
  return (
    <mesh ref={myMesh} scale={1}>
      <Katana />
      {/* <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial colorWrite={true} color={0x377d71} /> */}
    </mesh>
  );
};

export default Model;
