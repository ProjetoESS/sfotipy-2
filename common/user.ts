import { Playlist } from "./playlist";

export class User{
    id : number;
    name : string;
    email : string;
    password : string;
    playlists : Playlist[];

    constructor(){
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.playlists = [];
    }
}