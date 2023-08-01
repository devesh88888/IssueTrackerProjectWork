Issue Tracker
This is an Issue Tracker application built using Node.js and EJS to track issues/bugs for a project.

Features
Neat UI to manage projects and issues effectively.
Home Page:
Displays a list of projects.
Allows users to create a new project, which will appear in the project list.
Create Project Page:
Accepts fields to create a project, including Name, Description, and Author.
Project Detail Page:
Shows bugs related to the selected project.
Users can filter issues by multiple labels, filter by author, and search by title and description.
Provides a button to create a new issue for the project.
Create Issue Page:
Allows users to create an issue for a project.
Accepts fields like Title, Description, Labels, and Author.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/devesh88888/IssueTrackerProjectWork.git
cd IssueTrackerProjectWork
Install the dependencies:

bash
Copy code
npm install
Set up the database connection (MongoDB) and provide the connection URL in app.js.

Start the application:

bash
Copy code
npm start
Access the application in your browser at http://localhost:3000.

Dependencies
Node.js
Express.js
EJS
MongoDB (Make sure you have MongoDB installed and running)
Project Structure
markdown
Copy code

- public/
  - css/
    - style.css
  - js/
    - main.js
- views/
  - home.ejs
  - createProject.ejs
  - projectDetail.ejs
  - createIssue.ejs
- app.js
- models/
  - Project.js
  - Issue.js

License
This project is licensed under the MIT License.

Contributions
Contributions are welcome! Please create an issue or submit a pull request if you would like to contribute to the project.

A good README helps users understand your project better, so keep it informative and up-to-date. If you have any further updates or features added to the project, remember to update the README accordingly.
