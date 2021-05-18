export class Point {        // when added export, we can see this class outside the file
                            // now TS treats this file as a module bcz of export
    constructor(private x?: number, private y?: number) { 
        // ......
    }

    draw() {
        //..logic here
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}