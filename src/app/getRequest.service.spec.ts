/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRequestService } from './getRequest.service';

describe('Service: GetRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRequestService]
    });
  });

  it('should ...', inject([GetRequestService], (service: GetRequestService) => {
    expect(service).toBeTruthy();
  }));
});
