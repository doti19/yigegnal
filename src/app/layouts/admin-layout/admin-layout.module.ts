import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { SearchComponent } from '../../search/search.component';
import { AddFoundItemComponent } from '../../add-found-item/add-found-item.component';
import { InquiryComponent } from '../../inquiry/inquiry.component';
import { PendingComponent } from '../../pending/pending.component';
import { DeliveryComponent } from '../../delivery/delivery.component';
import { ProfitAnalysisComponent } from '../../profit-analysis/profit-analysis.component';
import { SupportComponent } from '../../support/support.component';
import { SettingsComponent } from '../../settings/settings.component';
import { FilterTableComponent } from '../../filter-table/filter-table.component'  ;
import { EditSearchResultDialogComponent } from '../../edit-search-result-dialog/edit-search-result-dialog.component';



import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,


    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    SearchComponent,
    AddFoundItemComponent,
    InquiryComponent,
    PendingComponent,
    DeliveryComponent,
    ProfitAnalysisComponent,
    SupportComponent,
    SettingsComponent,
    FilterTableComponent,
    EditSearchResultDialogComponent,

  ]
})

export class AdminLayoutModule {}
