import Greeting from "./Greeting"
import Heading from "./Heading"
import { Person } from "./Person"
import PersonList from "./PersonList"
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
    </div>
  )
}

export default App