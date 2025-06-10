import HighlightWord from "../HighlightWord";

export default function FaceIdeas() {
  return (
<div
  className="absolute w-full h-full flex flex-col items-center justify-center px-4 text-center text-neon"
  style={{ overflow: "visible", position: "relative", zIndex: 10 }}
>      <p>Designer? Developer? Strategist? Bit of all three.</p>
      <p>
        I connect <HighlightWord>UX</HighlightWord> with AI, motion, and performance.
      </p>
      <p>
        Projects span{" "}
        <HighlightWord image="/images/tatouine.png">travel</HighlightWord>, healthcare, content,
      </p>
      <p>and everything in between.</p>
      <p>
        Always looking to combine disciplines into{" "}
        <HighlightWord>unexpected results</HighlightWord>.
      </p>
    </div>
  );
}
