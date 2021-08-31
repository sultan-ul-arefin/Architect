import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, DocumentRoutingModule],
  declarations: [DocumentComponent],
})
export class DocumentModule { }
