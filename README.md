# NBA Legends Web Application
<h3>visit: https://nba-legends-app-react-03.netlify.app/ </h3>
<img alt="alt_text" src="./nba.gif"/>


## Description:
This project is an NBA Legends web application that showcases information about famous basketball players from the NBA's history. The application allows users to search for players and view their statistics and images. It is designed to provide a visually appealing and interactive experience for basketball enthusiasts.

## Features

### Header Component (Header.js)
- The Header component displays the application logo and the title "NBA Legends."

### Main Component (Main.js)
- The Main component is the central content container of the application.
- It includes a search input that allows users to search for players by name.
- The component renders individual player cards using the Card component and filters the data based on user input.

### Card Component (Cards.js)
- The Card component receives data for each NBA legend and renders their details in a card format.
- Initially, only the player's image is displayed on the card.
- When clicking on the card, additional details, including the player's statistics, are revealed.
- Clicking on the card again hides the additional details.

### Styling (App.scss)
- The application uses SCSS for styling, providing a clean and organized stylesheet.
- Custom styles are applied to components to achieve an attractive and responsive design.
- The background image of NBA Legends is set for a visually appealing appearance.

### Data (data.js)
- The project uses a data array that contains information about various NBA legends.
- Each player has a name, image URL, and an array of statistics.
- The statistics include points scored, rebounds, assists, and the number of All-Star appearances.

### Search Functionality
- The Main component handles the search functionality, allowing users to search for specific players by name.
- As the user types in the search input, the application filters the players' data based on the input and displays the relevant results.

## Getting Started
To run this application, follow these steps:
1. Clone the repository.
2. Install the required dependencies using npm or yarn.
3. Start the development server with the appropriate command.
4. Open the application in your web browser.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any changes.

