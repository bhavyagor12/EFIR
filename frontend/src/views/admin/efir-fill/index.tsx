import React, { useContext, useState } from 'react'
import Swal from "sweetalert2";

// import crypto from 'crypto';
import EFIR from '../../../ethereum/build/contracts/EFIR.json';
import { ContractFactory, ethers } from "ethers";
import { UserContext } from 'providers/userContext';
import FIllFir from './components/FIllFir';
import { useNavigate } from 'react-router-dom';
type Props = {}


const EFirFilling = (props: Props) => {
  const {firData,setFirData,handleInputChange,currentAccount,contractAddress,setContractAddress,deployContract,deployToSepolia} = useContext(UserContext)
  const navigate = useNavigate();

  // async function deployContract() {
  //   const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  //   const signer = provider.getSigner();
  //   const contractFactory = new ethers.ContractFactory(EFIR.abi, EFIR.bytecode, signer);
   
  //   const contract = await contractFactory.deploy(currentAccount);
    
  //   await contract.deployed();
  //   console.log(`Contract deployed at address: ${contract.address}`)
  //   setContractAddress(contract.address);
  //   const deployedContract = new ethers.Contract(contract.address, EFIR.abi, signer);
  //   const response = await deployedContract.storeDocument(firData.documentHash,firData.policeStation,firData.complaintName,firData.policeName);
  //   console.log(response);
  //   // const retrieveDocument = await deployedContract.retrieveDocument(0);
  //   // console.log(retrieveDocument);
  // }

  const redirectHome = async () => {
    const {firNo,policeStation} = firData;
    console.log("this is fir no"+firNo)
    console.log("this is police station"+policeStation)
    const mongoData = {
      firNo:firNo,
      branch:policeStation,
      contractAddress
    }
    const response = await fetch('http://localhost:8000/api/efir/storeOnMongo', {
      method: 'POST',
      body: JSON.stringify(mongoData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data.status);
    if(data.status === "error"){
      Swal.fire({
              title: "Error!",
              text: "Missing either FIR No or Police Station",
              icon: "error",
              confirmButtonText: "Retry",
            }).then(()=>{setFirData({...firData,documentHash:""});navigate("/admin/fill-efir");})
    }else{
      Swal.fire({
              title: "Success!",
              text: "Contract Address stored on MongoDB",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(()=>{setFirData({
              district: "",
              policeStation: "Mumbai",
              year: "2023",
              firNo: "",
              firDateTime: "",
              actsViolated: "",
              complainDescription: "",
              placeOfOccurrence: "",
              complaintName: "",
              complaintFatherName: "",
              complaintAddress: "",
              complaintAddressType: "",
              complaintPhone: "",
              complaintEmail: "",
              complaintGender: "",
              complaintAge: "",
              complaintOccupation: "",
              complaintPassport: "",
              complaintAadhar: "",
              complaintPan: "",
              policeName: "",
              policeDesignation: "",
              suspectName: "",
              suspectAge: "",
              suspectGender: "",
              suspectAddress: "",
              suspectPhone: "",
              documentHash: "",
            });navigate("/home");})
      
    }
    
    
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