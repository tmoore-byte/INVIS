INVIS: Insurance Visualization Tool
INVIS is a tool designed to provide an interactive visualization of insurance policies across various companies. Through our interface, users can adjust variables and view dynamically updated charts, helping them gain insights into insurance coverages, programs, and filters over time.

Project Structure
Below is a description of the main directories and files in this project:

Directories:
static/: This directory contains all the static assets required for the project. Static assets are files that don't change and don't have any logic applied to them by the server.

css/: Contains the Cascading Style Sheets (CSS) files used to style the webpages. Styles define how the HTML elements of the site are presented on the screen.

js/: Contains JavaScript files that add interactivity to the webpages. It handles things like button clicks, data retrieval, and dynamic updates to the webpage.

images/: Houses any images or graphical assets needed for the website.

templates/: Contains the HTML templates used by Flask. Flask uses the Jinja2 templating engine, allowing for dynamic content insertion into HTML files.

base.html: This is the base template from which other pages derive. It contains common elements like headers, footers, and links to stylesheets or scripts.

index.html: The main webpage template which extends from the base template and provides the primary user interface for the visualization tool.

venv/: This directory holds the Python virtual environment. It keeps project-specific dependencies isolated from other Python projects, ensuring consistent behavior and avoiding potential conflicts.

Files:
app.py: This is the primary Python file where the Flask application is initialized and run. It contains routes, view functions, and any backend logic related to the server.

README.md: This markdown file (the one you're reading right now) provides an overview of the project, its structure, and instructions for setup or use.

Getting Started
(You can later add sections like installation steps, how to set up the database, running the application locally, etc., to guide users or developers in setting up and using your project.)

This README layout provides an organized overview of your project, making it easier for collaborators, stakeholders, or future developers to understand its structure and purpose.





