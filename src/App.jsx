import "./App.css";

const ArrayOperations = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sumOfNum = numbers.reduce((acc, curr) => {
    return acc = acc + curr;
  },0);
  const avgOfNum = numbers.reduce((acc, curr) => {
    return acc + curr / numbers.length;
  },0)
  const maxNum = Math.max(...numbers)
  const minNum = Math.min(...numbers)
  
  return (
    <>
      <h2>Array Operations</h2>
      <p>Sum: {sumOfNum}</p>
      <p>Average: {avgOfNum}</p>
      <p>Maximum: {maxNum}</p>
      <p>Minimum: {minNum}</p>
    </>
  );
};

const ObjectManipulation = () => {
  const person = {
    name: "Sarah",
    age: 28,
    city: "New York",
  };

  const updatePerson = {...person , age: 29} 

  return (
    <>
      <h2>Person Details</h2>
      <p>Name: {updatePerson.name}</p>
      <p>Age: {updatePerson.age}</p>
      <p>City: {updatePerson.city}</p>
    </>
  )
  
}

const SquareArea = () => {
  const sides = 5;
  const area = sides * sides;
  return (
    <>
      <h2>Area of Square</h2>
      <p>The area of square is: {area}</p>
    </>
  )
}

const CapitalizeString = () => {
  const word = 'hello world!'
  const capitalized = word.toUpperCase();
  return (
    <>
      <h2>Capitalize Text</h2>
      <p>{capitalized}</p>
    </>
  )
}

const CircleArea = () => {
  const radius = 8;
  const area = Math.PI * radius * radius
  return (
    <>
      <h2>Area of Circle</h2>
      <p>The area of circle is: {Math.round(area)}</p>
    </>
  )
}

export default function App() {
  return (
    <main>
      <ArrayOperations />
      <ObjectManipulation/>
      <SquareArea/>
      <CapitalizeString/>
      <CircleArea/>
    </main>
  );
}
