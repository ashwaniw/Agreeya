import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { IndustriesComponent } from './industries/industries.component';

const routes : Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'solutions', component: SolutionsComponent },
    {path: 'services', component: ServicesComponent},
    {path: 'industries', component: IndustriesComponent},
    {path: '**', component: LoginComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})

export class RoutingModule {
}
