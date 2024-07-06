import Button from "./Button"
import Greeting from "./Greeting"
import Heading from "./Heading"
import Input from "./Input"
import { Person } from "./Person"
import PersonList from "./PersonList"
import State from "./State"
import Title from "./Title"


const App = () => {
const personName ={
  first:"Yan",
  last:"Naing"
}
const nameList =[
  {first:"Yan",
    last:"Naing"
  },
  {first:"Tyler",
    last:"Nathan"
  }
]
  return (
    <div>
<Greeting name="Yan" messageCount={10}/>
<Person name={personName}/>
<PersonList names={nameList}/>
<Heading>
  Hello Hello
</Heading>
<Title>
  <Heading>
    Title is "YAN"
  </Heading>
</Title>
<Button handleClick={(event,id)=>{console.log("button clicked!",event,id);}}/>
  <Input value="" handleChange={(event)=>{console.log(event.target.value);}}/>
  <State/>
    </div>
  )
}

export default App