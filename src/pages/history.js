
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
            {
              history.map((c) => { // if histody had [1,2,3]. value of c is 1 in first call, 2, 3
                return <HistoryItem/>;
              }) /// final result -> [ <li>1</li>, <li>2</li>, <li>3</li> ]
            } 
            {/* render result ->
              <li>1</li>
              <li>2</li>
              <li>3</li>
            */}
          </ul>
        </div>
    );
}
