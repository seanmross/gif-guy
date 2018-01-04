// Create a data model for Gif
// Optional parameters marked by "?"

export interface RandomGif {
    image_original_url: string;
}

export interface Gif {
    images: {
        fixed_width: {
            url:string
        }
    };
}