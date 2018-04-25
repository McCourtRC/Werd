import { CHANGE_BG_COLOR } from './types/testTypes'

// export const changeBgColor = (color) => {
//     return {
//         type: CHANGE_BG_COLOR, 
//         color
//     };
// };

export const changeBgColor = (color) => ({type: CHANGE_BG_COLOR, color})