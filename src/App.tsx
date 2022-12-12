import { useState } from 'react'
import openfortLogo from './assets/openfort.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleConnect = async () => {
    if(!window.ethereum) {
      alert("You need an Ethereum Wallet for this demo!")
    }
  }

  return (
    <div className="App">
      <div>
        
      <a href="http://www.superscrypt.xyz" target="_blank">
          <img src="http://www.superscrypt.xyz/wp-content/uploads/2022/05/Superscrypt-Logo-normal.png" className="logo" alt="ss logo" />
        </a>
        <a href="https://docs.openfort.xyz/docs/installation" target="_blank">
          <img src={openfortLogo} className="logo" alt="openfort logo" />
        </a>
      </div>
      <h1>Superscrypt Openfort Demo</h1>
      <div className="card">
        <button onClick={handleConnect}>
          Connect
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
