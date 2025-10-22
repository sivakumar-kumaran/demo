export interface Question {
  id: number;
  question: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Question[];
}

export const courses: Course[] = [
  {
    id: 'mern',
    name: 'MERN Stack',
    icon: '⚛️',
    description: 'MongoDB, Express.js, React, Node.js',
    questions: [
      { id: 1, question: 'What is Node.js and how does it differ from traditional server-side languages?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the advantages of using React over vanilla JavaScript.', difficulty: 'Easy' },
      { id: 3, question: 'What is the purpose of middleware in Express.js?', difficulty: 'Medium' },
      { id: 4, question: 'Describe the difference between SQL and NoSQL databases. Why use MongoDB?', difficulty: 'Medium' },
      { id: 5, question: 'What are React Hooks and why were they introduced?', difficulty: 'Medium' },
      { id: 6, question: 'Explain the event loop in Node.js and how it handles asynchronous operations.', difficulty: 'Hard' },
      { id: 7, question: 'How do you optimize the performance of a React application?', difficulty: 'Hard' },
      { id: 8, question: 'What is JWT authentication and how would you implement it in a MERN application?', difficulty: 'Hard' },
      { id: 9, question: 'Explain the Virtual DOM and how React uses it for efficient rendering.', difficulty: 'Medium' },
      { id: 10, question: 'How do you handle state management in large-scale React applications?', difficulty: 'Hard' }
    ]
  },
  {
    id: 'java',
    name: 'Java Full Stack',
    icon: '☕',
    description: 'Java, Spring Boot, Hibernate, Angular/React',
    questions: [
      { id: 1, question: 'What is the difference between JDK, JRE, and JVM?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the concept of Object-Oriented Programming in Java.', difficulty: 'Easy' },
      { id: 3, question: 'What is Spring Boot and what are its main advantages?', difficulty: 'Medium' },
      { id: 4, question: 'Describe the difference between @Component, @Service, and @Repository annotations.', difficulty: 'Medium' },
      { id: 5, question: 'What is Dependency Injection and how does Spring implement it?', difficulty: 'Medium' },
      { id: 6, question: 'Explain the N+1 query problem in Hibernate and how to solve it.', difficulty: 'Hard' },
      { id: 7, question: 'How do you implement REST API security with Spring Security?', difficulty: 'Hard' },
      { id: 8, question: 'What are the different types of collections in Java and when to use each?', difficulty: 'Medium' },
      { id: 9, question: 'Explain the concept of multithreading in Java and thread synchronization.', difficulty: 'Hard' },
      { id: 10, question: 'How do you handle transactions in Spring Boot applications?', difficulty: 'Hard' }
    ]
  },
  {
    id: 'python',
    name: 'Python Django',
    icon: '🐍',
    description: 'Python, Django, REST Framework, PostgreSQL',
    questions: [
      { id: 1, question: 'What is Python and what are its key features?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the difference between lists and tuples in Python.', difficulty: 'Easy' },
      { id: 3, question: 'What is Django and what is the MVT pattern?', difficulty: 'Medium' },
      { id: 4, question: 'How does Django ORM work and what are its advantages?', difficulty: 'Medium' },
      { id: 5, question: 'Explain the concept of decorators in Python with examples.', difficulty: 'Medium' },
      { id: 6, question: 'How do you implement authentication and authorization in Django?', difficulty: 'Hard' },
      { id: 7, question: 'What are Django signals and when should you use them?', difficulty: 'Hard' },
      { id: 8, question: 'Explain the GIL in Python and its impact on multithreading.', difficulty: 'Hard' },
      { id: 9, question: 'How do you optimize database queries in Django?', difficulty: 'Hard' },
      { id: 10, question: 'What is the difference between Django and Flask?', difficulty: 'Medium' }
    ]
  },
  {
    id: 'reactnative',
    name: 'React Native',
    icon: '📱',
    description: 'React Native, Mobile App Development',
    questions: [
      { id: 1, question: 'What is React Native and how does it differ from React?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the concept of components in React Native.', difficulty: 'Easy' },
      { id: 3, question: 'What are the main differences between Flexbox in React Native and web?', difficulty: 'Medium' },
      { id: 4, question: 'How do you handle navigation in React Native applications?', difficulty: 'Medium' },
      { id: 5, question: 'Explain the concept of native modules in React Native.', difficulty: 'Hard' },
      { id: 6, question: 'How do you optimize performance in React Native apps?', difficulty: 'Hard' },
      { id: 7, question: 'What is the bridge in React Native and how does it work?', difficulty: 'Hard' },
      { id: 8, question: 'How do you handle platform-specific code in React Native?', difficulty: 'Medium' },
      { id: 9, question: 'Explain the concept of hot reloading and fast refresh.', difficulty: 'Easy' },
      { id: 10, question: 'How do you integrate native libraries into React Native?', difficulty: 'Hard' }
    ]
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: '🅰️',
    description: 'Angular, TypeScript, RxJS',
    questions: [
      { id: 1, question: 'What is Angular and what are its key features?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the difference between AngularJS and Angular.', difficulty: 'Easy' },
      { id: 3, question: 'What are Angular directives and what types exist?', difficulty: 'Medium' },
      { id: 4, question: 'Explain dependency injection in Angular.', difficulty: 'Medium' },
      { id: 5, question: 'What are Observables and how does RxJS work with Angular?', difficulty: 'Hard' },
      { id: 6, question: 'How do you implement lazy loading in Angular?', difficulty: 'Medium' },
      { id: 7, question: 'Explain the lifecycle hooks in Angular components.', difficulty: 'Medium' },
      { id: 8, question: 'What is Angular Change Detection and how can you optimize it?', difficulty: 'Hard' },
      { id: 9, question: 'How do you share data between components in Angular?', difficulty: 'Medium' },
      { id: 10, question: 'What are Angular modules and how do they help organize applications?', difficulty: 'Easy' }
    ]
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    icon: '💚',
    description: 'Vue.js, Vuex, Vue Router',
    questions: [
      { id: 1, question: 'What is Vue.js and what makes it different from other frameworks?', difficulty: 'Easy' },
      { id: 2, question: 'Explain the Vue instance lifecycle.', difficulty: 'Medium' },
      { id: 3, question: 'What is the Virtual DOM in Vue and how does it work?', difficulty: 'Medium' },
      { id: 4, question: 'How do you manage state in Vue applications using Vuex?', difficulty: 'Medium' },
      { id: 5, question: 'Explain computed properties vs methods in Vue.', difficulty: 'Easy' },
      { id: 6, question: 'What are Vue directives and how do you create custom directives?', difficulty: 'Medium' },
      { id: 7, question: 'How does Vue 3 Composition API differ from Options API?', difficulty: 'Hard' },
      { id: 8, question: 'Explain reactivity in Vue.js and how it works under the hood.', difficulty: 'Hard' },
      { id: 9, question: 'How do you implement routing in Vue applications?', difficulty: 'Medium' },
      { id: 10, question: 'What are slots in Vue and when should you use them?', difficulty: 'Medium' }
    ]
  }
];
