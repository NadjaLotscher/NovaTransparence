import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, Upload, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const CreateStoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    informationSource: '',
    tags: ''
  });
  const [isPreview, setIsPreview] = useState(false);

  const categories = [
    'Government',
    'Education',
    'Environment',
    'Healthcare',
    'Transportation',
    'Housing',
    'Public Safety',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in the title and content fields.');
      return;
    }

    // Here you would normally submit to an API
    console.log('Story submitted:', formData);
    
    // Simulate success and redirect
    alert('Story published successfully!');
    navigate('/stories');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log('Files selected:', files);
    }
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to create a story</h1>
          <p className="text-gray-600">You need to be signed in to publish stories on TransparencyHub.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Create Your Story</h1>
        <p className="text-lg text-gray-600">
          Share your investigation, findings, or insights to help create a more transparent world.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with Preview Toggle */}
        <div className="bg-gray-50 px-6 py-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {isPreview ? 'Preview' : 'Write Your Story'}
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
                  {formData.category}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {formData.title || 'Your Story Title'}
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
                <h3 className="font-semibold text-green-800 mb-2">Information Source</h3>
                <p className="text-green-700">{formData.informationSource}</p>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {formData.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph || 'Your story content will appear here...'}
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
                Story Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter an engaging title for your story"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={200}
              />
              <p className="text-sm text-gray-500 mt-1">{formData.title.length}/200 characters</p>
            </div>

            {/* Category and Information Source */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
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
                  Information Source
                </label>
                <input
                  type="text"
                  id="informationSource"
                  name="informationSource"
                  value={formData.informationSource}
                  onChange={handleInputChange}
                  placeholder="e.g., FOI request #2024-123, Public records"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">What information did you obtain?</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Story Content *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your story here. Describe your investigation, findings, and why it matters..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">{formData.content.length} characters</p>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Supporting Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Upload images, PDFs, or other supporting documents</p>
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
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
                >
                  Choose Files
                </label>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags (Optional)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="transparency, government, budget (separated by commas)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Help others find your story with relevant tags</p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6 border-t">
              <p className="text-sm text-gray-600">
                By publishing, you agree to our community guidelines and terms of service.
              </p>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-5 h-5 mr-2" />
                Publish Story
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};