import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game: Game;
  gameId: string;
  gameOver = false;



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) {


  }

  ngOnInit(): void {
    this.newGame();

    this.route.params.subscribe((params) => {
      this.gameId = params.id;
      this
        .firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          console.log('gamestatus', game);
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCard = game.playedCard;
          this.game.players = game.players;
          this.game.playerImages = game.playerImages;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation,
            this.game.currentCard = game.currentCard
        });
    })

  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {

    if (this.game.stack.length == 0) {
      this.gameOver = true;
    } else if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      console.log(this.game.currentPlayer)


      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

      this.saveGame();

      setTimeout(() => {
        this.game.playedCard.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000);

    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.playerImages.push('1.png');
        console.log('The dialog was closed', name);
        this.saveGame();
      }

    });
  }

  saveGame() {
    this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJSON());
  }

  editPlayer(playerId: number) {
    console.log('Edit Player', playerId);

    const dialogRef = this.dialog.open(EditPlayerComponent);


    dialogRef.afterClosed().subscribe((change: string) => {

      if (change) {
        if (change == 'DELETE') {
          this.game.players.splice(playerId, 1);

        } else {
          console.log('Received changed', change);
          this.game.playerImages[playerId] = change;

        }

      }
      this.saveGame();

    });

  }
}
