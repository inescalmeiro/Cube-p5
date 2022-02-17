export function find_color(sticker){
    /*const yellow = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const orange = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    const blue = [18, 19, 20, 21, 22, 23, 24, 25, 26];
    const red = [27, 28, 29, 30, 31, 32, 33, 34, 35];
    const green = [36, 37, 38, 39, 40, 41, 42, 43, 44];
    const white = [45, 46, 47, 48, 49, 50, 52, 52, 53];
    yellow is 0
    ...
    white is 5
    */
   let color
   if (sticker > 44){
        color = 5;
   }
   else{
       if (sticker > 35){
           color = 4;
       }
       else{
           if (sticker > 26){
               color = 3;
           }
           else{
                if (sticker > 17){
                    color = 2;
                }
                else{
                    if (sticker > 8){
                        color = 1
                    }
                    else{color = 0}
                }
           }
       }
   }
   return color
  }