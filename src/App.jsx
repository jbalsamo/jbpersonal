//import { createSignal } from 'solid-js'
import './App.css';
import logo from '/cpjoe.png';

function App() {
  return (
    <>
      <div class="hero">
        <div class="grid">
          <div class="grid-item">
            <img class="logo" src={logo} alt="Joe-Be-One" />
          </div>
          <div class="grid-item hero-text glitch-text">
            <h1>Data.stream/Joseph</h1>
          </div>
          <div> </div>
        </div>

      </div>
    </>
  )
}

export default App
