import HoverPortal from "./HoverPortal";

// inside the component
{image && hovered && (
  <HoverPortal x={hoverPos.x} y={hoverPos.y}>
    <div
      className="w-32 h-32 rounded-full opacity-90 scale-100 transition-all duration-500 z-50"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  </HoverPortal>
)}
