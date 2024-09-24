import logo from "./logo.svg";
import "./App.css";
import { randomIdGenerator, helper2 } from "./helper/helperFunctions";
import RandomComponent from "./component/randomComponent";
import MyForm from "./component/MyForm";
import MyList from "./component/MyList";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
    const [phoneList, setPhoneList] = useState([
        {
            id: "1",
            name: "test",
            phone: 100,
            email: "email",
        },
        {
            id: "2",
            name: "test",
            phone: 100,
            email: "email",
        },
    ]);

    const updatePhoneList = (inputObject) => {
        setPhoneList([...phoneList, inputObject]);
    };

    return (
        <div className="App">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faHome} />
            TEST
            <MyForm updatePhoneList={updatePhoneList} />
            <MyList phoneList={phoneList} />
        </div>
    );
}

export default App;
