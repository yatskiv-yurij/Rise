"use client";
import { useEffect, useState } from "react";
import { quotes } from "../../../constants";
import { Quote } from "../../../types";
import {
  DailyQuoteStyled,
  QuoteAuthorStyled,
  QuoteContentStyled,
  QuoteMarkStyled,
  QuoteTextStyled,
} from "./DailyQuote.styles";

const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];
};

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  return (
    <DailyQuoteStyled>
      <QuoteMarkStyled>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 4.16667C0 1.86459 1.86459 0 4.16667 0H4.44444C5.05902 0 5.55556 0.496528 5.55556 1.11111C5.55556 1.72569 5.05902 2.22222 4.44444 2.22222H4.16667C3.09374 2.22222 2.22222 3.09374 2.22222 4.16667V4.44444H4.44444C5.67013 4.44444 6.66667 5.44098 6.66667 6.66667V8.88889C6.66667 10.1146 5.67013 11.1111 4.44444 11.1111H2.22222C0.996528 11.1111 0 10.1146 0 8.88889V7.77778V6.66667V4.16667ZM8.88889 4.16667C8.88889 1.86459 10.7535 0 13.0556 0H13.3333C13.9479 0 14.4444 0.496528 14.4444 1.11111C14.4444 1.72569 13.9479 2.22222 13.3333 2.22222H13.0556C11.9826 2.22222 11.1111 3.09374 11.1111 4.16667V4.44444H13.3333C14.559 4.44444 15.5556 5.44098 15.5556 6.66667V8.88889C15.5556 10.1146 14.559 11.1111 13.3333 11.1111H11.1111C9.88542 11.1111 8.88889 10.1146 8.88889 8.88889V7.77778V6.66667V4.16667Z"
            fill="#F4F4F5"
          />
        </svg>
      </QuoteMarkStyled>

      <QuoteContentStyled>
        <QuoteTextStyled>{quote?.text}</QuoteTextStyled>
        <QuoteAuthorStyled>{quote?.author}</QuoteAuthorStyled>
      </QuoteContentStyled>
    </DailyQuoteStyled>
  );
}
