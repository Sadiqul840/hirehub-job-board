# HireHub Job Board

## Overview

HireHub Job Board is a React-based web application that allows users to browse available jobs, search for jobs, filter jobs by location, view job details, and save jobs for later viewing.

## Features

### Home Page

* Modern landing page
* Job statistics section
* Browse Jobs call-to-action button

### Job Listings

* View all available jobs
* Search jobs by title
* Filter jobs by location

### Job Details

* Detailed job information
* Company details
* Job type and location
* Save Job functionality

### Saved Jobs

* Stores saved jobs using LocalStorage
* View previously saved jobs

### Navigation

* React Router based navigation
* Home, Jobs, and Saved Jobs pages

## Technology Stack

* React
* Vite
* React Router DOM
* JavaScript
* CSS
* LocalStorage

## CI/CD

GitHub Actions workflow automatically:

* Installs dependencies
* Builds the application
* Validates successful builds on every push to the main branch

## Deployment

Application deployed using Vercel.

## Project Structure

src/
├── components/
│ └── Navbar.jsx
├── data/
│ └── jobs.js
├── pages/
│ ├── Home.jsx
│ ├── Jobs.jsx
│ ├── JobDetails.jsx
│ └── SavedJobs.jsx
├── App.jsx
└── main.jsx

## Author

Sadiqul Ameen
