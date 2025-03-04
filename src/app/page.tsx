"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css"; 

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current.to(videoRef.current, { opacity: 1, scale: 1.05, duration: 3, ease: "power2.inOut" }).play();
    }
  }, []);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();

  return (
    <div className={styles.container}>
     
      <video ref={videoRef} className={styles.video} autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className={styles.overlay}>
       
        <div className={styles.buttonContainer}>
          <button onClick={handlePlay} className={styles.buttonPlay}>Play</button>
          <button onClick={handlePause} className={styles.buttonPause}>Pause</button>
        </div>
      </div>
    </div>
  );
}
