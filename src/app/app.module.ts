import {APP_INITIALIZER, ErrorHandler, Injectable, NgModule} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { LicenceComponent } from './pages/licence/licence.component';
import { ClubComponent } from './layers/club/club.component';
import { MenuComponent } from './layers/menu/menu.component';
import { EanComponent } from './layers/ean/ean.component';
import { QrComponent } from './layers/qr/qr.component';
import { MenuButtonComponent } from './shared/layout/menu-button/menu-button.component';
import { LayerComponent } from './shared/layout/layer/layer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {QRCodeModule} from "angularx-qrcode";
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';

import * as Sentry from "@sentry/angular";
import { BrowserTracing } from "@sentry/tracing";
import {Router} from "@angular/router";
Sentry.init({
  dsn: "https://22740cf7200d4d1eba33f8fbb4a7645d@o1331318.ingest.sentry.io/6595313",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

@Injectable()
export class SwipeDownConfig extends HammerGestureConfig {

  // @ts-ignore
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
  };
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LicenceComponent,
    ClubComponent,
    MenuComponent,
    EanComponent,
    QrComponent,
    MenuButtonComponent,
    LayerComponent,
    HeaderComponent,
    ConfidentialiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HammerModule,
    QRCodeModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: SwipeDownConfig,
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
