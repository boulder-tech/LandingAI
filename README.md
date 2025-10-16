# AI Boulder Tech - Landing Page

A modern landing page for AI + n8n Agents built with React, Node.js, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized React components and Tailwind CSS
- **SEO Optimized**: Meta tags and structured content
- **Contact Forms**: Backend API for handling form submissions

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Backend**: Node.js, Express
- **Styling**: Tailwind CSS with custom components
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies for both frontend and backend:
```bash
npm run install-all
```

2. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend React app on http://localhost:3000
- Backend Express server on http://localhost:5000

### Individual Commands

- **Start backend only**: `npm run server`
- **Start frontend only**: `npm run client`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`

## Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── index.css      # Tailwind CSS
│   │   └── index.js       # React entry point
│   └── package.json       # Frontend dependencies
├── server.js              # Express backend
├── package.json           # Backend dependencies
└── README.md             # This file
```

## Components

- **Header**: Navigation with scroll effects
- **Hero**: Main landing section with CTAs
- **ValueProps**: Key benefits and features
- **UseCases**: Detailed use case examples
- **HowItWorks**: 3-step process explanation
- **WhyN8n**: Benefits of n8n + LLMs
- **Security**: Security and compliance features
- **Results**: Expected outcomes and metrics
- **Plans**: Pricing tiers
- **Testimonials**: Client testimonials
- **FAQ**: Frequently asked questions
- **FinalCTA**: Final call-to-action
- **Footer**: Links and contact info

## API Endpoints

- `POST /api/contact` - Contact form submission
- `POST /api/diagnostic` - Diagnostic request form

## Customization

### Colors
Edit `client/tailwind.config.js` to customize the color scheme:
- Primary colors: Used for CTAs and highlights
- Secondary colors: Used for text and backgrounds

### Content
All content is in the React components. Edit the text directly in:
- `client/src/components/` files

### Styling
Custom styles are in `client/src/index.css` using Tailwind's `@layer` directive.

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy
The built files will be in `client/build/`. Deploy this directory to any static hosting service like:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Environment Variables
Create a `.env` file in the root directory:
```
PORT=5000
NODE_ENV=production
```

## License

MIT License - feel free to use this template for your own projects.

## Support

For questions or support, contact: hello@ai.bouldertech.fi