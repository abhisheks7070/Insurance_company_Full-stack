# Insurance Website - MERN Stack

## Overview

This project is an insurance website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website provides information about the insurance company and allows users to make inquiries by submitting their details. The submitted inquiries are sent to a backend created using Express.js and stored in a MongoDB database. There is also a frontend for agents that can be accessed only by entering a specific agent code.

## Features

- **User Frontend**: Provides information about the insurance company.
  - Users can make inquiries by submitting their details through a contact form.
  - The contact form data is sent to the backend and stored in a MongoDB database.

- **Agent Frontend**: Restricted access to agents.
  - Agents can access this frontend by entering a specific agent code in the user frontend.
  - Provides additional functionalities for agents (e.g., viewing inquiries, managing user data).

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Validation**: Zod (for backend data validation)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/insurance-website.git
   npm run start
