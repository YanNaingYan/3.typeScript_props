type personNameProps={
    name:{
        first:string,
        last:string
    }
}
export const Person =(props:personNameProps)=>{
    return (
        <div>
            <h2>
              I'm  {props.name.first} {props.name.last}
            </h2>
        </div>
    )
}