import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URI } from '../../constants/apiUri';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private http: HttpClient) {}

  private API_URI_ITEMS = API_URI('items');

  getItems(): Promise<any> {

    return this.http.get(this.API_URI_ITEMS)
      .toPromise()
      .then((response: any) => response)
      .catch((error: any) => {throw error.error});
  }

  createItem({color, number}): Promise<any> {
    const item: object = {
      color,
      number,
    };

    return this.http.post(this.API_URI_ITEMS, item)
      .toPromise()
      .then((response: any) => response)
      .catch((error: any) => {throw error.error});
  }
}
