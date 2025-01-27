import "./Button.css";
const Button = ({onClick}: {onClick:() => void}) => {
    const Hendleclick = () => {
         onClick()
    }
    return(
      <button className="button" onClick={Hendleclick}>Избранное</button>            
    )
    
}

export default Button;