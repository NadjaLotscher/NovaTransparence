import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Calendar, User, Tag } from 'lucide-react';
import { Story } from '../../types/Story';

interface StoryCardProps {
  story: Story;
  featured?: boolean;
  compact?: boolean;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, featured = false, compact = false }) => {
  const cardClasses = compact
    ? "bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    : featured
    ? "bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
    : "bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1";

  return (
    <article className={cardClasses}>
      <div className={compact ? "p-4" : "p-6"}>
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          {story.category && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Tag className="w-3 h-3 mr-1" />
              {story.category}
            </span>
          )}
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(story.createdAt).toLocaleDateString()}
          </div>
        </div>

        {/* Title */}
        <Link to={`/stories/${story.id}`}>
          <h3 className={`font-bold text-gray-900 hover:text-blue-600 transition-colors mb-3 ${
            compact ? "text-lg line-clamp-2" : featured ? "text-xl" : "text-lg"
          }`}>
            {story.title}
          </h3>
        </Link>

        {/* Excerpt */}
        {!compact && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {story.content.substring(0, 150)}...
          </p>
        )}

        {/* Information Source */}
        {story.informationSource && !compact && (
          <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
            <p className="text-sm text-green-700">
              <strong>Information obtained:</strong> {story.informationSource}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center space-x-2">
            <img
              src={story.author.avatar}
              alt={story.author.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{story.author.name}</p>
              {featured && story.author.badges && story.author.badges.length > 0 && (
                <p className="text-xs text-blue-600">{story.author.badges[0]}</p>
              )}
            </div>
          </div>

          {/* Engagement */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{story.likes}</span>
            </button>
            <Link
              to={`/stories/${story.id}`}
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{story.comments?.length || 0}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
