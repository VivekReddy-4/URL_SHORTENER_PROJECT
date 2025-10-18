🌐 URL Shortener Project
A simple Node.js + Express + MongoDB based project that shortens long URLs into short codes.
The project uses EJS for frontend rendering, Mongoose for database interaction, and shortid for generating unique short codes.

🚀 Features

Shorten any long URL to a compact short URL.

Redirect users to the original URL when they visit the short one.

Stores all URLs in MongoDB.

Clean, responsive frontend built using EJS.

Simple and efficient backend using Express.js.

🛠️ Technologies Used

Node.js – Backend runtime

Express.js – Web framework

MongoDB + Mongoose – Database for storing URLs

EJS – Template engine for rendering pages

shortid – To generate unique short codes

URL_SHORTENER_PROJECT/
│
├── Controllers/
│   └── url.js           # Contains logic for shortening and redirecting URLs
│
├── Models/
│   └── Url.js           # Mongoose schema and model
│
├── views/
│   └── index.ejs        # Frontend EJS template
│
├── server.js            # Main server file
├── package.json
├── .gitignore
└── README.md
