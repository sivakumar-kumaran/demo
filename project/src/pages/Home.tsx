import React from 'react';
import { Target, Brain, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Interviews',
      description: 'Practice with advanced AI that simulates real interview scenarios'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Course-Specific Questions',
      description: 'Get targeted questions based on your chosen tech stack'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics and scores'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Feedback',
      description: 'Receive instant feedback on your answers and performance'
    }
  ];

  const benefits = [
    'Practice unlimited mock interviews anytime',
    'Get instant AI feedback on your responses',
    'Track your progress over time',
    'Prepare for MERN, Java, Python, and more',
    'Improve confidence before real interviews'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent animate-fade-in">
              Master Your Interview Skills
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Practice with AI-powered mock interviews and boost your confidence for placement success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('register')}>
                Get Started Free <ArrowRight className="ml-2 inline" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('about')}>
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card key={index} hoverable className="p-6">
                <div className="text-cyan-600 dark:text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose MockInterview?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our platform is designed specifically for placement students who want to excel in technical interviews. Practice with real-world questions and get instant feedback.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join thousands of students who have improved their interview skills with our platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <span className="text-lg">Create your free account</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <span className="text-lg">Choose your tech stack</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                    <span className="text-lg">Start practicing interviews</span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full mt-8"
                  onClick={() => onNavigate('register')}
                >
                  Sign Up Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Journey to Interview Success
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Practice makes perfect. Begin your preparation today.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('register')}
          >
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  );
};
