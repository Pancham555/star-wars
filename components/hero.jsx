import React from "react";
import Model from "./models";
import { Canvas } from "@react-three/fiber";
const Hero = () => {
  return (
    <div className="container px-6 pt-16 mx-auto text-center bg-white dark:bg-gray-800">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Building Your Next App with our Awesome components
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
        <button className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 md:mx-0 md:w-auto focus:outline-none">
          Start 14-Day free trial
        </button>
        <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-full lg:h-64 h-40 rounded-xl md:w-4/5">
          <Canvas className="animation">
            <ambientLight intensity={1} />
            <directionalLight color="white" />
            <Model />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
