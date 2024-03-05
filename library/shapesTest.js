const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  it("should render a triangle in the correct color", () => {
    const shape = new Triangle();
    var color = "orange";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="150,50 250,150 50,150" fill="${color}" />`
    );
  });
});

describe("Circle", () => {
  it("should render a circle in the correct color", () => {
    const shape = new Circle();
    var color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="${color}" />`
    );
  });
});

describe("Square", () => {
  it("should render a square in the correct color", () => {
    const shape = new Square();
    var color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" y="50" width="200" height="200" fill="${color}" />`
    );
  });
});
