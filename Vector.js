class Vector {
    constructor(comp) {
        comp = [0, 0, 0];
    }
    Add(Vector) {
        if (typeof Vector != Object) {
            if (Vector.constructor.name == "Vector") {
                if (Vector.comp.length == this.comp.length) {
                    return new Vector(this.comp[0] + Vector[0], this.comp[1] + Vector[1], this.comp[2] + Vector[2]);
                } else {
                    console.error("there are different length between the two vectors");
                }
            } else {
                console.error("the second argument is not a vector");
            }
        } else {
            console.error("the second argument is not a vector");
        }
    }
    Sub(Vector) {
        if (typeof Vector != Object) {
            if (Vector.constructor.name == "Vector") {
                if (Vector.comp.length == this.comp.length) {
                    return new Vector(this.comp[0] - Vector[0], this.comp[1] - Vector[1], this.comp[2] - Vector[2]);
                } else {
                    console.error("there are different length between the two vectors");
                }
            } else {
                console.error("the second argument is not a vector");
            }
        } else {
            console.error("the second argument is not a vector");
        }
    }
    dot_product(Vector) {
        if (typeof Vector !== Object) {
            if (Vector.constructor.name == "Vector") {
                if (Vector.comp.length == this.comp.length) {
                    return (this.comp[0] * Vector.comp[0] + this.comp[1] * Vector.comp[1] + this.comp[2] * Vector.comp[2]);
                } else {
                    console.error("there are different length between the two vectors");
                }
            } else {
                console.error("the second argument is not a vector");
            }
        } else {
            console.error("the second argument is not a vector");
        }
    }
    cross_product(Vector) {
        if (typeof Vector !== Object) {
            if (Vector.constructor.name == "Vector") {
                if (Vector.comp.length == this.comp.length) {
                    return new Vector(this.comp[1] * Vector.comp[2] - this.comp[2] * Vector.comp[1], this.comp[2] * Vector.comp[1] - this.comp[1] * Vector.comp[2],this.comp[1] * Vector.comp[2] - this.comp[2] * Vector.comp[1]);
                } else {
                    console.error("there are different length between the two vectors");
                }
            } else {
                console.error("the second argument is not a vector");
            }
        } else {
            console.error("the second argument is not a vector");
        }
    }
}