1.	E- Commerce Web App (using React.js with Vite.js)

Feature rich e-commerce web app for Fashion. Implemented the necessary functionalities:

•	Developed interactive User Interface with Pages and Navigation.
•	Attractive Navigation Bar which contains Links for Pages, Dynamic Cart Button  and Profile Link Button for User Authentication.
•	Authentication Page/Modal accessible from multiple Routes.
•	Dynamic Cart which redirects to Orders Page after Authentication.
•	‘My Orders’ Page for logged-in users to view all previous Orders.
•	Responsive design for small devices (in Progress).

Project done with: React JS | Vite JS | Redux & Redux Toolkit | React Router v6 | Firebase Authentication | Firebase Firestore | CSS Modules

More info:
- I used Vite.js instead of Create-React-App as the environment for this Project development since Vite is much faster compared to CRA.
- I used custom Login Page/Modal using Firebase Authentication and for each new user, a new document is created in Firestore Database.
- Whenever any user logs in, he can see his past orders in the 'My Orders' Page.
- Any new Order which the User makes, gets stored in the Firestore document for that specific user. ie. The documents gets updated.
