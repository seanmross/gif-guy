// Create a data model for Gif
// Optional parameters marked by "?"

export interface RandomGif {
    image_original_url: string;
}

interface FixedWidth {
    url:string;
}

interface Images {
    fixed_width: {
        [key: string]: FixedWidth
    };
}

export interface Gif {
    images: {
        [key: string]: Images
    };
}