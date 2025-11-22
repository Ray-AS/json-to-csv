export default function FileInput(props) {
  function fileClick() {
    document.getElementById(props.inputID).click();
  }

  return (
    <div>
      <button type="button" className="file-button" onClick={() => fileClick()}>
        {props.buttonText}
      </button>
      <input className="file-input" id={props.inputID} type="file" />
    </div>
  );
}
