class Rectangle2 {
    constructor(topL, bottomR) {
        this.topL = topL;
        this.bottomR = bottomR;
    }

    get perimetro() {
        return ((this.bottomR.x - this.topL.x) + (this.bottomR.y - this.topL.y)) * 2;
    }

    get area() {
        return ((this.bottomR.x - this.topL.x) * (this.bottomR.y - this.topL.y));
    }

    get allPoints(){
        const points = [];
        const topR = new Point(this.bottomR.x, this.topL.y);
        const bottomL = new Point(this.topL.x, this.bottomR.y);
        
        points.push(topL);
        points.push(topR);
        points.push(bottomR);
        points.push(bottomL);

        return points;
    }
}