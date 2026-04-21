import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS, FAQS, CONTACT_INFO } from '../constants';
import { Star, ChevronDown, Instagram, Phone, Clock, MapPin, MessageCircle } from 'lucide-react';

export function Reviews() {
  return (
    <section id="review" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            선물한 사람도, 받은 사람도 만족한 꽃
          </motion.h2>
          <p className="text-brand-muted">플라워아틀리에와 함께한 수많은 분들의 진심 어린 후기입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-bg/40 p-8 rounded-[2rem] border border-brand-soft/5 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-brand-text italic break-keep">"{review.content}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-brand-soft/10">
                <span className="text-xs font-bold text-brand-muted">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-brand-soft/10">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left hover:text-brand-accent transition-colors"
              >
                <span className="font-bold flex gap-4">
                  <span className="text-brand-accent opacity-30">Q.</span>
                  {faq.question}
                </span>
                <ChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-brand-muted leading-relaxed pl-10 flex gap-4">
                      <span className="text-brand-accent opacity-30 invisible">Q.</span>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="py-24 bg-white border-t border-brand-soft/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Shop Details */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Visit Us</span>
              <h2 className="text-4xl font-bold">{CONTACT_INFO.shopName}</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-brand-accent flex-shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="font-bold">Address</p>
                  <p className="text-brand-muted">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brand-accent flex-shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="font-bold">Business Hours</p>
                  <p className="text-brand-muted">{CONTACT_INFO.businessHours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brand-accent flex-shrink-0" size={24} />
                <div className="space-y-1">
                  <p className="font-bold">Contact</p>
                  <p className="text-brand-muted">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={CONTACT_INFO.kakaotalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#FEE500] text-[#3c1e1e] px-8 py-4 rounded-xl font-bold hover:brightness-95 transition-all"
              >
                <MessageCircle size={20} /> KakaoTalk
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-brand-bg shadow-inner border border-brand-soft/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5321.785542387889!2d127.12608598968686!3d37.523184349869894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1776780337779!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Flower Atelier Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-bg pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-20 border-b border-brand-soft/10">
          <div className="space-y-6 max-w-md">
            <span className="font-serif text-3xl tracking-widest uppercase italic text-brand-text">Flower Atelier</span>
            <p className="text-brand-muted leading-relaxed break-keep">
              우리는 꽃이 가진 본연의 아름다움을 넘어, 당신의 마음이 온전하게 전달되는 찰나의 순간을 디자인합니다.<br />플라워아틀리에와 함께 일상을 특별하게 기록하세요.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Menu</p>
              <ul className="space-y-2 text-sm font-medium text-brand-muted">
                <li><a href="#signature" className="hover:text-brand-accent transition-colors">Signature</a></li>
                <li><a href="#bouquet" className="hover:text-brand-accent transition-colors">Bouquet</a></li>
                <li><a href="#review" className="hover:text-brand-accent transition-colors">Review</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-brand-muted/60 uppercase tracking-widest">
           <p>© {new Date().getFullYear()} FLOWER ATELIER. ALL RIGHTS RESERVED.</p>
           <p>DESIGNED FOR BEAUTIFUL MOMENTS.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-0 w-full z-40 px-6 md:hidden pointer-events-none"
    >
      <a
        href={CONTACT_INFO.kakaotalk}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-16 bg-white border border-brand-accent/10 shadow-2xl rounded-2xl flex items-center justify-between px-6 pointer-events-auto active:scale-95 transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FEE500] rounded-full flex items-center justify-center">
            <MessageCircle size={20} className="text-[#3c1e1e]" />
          </div>
          <div>
            <p className="text-xs text-brand-muted font-bold leading-none mb-1 uppercase tracking-tight">Chat with us</p>
            <p className="text-sm font-bold text-brand-text leading-none">빠른 주문 및 상담하기</p>
          </div>
        </div>
        <ChevronDown className="-rotate-90 text-brand-muted" size={20} />
      </a>
    </motion.div>
  );
}
