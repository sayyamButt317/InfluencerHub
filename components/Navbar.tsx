
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e0e4e2] bg-white/90 backdrop-blur-md px-4 sm:px-6 md:px-20 py-3">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="size-8 sm:size-10 bg-primary rounded-lg flex items-center justify-center text-indigo-deep">
            <span className="material-symbols-outlined text-xl sm:text-2xl">hub</span>
          </div>
          <h2 className="text-indigo-deep text-lg sm:text-xl font-bold leading-tight tracking-tight">InfluencerPlatform</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-indigo-deep text-sm font-semibold hover:text-primary transition-colors" href="#">Marketplace</a>
          <a className="text-indigo-deep text-sm font-semibold hover:text-primary transition-colors" href="#tools">Tools</a>
          <a className="text-indigo-deep text-sm font-semibold hover:text-primary transition-colors" href="#">Pricing</a>
          <a className="text-indigo-deep text-sm font-semibold hover:text-primary transition-colors" href="#">Case Studies</a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex gap-3">
            <button className="flex items-center justify-center rounded-full h-10 px-5 bg-background-light text-indigo-deep text-sm font-bold hover:bg-gray-200 transition-colors">
              Login
            </button>
            <button className="flex items-center justify-center rounded-full h-10 px-6 bg-primary text-indigo-deep text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-indigo-deep hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <a className="text-indigo-deep text-lg font-bold border-b border-gray-50 pb-2" href="#" onClick={() => setIsMenuOpen(false)}>Marketplace</a>
            <a className="text-indigo-deep text-lg font-bold border-b border-gray-50 pb-2" href="#tools" onClick={() => setIsMenuOpen(false)}>Tools</a>
            <a className="text-indigo-deep text-lg font-bold border-b border-gray-50 pb-2" href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a className="text-indigo-deep text-lg font-bold border-b border-gray-50 pb-2" href="#" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
          </nav>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center rounded-full h-12 bg-background-light text-indigo-deep font-bold">
              Login
            </button>
            <button className="flex items-center justify-center rounded-full h-12 bg-primary text-indigo-deep font-bold shadow-lg shadow-primary/20">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
