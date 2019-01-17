import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Device } from './device';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private devicesUrl = '/api/devices';  // URL to web api

  constructor( private http: HttpClient ) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
    .pipe(
      catchError(this.handleError('getDevices', []))
    );
  }

  updateDevice(device: Device): Observable<any> {
    return this.http.put(`${this.devicesUrl}/update`, device, httpOptions).pipe(
      catchError(this.handleError<any>('updateDevice'))
    );
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>(`${this.devicesUrl}/add`, device, httpOptions).pipe(
      catchError(this.handleError<Device>('addDevice'))
    );
  }

  deleteDevice(device: Device): Observable<Device> {
    return this.http.put<Device>(`${this.devicesUrl}/delete`, device,  httpOptions).pipe(
      catchError(this.handleError<Device>('deleteDevice'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
