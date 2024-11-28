import "./style.css";
export function REACTTODO() {
  return (
    <body>
      <div className="hero">
        <div className="circle-progress">
          <div className="outer">
            <div className="inner">
              <div id="number">0</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="80%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              style={{ strokeDashoffset: 470 }}
              id="circleProgress"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="title-text">
          MoonToDo app
          <div className="small-text">Keep it up!!!</div>
        </div>
      </div>

      <div className="input">
        <input
          id="input-bar"
          type="text"
          placeholder="Та хийх ажлаа оруулна уу?"
        />
        <span
          id="new-task-button"
          onClick="addTask()"
          className="material-symbols-outlined"
        >
          add
        </span>
      </div>
      <div id="content"></div>
      <div id="popUp">
        <div className="popUp-content">
          <img id="closeImg" src="picture/75519.png" alt="" />
          <div className="main-text">
            congratulations!!! you have finished all your tasks{" "}
          </div>
        </div>
      </div>
      <script src="toDo.js"></script>

      <div className="moon-container">
        <img className="moon" src="picture/11011122.png" alt="" />
        <img className="moon" src="picture/11011122.png" alt="" />
        <img className="moon" src="picture/11011122.png" alt="" />
        <img className="moon" src="picture/11011122.png" alt="" />
        <img className="moon" src="picture/11011122.png" alt="" />
      </div>
    </body>
  );
}
