class Dog {
    constructor() {
        this.eyes = 2;
        this.nose = 1;
        this.mouth = 1;
        this.ears = 2;
        this.kinds = "개";
        console.log(`${this.kinds} Initialised: Eyes = ${this.eyes}, Nose = ${this.nose}, Mouth = ${this.mouth}, Ears = ${this.ears}`);
    }

    Bark() {
        console.log("멍멍");
    }
}

class Poodle extends Dog {
    constructor() {
        super();
        this.kinds = "푸들";
        console.log(`${this.kinds} Initialised: Eyes = ${this.eyes}, Nose = ${this.nose}, Mouth = ${this.mouth}, Ears = ${this.ears}`);
    }

    Bark()
    {
        console.log("왈왈");
    }
}

const a = new Dog();
a.Bark();

console.log();

const pd = new Poodle();
pd.Bark();