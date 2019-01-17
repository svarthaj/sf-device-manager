import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})

export class DeviceDetailComponent implements OnInit {

  device: Device;

  constructor(public snackBar: MatSnackBar,
              private detailService: DetailService,
              private deviceService: DeviceService) {
                this.detailService.getDevice().subscribe(
                  device => { this.device = device; }
                );
              }

  ngOnInit() {
  }

  update() {
    this.snackBar.open("Device updated successfully!", "", {
        duration: 1000,
      });
    this.device.isFresh = false;
    this.deviceService.updateDevice(this.device).subscribe();
  }

  save() {
    this.snackBar.open("Device saved successfully!", "", {
      duration: 1000,
    });
    this.device.isFresh = false;
    this.deviceService.addDevice(this.device).subscribe();
  }

}
