# NHS App Upskilling

This project uses Directus as a Headless CMS for storing content, Auth, RBAC etc.

## Running the project

Copy the `.env.example` into a new file called `.env`.

Create & populate the database by running `npm run db:create` then `npm run db:restore`.

Then you should be able to run `directus` and the frontend immediately with `npm start`.

Navigate to your [localhost](localhost:8055) and sign in with email: `admin@example.com` and password: `admin`.

Navigate to your [localhost](localhost:5173) to see the react application.
