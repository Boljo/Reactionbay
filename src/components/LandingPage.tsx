import React, { useState } from 'react';
import { Locale, getTranslations } from '../utils/i18n';

interface LandingPageProps {
  locale: Locale;
}

export default function LandingPage({ locale }: LandingPageProps) {
  const t = getTranslations(locale);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        console.error('Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">ReactionBay</h1>
            </div>
            <div className="text-sm text-gray-500">
              {t.footer.comingSoon}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 font-semibold mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>

          {/* UI Mockup Image */}
          <div className="bg-white rounded-lg shadow-2xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={locale === 'de' ? '/UI_DE.jpeg' : '/UI_EN.jpeg'}
                alt={locale === 'de' ? 'Deutsche UI-Mockup' : 'English UI Mockup'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            {!isSubscribed ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t.subscription.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t.subscription.description}
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.subscription.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? '...' : t.subscription.button}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-green-500 text-4xl mb-4">✓</div>
                <p className="text-gray-900 font-semibold">
                  {t.subscription.success}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
} 