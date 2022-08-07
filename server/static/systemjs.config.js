SystemJS.config({

  defaultExtension: false,
  packages:{
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
  },
  map: {
    'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'https://unpkg.com/react@17/umd/react.production.min.js',
    'react-dom': 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
    'css': 'https://unpkg.com/systemjs-plugin-css@latest/css.js',
    "react-router":"https://unpkg.com/react-router@6/umd/react-router.development.js",
    'react-router-dom':"https://unpkg.com/react-router-dom@6/umd/react-router-dom.development.js",
    'fast-average-color':"https://unpkg.com/fast-average-color/dist/index.browser.min.js",
    "history": "https://unpkg.com/history"
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('static/index.jsx')
  .catch(console.error.bind(console));
