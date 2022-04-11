import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpecialisationsComponent } from './specialisations/specialisations.component';
import { CreateSpecialisationComponent } from './create-specialisation/create-specialisation.component';
import { HRMServiceService } from 'src/hrmservice.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SpecialisationsComponent,
    CreateSpecialisationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HRMServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
