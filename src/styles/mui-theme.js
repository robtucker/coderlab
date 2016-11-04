import {fade} from 'material-ui/utils/colorManipulator';

export const MAIN_THEME = {
    spacing: 10,
    fontFamily: 'BrandonText-Regular, sans-serif',
    palette: {
        primary1Color: "#cde9d2",
        primary2Color: "#71c17d",
        primary3Color: "#41954e",
        accent1Color: "#dd9cbb",
        accent2Color: "#b53f78",
        accent3Color: "#71274b",
        textColor: "#71c17d",
        alternateTextColor: "#fff",
        canvasColor: "#fff",
        borderColor: "#71c17d",
        disabledColor: fade("#71c17d", 0.3),
        pickerHeaderColor: "#71c17d",
        clockCircleColor: fade("#71c17d", 0.07),
        shadowColor: "#000",
    },
};

export const muiTheme = {
    palette: {
        textColor: "#71c17d",
    },
    appBar: {
        height: 50,
    },
};

