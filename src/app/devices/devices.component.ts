import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DragulaService } from 'ng2-dragula';
import { Device } from '../device';
import { DeviceService } from '../device.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styles : [`
        :host {
            display: block;
        }
    `],
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: Device[];
  selectedDevice: Device;

  constructor(public snackBar: MatSnackBar,
              private dragulaService: DragulaService,
              private deviceService: DeviceService,
              private detailService: DetailService) {
                dragulaService.createGroup('DEVICES', {
                    copy: (el, source) => {
                      return source.id === 'source';
                    },
                    accepts: (el, target, source, sibling) => {
                      // To avoid dragging from right to left container
                      return target.id !== 'source';
                    }
                  });
              }

  ngOnInit() {
    this.getDevices();
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
    this.sendSelected();
  }

  getDevices(): void {
    this.deviceService.getDevices()
      .subscribe(devices => this.devices = devices);
  }

  sendSelected(): void {
    this.detailService.sendDevice(this.selectedDevice);
  }

  add(): void {
    var newDevice: Device = {
      name: "",
      model: "",
      description: "",
      isFresh: true
    };

    this.devices.push(newDevice);
    this.detailService.sendDevice(newDevice);

  }

  delete(device: Device): void {
    this.snackBar.open("Device deleted successfully!", "", {
      duration: 1000,
    });
    this.devices = this.devices.filter(d => d !== device);
    this.deviceService.deleteDevice(device).subscribe();
  }

}
