import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}