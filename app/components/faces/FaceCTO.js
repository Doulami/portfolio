import HighlightWord from "../HighlightWord";

export default function FaceCTO() {
  return (
    <div className="text-center space-y-4 max-w-lg mx-auto">
      <p>
        Hello, I’m Khaled Doulami, a{" "}
        <HighlightWord>hands-on CTO</HighlightWord>.
      </p>
      <p>With a passion for clean code and scalable architecture,</p>
      <p>
        I’ve led full-stack teams across{" "}
        <HighlightWord>Europe</HighlightWord>.
      </p>
      <p>
        Previously at{" "}
        <HighlightWord image="/images/impact.png">Impact Nutrition</HighlightWord>,
      </p>
      <p>where we built tech that grew with the business.</p>
    </div>
  );
}
