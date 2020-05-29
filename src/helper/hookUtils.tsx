import { useState } from "react";

export default {
    useRandomId
};


function useRandomId() {
    const [id] = useState(Math.random());
    return id;
}