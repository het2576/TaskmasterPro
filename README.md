# 🌐 TaskmasterPro

> TaskmasterPro is a visually stunning and feature-rich task management web application that empowers users to organize, prioritize, and track their productivity with intuitive voice-to-text input and insightful weekly statistics.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://google.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://google.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://google.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://google.com)
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

In today's fast-paced world, staying organized and productive can be a significant challenge. Many individuals struggle with scattered notes 📝, forgotten deadlines ⏰, and an overwhelming sense of tasks piling up. Traditional task managers often lack the visual appeal or intuitive features needed to truly engage users and simplify their daily routines, leading to decreased efficiency and increased stress.

TaskmasterPro addresses these pain points head-on. It provides a centralized, visually stunning platform where users can effortlessly add, categorize, and prioritize tasks. With unique features like 🎙️ voice-to-text input for rapid task creation and 📊 weekly progress charts powered by Recharts, TaskmasterPro transforms task management into an engaging and insightful experience. Its modern Nuebrutal UI, built with Tailwind CSS, ensures a responsive and aesthetically pleasing interface across all devices, making productivity both organized and enjoyable.

---

## ✨ Features

- ✅ **Core Task Management** — Add, complete, delete, and prioritize tasks to maintain a clear overview of your workload.
- 🗂️ **Smart Categorization** — Organize tasks into custom categories like Personal, Work, or Shopping for better filtering and focus.
- 🎙️ **Voice-to-Text Input** — Effortlessly create new tasks using the Web Speech API for quick, hands-free entry.
- 📊 **Weekly Progress Tracking** — Visualize your productivity with insightful pie and bar charts powered by Recharts, showing completed tasks and progress over time.
- 🎨 **Nuebrutal UI & Responsive Design** — Experience a visually stunning and modern user interface, meticulously crafted with Tailwind CSS to be fully responsive across all devices.
- ✨ **Fluid User Experience** — Enjoy smooth and engaging animations and transitions throughout the application, enhancing interactivity with Framer Motion.

---

## 🛠️ Tech Stack

**🎨 Frontend**
| Technology | Version | Purpose |
|---|---|---|
| React | ^18.2.0 | UI library for building interactive user interfaces |
| TypeScript | ^5.2.2 | Statically typed superset of JavaScript for enhanced code quality |
| Tailwind CSS | ^3.3.3 | Utility-first CSS framework for rapid UI development |
| Vite | ^4.4.5 | Next-generation frontend tooling for fast development |
| Zustand | ^4.4.1 | Small, fast, and scalable bear-bones state-management solution |
| Recharts | ^2.8.0 | Composable charting library built with React and D3 |
| Radix UI | ^1.0.3 | Unstyled, accessible components for building high-quality UIs |
| date-fns | ^2.30.0 | Modern JavaScript date utility library |

---

## 📋 Prerequisites

> ⚠️ Make sure you have all of these installed before starting.

1. **Node.js 18+** — [Download](https://nodejs.org) · Check: `node --version`
2. **npm** — Comes with Node.js · Check: `npm --version`
3. **git** — [Download](https://git-scm.com/downloads) · Check: `git --version`

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

```bash
npm run dev
```

Open **http://localhost:3000** in your browser 🌐.

### Quick Start Example

TaskmasterPro makes adding tasks incredibly intuitive, especially with its 🎙️ voice-to-text feature. Once the application is running, simply click the microphone icon and speak your task.

```typescript
// Conceptual example of adding a task via voice input
import { useTaskStore } from './src/store/taskStore'; // Assuming Zustand store
import { useSpeechRecognition } from 'react-speech-recognition';

function VoiceTaskCreator() {
  const addTask = useTaskStore((state) => state.addTask);
  const { transcript, listening, startListening, stopListening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const handleVoiceInput = () => {
    if (listening) {
      stopListening();
      if (transcript) {
        addTask({
          id: Date.now().toString(), // Simple ID generation
          text: transcript,
          category: 'Uncategorized',
          priority: 'Medium',
          completed: false,
          createdAt: new Date().toISOString()
        });
        console.log(`Task added: "${transcript}"`);
      }
    } else {
      startListening();
    }
  };

  return (
    <div>
      <button onClick={handleVoiceInput}>
        {listening ? '🔴 Stop Speaking' : '🎙️ Start Speaking'}
      </button>
      {listening && <p>Listening: {transcript}</p>}
    </div>
  );
}
```
This example demonstrates the core logic for integrating voice input to create a task, leveraging `react-speech-recognition` and the `Zustand` store. Users can speak their tasks, and the application will automatically transcribe and add them to their list.

---

## 📁 Project Structure

```
TaskmasterPro/
├── public/             # Static assets (e.g., index.html, favicon)
├── src/                # Main application source code
│   ├── assets/         # Images, icons, and other media
│   ├── components/     # Reusable UI components (e.g., buttons, cards)
│   ├── hooks/          # Custom React hooks for shared logic
│   ├── pages/          # Top-level components for different views/routes
│   ├── store/          # Zustand stores for global state management
│   ├── styles/         # Global styles and Tailwind CSS configuration
│   ├── utils/          # Utility functions and helpers
│   └── main.tsx        # Application entry point
├── .env.example        # Environment variables template
├── .gitignore          # Files and directories to ignore in Git
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration for Tailwind CSS
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build configuration
└── README.md           # This file
```
The project follows a standard React application structure, organized primarily by concern. The `src` directory houses all application logic, with `components` for reusable UI elements, `store` for global state management via Zustand, and `pages` for distinct application views. This modular approach promotes maintainability and scalability.

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

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch: `git checkout -b feat/amazing-feature`
3. 💾 **Commit** your changes: `git commit -m 'feat: add amazing feature'`
4. 📤 **Push** to the branch: `git push origin feat/amazing-feature`
5. 🔁 **Open** a Pull Request

**Commit convention:** We use [Conventional Commits](https://conventionalcommits.org)
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `refactor:` — code change, no feature or fix
- `test:` — add or update tests

---

## 📄 License

This project is licensed under the **MIT License**.

You're free to use, modify, and distribute this project for any purpose 🚀.
See the [LICENSE](LICENSE) file for full details.

---

<div align="center">

### Built with ❤️ by [het2576](https://github.com/het2576)

If this project helped you, consider giving it a ⭐

[⭐ Star this repo](https://github.com/het2576/TaskmasterPro) · [🐛 Report a Bug](https://github.com/het2576/TaskmasterPro/issues) · [💡 Request a Feature](https://github.com/het2576/TaskmasterPro/issues)

</div>