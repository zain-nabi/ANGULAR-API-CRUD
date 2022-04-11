import { Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { CreateSpecialisationComponent } from './create-specialisation/create-specialisation.component';
 
export const appRoutes: Routes = [
    { path: 'Home', component: AppComponent, pathMatch: 'full' },
    { path: 'specialisations', component: SpecialisationsComponent },
    { path: 'create-specialisations', component: CreateSpecialisationComponent }
];
 