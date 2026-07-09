import { motion } from "framer-motion";
import { Mic, Search, Clock, Calendar, CheckSquare, BarChart } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            A Dashboard Designed for <span className="text-gradient">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your meetings, beautifully organized.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden p-1 max-w-5xl mx-auto"
        >
          {/* Dashboard Header Bar */}
          <div className="bg-muted/50 border-b border-border p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  type="text" 
                  disabled
                  placeholder="Search keywords, decisions, people..." 
                  className="w-full bg-background border border-border rounded-full py-1.5 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>
            <button className="bg-brand-purple text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center space-x-2">
              <Mic className="w-4 h-4" />
              <span>Upload Audio</span>
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 bg-background/50 grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-b-xl">
            
            {/* Left Column - Meeting Info & Summary */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Q3 Product Strategy Sync</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /> <span>Oct 12, 2026</span></span>
                  <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /> <span>45 mins</span></span>
                </div>
              </div>

              <div className="glass-card p-5 border border-border">
                <h4 className="font-semibold mb-3 text-brand-purple flex items-center space-x-2">
                  <BarChart className="w-5 h-5" /> <span>AI Summary</span>
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The team discussed the upcoming Q3 product roadmap. The primary focus will be on improving the user onboarding experience and integrating the new AI features into the core dashboard. It was decided that the beta release should be pushed to November 1st to ensure stability. Marketing will start teasing the features next week.
                </p>
              </div>

              <div className="glass-card p-5 border border-border">
                <h4 className="font-semibold mb-4 text-brand-blue flex items-center space-x-2">
                  <CheckSquare className="w-5 h-5" /> <span>Action Items</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50 rounded-t-lg">
                      <tr>
                        <th className="px-4 py-3 font-medium">Task</th>
                        <th className="px-4 py-3 font-medium">Assigned To</th>
                        <th className="px-4 py-3 font-medium">Deadline</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3">Finalize Onboarding UI</td>
                        <td className="px-4 py-3"><span className="bg-brand-purple/20 text-brand-purple px-2 py-1 rounded text-xs">Sarah J.</span></td>
                        <td className="px-4 py-3 text-muted-foreground">Oct 15</td>
                        <td className="px-4 py-3"><span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-xs">Pending</span></td>
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3">Draft Beta Announcement</td>
                        <td className="px-4 py-3"><span className="bg-brand-blue/20 text-brand-blue px-2 py-1 rounded text-xs">Mike R.</span></td>
                        <td className="px-4 py-3 text-muted-foreground">Oct 20</td>
                        <td className="px-4 py-3"><span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs">Done</span></td>
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3">Load Test API endpoints</td>
                        <td className="px-4 py-3"><span className="bg-brand-cyan/20 text-brand-cyan px-2 py-1 rounded text-xs">Alex Chen</span></td>
                        <td className="px-4 py-3 text-muted-foreground">Oct 25</td>
                        <td className="px-4 py-3"><span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-xs">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Decision Timeline */}
            <div className="space-y-6">
              <div className="glass-card p-5 border border-border h-full">
                <h4 className="font-semibold mb-4 text-brand-cyan">Decision Timeline</h4>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-brand-purple bg-background text-brand-purple shrink-0 ml-[-9px] md:ml-0 md:mr-[17px] z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] md:ml-[1.5rem] pl-4 md:pl-0">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-brand-purple mb-1">10:15 AM</span>
                        <p className="text-sm text-foreground">Agreed to push Beta release to Nov 1st.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-brand-blue bg-background text-brand-blue shrink-0 ml-[-9px] md:ml-[17px] md:mr-0 z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] md:mr-[1.5rem] pl-4 md:pr-4 md:text-right">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-brand-blue mb-1">10:30 AM</span>
                        <p className="text-sm text-foreground">Selected AWS for new DB cluster.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-brand-cyan bg-background text-brand-cyan shrink-0 ml-[-9px] md:ml-0 md:mr-[17px] z-10"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] md:ml-[1.5rem] pl-4 md:pl-0">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-brand-cyan mb-1">10:42 AM</span>
                        <p className="text-sm text-foreground">Approved budget for marketing push.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}