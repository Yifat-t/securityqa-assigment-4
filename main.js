import './style.scss'

import courses from "./courses.json";

var coursesHTML = `<table>
                    <tr>
                      <th>Course Name</th>
                      <th>Course Number</th>
                      <th>Lecturer</th>
                    </tr>`;

for (var i = 0; i < courses.courses.length; i++) {
  coursesHTML += `<tr><td>` + courses.courses[i].name + `</td><td>` + courses.courses[i].number + `</td><td>` + courses.courses[i].lecturer + `</td></tr>`;
}

coursesHTML += `</table>`;

document.querySelector('#app').innerHTML = `
  <h1>Hello Assignment #4!</h1>

  <a href="qa.html">Quality Assurance</a>

  <a href="security.html">Security</a>

  <a href="bad_example.html">Bad Example</a>

  <h2>Courses This Semester</h2>
` + coursesHTML;
