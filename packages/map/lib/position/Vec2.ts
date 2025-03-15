export class Vec2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number): Vec2 {
    this.x = x;
    this.y = y;
    return this;
  }

  clone(): Vec2 {
    return new Vec2(this.x, this.y);
  }

  add(other: Vec2): Vec2 {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other: Vec2): Vec2 {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  multiply(scalar: number): Vec2 {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  divide(scalar: number): Vec2 {
    if (scalar !== 0) {
      this.x /= scalar;
      this.y /= scalar;
    } else {
      throw new Error("Division by zero");
    }
    return this;
  }

  dot(other: Vec2): number {
    return this.x * other.x + this.y * other.y;
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vec2 {
    const len = this.length();
    if (len > 0) {
      this.x /= len;
      this.y /= len;
    }
    return this;
  }

  distance(other: Vec2): number {
    return Math.sqrt(
      Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
    );
  }

  rotate(angle: number): Vec2 {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const x = this.x;
    this.x = x * c - this.y * s;
    this.y = x * s + this.y * c;
    return this;
  }

  toString(): string {
    return `Vec2(${this.x}, ${this.y})`;
  }
}

// // 使用示例
// const v1 = new Vec2(1, 2);
// const v2 = new Vec2(3, 4);

// v1.add(v2); // 结果向量为 (4, 6)
// v1.subtract(v2);
