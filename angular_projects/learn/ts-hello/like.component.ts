export class LikeComponent {
    // likesCount: number;     // check count of likes
    // isSelected: boolean;    // if like button is selected or not
    // see below why these are commented

    constructor(private _likesCount: number, private _isSelected: boolean) {   // to set initial value of the fields..we need constructor
        // this.likesCount = likesCount; // this is repetetive..
        // so we prefix in the constructor above with public keyword
        // and we deleted export class variables too..       
    }

    onClick() {     //method to click a like
        // if (this.isSelected) {   // if button selected..reduce likes
        //     this.likesCount--;
        // this.isSelected = false;    // we use toggle below instead of setting true false
        // } else {
        //     this.likesCount++;      // increase likes
        // this.isSelected = true;     // we use toggle below instead of setting true false
        // }

        // efficient code instead of if-else above...we use following block
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;  //toggle true or false abt isSelected

    }

    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }
}