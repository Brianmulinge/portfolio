# Personal Web Developer Portfolio

Welcome to the repository for my personal web developer portfolio, showcasing my skills, experience, and projects as a developer. This portfolio is built using Next.js, a popular React framework, and styled with Tailwind CSS, a modern utility-first CSS framework. Additionally, Framer Motion is used for animations to create a smooth and interactive user experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)

## Features

- Responsive design, optimized for mobile, tablet, and desktop devices
- Next.js framework for server-rendered React applications
- Tailwind CSS for rapid, utility-first styling
- Framer Motion for smooth and responsive animations
- Contact form integration with email sending capabilities
- SEO optimized with meta tags and Open Graph protocol

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Ensure that you have the following installed on your local machine:

- Node.js (version 14.x or later)
- npm (version 7.x or later)

### Installation

1. Clone this repository:

```bash
git clone git@github.com:Brianmulinge/portfolio.git
```

2. Change to the project directory:
```bash
cd portfolio
```
3. Install the dependencies:
```bash
npm install
```
4. Run the development server:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:3000 to view the portfolio site.

# Customization
To customize this portfolio for your own personal use, follow these steps:

Update the src/components/Landing.tsx file with your personal information, including your name, email address, social media links, and profile picture.

Add your projects to the src/data/Projectdata.tsx file. Include relevant details such as project name, description, live URL, and repository URL.

Replace the images in the src/images/folder with your own project screenshots.

Customize the Tailwind CSS configuration file tailwind.config.js to match your preferred color scheme and design.

Modify any other components or styles as desired.

# Deployment
To deploy your portfolio site to a hosting provider, follow their specific instructions. For a popular option like Vercel, you can deploy your site with the following steps:

Install the Vercel CLI:
```bash
npm install -g vercel
```
Run the Vercel deployment command:
```bash
vercel
```
Follow the prompts to complete the deployment process.
