// sample.ts
enum Color {Red, Blue, Green};

interface Car {
    getModel: Function;
    getYear: Function;
}

class Hyundai implements Car {
    constructor() {

    }

    getModel() {}

    getYear() {}

    desc: string = `A crappy little car.`;
    colors: Color.Green;
}