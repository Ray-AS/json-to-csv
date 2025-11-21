import Textbox from "./Textbox";

export default function TextAreaForm(props) {
  return (
    <form id={props.formID} onSubmit={props.callback}>
      <Textbox
        name={props.textAreaName}
        id={props.textAreaID}
        placeholder={props.textAreaExample}
      />
      <br />
      <button type="submit">Convert</button>
    </form>
  );
}
