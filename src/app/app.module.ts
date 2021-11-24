import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { GameComponent } from './components/game/game.component';
import { PlayerComponent } from './components/player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from './components/dialog-add-player/dialog-add-player.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { PlayerMobileComponent } from './components/player-mobile/player-mobile.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideDatabase, getDatabase } from '@angular/fire/database';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent,
    PlayerMobileComponent,
    EditPlayerComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),

    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),

  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
