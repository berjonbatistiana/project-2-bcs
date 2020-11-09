import React from 'react';
import Challenge from "../../common/components/Challenge";

export const TypingChallenge = () => {
  return (
    <Challenge wordCount={5} minChar={1} maxChar={7}/>
  );
}
