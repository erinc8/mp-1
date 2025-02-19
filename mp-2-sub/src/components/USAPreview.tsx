import { USA} from "../interfaces/type.ts";
import { styled } from "styled-components";

const USAPreviewDiv = styled.div`
margin: 3rem;
padding: 1rem;
width: 20rem;
background-color: lightblue;
`

export function USAPreview ({usa}: {usa: USA}) {
    return (
        <USAPreviewDiv>
            <h3>{usa.title}</h3>
            <p>{usa.place_of_origin}</p>
            <p>{usa.medium_display}</p>
        </USAPreviewDiv>
    )
}