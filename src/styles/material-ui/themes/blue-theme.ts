import { fade } from 'material-ui/utils/colorManipulator';



import {
    lightBlue500, 
    lightBlue800, 
    lightBlue200, 
    pink300, 
    grey100, 
    grey300, 
    grey400, 
    grey500, 
    white, 
    darkBlack, 
    fullBlack,
    green600,
    yellow600,
    red600
} from '../colors';

export default {
    fontFamily: 'BrandonText-Regular',
    palette: {
        primary1Color: lightBlue500,
        primary2Color: lightBlue800,
        primary3Color: lightBlue200,
        accent1Color: pink300,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: lightBlue500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
        success: green600,
        warning: yellow600,
        danger: red600
    }
};

