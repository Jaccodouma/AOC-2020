import { treesEncountered } from "./1.js";

export default function solve() {
  console.log (
    treesEncountered(1,1) * 
    treesEncountered(3,1) * 
    treesEncountered(5,1) * 
    treesEncountered(7,1) * 
    treesEncountered(1,2)
  );
};