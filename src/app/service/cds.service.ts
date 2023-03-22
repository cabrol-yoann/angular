import { Injectable } from '@angular/core';
import { Cd } from 'src/model/cd';

@Injectable({
    providedIn: 'root'
})
export class CdsService {
    constructor() { }
    getAllCDs(): Cd[] {
        return [
            {
                id: 1,
                title: 'The Dark Side of the Moon',
                artist: 'Pink Floyd',
                year: new Date('1973-03-01'),
                genre: 'Rock',
                price: 19.99,
                cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
                description: 'The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released on 1 March 1973 by Harvest Records. It built on ideas explored in their earlier recordings and live shows, and incorporated progressive rock, psychedelic rock, and classical music influences. The Dark Side of the Moon was a commercial and critical success, and spent 741 weeks on the Billboard 200 chart in the US, including 15 non-consecutive weeks at number one. It has been described as one of the most influential and best-selling albums of all time.',
                onsale: true,
                quantity: 0
            },
            {
                id: 2,
                title: 'The Wall',
                artist: 'Pink Floyd',
                year: new Date('1979-11-30'),
                genre: 'Rock',
                price: 19.99,
                cover: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Pink_Floyd_-_The_Wall.jpg',
                description: 'The Wall is the eleventh studio album by the English rock band Pink Floyd, released on 30 November 1979 by Harvest Records. It is a rock opera that explores Pink, a jaded rock star whose eventual self-imposed isolation from society is symbolised by a wall. The album was a commercial success, reaching number one in the UK and the US, and has been certified 23× platinum in the US. It has been described as one of the most influential and best-selling albums of all time.',
                onsale: true,
                quantity: 100
            },
            {
                id: 3,
                title: 'The Piper at the Gates of Dawn',
                artist: 'Pink Floyd',
                year: new Date('1967-08-06'),
                genre: 'Rock',
                price: 19.99,
                cover: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Pink_Floyd_-_The_Piper_at_the_Gates_of_Dawn.jpg',
                description: 'The Piper at the Gates of Dawn is the debut studio album by the English rock band Pink Floyd, released on 8 August 1967 by EMI Columbia. It was recorded at Abbey Road Studios in London during 1967 and produced by Norman Smith. The album was a commercial failure upon release, but has since been recognised as a landmark in psychedelic rock and progressive rock. It has been described as "one of the most important albums in the history of rock music".',
                onsale: false,
                quantity: 280
                }
            ];
        }
    getCdById(id: number): Cd {
        const CD = this.getAllCDs().find( cd => cd.id === id);
        if (CD === undefined) {
            throw new Error('CD non trouvé, id invalide ou inexistant');
        }
        return CD;
    }
}