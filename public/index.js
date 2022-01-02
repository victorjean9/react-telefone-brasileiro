import React, { useState } from "react";
import ReactDOM from "react-dom";
import TelefoneBrasileiroInput from "../src";

const App = () => {
    const [telefone, setTelefone] = useState("");

    return(<TelefoneBrasileiroInput error={503} value={telefone} onChange={(event) => setTelefone(event.target.value)} />);
}

ReactDOM.render(<App />, document.getElementById("root"));