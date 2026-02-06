import { useState } from 'react';
import { Heart, Sparkles, Frown, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IntroPage } from './IntroPage';
import photo1 from './assets/WhatsApp Image 2026-02-06 at 9.34.32 PM (1).jpeg';
import photo2 from './assets/WhatsApp Image 2026-02-06 at 9.34.32 PM (2).jpeg';
import photo3 from './assets/WhatsApp Image 2026-02-06 at 9.34.32 PM (3).jpeg';
import photo4 from './assets/WhatsApp Image 2026-02-06 at 9.34.32 PM.jpeg';

function App() {
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  // Calculate No button opacity based on No count (starts hiding after 6 clicks)
  const noButtonOpacity = Math.max(0, 1 - Math.max(0, noCount - 5) * 0.2);
  const noButtonScale = Math.max(0.3, 1 - Math.max(0, noCount - 5) * 0.1);

  // Phrases that appear when you click "No"
  const noPhrases = [
    "No 😢",
    "Orappanoo?",
    "Sherikmm orapanoo?",
    "dey deyyy!",
    "enthaan baduuu!",
    "aale vitt thallikkuvee ini no paranjaa?",
    "kashtondttaa😢😢!",
    "maryadek Yes njekikoo!",
    "Idi kitmmm ttaaaa?",
    "No button ndel alle ne ini njekuuu!",
    "hehe!",
    "hehehehee!",
    "hehehe?",
    "hehe?",
    "heh?",
    "hehe",
  ];

  const getNoButtonText = () => {
    return noPhrases[Math.min(noCount, noPhrases.length - 1)];
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = async () => {
    setAnswered(true);
    // Optional: Send data to your Express Backend
    try {
      await fetch('/api/record-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: 'yes' })
      });
    } catch (error) {
      console.error("Failed to record answer", error);
    }
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4
  ];

  if (showIntro) {
    return <IntroPage onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute animate-pulse opacity-20" 
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 2}s`
               }}>
            <Heart className="text-pink-300 w-8 h-8" />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {answered ? (
          // SUCCESS SCREEN
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center text-center z-10 p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-pink-200"
          >
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <Heart className="w-32 h-32 text-red-500 fill-red-500 mb-4" />
            </motion.div>
            <h1 className="text-5xl font-bold text-pink-600 mb-4">Heheee...njn aaraa mwool😁 jamalkante mwol thanneee🤣🤣..!! ... 💖</h1>
            <p className="text-xl text-gray-700 font-bold">Happy Valentine's Day! Love youuu baduuu..mwuaaah mwuaah mwahh!!</p>
            <div className="flex gap-2 mt-6">
               <PartyPopper className="text-yellow-500 w-8 h-8" />
               <PartyPopper className="text-yellow-500 w-8 h-8" />
            </div>
          </motion.div>
        ) : (
          // QUESTION SCREEN
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center z-10 w-full max-w-4xl"
          >
            {/* Photos */}
            <div className="flex justify-center gap-4 mb-8">
              {photos.map((src, idx) => (
                <div key={idx} className="w-24 h-32 md:w-40 md:h-56 rounded-lg overflow-hidden border-4 border-white shadow-md transform rotate-2 hover:rotate-0 transition-all">
                  <img src={src} alt="memories" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-8 text-center drop-shadow-sm">
              Will you be my Valentine?
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* YES BUTTON */}
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-colors flex items-center gap-2"
                style={{
                  fontSize: `${Math.min(1.5 + noCount * 0.2, 4)}rem`, 
                  padding: `${Math.min(1 + noCount * 0.3, 3)}rem ${Math.min(2 + noCount * 0.5, 5)}rem`,
                }}
              >
                Yes <Sparkles className="inline" />
              </motion.button>

              {/* NO BUTTON */}
              <motion.button
                onClick={handleNoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  opacity: noButtonOpacity,
                  scale: noButtonScale,
                  x: Math.max(0, noCount - 5) * 50,
                  y: Math.max(0, noCount - 5) * -60,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors flex items-center gap-2 text-xl"
                style={{
                  pointerEvents: noButtonOpacity === 0 ? 'none' : 'auto',
                }}
              >
                {getNoButtonText()} <Frown className="inline w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;