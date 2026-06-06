import { ACHIEVEMENT_EVENT, type Achievement } from "#stores-types";

const achievements: Achievement[] = [
  {
    id: "a1",
    name: "TEST ACHIEVEMENT PLEASE IGNORE",
    description: "TEST TEST TEST TEST TEST TEST",
    event: ACHIEVEMENT_EVENT.SPARKY_GUESS_SUCCESS,
    check() {
      return true;
    }
  }
];
export default achievements;
