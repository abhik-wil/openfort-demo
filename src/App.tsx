import { useState } from 'react'
import openfortLogo from './assets/openfort.png'
import ssLogo from './assets/Superscrypt-Logo-normal.png'
import './App.css'

import Modal from 'react-modal';
import { ethers, Signer } from 'ethers';
import { SCWProvider } from '@openfort-sdk/scw';

Modal.setAppElement('#root')
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#242424',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
}

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [scwProvider, setScwProvider] = useState<SCWProvider>();

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleConnect = async () => {
    if (!window.ethereum) {
      alert('You need an Ethereum Wallet for this demo!')
    } else {
      openModal()
    }
  }

  const handleCreateWallet = async () => {
    const signer: Signer = new ethers.Wallet(privateKey);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const scwProvider: SCWProvider = await SCWProvider.getSCWForOwner(
      provider,
      signer
    );
    setScwProvider(scwProvider);
    console.log("SCW Provider Created", scwProvider);
    closeModal();
  }

  return (
    <div className="App">
      <div>
        <a href="http://www.superscrypt.xyz" target="_blank">
          <img
            src={ssLogo}
            className="logo"
            alt="ss logo"
          />
        </a>
        <a href="https://docs.openfort.xyz/docs/installation" target="_blank">
          <img src={openfortLogo} className="logo" alt="openfort logo" />
        </a>
      </div>
      <h1>Superscrypt Openfort Demo</h1>
      <div className="card">
        <button onClick={handleConnect}>Connect</button>
        <p>
          Connect to Get Started.
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="wallet-modal"
        style={customStyles}
      >
        <p>Please enter your wallet private key below:</p>
        <input type="text" onChange={(e) => setPrivateKey(e.target.value)}/>
        <div className='modal-footer'>
          <button onClick={closeModal} className="close-button">Cancel</button>
          <button onClick={handleCreateWallet}>Create Wallet</button>
        </div>
      </Modal>
    </div>
  )
}

export default App
