import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
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
