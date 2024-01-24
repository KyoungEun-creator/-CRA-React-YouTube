import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_row_center") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "h_row_start") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "h_row_end") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        `
    }
    else if (value === "h_row_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "v_row_center") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "v_row_start") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "v_row_end") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        `
    }
    else if (value === "v_row_between") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }
}

const setDeco = (value) => {
    if (value === "none") {
        return `
            background-color: transparent;
            color: black;
        `
    }
    else if (value === "black") {
        return `
            border: 1px solid black;
            background-color: black;
            color: white;
        `
    }
}

export const Button = styled.button`
    type: ${ props => props.type || "button" };
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    padding: ${ props => props.padding || "3px 3px 3px 3px" };
    border: ${ props => props.border || "none" };
    ${ props => setDeco(props.deco) };
    ${ props => setFlex(props.flex) };
    cursor: pointer;
`