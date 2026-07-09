import { Sparkles, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <Sparkles className="h-5 w-5 text-slate-800" />
              <span className="font-bold text-lg tracking-tight text-slate-900">MeetMind</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              We provide tools for capturing, transcribing, and analyzing your meetings effortlessly.
            </p>
          </div>
          
          <div className="flex space-x-12">
            <div>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Use Cases</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Contact</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors font-medium">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 MeetMind. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-slate-700 transition-colors"><Globe className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}