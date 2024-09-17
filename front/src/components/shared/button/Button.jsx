import './button.css';

function Button(props) {
  return (
    <div>
      <button>{props.texto}</button>
    </div>
  );
}

export default Button;
