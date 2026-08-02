import React from 'react';

interface LogoSVGProps {
  className?: string;
  showTagline?: boolean;
}

export const LogoSVG: React.FC<LogoSVGProps> = ({ className = "h-12", showTagline = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Updated Clinic Logo Image */}
      <img
        src="/logo.webp"
        alt="Prakash Physiotherapy Clinic Official Logo"
        className="h-full w-auto object-contain max-h-14 sm:max-h-16 flex-shrink-0"
        onError={(e) => {
          // Fallback if image fails to load
          (e.target as HTMLImageElement).src = '/img/Prakash Physio Logo.webp';
        }}
      />

      <div className="flex flex-col justify-center text-left">
        <span className="font-extrabold text-[#0F4C81] tracking-tight text-lg sm:text-2xl font-poppins leading-none">
          PRAKASH
        </span>
        <span className="font-bold text-[#2E8BC0] tracking-wider text-[10px] sm:text-sm font-poppins leading-tight mt-0.5">
          PHYSIOTHERAPY CLINIC
        </span>
      </div>
    </div>
  );
};
