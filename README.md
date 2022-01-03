# Máscara simples para input de número de telefone brasileiro com 8 ou 9 dígitos e DDD

Essa biblioteca para React cria um `<input/>` com a máscara ideal para o formato brasileiro dos números de telefone enquanto você digita.
Por padrão é identificado tanto números telefônicos de 8 dígitos, quanto números de 9 dígitos.
Além disso também é possível reconhecer números com DDD.

## Instalação

```shell
$ npm install victorjean9/react-telefone-brasileiro
```

## Importação

Coloque o seguinte import no seu componente:
```JSX
import TelefoneBrasileiroInput from "victorjean9/react-telefone-brasileiro";
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
                temDDD
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Parâmetros visuais

Foi criado também outras máscaras:
- Uma para o formato do nono dígito separado: x xxxx-xxxx ou (xx)x xxxx-xxxx.

    Para isso adicione o parâmetro `separaNono`:

    ```JSX
    <TelefoneBrasileiroInput
        value={telefone}
        onChange={(event) => setTelefone(ev.target.value);}
        separaNono
    />
    ```

- E outra para o formato do DDD separado: (xx) xxxx-xxxx ou (xx) xxxxx-xxxx.
    Para isso adicione o parâmetro `separaDDD`:
    > OBS: repare que o parâmetro `temDDD` é obrigatório para esse parâmetro.
    ```JSX
    <TelefoneBrasileiroInput
        value={telefone}
        onChange={(event) => setTelefone(ev.target.value);}
        temDDD
        separaDDD
    />
    ```

- Você também pode utilizar os dois parâmetros ao mesmo tempo, com isso as máscaras seguem o seguinte formato: (xx) x xxxx-xxxx.
    ```JSX
    <TelefoneBrasileiroInput
        value={telefone}
        onChange={(event) => setTelefone(ev.target.value);}
        separaNono
        temDDD
        separaDDD
    />
    ```

## Parâmetros
|            Nome             |          Tipo           | Default | Descrição                                                                                                                                |
| :-------------------------: | :---------------------: | :----------: | :----------------------------------------------------------------------------------------------------------------------------------------- |
|    **[`value`](#value)**    |        `String`         |     `""`     | Valor a ser digitado.                                                                                       |  |
| **[`onChange`](#onChange)** | `Function(event)` |  `() => {}`  | `event`: Evento de entrada do parâmetro `onChange`. <br/> `event.target.value` é o valor a ser mascarado. |
|     **[`temDDD`](#temDDD)**     |        `Boolean`         |    `false`     | Adiciona campo para a escrita do DDD caso `true`. |
|     **[`separaNono`](#separaNono)**     |        `Boolean`         |    `false`     | Separa o nono dígito dos demais dígitos caso `true` |
|     **[`separaDDD`](#separaNono)**     |        `Boolean`         |    `false`     | Separa o DDD dos demais dígitos caso `true` |

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**