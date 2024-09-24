import React, { useState } from "react";

export default function MyForm({ updatePhoneList }) {
    const handleSubmitForm = (event) => {
        event.preventDefault();
        updatePhoneList(inputObject);

        setInputObject({
            name: "",
            phone: 0,
            email: "",
        });
    };

    const [inputObject, setInputObject] = useState({
        name: "",
        phone: 0,
        email: "",
    });

    const handleInputChange = (event) => {
        const tempInputValue = { ...inputObject };

        let keyName = event.target.name;
        let keyValue = event.target.value;

        tempInputValue[keyName] = keyValue;

        setInputObject({
            ...inputObject,
            [keyName]: keyValue,
        });

        // setInputObject(tempInputValue);
    };

    const customFunction = (inputVariable) => {
        setInputObject({
            test: "",
        });
    };
    const someFunction = () => {
        customFunction();
    };

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    value={inputObject.name}
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                />
                <input
                    name="phone"
                    type="number"
                    onChange={handleInputChange}
                    value={inputObject.phone}
                />

                <input
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    value={inputObject.email}
                />
                <button type="submit" onClick={customFunction("TEST")}>
                    Submit
                </button>
            </form>
        </div>
    );
}
