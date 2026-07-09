import HeroSection from "../components/landing/HeroSection";
import BenefitsCapabilities from "../components/landing/BenefitsCapabilities";
import { motion } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";

export default function LandingPage() {
  const steps = [
    { title: "User records meeting or uploads audio." },
    { title: "Speech Recognition converts audio into text." },
    { title: "AI processes transcript." },
    { title: "AI generates Summary, Key Decisions, Action Items, Responsible Person, Deadlines." },
    { title: "Store everything in database." },
    { title: "Display searchable dashboard." }
  ];

  const faqs = [
    { question: "How does integration sync with my existing platforms?", answer: "Our platform seamlessly connects with Zoom, Google Meet, and Teams. You just authorize the app and it automatically pulls in your scheduled meetings." },
    { question: "Can I access transcriptions after the meeting ends?", answer: "Yes, all transcriptions are securely saved in your dashboard." },
    { question: "Is it possible to search for specific topics within the transcriptions?", answer: "Yes, our advanced search lets you find any keyword or topic discussed across all your meetings." },
    { question: "What formats are available for exporting the transcriptions?", answer: "You can export transcriptions and summaries as PDF, DOCX, or directly to Notion." }
  ];

  return (
    <div className="w-full relative">
      <HeroSection />
      
      {/* Technical Approach (How it Works) */}
      <section className="py-24 relative z-10" id="use-case">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Technical Approach</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From raw audio to actionable insights in six simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white/60 p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-2">Step {index + 1}</div>
                <div className="text-lg font-medium text-slate-800 flex items-start">
                  <span className="text-pink-400 mr-2 mt-1">➤</span> 
                  {step.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsCapabilities />



      {/* Integrations */}
      <section className="py-24 relative z-10 bg-white/40 border-t border-b border-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 tracking-tight">
            Sync and Transcribe Every<br/>Meeting Effortlessly
          </h2>
          
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-2xl mx-auto relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-center relative z-10 hover:scale-105 transition-transform"><div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">Z</div></div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-center relative z-10 hover:scale-105 transition-transform"><div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">T</div></div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-center relative z-10 hover:scale-105 transition-transform"><div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold">M</div></div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-center relative z-10 hover:scale-105 transition-transform"><div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400 font-bold">W</div></div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                Get Answers<br/>to Your Top Questions
              </h2>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
                <h3 className="font-bold text-slate-800 mb-2">Didn't get your answer yet?</h3>
                <p className="text-sm text-slate-500 mb-6">We provide clear instructions on how to set up your account and get started quickly.</p>
                <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white font-semibold text-sm w-full">Ask Question</button>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start justify-between cursor-pointer hover:border-pink-200 transition-colors">
                  <div>
                    <h4 className="font-semibold text-slate-800">{faq.question}</h4>
                    {idx === 0 && <p className="text-sm text-slate-500 mt-2">{faq.answer}</p>}
                  </div>
                  <div className="ml-4 flex-shrink-0 mt-1">
                    {idx === 0 ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <Plus className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Begin Your Recording<br/>Journey Now
              </h2>
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}