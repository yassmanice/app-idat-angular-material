import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmDemoComponent } from './ejemplos/am-demo/am-demo.component';
import { DirectivasDemoComponent } from './ejemplos/directivas-demo/directivas-demo.component';
import { PrincipalComponent } from './ejemplos/principal/principal.component';
import { PaginaErrorComponent } from './ejemplos/pagina-error/pagina-error.component';
import { FlexlayoutDemoComponent } from './ejemplos/flexlayout-demo/flexlayout-demo.component';
import { MaterialModule } from './angular-material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AmDemoComponent,
    DirectivasDemoComponent,
    PrincipalComponent,
    PaginaErrorComponent,
    FlexlayoutDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
