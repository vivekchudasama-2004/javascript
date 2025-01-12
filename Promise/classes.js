class rectangle {
    constructor(width, height , color) {
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        return this.height * this.width;
    }

    paint(){
         console.log(`the color of the rectangle is ${this.color}`);
    }
}

const rect = new rectangle(50 , 100 , "red"); //instance of the rectangle class object
const area = rect.area();
console.log(area);
rect.paint()