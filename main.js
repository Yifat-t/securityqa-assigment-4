import './style.scss'

import courses from "./courses.json";

console.log(courses);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>

  <a href="qa.html">Quality Assurance</a>

  <a href="security.html">Security</a>

  <a href="bad_example.html">Bad Example</a>
`
