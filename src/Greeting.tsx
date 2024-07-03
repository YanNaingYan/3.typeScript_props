

type nameProps = {
name:string
}

const Greeting = (props: nameProps) => {
  return (
    <div>Hello, I'm {props.name}.</div>
  )
}

export default Greeting