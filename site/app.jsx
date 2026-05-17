// Mounts the app.

const { useState: _useS, useEffect: _useE } = React;

function App() {
  return (
    <div className="page">
      <SiteHeader />
      <Hero />
      <About />
      <FeaturedWork />
      <Archive />
      <Timeline />
      <Skills />
      <Contact />
      <SiteFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
