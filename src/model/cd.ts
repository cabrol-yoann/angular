export class Cd {
    id: number;
    title: string;
    artist: string;
    year: Date;
    genre: string;
    price: number;
    cover: string;
    description: string;
    onsale?: boolean;
    quantity: number;

    constructor(id: number, title: string, artist: string, year: Date, genre: string, price: number, cover: string, description: string, quantity: number, onsale?: boolean) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.genre = genre;
        this.price = price;
        this.cover = cover;
        this.description = description;
        this.onsale = onsale;
        this.quantity = quantity;
    }

    // // Getters
    // getId() {
    //     return this.id;
    // }
    // getTitle() {
    //     return this.title;
    // }
    // getArtist() {
    //     return this.artist;
    // }
    // getYear() {
    //     return this.year;
    // }
    // getGenre() {
    //     return this.genre;
    // }
    // getPrice() {
    //     return this.price;
    // }
    // getCover() {
    //     return this.cover;
    // }
    // getDescription() {
    //     return this.description;
    // }

    // // Setters
    // setId(id: number) {
    //     this.id = id;
    // }
    // setTitle(title: string) {
    //     this.title = title;
    // }
    // setArtist(artist: string) {
    //     this.artist = artist;
    // }
    // setYear(year: Date) {
    //     this.year = year;
    // }
    // setGenre(genre: string) {
    //     this.genre = genre;
    // }
    // setPrice(price: number) {
    //     this.price = price;
    // }
    // setCover(cover: string) {
    //     this.cover = cover;
    // }
    // setDescription(description: string) {
    //     this.description = description;
    // }

    // // Methods
    // toString() {
    //     return this.title + ' - ' + this.artist + ' (' + this.year + ')';
    // }

    // toHtml() {
    //     return '<div class="col-md-4 col-sm-6 col-xs-12">' +
    //         '<div class="cd">' +
    //         '<div class="cd-cover">' +
    //         '<img src="' + this.cover + '" alt="' + this.title + '">' +
    //         '</div>' +
    //         '<div class="cd-info">' +
    //         '<h3>' + this.title + '</h3>' +
    //         '<p>' + this.artist + '</p>' +
    //         '<p>' + this.year + '</p>' +
    //         '<p>' + this.genre + '</p>' +
    //         '<p>' + this.price + ' €</p>' +
    //         '<p>' + this.description + '</p>' +
    //         '</div>' +
    //         '</div>' +
    //         '</div>';
    // }
}
