import React, { useContext, useState } from 'react'


// import crypto from 'crypto';
import EFIR from '../../../ethereum/build/contracts/EFIR.json';
import { ContractFactory, ethers } from "ethers";
import { UserContext } from 'providers/userContext';
import FIllFir from './components/FIllFir';
type Props = {}


const EFirFilling = (props: Props) => {
  const {firData,setfirData,handleInputChange} = useContext(UserContext)
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
    <div className='min-h-screen'>
        {/* Stepper component*/}
        
        <div className='flex mt-[2%]'>
        <div className='flex flex-col items-start w-full gap-y-3'>
        {
          firData.documentHash !== "" && <FIllFir/>
        }
        {firData.documentHash === "" && <div className='flex flex-col w-full gap-y-2'>
        <>
       <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
              Document Uploaded to IPFS successfully 
        </h1>
        <h1 className=" text-bold text-xl tracking-[1.5px] ">
        Here is the hash of your document: {firData.documentHash}
        </h1>
        </>
         <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={deployContract} >
          Deploy Contract
        </button>
        </div> }
        </div>
       
        </div>

    </div>
  )
}

export default EFirFilling