import { University } from "../interfaces/type.ts";
import styled from "styled-components";
import React from "react";

const UniversityPreviewDiv = styled.div`
    margin: auto;
    padding: 1rem;
    width: 20rem;
    background-color: darkslategrey;
`;

export function UniversityPreview({ university }: { university: University }) {
    return (
        <UniversityPreviewDiv>
            <h3>{university.nation}</h3>
            <p>Population: {university.population}</p>
            <p>Year: {university.year}</p>

        </UniversityPreviewDiv>
    );
}
