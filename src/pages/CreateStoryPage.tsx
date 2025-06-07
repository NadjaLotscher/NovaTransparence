import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, Upload, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const CreateStoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // State for investigation points (like clues collected)
  const [investigationPoints, setInvestigationPoints] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    informationSource: '',
    tags: ''
  });
  const [isPreview, setIsPreview] = useState(false);

  const categories = [
    'Corruption',
    'Education',
    'Environment',
    'Health',
    'Transport',
    'Housing',
    'Public Safety',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Simulate gathering clues for the game
  const gatherClues = () => {
    const newPoints = Math.floor(Math.random() * 3) + 1; // 1 to 3 points
    setInvestigationPoints(prev => prev + newPoints);
    alert(`You collected ${newPoints} investigation points! Total: ${investigationPoints + newPoints}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please provide a title and write your article!');
      return;
    }
    if (investigationPoints < 5) {
      alert('To publish your article, you need at least 5 investigation points. Keep gathering info!');
      return;
    }

    // Here you could call an API to submit the data
    console.log('Article published:', formData);

    alert('Congratulations! Your article has been successfully published.');
    navigate('/stories');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Logic to handle uploaded files
      console.log('Selected files:', files);
      alert(`${files.length} files added to your article.`);
    }
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Log in to become a journalist</h1>
          <p className="text-gray-600">Only registered journalists can publish articles.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Become an investigative journalist!</h1>
        <p className="text-lg text-gray-600">
          Choose your article topic, gather evidence, write your article, and publish to reveal the truth.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with Preview Toggle */}
        <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {isPreview ? 'Preview your article' : 'Write your article'}
          </h2>
          <button
            type="button"
            onClick={() => setIsPreview(!isPreview)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isPreview ? <X className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
            {isPreview ? 'Edit' : 'Preview'}
          </button>
        </div>

        {isPreview ? (
          /* Preview Mode */
          <div className="p-8">
            <div className="mb-6">
              {formData.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  Category: {formData.category}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {formData.title || 'Your article title'}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">Just now</p>
                </div>
              </div>
            </div>

            {formData.informationSource && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
                <h3 className="font-semibold text-green-800 mb-2">Information sources</h3>
                <p className="text-green-700">{formData.informationSource}</p>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {formData.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph || 'Your article content will appear here...'}
                </p>
              ))}
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Article title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Give your article an engaging title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={200}
              />
              <p className="text-sm text-gray-500 mt-1">{formData.title.length}/200 characters</p>
            </div>

            {/* Category and Information Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose your article category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="informationSource" className="block text-sm font-medium text-gray-700 mb-2">
                  Information sources
                </label>
                <input
                  type="text"
                  id="informationSource"
                  name="informationSource"
                  value={formData.informationSource}
                  onChange={handleInputChange}
                  placeholder="e.g. document access requests, witnesses..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">What evidence have you gathered?</p>
              </div>
            </div>

            {/* Button to gather investigation points */}
            <div className="mb-4">
              <button
                type="button"
                onClick={gatherClues}
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Gather clues
              </button>
              <p className="mt-2 text-sm text-gray-600">Investigation points collected: {investigationPoints}</p>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Write your article *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your investigation, discoveries, and why it matters..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">{formData.content.length} characters</p>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Evidence documents (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Add images, PDFs, or other documents</p>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 cursor-pointer transition-colors"
                >
                  Choose files
                </label>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags (optional)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="e.g. transparency, corruption, budget (comma separated)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Help readers find your article</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6 border-t">
              <p className="text-sm text-gray-600">
                By publishing, you agree to respect our community guidelines.
              </p>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-5 h-5 mr-2" />
                Publish article
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
