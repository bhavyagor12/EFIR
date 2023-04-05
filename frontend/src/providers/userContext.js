import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import EFIR from "../ethereum/build/contracts/EFIR.json";
import reactdotenv from "react-dotenv";
const { JsonRpcProvider } = require("@ethersproject/providers");
export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState("");
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);

  const [firData, setFirData] = useState({
    district: "Borivali",
    policeStation: "Mumbai",
    year: "2023",
    firNo: "12345",
    firDateTime: "",
    actsViolated: "Section 372",
    complainDescription:
      "The suspect stole my wallet in front of Borivali station and escaped on a bike",
    placeOfOccurrence: "Borivali Station(W)",
    complaintName: "Jignesh Patel",
    complaintFatherName: "Jigar Patel",
    complaintAddress: "Andheri(W)",
    complaintAddressType: "Permanent",
    complaintPhone: "9765432109",
    complaintEmail: "jigneshpatel@gmail.com",
    complaintGender: "Male",
    complaintAge: "35",
    complaintOccupation: "Accountant",
    complaintPassport: "12332412121",
    complaintAadhar: "1234-1234-1223",
    complaintPan: "1234-1234-1234",
    policeName: "Bhavya Gor",
    policeDesignation: "Inspector",
    suspectName: "Unknown",
    suspectAge: "Between 20-30",
    suspectGender: "Male",
    suspectAddress: "Unknown",
    suspectPhone: "Unknown",
    documentHash: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirData({
      ...firData,
      [name]: value,
    });
  };
  const sepoliaNetwork = {
    name: "sepolia",
    chainId: 11155111,
    ensAddress: null, // Replace with the ENS address if applicable
  };

  const deployToSepolia = async () => {
    console.log(process.env.REACT_APP_ALCHEMY_API_KEY);
    const url = `https://eth-sepolia.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`;

    const provider = new ethers.providers.AlchemyProvider(
      sepoliaNetwork,
      process.env.REACT_APP_ALCHEMY_API_KEY
    );

    // const provider = new ethers.providers.AlchemyProvider(
    //   "https://eth-sepolia.g.alchemy.com/v2/" +
    //     process.env.REACT_APP_ALCHEMY_API_KEY
    // );

    // const provider = new ethers.providers.AlchemyProvider(
    //   "https://eth-sepolia.g.alchemy.com/v2/" +
    //     process.env.REACT_APP_ALCHEMY_API_KEY,

    // );

    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(
      EFIR.abi,
      EFIR.bytecode,
      signer
    );
    const contract = await contractFactory.deploy(currentAccount);
    await contract.deployed();
    console.log(`Contract deployed at address: ${contract.address}`);
    setContractAddress(contract.address);
    const deployedContract = new ethers.Contract(
      contract.address,
      EFIR.abi,
      signer
    );
    const response = await deployedContract.storeDocument(
      firData.documentHash,
      firData.policeStation,
      firData.complaintName,
      firData.policeName
    );
    console.log(response);
  };

  const deployContract = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:8545"
    );
    const signer = provider.getSigner();
    const contractFactory = new ethers.ContractFactory(
      EFIR.abi,
      EFIR.bytecode,
      signer
    );
    const contract = await contractFactory.deploy(currentAccount);
    await contract.deployed();
    console.log(`Contract deployed at address: ${contract.address}`);
    setContractAddress(contract.address);
    const deployedContract = new ethers.Contract(
      contract.address,
      EFIR.abi,
      signer
    );
    const response = await deployedContract.storeDocument(
      firData.documentHash,
      firData.policeStation,
      firData.complaintName,
      firData.policeName
    );
    console.log(response);
  };

  const fetchContract = async (contractAddress) => {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:8545"
    );
    console.log(contractAddress);
    const signer = provider.getSigner();
    const deployedContract = new ethers.Contract(
      contractAddress,
      EFIR.abi,
      signer
    );
    const response = await deployedContract.retrieveDocument(0);
    console.log(response);
    return response;
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        alert("You don't have Ethereum wallet installed");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("NO accounts found");
      }
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  const connectWallet = async () => {
    try {
      console.log("Connect called ");
      if (!ethereum) {
        alert("You don't have Ethereum wallet installed");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    console.log(firData);
  }, [firData]);

  useEffect(() => {
    if (ethereum) {
      const getChain = async () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const { chainId } = await provider.getNetwork();
        console.log("CHAIN ID : ", chainId);
        setIsCorrectNetwork(chainId === 80001);
      };

      ethereum.on("accountsChanged", (accounts) => {
        setCurrentAccount(accounts[0]);
      });
      ethereum.on("networkChanged", function (networkId) {
        window.location.reload();
      });
      checkIfWalletIsConnected();

      getChain();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        connectWallet,
        currentAccount,
        loading,
        isCorrectNetwork,
        firData,
        setFirData,
        handleInputChange,
        contractAddress,
        setContractAddress,
        deployContract,
        fetchContract,
        deployToSepolia,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
