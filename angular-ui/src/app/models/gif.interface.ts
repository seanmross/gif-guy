// Create a data model for Gif
// Optional parameters marked by "?"

export interface RandomGif {
    image_original_url: string;
    id:string;
}

export interface Gif {
    images: {
        fixed_width: {
            url:string
        }
    };
    title:string;
    url:string;
    bitly_url:string;
    embed_url:string;
}