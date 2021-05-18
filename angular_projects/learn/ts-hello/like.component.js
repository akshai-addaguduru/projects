"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    // likesCount: number;     // check count of likes
    // isSelected: boolean;    // if like button is selected or not
    // see below why these are commented
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
        // this.likesCount = likesCount; // this is repetetive..
        // so we prefix in the constructor above with public keyword
        // and we deleted export class variables too..       
    }
    LikeComponent.prototype.onClick = function () {
        // if (this.isSelected) {   // if button selected..reduce likes
        //     this.likesCount--;
        // this.isSelected = false;    // we use toggle below instead of setting true false
        // } else {
        //     this.likesCount++;      // increase likes
        // this.isSelected = true;     // we use toggle below instead of setting true false
        // }
        // efficient code instead of if-else above...we use following block
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected; //toggle true or false abt isSelected
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
