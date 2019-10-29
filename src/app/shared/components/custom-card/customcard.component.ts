import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss']
})
export class CustomcardComponent implements OnInit {
  @Input()data;
  @Input()index;

  @Output() message = new EventEmitter<any>();
  
  constructor(private router:Router) {}

  ngOnInit() {}

  onOpenClick(data: any)
  {
    this.router.navigate(['services-detail', {id:this.index}]);
  }
}
