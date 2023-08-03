# codechallenge2
# Robot Collection and Your Bot Army

This is a simple React project that allows users to view a collection of robots and create their own bot army by equipping or firing robots. The project consists of two main components: `BotCollection` and `YourBotArmy`.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project root directory.
3. Install the required dependencies using npm:


npm install

## Usage

### BotCollection

1. Open the project in your code editor.
2. Run the development server:


npm start

3. The `BotCollection` component will be available at `http://localhost:3000/`.

### YourBotArmy

1. Open the project in your code editor.
2. Run the development server:


npm start

3. The `YourBotArmy` component will be available at `http://localhost:3000/your-bot-army`.

### How It Works

#### BotCollection

- The `BotCollection` component fetches robot data from `http://localhost:3000/bots` using the `useEffect` hook and stores it in the `robots` state using `useState`.
- While the data is being fetched, it displays a "Loading robots..." message.
- Once the data is available, it renders a list of robots showing their name, health, damage, armor, and level.

#### YourBotArmy

- The `YourBotArmy` component also fetches robot data from `http://localhost:3000/bots` using the `useEffect` hook and stores it in the `allBots` state using `useState`.
- It manages the user's bot army in the `botArmy` state using `useState`.
- For each robot in the `allBots` array, it displays its details along with an "Equip" button if the robot is not already in the bot army, and a "Fire" button if it is already equipped.
- Clicking the "Equip" button will add the selected robot to the bot army.
- Clicking the "Fire" button will remove the selected robot from the bot army.

### Data Source

The robot data is retrieved from the `http://localhost:3000/bots` API endpoint. Ensure that the API server is running and providing the required data in the expected format.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was built using React and utilizes the `useState` and `useEffect` hooks.
- Special thanks to the creators and maintainers of React and other open-source libraries used in this project.