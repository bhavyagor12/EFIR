import { UserContext } from "providers/userContext";
import React, { useContext } from "react";
import Swal from "sweetalert2";

type Props = {};
type mongoData = {
  firNo: string;
  branch: string;
  contractAddress: string;
};
type contractData = {
  ipfsHash: string;
  policeStation: string;
  complaintName: string;
  policeName: string;
};
type firData = {
  actsViolated: string;
  complainDescription: string;
  complaintAadhar: string;
  complaintAddress: string;
  complaintAddressType: string;
  complaintAge: string;
  complaintEmail: string;
  complaintFatherName: string;
  complaintGender: string;
  complaintName: string;
  complaintOccupation: string;
  complaintPan: string;
  complaintPassport: string;
  complaintPhone: string;
  district: string;
  documentHash: string;
  firDateTime: string;
  firNo: "1234";
  placeOfOccurrence: string;
  policeDesignation: string;
  policeName: string;
  policeStation: "Mumbai";
  suspectAddress: string;
  suspectAge: string;
  suspectGender: string;
  suspectName: string;
  suspectPhone: string;
  year: "2023";
};
const RetrieveFir = (props: Props) => {
  const { fetchContract } = useContext(UserContext);
  const [address, setAddress] = React.useState<string>("");
  const [objVisible, setObjVisible] = React.useState<boolean>(false);
  const [mongoData, setMongoData] = React.useState<mongoData>({
    firNo: "",
    branch: "",
    contractAddress: "",
  });
  const [retrieveData, setRetrieveData] = React.useState<contractData>({
    ipfsHash: "",
    policeStation: "",
    complaintName: "",
    policeName: "",
  });
  const [metaData, setMetaData] = React.useState<boolean>(false);
  const [boolFir, setBoolFir] = React.useState<boolean>(false);
  const [firData, setFirData] = React.useState<firData>({
    actsViolated: "",
    complainDescription: "",
    complaintAadhar: "",
    complaintAddress: "",
    complaintAddressType: "",
    complaintAge: "",
    complaintEmail: "",
    complaintFatherName: "",
    complaintGender: "",
    complaintName: "",
    complaintOccupation: "",
    complaintPan: "",
    complaintPassport: "",
    complaintPhone: "",
    district: "",
    documentHash: "",
    firDateTime: "",
    firNo: "1234",
    placeOfOccurrence: "",
    policeDesignation: "",
    policeName: "",
    policeStation: "Mumbai",
    suspectAddress: "",
    suspectAge: "",
    suspectGender: "",
    suspectName: "",
    suspectPhone: "",
    year: "2023",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const retrieveFile = async () => {
    if (address !== "") {
      const object = {
        contractAddress: address,
      };
      const response = await fetch(
        `http://localhost:8000/api/efir/retriveFromMongo`,
        {
          method: "POST",
          body: JSON.stringify(object),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.file !== null) {
        setMongoData(data.file);
        Swal.fire({
          title: "Success!",
          text: "FIR retrieved successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        setObjVisible(true);
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid address",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  const callFetch = async () => {
    const response = await fetchContract(mongoData.contractAddress);
    console.log(response[0]);
    setMetaData(true);
    setRetrieveData({
      ipfsHash: response[0],
      policeStation: response[1],
      complaintName: response[2],
      policeName: response[3],
    });
  };

  const getFirData = async () => {
    const object = {
      hash: retrieveData.ipfsHash,
    };
    const response = await fetch(
      `http://localhost:8000/api/efir/retrieveFile`,
      {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setBoolFir(true);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
        Retrieve a FIR
      </h1>
      <h1 className="text-bold text-xl tracking-[1.5px] ">
        Enter contract address
      </h1>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input-success input w-full"
        onChange={handleInputChange}
      />
      {!objVisible ? (
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={retrieveFile}
        >
          Retrieve
        </button>
      ) : (
        <div className="flex flex-col gap-y-2">
          <h1 className=" text-bold text-xl tracking-[1.5px] ">
            Location of filling: {mongoData.branch}
          </h1>
          {!metaData ? (
            <button
              className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={callFetch}
            >
              Fetch Meta Data from address
            </button>
          ) : (
            <>
              <div className="mockup-code">
                <pre data-prefix="$">
                  <code>{retrieveData.ipfsHash}</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>lets use this hash to get contract information...</code>
                </pre>
              </div>
              {!boolFir ?<button
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                onClick={getFirData}
              >
                Fetch EFIR Data
              </button>:
              <div className="mockup-code">
              <pre data-prefix="$">
                <code>Police Name: {firData.policeName}</code>
              </pre>
              <pre data-prefix="$">
                <code>Suspect Name: {firData.suspectName}</code>
              </pre>
              <pre data-prefix="$">
                <code>Complainant Name: {firData.complaintName}</code>
              </pre>
              <pre data-prefix="$">
                <code>Description: {firData.complainDescription}</code>
              </pre>
            </div>
        }
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RetrieveFir;
