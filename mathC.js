class MathC {
    static calculateDistance(A, B){
        const xDif = B.x - A.x;
        const xDif2 = xDif * xDif;
        const yDif = B.y - A.y;
        const yDif2 = yDif * yDif;
        const sumDif2 = xDif2 + yDif2;
        const sqrtsumDif2 = Math.sqrt(sumDif2);
        return sqrtsumDif2;
        
        //return Math.sqrt(Math.pow((B.x - A.x), 2) + (Math.pow((B.y - A.y), 2)));
    }

    static medianPoint(A, B){
        return new Point((A.x + B.x)/2, (A.y + B.y)/2);
    }


    static distanceFromOrigin(P) {
        const origin = new Point(0,0);
        return this.calculateDistance(origin, P);
    }


    static nearestPoint(startingPoint, ...points){
        let lowestPoint = startingPoint;
        let lowestDistance = +Infinity;
        for (let i = 0; i < points.length; i++) {
            const element = points[i];
            let currentDistance = this.calculateDistance(element, startingPoint);
            if (currentDistance < lowestDistance) {
                lowestDistance = currentDistance; 
                lowestPoint = element;
            }
        }
        return lowestPoint;
    }
}