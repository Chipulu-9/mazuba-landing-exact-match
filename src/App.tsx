import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import Services from './components/sections/Services';
import WhyChoose from './components/sections/WhyChoose';
import ExtendedProducts from './components/sections/ExtendedProducts';
import ToastContainer from './components/ToastContainer';
import { useToast } from './hooks/useToast';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Services />
      <WhyChoose />
    </>
  );
}

function QuotePage({ showToast }: { showToast: (message: string, type?: 'success' | 'error') => void }) {
  return <ExtendedProducts showToast={showToast} />;
}

export default function App() {
  const { toasts, showToast, removeToast } = useToast();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage showToast={showToast} />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </BrowserRouter>
  );
}
