import './qa.scss'

document.querySelector('#qa-header').innerHTML = `
  <h1>Quality Assurance</h1>
`
document.querySelector('#qa-body').innerHTML = `
  <h3>List of Quality Assurance measures, added or could be set up for the project:</h3>

  <ul>
    <li>Version Control - using public repository in GitHub, easy integration with our build tools</li>

    <li>Branching Model - using gitflow, 'main' branch would be used for to make the application live, all in progress features/work would be 
        worked on on a seprate branch. If the project grows, we can consider adding a dev or development branch to add an extra step before production or making the app live (QA Measures to be implemented).</li>

    <li>Code linting and standards - using eslint integrated into my build scripts (package.json), additionally, the IDE is setup with a dedicated package to
        to make sure that linting and standards enforced while writing the code.</li>
    
    <li>Testing - unit and end-to-end - the project has a directory structure to facilitate addition of unit and e2e tests. Testing frameworks - mocha, chai - have been added to app's dependencies
        to provide the framework or the infrustracture to run said tests.</li>

    <li>Build tools and deployment pipeline - currently using the tools and the pipeline described in the class since the project is rather small (all in all 4 static pages). With that bing said, I utilize the 'scripts' section
        of the package.json file to define different project build options. This should ultimately save time and hopefully avoid costly mistakes. Some of the tasks include running the project in development mode,
        runnin unit and end-to-end test, seprately or together, and building a local preview of the production package (assets, scripts, etc.).
        On the pipeline side, as discrubed in lectures, the app uses Netlify's build command option to build the project for production usage.</li>
  </ul>
`
