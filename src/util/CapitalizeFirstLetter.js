// Ira trasformar letra minuscula em maiuscula

// exemplo => Exemplo

const CapitalizeFirstLetter = string => {

    return string[0].toUpperCase()+string.slice(1)
}

export default CapitalizeFirstLetter;