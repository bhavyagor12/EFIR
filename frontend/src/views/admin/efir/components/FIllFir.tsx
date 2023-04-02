import { UserContext } from 'providers/userContext'
import React, { useContext } from 'react'

type Props = {}

const FIllFir = (props: Props) => {
  const {firData,setFirData,handleInputChange} = useContext(UserContext)

  const uploadData = async () => {
    const response = await fetch('http://localhost:8000/api/efir/storeFile', {
      method: 'POST',
      body: JSON.stringify(firData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data);
    setFirData({
      ...firData,
      documentHash: data.documentHash,
    })
    // setFirData({
    //       ...firData,
    //       documentHash:"QmT4Q8SFcD9rffE1J1Vz3YUmBrdDG2gCjyJR8qWejUyAmW",
    // })
  }
  return (
    <div className='flex flex-col items-start w-full gap-y-3'>
        <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
              Police Station Information
        </h1>
        <h1 className="text-bold text-xl tracking-[1.5px] ">
              Name of police station
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="policeStation"
              value={firData.policeStation}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              District
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="district"
              value={firData.district}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Police Name
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="policeName"
              value={firData.policeName}
            />
              <h1 className="text-bold text-xl tracking-[1.5px] ">
              Police Designation
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="policeDesignation"
              value={firData.policeDesignation}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Year
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="year"
              value={firData.year}
            />
            <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] mt-[2%] ">
              FIR Details
            </h1>
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              FIR no.
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="firNo"
              value={firData.firNo}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Acts Violated
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="actsViolated"
              value={firData.actViolated}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Date and Time
            </h1>
            <input
              type="datetime-local"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="firDateTime"
              value={firData.firDateTime}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complain Details
            </h1>
            <textarea
              placeholder="Type here"
              className="textarea textarea-success  w-full"
              onChange={handleInputChange}
              name="complainDescription"
              value={firData.complainDescription}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Place of Occurrence
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="placeOfOccurrence"
              value={firData.placeOfOccurrence}
            />
             <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] mt-[2%] ">
              Complaint Information
            </h1>
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Name of Complaint
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complainantName"
              value={firData.complainantName}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Father's Name of Complaint
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complainantFatherName"
              value={firData.complainantFatherName}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Address
            </h1>
            <textarea
              placeholder="Type here"
              className="textarea textarea-success  w-full"
              onChange={handleInputChange}
              name="complaintAddress"
              value={firData.complaintAddress}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Address Type
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintAddressType"
              value={firData.complaintAddressType}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Phone Number
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintPhone"
              value={firData.complaintPhone}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Email
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintEmail"
              value={firData.complaintEmail}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Gender
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintGender"
              value={firData.complaintGender}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Age
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintAge"
              value={firData.complaintAge}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Occupation
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintOccupation"
              value={firData.complaintOccupation}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Passport
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintPassport"
              value={firData.complaintPassport}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Aadhar
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintAadhar"
              value={firData.complaintAadhar}
            />
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Complaint Pan Card
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="complaintPan"
              value={firData.complaintPan}
            />
             <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] mt-[2%] ">
             Suspect Information
            </h1>
            <h1 className="text-bold text-xl tracking-[1.5px] ">
              Suspect Name
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="suspectName"
              value={firData.suspectName}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Suspect Age
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="suspectAge"
              value={firData.suspectAge}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Suspect Gender
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full"
              onChange={handleInputChange}
              name="suspectGender"
              value={firData.suspectGender}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Suspect Address
            </h1>
            <textarea
              placeholder="Type here"
              className="textarea textarea-success  w-full"
              onChange={handleInputChange}
              name="suspectAddress"
              value={firData.suspectAddress}
            />
             <h1 className="text-bold text-xl tracking-[1.5px] ">
              Suspect Phone Number
            </h1>
            <input
                type="text"
              placeholder="Type here"
              className="textarea textarea-success  w-full"
              onChange={handleInputChange}
              name="suspectPhone"
              value={firData.suspectPhone}
            />
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200" onClick={uploadData} >
          Upload Data
        </button>
           
        </div>
  )
}

export default FIllFir