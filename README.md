# AI Boulder Tech - Landing Page

A modern, static landing page for AI + n8n Agents built with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized React components and Tailwind CSS
- **SEO Optimized**: Meta tags and structured content
- **Static Hosting**: No backend required - deploy anywhere

## Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Styling**: Tailwind CSS with custom components
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm run install-deps
```

2. Start the development server:
```bash
npm start
```

This will start the React app on http://localhost:3000

### Available Commands

- **Start development server**: `npm start`
- **Build for production**: `npm run build`
- **Run tests**: `npm test`

## Project Structure

```
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── index.css      # Tailwind CSS
│   │   └── index.js       # React entry point
│   ├── build/             # Production build
│   └── package.json       # Dependencies
├── package.json           # Root scripts
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


## License

MIT License - feel free to use this template for your own projects.

## Support

For questions or support, contact: hello@ai.bouldertech.fi