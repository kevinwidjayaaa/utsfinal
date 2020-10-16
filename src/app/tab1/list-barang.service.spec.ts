import { TestBed } from '@angular/core/testing';

import { ListBarangService } from './list-barang.service';

describe('ListBarangService', () => {
  let service: ListBarangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBarangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
