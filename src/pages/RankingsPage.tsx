import React, { useState } from 'react';
import { Trophy, TrendingUp, Medal, Crown, Award, Calendar } from 'lucide-react';
import { StoryCard } from '../components/stories/StoryCard';
import { mockStories } from '../data/mockData';

export const RankingsPage: React.FC = () => {
  const [timeframe, setTimeframe] = useState('week');
  
  const timeframes = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'all', label: 'All Time' }
  ];

  const topStories = mockStories
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 10);

  const topAuthors = [
    { id: '1', name: 'Alex Chen', avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2', stories: 8, likes: 234, points: 1850 },
    { id: '2', name: 'Jordan Williams', avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2', stories: 6, likes: 198, points: 1650 },
    { id: '3', name: 'Sam Taylor', avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2', stories: 5, likes: 167, points: 1420 },
    { id: '4', name: 'Casey Johnson', avatar: 'https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2', stories: 4, likes: 145, points: 1280 },
    { id: '5', name: 'Morgan Davis', avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2', stories: 7, likes: 189, points: 1560 }
  ].sort((a, b) => b.points - a.points);

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return null;
    }
  };

  const getRankColor = (position: number) => {
    switch (position) {
      case 1:
        return 'from-yellow-400 to-yellow-600';
      case 2:
        return 'from-gray-300 to-gray-500';
      case 3:
        return 'from-amber-400 to-amber-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Rankings</h1>
        <p className="text-xl text-gray-600">
          Celebrating the most impactful stories and dedicated contributors in our transparency community.
        </p>
      </div>

      {/* Timeframe Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setTimeframe(tf.value)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                timeframe === tf.value
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Stories */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Top Stories</h2>
          </div>

          <div className="space-y-6">
            {topStories.map((story, index) => (
              <div key={story.id} className="relative">
                <div className={`absolute -left-4 -top-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 bg-gradient-to-r ${getRankColor(index + 1)}`}>
                  {index + 1}
                </div>
                <div className={`${index < 3 ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`}>
                  <StoryCard story={story} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Contributors */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <Trophy className="w-7 h-7 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900">Top Contributors</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {topAuthors.map((author, index) => (
              <div
                key={author.id}
                className={`p-6 ${index !== topAuthors.length - 1 ? 'border-b border-gray-200' : ''} ${
                  index < 3 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className={`w-12 h-12 rounded-full ${index < 3 ? 'ring-2 ring-yellow-400' : ''}`}
                    />
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-r ${getRankColor(index + 1)}`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-900">{author.name}</h3>
                      {getRankIcon(index + 1)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>{author.stories} stories</span>
                      <span>{author.likes} likes</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{author.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Monthly Challenge */}
          <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6" />
              <h3 className="text-xl font-bold">This Month's Challenge</h3>
            </div>
            <p className="text-purple-100 mb-4">
              Focus on government transparency stories. Extra points for FOI-based investigations!
            </p>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Challenge Progress</span>
                <span>12/25 submissions</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '48%' }} />
              </div>
            </div>
          </div>

          {/* Categories Leaderboard */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Category Leaders</h3>
            <div className="space-y-3">
              {[
                { category: 'Government', leader: 'Alex Chen', stories: 15 },
                { category: 'Education', leader: 'Jordan Williams', stories: 8 },
                { category: 'Environment', leader: 'Sam Taylor', stories: 12 },
                { category: 'Healthcare', leader: 'Morgan Davis', stories: 6 }
              ].map((cat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900">{cat.category}</div>
                    <div className="text-sm text-gray-600">{cat.leader}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{cat.stories}</div>
                    <div className="text-xs text-gray-500">stories</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};