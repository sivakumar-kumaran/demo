import React, { useState } from 'react';
import { Users, BookOpen, MessageSquare, FileText, Settings, TrendingUp, ArrowLeft, Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'users' | 'questions' | 'sessions' | 'feedback' | 'content' | 'settings'>('users');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'users' as const, label: 'Users', icon: <Users size={20} /> },
    { id: 'questions' as const, label: 'Questions', icon: <BookOpen size={20} /> },
    { id: 'sessions' as const, label: 'Sessions', icon: <TrendingUp size={20} /> },
    { id: 'feedback' as const, label: 'Feedback', icon: <MessageSquare size={20} /> },
    { id: 'content' as const, label: 'Content', icon: <FileText size={20} /> },
    { id: 'settings' as const, label: 'Settings', icon: <Settings size={20} /> }
  ];

  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'MERN Stack', interviews: 15, lastLogin: '2025-10-12', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Java Full Stack', interviews: 22, lastLogin: '2025-10-11', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Python Django', interviews: 8, lastLogin: '2025-10-10', status: 'Inactive' }
  ];

  const mockQuestions = [
    { id: 1, question: 'What is Node.js?', course: 'MERN Stack', difficulty: 'Easy', usageCount: 145 },
    { id: 2, question: 'Explain React Hooks', course: 'MERN Stack', difficulty: 'Medium', usageCount: 132 },
    { id: 3, question: 'What is Spring Boot?', course: 'Java Full Stack', difficulty: 'Easy', usageCount: 98 }
  ];

  const mockSessions = [
    { id: 1, user: 'John Doe', course: 'MERN Stack', score: 85, date: '2025-10-12', duration: '45 min', status: 'Completed' },
    { id: 2, user: 'Jane Smith', course: 'Java Full Stack', score: 92, date: '2025-10-12', duration: '50 min', status: 'Completed' },
    { id: 3, user: 'Bob Johnson', course: 'Python Django', score: 0, date: '2025-10-12', duration: '15 min', status: 'Incomplete' }
  ];

  const stats = [
    { label: 'Total Users', value: '1,245', change: '+12%', color: 'from-cyan-500 to-blue-600' },
    { label: 'Active Sessions', value: '89', change: '+5%', color: 'from-green-500 to-emerald-600' },
    { label: 'Total Questions', value: '450', change: '+8%', color: 'from-purple-500 to-pink-600' },
    { label: 'Avg Score', value: '83%', change: '+3%', color: 'from-yellow-500 to-orange-600' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 sm:w-64"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Course</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Interviews</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{user.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{user.course}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{user.interviews}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                            <Eye size={16} className="text-gray-600 dark:text-gray-400" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                            <Edit size={16} className="text-cyan-600 dark:text-cyan-400" />
                          </button>
                          <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                            <Trash2 size={16} className="text-red-600 dark:text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'questions':
        return (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Question Bank Management</h2>
              <Button size="sm">
                <Plus size={16} className="mr-2" /> Add Question
              </Button>
            </div>
            <div className="space-y-4">
              {mockQuestions.map((q) => (
                <Card key={q.id} className="p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          q.difficulty === 'Easy'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : q.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {q.difficulty}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{q.course}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">Used {q.usageCount} times</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-medium">{q.question}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="danger" size="sm">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'sessions':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Interview Sessions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">User</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Course</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Score</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Duration</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mockSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{session.user}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{session.course}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">{session.score}%</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{session.duration}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{session.date}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          session.status === 'Completed'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">User Feedback & Reports</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">User {i}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Great platform! The AI feedback is really helpful for improving my answers.
                      </p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="text-sm text-yellow-600 dark:text-yellow-400">⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'content':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h2>
              <Button size="sm">
                <Plus size={16} className="mr-2" /> Add Content
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Articles</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Manage guides and tutorials</p>
                <Button variant="outline" size="sm">Manage Articles</Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Upload videos and links</p>
                <Button variant="outline" size="sm">Manage Resources</Button>
              </Card>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Site Settings</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">General Settings</h3>
                <div className="space-y-4">
                  <Input label="Site Name" defaultValue="MockInterview" />
                  <Input label="Admin Email" type="email" defaultValue="admin@mockinterview.com" />
                  <Button>Save Changes</Button>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-600" />
                    <span className="text-gray-700 dark:text-gray-300">Email reminders for scheduled interviews</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-cyan-600" />
                    <span className="text-gray-700 dark:text-gray-300">System alerts for new users</span>
                  </label>
                  <Button>Save Preferences</Button>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
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
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Manage users, questions, and platform settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">{stat.change}</span>
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Card className="lg:w-64 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </Card>

          <Card className="flex-1 p-6">
            {renderContent()}
          </Card>
        </div>
      </div>
    </div>
  );
};
