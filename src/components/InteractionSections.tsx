import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OCCASIONS, CONTACT_INFO } from '../constants';
import { ChevronRight, Calendar, User, Wallet, Sparkles, Send } from 'lucide-react';

export function Occasions() {
  const [activeTab, setActiveTab] = useState(OCCASIONS[0].id);
  const activeContent = OCCASIONS.find((o) => o.id === activeTab)!;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">어떤 순간을 위한 꽃인가요?</h2>
          <p className="text-brand-muted">당신의 소중한 순간에 가장 잘 어울리는 스타일을 제안합니다.</p>
          
          {/* Fixed Image: Small, Centered, Full Proportion */}
          <div className="flex justify-center pt-4">
            <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-lg border border-brand-soft/10">
              <img
                src="https://images.unsplash.com/photo-1620843437920-ead942b3abd3?w=800&auto=format&fit=crop&q=80"
                alt="Occasion Mood"
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {OCCASIONS.map((occasion) => (
            <button
              key={occasion.id}
              onClick={() => setActiveTab(occasion.id)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border-2 ${
                activeTab === occasion.id
                  ? 'bg-brand-accent border-brand-accent text-white shadow-xl shadow-brand-accent/20'
                  : 'bg-white border-brand-soft/20 text-brand-muted hover:border-brand-accent/30'
              }`}
            >
              {occasion.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-brand-bg/30 p-8 lg:p-16 rounded-[3rem] border border-brand-soft/10 text-left"
          >
            <div className="flex flex-col items-start space-y-10">
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-3xl font-bold break-keep">{activeContent.title}</h3>
                <p className="text-lg text-brand-muted leading-relaxed break-keep">
                  {activeContent.description}
                </p>
              </div>

              <div className="bg-white/80 p-8 rounded-2xl border-l-4 border-brand-accent space-y-2 shadow-sm text-left w-full max-w-xl">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-accent block">Expert Tip</span>
                <p className="text-brand-text font-medium break-keep">{activeContent.recommendation}</p>
              </div>

              <a
                href={CONTACT_INFO.kakaotalk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-text text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-accent transition-all group shadow-xl shadow-black/5"
              >
                추천 스타일로 상담하기
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function OrderProcess() {
  const steps = [
    { icon: Sparkles, title: '스타일 선택', desc: '시그니처 아이템 또는 원하시는 색감 선택' },
    { icon: User, title: '간단 문의', desc: '홈페이지 빠른 상담 문의 또는 카카오톡으로 일정 및 예산 상담' },
    { icon: Calendar, title: '제작 및 픽업', desc: '전문 플로리스트 제작 후 당일 배송/픽업' },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Steps */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">주문은 간단하게,<br />결과는 만족스럽게</h2>
              <p className="text-brand-muted max-w-sm">플라워아틀리에는 신선한 생화를 선별하여<br />고객님의 소중한 순간을 디자인합니다.</p>
            </div>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent">
                    <step.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-accent/50">STEP 0{idx + 1}</span>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-brand-muted text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand-accent/5"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              빠른 상담 문의
              <span className="text-xs font-normal text-brand-muted bg-brand-bg px-3 py-1 rounded-full">상담 완료 후 제작이 확정됩니다.</span>
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <User size={14} className="text-brand-accent" /> 이름
                </label>
                <input type="text" placeholder="홍길동" className="w-full px-4 py-3 rounded-xl bg-brand-bg border-transparent focus:bg-white focus:border-brand-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  연락처
                </label>
                <input type="tel" placeholder="010-0000-0000" className="w-full px-4 py-3 rounded-xl bg-brand-bg border-transparent focus:bg-white focus:border-brand-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Calendar size={14} className="text-brand-accent" /> 수령 희망일
                </label>
                <input type="date" className="w-full px-4 py-3 rounded-xl bg-brand-bg border-transparent focus:bg-white focus:border-brand-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Wallet size={14} className="text-brand-accent" /> 예산대
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-brand-bg border-transparent focus:bg-white focus:border-brand-accent outline-none transition-all">
                  <option>3-5만원</option>
                  <option>5-10만원</option>
                  <option>10만원 이상</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  원하는 분위기 / 참고 메모
                </label>
                <textarea rows={3} placeholder="원하시는 꽃이나 색감이 있다면 입력해주세요." className="w-full px-4 py-3 rounded-xl bg-brand-bg border-transparent focus:bg-white focus:border-brand-accent outline-none transition-all resize-none" />
              </div>
              
              <button
                type="submit"
                className="col-span-1 md:col-span-2 bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-brand-accent/90 hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-accent/20"
              >
                주문 상담 보내기
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
