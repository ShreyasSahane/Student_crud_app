# Student Assignment Project

This project is a full-stack application with a Django backend and an Angular frontend for managing student records.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Backend (Django)](#backend-django)
- [Frontend (Angular)](#frontend-angular)
- [License](#license)

---

## Project Structure

```
stud_assign/
  backend/         # Django backend
  student-crud/    # Angular frontend
  README.md        # This file
```

---

## Backend (Django)

### Location
`backend/`

### Setup
1. Create and activate a virtual environment (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
   *(If requirements.txt is missing, install manually:)*
   ```bash
   pip install django djangorestframework django-cors-headers psycopg2-binary
   ```
3. Apply migrations:
   ```bash
   cd backend
   python manage.py migrate
   ```
4. Run the development server:
   ```bash
   python manage.py runserver
   ```

### API
- The backend exposes a REST API for student management.
- Default server: `http://127.0.0.1:8000/`

---

## Frontend (Angular)

### Location
`student-crud/`

### Setup
1. Install dependencies:
   ```bash
   cd student-crud
   npm install
   ```
2. Run the development server:
   ```bash
   npm start
   # or
   ng serve
   ```
3. Access the app at: `http://localhost:4200/`

---

## License

This project is for educational purposes. 