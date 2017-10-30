import {Injectable} from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "animals", "caption": "Adler", "url": "assets/img/adler-2872995_640.jpg"},
    {"id": 2, "category": "animals", "caption": "Elephant", "url": "assets/img/adventure-1822636_640.jpg"},
    {"id": 3, "category": "animals", "caption": "Lion", "url": "assets/img/african-lion-2888519_640.jpg"},
    {"id": 4, "category": "animals", "caption": "Monkey", "url": "assets/img/monkey-2790452_640.jpg"},
    {"id": 5, "category": "animals", "caption": "Tiger", "url": "assets/img/tiger-2791980_640.jpg"},
    {"id": 6, "category": "lakes", "caption": "Lake1", "url": "assets/img/bergsee-2889294_640.jpg"},
    {"id": 7, "category": "lakes", "caption": "Lake2", "url": "assets/img/bergsee-2889295_640.jpg"},
    {"id": 8, "category": "lakes", "caption": "Lake3", "url": "assets/img/bridge-2887353_640.jpg"},
    {"id": 9, "category": "lakes", "caption": "Lake4", "url": "assets/img/fischer-2739115_640.jpg"},
    {"id": 10, "category": "lakes", "caption": "Lake5", "url": "assets/img/fischer-2880499_640.jpg"},
    {"id": 11, "category": "forest", "caption": "Forest1", "url": "assets/img/fog-1535201_640.jpg"},
    {"id": 12, "category": "forest", "caption": "Forest2", "url": "assets/img/forest-2888599_640.jpg"},
    {"id": 13, "category": "forest", "caption": "Forest3", "url": "assets/img/france-1790999_640.jpg"},
    {"id": 14, "category": "forest", "caption": "Forest4", "url": "assets/img/road-1072823_640.jpg"},
    {"id": 15, "category": "forest", "caption": "Forest5", "url": "assets/img/sunset-2459855_640.jpg"}  
]