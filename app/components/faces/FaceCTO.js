import HighlightWord from "../HighlightWord";
import FakeGPTChatBox from "../FakeGPTChatBox";

export default function FaceCTO() {
  return (
    <div
      className="absolute w-full h-full flex flex-col items-center justify-start px-4 py-12 text-center text-neon overflow-y-auto"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="mb-8">
        <p>
          Hello, I’m <HighlightWord image="/images/khaleddoulami.jpg">Khaled Doulami</HighlightWord>, a {" "}
          <HighlightWord>hands-on CTO</HighlightWord>.
        </p>
        <p>With a passion for clean code and scalable architecture,</p>
        <p>
          I’ve led full-stack teams across <HighlightWord>Europe</HighlightWord>.
        </p>
        <p>
          Previously at <HighlightWord image="/images/impact.png">Impact Nutrition</HighlightWord>,
        </p>
        <p>where we built tech that grew with the business.</p>
      </div>

      <FakeGPTChatBox />
    </div>
  );
}
