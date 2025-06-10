import HighlightWord from "../HighlightWord";

export default function FaceEntrepreneur() {
  return (
<div
  className="absolute w-full h-full flex flex-col items-center justify-center px-4 text-center text-neon"
  style={{ overflow: "visible", position: "relative", zIndex: 10 }}
>      <p>I’ve launched multiple products from scratch,</p>
      <p>including plugins, SaaS tools, and e-commerce brands.</p>
      <p>
        Currently building the AI-powered{" "}
        <HighlightWord>InstaSite</HighlightWord> platform,
      </p>
      <p>and managing FixMySite — a web repair micro-agency.</p>
      <p>
        <HighlightWord>Fail fast</HighlightWord>, refine, launch again.
      </p>
    </div>
  );
}
