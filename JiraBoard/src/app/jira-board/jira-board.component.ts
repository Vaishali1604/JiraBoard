import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.css']
})
export class JiraBoardComponent implements OnInit {
  lists = [
    {header:"Todo", cards:[{header:'card 1', desc:'Description', created: new Date()}, {header:'card 2', desc:'Description', created: new Date()}]},
    {header:"InProgress", cards:[{header:'card 1', desc:'Description', created: new Date()}] },
    {header:"Etc", cards:[]}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addist(){
    this.lists.push({header:'New List', cards:[]});
  }

  deleteLists(index:number){
    this.lists.splice(index,1);
  }
  
  addCard(listIndex:number){
    this.lists[listIndex].cards.push({header:'New Card', desc:'Description',created:new Date()})
  }

  deleteCard(listIndex:number, cardIndex:number){
    this.lists[listIndex].cards.splice(cardIndex, 1)
  }
}
