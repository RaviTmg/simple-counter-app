
function HistoryItem ({ count }) {
    return (
        <li>
            { count }
        </li>
    );
}

export default function History ({ history }) {
    if (!history.length) {
        return <></>
    }
    return (
        <div>
          <h1>History</h1>
          <ul>
            {history.map((c) => {
              return <HistoryItem count={c}/>;
            })}
          </ul>
        </div>
    );
}
