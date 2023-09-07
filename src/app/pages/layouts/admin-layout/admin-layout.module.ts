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


import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


import { AddInquiryDialogComponent } from 'app/shared/components/registration/add-inquiry-dialog/add-inquiry-dialog.component';
import { CatagoryComponent } from 'app/pages/catagory/catagory.component';
import { ConfirmDialogComponent } from 'app/shared/components/confirm-dialog/confirm-dialog.component';
import { EditDialogComponent } from 'app/shared/components/edit-dialog/edit-dialog.component';
import { InquiryActionComponent } from 'app/shared/components/inquiry-dialogs/inquiry-action/inquiry-action.component';

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

    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatNativeDateModule,
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
    AddInquiryDialogComponent,
    CatagoryComponent,
    EditDialogComponent,
    InquiryActionComponent,


  ],
  entryComponents: [ConfirmDialogComponent, EditDialogComponent,],
})

export class AdminLayoutModule {}
