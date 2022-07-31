import React from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Shape } from "react-konva";
const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            // {
            //     // context.beginPath();
            //     // // context.moveTo(20, 50);
            //     // context.moveTo(50, 50);
            //     // // context.lineTo(220, 80);
            //     // context.lineTo(150, 50);
            //     // context.lineTo(100, 150);
            //     // // context.quadraticCurveTo(150, 100, 260, 170);
            //     // context.closePath();
            // }
            context.beginPath();
            context.moveTo(150, 50);
            context.quadraticCurveTo(100, 10, 50, 50);
            context.lineTo(100, 150);
            context.closePath();
            context.closePath();

            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);
          }}
          fill="#00D2FF"
          stroke="black"
          strokeWidth={4}
          draggable
        />
      </Layer>
    </Stage>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
