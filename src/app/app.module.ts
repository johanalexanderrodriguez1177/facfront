import { APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import {SoniatComponent} from './components/soniat/soniat.component';
import {MessageComponent} from './components/message/message.component';
import {ApiService} from './core/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './configuration/config.service';
import { environment } from '../environments/environment';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';
  


@NgModule({
  declarations: [
    AppComponent,
    SoniatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
  ],
  providers: [
    ConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps      : [ConfigService],
      multi     : true
    },
    ApiService],
    bootstrap: [AppComponent]
  })
export class AppModule { }

export function ConfigLoader(configService: ConfigService) {
//Note: this factory need to return a function (that return a promise)

  return () => configService.load(environment.baseUrl); 
}