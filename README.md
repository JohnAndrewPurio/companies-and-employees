# Companies and Employees List

## Project uses:
- React: For the framework
- Redux: For state management
- Firebase/Firestore: To use as backend service and database
- React Router: To manage routing
- Material UI - For the GUI

## Project Highlights:

- **Realtime updates** - uses firestore docSnapShots to update the content in realtime
- **Material UI** - uses a popular UI library to showcase information with style and modern design
- **Minimal number of states** - uses only 4 redux states: 2 for updating the companies and employees list, and another 2 for displaying success or error messages
- **Modular Code** - the react side of things is broken down into multiple components for each significant part of the UI like the add company form, add employee form, company card, employee card, list of companies, company overview, success alert, and error alert. API calls in firebase is also separated with the redux states for better reviewing of the code
- **Form Validation** - checks whether the field is empty or invalid and displays and error alert when save button is clicked else displays a success alert when no error is found
