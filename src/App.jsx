const person = {
  name:'Samuel Ndambuki',
  theme:{
    backgroundColor:'black',
    color:'pink'
  }
};

export default function TodoList(){
  return(
    <div style={person.theme}>
      <h1>{person.name}'s To dos</h1>
      <ul>
        <li>Improve videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol fueled egine</li>
      </ul>
    </div>
  )
}