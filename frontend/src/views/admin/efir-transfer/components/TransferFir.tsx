import React, { useEffect } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
type Props = {}

const TransferFir = (props: Props) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const [contractAddress, setContractAddress] = React.useState<string>("")
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.id === "email"){
      setEmail(e.target.value)
    }else if(e.target.id === "contractAddress"){
      setContractAddress(e.target.value)
    }else if(e.target.id === "name"){
      setName(e.target.value)
    }
   
  }
  const validateEmail = (email:string):boolean => {
    // Regex pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  const validateContractAddress = (address:string):boolean => {
    // Regex pattern for contract address validation
    const pattern = /^(0x)?[0-9a-fA-F]{40}$/;
    return pattern.test(address);
  }

  const handleSubmit = () => {
    if (validateEmail(email) &&validateContractAddress(contractAddress)  && name !== "") {
      var templateParams = {
        to_name: name,
        contract_address: contractAddress,
        to_email: email,
      };
      emailjs
      .send(
        "service_wqnn76d",
        "template_rslm2nm",
        templateParams,
        "GD2N9S1SI4eTUTqxV"
      )
      .then(
        function (response: any) {
          Swal.fire({
            title: 'Email sent successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'

          }).then(() => {
            navigate("/admin/default")
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error:any) {
          Swal.fire({
            title: 'Error!',
            icon: 'error',
            confirmButtonText: 'Ok'

          });
        }
      );;
    } else {
      Swal.fire({
        title: 'Parameters invalid!',
        icon: 'error',
        confirmButtonText: 'Ok'

      });
    }
  }

  useEffect(() => {
    console.log({name, email, contractAddress})
  }, [name, email, contractAddress])
  
  return (
    <div>
      <h1 className="text-[#000000] dark:text-white text-bold text-3xl tracking-[1.5px] ">
              Transfer FIR using email 🚀
        </h1>
        <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered input-success w-full mt-[2%]"
              onChange={handleInputChange}
              id="name"
              required
        />
        <input
              type="text"
              placeholder="Enter Contract Address"
              className="input input-bordered input-success w-full mt-[2%]"
              onChange={handleInputChange}
              id="contractAddress"
              required
             
        />
        <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered input-success w-full mt-[2%]"
              onChange={handleInputChange}
              id="email"
              required
             
        />
        <button className='btn btn-primary mt-2' onClick={handleSubmit}>Send email</button>
    </div>
  )
}

export default TransferFir