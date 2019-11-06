import {Component,OnInit} from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MicroservicesService } from 'src/app/microservices/microservices.service';
   
  @Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html"
    //styleUrls: ["./navbar.component.scss"]
  })
  export class NavbarComponent implements OnInit {
   
    isLoggedIn$: Observable<boolean>;
    title;
    subscription: Subscription;

    constructor(private authService: AuthService, private microService:MicroservicesService) { }
  
    ngOnInit() {
      this.isLoggedIn$ = this.authService.loggedIn;
      //this.title = this.microService.config.title;

      this.subscription = this.microService.serviceConfig$.subscribe(config => this.title = config["title"])
  }

  }
  