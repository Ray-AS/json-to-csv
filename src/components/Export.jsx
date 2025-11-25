export default function Export(props) {
  const display = !props.buttonCondition(props.data) ? (
    <span>{props.exportText}</span>
  ) : (
    <a href={props.url} download={props.download}>
      {props.exportText}
    </a>
  );

  return (
    <button type="button" disabled={!props.buttonCondition(props.data)}>
      {display}
    </button>
  );
}
