import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle, Search, LayoutDashboard, CheckSquare, Settings, Mic, FileText, Database, BrainCircuit, PlayCircle, Loader2 } from "lucide-react";

export default function DashboardPage() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [processingState, setProcessingState] = useState("idle"); // idle, processing, complete
  const [currentStep, setCurrentStep] = useState(0); // 0 to 4
  const [activeTab, setActiveTab] = useState("new"); // new, tasks, meetings

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    startFakeProcessing();
  };

  const startFakeProcessing = () => {
    setProcessingState("processing");
    setCurrentStep(1);
    
    // Step 2: Speech Recognition
    setTimeout(() => {
      setCurrentStep(2);
      // Step 3: AI processes transcript
      setTimeout(() => {
        setCurrentStep(3);
        // Step 4: AI generates insights
        setTimeout(() => {
          setCurrentStep(4);
          // Step 5: Store in DB and transition to complete (Step 6)
          setTimeout(() => {
            setProcessingState("complete");
          }, 1500);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const sidebarItems = [
    { id: "new", label: "New Meeting", icon: <Mic className="w-5 h-5" /> },
    { id: "tasks", label: "Overall Tasks", icon: <CheckSquare className="w-5 h-5" /> },
    { id: "specific-tasks", label: "Meeting Tasks", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "meetings", label: "Past Meetings", icon: <LayoutDashboard className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-[calc(100vh-80px)] w-full">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-100 flex flex-col p-4 z-20">
        <div className="space-y-2 mt-4 flex-grow">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "new") {
                  setProcessingState("idle");
                  setFile(null);
                }
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeTab === item.id 
                  ? "bg-pink-50 text-pink-600 border border-pink-100 shadow-sm" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <button className="flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all font-medium text-sm">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 relative overflow-hidden">
        
        {/* We keep the mesh background inside the main area to ensure it's visually consistent */}
        <div className="mesh-bg pointer-events-none opacity-40">
          <div className="mesh-blob-1"></div>
          <div className="mesh-blob-2"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <AnimatePresence mode="wait">
            
            {/* IDLE STATE: Upload / Step 1 */}
            {activeTab === "new" && processingState === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-10"
              >
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Record or Upload Meeting</h1>
                  <p className="text-slate-500">Step 1 of our process: Let's get your audio into the system.</p>
                </div>
                
                <div
                  className={`max-w-2xl mx-auto bg-white/60 backdrop-blur-xl border-2 border-dashed rounded-[2rem] p-16 text-center transition-all ${
                    isDragging ? "border-pink-400 bg-pink-50/80 shadow-lg" : "border-slate-200 hover:border-pink-300 hover:bg-white/80 shadow-sm"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white">
                    <UploadCloud className="w-10 h-10 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Drag and drop your audio file</h3>
                  <p className="text-slate-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                    We support MP3, WAV, and MP4 formats. Our AI will automatically transcribe and summarize your meeting.
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <label className="bg-gradient-to-r from-[#FF7A85] to-[#B06AB3] text-white px-8 py-3 rounded-full font-semibold cursor-pointer shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                      Select File
                      <input type="file" className="hidden" accept="audio/*,video/*" onChange={handleFileInput} />
                    </label>
                    <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2">
                      <Mic className="w-4 h-4"/> Record Live
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PROCESSING STATE: Steps 2-5 */}
            {activeTab === "new" && processingState === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-16 max-w-xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-xl border border-white"
              >
                <div className="text-center mb-8">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <svg className="animate-spin w-full h-full text-slate-100" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="w-8 h-8 text-pink-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Processing your meeting...</h3>
                  <p className="text-slate-500 text-sm mt-2">{file?.name || "audio_recording.mp3"}</p>
                </div>

                <div className="space-y-4">
                  {[
                    { step: 1, label: "Step 2: Speech Recognition (Audio to Text)", icon: <FileText className="w-4 h-4"/> },
                    { step: 2, label: "Step 3: AI Processing Transcript", icon: <BrainCircuit className="w-4 h-4"/> },
                    { step: 3, label: "Step 4: Generating Summary & Tasks", icon: <CheckSquare className="w-4 h-4"/> },
                    { step: 4, label: "Step 5: Saving to secure database", icon: <Database className="w-4 h-4"/> }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-3">
                      {currentStep > item.step ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center border border-green-200 shadow-sm shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      ) : currentStep === item.step ? (
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center border border-pink-200 shadow-sm shrink-0">
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center border border-slate-200 shrink-0">
                          <span className="text-xs font-bold">{item.step + 1}</span>
                        </div>
                      )}
                      <span className={`text-sm font-medium ${currentStep >= item.step ? 'text-slate-700' : 'text-slate-400'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* COMPLETE STATE: Step 6 Dashboard View */}
            {(processingState === "complete" || activeTab === "tasks" || activeTab === "specific-tasks" || activeTab === "meetings") && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Dashboard Header Bar */}
                <div className="bg-white/80 backdrop-blur-xl border border-white p-4 flex items-center justify-between rounded-2xl shadow-sm">
                  <h2 className="font-bold text-slate-800">
                    {activeTab === "tasks" ? "All Overall Tasks" : 
                     activeTab === "specific-tasks" ? "Specific Meeting Tasks" :
                     activeTab === "meetings" ? "Past Meetings Archive" : 
                     "Meeting Insights"}
                  </h2>
                  <div className="flex-1 max-w-md mx-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder={activeTab === "tasks" ? "Find specific tasks..." : "Search meetings or topics..."}
                        className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-pink-300 focus:bg-white transition-all text-slate-700"
                      />
                    </div>
                  </div>
                  {activeTab !== "new" && (
                    <button 
                      onClick={() => setActiveTab("new")}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all"
                    >
                      New Upload
                    </button>
                  )}
                </div>

                {/* Main Results View */}
                {(activeTab === "new" || activeTab === "meetings") && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Summary & Playback */}
                    <div className="lg:col-span-2 space-y-6">
                      
                      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Product Strategy Sync</h3>
                            <p className="text-sm text-slate-500">October 12, 2026 • 45 mins</p>
                          </div>
                          <div className="bg-slate-50 rounded-full px-4 py-2 flex items-center space-x-3 border border-slate-100">
                            <PlayCircle className="w-5 h-5 text-pink-500 cursor-pointer" />
                            <div className="w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-pink-400 w-1/3"></div>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">3:29</span>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <BrainCircuit className="w-4 h-4 text-pink-500" /> AI Summarise
                          </h4>
                          <div className="bg-pink-50/50 rounded-2xl p-5 border border-pink-100/50">
                            <p className="text-sm text-slate-700 leading-relaxed mb-4">
                              The team discussed the upcoming Q3 product roadmap. The primary focus will be on improving the user onboarding experience and integrating the new AI features into the core dashboard.
                            </p>
                            <p className="text-sm text-slate-700 leading-relaxed">
                              It was decided that the beta release should be pushed to November 1st to ensure stability. Marketing will start teasing the features next week. The engineering team raised concerns about the database scaling, so a migration to AWS was approved.
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <CheckSquare className="w-4 h-4 text-blue-500" /> Specific Meeting Tasks
                          </h4>
                          <div className="border border-slate-100 rounded-2xl overflow-hidden">
                            <table className="w-full text-sm text-left">
                              <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-100">
                                <tr>
                                  <th className="px-5 py-3 font-medium">Task</th>
                                  <th className="px-5 py-3 font-medium">Responsible</th>
                                  <th className="px-5 py-3 font-medium">Deadline</th>
                                  <th className="px-5 py-3 font-medium">Status</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 bg-white">
                                <tr className="hover:bg-slate-50">
                                  <td className="px-5 py-3 font-medium text-slate-800">Finalize Onboarding UI</td>
                                  <td className="px-5 py-3"><span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md text-xs font-semibold">Sarah J.</span></td>
                                  <td className="px-5 py-3 text-red-500 font-medium">Oct 15</td>
                                  <td className="px-5 py-3"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                  <td className="px-5 py-3 font-medium text-slate-800">Draft Beta Announcement</td>
                                  <td className="px-5 py-3"><span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-xs font-semibold">Mike R.</span></td>
                                  <td className="px-5 py-3 text-slate-500 font-medium">Oct 20</td>
                                  <td className="px-5 py-3"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold">Done</span></td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                  <td className="px-5 py-3 font-medium text-slate-800">Load Test API endpoints</td>
                                  <td className="px-5 py-3"><span className="bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-md text-xs font-semibold">Alex C.</span></td>
                                  <td className="px-5 py-3 text-slate-500 font-medium">Oct 25</td>
                                  <td className="px-5 py-3"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right Column - Decisions Timeline */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-full">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Key Decisions</h3>
                        
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-300 before:to-purple-300">
                          
                          <div className="relative flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white shrink-0 z-10 shadow-sm border-2 border-white"></div>
                            <div className="ml-4">
                              <p className="text-sm font-bold text-slate-800">Push Beta to Nov 1st</p>
                              <span className="text-xs text-slate-500 mt-1 block">To ensure stability before launch.</span>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white shrink-0 z-10 shadow-sm border-2 border-white"></div>
                            <div className="ml-4">
                              <p className="text-sm font-bold text-slate-800">Migrate to AWS</p>
                              <span className="text-xs text-slate-500 mt-1 block">Approved budget for better DB scaling.</span>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shrink-0 z-10 shadow-sm border-2 border-white"></div>
                            <div className="ml-4">
                              <p className="text-sm font-bold text-slate-800">Marketing Campaign</p>
                              <span className="text-xs text-slate-500 mt-1 block">Start teasing features next week.</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Overall Tasks View */}
                {activeTab === "tasks" && (
                   <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                      <div className="mb-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-slate-800">Overall Tasks Across All Meetings</h3>
                        <div className="flex gap-2">
                          <button className="text-xs px-3 py-1 rounded bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors">All</button>
                          <button className="text-xs px-3 py-1 rounded text-slate-500 font-medium hover:bg-slate-100 transition-colors">Pending</button>
                          <button className="text-xs px-3 py-1 rounded text-slate-500 font-medium hover:bg-slate-100 transition-colors">Completed</button>
                        </div>
                      </div>
                      <div className="border border-slate-100 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm text-left">
                          <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-100">
                            <tr>
                              <th className="px-5 py-3 font-medium">Task</th>
                              <th className="px-5 py-3 font-medium">Meeting Source</th>
                              <th className="px-5 py-3 font-medium">Responsible</th>
                              <th className="px-5 py-3 font-medium">Deadline</th>
                              <th className="px-5 py-3 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Finalize Onboarding UI</td>
                              <td className="px-5 py-4 text-slate-500">Q3 Strategy Sync</td>
                              <td className="px-5 py-4"><span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md text-xs font-semibold">Sarah J.</span></td>
                              <td className="px-5 py-4 text-red-500 font-medium">Oct 15</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Create new landing page mockups</td>
                              <td className="px-5 py-4 text-slate-500">Design Sync</td>
                              <td className="px-5 py-4"><span className="bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-md text-xs font-semibold">Tom H.</span></td>
                              <td className="px-5 py-4 text-red-500 font-medium">Oct 16</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Update Privacy Policy</td>
                              <td className="px-5 py-4 text-slate-500">Legal Review</td>
                              <td className="px-5 py-4"><span className="bg-pink-100 text-pink-700 px-2.5 py-1 rounded-md text-xs font-semibold">David K.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 18</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Draft Beta Announcement</td>
                              <td className="px-5 py-4 text-slate-500">Q3 Strategy Sync</td>
                              <td className="px-5 py-4"><span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-xs font-semibold">Mike R.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 20</td>
                              <td className="px-5 py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold">Done</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Send contract to Acme Corp</td>
                              <td className="px-5 py-4 text-slate-500">Client Call: Acme</td>
                              <td className="px-5 py-4"><span className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-md text-xs font-semibold">Emma W.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 21</td>
                              <td className="px-5 py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold">Done</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Set up social media ad budget</td>
                              <td className="px-5 py-4 text-slate-500">Marketing Brainstorm</td>
                              <td className="px-5 py-4"><span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-semibold">Jessica T.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 23</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                             <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Load Test API endpoints</td>
                              <td className="px-5 py-4 text-slate-500">Engineering Sync</td>
                              <td className="px-5 py-4"><span className="bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-md text-xs font-semibold">Alex C.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 25</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Review quarterly financials</td>
                              <td className="px-5 py-4 text-slate-500">Board Prep Meeting</td>
                              <td className="px-5 py-4"><span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-md text-xs font-semibold">Robert B.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 28</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                   </div>
                )}
                
                {/* Specific Meeting Tasks View */}
                {activeTab === "specific-tasks" && (
                   <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-800">Tasks for: <span className="text-pink-500">Q3 Strategy Sync</span></h3>
                        <p className="text-sm text-slate-500 mt-1">October 12, 2026 • 4 Tasks Found</p>
                      </div>
                      <div className="border border-slate-100 rounded-2xl overflow-hidden">
                        <table className="w-full text-sm text-left">
                          <thead className="text-xs text-slate-500 bg-slate-50 border-b border-slate-100">
                            <tr>
                              <th className="px-5 py-3 font-medium">Task Description</th>
                              <th className="px-5 py-3 font-medium">Responsible</th>
                              <th className="px-5 py-3 font-medium">Deadline</th>
                              <th className="px-5 py-3 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Finalize Onboarding UI</td>
                              <td className="px-5 py-4"><span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md text-xs font-semibold">Sarah J.</span></td>
                              <td className="px-5 py-4 text-red-500 font-medium">Oct 15</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Draft Beta Announcement</td>
                              <td className="px-5 py-4"><span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-xs font-semibold">Mike R.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 20</td>
                              <td className="px-5 py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold">Done</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Review AWS Migration Plan</td>
                              <td className="px-5 py-4"><span className="bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-md text-xs font-semibold">Alex C.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 22</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                            <tr className="hover:bg-slate-50 cursor-pointer">
                              <td className="px-5 py-4 font-medium text-slate-800">Schedule Follow-up with Marketing</td>
                              <td className="px-5 py-4"><span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-semibold">Jessica T.</span></td>
                              <td className="px-5 py-4 text-slate-500 font-medium">Oct 24</td>
                              <td className="px-5 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold">Pending</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                   </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}