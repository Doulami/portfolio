import HighlightWord from "../HighlightWord";

export default function FaceIdeas() {
  return (
    <div className="text-center space-y-4 max-w-lg mx-auto">
      <p>Designer? Developer? Strategist? Bit of all three.</p>
      <p>
        I connect <HighlightWord>UX</HighlightWord> with AI, motion, and performance.
      </p>
      <p>
        Projects span{" "}
        <HighlightWord image="/images/tatouine.jpg">travel</HighlightWord>, healthcare, content,
      </p>
      <p>and everything in between.</p>
      <p>
        Always looking to combine disciplines into{" "}
        <HighlightWord>unexpected results</HighlightWord>.
      </p>
    </div>
  );
}
