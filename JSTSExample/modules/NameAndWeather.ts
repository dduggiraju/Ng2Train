export class Name {
    // first: string;
    // second: string;
    // constructor(first, second) {
    //     this.first = first;
    //     this.second = second;
    // }
    //short hand notation of above in type script is 
    constructor(private first: string, private second: string){}
    get nameMessage(): string {
        return `Hello ${this.first} ${this.second}`;
    }
}

export class WeatherLocation {

    constructor(private weather: string, private city: string){}
    get weatherMessage(): string {
        return `It is ${this.weather} in ${this.city}`;
    }
}