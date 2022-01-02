# Máscara simples para input de número de telefone brasileiro com 8 ou 9 dígitos e DDD

Essa biblioteca para React cria um `<input/>` com a máscara ideal para o formato brasileiro dos números de telefone enquanto você digita.
Por padrão é identificado tanto números telefônicos de 8 dígitos, quanto números de 9 dígitos.
Além disso também é possível reconhecer números com DDD.

## Instalação

```shell
$ npm install victorjean9/react-telefone-brasileiro
```

## Exemplos

### Exemplo básico

O exemplo abaixo cria um `<input/>` para reconhecer números telefônicos de 8 ou 9 dígitos sem o DDD.
De acordo com as seguintes máscaras: xxxx-xxxx ou xxxxx-xxxx.

```JSX
import React, { useState } from "react";
import ReactDOM from "react-dom";
import TelefoneBrasileiroInput from "victorjean9/react-telefone-brasileiro";

const App = () => {

  const [telefone, setTelefone] = useState("");

  return (
    <div>
      <TelefoneBrasileiroInput
            value={telefone}
            onChange={(event) => setTelefone(ev.target.value);}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Exemplo com DDD

O exemplo abaixo cria um `<input/>` para reconhecer números telefônicos de 8 ou 9 dígitos com o DDD.
De acordo com as seguintes máscaras: (xx)xxxx-xxxx ou (xx)xxxxx-xxxx.

```JSX
import React, { useState } from "react";
import ReactDOM from "react-dom";
import TelefoneBrasileiroInput from "victorjean9/react-telefone-brasileiro";

const App = () => {

  const [telefone, setTelefone] = useState("");

  return (
    <div>
      <TelefoneBrasileiroInput
            value={telefone}
            onChange={(event) => setTelefone(ev.target.value);}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```