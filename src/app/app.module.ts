import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { YoutubePipe } from './youtube.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleDetailComponent,
    PageNotFoundComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    YoutubePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: 'sessions', component: ModuleListComponent},
      {path: 'session/:id', component: ModuleDetailComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
