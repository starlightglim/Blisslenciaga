import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>BLISSLENCIAGA</title>
        <meta name="description" content="MEOW MEOW MEOW" />
      </Head>

      <div className="relative min-h-screen">
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
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-9xl md:text-8Xxl font-bold font-mono mb-8 tracking-tighter">
              BLISS_
              <br />
              LENCIAGA
            </h1>

            <p className="text-xl md:text-2xl mb-12 font-light tracking-wide">
              MEOWMEOWMEOW
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                href="/shop"
                className="px-8 py-4 bg-white text-black font-mono hover:bg-opacity-90 transition-all duration-300"
              >
                EXPLORE_COLLECTION
              </Link>
              <Link 
                href="/about"
                className="px-8 py-4 border border-white font-mono hover:bg-white hover:text-black transition-all duration-300"
              >
                DISCOVER_MORE
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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