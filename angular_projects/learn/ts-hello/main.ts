// code to show TS compiling to JS

/* function log(message) {
 console.log(message);   
}

var message = 'Hi User';
log(message); */

// ---------------------------------------------------------------------------------------------------------------------------------

// variables

/* function doThis() {
    for(let i=0; i<5; i++) {        //try with var and let..check 'i' in finally..execute with error and check main.js
        console.log(i);
    }
    console.log('Finally check this: ', +i);
}
doThis(); */

// ---------------------------------------------------------------------------------------------------------------------------------

//type assertions in typescript
// let message = 'abc';    //message is of type string
// message.endsWith('c');  // since string, we get intellisense bcz TS recognized message as string

// now check this
/* let message;        // is of type any
message = 'abc';    // message is still of type any but not string
// let endsWithC = message.  //we dnt gt intellisense anymore..this is why type assertion is IMP and we need to specify it as (see below)
let endsWithC = (<string>message).endsWith('c');    //this is how to define the any type to string type
let alternativeWay = (message as string).endsWith('c');   //this is how to define the any type to string type - alt way
 */




// ----------------------------------------------------------------------------------------------------------------------------------
//cohesion principle - create as a class

/* interface Point {
    x:number,
    y:number,
    draw:() => void     // now draw can access entire x,y in it bcz of interface declaration
}

let drawPoint = (point: Point) => {
    // ...... some code here
}

let getDistance = (pointA: Point, pointB: Point) => {
    //........some code here
}

drawPoint({
    x:1,
    y :2
}); */


//now class method bcz interface violates cohesion

/* class Point {
    x: number;
    y: number;

    draw() {
        //..logic here
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {     //method: if a func is a part of class, we call it a method
        //.....logic
    }
}   // everything is in one block and supports cohesion

// now we create an object for this class and call a method


let point = new Point();    // an object is an instance of class
point.x =1;
point.y = 2;
point.draw(); */


// constructors and access-modifiers

class Point {
    // private x: number;
    // private y: number;   // remove from here..use it in const()

    constructor(private x?: number, private y?: number) {     // in Java, C# we can use multiple constructors
        // but in TS, we can have only one constructor per class
        // this.x = x;
        // this.y = y;
    }

    draw() {
        //..logic here
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getX() {
        return this.x;
    }

    setX(value) {        // this is new value for x
        if (value < 0) {
            throw new Error('value cannot be less than 0');

        this.x = value;     // now see below to see how to change X value
        }
    }
}   // everything is in one block and supports cohesion

// now we create an object for this class and call a method

let point = new Point(1, 2);    // an object is an instance of class
// here bcx X,Y are private..we can't access directly using obj.
// so we create a method where we return the values in the class itself..check above
let x = point.getX();   // now we can access private variable
point.setX(10);     // now X value changed from 1 to 10
// to workaround on the similar concept here, TS has properties concept


point.draw();













