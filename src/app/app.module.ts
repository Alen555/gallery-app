import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ImageFilterPipe} from './image-detail/shared/filter.pipe';
import { ImageService } from './image-detail/shared/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import {appRoutes} from '../routes';
import {RouterModule} from "@angular/router"



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
