//CHALLENGE 1
const primeiraVariavel = 1
const segundaVariavel = 2
const resultado = primeiraVariavel + segundaVariavel
console.log(resultado)

//////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 2
//Monte em um aplicativo React, dois inputs controlados de email e senha, 
//além de um botão que se clicado imprime no console um objeto com duas propriedades email e senha, 
//que terá o valor digitado nos inputs.
import React from 'react';

class App extends React.Component {

  state = {
    email: "",
    senha: ""
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  onChangeSenha = (event) => {
    this.setState({ senha: event.target.value })
  }

  login = (event) => {
    // Comentário: essa linha abaixo serve para evitar o recarregamento da página ao clicar em um botão dentro de um form
    event.preventDefault()

    const body = {
      email: this.state.email,
      password: this.state.senha
    }

    // Comentário: fazemos o console.log aqui, mas em um caso real iríamos enviar os dados em uma requisição para o backend
    console.log(body)
  }

  render() {
    return <main>
      {/* Comentário: se usar o form podemos deixar a chamada da função aqui no onSubmit */}
      <form onSubmit={this.login}>

        {/* Comentário: forma implícita de acessibilidade com label */}
        <label>
          email
          <input value={this.state.email} onChange={this.onChangeEmail} type="text" name="email"/>
        </label>

        {/* Comentário: forma explícita de acessibilidade com label */}
        <label htmlFor='senha'>senha</label>
        <input value={this.state.senha} onChange={this.onChangeSenha} type="password" name="senha" id="senha" />

        {/* Comentário: por estar dentro de um form, o button será do tipo submit e não precisa do onClick */}
        <button type="submit">Entrar</button>
      </form>
    </main>
  }
}

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 3
//Desafio: pesquise e tente desenvolver uma função que retorna um número aleatório entre 1 e 100.
function randomInteger() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  console.log(randomInteger())

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 4
//Desafio: crie uma função que recebe um argumento qualquer e checa se ele é do tipo string e 
//possui pelo menos 4 caracteres. Se passar nessa checagem a função deve retornar true, caso contrário, false.
const validaTexto = (texto) => {
    if (typeof texto === "string") {
      if (texto.length >= 4) {
        return true;
      }
    }
    return false;
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 5
//Desafio: crie uma função que recebe um objeto e checa se ele possui as propriedades email e password. 
//Se ambas existirem e forem strings retorne true, caso contrário retorne null.
const validaBody = (body) => {
    if (typeof body === "object") {
      if (
        typeof body.email === "string"
        && typeof body.password === "string"
      ) {
        return true
      } // prettier-ignore
    }
    return false;
  };

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 6
//Desafio: refatore o desafio anterior e implemente também uma validação de email. 
//Considere que e-mails válidos possuam um caractere “@”(arroba) e a sequência de caracteres “.com”(ponto com).
const validaBodyEChecaEmail = (body) => {
    if (typeof body === "object") {
      if (
        typeof body.email === "string"
        && typeof body.password === "string"
      ) {
        if (
          body.email.includes("@")
          && body.email.includes(".com")
        ) {
          return true
        } 
      } // prettier-ignore
    }
    return false;
  };

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 7
//Crie uma função que recebe um array de números e checa se a soma de todos os seus elementos é par ou ímpar. 
//Se for par a função deve retornar “even”, caso contrário “odd”. Além disso, caso seja passado algum argumento
// diferente do tipo número, deve ser retornado uma mensagem “entrada inválida”.
const checaSomaArrayEPar = (numeros) => {
    let total = 0;
  
    for (let numero of numeros) {
      if (typeof numero !== "number") {
        return "entrada inválida";
      }
      // total = total + numero
      total += numero;
    }
  
    if (total % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  
  console.log(checaSomaArrayEPar([1, 2, 3, 4, 5]));
  console.log(checaSomaArrayEPar([2, 4, 6]));
  console.log(checaSomaArrayEPar([2, 4, "6"]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 8
//Crie uma função que recebe um array de objetos que possuem propriedade name, e retorna um array de 
//strings com todos os nomes, sem repeti-los. Por exemplo, se o argumento for um array com dois objetos 
//de name igual a Fulano, o array do retorno só terá uma única string Fulano.
  function geraPessoasUnicas(pessoas) {
    const pessoasUnicas = [];
  
    for (let pessoa of pessoas) {
      const indice = pessoasUnicas.indexOf(pessoa.name);
      if (indice === -1) {
        pessoasUnicas.push(pessoa.name);
      }
    }
  
    return pessoasUnicas;
  }
  
  const estudantes = [
    {
      name: "Márcio"
    },
    {
      name: "Carolini"
    },
    {
      name: "Adriana"
    },
    {
      name: "Geovana"
    },
    {
      name: "Márcio"
    }
  ];
  
  console.log(geraPessoasUnicas(estudantes));

////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 9
//e se quisermos deixar apenas os repetidos no array de resposta
function geraPessoasRepetidas(pessoas) {
    const pessoasUnicas = [];
    const pessoasRepetidas = [];
  
    for (let pessoa of pessoas) {
      const indice = pessoasUnicas.indexOf(pessoa.name);
      if (indice === -1) {
        pessoasUnicas.push(pessoa.name);
      } else {
        pessoasRepetidas.push(pessoa.name);
      }
    }
  
    return pessoasRepetidas;
  }
  
  const estudantes = [
    {
      name: "Márcio"
    },
    {
      name: "Carolini"
    },
    {
      name: "Adriana"
    },
    {
      name: "Geovana"
    },
    {
      name: "Márcio"
    }
  ];
  
  console.log(geraPessoasRepetidas(estudantes));

/////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 10
//Crie uma função que recebe um número entre 1 a 10 e retorna seu valor em extenso. 
//Por exemplo, se o input for 1 é retornado a string “um”. Caso o input não seja válido, 
//o retorno deve ser um aviso de erro “parâmetro inválido”.
const converteNumExtenso = (num) => {
    switch (num) {
        case 1:
            return "um"
        case 2:
            return "dois"
        case 3:
            return "três"
        case 4:
            return "quatro"
        case 5:
            return "cinco"
        case 6:
            return "seis"
        case 7:
            return "sete"
        case 8:
            return "oito"
        case 9:
            return "nove"
        case 10:
            return "dez"
        default:
            return "parâmetro inválido."
    }
}

console.log(converteNumExtenso(1))
console.log(converteNumExtenso(10))
console.log(converteNumExtenso("abc"))

////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 11
//Crie uma função que recebe dois números e retorna um objeto com duas propriedades, 
//o valor da divisão entre o primeiro e o segundo e o resto de sua divisão. 
//Caso um ou mais inputs não sejam válidos é retornado um objeto com propriedade “error” valendo true.
const divideNums = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        const error = {
            isError: true
        }

        return error
    }

    const result = {
        divisao: num1 / num2,
        resto: num1 % num2
    }

    return result
}

console.log(divideNums(6,2))
console.log(divideNums(5,3))
console.log(divideNums("a","b"))

///////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 12
//Crie uma função que recebe uma string e a retorna invertida. Por exemplo, 
//se o argumento for “Hello world!” deverá ser retornado  “!dlrow olleH”. 
//Tente não utilizar métodos nativos do JS. 
// 1. criar uma variável para armazenar o resultado
// 2. iterar a string do fim ao início
// 2.1 adiciona o caractere na variável resultado
// 3. retornar a variável resultado

const inverteString = (str) => {
    let result = ""

    for (let i = str.length - 1; i >= 0; i--) {
        // result = result + str[i]
        result += str[i]
    }

    return result
}

console.log(inverteString("abcdefg"))

/////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 13
//Crie uma função que recebe um objeto e retorna uma lista somente com suas chaves. 
//Por exemplo, se o argumento for { id: 1, nome: “astrodev” } deverá ser retornado [ id, astrodev ].
// 1. identificar as chaves do objeto recebido
// 1.1 pesquisa no google "generate object keys js"
// 1.2 encontramos o método Object.keys()

const geraChavesObjeto = (input) => {
    return Object.keys(input)
}

console.log(geraChavesObjeto({ id: 1, name: "astrodev" }))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 14
//Crie uma função que recebe dois números e retorna uma lista com os números entre o primeiro e 
//o segundo números recebidos, inclusivos. Por exemplo, o input 5 e 9 retorna [ 5, 6, 7, 8, 9 ]
const geraNumsEntre = (min, max) => {
    const result = []

    for (let i = min; i <= max; i++) {
        result.push(i)
    }

    return result
}

console.log(geraNumsEntre(5, 9))

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 15
//Aproveite a função anterior, mas agora a edite para somente retornar os números pares entre 
//o primeiro e o segundo números recebidos, exclusivos. Por exemplo, o input 4 e 12 retorna [ 6, 8, 10 ]
const geraNumsParesEntre = (min, max) => {
    const result = []

    for (let i = min + 1; i < max; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }

    return result
}

console.log(geraNumsParesEntre(4, 12))

////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 16
//A barata é um dos insetos mais rápidos. Escreva uma função que recebe sua velocidade 
//em quilômetros por hora e retorna sua conversão para centímetros por segundo, arredondada para baixo. 
//Exemplo: a entrada 1.08 gera a saída 30.
const convertkmhToCms = (kmh: number): number => {
    const cm = kmh * 100000
    const seg = kmh * 3600
    const cms = cm / seg

    return Math.floor(cms)
}

console.log(convertkmhToCms(1.08)) // retorna 30

////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 17
//Escreva uma função que converte um nome para suas iniciais. O nome deve possuir duas palavras com 
//um espaço entre ambas. A saída deve ser duas letras em maiúsculo separadas por um ponto. 
//Exemplo: entrada “Luan Santana” gera a saída “L.S”.
const abbreviateName = (name: string): string => {
    // "Luan Santana" se torna ["Luan", "Santana"]
    const words = name.split(" ")

    // ["Luan", "Santana"] se torna ["L", "S"]
    const letters = words.map(word => word[0])

    // "L.S"
    return letters.join(".")
}

console.log(abbreviateName("Luan Santana"))

///////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 18
//Escreva uma função que recebe um array de números inteiros positivos e retorna a soma total 
//de seus elementos pares. Exemplo: a entrada [1, 2, 3, 4, 5, 6] gera a saída 12.
const somaPares = (numeros: number[]): number => {
    // inicializa o contador
		let soma = 0

		// itera o array parâmetro
    for (let numero of numeros) {
				// identifica se o item é par
        if (numero % 2 === 0) {
						// instrução abreviada de soma
            soma += numero
        }
    }

    return soma
}

console.log(somaPares([1, 2, 3, 4, 5, 6]))

//////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 19
//Escreva uma função que recebe uma palavra e retorna o número de anagramas possíveis de 
//se gerar sem contar ela mesma. Exemplo: a entrada “banana” gera a saída 719.
const calculaAnagramas = (palavra: string): number => {
    // inicializa o resultado
		let resultado = 1

		// itera de trás pra frente o parâmetro
    for (let i = palavra.length; i > 0; i--){
				// instrução abreviada de multiplicação
        resultado *= i
    }

		// retorno subtraído de -1 para não contar a mesma palavra
    return resultado - 1
}

console.log(calculaAnagramas("banana"))

///////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 20
//Escreva uma função que receba uma palavra em string e retorne o número de vogais que a palavra possui. 
//O programa também deve ser case-insensitive. Exemplo: a entrada “ASTROdev” gera a saída 3.
const countVowels = (word: string): number => {
    // regex de vogais case insensitive
    const vowelsRegex = /[aeiou]/gi

    // checagem de regex retorna um array com as matches
    // inicializamos como array vazio se não achar nenhum match
    const vowels = word.match(vowelsRegex) || []

    // o número de vogais encontradas é o tamanho do array
    return vowels.length
}

console.log(countVowels("ASTROdev"))

// outra resposta mais simples seria com um switch case

////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 21
//Escreva uma função que retorne os caracteres do meio de uma palavra recebida. 
//Se for par retorne as duas letras do meio e caso ímpar somente uma. 
//Exemplo: a entrada “carro” gera a saída “r” e a entrada “código” gera a saída “di”.
const pickCenter = (word: string): string => {
    // posição do meio arredondada para baixo
    const middle = Math.floor(word.length / 2)

		// verificação de par ou ímpar via módulo
    if (word.length % 2 === 0) {
        // slice pega parte de uma string (início, fim não incluso)
        return word.slice(middle - 1, middle + 1)
    } else {
        // charAt pega o caractere de uma posição (position)
        return word.charAt(middle)
    }

}

console.log(pickCenter("carro"))
console.log(pickCenter("código"))

//////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 22
//Escreva uma função que simula uma escolha do jogo “pedra, papel e tesoura”. 
//Ao chamá-la deve ser retornado aleatoriamente uma string com um desses valores.
enum JOGADA {
    PEDRA = "pedra",
    PAPEL = "papel",
    TESOURA = "tesoura"
}

const escolhePedraPapelTesoura = (): JOGADA => {
    // gera número aleatório 1, 2 ou 3
    const random = Math.floor((Math.random() * 3) + 1)
    switch (random) {
        case 1:
            return JOGADA.PAPEL
        case 2:
            return JOGADA.PEDRA
        default:
            return JOGADA.TESOURA
    }
}

console.log(escolhePedraPapelTesoura())

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 23
//Escreva uma função que utiliza o exercício anterior como um callback. 
//Essa nova função deve receber uma jogada sua em string e o callback irá gerar a jogada do computador. 
//O retorno deve ser uma frase do resultado.
enum JOGADA {
    PEDRA = "pedra",
    PAPEL = "papel",
    TESOURA = "tesoura"
}

const escolhePedraPapelTesoura = (): JOGADA => {
    // gera número aleatório 1, 2 ou 3
    const random = Math.floor((Math.random() * 3) + 1)
    switch (random) {
        case 1:
            return JOGADA.PAPEL
        case 2:
            return JOGADA.PEDRA
        default:
            return JOGADA.TESOURA
    }
}

const jogar = (jogador: JOGADA, cb: () => JOGADA): string => {
    const computador = cb()

    const jogadorVenceu = `Jogador escolheu ${jogador} e computador ${computador}. Jogador venceu!`
    const jogadorPerdeu = `Jogador escolheu ${jogador} e computador ${computador}. Jogador perdeu!`
    const empate = `Jogador escolheu ${jogador} e computador ${computador}. Empate!`

    if (jogador === computador) {
        return empate
    
    } else if (jogador === JOGADA.PAPEL) {
        return computador === JOGADA.PEDRA ? jogadorVenceu : jogadorPerdeu

    } else if (jogador === JOGADA.PEDRA) {
        return computador === JOGADA.TESOURA ? jogadorVenceu : jogadorPerdeu

    } else {
        return computador === JOGADA.PAPEL ? jogadorVenceu : jogadorPerdeu
    }
}

console.log(jogar(JOGADA.PAPEL, escolhePedraPapelTesoura))

//////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 24
//Escreva uma função que recebe uma string, limpa os espaços em branco e retorna um array de strings 
//com cada item possuindo no máximo 3 caracteres. 
//Exemplo: a entrada “astrodev” gera a saída [”ast”, “rod”, “ev”].
// Resolução com métodos nativos de string e array
const separateString = (text: string): string[] => {
    const cleanText = text
        .trim()
        .split(" ")
        .join("")

    const result = []

    for (let i = 0; i < cleanText.length; i += 3) {
        result.push(cleanText.substring(i, i + 3));
    }

    return result
}

console.log(separateString("astrodev"))

// Resolução com regex
const separateStringRegex = (text: string): string[] => {
    const cleanText = text
        .trim()
        .split(" ")
        .join("")

    const result = cleanText.match(/.{1,3}/g)

    return result as string[]
}

console.log(separateStringRegex("astrodev"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 25
//Escreva uma função que recebe um número natural inteiro e retorna um booleano indicando se ele é primo ou não. 
//Exemplo: a entrada 13 gera a saída true, enquanto a entrada 12 gera a saída false.
const checkIfPrime = (n: number): boolean => {
    if (n <= 1) {
      return false
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
  
    return true
  }
  
  console.clear()
  console.log(checkIfPrime(11))
  console.log(checkIfPrime(12))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 26
//Escreva uma função que recebe um objeto e retorna outro objeto, porém com os nomes das chaves 
//e valores trocados de lugar. Exemplo: a entrada { astrodev: “name” } gera a saída { name: “astrodev” }.
interface IObjectLiteral {
    [key: string]: any
  }
  
  const swapKeyValue = (input: IObjectLiteral): IObjectLiteral => {
    const result: IObjectLiteral = {}
  
    for (let key in input) {
      result[input[key]] = key
    }
  
    return result
  }
  
  console.clear()
  console.log(swapKeyValue({
    astrodev: "name",
    "astrodev@gmail.com": "email"
  }))

//////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 27
//Escreva uma função que recebe um ano de início e um ano de fim e imprime no console todas 
//as sextas-feiras 13 entre o período. Exemplo: a entrada 2021, 2022 gera dois console.logs, 
//13 de agosto 2021 e 13 de maio de 2022.
function generate13th(startYear: number, endYear: number): void {
    if(!startYear || !endYear){
      throw new Error(`Please insert the necessary parameters.`)
    }
    if(endYear <= startYear) {
      throw new Error(`Please insert valid parameters, the second parameter must be greater than first.`)
    }
  
    for (let year = startYear; year <= endYear; year++) {
      for (let month = 0; month < 11; month++) {
        let simuteDate = new Date(year, month, 13);
        if (simuteDate.getDay() === 5) {
          let monthArray = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
          console.log(`There is a Friday 13th in: ${monthArray[month]}, ${year}`);
        }
      }
    }
  }
  
  console.clear()
  generate13th(2021,2022)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 28
//Escreva uma função que recebe uma lista de números e retorna o segundo maior número. 
//Não utilize métodos nativos de array como o sort. Exemplo: a entrada [12, 7, 33, 9] gera a saída 12.
const findSecondLargest = (numbers: number[]): number => {
    if (numbers.length === 0) {
      throw new Error("Array vazio")
    }
  
    if (numbers.length === 1) {
      throw new Error("Array com apenas um número")
    }
  
    let largest = numbers[0]
    let secondLargest = numbers[0]
  
    for (let num of numbers) {
      if (num > largest) {
        secondLargest = largest
        largest = num
      } else if (num > secondLargest) {
        secondLargest = num
      }
    }
  
    return secondLargest
  }
  
  console.clear()
  console.log(findSecondLargest([12, 7, 33, 9]))

///////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 29
//Escreva uma função que recebe um número natural e retorna o cálculo de seu fatorial. 
//Exemplo: a entrada 5 gera a saída 120.
const factorial = (n: number): number => {
    let result = 1
  
    if (n <= 1) return 1
  
    for (let i = 2; i <= n; i++) {
      result *= i
    }
  
    return result
  }
  
  console.log(factorial(5))

///////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 30
//Escreva uma função que recebe um número natural e retorna a soma total de todos os números 
//anteriores a ele até 0, inclusivo. Exemplo: a entrada 10 gera a saída 55.
const sum = (n: number): number => {
    if (n === 0) return 0

    let result = 0

    for (let i = 1; i <= n; i++) {
      result += i
    }

    return result
}

console.log(sum(10))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 31
//Escreva uma função recursiva que recebe um número natural e imprime no console a contagem regressiva até 0. 
//Exemplo: a entrada 5 gera seis console.logs, do 5 até o 0.
const countDown = (n: number): void => {
    if (n < 0) return

    console.log(n)

    return countDown(n - 1)
}

console.clear()
countDown(5)

///////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 32
//Refatore a função anterior para que os consoles sejam disparados em intervalos de 1 segundo.
const countDown = (n: number): any => {
    if (n < 0) return

    console.log(n)

    return setTimeout(() => countDown(n - 1), 1000)
}

console.clear()
countDown(5)

////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 33
//Escreva uma função que recebe um timestamp em milisegundos e retorna uma string de data no formato 
//“dd/mm/aaaa” no fuso horário de Brasília (GMT-03:00). Exemplo: a entrada 1662519600000 gera a saída 
//“07/09/2022”.
const generateDate = (timestamp: number): string => {
    // sempre que for manipular datas no JS é necessário instanciar um Date
    // o construtor do Date consegue receber timestamp em milisegundos
    // ele também consegue receber string no formato "aaaa/mm/dd"
const date = new Date(timestamp)
    
    // métodos toLocale convertem a saída para o padrão do ambiente nativo
    // estamos usando pt-br então o fuso horário padrão se torna GMT-03:00
return date.toLocaleDateString()
}

console.log(generateDate(1662519600000))

///////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 34
//Escreva uma função que fica “escutando” o teclado do usuário dando console.logs de cada tecla. 
//Dica: pesquise sobre o método addEventListener.
// criamos essa função para ser o callback do eventListener (será necessário no ex3)
const keylog = (event: any) => {
    const name = event.key
    console.log(name)
}

// addEventListener dispara um callback (segundo argumento) baseado em um gatilho
// o gatilho é uma string pré-definida e fica no primeiro argumento
// esse eventListener fica ativo para sempre até ser desligado/recarregar a página
document.addEventListener('keypress', keylog)

console.clear()

////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 35
//Refatore a função anterior para que o programe se encerre caso a tecla digitada seja o número “0”. 
//Dica: pesquise sobre o método removeEventListener.
const keylog = (event: any) => {
    const name = event.key
    console.log(name)

		// o próprio callback encerra o eventListener se a tecla for "0"
    if (name === "0") {
				// os argumentos devem ser iguais para saber qual é o eventListener
        document.removeEventListener('keypress', keylog)
    }
}

document.addEventListener('keypress', keylog)

console.clear()

///////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 36
//Escreva uma função que recebe uma lista de strings e números, e retorna uma lista somente com os 
//itens numéricos. Utilize o laço for tradicional. Exemplo: a entrada [”a”, 1, “b”, 2, “c”, 3] 
//gera a saída [1, 2, 3].
const filterStrings = (list: Array<string | number>): number[] => {
    const result: number[] = []
    
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === "number") {
            result.push(list[i] as number)
        }
    }

    return result
}

console.log(filterStrings(["a", 1, "b", 2, "c", 3]))

///////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 37
//Escreva uma função que recebe um número natural e retorna o mesmo, porém sem zeros. 
//Exemplo: a entrada 1020 gera a saída 12. 
const removeZeros = (n: number): number => {
    const str = n.toString()
    const strWithoutZeros = str.replace(/0/g, '')
    
    return Number(strWithoutZeros)
}

console.log(removeZeros(1020))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 38
//Escreva uma função recursiva que recebe uma lista de numbers e retorna a soma dos itens positivos.
//Exemplo: a entrada [5, -2, 7, -10, 3] gera a saída 15.
const sumPositiveNums = (list: number[], result: number = 0): number => {
    if (list.length === 0) return result

    const item = list.pop() as number

    if (item > 0) {
        result += item
    }

    return sumPositiveNums(list, result)
}

console.clear()
console.log(sumPositiveNums([5, -2, 7, -10, 3]))

//////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 39
//Escreva uma função que recebe uma matriz numérica e um número, 
//e retorna uma matriz resultante da soma com o número.
const sumNumToMatrix = (
    matrix: number[][],
    n: number
): number[][]=> {
    const result: number[][] = [...matrix]

    for (let l = 0; l < matrix.length; l++) {
        for (let c = 0; c < matrix[l].length; c++) {
            result[l][c] += n
        }
    }

    return result
}

const initialMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.clear()
console.log(sumNumToMatrix(initialMatrix, 100))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 40
//Escreva uma função que recebe duas matrizes numéricas de mesma ordem e retorna a matriz resultante da soma 
//entre as duas.
const sumMatrices = (
    firstMatrix: number[][],
    secondMatrix: number[][],
): number[][]=> {
    const result: number[][] = [...firstMatrix]

    for (let l = 0; l < firstMatrix.length; l++) {
        for (let c = 0; c < firstMatrix[l].length; c++) {
            result[l][c] += secondMatrix[l][c]
        }
    }

    return result
}

const matrixA = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

const matrixB= [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.clear()
console.log(sumMatrices(matrixA, matrixB))

////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 41
//Escreva uma função que recebe uma matriz de ordem 2 e retorna sua determinante.
const calcDeterminant = (matrix: number[][]): number => {
    const mainDiagonal = matrix[0][0] * matrix[1][1]
    const secondDiagonal = matrix[0][1] * matrix[1][0]

    return mainDiagonal - secondDiagonal
}

const matrixA = [
    [1, 5],
    [2, 3]
]

console.clear()
console.log(calcDeterminant(matrixA))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 42
//Escreva uma função que recebe um array de números naturais. Todos os números do array aparecem 2 vezes, 
//com exceção de um. Encontre-o e o retorne. Exemplo: a entrada [4, 1, 2, 2, 1] gera a saída 4.
const findSolitaryNum = (arr: number[]): number | void => {
    const orderedArr = arr.sort()

    for (let i = 0; i < orderedArr.length; i += 2) {
        if (orderedArr[i] !== orderedArr[i + 1]) {
            return orderedArr[i]
        }
    }
}

console.clear()
console.log(findSolitaryNum([4, 1, 2, 2, 1]))
console.log(findSolitaryNum([2, 2, 1]))

///////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 43
//Refatore o exercício anterior para que o algoritmo tenha uma complexidade de tempo O(n). 
//Ou seja, que sua implementação contenha apenas uma única iteração do array.
const findSolitaryNum = (arr: number[]): number => {
    const obj: Record<string, any> = {}
    let result = 0

    for (let n of arr) {
        if (obj[n]) {
            result -= n
        } else {
            obj[n] = true
            result += n
        }
    }

    return result
}

console.clear()
console.log(findSolitaryNum([4, 1, 2, 2, 1]))
console.log(findSolitaryNum([2, 2, 1]))

/////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 44
//Escreva uma função que retorna a data atual de São Paulo no formato dd/mm/aaaa hh:mm:ss.
const getDate = (): string => {
    const date = new Date()

    return date.toLocaleString()
}

console.clear()
console.log(getDate())

////////////////////////////////////////////////////////////////////////////////////////////////////

//CHALLENGE 45
//Escreva uma função que retorna a data atual de São Paulo, Nova Iorque, Paris ou Tóquio no 
//formato dd/mm/aaaa hh:mm:ss. A cidade deve ser selecionada via parâmetro.
enum TIMEZONE {
    NEW_YORK = "America/New_York",
    TOKYO = "Asia/Tokyo",
    SAO_PAULO = "America/Sao_Paulo",
    PARIS = "Europe/Paris"
}

const getDate = (timezone: TIMEZONE): string => {
    const date = new Date()

    return date.toLocaleString("pt-br", {
        timeZone: timezone
    })
}

console.clear()
console.log(getDate(TIMEZONE.SAO_PAULO))
console.log(getDate(TIMEZONE.NEW_YORK))
console.log(getDate(TIMEZONE.PARIS))
console.log(getDate(TIMEZONE.TOKYO))
