import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss'],
})
export class HRComponent implements OnInit {
  // quote: string | undefined;
  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    //   this.Service
    //     .getRandomQuote({ category: 'dev' })
    //     .pipe(
    //       finalize(() => {
    //         this.isLoading = false;
    //       })
    //     )
    //     .subscribe((quote: string) => {
    //       this.quote = quote;
    //     });

  }
}
