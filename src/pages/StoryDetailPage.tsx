import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, Calendar, User, Tag, ArrowLeft, Flag, Share2 } from 'lucide-react';
import { mockStories } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

export const StoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const story = mockStories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Story not found</h1>
          <Link to="/stories" className="text-blue-600 hover:text-blue-700">
            ← Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    // Here you would normally submit to an API
    console.log('New comment:', newComment);
    setNewComment('');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would normally update via API
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          to="/stories"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Stories
        </Link>
      </div>

      {/* Story Header */}
      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {story.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Tag className="w-4 h-4 mr-1" />
                  {story.category}
                </span>
              )}
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(story.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            <button className="inline-flex items-center px-3 py-1 text-gray-500 hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {story.title}
          </h1>

          {/* Author */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
            <img
              src={story.author.avatar}
              alt={story.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{story.author.name}</p>
              {story.author.badges && story.author.badges.length > 0 && (
                <div className="flex space-x-2 mt-1">
                  {story.author.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Information Source */}
          {story.informationSource && (
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-2">Information Source</h3>
              <p className="text-green-700">{story.informationSource}</p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {story.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Engagement Actions */}
          <div className="flex items-center justify-between pt-8 border-t">
            <div className="flex items-center space-x-6">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isLiked
                    ? 'bg-red-100 text-red-600'
                    : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{story.likes + (isLiked ? 1 : 0)}</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-500">
                <MessageCircle className="w-5 h-5" />
                <span>{story.comments?.length || 0} comments</span>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
              <Flag className="w-4 h-4" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </article>

      {/* Comments Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

        {/* Add Comment Form */}
        {user && (
          <form onSubmit={handleSubmitComment} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex space-x-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <div className="flex-1">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts on this story..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Comments List */}
        <div className="space-y-6">
          {story.comments && story.comments.length > 0 ? (
            story.comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex space-x-4">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{comment.author.name}</h4>
                      <span className="text-gray-500 text-sm">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};