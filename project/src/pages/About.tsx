import React from 'react';
import { Target, Award, Zap, Shield } from 'lucide-react';
import { Card } from '../components/Card';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Our Mission',
      description: 'To empower students with the skills and confidence needed to ace technical interviews and launch successful careers in technology.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Driven',
      description: 'We provide high-quality, curated interview questions that reflect real-world scenarios from top tech companies.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Instant Feedback',
      description: 'Our AI-powered system provides immediate, actionable feedback to help you improve with every practice session.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Safe Environment',
      description: 'Practice in a judgment-free environment where mistakes are learning opportunities, not setbacks.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '50,000+', label: 'Mock Interviews' },
    { number: '15+', label: 'Tech Stacks' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              About MockInterview
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to help every student succeed in their technical interviews through intelligent practice and personalized feedback.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <Card key={index} hoverable className="p-8">
                <div className="text-cyan-600 dark:text-cyan-400 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{value.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                MockInterview was founded by a team of software engineers and educators who recognized the gap between academic learning and real-world interview preparation.
              </p>
              <p>
                We've experienced firsthand the stress and anxiety that comes with technical interviews. That's why we created a platform that not only tests your knowledge but also builds your confidence through repeated practice.
              </p>
              <p>
                Today, we're proud to help thousands of students prepare for their dream jobs at top tech companies. Our AI-powered interview system provides realistic practice scenarios and valuable feedback that accelerates learning.
              </p>
              <p className="font-semibold text-xl">
                Join us in transforming interview preparation into an empowering experience.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
