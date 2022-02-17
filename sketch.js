import {checkSolved, generateCube} from "./cube.js";
import {drawSticker} from "./utils/draw_sticker.js"
import {faceDefiniton} from "./utils/face_definition.js"
import {planeDefinition} from "./utils/plane_definition.js"
import {drawPlane} from "./utils/draw_plane.js"
import { findToRotate } from "./utils/find_to_rotate.js";
import { executeMove } from "./cube.js";


let cube = generateCube();
let easycam

let colorScheme = cube.colorScheme()

let unit = 50;
let angleX = 0;
let angleY = 0;
let angleZ = 0;
let move
let message = 0;

//0-5 = red; 6-11 = green; 12-17 = blue
//RGB to yellow, orange, blue, red, green, white in this order
let colors = [255, 255, 0, 255, 0, 255, 210, 125, 0, 0, 255, 255, 0, 0, 255, 0, 0, 255];  
let clockWise = true;

function setup() {
  createCanvas(400, 400, WEBGL);
  easycam = createEasyCam();
  for (let i = 0; i <= 30; i++){
    move = Math.floor((Math.random()*6));
    cube = executeMove(move, cube);
  }
  move = -1;
}

function draw() {
    
    let toRotate = findToRotate(move);
    colorScheme = cube.colorScheme();
    background(255)
    let x, y, z, increment1, increment2;
    let Xplane, Yplane, Zplane
    let frame = 32;

    for (let times = 0; times <= 1; times++){
      for (let face = 0; face <= 5; face++){

        [x, y, z, increment1, increment2] = faceDefiniton(face);

        for (let sticker = 0; sticker <= 8; sticker++){
          rectMode(CENTER)
          stroke(0)
          let c = colorScheme[9*face + sticker];
          fill(colors[c], colors[c+6], colors[c+12]);
          if (times == 0 && toRotate.indexOf(9*face + sticker) == -1){
            drawSticker(sticker, unit, x, y, z, increment1, increment2);
            if (move != -1){
              [Xplane, Yplane, Zplane] = planeDefinition(move);
              drawPlane(Xplane, Yplane, Zplane, unit)
            }
          }   
          if (times == 1 && toRotate.indexOf(9*face + sticker) != -1){
            drawSticker(sticker, unit, x, y, z, increment1, increment2);
            if (move != -1){
              [Xplane, Yplane, Zplane] = planeDefinition(move);
              drawPlane(Xplane, Yplane, Zplane, unit)
            }
          }        
          
        }
      }
      if (times == 0){
        rotateX(angleX)
        rotateY(angleY)
        rotateZ(angleZ)
      }
    }
    if (Math.abs(angleX) < PI/2 && Math.abs(angleY) < PI/2 && Math.abs(angleZ) < PI/2){
      if (clockWise){
        if (move == 0){
          angleZ += PI/frame;
        }
        else if (move == 1){
          angleX += -PI/frame;
        }
        else if (move == 2){
          angleY += PI/frame;
        }
        else if (move == 3){
          angleX += PI/frame;
        }
        else if (move == 4){
          angleY += -PI/frame;
        }
        else if (move == 5){
          angleZ += -PI/frame;
        }
      }
      else if (!clockWise){
        if (move == 0){
          angleZ += -PI/frame;
        }
        else if (move == 1){
          angleX += PI/frame;
        }
        else if (move == 2){
          angleY += -PI/frame;
        }
        else if (move == 3){
          angleX += -PI/frame;
        }
        else if (move == 4){
          angleY += PI/frame;
        }
        else if (move == 5){
          angleZ += PI/frame;
        }
      }
    }
    else{
      angleX = 0;
      angleY = 0;
      angleZ = 0;
      console.log(cube.unit)
      cube = executeMove(move, cube);

      if (!clockWise){
        cube = executeMove(move, cube);
        cube = executeMove(move, cube);
        clockWise = true;
      }
      move = -1;
    }
  if (checkSolved(cube) && message == 0){
    createP('Well done!!!')
    message = 1;
  }
}

/*function mousePressed(){
  clockWise = false;
}*/

function keyPressed(){
  if (Math.abs(angleX) < PI/2 && Math.abs(angleY) < PI/2 && Math.abs(angleZ) < PI/2){
    cube = executeMove(move, cube);
  }

  if (keyCode == 82){
    move = 3;
  }
  else if (keyCode == 76){
    move = 1;
  }
  else if (keyCode == 85){
    move = 0;
  }
  else if (keyCode == 70){
    move = 2;
  }
  else if (keyCode == 68){
    move = 5;
  }
  else if (keyCode == 66){
    move = 4;
  }

  angleX = 0;
  angleY = 0;
  angleZ = 0;

  if (keyCode == 32){
    clockWise = false;
  }
}

window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
//window.mousePressed = mousePressed;