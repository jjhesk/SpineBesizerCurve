export class Vector2 {
    x = 0
    y = 0

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static left() {
        return new Vector2(-1, 0)
    }

    static right() {
        return new Vector2(1, 0)
    }

    static up() {
        return new Vector2(0, -1)
    }

    static down() {
        return new Vector2(0, 1)
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    static add(v1, v2) {
        
    }
}
