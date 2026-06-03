import { ANSWERS } from "../data/answers"

export function getRandomAnswer () {
   const randomIndex = Math.floor(
      Math.random() * ANSWERS.length
   );

   return ANSWERS[randomIndex];
}