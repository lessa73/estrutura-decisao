function btn001() {
    var text001;
    var ddd001 = input001.value;
    switch (ddd001) {
        case '61':
            text001 = 'Brasília';
            break;
        case '71':
            text001 = 'Salvador';
            break;
        case '31':
            text001 = 'Belo Horizonte';
            break;
        case '27':
            text001 = 'Vitoria';
            break;
        case '32':
            text001 = 'Juiz de Fora';
            break;
        case '19':
            text001 = 'Campinas';
            break;
        case '21':
            text001 = 'Rio de Janeiro';
            break;
        default:
            text001 = 'Cidade não cadastrada';
    }
    document.getElementById('msg001').innerHTML = text001;

}