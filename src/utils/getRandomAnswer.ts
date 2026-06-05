import { ANSWERS } from "../data/words"

export function getRandomAnswer () {
   const randomIndex = Math.floor(
      Math.random() * ANSWERS.length
   );

   return ANSWERS[randomIndex];
}