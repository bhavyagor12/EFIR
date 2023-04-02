import { UserContext } from 'providers/userContext'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'

type Props = {}
type mongoData = {
    firNo:string,
    branch:string,
    contractAddress:string
}
type contractData = {
    ipfsHash:string,
    policeStation:string,
    complaintName:string,
    policeName:string
}
const RetrieveFir = (props: Props) => {
    const {fetchContract} = useContext(UserContext);
    const [address, setAddress] = React.useState<string>('')
    const [objVisible, setObjVisible] = React.useState<boolean>(false)
    const [mongoData, setMongoData] = React.useState<mongoData>({firNo:"",branch:"",contractAddress:""});
    const [retrieveData, setRetrieveData] = React.useState<contractData>({ipfsHash:"",policeStation:"",complaintName:"",policeName:""});
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
      }
    const retrieveFile = async () => {
        if(address !== ""){
        const object = {
            contractAddress:address
        }
        const response = await fetch(`http://localhost:8000/api/efir/retriveFromMongo`, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        if(data.file !== null){
            setMongoData(data.file);
            Swal.fire({
                title: "Success!",
                text: "FIR retrieved successfully",
                icon: "success",
                confirmButtonText: "OK",
              })
              setObjVisible(true);
        }
    
    }
        else{
            Swal.fire({
                title: "Error!",
                text: "Please enter a valid address",
                icon: "error",
                confirmButtonText: "Retry",
              })
        }
    }

    const callFetch = async () => {
        const response = await fetchContract(mongoData.contractAddress);
        console.log(response);
    }
  return (
    <div  className="flex flex-col gap-y-2">
    <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
              Retrieve a FIR
        </h1>
        <h1 className="text-bold text-xl tracking-[1.5px] ">
              Enter contract address
        </h1>
        <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              
        />
        {!objVisible ? <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={retrieveFile} >
            Retrieve
        </button>:
        <div className="flex flex-col gap-y-2">
        <h1 className=" text-bold text-xl tracking-[1.5px] ">
        Location of filling: {mongoData.branch}
        </h1>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={callFetch} >
            Fetch Meta Data from address
        </button>
        </div>
        }
      
      </div>
  )
}

export default RetrieveFir