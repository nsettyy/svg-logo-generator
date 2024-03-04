const { Triangle, Circle, Square } = require("./lib/shapes");

function generateSVG(data) {
  const { text, textColor, shape, shapeColor } = data;

  let shapeEl;

  switch (shape.toLowerCase()) {
    case "triangle":
      shapeEl = new Triangle();
      break;
    case "circle":
      shapeEl = new Circle();
      break;
    case "square":
      shapeEl = new Square();
      break;
    default:
      throw new Error("Invalid shape selected.");
  }

  shapeEl.setColor(shapeColor);
  shapeEl.setText(text, textColor);

  const svgContent = shapeElement.render();

  return svgContent;
}

module.exports = generateSVG;
