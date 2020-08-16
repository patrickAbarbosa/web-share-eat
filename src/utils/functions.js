export const query = (props) => {
  try {
    var query = props.search.slice(1)
    var partes = query.split('&')
    var data = {}
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=')
        var chave = chaveValor[0]
        var valor = chaveValor[1]
        data[chave] = valor
    });

    return data
  } catch (e) {
    return null
  }
};