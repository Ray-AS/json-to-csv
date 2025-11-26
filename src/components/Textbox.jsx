export default function Textbox(props) {
  return (
    <textarea
      name={props.name}
      className="input-box"
      id={props.id}
      rows="16"
      cols="64"
      placeholder={props.placeholder}
      value={props.value === "" ? undefined : props.value}
      onChange={props.callback}
    ></textarea>
  );
}
