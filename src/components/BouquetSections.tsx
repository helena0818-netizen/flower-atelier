import { Sparkles, Gift, MessageSquare, ArrowRight } from 'lucide-react';
import { SIGNATURE_FEATURES, BEST_BOUQUETS, CONTACT_INFO } from '../constants';
import { motion } from 'motion/react';

const IconMap = {
  Sparkles: Sparkles,
  Gift: Gift,
  MessageSquare: MessageSquare,
};

export function Signature() {
  return (
    <section id="signature" className="py-24 bg-white relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-soft/20 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-brand-accent italic mb-2 block"
          >
            Brand Philisophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold break-keep leading-tight"
          >
            취향이 보이는 꽃, 오래 기억되는 선물
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SIGNATURE_FEATURES.map((feature, idx) => {
            const Icon = IconMap[feature.icon as keyof typeof IconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group px-6 py-10 rounded-[2rem] bg-brand-bg/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-accent/5 border border-transparent hover:border-brand-soft/20 transition-all text-center flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 shrink-0">
                  <Icon className="text-brand-accent" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 break-keep">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed break-keep mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BestBouquet() {
  return (
    <section id="bouquet" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium text-brand-text italic"
          >
            Best Bouquet
          </motion.h2>
          <p className="text-brand-muted max-w-md mx-auto">플라워아틀리에에서 가장 사랑받는 시그니처 아이템들을 소개합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {BEST_BOUQUETS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-white shadow-xl shadow-black/5">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <a
                    href={CONTACT_INFO.kakaotalk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-brand-text py-4 rounded-2xl font-bold shadow-2xl flex items-center justify-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    이 스타일로 문의하기
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1 px-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl font-medium text-brand-text leading-tight">{item.name}</h3>
                  <span className="text-brand-accent font-bold text-sm tracking-tighter">{item.price}</span>
                </div>
                <p className="text-sm text-brand-muted line-clamp-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
