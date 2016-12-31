import { fade, emphasize, darken, lighten } from 'material-ui/utils/colorManipulator';

import spacing from "./spacing";
import typography from './typography';

import { darkWhite, lightBlack, lightWhite, transparent, white, black,
    grey400, grey500, grey600, grey700, 
    red500 
} from "./colors";

const margins = {

}

const paddings = {

};


// overide material-ui defaults
export default ({palette}) => ({
    appBar: {
        color: palette.primary1Color,
        textColor: palette.alternateTextColor,
        height: 56,
        titleFontWeight: typography.fontWeightNormal,
        padding: spacing.desktopGutter,
    }
});