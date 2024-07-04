

type nameProps = {
name:string,
messageCount?:number
}

const Greeting = (props: nameProps) => {
  const {messageCount=0} = props
  return (
    <div>
        <h2>Welcome {props.name}. You have {messageCount} unread messages.</h2>
    </div>
  )
}

export default Greeting