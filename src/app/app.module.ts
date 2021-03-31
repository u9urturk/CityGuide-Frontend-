import { NgModule,Injectable} from '@angular/core';
import { BrowserModule,HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {CommonModule} from '@angular/common';
import {NgxGalleryComponent} from './components/gallery/lib/ngx-gallery.component';
import {NgxGalleryImageComponent} from './components/gallery/lib/ngx-gallery-image/ngx-gallery-image.component';
import {NgxGalleryArrowsComponent} from './components/gallery/lib/ngx-gallery-arrows/ngx-gallery-arrows.component';
import {NgxGalleryThumbnailsComponent} from './components/gallery/lib/ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import {NgxGalleryPreviewComponent} from './components/gallery/lib/ngx-gallery-preview/ngx-gallery-preview.component';
import {NgxGalleryActionComponent} from './components/gallery/lib/ngx-gallery-action/ngx-gallery-action.component';
import {NgxGalleryBulletsComponent} from './components/gallery/lib/ngx-gallery-bullets/ngx-gallery-bullets.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ExModule} from './ex/ex.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValueComponent } from './components/value/value.component';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { NavComponent } from './components/nav/nav.component';
import { CityComponent } from './components/city/city.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityAddComponent } from './components/city/city-add/city-add.component'
import { NgxEditorModule } from 'ngx-editor';


@Injectable()
export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  } as any;
}

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    NgxGalleryComponent,
    NgxGalleryImageComponent,
    NgxGalleryArrowsComponent,
    NgxGalleryThumbnailsComponent,
    NgxGalleryPreviewComponent,
    NgxGalleryActionComponent,
    NgxGalleryBulletsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExModule,
    HttpClientModule,
    JwtModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
    

  ],
  exports:[CommonModule, BrowserAnimationsModule],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NgxGalleryModule{ }

