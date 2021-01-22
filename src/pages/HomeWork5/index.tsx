import React from 'react'

function averageConsumption() {
  const liters = 10
  const km = 30

  return km/liters
}

type RoomSizeProps = {
  width: string
  length: string
}

function socialDistanceCalculation({width, length}:RoomSizeProps) {
  return Math.floor((+width * +length)/2.25)
}

type TrapezioProps = {
  major: string
  minor: string
  height: string
}

function areaTrapezio(divider: number, {major, minor, height}: TrapezioProps) {
  return ((Number(major+minor))*+height)/divider
}

type TriangleProps = {
  lado1: string
  lado2: string
  lado3: string
}

function triangleType({lado1, lado2, lado3}: TriangleProps) {
  if(+lado1 === +lado2 && +lado2 === +lado3)
    return 'equilátero'
  else if((+lado1 === +lado2 || +lado2 === +lado3 || +lado1 === +lado3) && (+lado1 !== +lado2 || +lado2 !== +lado3 || +lado1 !== +lado3))
    return 'isósceles'
  return 'escaleno'
}

//@ts-ignore
function fibonacci(n) {
  const numbers = Array.from(Array(n).keys()).map((number) => {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= number + 1 ; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
  })

  return numbers
};

const HomeWork5 = () => {
  const [roomSize, setRoomSize] = React.useState<RoomSizeProps>({ width: '', length: ''})
  const [trapezio, setTrapezio] = React.useState<TrapezioProps>({ major: '', minor: '', height: ''})
  const [triangle, setTriangle] = React.useState<TriangleProps>({ lado1: '', lado2: '', lado3: ''})
  const [fibonacciNumber, setFibonacciNumber] = React.useState(0)

  const handleRoomSizeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setRoomSize( prev => ({...prev, [name]: +value}))
  }

  const handleTrapezioInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setTrapezio( prev => ({...prev, [name]: +value}))
  }

  const handleTriangleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setTriangle( prev => ({...prev, [name]: +value}))
  }

  const handleFibonacciInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget
    setFibonacciNumber(+value)
  }

  return(
    <>
      <h1>1 - Cálculo de consumo médio de combustível: {averageConsumption()} km/l. (10 litros e 30 km)</h1>
      <h1>2 - Quantas pessoas podem ter dentro de uma sala com largura <input type="number" name="width" placeholder="Largura da sala" onChange={handleRoomSizeInputs} value={roomSize.width} /> e comprimento <input type="number" name="length" placeholder="Comprimento da sala" onChange={handleRoomSizeInputs} value={roomSize.length} />: {socialDistanceCalculation(roomSize)}</h1>
      <h1>3 - base maior <input type="number" name="major" placeholder="Base maior" onChange={handleTrapezioInputs} value={trapezio.major} />, base menor <input type="number" name="minor" placeholder="Base menor" onChange={handleTrapezioInputs} value={trapezio.minor} /> e altura <input type="number" name="height" placeholder="Altura" onChange={handleTrapezioInputs} value={trapezio.height} />: Área trapézio: {areaTrapezio(2, trapezio)}<br/> Volume pirâmide: {areaTrapezio(3, trapezio)}</h1>
      <h1>4 - lado1 <input type="number" name="lado1" placeholder="Lado 1" onChange={handleTriangleInputs} value={triangle.lado1} />, lado2 <input type="number" name="lado2" placeholder="Lado 2" onChange={handleTriangleInputs} value={triangle.lado2} /> e lado3 <input type="number" name="lado3" placeholder="Lado 3" onChange={handleTriangleInputs} value={triangle.lado3} />: {triangleType(triangle)}</h1>
      <h1>5 - Insira o número estático para cácluo da sequência de Fibonacci  <input type="number" placeholder="Número" onChange={handleFibonacciInputs} />: {fibonacci(fibonacciNumber).join(' ')}</h1>
    </>
  )
}

export default HomeWork5