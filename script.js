function calcular() {

    let a = parseFloat(document.getElementById('numeroa').value)
    let b = parseFloat(document.getElementById('numerob').value)
    let c = parseFloat(document.getElementById('numeroc').value)

    if (a == 0) {
        document.getElementById('resultado').textContent = 'Não é função de segundo grau';
        return;
    }

    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        document.getElementById('resultado').textContent = 'Não tem raiz';
        return;
    }

    if (delta == 0) {

        let bhaskara = -b / (2 * a);
        document.getElementById('resultado').textContent = 'A única raiz vale: ' + bhaskara;
        return;
    }
    let x1 = (-b + math.sqrt(delta)) / (2*a);
    let x2 = (-b - math.sqrt(delta)) / (2*a);

    document.getElementById('resultado').textContent =
    'x1 vale: ' + x1 + 'e x2 vale: ' + x2;
}