import { MediaObserver } from '@angular/flex-layout';
import { Component, Input, OnInit } from '@angular/core';
// https://github.com/ShankyTiwari/ng-material-multilevel-menu
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  user: any = {
    role: "Manager" // aita asbe user er data theke
  }
  menuItems: any[] = [];
  config = {
    paddingAtStart: true,
    // classname: 'active',
    // listBackgroundColor: 'rgb(208, 241, 239)',
    // fontColor: 'rgb(8, 54, 71)',
    // backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: '#0c6b0c',
  };


  constructor(private media: MediaObserver) { }

  ngOnInit(): void {
    this.menuItems = this.getData('menu');

    for (let i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i][this.user.role] === false) {
        this.menuItems[i]['hidden'] = true;
      }
    }

  }
  selectedItem($event: any) {
    console.log($event)
  }


  get isMobile(): boolean {
    return this.media.isActive('xs') || this.media.isActive('sm');
  }
  getClass(item: any) {

  }
  getData(key: string) {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
  }


}
