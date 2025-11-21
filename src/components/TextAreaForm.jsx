import Textbox from "./Textbox";

export default function TextAreaForm(props) {
  return (
    <form id={props.formID} onSubmit={props.submitCallback}>
      <Textbox
        name={props.textAreaName}
        id={props.textAreaID}
        placeholder={props.textAreaExample}
        value={props.textAreaValue}
        callback={props.changeCallback}
      />
      <br />
      <button type="submit" disabled={!props.buttonCondition(props.textAreaValue)}>Convert</button>
    </form>
  );
}
