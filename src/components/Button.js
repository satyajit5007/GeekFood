import './Button.css'

function Button(props){

    function mouseOverEventHandler(e){
        console.log(e.target.style.backgroundColor)
        e.target.style.backgroundColor = props.hoverBackgroundColor;
        e.target.style.color = props.hoverColor;
        console.log(e.target.style.backgroundColor)
    }

    function mouseOutEventHandler(e){
        e.target.style.backgroundColor = props.backgroundColor;
        e.target.style.color = props.color;
    }
    return(
        <button style = {{
            borderRadius : props.borderRadius,
            padding : props.padding,
            backgroundColor : props.backgroundColor,
            color : props.color,
            border:`1px solid ${props.backgroundColor}`
        }} onMouseOver={mouseOverEventHandler} onMouseOut={mouseOutEventHandler}>{props.children}</button>
    )
}

export default Button;