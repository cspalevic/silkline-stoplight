import "./App.css";

function App() {
  return (
    <main className="scene">
      <div className="sky" aria-hidden="true">
        <div className="cloud cloud-1">
          <span />
        </div>
        <div className="cloud cloud-2">
          <span />
        </div>
        <div className="cloud cloud-3">
          <span />
        </div>
      </div>

      <div className="ground" aria-hidden="true" />

      <svg
        className="road"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        role="img"
        aria-label="A road stretching to the horizon"
      >
        <defs>
          <linearGradient id="asphalt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5d0da" />
            <stop offset="14%" stopColor="#7d8794" />
            <stop offset="100%" stopColor="#3a4048" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="22%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f4f4f4" />
          </linearGradient>
          <linearGradient id="center" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe56a" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#f5d34a" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e2b423" />
          </linearGradient>
        </defs>

        <polygon points="100,500 490,0 510,0 900,500" fill="url(#asphalt)" />
        <polygon points="490,0 492,0 118,500 100,500" fill="url(#edge)" />
        <polygon points="508,0 510,0 900,500 882,500" fill="url(#edge)" />

        <polygon points="497.1,24 502.9,24 503.7,48 496.3,48" fill="url(#center)" />
        <polygon points="495.1,80 504.9,80 506.3,120 493.7,120" fill="url(#center)" />
        <polygon points="492.1,165 507.9,165 510.1,225 489.9,225" fill="url(#center)" />
        <polygon points="487.9,280 512.1,280 515.1,365 484.9,365" fill="url(#center)" />
        <polygon points="482.5,430 517.5,430 520,500 480,500" fill="url(#center)" />
      </svg>
    </main>
  );
}

export default App;
