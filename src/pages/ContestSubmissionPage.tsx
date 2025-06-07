import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trophy, ArrowLeft, CheckCircle, Calendar, Award, Target } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { mockStories } from '../data/mockData';
import { StoryCard } from '../components/stories/StoryCard';

export const ContestSubmissionPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get user's stories
  const userStories = mockStories.filter(story => story.author.name === user?.name);

  const contestCategories = [
    {
      id: 'investigation',
      title: 'Best Investigation',
      description: 'Most thorough research and fact-finding',
      prize: '$2,000',
      icon: Target
    },
    {
      id: 'impact',
      title: 'Community Impact',
      description: 'Story with the greatest positive community effect',
      prize: '$2,000',
      icon: Award
    },
    {
      id: 'rising',
      title: 'Rising Journalist',
      description: 'Best story from first-time participants',
      prize: '$1,000',
      icon: Trophy
    }
  ];

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to submit to contest</h1>
          <p className="text-gray-600">You need to be logged in to submit your stories to the contest.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!selectedStory || !selectedCategory) {
      alert('Please select both a story and a contest category.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const selectedStoryData = userStories.find(story => story.id === selectedStory);
    const categoryData = contestCategories.find(cat => cat.id === selectedCategory);
    
    alert(`Successfully submitted "${selectedStoryData?.title}" to the "${categoryData?.title}" category!`);
    
    setIsSubmitting(false);
    navigate('/contest');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/contest"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contest
        </Link>
        
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-300" />
            <h1 className="text-3xl md:text-4xl font-bold">Submit Your Story</h1>
          </div>
          <p className="text-lg text-purple-100 leading-relaxed">
            Choose one of your published stories and select the contest category that best fits your work. 
            Make sure your story demonstrates strong investigative journalism and transparency principles.
          </p>
        </div>
      </div>

      {userStories.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Stories to Submit</h2>
          <p className="text-gray-600 mb-6">
            You need to publish at least one story before you can submit to the contest.
          </p>
          <Link
            to="/create-story"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Your First Story
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Story Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Story</h2>
            <div className="space-y-6">
              {userStories.map((story) => (
                <div
                  key={story.id}
                  className={`relative cursor-pointer transition-all ${
                    selectedStory === story.id
                      ? 'ring-2 ring-blue-500 ring-opacity-50 transform scale-[1.02]'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedStory(story.id)}
                >
                  {selectedStory === story.id && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          </div>

          {/* Category Selection & Submission */}
          <div className="space-y-6">
            {/* Contest Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Contest Category</h3>
              <div className="space-y-4">
                {contestCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedCategory === category.id ? 'bg-blue-600' : 'bg-gray-100'
                      }`}>
                        <category.icon className={`w-5 h-5 ${
                          selectedCategory === category.id ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{category.title}</h4>
                          <span className="text-sm font-medium text-green-600">{category.prize}</span>
                        </div>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Guidelines */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Submission Guidelines</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Stories must demonstrate transparency principles</li>
                <li>• Include credible sources and evidence</li>
                <li>• Focus on public interest topics</li>
                <li>• Follow ethical journalism standards</li>
                <li>• One submission per category allowed</li>
              </ul>
            </div>

            {/* Contest Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Dates</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Submission Deadline</p>
                    <p className="text-sm text-gray-600">March 31, 2024 - 11:59 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-gray-900">Winners Announced</p>
                    <p className="text-sm text-gray-600">April 7, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedStory || !selectedCategory || isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
                selectedStory && selectedCategory && !isSubmitting
                  ? 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit to Contest'
              )}
            </button>

            {(!selectedStory || !selectedCategory) && (
              <p className="text-sm text-gray-500 text-center">
                Please select both a story and category to submit
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};