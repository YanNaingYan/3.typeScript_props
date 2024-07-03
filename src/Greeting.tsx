

type nameProps = {
name:string,
messageCount:number
}

const Greeting = (props: nameProps) => {
  return (
    <div>
        <h2>Welcome {props.name}. You have {props.messageCount} unread messages.</h2>
    </div>
  )
}

export default Greeting