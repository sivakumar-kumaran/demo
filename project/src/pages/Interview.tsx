import React, { useState, useEffect } from 'react';
import { Wifi, Sun, UserCheck, AlertTriangle, Mic, Video, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { courses } from '../data/questions';

interface InterviewProps {
  onNavigate: (page: string) => void;
}

export const Interview: React.FC<InterviewProps> = ({ onNavigate }) => {
  const [stage, setStage] = useState<'select' | 'precheck' | 'interview' | 'completed'>('select');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const [preChecks, setPreChecks] = useState({
    internet: false,
    lighting: false,
    dresscode: false
  });

  useEffect(() => {
    if (stage === 'interview') {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          setTabSwitchCount(prev => {
            const newCount = prev + 1;
            if (newCount >= 2) {
              alert('Interview terminated due to multiple tab switches!');
              setStage('completed');
            } else {
              alert(`Warning ${newCount}/2: Please do not switch tabs during the interview!`);
            }
            return newCount;
          });
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  }, [stage]);

  const runPreChecks = async () => {
    setPreChecks({ internet: false, lighting: false, dresscode: false });

    await new Promise(resolve => setTimeout(resolve, 1000));
    setPreChecks(prev => ({ ...prev, internet: navigator.onLine }));

    await new Promise(resolve => setTimeout(resolve, 1000));
    setPreChecks(prev => ({ ...prev, lighting: true }));

    await new Promise(resolve => setTimeout(resolve, 1000));
    setPreChecks(prev => ({ ...prev, dresscode: true }));
  };

  const startInterview = () => {
    if (Object.values(preChecks).every(check => check)) {
      setStage('interview');
      setIsRecording(true);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setIsRecording(false);

    const feedbacks = [
      'Great explanation! You covered the key concepts well.',
      'Good answer! Consider adding more specific examples.',
      'Well articulated! Your understanding is clear.',
      'Excellent response! You demonstrated strong knowledge.',
      'Nice work! Try to be more concise in your explanation.'
    ];

    const randomFeedback = feedbacks[Math.floor(Math.random() * feedbacks.length)];
    setFeedback(randomFeedback);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      const course = courses.find(c => c.id === selectedCourse);
      if (course && currentQuestion < course.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsRecording(true);
      } else {
        setStage('completed');
      }
    }, 5000);
  };

  const getCourseQuestions = () => {
    return courses.find(c => c.id === selectedCourse)?.questions || [];
  };

  if (stage === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('home')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              AI Mock Interview
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Select a course to begin your AI-powered mock interview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                hoverable
                className="p-6 cursor-pointer"
                onClick={() => {
                  setSelectedCourse(course.id);
                  setStage('precheck');
                  runPreChecks();
                }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {course.description}
                  </p>
                  <Button variant="primary" size="sm" className="w-full">
                    Start Interview
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'precheck') {
    const allChecksPassed = Object.values(preChecks).every(check => check);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStage('select')}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>

          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Pre-Interview Checks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Please wait while we verify your setup...
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wifi className="text-cyan-600 dark:text-cyan-400" size={24} />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    Internet Connection
                  </span>
                </div>
                {preChecks.internet ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <div className="w-6 h-6 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" />
                )}
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Sun className="text-cyan-600 dark:text-cyan-400" size={24} />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    Background Lighting
                  </span>
                </div>
                {preChecks.lighting ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <div className="w-6 h-6 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" />
                )}
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <UserCheck className="text-cyan-600 dark:text-cyan-400" size={24} />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    Dress Code Check
                  </span>
                </div>
                {preChecks.dresscode ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <div className="w-6 h-6 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" />
                )}
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-yellow-800 dark:text-yellow-300">
                  <strong>Important:</strong> Do not switch tabs during the interview. You will receive warnings, and the interview will be terminated after 2 warnings.
                </div>
              </div>
            </div>

            {allChecksPassed && (
              <div className="mt-8">
                <Button size="lg" className="w-full" onClick={startInterview}>
                  Begin Interview
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  }

  if (stage === 'interview') {
    const questions = getCourseQuestions();
    const question = questions[currentQuestion];

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            {tabSwitchCount > 0 && (
              <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                <AlertTriangle size={20} />
                <span className="font-medium">Warnings: {tabSwitchCount}/2</span>
              </div>
            )}
          </div>

          <div className="mb-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <Card className="p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {question?.question}
            </h2>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className={`p-4 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  <Mic className="text-white" size={32} />
                </div>
                <div className="p-4 rounded-full bg-gray-300 dark:bg-gray-600">
                  <Video className="text-white" size={32} />
                </div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-400">
                {isRecording ? 'Recording your answer...' : 'Processing...'}
              </p>
            </div>

            {showFeedback && (
              <div className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                      AI Feedback
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-400">{feedback}</p>
                  </div>
                </div>
              </div>
            )}

            {isRecording && (
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleAnswer('Sample answer recorded')}
              >
                Submit Answer
              </Button>
            )}
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Interview Completed!
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Great job! You've completed the mock interview.
          </p>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-6 text-white mb-8">
            <h3 className="text-2xl font-bold mb-2">Your Score</h3>
            <div className="text-5xl font-bold mb-2">85%</div>
            <p className="opacity-90">Excellent performance!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => {
              setStage('select');
              setCurrentQuestion(0);
              setTabSwitchCount(0);
              setAnswers([]);
            }}>
              Take Another Interview
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('dashboard')}>
              View Dashboard
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
