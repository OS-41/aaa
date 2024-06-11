class Vector {
    constructor(ing) {
        ing = [0,0];
    }
    Add(Vector) {
        return new Vector(this.ing[0] + Vector[0], this.ing[1] + Vector[1]);
    }
}
