// Ira trasformar letra minuscula em maiuscula

// exemplo => Exemplo

const CapitalizeFirstLetter = string => {

    return string[0].toUpperCase()+string.slice(1)
}
//slice pega um pedaço do array
//toUpperCase vai colocar nesse caso a primeira letra maiuscula
export default CapitalizeFirstLetter;