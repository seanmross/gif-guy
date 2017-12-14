// Create a data model for Gif
export class Gif {
    constructor(
        public data:object,
        public image_url:string,
        public id:string
    ){
        this.data = {
            image_url:this.image_url,
            id:this.id
        }
    }
}