import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFieldComponent } from './search-field.component';
import { AskWikiService } from '../ask-wiki.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [SearchFieldComponent],
      providers: [AskWikiService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert data', () => {
    expect(component.prepareDataList(['Te', ['testName'], ['testSnippet'], ['testLink']]))
    .toEqual([{ name: 'testName', snippet: 'testSnippet', link: 'testLink' }]);
  });

  it('should switch "show more"', () => {
    component.showMoreSearch();
    expect(component.showMore).toBeTruthy();
    expect(component.showMoreBtnTxt).toEqual('>>Меньше');
  });
});
