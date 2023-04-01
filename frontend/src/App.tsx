import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import SignIn from "layouts/auth";
import { UserContext } from './providers/userContext';
import { useContext } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}
const App = () => {
  const { isCorrectNetwork,currentAccount } = useContext(UserContext);
   
	if (!window.ethereum) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<h1 className="text-2xl text-black text-center font-bold">
					Metamask or other EIP-1102 / EIP-1193 compliant wallet not found,
					<br />
					Please install Metamask
				</h1>
			</div>
		);
	}

  if(!currentAccount){
    return (
      <Routes>
        <Route
        path="*" element={<SignIn />}
                    />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} /> 
      <Route path="/home" element={<Navigate to="/admin" replace />} />
      <Route
      path="/" element={<Navigate to="/auth/sign-in" replace />}
                  />
    </Routes>
  );
};

export default App;
