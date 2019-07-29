import { Component, OnInit } from '@angular/core';
import { AskWikiService } from '../ask-wiki.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  showMore = false;
  searchQuery: string;
  searchCount = '10';
  showMoreBtnTxt = '>>Больше';

  constructor(private wikiService: AskWikiService) { }

  ngOnInit() { }

  getSearchResult = () => this.wikiService
    .getSearchResult(this.searchQuery, this.searchCount)
    .subscribe(
      (      value: Object | string[][]) => this.wikiService.data = this.prepareDataList(value),
      (      error: { message: any; }) => console.error(error.message)
    )

  showMoreSearch = () => {
    this.showMore = !this.showMore;
    this.showMoreBtnTxt = this.showMore ? '>>Меньше' : '>>Больше';
  }

  prepareDataList = (rawData: Object | string[][]) =>
    Object.values(rawData)
      .slice(1)[0]
      .map((_: any, idx: number) =>
        ({ name: rawData[1][idx], snippet: rawData[2][idx], link: rawData[3][idx] }))
}
