import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function IntroPage({ onEnter }) {
  return (
    <div className="size-full min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-50 to-red-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-40 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-red-300 rounded-full opacity-40 blur-3xl"
          animate={{ scale: [1, 1.3, 1], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-36 h-36 bg-rose-300 rounded-full opacity-40 blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Pulsing hearts decoration */}
      <motion.div
        className="absolute top-20 left-1/4"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-400 fill-pink-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-1/4"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Heart className="w-10 h-10 md:w-14 md:h-14 text-red-400 fill-red-400 opacity-60" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mb-8 relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="w-28 h-28 md:w-40 md:h-40 text-red-500 fill-red-500 drop-shadow-2xl" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute w-6 h-6 text-pink-400 fill-pink-400"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-80px)`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-4 text-center relative z-10"
      >
        Valentine's Day
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl md:text-3xl text-rose-700 mb-12 text-center relative z-10"
      >
        💕 Something special awaits you... 💕
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.15, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="group relative px-10 py-5 md:px-16 md:py-7 bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 text-white rounded-full shadow-2xl overflow-hidden z-10 hover:shadow-pink-500/50"
      >
        <span className="relative z-10 flex items-center gap-4 text-2xl md:text-3xl font-bold">
          <Heart className="w-7 h-7 md:w-9 md:h-9 fill-white animate-pulse" />
          Open Your Heart
          <Heart className="w-7 h-7 md:w-9 md:h-9 fill-white animate-pulse" />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-rose-600 via-pink-600 to-red-600"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Floating hearts animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            <Heart 
              className={`w-5 h-5 md:w-8 md:h-8 ${
                i % 3 === 0 ? 'text-pink-400 fill-pink-400' :
                i % 3 === 1 ? 'text-red-400 fill-red-400' :
                'text-rose-400 fill-rose-400'
              }`}
              style={{ opacity: Math.random() * 0.6 + 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
