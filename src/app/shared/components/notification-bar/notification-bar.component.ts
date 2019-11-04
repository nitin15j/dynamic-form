import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {
  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {}

  show(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 100000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [className]
    });
  }
}
