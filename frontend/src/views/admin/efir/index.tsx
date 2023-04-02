import React, { useState } from 'react'
import Form1 from './components/Form1'
import Stepper from './components/Stepper'


// import crypto from 'crypto';
import EFIR from '../../../ethereum/build/contracts/EFIR.json';
import { ContractFactory, ethers } from "ethers";
type Props = {}


const EFirFilling = (props: Props) => {
  // async function deployContract() {
  //   const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  //   // const privateKey = crypto.randomBytes(32).toString('hex');
  //   // console.log(privateKey);
  //   const privateKey = "0x5b6f9d6f44e6e79a2d2e7baab77e45283841a759233fff3e66d7d9c08ed15265"
  //   const wallet = new ethers.Wallet(privateKey, provider);
    
  //   const contractFactory = new ethers.ContractFactory(EFIR.abi, EFIR.bytecode, wallet);
  //   const contract = await contractFactory.deploy('0x1d50e470d63e11C1e6B6030C512633860a93a5F2');
  //   await contract.deployed();
  
  //   console.log(`Contract deployed at address: ${contract.address}`);
  // }
  const [contractAddress, setContractAddress] = useState(null);

  async function deployContract() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(EFIR.abi, EFIR.bytecode, signer);
   
    const contract = await contractFactory.deploy('0x1d50e470d63e11C1e6B6030C512633860a93a5F2');
    
    await contract.deployed();
    console.log(`Contract deployed at address: ${contract.address}`)
    setContractAddress(contract.address);
    const deployedContract = new ethers.Contract('0x0F2396760537445e1b4421B59943eA4F21e34C71', EFIR.abi, signer);
    const response = await deployedContract.storeDocument('QmQdPcL5a5PSvc6xDEy6qq4o3SxFjXtGxJjohBuqxg4kRL',"Mumbai" ,'Bhavya Gor','Tanya Mistry');
    console.log(response);
    const retrieveDocument = await deployedContract.retrieveDocument(0);
    console.log(retrieveDocument);
  }
  return (
    <div className='h-[100vh]'>
        {/* Stepper component*/}
        <div className='mt-3 flex items-center justify-center'>        
        
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={deployContract} >
          Deploy Contract
        </button>
        </div>

    </div>
  )
}

export default EFirFilling