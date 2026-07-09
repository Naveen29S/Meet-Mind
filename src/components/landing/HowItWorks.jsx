import { motion } from "framer-motion";
import { UploadCloud, FileAudio, BrainCircuit, FileSignature, Database, LayoutDashboard } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Upload Meeting Audio",
      description: "Drag and drop your recorded meeting audio or video file.",
      icon: <UploadCloud className="w-6 h-6 text-brand-purple" />,
      color: "border-brand-purple"
    },
    {
      title: "Speech Recognition",
      description: "Converts audio into highly accurate text transcripts.",
      icon: <FileAudio className="w-6 h-6 text-brand-blue" />,
      color: "border-brand-blue"
    },
    {
      title: "Gemini AI Analysis",
      description: "Our advanced AI analyzes the transcript for context and meaning.",
      icon: <BrainCircuit className="w-6 h-6 text-brand-cyan" />,
      color: "border-brand-cyan"
    },
    {
      title: "Generate Intelligence",
      description: "Outputs Summary, Decisions, Action Items, Persons, and Deadlines.",
      icon: <FileSignature className="w-6 h-6 text-brand-purple" />,
      color: "border-brand-purple"
    },
    {
      title: "Secure Storage",
      description: "Everything is safely stored inside our Supabase Database.",
      icon: <Database className="w-6 h-6 text-brand-blue" />,
      color: "border-brand-blue"
    },
    {
      title: "Interactive Dashboard",
      description: "View, edit, and share the results beautifully.",
      icon: <LayoutDashboard className="w-6 h-6 text-brand-cyan" />,
      color: "border-brand-cyan"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10 bg-black/5 dark:bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            How <span className="text-gradient">MeetMind</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            From raw audio to actionable insights in six simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan transform md:-translate-x-1/2 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="glass-card p-6 border border-white/5 hover:border-white/20 transition-colors">
                    <h3 className="text-xl font-bold mb-2 flex items-center space-x-2 md:inline-flex md:space-x-0">
                      <span className="md:hidden text-muted-foreground text-sm font-mono mr-2">Step {index + 1}</span>
                      <span className="text-foreground">{step.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 shadow-lg flex items-center justify-center z-10 glass" style={{ borderColor: 'var(--border)' }}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.color} bg-background`}>
                    {step.icon}
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}