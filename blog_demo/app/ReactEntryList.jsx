define([], () => {
  const Entry = ({entry}) => (
    <li onClick={entry.onClick}>
      {entry.title}
    </li>
  );

  return (props) => (
    <div>
      <h1>Dojo + React version</h1>
      <p>Click to display alert</p>
      <ul>
        {props.entries.map((entry, i) => (
          <Entry entry={entry} key={i}/>
        ))}
      </ul>
      <h2>Files list:</h2>
      <ul>
        <li><a href="app/main.jsx" target="_blank">app/main.jsx</a></li>
        <li><a href="app/ReactEntryList.jsx" target="_blank">app/ReactEntryList.jsx</a></li>
      </ul>
    </div>
  );
});