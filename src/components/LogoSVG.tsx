import React from 'react';

interface LogoSVGProps {
  className?: string;
  showTagline?: boolean;
}

export const LogoSVG: React.FC<LogoSVGProps> = ({ className = "h-12", showTagline = true }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Updated Clinic Logo Image */}
      <img
        src="/logo.webp"
        alt="Prakash Physiotherapy Clinic Official Logo"
        className="h-full w-auto object-contain max-h-12 sm:max-h-16 flex-shrink-0"
        onError={(e) => {
          // Fallback if image fails to load
          (e.target as HTMLImageElement).src = '/img/Prakash Physio Logo.webp';
        }}
      />

      <div className="flex flex-col justify-center text-left">
        {/* Top: Clinic Title */}
        <span className="font-extrabold text-[#0F4C81] tracking-tight text-sm sm:text-lg font-poppins leading-tight">
          Prakash Physiotherapy Clinic
        </span>

        {/* Below: Domain Name */}
        <span className="font-bold text-sky-600 text-xs sm:text-xs font-mono leading-tight">
          prakashphysion.in
        </span>

        {/* Below: Other Information */}
        {showTagline && (
          <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
            Dr. Abhay Prakash Tiwari (M.P.T Ortho) • Bhimnagar, Supaul
          </span>
        )}
      </div>
    </div>
  );
};
