const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
      parts.map(part => 
        <Part key={part.name} part={part} />
      )
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [

    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },

  ]

  return (
    <div>
      <Header course={course}/>
      <Content
        parts={parts}
      />
      <Total exercises={parts.map(part => part.exercises).reduce((previousValue, currentValue) => previousValue + currentValue, 0)} />
    </div>
  )
}

export default App