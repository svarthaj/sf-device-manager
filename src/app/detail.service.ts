import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private device = new Subject<Device>();

  sendDevice(device: Device) {
    this.device.next(device);
  }

  getDevice(): Observable<Device> {
    return this.device.asObservable();
  }

}
