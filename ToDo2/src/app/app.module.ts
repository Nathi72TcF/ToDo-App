import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSelectModule, MatIconModule, MatButtonModule,
   MatFormFieldModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyTaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
