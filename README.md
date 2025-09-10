# Assignment 02: Mini React Weather UI

## Overview
In this assignment you’ll build a **mini React weather UI**. You’ll practice components, props, and state with **mocked data** (no API yet). You may optinally **deploy** your app to **GitHub Pages** and submit the live link.

> You’ll first warm up with a quick **static Weather UI** pattern (multiple cards with hardcoded data), then complete the full assignment with **user input + UI states** and optional deployment.

---

## Learning Objectives
- Practice React fundamentals: **JSX, functional components, props**.
- Manage simple **state** with `useState` to control user input and results.
- Build a small UI using basic **layout and styling**.
- **Deploy** a React app to **GitHub Pages**.

---

## What You’ll Build
A React app that shows weather details for a city. You’ll:
1. **Static practice:** Show weather for ~3 cities using **hardcoded data** in reusable cards.
2. **Assignment app:** Add a **SearchBar** where a user enters a city, click a **Get Weather** button, and show a **WeatherCard** for that city using **mocked data**.

> Note: No external API required yet; you may randomize or choose a fixed mapping for conditions/temperatures.

---

## Requirements
**Minimum components (2+):**
- `SearchBar` (text input + button)
- `WeatherCard` (city, temperature, condition, and optional icon)
- `WeatherApp` (root, composes the above)
- *(Optional)* `WeatherInfo` (for extra details)

**Functionality & UI states:**
- **State management** for city input and displayed results.
- **Loading** and **Empty** states (mock loading is fine; e.g., a short timeout).
- **Basic styling** via external CSS file. Aim for consistent spacing and typography.

**Deployment (Optional):**
- You may publish to **GitHub Pages**. Submit **live URL** at the end of [`video.md`](/video.md) file, if deployed.

---

## Component Breakdown (suggested)
- **WeatherApp (root):** Holds app-level state; composes SearchBar and WeatherCard.
- **SearchBar:** Controlled input for city name + button to trigger update.
- **WeatherCard:** Displays `city`, `temp`, `condition`, and an **optional icon** (e.g., ☀️ ☁️ 🌧️). Accepts these as **props**.
- **WeatherInfo (optional):** Add-ons like humidity, wind, etc., if you mock those.

---

## Step-by-Step Guide
### 0) Project setup
- Use **Vite** to scaffold your project.
- Confirm it runs locally (`npm install`, `npm run dev`).

### 1) Static practice (warm-up)
- Build a `WeatherCard` and render **3 cities** with hardcoded data in `WeatherApp`.
- Focus on **component props**, **layout**, and **consistent styling**.

### 2) Add user input & state
- Create a `SearchBar` with a **controlled input** (`value`, `onChange`).
- On **Get Weather** click, set state in `WeatherApp` with a mocked weather object (e.g., from a lookup table `{ Boston: {...}, ... }`).
- Pass the data to `WeatherCard` as **props**.

### 3) Handle UI states
- **Empty state:** Before any search, show a friendly message or placeholder.
- **Loading state:** On search click, simulate loading (e.g., `setTimeout`) and display a loading indicator.
- **Result state:** Show the `WeatherCard` with the mocked data.

### 4) Styling
- Use external CSS files. Keep spacing, font sizes, and alignment consistent.
- Consider a responsive layout (cards centered, readable on laptop/mobile).

### 5) Deploy to GitHub Pages (Optional)
- Use the **gh-pages** workflow.
- Build and publish. Verify your live URL works end-to-end.

---

## Evaluation Rubric (100%)
- **Functionality** – 45%  
  *Input updates state; loading/empty states; card renders from props.*
- **Code clarity & use of props/state** – 35%  
  *Readable components, clear data flow, sensible naming.*
- **Styling/UX** – 20%  
  *Consistent layout, spacing, and visual clarity.*
- **Deployment** – 0%  
  *Working live URL with correct content.*

---
<!-- BEGIN GENERAL INSTRUCTIONS -->
### 💡 Reminder: 

- A short **walkthrough video** (3-min max) demonstrating your application is required. Refer to the [`video.md`](/video.md) for complete details.

---

## ✅ Responsible Use of AI Tools

You are encouraged to use AI tools (such as Gemini, GitHub Copilot, and ChatGPT) to assist your learning, debug code, and explore best practices. However, AI should be used as a **guide**, not as an **author**. Your final code, explanations, and design decisions must reflect **your own understanding**.

You must:

1. **Do not submit AI-generated code without review.** Each assignment includes a quiz to assess your understanding.
2. **Do not use LLMs to answer conceptual or reflective questions.**
3. **Log all major prompts** in [`prompts.md`](prompts.md). This will be **graded** as part of your submission.
4. **Understand your code** before submitting. If you can't explain it, **don't submit it**.

---

## 🤔 Feeling Stuck?

Here’s what to do:

1. Review the assignment instructions and example materials posted on Moodle.
2. Post conceptual questions on the **“Ask the Class” forum** on Moodle. Do **not** post code publicly.
3. Search online for error messages or docs related to the assigment.
4. Attend office hours for help.

---

## ✅ Submission Instructions

Assignments are submitted via GitHub.
Submitting to GitHub simply means pushing your changes to your repository before the deadline. You may push changes multiple times before the deadline; the latest valid push will be graded.

From your Codespace terminal, run:
   ```bash
   ./scripts/submit.sh
   ```
This will commit and push your changes. Contact staff if this fails.

---

## 💻 Working on Assignments

Each assignment starts from the link posted on Moodle:

1. Click the assignment link.
2. Click **“Accept this assignment”**.
3. Click **“Open in Codespaces”** to launch your dev environment.

You’ll be taken to a fully configured cloud-based VSCode editor. No setup is needed, just log in and start coding. You do need an active internet connection.

---

Good luck and enjoy building your apps!

— Prof. Hadi Mohammadi  
hadi@brandeis.edu

<!-- END GENERAL INSTRUCTIONS -->
