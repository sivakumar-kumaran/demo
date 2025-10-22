import React, { useState } from 'react';
import { Book, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { courses } from '../data/questions';

export const Practice: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Practice Dashboard
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Select a course to view sample interview questions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                onClick={() => toggleCourse(course.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
                      <Book size={20} />
                      <span className="font-medium">{course.questions.length} Questions</span>
                    </div>
                    {expandedCourse === course.id ? (
                      <ChevronUp className="text-gray-500" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500" size={24} />
                    )}
                  </div>
                </div>
              </div>

              {expandedCourse === course.id && (
                <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6">
                  <div className="space-y-4">
                    {course.questions.map((q, index) => (
                      <div
                        key={q.id}
                        className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(q.difficulty)}`}>
                                {q.difficulty}
                              </span>
                            </div>
                            <p className="text-gray-900 dark:text-white font-medium ml-11">
                              {q.question}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button size="lg" className="flex items-center space-x-2">
                      <Award size={20} />
                      <span>Start Practice Interview</span>
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Ready for the Real Challenge?</h3>
            <p className="text-lg opacity-90 mb-4">
              Move to the AI Interview section for a complete mock interview experience
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
