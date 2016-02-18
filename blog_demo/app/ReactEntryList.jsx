define([], () => {
  const Entry = ({entry}) => (
    <li onClick={entry.onClick}>
      {entry.title}
    </li>
  );

  return (props) => (
    <div>
      <h1>Dojo + React version</h1>
      <ul>
        {props.entries.map((entry, i) => (
          <Entry entry={entry} key={i}/>
        ))}
      </ul>
    </div>
  );
});