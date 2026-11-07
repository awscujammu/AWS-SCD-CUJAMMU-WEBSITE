AWS Student Community Day Jammu — website source
=================================================

This folder contains the website files ready for deployment.

Project structure
-----------------
- *.html                 Individual website pages
- assets/site.js         Shared navigation, footer and common page behaviour
- assets/gda.js          Event interactions and registration-related behaviour
- assets/3d.js           3D effects and visual interactions
- assets/*.css           Layout, theme, responsive styles and visual effects
- assets/*.svg           Logos, icons and cursor artwork
- assets/*.webp, *.png   Website photographs and graphics

Code style
----------
The HTML, CSS and JavaScript have been formatted with consistent indentation
and line breaks to make the files easier to read, review and maintain.
Comments are retained. Formatting was intended to preserve existing behaviour.

Editing tips
------------
1. Open the dist folder in VS Code.
2. Edit the relevant HTML, CSS or JavaScript file.
3. Keep asset paths relative to the HTML pages.
4. Test the site locally before deploying.
5. Deploy the contents of this dist folder to Netlify.