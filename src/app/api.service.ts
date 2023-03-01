import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

link = "http://localhost:3000/"

constructor(private http: HttpClient) { }

get(url: string) {
  return this.http.get(this.link + url);
}


post(url: string, data: any) {
  return this.http.post(this.link + url, data);
}


put(url: string, data: any) {
  return this.http.put(this.link + url, data);
}

delete(url: string, data: any) {
  return this.http.delete(this.link + url + "/" + data.id);
}

}
