"use client";

import HighlightWord from "./HighlightWord";

export default function IntroPanel({ onFlip }) {
  return (
<div className="w-full h-full flex flex-col justify-center items-end pr-5 pl-5 lg:pr-20 lg:pl-20 text-left max-w-[90%] lg:text-[50px] text-[25px] leading-tight">
      <p>
        Hello, I’m{" "}
        <HighlightWord image="/images/khaleddoulami.jpg">
          Khaled Doulami
        </HighlightWord>
        , an experienced{" "}
        <HighlightWord>full-stack developer</HighlightWord> and{" "}
        <HighlightWord>hands-on CTO</HighlightWord>.
      </p>

      <p>
        A world traveler now based in{" "}
        <HighlightWord image="/images/london.jpg">London</HighlightWord>. I
        thrive in the fast-paced tech world, building scalable tools, launching
        products, and keeping clients happy.
      </p>

      <p>
        You can{" "}
        <HighlightWord
          linkText="browse my CV"
          href="#"
          onClick={e => {
            e.preventDefault();
            onFlip();
          }}
        >
          browse my CV
        </HighlightWord>{" "}
        or{" "}
        <HighlightWord
          linkText="portfolio"
          href="#"
          onClick={e => {
            e.preventDefault();
            onFlip();
          }}
        >
          portfolio
        </HighlightWord>
         or ask me anything on the right.
      </p>

      <p>
        Contact?{" "}
        <HighlightWord >
          doulami.khaled@gmail.com
        </HighlightWord>
      </p>
    </div>
  );
}
