import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlighttext',
  templateUrl: './highlighttext.component.html',
  styleUrls: ['./highlighttext.component.scss']
})
export class HighlighttextComponent implements OnInit {
  searchText = " ";
  constructor() { }

  ngOnInit(): void {
  }

}
