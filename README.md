React application that showcases a list of available bots, along with other exciting features. 

Project Structure:

src/components/: Contains React components (BotCollection.js, YourBotArmy.js, etc.).
src/services/: Houses the API service (api.js) responsible for making HTTP requests.
src/App.js: Main application component.

Features

View profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The bot can be enlisted only once.
Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.
Discharge a bot permanently by clicking the red "x" button, which deletes the bot from both the backend and the YourBotArmy on the frontend.

API Endpoints
GET /bots: Retrieve a list of available bots.
DELETE /bots/:id: Remove a bot from the backend and the YourBotArmy on the frontend.
