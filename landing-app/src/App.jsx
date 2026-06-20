import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import { Nav } from './sections/Nav.jsx';
import { Hero } from './sections/Hero.jsx';
import { Manifesto } from './sections/Manifesto.jsx';
import { FramedImage } from './sections/FramedImage.jsx';
import { Pillars } from './sections/Pillars.jsx';
import { TuristaVecino } from './sections/TuristaVecino.jsx';
import { Palabras } from './sections/Palabras.jsx';
import { Terraza } from './sections/Terraza.jsx';
import { CTASection } from './sections/CTASection.jsx';
import { Footer } from './sections/Footer.jsx';

export function App() {
  const [theme, setTheme] = React.useState(
    () => document.documentElement.getAttribute('data-theme') || 'light',
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  useScrollReveal();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <div id="top" />
      <Hero />
      <Manifesto />
      <FramedImage />
      <Pillars />
      <TuristaVecino />
      <Palabras />
      <Terraza />
      <CTASection />
      <Footer />
    </>
  );
}
