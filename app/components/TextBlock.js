export default function TextBlock({ children }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-6 text-left text-white font-light text-[1.75rem] leading-snug">
      {children}
    </div>
  );
}
export default function Line({ children }) {
  return (
    <p className="overflow-hidden">
      <span className="inline-block translate-y-0 transition-transform duration-500 ease-out">
        {children}
      </span>
    </p>
  );
}
