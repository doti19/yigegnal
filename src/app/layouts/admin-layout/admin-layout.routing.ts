import { Routes } from '@angular/router';

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

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'search',   component: SearchComponent },
    { path: 'add-found-item',   component: AddFoundItemComponent },
    { path: 'inquiry',   component: InquiryComponent },
    { path: 'pending',   component: PendingComponent },
    { path: 'delivery',   component: DeliveryComponent },
    { path: 'profit-analysis',   component: ProfitAnalysisComponent },
    { path: 'settings',   component: SettingsComponent },
    { path: 'support',   component: UserProfileComponent },
 
];
