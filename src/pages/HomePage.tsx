import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, BookOpen, PenTool, Star, TrendingUp } from 'lucide-react';
import { StoryCard } from '../components/stories/StoryCard';
import { mockStories } from '../data/mockData';

export const HomePage: React.FC = () => {
  const featuredStories = mockStories.slice(0, 3);
  const topStories = mockStories.filter(story => story.likes > 50).slice(0, 4);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empower Your Voice Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Transparency</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn your rights, request public information, and create impactful stories that make a difference. 
            Join a community of young journalists fighting for transparency and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learn"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/create-story"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <PenTool className="w-5 h-5 mr-2" />
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">2,847</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">1,234</h3>
              <p className="text-gray-600">Stories Published</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">156</h3>
              <p className="text-gray-600">FOI Requests Filed</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">89</h3>
              <p className="text-gray-600">Awards Given</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Stories</h2>
          <Link
            to="/stories"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Stories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} featured />
          ))}
        </div>
      </section>

      {/* Top Stories */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Trending This Week</h2>
            </div>
            <Link
              to="/rankings"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View Rankings
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topStories.map((story, index) => (
              <div key={story.id} className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                <StoryCard story={story} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of young journalists who are using transparency to create positive change in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-generator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Generate FOI Request
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contest"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Join Contest
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};