let data = [9, 2, 3, 4, 5, 6, 7, 8, 9, 9, 6, 8, 6];

let dataFiltrada = [];

let rangoInicial = 3;
let rangoFinal = 6;



function filtrarData(i, f) {

for ( d of data) {
    if ((d >= i) && (d<= f)){
        console.log(d) // imprimimos los elementos de array
        dataFiltrada.push(d)
    }
}

}

filtrarData(rangoInicial,rangoFinal)

console.log(`Data filtrada: ${dataFiltrada}` )
console.log(data.length)


function graficarSvg(){
    let w = 500;
    let h = 300;

    let svg = d3.select('body')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

    svg.selectAll('rect')
        .data(dataFiltrada)
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('width', 20)
        .attr('height', 10)
        .attr("fill", function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
})

    .attr('x', (d, i)=>{
        return i * 21 + 30 // Ancho de las barras de 20 mas 1 espacio
    })
    .attr('height', (d)=>{
        return d 
    })
    .attr('y', (d)=>{
        return h - d; // Altura menos el alto
    })

    svg.selectAll('text')
        .data(dataFiltrada)
        .enter()
        .append('text')
        .text((d)=>{
            return d
        })
    .attr('x', (d, i)=>{
        return i * 21 + 40
    })
    .attr('y', (d)=>{
        return h-d -3
    })
}

