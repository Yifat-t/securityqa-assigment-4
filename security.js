import './security.scss'

document.querySelector('#security-header').innerHTML = `
  <h1>Security</h1>
`
document.querySelector('#security-body').innerHTML = `
  <h3>List of Security measures added or could be set up for the project:</h3>

  <ul>
    <li>Security related headers - added _headers file required by Netlify to add default (security) headers for each request (or page/content/asset served).</li>

    <li>Data encryption - primary relying on Netlify's capabilities, the website served by HTTPS protocol.</li>

    <li>Security features - due to simplicity of the site, we don't need to worry about authentication and user password storage.
        Since the project is not connected to a database, we don't need to sanitize the data or more broadly worry about SQL injections.
        In the current version/state, we don't need to worry about CSRF as we are not submitting any forms, we are also not loading any 3rd party scripts.</li>
    
    <li>Security principals on the production site - dependencies are versioned and in the future dependency's versions can be set to a specific version,
        such that a bad dependency version would not find its way to our production website, in other words, setting dependencies versions gives us more control over which packages being updated and which aren't.</li>
  </ul>
`
