import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  isOpen = true;
  title=''
  description=''
  //hide = true;
  click() {
    this.isOpen = true;
  }
  constructor() { }

  ngOnInit() {
  }

  addNote(){
    let data={
      title:this.title,
      description:this.description
    } 
    console.log(" add note data ", data);
    
    
  }
}
