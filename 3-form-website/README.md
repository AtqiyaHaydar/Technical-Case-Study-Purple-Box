# Website Form 🌐

<h2>Overview ℹ️</h2>
<p>
  This project is a web application that demonstrates a form with various input fields. The form validates the input and displays the submitted data on a separate page. The application uses React for the front-end, Redux for state management, and React Router for navigation.
</p>

###

<h2>Features 🚀</h2>
<p>1. Form validation for various input types</p>
<p>2. State management with Redux</p>
<p>3. Navigation with React Router</p>
<p>4. Responsive design with media queries</p>
<p>5. Animations for a better user experience</p>

###
<h2>Project Structure 📁</h2>

```
.
├── public 
│   ├── index.html 
│   └── ... 
├── src 
│   ├── components 
│   │   └── FormInput.js 
│   ├── pages 
│   │   ├── HomePage.js 
│   │   └── FormData.js 
│   ├── lib 
│   │   └── data.js 
│   ├── redux 
│   │   ├── actions.js 
│   │   ├── reducers.js 
│   │   └── store.js
│   ├── App.css 
│   ├── App.js 
│   ├── index.js 
│   └── ... 
├── package.json 
└── README.md 
```

###

<h2>Dependencies 📦</h2>
<p>The project uses the following dependencies:</p>

| Dependency        | Description                                          | Version  |
|--------------------|------------------------------------------------------|----------|
| React              | A JavaScript library for building user interfaces.   | ^18.3.1  |
| React DOM          | The entry point of the DOM-related rendering paths.  | ^18.3.1  |
| React Redux        | Official React bindings for Redux.                   | ^9.1.2   |
| React Router DOM   | Declarative routing for React web applications.      | ^6.24.0  |
| Redux              | A predictable state container for JavaScript apps.   | ^5.0.1   |
| Testing Library    | Tools for testing React components.                  | ^13.5.0  |
| Jest               | Testing framework for JavaScript.                    | ^13.4.0  |
| User Event         | Utilities for simulating user interactions.          | ^13.5.0  |
| Web Vitals         | A library for measuring essential web vitals.        | ^2.1.4   |

###

<h2>Installation and Running 🛠️</h2>
To get started with this project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/3-form-website.git
cd 3-form-website
```

2. Install dependencies:
```
npm install
```

3. Run the application:
```
npm start
```
This will start the development server and open the application in your default web browser.


4. Build for production:
```
npm run build
```
This will create an optimized production build in the build directory.

5. Run tests:
```
npm test
```
This will run the tests defined in the project.