let datos = [70, 2, 9, 5, 7, 9, 11, 14, 18, 22, 70];

// funcion linear   escala linear // sera importante para que la escala de valores se sostenga
let x = d3
    .scaleLinear()
    .domain([0, d3.max(datos)]) // dominio, en un arreay almacenamos los datos para trabajar, cual el es inicio y le pedimoa a d3 el maximo valor del data a trabajar
    .range([0, 500]); // rango, el anchi visual de cada una de las columnas que estoy mostrando ejm de o a 5oo px

function graficar() {
    d3.select(".barras")
        .selectAll("div")
        .data(datos)
        .enter()
        .append("div")
        .style("width", (d) => {
            return x(d) + "px";
        })
        .text((d) => {
            return d;
        });

    d3.selectAll(".container") // por que no se ejecuta fuera de una funcion y en cambio en un scrit de html si
        .selectAll("div")
        .style("color", "red");

    let svg = d3.select('body') // graficas con svg 
        .append('svg')
        .style('width', '1200')
        .style('height', '300')
    let circulo = svg.selectAll('circle')
        .data(datos)
        .enter().append('circle')
    circulo.attr('cx', (d, i) => {
            return (i * 80) + 25;
        })
        .attr("cy", 300 / 2)
        .attr("r", (d) => {
            return d
        })

  
}

function graficarSvg(){
    let w = 500;
    let h = 300;

    let svg = d3.select('body')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

    svg.selectAll('rect')
        .data(datos)
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('width', 20)
        .attr('height', 100)

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
        .data(datos)
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

// function graficar() {  // se ejecuta la funcion pero la primera no??
//     d3.select('.container')
//     .selectAll('div')
//     .style('color', 'red');
// }

function seleccionarBloque() {
    d3.select(".container__two")
        .selectAll("div")
        .style("color", "blue")
        .style("background-color", "rgb(75, 226, 62)");
}

function crearGraficar() {
    d3.select(".grafica")
        .selectAll("div")
        .data(datos)
        .enter()
        .append("div")
        .text((d) => {
            // Podemos crear condicionales
            if (d == 1) {
                return `Rafael tiene ${d} balon`;
            } else {
                return `Rafael tiene ${d} balones`;
            }
        })
        .style("background-color", "rgb(75, 226, 62)") // creamos los estilos en .css y los asignamos creando un atributo
        .style("color", "white")
        .style("padding", "5px")
        .style("margin", "5px")
        .style("text-align", "right");
}

function graficaPrueba() {
    d3.select(".miGrafica")
        .selectAll("div")
        .data(datos)
        .enter()
        .append("div")
        .attr("class", "miGrafica_prueba")
        .style("height", (d) => {
            // aplicamos style cuando representamos datos como en este caso
            return d * 5 + "px";
        });
}


