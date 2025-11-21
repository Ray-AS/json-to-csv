export default function Textbox(props) {
  return (
    <textarea
      name={props.name}
      id={props.id}
      rows="10"
      cols="50"
      placeholder={props.placeholder}
      value={props.value === "" ? undefined : props.value}
      onChange={props.callback}
    ></textarea>
  );
}
