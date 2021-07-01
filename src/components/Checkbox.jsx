import { Children } from "react"

export default function MakeCheckbox({ onChange, value, children }) {

    return (<li>
        <label
        ><input name="bestFeatures" type="checkbox" value={value} onChange={onChange} />{children}</label
        >
    </li>

    )
}