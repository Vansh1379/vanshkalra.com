import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Form from "./helper/Form";

const ContactComponent = async () => {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full overflow-x-hidden bg-black flex flex-col items-center justify-center rounded-md px-4">
      <div className="text-center mb-2">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
          Let&apos;s Connect
        </h1>
        <p className="text-neutral-500 mt-3 text-base md:text-lg">
          Have an idea? Let&apos;s make it happen
        </p>
      </div>

      <div className="w-[40rem] h-32 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      <div className="w-full max-w-xl">
        <Form />
      </div>
    </div>
  );
};

export default ContactComponent;
