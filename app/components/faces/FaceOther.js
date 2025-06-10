import HighlightWord from "../HighlightWord";

export default function FaceOther() {
  return (
<div
  className="absolute w-full h-full flex flex-col items-center justify-center px-4 text-center text-neon"
  style={{ overflow: "visible", position: "relative", zIndex: 10 }}
>      <p>Based in London.</p>
      <p>Available for freelance work, collabs, or full-time missions.</p>
      <p>
        Email me at{" "}
        <HighlightWord>hello@khaleddoulami.net</HighlightWord>.
      </p>
      <p>
        Connect via{" "}
        <HighlightWord image="/images/linkedin.webp">LinkedIn</HighlightWord>{" "}
        or explore my code on{" "}
        <HighlightWord
          linkText="GitHub"
          href="https://github.com/khaleddoulami"
        >
          GitHub
        </HighlightWord>.
      </p>
    </div>
  );
}
