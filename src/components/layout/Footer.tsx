import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TransparencyHub</h3>
                <p className="text-gray-400 text-sm">Empowering Youth Journalism</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A platform dedicated to empowering young people to understand their rights to access public information, 
              create impactful stories, and participate in democratic processes through transparency.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://loitransparence.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Swiss Transparency Law</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Learn FOI</Link></li>
              <li><Link to="/request-generator" className="text-gray-400 hover:text-white transition-colors">Request Generator</Link></li>
              <li><Link to="/contest" className="text-gray-400 hover:text-white transition-colors">Current Contest</Link></li>
              <li><Link to="/rankings" className="text-gray-400 hover:text-white transition-colors">Top Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li>
                <a href="mailto:support@transparencyhub.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TransparencyHub. Built to empower young journalists and promote democratic transparency.
          </p>
        </div>
      </div>
    </footer>
  );
};