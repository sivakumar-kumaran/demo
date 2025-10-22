import React from 'react';
import { User, BookOpen, Calendar, TrendingUp, Award, Target, Clock, ArrowLeft } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  const upcomingInterviews = [
    { id: 1, course: 'MERN Stack', date: '2025-10-15', time: '10:00 AM', type: 'Technical Round' },
    { id: 2, course: 'Java Full Stack', date: '2025-10-18', time: '2:00 PM', type: 'System Design' },
    { id: 3, course: 'Python Django', date: '2025-10-20', time: '11:00 AM', type: 'Coding Round' }
  ];

  const recentScores = [
    { id: 1, course: 'MERN Stack', score: 85, date: '2025-10-10', questions: 10 },
    { id: 2, course: 'React Native', score: 78, date: '2025-10-08', questions: 10 },
    { id: 3, course: 'Angular', score: 92, date: '2025-10-05', questions: 10 },
    { id: 4, course: 'Vue.js', score: 88, date: '2025-10-03', questions: 10 }
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, label: 'Interviews Completed', value: '24', color: 'from-cyan-500 to-blue-600' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Average Score', value: '86%', color: 'from-green-500 to-emerald-600' },
    { icon: <Award className="w-6 h-6" />, label: 'Best Score', value: '95%', color: 'from-yellow-500 to-orange-600' },
    { icon: <Clock className="w-6 h-6" />, label: 'Practice Hours', value: '48h', color: 'from-purple-500 to-pink-600' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate('home')}
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Track your progress and continue your interview preparation
          </p>
        </div>

        <Card className="p-6 mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src={user?.profileImage}
                alt={user?.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
              <div>
                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className="opacity-90">{user?.email}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <BookOpen size={16} />
                  <span className="font-medium">{user?.course}</span>
                </div>
              </div>
            </div>
            <Button variant="secondary" onClick={() => onNavigate('practice')}>
              Start Practice
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <Calendar className="mr-2 text-cyan-600 dark:text-cyan-400" size={24} />
                Upcoming Interviews
              </h3>
            </div>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {interview.course}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {interview.type}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold">
                      Scheduled
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{interview.date}</span>
                    <span>•</span>
                    <span>{interview.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => onNavigate('interview')}
            >
              Schedule New Interview
            </Button>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <TrendingUp className="mr-2 text-cyan-600 dark:text-cyan-400" size={24} />
                Progress Tracking
              </h3>
            </div>
            <div className="space-y-4">
              {recentScores.map((score) => (
                <div
                  key={score.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {score.course}
                    </h4>
                    <span className={`text-2xl font-bold ${getScoreColor(score.score)}`}>
                      {score.score}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{score.questions} questions</span>
                    <span>{score.date}</span>
                  </div>
                  <div className="mt-2 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        score.score >= 90
                          ? 'from-green-500 to-emerald-600'
                          : score.score >= 70
                          ? 'from-yellow-500 to-orange-600'
                          : 'from-red-500 to-pink-600'
                      }`}
                      style={{ width: `${score.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">Keep Going!</h3>
            <p className="text-lg opacity-90 mb-6">
              You're making excellent progress. Keep practicing to achieve your goals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => onNavigate('practice')}>
                Continue Practice
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('interview')}>
                Take Mock Interview
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
