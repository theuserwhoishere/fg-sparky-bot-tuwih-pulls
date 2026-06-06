import { ACHIEVEMENT_EVENT, type Achievement } from "#stores-types";

const achievements: Achievement[] = [
  {
    id: "u1",
    name: "You gotta start somewhere",
    description: "Guess your first number.",
    event: ACHIEVEMENT_EVENT.SPARKY_GUESS_SUCCESS,
    check() {
      return true;
    }
  }, {
    id: "t1",
    name: "Tet",
    description: "this is for guessing an entry but not getting it correct",
    event: ACHIEVEMENT_EVENT.SPARKY_GUESS,
    check() {
      return true;
    }
  }
];
export default achievements;
