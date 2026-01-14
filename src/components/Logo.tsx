const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Globe */}
          <circle cx="24" cy="24" r="18" className="stroke-secondary" strokeWidth="2" fill="none" />
          <ellipse cx="24" cy="24" rx="8" ry="18" className="stroke-secondary" strokeWidth="1.5" fill="none" />
          <path d="M6 24h36" className="stroke-secondary" strokeWidth="1.5" />
          <path d="M10 14h28" className="stroke-secondary" strokeWidth="1" />
          <path d="M10 34h28" className="stroke-secondary" strokeWidth="1" />
          {/* Leaf accent */}
          <path d="M36 8c-4 0-8 4-8 8 4 0 8-4 8-8z" className="fill-primary" />
          <path d="M36 8c-2 2-4 5-4 8" className="stroke-primary-dark" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-secondary">MAZUBA</span>
        <span className="text-xs font-medium text-primary tracking-wider">ENVIROTECH LIMITED</span>
      </div>
    </div>
  );
};

export default Logo;
