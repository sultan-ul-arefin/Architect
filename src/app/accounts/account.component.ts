import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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
