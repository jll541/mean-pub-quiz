import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GameCreationService } from '../../services/game-creation.service';
// import '../vendor/jitsi/external_api.js';
import '../../../vendor/jitsi/external_api.js';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameCreationService: GameCreationService) { }
  ngOnInit(): void {
    //
  }
  @ViewChild('meet') meet: ElementRef | any;
  displayName = '';
  api: any;
  gameStarted = false;
  joinedRoom = false;
  createdRoom = false;
  roomPin = '';
  // options = { 
  //   roomName: StringConstructor,  
  //   width: String, 
  //   height: String, 
  //   parentNode: any};
  options: any;
  domain = 'meet.jit.si';
  createRoom(){
    const game = {
      hostName: this.displayName,
      roomPin: this.roomPin,
    }
    // this.createdRoom = true;
    // this.gameStarted = true;
    console.log(this.displayName);
    this.gameCreationService.getNewGameInfo(game).subscribe( () => {});
    // this.options = { 
    //   roomName: 'JordansRoom',  
    //   width: '80%', 
    //   height: '80%', 
    //   parentNode: this.meet.nativeElement};
    
    // this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    // console.log(this.api);
    // this.api.executeCommand('displayName', this.nickName);

  }
  joinRoom(){
    // this.gameStarted = true;
    // this.joinedRoom = true;
    console.log(this.roomPin, this.gameStarted, this.joinedRoom);
    // this.options.roomName = this.roomPin;
    
    this.options = { 
      roomName: this.roomPin,  
      width: 500, 
      height: 500, 
      parentNode: this.meet.nativeElement,
      };
      console.log(this.options);
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
  }

}
