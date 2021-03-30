import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Photo } from 'src/app/models/photo';
import { NgxGalleryOptions } from '../../gallery/lib/ngx-gallery-options';
import { NgxGalleryImage } from '../../gallery/lib/ngx-gallery-image';
import { NgxGalleryAnimation } from '../../gallery/lib/ngx-gallery-animation';




@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CityService]

})
export class CityDetailComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService, public gallery: Gallery,
    public lightbox: Lightbox) { };
  // items:GalleryItem[];
  city: City;
  photos: Photo[] = []
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"])
      this.getPhotosByCity(params["cityId"])
    })

    // const lightboxRef = this.gallery.ref('lightbox');

    // lightboxRef.setConfig({
    //   imageSize: ImageSize.Cover,
    //   thumbPosition: ThumbnailsPosition.Left
    // });

    // lightboxRef.load(this.items);
  }

  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;

    })
  }

  getPhotosByCity(cityId: number) {
    this.cityService.getPhotosByCity(cityId).subscribe(data => {
      this.photos = data
      //this.setGallery();

      this.setNgxGallery();


    })
  }


  // setNgGallery(){
  //   const imageUrls = []
  //   for(let i=0;i<this.city.photos.length;i++){
  //     imageUrls.push({
  //       src:this.city.photos[i].url,
  //       thumb:this.city.photos[i].url
  //     })



  //   }

  //   this.items=imageUrls.map(x=>new ImageItem({src:x.src,thumb:x.thumb}))



  // }

  getImages() {
    const imageUrls = []
    for (let i = 0; i < this.city.photos.length; i++) {
      imageUrls.push({
        small: this.city.photos[i].url,
        medium: this.city.photos[i].url,
        big: this.city.photos[i].url
      })

    }
    return imageUrls;
  }

  setNgxGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Zoom,
        imageSwipe: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageSwipe: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        imageSwipe: true
      }
    ];

    this.galleryImages = this.getImages();

  }

}
