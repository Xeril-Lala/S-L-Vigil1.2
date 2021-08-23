import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighchartsChartModule } from 'highcharts-angular';
import * as more from 'highcharts/highcharts-more.src';
import * as solidGauge from 'highcharts/modules/solid-gauge.src';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HumidityComponent } from './humidity/humidity.component';
import { DustComponent } from './dust/dust.component';
import { PirComponent } from './pir/pir.component';
import { RoomComponent } from './room/room.component';
import { TypeComponent } from './type/type.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DevicestatusComponent } from './devicestatus/devicestatus.component';
import { TemperaturegaugeComponent } from './temperaturegauge/temperaturegauge.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateserviceService } from'./updateservice.service';
import { LpdustComponent } from './lpdust/lpdust.component';
import { LptemperatureComponent } from './lptemperature/lptemperature.component';
import { LphumidityComponent } from './lphumidity/lphumidity.component';
export function highchartsModules(){
  return[more, solidGauge]
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardMainComponent,
    TemperatureComponent,
    HumidityComponent,
    DustComponent,
    PirComponent,
    RoomComponent,
    TypeComponent,
    LoginComponent,
    RegisterComponent,
    DevicestatusComponent,
    TemperaturegaugeComponent,
    LpdustComponent,
    LptemperatureComponent,
    LphumidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ChartModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UpdateserviceService, {provide:HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})

export class AppModule {}