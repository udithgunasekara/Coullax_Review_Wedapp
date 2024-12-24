# Project Review Web Application

## Technology Stack
- **Frontend:** React
- **Backend:** Spring Boot
- **Database:** MySQL (SQL)
- **Styling:** Tailwind CSS

## Features Implemented
1. Fully functional CRUD operations.
2. User interface requirements fully implemented.
3. Review model requirements covered.
4. Try to use SOLID principles in the Backend.
5. Unique book catalog feature:
   - Users can see filtered books by title and author to view available reviews.
   - Each book displays its associated reviews, ratings, and the last modified date.
6. Users can delete or update reviews for a selected book.
7. Implement responsive UI design.

## Backend Development
- Implemented using the **MVC architecture**.
- Utilized **Hibernate (JPA)** for data persistence.

## Frontend Development
- Used **Axios** for data fetching.
- Implemented routing using **React Router DOM**.

### Note:
Based on the project requirements and complexity, I decided to use **props drilling** and the **useLocation hook** (React Router DOM) for data pass, instead of using the **Context API**.
Lombok dependancy didn't work in my project

## Setup Instructions
1. Clone the repository locally.
2. Note the project structure:
   - **Backend:** Located in `Backned/coullaxassignment` (Spring Boot).
   - **Frontend:** Located in `frontend/coullaxweb` (React).
3. For the backend:
   - Check the `application.properties` file to ensure the database link is correctly configured. For example:
     ```properties
     spring.datasource.url=jdbc:mysql://127.0.0.1:3306/coullax?createDatabaseIfNotExist=true
     ```
4. For the frontend:
   - Run `npm install` to install dependencies.
   - Run `npm start dev`.

5. Verify Cross-Origin Resource Sharing (CORS) settings:
   - Ensure the backend CORS configuration matches the frontend project. If necessary, update the `CorsConfig` file (Config > CorsConfig):
     ```java
     "http://localhost:3000", "http://127.0.0.1:3000"
     ```

## Future Enhancements
1. Filtering options based on rating and sorting.
2. Smooth page transitions.
3. Improved component re-rendering after deletions.

