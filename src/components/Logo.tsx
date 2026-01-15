import mazubaLogo from "@/assets/mazuba-logo-transparent.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={mazubaLogo} 
        alt="Mazuba Envirotech Limited" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
