import { TestBed, inject, async } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClientModule, HttpParams, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Message } from './message';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [MessageService]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`Should get Hello World! from the service`, async(inject([MessageService, HttpTestingController],
    (service: MessageService, backend: HttpTestingController) => {
      service.getMessage().subscribe((response) => expect(response.message).toBe('Hello World!'));

      const request = backend.expectOne('/api/message');
      expect(request.request.method).toBe('GET');
      request.flush(new Message('Hello World!'));
    })));
});
