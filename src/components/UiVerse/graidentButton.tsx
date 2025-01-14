type GradientButtonProps = {
  label: string;
  arrowPath: string;
};

const GradientButton = ({ label, arrowPath }: GradientButtonProps) => {
  return (
    <button className="group relative flex items-center justify-between rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-700 px-6 py-3 text-white font-bold transition-all duration-300 hover:pl-8 hover:pr-16">
      <span className="relative z-10">{label}</span>
      {/* Arrow container with animation */}
      <div className="absolute right-4 flex items-center opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
          <img
            src={arrowPath}
            alt="Arrow"
            className="h-4 w-4 animate-scroll rotate-[30deg]"
          />
        </div>
      </div>
    </button>
  );
};

export default GradientButton;
