// Create a data model for Gif
// Using an Interface allows for:
//    1. optional parameters with "?"
//    2. no need to call methods on Gif object, therefor class is not needed

export interface Gif {
    data:object,
    id:string,
    image_original_url?: string;

    //For gif by id service
    images?:object,    // data.images
    original?:object,    // data.images.original
    url?: string,    // data.images.original.url
    //width?:string,    // data.images.original.width
    //height?:string,    // data.images.original.height
    
}