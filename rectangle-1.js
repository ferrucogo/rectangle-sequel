class Rectangle1 {
    constructor(startingPoint, width, height) {
        this.startingPoint = startingPoint;
        this.width = width;
        this.height = height;
    }

    get perimetro() {
        return 2 * (this.width + this.height);
    }

    get area() {
        return this.width * this.height;
    }

    get allPoints(){
        const points = [];
        const topR = new Point(this.startingPoint.x + this.width, this.startingPoint.y);
        const bottomR = new Point(topR.x, topR.y + this.height);
        const bottomL = new Point(this.startingPoint.x, this.startingPoint.y + this.height);
        points.push(this.startingPoint);
        points.push(topR);
        points.push(bottomR);
        points.push(bottomL);
        return points;
    }
}