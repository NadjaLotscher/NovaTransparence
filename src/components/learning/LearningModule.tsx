import React, { useState } from 'react';
import { X, CheckCircle, XCircle, ArrowRight, ArrowLeft, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface LearningModuleProps {
  moduleId: string;
  onClose: () => void;
  onComplete: (moduleId: string) => void;
}

export const LearningModule: React.FC<LearningModuleProps> = ({ moduleId, onClose, onComplete }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const sections = [
    {
      title: "What is FOI?",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">FOI stands for Freedom of Information</h3>
            <p className="text-blue-800">
              In Switzerland, this is known as the <strong>Transparency Act (LTrans)</strong>, which has been in effect since 2006.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-900 mb-3">Its principle:</h4>
            <p className="text-green-800 leading-relaxed">
              Every person, whether Swiss or foreign, has the right to request access to official documents 
              produced or held by the federal administration (offices, departments, commissions, etc.).
            </p>
            <p className="text-green-800 mt-3 font-medium">
              It is a fundamental right that promotes government transparency and strengthens citizens' trust.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "🧑‍⚖️ What are your rights as a citizen?",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 mb-6">Thanks to the LTrans:</p>
          
          <div className="grid gap-4">
            {[
              "You can request to view or receive a copy of federal administrative documents.",
              "You do not need to justify your request.",
              "Anyone (citizen, journalist, researcher, company, etc.) can submit a request.",
              "The administration must respond within 20 days (extendable to 40).",
              "If your request is denied, you can file an appeal."
            ].map((right, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white border border-gray-200 rounded-lg p-4">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">{right}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "📄 What types of information can you request?",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-900 mb-3">You can request access to any official documents that:</h4>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Come from a federal authority (not necessarily communal or cantonal).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Have been finalized or adopted (drafts or ongoing internal documents are not included).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Are not subject to a legal exception.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Examples of accessible information:</h4>
            <ul className="space-y-2 text-blue-800">
              <li>• Reports, statistics, official correspondence.</li>
              <li>• Documents related to administrative decisions.</li>
              <li>• Meeting minutes, internal guidelines.</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-900 mb-3">However, there are limits:</h4>
            <p className="text-red-800 mb-3">Access may be denied or restricted if:</p>
            <ul className="space-y-2 text-red-800">
              <li>• It would harm privacy, security, or Swiss national interests.</li>
              <li>• The document contains trade secrets or sensitive data.</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const questions: Question[] = [
    {
      id: 1,
      question: "Which of the following statements is true about the Transparency Act (LTrans) in Switzerland?",
      options: [
        "Only Swiss citizens can request access to information",
        "Every request must be justified with evidence",
        "Anyone can request an official document without having to justify themselves",
        "Access to official documents is reserved for accredited journalists"
      ],
      correctAnswer: 2,
      explanation: "Anyone can request an official document without having to justify themselves."
    },
    {
      id: 2,
      question: "Which type of document cannot be obtained through an LTrans request?",
      options: [
        "A finalized report produced by a federal authority",
        "An internal draft still being written",
        "A document containing non-sensitive public data",
        "An already adopted administrative directive"
      ],
      correctAnswer: 1,
      explanation: "An internal draft still being written cannot be obtained as it hasn't been finalized or adopted yet."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleCompleteModule = () => {
    setQuizCompleted(true);
    onComplete(moduleId);
  };

  const score = calculateScore();
  const passed = score >= Math.ceil(questions.length * 0.7); // 70% to pass

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Introduction to Freedom of Information</h2>
              <p className="text-blue-100 mt-1">Learn the basics of your right to access public information</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {!quizStarted && !quizCompleted ? (
            /* Learning Content */
            <div className="p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Section {currentSection + 1} of {sections.length}</span>
                  <span>{Math.round(((currentSection + 1) / sections.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Section Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{sections[currentSection].title}</h3>
                {sections[currentSection].content}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                {currentSection < sections.length - 1 ? (
                  <button
                    onClick={() => setCurrentSection(currentSection + 1)}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span>Take Quiz</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ) : quizStarted && !showResults ? (
            /* Quiz */
            <div className="p-8">
              {/* Quiz Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>Quiz</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAnswers[currentQuestion] === index && (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-gray-700">{String.fromCharCode(65 + index)}) {option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quiz Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>{currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : showResults ? (
            /* Quiz Results */
            <div className="p-8 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                passed ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {passed ? (
                  <CheckCircle className="w-12 h-12 text-green-600" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-600" />
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {passed ? 'Congratulations!' : 'Keep Learning!'}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6">
                You scored {score} out of {questions.length} questions correctly.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Review Your Answers:</h4>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="text-left">
                      <p className="font-medium text-gray-900 mb-2">
                        Question {index + 1}: {question.question}
                      </p>
                      <div className="flex items-center space-x-2 mb-2">
                        {selectedAnswers[index] === question.correctAnswer ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className={`${
                          selectedAnswers[index] === question.correctAnswer ? 'text-green-700' : 'text-red-700'
                        }`}>
                          Your answer: {String.fromCharCode(65 + selectedAnswers[index])}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>Correct answer:</strong> {question.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                {!passed && (
                  <button
                    onClick={() => {
                      setQuizStarted(true);
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setSelectedAnswers([]);
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Retake Quiz
                  </button>
                )}
                
                <button
                  onClick={handleCompleteModule}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {passed ? 'Complete Module' : 'Continue Anyway'}
                </button>
              </div>
            </div>
          ) : (
            /* Module Completed */
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-yellow-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Module Completed!</h3>
              <p className="text-lg text-gray-600 mb-6">
                You've successfully completed the Introduction to Freedom of Information module.
              </p>
              
              <button
                onClick={onClose}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Learning
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};