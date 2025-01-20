import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Scale effect for logo based on scroll
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]);

  return (
    <>
      <Head>
        <title>BLISSLENCIAGA</title>
        <meta name="description" content="meow meow meow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="relative min-h-[100dvh] overflow-hidden">
        {/* Background Video with Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4 py-safe">
          <motion.div 
            style={{ scale: logoScale }}
            className="text-center w-full max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* logo with hover effect */}
            <motion.h1 
              className="text-7xl sm:text-8xl md:text-9xl font-bold font-mono mb-6 sm:mb-8 tracking-tighter px-2"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.span 
                className="inline-block"
                animate={isHovered ? { y: -10 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                BLISS_
              </motion.span>
              <br />
              <motion.span 
                className="inline-block"
                animate={isHovered ? { y: 10 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                LENCIAGA
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl mb-12 sm:mb-16 font-light tracking-wide px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              MEOWMEOWMEOW
            </motion.p>

            {/* hover effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center px-4 sm:px-0 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/shop">
                <motion.div 
                  className="w-full sm:w-auto px-8 sm:px-12 py-5 bg-white text-black font-mono 
                           text-base sm:text-lg cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  EXPLORE_COLLECTION
                </motion.div>
              </Link>
              
              <Link href="/about">
                <motion.div 
                  className="w-full sm:w-auto px-8 sm:px-12 py-5 border border-white font-mono 
                           text-base sm:text-lg cursor-pointer"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  DISCOVER_MORE
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/*scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <div className="flex flex-col items-center gap-3">
              <motion.span 
                className="font-mono text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SCROLL_DOWN
              </motion.span>
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="w-0.5 h-20 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}