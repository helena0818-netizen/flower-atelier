import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-48 overflow-hidden">
      {/* Full Background Image with Overlay - The user requested a full overlay with a bit more transparency for overall readability */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1627573933511-486accaca2f7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flower Atelier Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Full overlay using brand background color (Ivory) for consistency and readability */}
        <div className="absolute inset-0 bg-brand-bg/50" />
      </div>
      
      <div className="container mx-auto px-6 flex justify-center text-center relative">
        {/* Text Content - User requested effects to make text pop against background flowers */}
        <div className="space-y-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-8xl font-serif tracking-[0.1em] uppercase text-brand-text">
              Flower Atelier
            </h1>
            <div className="w-12 h-[1px] bg-brand-accent mx-auto" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-brand-text break-keep leading-snug pt-4"
            >
              선물하고 싶은 순간, <span className="text-brand-accent px-1" style={{ textShadow: '0 0 15px rgba(255,255,255,1), 0 0 5px rgba(255,255,255,0.8)' }}>가장 먼저</span> 떠오르는 꽃
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-brand-text font-semibold leading-relaxed break-keep max-w-2xl mx-auto">
              감각적인 색감과 정돈된 디자인으로<br />
              일상의 기념일을 더 특별하게 완성합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
          >
            <a
              href="#bouquet"
              className="group flex justify-center items-center gap-3 bg-brand-text text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-text/90 shadow-xl shadow-black/10"
            >
              베스트 꽃다발 보기
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={CONTACT_INFO.kakaotalk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 bg-white text-brand-text border-2 border-brand-accent/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-brand-soft/10 backdrop-blur-sm"
            >
              <MessageCircle size={20} className="text-brand-accent" />
              카카오톡 문의하기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
