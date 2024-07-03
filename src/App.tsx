import Greeting from "./Greeting"
import { Person } from "./Person"
import PersonList from "./PersonList"

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
    </div>
  )
}

export default App