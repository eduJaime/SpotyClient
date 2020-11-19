export interface Artist {
    artists: Artists;
}

export interface Artists {
    items: Array<ArtistItem>;
}

export interface ArtistItem {
    id: string;
    name: string;
    images: Images[];
    genres : string[];
}

export interface Images {
    url: string;
    height: number;
    width: number;
}

export interface ArtistAlbum{
    genres : string[];
    id : string;
    images : Images[];
    name : string;
    release_date : Date;
    artists: ArtistItem[];
}

export interface Albums{
    items: ArtistAlbum[];
}



