import React from 'react';
import { Edit, Award, BookOpen, Heart, MessageCircle, Calendar, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { StoryCard } from '../components/stories/StoryCard';
import { mockStories } from '../data/mockData';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to view your profile</h1>
        </div>
      </div>
    );
  }

  const userStories = mockStories.filter(story => story.author.name === user.name);
  const totalLikes = userStories.reduce((sum, story) => sum + story.likes, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-blue-100 mb-4">Member since {new Date(user.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
              {user.badges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-yellow-500 text-yellow-900 rounded-full text-sm font-medium"
                >
                  <Award className="w-4 h-4 mr-1" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{user.storiesCount}</h3>
          <p className="text-gray-600">Stories Published</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{totalLikes}</h3>
          <p className="text-gray-600">Total Likes</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{user.points}</h3>
          <p className="text-gray-600">Points Earned</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">45</h3>
          <p className="text-gray-600">Comments Made</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Stories */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Stories</h2>
            <button className="text-blue-600 hover:text-blue-700 font-semibold">
              View All ({userStories.length})
            </button>
          </div>
          
          {userStories.length > 0 ? (
            <div className="space-y-6">
              {userStories.slice(0, 3).map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No stories yet</h3>
              <p className="text-gray-600 mb-4">Start your transparency journey by sharing your first story.</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Create Your First Story
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>FOI Mastery</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Investigation Skills</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Story Writing</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Published story', item: 'Hidden Budget Allocations', time: '2 days ago' },
                { action: 'Earned badge', item: 'FOI Expert', time: '1 week ago' },
                { action: 'Completed module', item: 'Advanced Investigation', time: '2 weeks ago' },
                { action: 'Joined contest', item: 'March Transparency', time: '3 weeks ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-gray-900">{activity.action}</span>
                    <span className="text-blue-600 font-medium"> {activity.item}</span>
                  </div>
                  <span className="text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg text-left transition-colors">
                Create New Story
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg text-left transition-colors">
                Continue Learning
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg text-left transition-colors">
                View Contest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};