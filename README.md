# Country Info App

This project consists of a backend (Nest.js) and a frontend (React.js with Next.js), providing information about countries.

## How to Run the Project Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/GuilhermeToso/country-info-app.git
```

### Step 2: Run the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run the backend server:

```bash
npm run start
```

The backend will be running on http://localhost:3000.

### Step 3: Run the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend in development mode:

```bash
npm run dev
```

The frontend will be running on http://localhost:3001.

##cNotes

- Ensure that the backend is running before accessing the frontend, as the frontend depends on the backend to fetch country data.
- If you want to modify environment variables, update the .env files in the respective directories.

## Tech Stack:

- Frontend: NextJs, ApexChart
- Backend: NestJs
