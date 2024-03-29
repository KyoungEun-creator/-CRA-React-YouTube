import { styled } from "styled-components";
import setFlex from "./SetFlex";

const setColor = (value) => {
    const template = {
        "black": "#000000",
        "white": "#ffffff",
        "major": "#",
        "none": "#00000000"
    }
    return template[value]
}

const setSize = (value) => {
    const template = {
        "small": "12px",
        "medium": "16px",
        "large": "30px"
    }
    return template[value]
}

const setWeight = (value) => {
    const template = {
        "thin": "200",
        "normal": "400",
        "bold": "700"
    }
    return template[value]
}

// const setType = (type, color) => {
//     if (type === "text" || "password") {
//         return`
//             border: 1px solid ${setColor(color || "black") }
//         `
//     }
//     else if (type === "button") {
//         return `
//             borer: none
//             ${setFlex("h_center")}
//         `
//     }
// }
const setType = (type) => {
    if (type === "text" || "password") {
        return`
            border: 1px solid black
        `
    }
    else if (type === "button") {
        return `
            borer: none
            ${setFlex("h_center")}
        `
    }
}

export const Input = styled.input`
    box-sizing: "border-box";
    ${ props => setType(props.type) };  
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    background-color: ${ props => setColor(props.bgcolor || "none") };
    color: ${ props => setColor(props.color || "black") };
    font-size: ${ props => setSize(props.fontSize || "small") };
    font-weight: ${ props => setWeight(props.fontWeight || "normal") };
    padding: ${ props => props.padding || "5px" };
    margin: ${ props => props.margin || "0" };
    cursor: pointer;
`