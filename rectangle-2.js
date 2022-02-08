// class Rectangle2 {
//     constructor(topL, bottomR) {
//         this.topL = topL;
//         this.bottomR = bottomR;
//     }

//     get perimetro() {
//         return ((this.bottomR.x - this.topL.x) + (this.bottomR.y - this.topL.y)) * 2;
//     }

//     get area() {
//         return ((this.bottomR.x - this.topL.x) * (this.bottomR.y - this.topL.y));
//     }

//     get allPoints() {
//         const points = [];
//         const topR = new Point(this.bottomR.x, this.topL.y);
//         const bottomL = new Point(this.topL.x, this.bottomR.y);

//         points.push(topL);
//         points.push(topR);
//         points.push(bottomR);
//         points.push(bottomL);

//         return points;
//     }
// }

class Rectangle2{

    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft
        this.bottomRight = bottomRight;
        this.topRight = Rectangle2.generateTopRightPoint(topLeft, bottomRight)
        this.bottomLeft = new Point(topLeft.x, bottomRight.y);
    }

    static generateTopRightPoint(topLeft, bottomRight){
        return new Point(bottomRight.x, topLeft.y);
    }

    get perimeter(){
        return this.topLeft.distanceFrom(this.topRight)
             + this.topRight.distanceFrom(this.bottomRight)
             + this.bottomRight.distanceFrom(this.bottomLeft)
             + this.bottomLeft.distanceFrom(this.topLeft); 
    }

    calculatePerimeter(){
        return this.topLeft.distanceFrom(this.topRight)
             + this.topRight.distanceFrom(this.bottomRight)
             + this.bottomRight.distanceFrom(this.bottomLeft)
             + this.bottomLeft.distanceFrom(this.topLeft); 
    }

    get area(){
        return this.bottomRight.distanceFrom(this.bottomLeft)
             * this.bottomRight.distanceFrom(this.topRight);
    }

}


class Quadrato extends Rectangle2{
    constructor(topLeft, side){
        super(topLeft, new Point(topLeft.x + side, topLeft.y + side));
    }
}