import { motion } from "framer-motion";
import { PlayCircle, CheckCircle, Search, Hash } from "lucide-react";

export default function BenefitsCapabilities() {
  return (
    <section className="py-24 bg-white/40 backdrop-blur-sm border-t border-b border-white/50" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Discover the Key Benefits and<br/>Capabilities We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1: AI meeting summarization */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">AI meeting summarization</h3>
            </div>
            <p className="text-slate-500 text-sm mb-8">Get concise summaries of your meetings with AI, highlighting key points and action items for quick review.</p>
            
            <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-100 flex-1 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-2">Core Features</div>
                  <div className="bg-white px-4 py-2.5 rounded-xl text-xs text-slate-600 shadow-sm border border-slate-100 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span> Instant screen recording functionality with easy sharing.</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-2">User Experience (UX) Focus</div>
                  <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-pink-400 rounded-l-xl"></div>
                    <div className="space-y-3">
                      <div className="flex items-center text-xs text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span> A clean, intuitive interface with a minimal learning curve.</div>
                      <div className="flex items-center text-xs text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span> Quick access to previously recorded sessions.</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-700 mb-2">Challenges Discussed</div>
                  <div className="bg-white px-4 py-2.5 rounded-xl text-xs text-slate-600 shadow-sm border border-slate-100 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span> Privacy concerns related to cloud storage and data handling.</div>
                </div>
              </div>
              {/* Fade gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8F9FB] to-transparent z-20"></div>
            </div>
          </motion.div>

          {/* Card 2: Keep your meeting on track */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">Keep your meeting on track</h3>
            <p className="text-slate-500 text-sm mb-8">Keep meetings organized with real-time insights and summaries for efficient tracking.</p>
            
            <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-100 flex-1 flex flex-col items-center">
              <h4 className="text-sm font-semibold text-slate-800 mb-6 text-center">Weekly Project Summarization</h4>
              <div className="w-full max-w-sm space-y-4">
                <div className="flex space-x-3">
                  <div className="mt-1 w-5 h-5 rounded flex items-center justify-center bg-white border border-slate-200"><CheckCircle className="w-3 h-3 text-slate-300" /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">Completion</div>
                    <div className="text-[10px] text-slate-500">What did they do so far?</div>
                    <div className="text-[10px] text-slate-500">Appreciate them for rest of the work!</div>
                  </div>
                </div>
                
                <div className="flex space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100 relative">
                  <div className="absolute -left-[11px] top-4 w-[10px] h-[1px] bg-slate-200"></div>
                  <div className="mt-1 w-5 h-5 rounded flex items-center justify-center bg-pink-50 border border-pink-100"><CheckCircle className="w-3 h-3 text-pink-500" /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">Constraint</div>
                    <div className="text-[10px] text-slate-500">What the obstacles they encounter?</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <div className="mt-1 w-5 h-5 rounded flex items-center justify-center bg-white border border-slate-200"><CheckCircle className="w-3 h-3 text-slate-300" /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-700 mb-1">Plan</div>
                    <div className="text-[10px] text-slate-500">What is the plan for this week?</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Playback with Transcription */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">Playback with Transcription</h3>
            <p className="text-slate-500 text-sm mb-8">Seamlessly play audio while viewing real-time transcriptions, making it easy to follow and review key details.</p>
            
            <div className="bg-[#F8F9FB] rounded-2xl p-6 border border-slate-100 flex-1">
              {/* Audio Player mock */}
              <div className="bg-white rounded-full px-4 py-2 flex items-center space-x-4 mb-6 shadow-sm border border-slate-100">
                <PlayCircle className="w-5 h-5 text-slate-400" />
                <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-800 w-1/3"></div>
                </div>
                <div className="text-xs text-slate-400 font-medium">3:29</div>
                <Search className="w-4 h-4 text-slate-400" />
              </div>

              {/* Transcript lines */}
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=50&q=80" className="w-6 h-6 rounded-full" alt="Mark" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800 mb-1">Mark <span className="text-slate-400 font-normal">3:14</span></div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We need to capture every word for accuracy, but the AI should also be able to summarize <span className="bg-pink-100 text-pink-800 px-1 rounded">the meeting afterward</span>, highlighting key discussions and decisions.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80" className="w-6 h-6 rounded-full" alt="John" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800 mb-1">John <span className="text-slate-400 font-normal">3:31</span></div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Got it. For the summary, do you want a brief overview with actionable items or a more detailed breakdown?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Take Live Meeting Footnotes */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">Take Live Meeting Footnotes</h3>
            <p className="text-slate-500 text-sm mb-8">Easily capture and organize key points in real-time during meetings for effective review and tracking.</p>
            
            <div className="bg-transparent rounded-2xl flex-1 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=300&q=80" className="rounded-xl w-full h-32 object-cover shadow-sm" alt="Meeting 1" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" className="rounded-xl w-full h-32 object-cover shadow-sm" alt="Meeting 2" />
              </div>
              <div className="bg-white rounded-full px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between">
                <div className="flex space-x-3">
                  <Hash className="w-4 h-4 text-slate-400" />
                  <span className="w-4 h-4 rounded bg-slate-100"></span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs text-slate-500 font-medium">0:30:25</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300"></span>
                  <span className="w-4 h-4 rounded-full border-2 border-slate-300"></span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}