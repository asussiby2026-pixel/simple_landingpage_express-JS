# Express.js Profile Landing Page (Brittany Chiang & Lee Robinson Hybrid)

> **Assignment:** Setup Simple landing page (your profile) using ExpressJS and HTML  
> **Course:** Pemrograman Berbasis Platform — Session 6  
> **Inspiration:** [brittanychiang.com](https://brittanychiang.com/) & [leerob.com](https://leerob.com/)  
> **Student:** Fatoumata Siby  

---

## 🌟 Overview & Design Features

This personal profile website blends the best features of two world-renowned developer portfolios:

1. **Inspired by [Lee Robinson (leerob.com)](https://leerob.com/)**:
   - **Personal Avatar**: High-resolution circular portrait with a teal glow gradient border.
   - **Availability Indicator**: Live pulsing status pill (`🟢 Open for opportunities`).
   - **Categorized Skills Grid**: Clean structured cards for Backend & Servers, Frontend Engineering, and Tools & Databases.
   - **Connect & Contact CTA**: Direct "Say Hello" button for networking and inquiries.

2. **Inspired by [Brittany Chiang (brittanychiang.com)](https://brittanychiang.com/)**:
   - **Two-Column Split Layout**: Desktop layout with a sticky left sidebar and smooth-scrolling right content.
   - **Interactive Mouse Spotlight**: Flashlight radial gradient that tracks cursor movement across the dark slate (`#0f172a`) background.
   - **ScrollSpy Indicator Lines**: Dynamic horizontal indicator lines that expand and turn teal when navigating between `#about`, `#experience`, `#projects`, `#skills`, `#education`, and `#contact`.
   - **Card Group Dimming**: Hovering over any experience or project card focuses the hovered card and softly dims siblings, with animated arrow transitions (`↗`).
   - **Tech Badges**: Teal pill tags for quick scanning of technologies.

3. **Backend & Architecture**:
   - Powered by **Express.js** (`server.js`).
   - Serves static assets from `public/`.
   - Built-in photo auto-copier and `/images/profile.jpg` route handler.
   - Active `/api/profile` JSON endpoint for REST API demonstration.

---

## 📁 File Structure

```text
setup simple landing page (your profile) using express JS and HTML/
├── public/
│   ├── css/
│   │   └── style.css          # Hybrid theme (Slate-900, Teal, animations & responsive grid)
│   ├── js/
│   │   └── main.js            # Spotlight glow, ScrollSpy & smooth anchor scrolling
│   ├── images/
│   │   └── profile.jpg        # Profile photo
│   └── index.html             # Profile landing page markup
├── server.js                  # Express.js server & image handler
├── package.json               # Node.js dependencies & scripts
└── README.md                  # Documentation and submission details
```

---

## 🚀 How to Run

### Step 1: Install Dependencies
Open your terminal (PowerShell, Command Prompt, or VS Code terminal) in this folder and run:

```bash
npm install
```

### Step 2: Start the Express Server
```bash
npm start
```
*(Alternatively, run `npm run dev` to enable auto-reload on file edits).*

### Step 3: View in Browser
Open your browser and visit:

👉 **[http://localhost:3000](http://localhost:3000)**

You can also view your profile data via the API endpoint:

👉 **[http://localhost:3000/api/profile](http://localhost:3000/api/profile)**

---

## 📝 Assignment Submission Notes (Session 6: Pemrograman Berbasis Platform)

- **Express.js Integration**: The server is implemented in `server.js` using Express.js middleware, static serving, and JSON endpoints.
- **HTML & CSS**: Handcrafted semantic HTML5 and responsive modern CSS3 without heavy external UI dependencies.
- **Student Profile**: Tailored with your name (**Fatoumata Siby**), photo, coursework details, project history, and experience.
