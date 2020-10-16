import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListBarangService {
private dt:DT[]=[
       {
        id:'br1',
        foto:'https://tweakers.net/i/6mFqDEsyG7j6arsjLSC4e6re2ZI=/i/2000645311.jpeg',
        merek:'kingston',
        speed:'3200mhz',
        ukuran:'16gb',
        harga:'10.000',
        stok:'30',
       
	   },
       {
        id:'br2',
        foto:'https://tweakers.net/i/6mFqDEsyG7j6arsjLSC4e6re2ZI=/i/2000645311.jpeg',
        merek:'vgen',
        speed:'4000mhz',
        ukuran:'16gb',
        harga:'20.000',
        stok:'40',
	   }
   ];
 
  constructor() { }
 
}
