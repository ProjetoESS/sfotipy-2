import { Playlist } from "./playlist";

export class User{
    id : number;
    name : string;
    email : string;
    password : string;
    followers : number;
    playlists : Playlist[];

    constructor(){
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.followers = 0;
        this.playlists = [];
    }
}