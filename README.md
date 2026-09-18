<div align="center">

# 🎯 Number Guessing Game

### A simple, interactive browser game built with HTML, CSS & JavaScript.

Guess the randomly generated number between **1 and 100** with helpful hints and an attempt counter.

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🎮 About the Game

**Number Guessing Game** is a small browser-based project created to practice JavaScript fundamentals and DOM interaction.

The game generates a random number between **1 and 100**. The player keeps submitting guesses until the correct number is found.

After every valid guess, the game provides a hint:

- ⬇️ **Too Low** — Try a higher number
- ⬆️ **Too High** — Try a lower number
- 🎉 **Correct** — You found the number!

Once the game is completed, the player can start a new round using the **Play Again** button.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎲 Random Number | Generates a new number between 1 and 100 |
| 💡 Guess Hints | Tells the player whether the guess is too high or too low |
| 🔢 Attempt Counter | Tracks valid guesses made by the player |
| ⚠️ Input Validation | Prevents empty or out-of-range guesses |
| 🏆 Win Detection | Detects when the player finds the secret number |
| 🔄 Play Again | Resets the game and generates a new secret number |
| 🌐 Browser Based | Runs directly in a modern web browser |

---

## 🧠 Concepts Practiced

This project helped me practice:

- Variables and data types
- `if / else if / else`
- Comparison operators
- Functions
- Loops
- User input
- DOM manipulation
- Event handling
- Template literals
- `Math.random()`
- `Math.floor()`
- Application state
- Input validation
- Updating UI based on user actions

---

## 📂 Project Structure

```text
Number-Guessing-Game/
│
├── index.html
├── app.js
├── style.css
└── README.md
```
---

## 🚀 Getting Started

### Prerequisites

You only need:

- A modern web browser
- Git, if you want to clone the repository
- VS Code + Live Server (optional)

**No Node.js, npm, database, or external dependencies are required.**

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/<your-username>/<your-repository-name>.git
```

For example:

```bash
git clone https://github.com/Goushik-Raja-R/Number-Guessing-Game.git
```

### 2. Open the Project Folder

```bash
cd Number-Guessing-Game
```

### 3. Run the Game

#### Option 1 — Open Directly

Open `index.html` in your browser.

#### Option 2 — Use VS Code + Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The game will open in your browser.

---

## 💻 Use the Project on Another Device

Because this is a simple frontend project, you can use it on another computer without installing project dependencies.

### On the new device:

**1. Install Git**

Then clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repository-name>.git
```

**2. Enter the project directory**

```bash
cd Number-Guessing-Game
```

**3. Open `index.html`**

You can open it directly in a browser, or use VS Code + Live Server.

That's it. 🎯

### 🔄 Get the Latest Changes

If the repository is already cloned on another device:

```bash
git pull origin main
```

This downloads the latest version from GitHub.

---

## 🕹️ How to Play

```text
        START
          │
          ▼
   Generate Number
      1 — 100
          │
          ▼
     Enter a Guess
          │
          ▼
     ┌─────────────┐
     │  Compare    │
     │    Guess    │
     └─────────────┘
       │    │    │
       ▼    ▼    ▼
     LOW  HIGH  CORRECT
       │    │      │
       └────┴──────┘
              │
              ▼
         Play Again
```

---

## 📚 What I Learned

This project was a practical step from solving individual JavaScript exercises to building a complete interactive application.

While building it, I practiced connecting JavaScript logic with HTML elements, handling user events, managing application state, validating input, and updating the UI based on the player's actions.

---

<div align="center">

### 🚀 Built while learning. Built to improve.

**HTML • CSS • JavaScript**

</div>
