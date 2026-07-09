import { motion } from "framer-motion";
import { PlayCircle, Users, Settings, MessageSquare, Plus, AlignLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Meeting with <br/> AI-Powered Recording
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Effortlessly capture, transcribe, and analyze every meeting for improved productivity and clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Start 30 days free trial
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-white/40 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl border border-white/60 mb-24"
        >
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row">
            {/* Left side: Video Call */}
            <div className="relative w-full md:w-3/5 aspect-video bg-slate-900 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Main speaker" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><PlayCircle className="w-5 h-5 text-white" /></div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Settings className="w-5 h-5 text-white" /></div>
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold px-2">End</div>
                </div>
              </div>

              {/* Small Video Thumbs */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Participant" className="w-16 h-12 object-cover rounded-lg border-2 border-white/20" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Participant" className="w-16 h-12 object-cover rounded-lg border-2 border-white/20" />
              </div>
            </div>

            {/* Right side: Sidebar UI */}
            <div className="w-full md:w-2/5 p-6 bg-[#FDFDFD] flex flex-col gap-4">
              {/* Design Team Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between h-1/2">
                <div>
                  <h3 className="font-semibold text-slate-800">Design Team</h3>
                  <p className="text-xs text-slate-500 mb-4">7 members</p>
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt=""/>
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt=""/>
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt=""/>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+4</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 flex items-center"><MessageSquare className="w-3 h-3 mr-1"/> Bug Reports</span>
                  <span className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 flex items-center"><Plus className="w-3 h-3 mr-1"/> Feature Request</span>
                </div>
              </div>

              {/* Record & Summarise Card */}
              <div className="bg-[#FFF5FB] rounded-2xl p-5 border border-pink-100 h-1/2 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                  <AlignLeft className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Record & Summarise</h3>
                <p className="text-xs text-slate-500 mb-4 max-w-[85%]">Get quick, clear summaries of your chats with our bot for easy review.</p>
                <div className="bg-white/60 p-3 rounded-xl text-xs text-slate-700 leading-relaxed backdrop-blur-sm border border-white/80">
                  Provide a summary of the most frequently mentioned customer requests, concerns, and suggestions for the product, including key insights, trends, and actionable feedback.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto border-t border-slate-200/50 pt-8">
          <p className="text-sm font-medium text-slate-500">20+ partners have<br/>placed their trust in us.</p>
          <div className="flex items-center gap-8 text-slate-400 font-bold text-xl tracking-wider opacity-70">
            <div className="flex items-center space-x-2"><span className="w-6 h-6 rounded-full border-4 border-slate-400 block"></span><span>Dexign</span></div>
            <div className="flex items-center space-x-2"><span className="italic font-serif">WAYLINE</span></div>
            <div className="flex items-center space-x-2"><span className="font-mono">|||| Emblem</span></div>
            <div className="flex items-center space-x-2"><span>Optimal</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}