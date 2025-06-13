"use client";

import HighlightWord from "./HighlightWord";

export default function IntroPanel() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 lg:px-20 text-left max-w-[90%] lg:text-[50px] text-[26px] leading-tight">
      <p className="mb-4">
        Hi, I’m{" "}
        <HighlightWord image="/images/khaleddoulami.jpg">
          Khaled Doulami
        </HighlightWord>
        , an experienced{" "}
        <HighlightWord>full-stack developer</HighlightWord> and{" "}
        <HighlightWord>hands-on CTO</HighlightWord>.
      </p>

      <p className="mb-4">
        Currently based in{" "}
        <HighlightWord image="/images/london.jpg">London</HighlightWord>, I help companies build and scale platforms with smart tech and clean code.
      </p>

      <p className="mb-4">
        Explore my <HighlightWord>portfolio</HighlightWord> or{" "}
        <HighlightWord>ask my assistant</HighlightWord> on the right.
      </p>

      <p>
        Contact?{" "}
        <HighlightWord>
          doulami.khaled@gmail.com
        </HighlightWord>
      </p>
    </div>
  );
}
