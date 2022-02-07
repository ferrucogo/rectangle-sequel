const segment1 = new Segment(3, 5, 6, 1);

// console.log(segment1.length);
// console.log(segment1.mediumPoint);

const verticeInfSx = new Point(3, 2);
const verticeSupSx = new Point(3, 6);
const verticeSupDx = new Point(8, 2);
const verticeInfDx = new Point(8, 6);
const randomPoint = new Point(20, 20);
const topL = new Point(20, 20);
const bottomR = new Point(45, 35);

const rectangle1 = new Rectangle(verticeInfSx, verticeSupSx, verticeSupDx, verticeInfDx);
const rectangle2 = new Rectangle1(randomPoint, 25, 15)
const rectangle3 = new Rectangle2(topL, bottomR);

console.log("Vertici - Rectangle 1:", rectangle2.allPoints);
console.log("Perimetro - Rectangle 1:", rectangle2.perimetro);
console.log("Area - Rectangle 1:", rectangle2.area);

console.log("Vertici - Rectangle 2:", rectangle3.allPoints);
console.log("Perimetro - Rectangle 2:", rectangle3.perimetro);
console.log("Area - Rectangle 2:", rectangle3.area);