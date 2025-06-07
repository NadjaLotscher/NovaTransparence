import React, { useState } from 'react';
import { BookOpen, CheckCircle, PlayCircle, ExternalLink, Download, Users, Award } from 'lucide-react';

export const LearnPage: React.FC = () => {
  const [completedModules, setCompletedModules] = useState<string[]>(['1']);

  const modules = [
    {
      id: '1',
      title: 'Introduction to Freedom of Information',
      description: 'Learn the basics of your right to access public information',
      duration: '15 min',
      difficulty: 'Beginner',
      topics: ['What is FOI?', 'Your rights as a citizen', 'Types of information you can request'],
      completed: true
    },
    {
      id: '2',
      title: 'How to Write an Effective FOI Request',
      description: 'Master the art of crafting clear, specific, and successful requests',
      duration: '25 min',
      difficulty: 'Beginner',
      topics: ['Request structure', 'Being specific', 'Common pitfalls to avoid'],
      completed: false
    },
    {
      id: '3',
      title: 'Understanding Response Times and Appeals',
      description: 'Navigate the process when your request is delayed or denied',
      duration: '20 min',
      difficulty: 'Intermediate',
      topics: ['Response deadlines', 'Appeal processes', 'Your rights when denied'],
      completed: false
    },
    {
      id: '4',
      title: 'Analyzing and Interpreting Public Data',
      description: 'Turn raw information into compelling stories',
      duration: '30 min',
      difficulty: 'Intermediate',
      topics: ['Data analysis basics', 'Finding the story', 'Fact-checking techniques'],
      completed: false
    },
    {
      id: '5',
      title: 'Advanced Investigation Techniques',
      description: 'Professional methods for complex investigations',
      duration: '45 min',
      difficulty: 'Advanced',
      topics: ['Cross-referencing sources', 'Building timelines', 'Interview techniques'],
      completed: false
    }
  ];

  const resources = [
    {
      title: 'Swiss Transparency Law Guide',
      description: 'Official guide to transparency laws in Switzerland',
      type: 'External Link',
      url: 'https://loitransparence.ch',
      icon: ExternalLink
    },
    {
      title: 'FOI Request Templates',
      description: 'Ready-to-use templates for different types of requests',
      type: 'Download',
      icon: Download
    },
    {
      title: 'Government Directory',
      description: 'Contact information for government departments',
      type: 'Directory',
      icon: Users
    }
  ];

  const achievements = [
    { name: 'First Steps', description: 'Complete your first module', earned: true },
    { name: 'Knowledge Seeker', description: 'Complete 3 modules', earned: false },
    { name: 'FOI Expert', description: 'Complete all modules', earned: false },
    { name: 'Story Teller', description: 'Publish your first story', earned: false }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn Transparency Skills</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master the art of accessing public information and creating impactful stories. 
          From basic FOI requests to advanced investigation techniques.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl text-white p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{completedModules.length}/{modules.length}</div>
            <div className="text-blue-100">Modules Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">250</div>
            <div className="text-blue-100">Points Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-blue-100">Badges Earned</div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Overall Progress</span>
            <span>{Math.round((completedModules.length / modules.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedModules.length / modules.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Modules */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
          <div className="space-y-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 transition-all hover:shadow-xl ${
                  module.completed ? 'border-green-500' : 'border-blue-500'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                      {module.completed && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{module.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{module.duration}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {module.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    module.completed 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {module.completed ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Review</span>
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-5 h-5" />
                        <span>Start</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-1 h-1 bg-blue-500 rounded-full" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Resources */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{resource.description}</p>
                    <span className="text-xs text-blue-600">{resource.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}>
                    <Award className={`w-4 h-4 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.name}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl text-white p-6">
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-green-100 mb-4">
              Begin with our introductory module and work your way up to advanced investigation techniques.
            </p>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};