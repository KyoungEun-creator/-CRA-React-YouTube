import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_center") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "h_start") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "h_end") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        `
    }
    else if (value === "h_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "v_center") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "v_start") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "v_end") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
        `
    }
    else if (value === "v_between") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }
}

export const Span = styled.span`
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    ${ props => setFlex(props.flex) };
`