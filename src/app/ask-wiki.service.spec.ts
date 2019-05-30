import { TestBed } from '@angular/core/testing';

import { AskWikiService } from './ask-wiki.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AskWikiService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule] }));

  it('should be created', () => {
    const service: AskWikiService = TestBed.get(AskWikiService);
    expect(service).toBeTruthy();
  });
});
