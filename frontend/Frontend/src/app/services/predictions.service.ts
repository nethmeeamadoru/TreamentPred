import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {

  private serviceUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) { }

  addRecord(entryData): Observable<any[]>{
    return this.http.post<any[]>(this.serviceUrl + '/api/predict', entryData)
  }

}
