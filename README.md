# Configurando o Typescript

## Instalação 

```console
npm init
```

```console
npm install --save-dev typescript
```

```console
npm install --global yarn
```

```console
yarn tsc --init
```

## Arquivo de configuração

Arquivo tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build/js",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Arquivo package.json
```json
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "yarn tsc --build",
    "watch": "yarn tsc --build --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "ts-node": "^10.9.1"
  },
  "devDependencies": {
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.8.4"
  }
}

```

> Obs: No repl.it não copiar tudo, apenas os seguintes trechos.

```json
{
  "scripts": {
    "build": "yarn tsc --build", // Esse aqui
    "watch": "yarn tsc --build --watch", // Esse aqui
  },
  "devDependencies": {
    "ts-node-dev": "^2.0.0", //Somente esse aqui
    "typescript": "^4.8.4"
  }
}
```

## Rodando

Crie uma pasta chamada `build/js` e uma chamada `src`, dentro da `src` crie os arquivos `.ts`.
Após isso, rode o comando a seguir para ver tudo rodando.

```console
yarn watch
```



