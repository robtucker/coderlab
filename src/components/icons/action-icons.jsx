import React from "react";
import {palette} from "../../styles";

export const ErrorIcon = ({color, fontSize, padding, borderWidth}) => {

    let errorStyles = {
            padding: padding || '0px',
        color: color || palette.danger,
        border: `1px solid ${color || palette.danger}`, 
        borderRadius: '100%', 
        fontSize: fontSize || '16px'
    }

    return (<i style={errorStyles} className="material-icons margin-x-xs">clear</i>);
}

export const SuccessIcon = ({color, fontSize, padding, borderWidth}) => {
    let successStyles = {
        padding: padding || '0px',
        color: color || palette.success,
        border: `${borderWidth || '1px'} solid ${color || palette.success}`, 
        borderRadius: '100%', 
        fontSize: fontSize || '16px'
    }

    return (<i style={successStyles} className="material-icons margin-x-xs">done</i>)
}

export const CloseIcon = ({color, fontSize, padding, borderWidth}) => {
    let closeStyles = {
        color: color || 'inherit',
        padding: padding || '0px',
        //border: `1px solid ${color || palette.success}`, 
        //borderRadius: '100%', 
        fontSize: fontSize || '16px'
    }

    return (<i style={closeStyles} className="material-icons cursor-pointer margin-x-xs">close</i>)
}
