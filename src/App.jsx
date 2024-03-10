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
          <div class="grid-item hero-text">
            <h1>The Joe Zone</h1>
          </div>
          <div> </div>
        </div>

      </div>
    </>
  )
}

export default App
