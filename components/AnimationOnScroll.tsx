"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AnimationOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.refreshHard();
    AOS.init({
      duration: 1000,
      once: true, 
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return <>{children}</>;
}