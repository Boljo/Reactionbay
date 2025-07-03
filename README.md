# ReactionBay - The Amazon of Scientific Equipment

A Next.js marketplace landing page for scientific equipment, featuring internationalization support for English (.com) and German (.de) domains.

## Features

- 🌍 **Internationalization**: Automatic language detection based on domain
  - `reactionbay.com` → English
  - `reactionbay.de` → German
- 🎨 **Amazon-like Design**: Modern, responsive UI inspired by Amazon's marketplace
- 📧 **Email Subscription**: Collect interested users for launch notifications
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Next.js and optimized for speed

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: Custom i18n solution
- **Deployment**: Ready for Hetzner server deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd reactionbay
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
reactionbay/
├── src/
│   ├── components/
│   │   └── LandingPage.tsx      # Main landing page component
│   ├── locales/
│   │   ├── en.json             # English translations
│   │   └── de.json             # German translations
│   ├── pages/
│   │   ├── api/
│   │   │   └── subscribe.ts    # Email subscription API
│   │   └── index.tsx           # Main page with i18n
│   └── utils/
│       └── i18n.ts             # Internationalization utilities
├── public/                     # Static assets
└── data/                       # Generated data (subscribers)
```

## Deployment

### Local Testing

To test different languages locally, you can modify your hosts file or use different ports:

```bash
# English version
npm run dev

# German version (test with different port)
npm run dev -- -p 3001
```

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Domain Configuration

- **reactionbay.com**: Points to English version
- **reactionbay.de**: Points to German version

Both domains should point to your Hetzner server IP: `95.217.131.27`

## Email Subscriptions

Subscriptions are stored in `data/subscribers.txt` with the format:
```
email@example.com,2024-01-01T12:00:00.000Z
```

## Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `fr.json`)
2. Update the `getLocaleFromHost` function in `src/utils/i18n.ts`
3. Add the new locale to the `Locale` type

### Modifying the Design

The main styling is in `src/components/LandingPage.tsx` using Tailwind CSS classes. The design follows Amazon's color scheme with orange accents.

### Adding Real Images

Replace the placeholder mockup section in `LandingPage.tsx` with your actual UI mockup images:

```tsx
{/* Replace this section with your actual mockup */}
<div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
  {/* Your mockup image here */}
</div>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to ReactionBay.

## Support

For questions or support, contact the development team.
