import { useState } from 'react'

function useSlidesData() {
  const [slidesData, setSlidesData] = useState(null)
  fetch('/slides_data')
    .then((response) => response.json())
    .then((data) => console.log(data))

  return { slidesData, setSlidesData }
}

function App() {
  const slidesData = useSlidesData()
  console.log(slidesData)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
