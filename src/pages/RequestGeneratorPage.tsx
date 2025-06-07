import React, { useState } from 'react';
import { FileText, Download, Copy, Check, HelpCircle, ExternalLink } from 'lucide-react';

export const RequestGeneratorPage: React.FC = () => {
  const [formData, setFormData] = useState({
    requestType: 'general',
    organization: '',
    specificInfo: '',
    timeframe: '',
    purpose: '',
    contactName: '',
    contactEmail: '',
    address: ''
  });
  const [generatedRequest, setGeneratedRequest] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const requestTypes = [
    { value: 'general', label: 'General Information Request' },
    { value: 'budget', label: 'Budget and Financial Records' },
    { value: 'contracts', label: 'Contracts and Agreements' },
    { value: 'meetings', label: 'Meeting Minutes and Records' },
    { value: 'correspondence', label: 'Email and Correspondence' },
    { value: 'reports', label: 'Reports and Studies' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRequest = () => {
    const currentDate = new Date().toLocaleDateString();
    
    const request = `Subject: Freedom of Information Request - ${formData.specificInfo || requestTypes.find(t => t.value === formData.requestType)?.label}

Dear Freedom of Information Officer,

I am writing to request access to information under the Freedom of Information Act. Please find the details of my request below:

REQUESTED INFORMATION:
${formData.specificInfo || 'Please specify the information you are seeking'}

ORGANIZATION/DEPARTMENT:
${formData.organization || '[Please specify the relevant organization or department]'}

TIMEFRAME:
${formData.timeframe || 'No specific timeframe specified'}

PURPOSE:
${formData.purpose || 'This information is requested for transparency and public interest purposes.'}

CONTACT INFORMATION:
Name: ${formData.contactName || '[Your Name]'}
Email: ${formData.contactEmail || '[Your Email]'}
Address: ${formData.address || '[Your Address]'}

I understand that under the Freedom of Information Act, I am entitled to receive a response within the statutory timeframe. If any fees apply to processing this request, please inform me in advance.

If you need any clarification regarding this request, please do not hesitate to contact me using the information provided above.

Thank you for your assistance in this matter.

Sincerely,
${formData.contactName || '[Your Name]'}

Date: ${currentDate}

---
This request was generated using TransparencyHub - Empowering Youth Journalism
For more information about FOI rights, visit: https://loitransparence.ch`;

    setGeneratedRequest(request);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedRequest);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadRequest = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedRequest], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'foi-request.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">FOI Request Generator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create professional Freedom of Information requests with our step-by-step generator. 
          Perfect for students and young journalists starting their transparency journey.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Before You Start</h3>
            <p className="text-blue-800 mb-3">
              Make sure you understand your rights and the FOI process. Each country and jurisdiction may have different rules and procedures.
            </p>
            <a
              href="https://loitransparence.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Learn about Swiss Transparency Laws
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Request Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Details</h2>
          
          <form className="space-y-6">
            {/* Request Type */}
            <div>
              <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Request
              </label>
              <select
                id="requestType"
                name="requestType"
                value={formData.requestType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {requestTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                Organization/Department *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="e.g., City Council, Department of Education, Ministry of Health"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Specific Information */}
            <div>
              <label htmlFor="specificInfo" className="block text-sm font-medium text-gray-700 mb-2">
                Specific Information Requested *
              </label>
              <textarea
                id="specificInfo"
                name="specificInfo"
                value={formData.specificInfo}
                onChange={handleInputChange}
                placeholder="Describe exactly what information you need. Be specific and clear."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-sm text-gray-500 mt-1">
                Tip: The more specific you are, the better your chances of getting the information you need.
              </p>
            </div>

            {/* Timeframe */}
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-2">
                Timeframe (Optional)
              </label>
              <input
                type="text"
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                placeholder="e.g., January 2023 to December 2023, Last 5 years"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Purpose */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                Purpose of Request (Optional)
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Explain why you need this information (research, journalism, public interest, etc.)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Mailing Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Your full mailing address (some organizations may require this)"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={generateRequest}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Generate Request
            </button>
          </form>
        </div>

        {/* Generated Request */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Generated Request</h2>
            {generatedRequest && (
              <div className="flex space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button
                  onClick={downloadRequest}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            )}
          </div>

          {generatedRequest ? (
            <div className="bg-gray-50 rounded-lg p-6 border">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                {generatedRequest}
              </pre>
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Fill out the form on the left to generate your FOI request.
              </p>
            </div>
          )}

          {generatedRequest && (
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Next Steps:</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Review the generated request carefully</li>
                <li>• Make any necessary adjustments</li>
                <li>• Send it to the appropriate FOI officer</li>
                <li>• Keep a copy for your records</li>
                <li>• Follow up if you don't receive a response within the legal timeframe</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};