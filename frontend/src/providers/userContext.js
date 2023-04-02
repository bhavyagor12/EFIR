import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState("");
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [firData, setFirData] = useState({
    district: "",
    policeStation: "Mumbai",
    year: "",
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirData({
      ...firData,
      [name]: value,
    });
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
