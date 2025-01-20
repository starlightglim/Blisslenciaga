import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>BLISSLENCIAGA</title>
        <meta name="description" content="MEOW MEOW MEOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="relative min-h-[100dvh]">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4 py-safe">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-mono mb-4 sm:mb-8 tracking-tighter px-2">
              <span className="inline-block">BLISS_</span>
              <br />
              <span className="inline-block">LENCIAGA</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light tracking-wide px-2">
              MEOWMEOWMEOW
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0 w-full sm:w-auto">
              <Link 
                href="/shop"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-black font-mono 
                         hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base
                         active:scale-95 transform"
              >
                EXPLORE_COLLECTION
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 border border-white font-mono 
                         hover:bg-white hover:text-black transition-all duration-300
                         text-sm sm:text-base active:scale-95 transform"
              >
                DISCOVER_MORE
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator - Hidden on smaller screens */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-sm">SCROLL_</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-0.5 h-16 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}