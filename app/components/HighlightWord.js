export default function HighlightWord({ children, image }) {
  return (
    <span className="relative inline-block group cursor-pointer font-bold text-neon">
      <span className="relative z-10">{children}</span>
      {image && (
        <span
          className="highlight-image absolute inset-0 rounded-full opacity-0 scale-50 group-hover:opacity-70 group-hover:scale-100 transition-all duration-500 pointer-events-none"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            filter: "blur(30px)",
            zIndex: 0,
          }}
        />
      )}
    </span>
  );
}
