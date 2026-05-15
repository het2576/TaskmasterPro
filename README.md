# 🌐 TaskmasterPro

> TaskmasterPro is a visually stunning web application that transforms scattered tasks into an organized, interactive, and voice-enabled productivity hub.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 📖 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Installation](#️-installation)
- [🔐 Environment Variables](#-environment-variables)
- [🚀 Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 About

Are you tired of juggling scattered notes, forgotten deadlines, and an overwhelming mental to-do list? Traditional task managers often feel clunky or uninspiring, leading to a lack of engagement and ultimately, missed productivity opportunities. The constant struggle to keep track of commitments can be a significant drain on focus and efficiency, leaving you feeling disorganized and behind.

TaskmasterPro tackles these challenges head-on by providing an intuitive and engaging platform for organizing your productivity. It offers a visually stunning Nuebrutal UI 🎨, making task management an enjoyable experience. With innovative features like voice-to-text input 🎤 for rapid task creation and weekly progress charts 📊 to visualize your achievements, TaskmasterPro ensures your tasks are not just managed, but mastered. It's designed to bring clarity and control back to your daily workflow.

---

## ✨ Features

- ⚙️ **Comprehensive Task Management** — Add, complete, delete, and prioritize tasks with a streamlined interface.
- 🎤 **Voice-to-Text Input** — Rapidly create tasks using natural language voice commands, enhancing efficiency.
- 📊 **Weekly Progress Tracking** — Visualize your productivity with interactive pie and bar charts powered by Recharts.
- 🎨 **Nuebrutal UI Design** — Experience a distinctive, modern, and visually striking user interface built with Tailwind CSS.
- 🚀 **Fluid Animations** — Enjoy a smooth and engaging user experience with subtle, performance-optimized animations from Framer Motion.
- 🏷️ **Task Categorization & Filtering** — Organize your tasks effectively by assigning categories and filtering them for focused work.

---

## 🛠️ Tech Stack

**🎨 Frontend**
| Technology | Purpose |
|---|---|
| React | UI library for building interactive user interfaces |
| TypeScript | Statically typed superset of JavaScript for enhanced code quality |
| Tailwind CSS | Utility-first CSS framework for rapid, custom UI development |
| Vite | Next-generation frontend tooling for fast development |
| Zustand | Lightweight, fast, and scalable state management solution |
| Recharts | Composable charting library for displaying weekly progress |
| Radix UI | Unstyled, accessible UI components for building design systems |
| date-fns | Modern JavaScript utility library for date parsing and formatting |
| framer-motion | Production-ready motion library for fluid animations |
| react-speech-recognition | React hook for voice-to-text capabilities |

---

## 📋 Prerequisites

> ⚠️ Make sure you have all of these installed before starting.

1.  **Node.js 18+** — [Download](https://nodejs.org) · Check: `node --version`
2.  **npm** — Comes with Node.js · Check: `npm --version`
3.  **git** — [Download](https://git-scm.com/downloads) · Check: `git --version`

---

## ⚙️ Installation

### Step 1 — Clone the repository

```bash
git clone https://github.com/het2576/TaskmasterPro.git
cd TaskmasterPro
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Configure environment

```bash
cp .env.example .env.local
```

> 💡 Open `.env.local` and fill in your values. See [Environment Variables](#-environment-variables) below.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# No environment variables required
```

> 🔒 **Never commit your `.env.local` file.** It's already in `.gitignore`.

---

## 🚀 Usage

### Development Server

To start the development server:

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### Quick Start Example

Once the TaskmasterPro application is running in your browser, you can immediately start managing tasks. A key feature is the voice-to-text input for rapid task creation:

1.  **Activate Voice Input:** Look for the 🎙️ microphone icon (typically near the task input field) and click it to enable listening.
2.  **Speak Your Task:** Clearly state your task. For example, you might say: "Add task: Call client about project status by tomorrow."
3.  **Observe:** TaskmasterPro will transcribe your speech and automatically create a new task with the specified details.
4.  **Prioritize:** You can also use voice commands to manage existing tasks, such as: "Prioritize: Finish documentation" to quickly mark a task as high priority.

This allows for incredibly fast and hands-free task entry, keeping your workflow fluid.

---

## 📁 Project Structure

```
TaskmasterPro/
├── public/             # Static assets (e.g., index.html, favicon)
├── src/                # Main application source code
│   ├── assets/         # Images, icons, and other static media
│   ├── components/     # Reusable UI components (e.g., buttons, cards, dialogs)
│   ├── hooks/          # Custom React hooks for shared logic
│   ├── lib/            # Utility functions, helpers, and configuration
│   ├── store/          # Zustand state management definitions
│   ├── views/          # Main application pages/screens
│   ├── App.tsx         # Root component of the application
│   ├── main.tsx        # Entry point for React rendering
│   └── index.css       # Global styles and Tailwind CSS imports
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build tool configuration
└── README.md           # This file
```

The project follows a component-based architecture within the `src/` directory, organizing code into logical domains like `components/`, `hooks/`, and `store/`. This structure promotes modularity, reusability, and maintainability, making it easy to locate and manage different parts of the application.

---

## 🤝 Contributing

Contributions make this project better. Here's how to get involved:

### 🐛 Reporting Bugs

Before creating a bug report:
- ✅ Check the [existing issues](https://github.com/het2576/TaskmasterPro/issues)
- ✅ Collect your environment details (OS, Node version, browser)
- ✅ Reproduce the bug consistently

**[Create a bug report →](https://github.com/het2576/TaskmasterPro/issues/new)**

### 💡 Suggesting Features

Feature suggestions are tracked as GitHub issues.

**[Suggest a feature →](https://github.com/het2576/TaskmasterPro/issues/new)**

### 🔧 Pull Requests

1.  🍴 **Fork** the repository
2.  🌿 **Create** a feature branch: `git checkout -b feat/amazing-feature`
3.  💾 **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4.  📤 **Push** to the branch: `git push origin feat/amazing-feature`
5.  🔁 **Open** a Pull Request

**Commit convention:** We use [Conventional Commits](https://conventionalcommits.org)
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `refactor:` — code change, no feature or fix
- `test:` — add or update tests

---

## 📄 License

This project is licensed under the **MIT License**.

You're free to use, modify, and distribute this project for any purpose.
See the [LICENSE](LICENSE) file for full details.

---

<div align="center">

### Built with ❤️ by [het2576](https://github.com/het2576)

If this project helped you, consider giving it a ⭐

[⭐ Star this repo](https://github.com/het2576/TaskmasterPro) · [🐛 Report a Bug](https://github.com/het2576/TaskmasterPro/issues) · [💡 Request a Feature](https://github.com/het2576/TaskmasterPro/issues)

</div>