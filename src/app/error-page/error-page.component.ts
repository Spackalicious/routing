import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { 
    // this first use with snapshot is great if the data isn't going to change on the page and need to be updated. 
    // this.errorMessage = this.route.snapshot.data['message'];

    // this second use with dummy data is good if the data is going to update on the page while the user is still on it. 
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }
}
