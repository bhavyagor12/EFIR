import React, { useContext, useState } from 'react'


// import crypto from 'crypto';
import EFIR from '../../../ethereum/build/contracts/EFIR.json';
import { ContractFactory, ethers } from "ethers";
import { UserContext } from 'providers/userContext';
import FIllFir from './components/FIllFir';
type Props = {}


const EFirFilling = (props: Props) => {
  const {firData,setfirData,handleInputChange,currentAccount,contractAddress,setContractAddress} = useContext(UserContext)
  

  async function deployContract() {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(EFIR.abi, EFIR.bytecode, signer);
   
    const contract = await contractFactory.deploy(currentAccount);
    
    await contract.deployed();
    console.log(`Contract deployed at address: ${contract.address}`)
    setContractAddress(contract.address);
    const deployedContract = new ethers.Contract(contract.address, EFIR.abi, signer);
    const response = await deployedContract.storeDocument(firData.documentHash,firData.policeStation,firData.complaintName,firData.policeName);
    console.log(response);
    // const retrieveDocument = await deployedContract.retrieveDocument(0);
    // console.log(retrieveDocument);
  }

  const redirectHome = () => {
    window.location.href = "/home"
  }

  return (
    <div className='min-h-screen'>
        {/* Stepper component*/}
        
        <div className='flex mt-[2%]'>
        <div className='flex flex-col items-start w-full gap-y-3'>
        {
          firData.documentHash === "" && <FIllFir/>
        }
        {firData.documentHash !== "" && <div className='flex flex-col w-full gap-y-2'>
        <>
       <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
              Document Uploaded to IPFS successfully 🚀
        </h1>
        <h1 className=" text-bold text-xl tracking-[1.5px] ">
        Here is the hash of your document: {firData.documentHash}
        </h1>
        </>
        {contractAddress === null ? <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={deployContract} >
          Deploy Contract
        </button> : 
        <>
         <h1 className=" text-bold text-xl tracking-[1.5px] ">
         Here is the smart contract address: {contractAddress}
         </h1>
         <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={redirectHome} >
          Back to home
         </button>
         </>
        }
       
        </div> }
        </div>
       
        </div>

    </div>
  )
}

export default EFirFilling