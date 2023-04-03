import { Playlist } from "./playlist";

export class User{
    id : number;
    name : string;
    email : string;
    password : string;
    playlists : Playlist[];

    constructor(user : User){
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.playlists = user.playlists;
    }
}