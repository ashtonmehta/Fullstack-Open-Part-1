const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}!</p>
      <p>You are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = '20'
  const friends = [
    {name: 'Maya', age: 20},
    {name: 'Ben', age: 19}
  ]

  return (
    <>
      <h1>Greetings!</h1>
      <Hello name={name} age={age} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </>
  )
}

export default App