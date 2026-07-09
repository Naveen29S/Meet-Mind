import { motion } from "framer-motion";
import { FileText, ListTodo, UserCog, History, Search, Cloud } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Instant Meeting Summary",
      description: "AI instantly generates concise meeting summaries capturing the essence.",
      icon: <FileText className="w-8 h-8 text-brand-purple" />,
      color: "from-brand-purple/20 to-transparent",
      borderColor: "group-hover:border-brand-purple/50"
    },
    {
      title: "Action Item Extraction",
      description: "Automatically finds all tasks discussed and formats them neatly.",
      icon: <ListTodo className="w-8 h-8 text-brand-blue" />,
      color: "from-brand-blue/20 to-transparent",
      borderColor: "group-hover:border-brand-blue/50"
    },
    {
      title: "Speaker Identification",
      description: "Assigns each task to the correct speaker with high accuracy.",
      icon: <UserCog className="w-8 h-8 text-brand-cyan" />,
      color: "from-brand-cyan/20 to-transparent",
      borderColor: "group-hover:border-brand-cyan/50"
    },
    {
      title: "Decision Tracking",
      description: "Stores every important decision in an easy-to-read timeline.",
      icon: <History className="w-8 h-8 text-brand-purple" />,
      color: "from-brand-purple/20 to-transparent",
      borderColor: "group-hover:border-brand-purple/50"
    },
    {
      title: "Search Archive",
      description: "Search any previous meeting by keyword, topic or person.",
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      color: "from-brand-blue/20 to-transparent",
      borderColor: "group-hover:border-brand-blue/50"
    },
    {
      title: "Cloud Storage",
      description: "All meeting history stored securely in the cloud forever.",
      icon: <Cloud className="w-8 h-8 text-brand-cyan" />,
      color: "from-brand-cyan/20 to-transparent",
      borderColor: "group-hover:border-brand-cyan/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Everything you need for <span className="text-gradient">smart meetings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MeetMind provides a complete suite of AI tools to turn your unstructured meeting conversations into structured, actionable data.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`glass-card p-6 group transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${feature.color} border border-border ${feature.borderColor}`}
            >
              <div className="bg-background/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}