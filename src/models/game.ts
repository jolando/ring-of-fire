import { ThrowStmt } from "@angular/compiler";

export class Game {
  public players: string[] = [];
  public playerImages: string[] = [];
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;
  public pickCardAnimation = false;
  public currentCard: string = '';

  constructor() {

    for (let i = 1; i < 14; i++) {
      // const element = array[i];
      this.stack.push('ace_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }

    shuffle(this.stack)
  }

  public toJSON() {
    return {
      players: this.players,
      playerImages: this.playerImages,
      stack: this.stack,
      playedCard: this.playedCard,
      currentPlayer: this.currentPlayer,
      pickCardAnimation: this.pickCardAnimation,
      currentCard: this.currentCard,
    };
  }
}

function shuffle(array: any) {
  let currentIndex = array.length, randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
