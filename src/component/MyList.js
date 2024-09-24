import React from "react";

export default function MyList({ phoneList }) {
    return (
        <div>
            <ul>
                {phoneList.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name} | {item.phone} | {item.email}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
