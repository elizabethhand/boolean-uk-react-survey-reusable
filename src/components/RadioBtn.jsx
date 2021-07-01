import { Children } from "react";

export default function RadioBtn({ id, onChange, value, name, children }) {
    return (
        <li>
            <label>
                <input id={id} type="radio" name={name} value={value} onChange={onChange} />{children}</label>
        </li >
    )
}