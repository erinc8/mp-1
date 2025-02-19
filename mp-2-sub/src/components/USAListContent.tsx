import {useState, useEffect} from "react";
import {USAPreview} from "./USAPreview.tsx"
import {USA} from  "../interfaces/type.ts"

export default function USAListContent() {
    const [numUSA, setNumUSA] = useState(5);
    const [usa, setUSA] = useState<USA[]>([]);

    useEffect(() => {
        async function getUSA() {
            const res = await fetch (`https://datausa.io/api/data?drilldowns=Nation&measures=Populationlimit=${numUSA}`);
            const data = await res.json();
            setUSA(data.data);
        }
        getUSA();
    })



    return (
        <div>
            <input type = "number"
                   placeholder="Number of artworks"
                   value = {numUSA}
                   onChange={(e) => setNumUSA(Number(e.target.value))} />
            <div>
                <p>numUSA: {numUSA}</p>
                {
                    usa.map((usa => <USAPreview usa={usa} />))
                }
            </div>
        </div>
    )
}

