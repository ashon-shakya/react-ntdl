import React from "react";
import { randomIdGenerator } from "../helper/helperFunctions";

export default function RandomComponent() {
    let varibale = randomIdGenerator();
    return <div>{varibale}</div>;
}
