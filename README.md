[Deployed Link](https://sparkle-hood-assignment-rose.vercel.app/)

# Incident Reporting System

This is an Incident Reporting System where users can report incidents with details such as title, severity, description, and the time it was reported. The system allows users to submit new reports through a modal form and dynamically updates the interface with the new reports. The system is implemented in React and manages data in a simple JavaScript array that can be updated as new incidents are reported.

## Features
- **Submit New Incident Reports:** Users can report incidents with a title, severity level, description, and the time it was reported.
- **Dynamic UI Updates:** The UI dynamically updates to reflect new incidents in the list of reported incidents.
- **Data Persistence:** New incidents are added to the raw data array (`RawData.js`) to simulate data persistence. The data is also updated on the page in real time.
- **Real-Time Data Rendering:** The system re-renders the page whenever new incidents are added.

## Tech Stack
- **React:** A JavaScript library for building user interfaces.
- **JavaScript:** The primary programming language used for handling logic and updating the data.
- **Tailwind CSS:** For styling the components with a clean, responsive design.
- **Functional Components & React Hooks:** The app is built using React functional components and hooks (`useState`, `useEffect`) for managing state and rendering.
- **JavaScript Array:** Data is managed and updated in a mutable `list` array for simplicity.

## How to Run the Project Locally

### Prerequisites
- You should have **Node.js** and **npm** installed on your machine. If not, you can download them from [here](https://nodejs.org/).

### Steps
1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/your-username/incident-reporting-system.git
    ```

2. Navigate to the project directory.
    ```bash
    cd incident-reporting-system
    ```

3. Install dependencies using npm or yarn.
    ```bash
    npm install
    ```

4. Start the development server.
    ```bash
    npm start
    # OR
    yarn start
    ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## How It Works

### Data Structure
The incident reports are stored in a simple array (`list`), which is imported from `RawData.js`. Each incident has the following properties:
- `id`: Unique identifier for the incident.
- `title`: Title of the incident.
- `description`: A description of the incident.
- `severity`: Severity level of the incident (Low, Medium, High).
- `reported_at`: Timestamp of when the incident was reported.

### Adding New Reports
- The **Add Incident Modal** allows users to input a new incident’s details.
- When the user submits the form, the following steps occur:
  - A new incident object is created with the necessary details.
  - The new incident is added to both the UI (via React state) and the raw data (`RawData.js` array).
  - The `updateData()` function is used to append the new report to the array.

### Example:
Here's an example of an incident report:
```javascript
{
  "id": 101,
  "title": "UI Glitch in Dashboard",
  "description": "The dashboard UI freezes when loading data.",
  "severity": "High",
  "reported_at": "2025-04-27T10:30:00Z"
}
