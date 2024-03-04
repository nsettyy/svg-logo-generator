class Shapes {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return "";
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150,50 250,150 50,150" fill="${this.color}" />`;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
