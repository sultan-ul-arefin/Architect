import { PopupComponent } from './../@shared/popup/popup.component';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class SettingsComponent implements OnInit {
  // quote: string | undefined;
  isLoading = false;


  menuItems = [
    {
      label: 'Home',
      link: 'home',
      icon: 'offline_pin',
      Admin: true,
      Manager: true,
      Other: false
    },
    {
      label: 'About',
      link: 'about',
      icon: 'star_rate',
      Admin: true,
      Manager: false,
      Other: true
    },
    {
      label: 'Settings',
      link: 'settings',
      icon: 'person',
      Admin: true,
      Manager: true,
      Other: true
    }
  ];

  constructor(public dialog: MatDialog) { }

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
    this.menuItems = []
    this.menuItems = this.getData('menu')


  }
  openPopup() {
    this.dialog.open(PopupComponent, {
      width: '250px',
      data: { title: "Hello Wrold", body: "Hello Wrold ! This is Sultan UL Arefin from Bangladesh", error: true }
    });
  }
  update(label: string, role: string) {
    for (var i = 0; i < this.menuItems.length; i++) {
      if (label === this.menuItems[i].label) {
        this.menuItems[i][role] ? this.menuItems[i][role] = false : this.menuItems[i][role] = true;
      }
    }
  }

  saveData() {

    this.setData('menu', this.menuItems)

    console.log(this.getData('menu'))

  }


  setData(key: string, data: any) {
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(data))
  }
  getData(key: string) {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
  }
}




