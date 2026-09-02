# ARYAF Company Platform (أرياف)

A modern, high-performance web application for **ARYAF**, built with **Nuxt 4**, **Vue 3**, **TypeScript**, and **Tailwind CSS v4**. The platform provides e-commerce solutions, merchant success stories, interactive features, and flexible business growth tools tailored for modern merchants.

This is the public company/marketing website. It is separate from the authenticated Super Admin, Tenant Dashboard and tenant Storefront applications. Read the workspace [`AGENTS.md`](../../AGENTS.md) before changing shared product claims, links, branding or platform behavior.

## Platform boundaries

- Do not implement authenticated merchant or platform-operator workflows here; link to the appropriate production application.
- Keep Arabic RTL as the primary experience and verify English/LTR whenever localized content is added.
- Do not copy API keys, analytics secrets or production service credentials into public Nuxt runtime configuration.
- Product claims must match capabilities that are actually released across the Aryaf API and applications.
- Reuse the established design tokens, icon system and component hierarchy before adding a new visual pattern.

---

## 📋 System Requirements & Version Specifications

To run this project smoothly, make sure your development environment matches or exceeds the following version specifications:

| Requirement      | Recommended Version | Minimum Version |
| :--------------- | :------------------ | :-------------- |
| **Node.js**      | `v22.x.x` (LTS)     | `v20.0.0`       |
| **npm**          | `v11.x.x`           | `v10.0.0`       |
| **Nuxt**         | `v4.5.1`            | `v4.0.0`        |
| **Tailwind CSS** | `v4.3.3`            | `v4.0.0`        |
| **Vue.js**       | `v3.5+`             | `v3.0.0`        |

---

## 🚀 Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (Vue 3 Composition API with `<script setup>`)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS
- **Icons:** [Lucide Vue Next](https://lucide.dev/) & Custom SVG Icon System (`ARYAFIcon`)
- **Code Formatting:** [Prettier](https://prettier.io/)

---

## ✨ Features

- **Interactive Solutions Tabs:** Dynamic solution switcher with gradient highlights and modular data.
- **Merchant Stories Slider:** Smooth RTL interactive slider showcasing merchant testimonials.
- **Custom Icon System:** Scalable vector icons with customizable dimensions and gradient support.
- **Fully Responsive & RTL First:** Built specifically for Arabic e-commerce experience with seamless mobile and desktop support.

---

## ✨ Demo

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ARYAF-company
```

### 2. Install Dependencies

Make sure you are using **Node 22.x** and **npm 11.x**:

```bash
npm install
```

### 3. Run Development Server

Start the local dev server at `http://localhost:3000`:

```bash
npm run dev
```

---

## 📦 Scripts Overview

| Command                | Description                                                     |
| :--------------------- | :-------------------------------------------------------------- |
| `npm run dev`          | Starts the development server with Hot Module Replacement (HMR) |
| `npm run build`        | Builds the application for production deployment                |
| `npm run generate`     | Generates a static web application                              |
| `npm run preview`      | Previews the production build locally                           |
| `npm run format`       | Formats codebase using Prettier                                 |
| `npm run format:check` | Checks code style compliance using Prettier                     |

---

## 📂 Project Structure

```text
ARYAF-company/
├── app/
│   ├── assets/          # Global CSS styles & images
│   ├── components/      # Atomic Vue components (atoms, molecules, organisms, sections)
│   ├── constants/       # Centralized static data & tab configurations
│   ├── composables/     # Vue composables & state logic
│   ├── layouts/         # Application layouts
│   ├── pages/           # Application routes / views
│   └── @types/          # TypeScript interfaces & types
├── public/              # Static assets
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Project dependencies & scripts
└── README.md            # Project documentation
```
