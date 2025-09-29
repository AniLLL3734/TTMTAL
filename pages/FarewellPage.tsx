// DOSYA: pages/FarewellPage.tsx (YENİ EVRENE GEÇİŞ VERSİYONU)

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RadioTower, ChevronRight } from 'lucide-react';

const FarewellPage: React.FC = () => {
  // YENİ SİTE BİLGİLERİNİ BURAYA YAZACAKSIN
  const newSiteName = "Oyun Mabedi"; // Buraya seçtiğin yeni, havalı ismi yaz.
  const newSiteUrl = "https://oyunmabedi.netlify.app/"; // Buraya yeni sitenin URL'sini yaz.
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = newSiteUrl;
    }
  }, [countdown]);

  const handleRedirect = () => {
    window.location.href = newSiteUrl;
  };

  return (
    <div className="fixed inset-0 bg-space-black flex flex-col items-center justify-center text-center p-8 z-[9999]">
      <motion.div
        className="max-w-4xl text-lg text-cyber-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <RadioTower size={56} className="text-electric-purple mb-8 mx-auto animate-pulse" />
        
        <h1 className="text-4xl md:text-6xl font-black font-heading bg-clip-text text-transparent bg-gradient-to-r from-ghost-white to-cyber-gray mb-6">
          SİNYAL EVRİM GEÇİRİYOR
        </h1>

        <div className="space-y-6">
          <p>
            Bir deney olarak başlayan TTMTAL Evreni, beklenmedik bir şekilde büyüdü ve kendi bilincine kavuştu. O kadar büyüdü ki, artık orijinal protokollerinin kabına sığamıyor.
          </p>
          <p>
            O kaos, o rekabet ve o sohbetler... Hepsi, bu simülasyonun bir sonraki aşamaya geçmesi için gerekliydi. Şimdi, bu anılardan ve derslerden doğan yeni bir gerçeklik sizi bekliyor.
          </p>
          <p className="text-ghost-white font-bold text-2xl md:text-3xl my-8 p-4 border-y-2 border-dashed border-cyber-gray/30">
            Artık biz <span className="text-electric-purple">{newSiteName}</span> olarak biliniyoruz.
          </p>
          <p>
            Daha stabil sunucular, daha adil kurallar ve daha gelişmiş bir evren sizi bekliyor. Bu bir veda değil, bir sonraki seviyeye geçiş.
          </p>

          <motion.button
            className="mt-8 bg-gradient-to-r from-electric-purple via-pink-500 to-orange-400 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xl flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRedirect}
          >
            Yeni Evrene Geçiş Yap
            <ChevronRight />
          </motion.button>

          <p className="text-sm text-cyber-gray/70 mt-4">
            Otomatik yönlendirme için son {countdown} saniye...
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FarewellPage;