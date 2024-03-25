"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const LoadingScreen = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setShowFirstText(true);
    }, 1000);

    const secondTextTimeout = setTimeout(() => {
      setShowSecondText(true);
    }, 1500);

    const thirdTextTimeout = setTimeout(() => {
      setShowThirdText(true);
    }, 2000);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
    };
  }, []);

  return (
    <div className="loading-screen flex flex-col items-center justify-center p-10 m-10 mt-20">
      {showFirstText && (
        <div className="falling-texts space-y-4 text-4xl text-indigo-800 font-bold">
          <div className="falling-text text-6xl md:text-7xl lg:text-8xl">
            Welcome to IIITDM's
          </div>
        </div>
      )}
      {showSecondText && (
        <div className="falling-texts space-y-4 text-4xl text-white font-bold">
          <div className="falling-text2 text-5xl md:text-7xl lg:text-8xl p-1 my-8">
            LOST AND FOUND PLATFORM
          </div>
        </div>
      )}
      {showThirdText && (
        <div className="text-white font-bold lg:flex-row flex-col items-center justify-center">
          <Link href="/signup">
            <button className="falling-texts2 w-[300px] h-[50px] p-2 bg-indigo-600 text-white rounded-lg hover:ring-4 hover:ring-offset-1 hover:bg-white hover:text-black focus:outline-none m-6">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="falling-texts2 w-[300px] h-[50px] p-2 bg-indigo-600 text-white rounded-lg hover:ring-4 hover:ring-offset-1 hover:bg-white hover:text-black focus:outline-none m-6">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;