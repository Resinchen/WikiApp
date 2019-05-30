import { Component, OnInit } from '@angular/core';
import { AskWikiService } from '../ask-wiki.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private wikiService: AskWikiService) { }

  ngOnInit() { }

}
