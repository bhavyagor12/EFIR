
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";

import ComplexTable from "views/admin/default/components/ComplexTable";

import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";
import { useEffect, useState } from "react";



const Dashboard = () => {
  const [firCount,setFirCount] = useState<string>('0');
  const [firData,setFirData] = useState<any>([]);
  const [totalFir,setFirTotal] = useState<string>('0');
  const getFirData = async() =>{
    const response = await fetch('http://localhost:8000/api/efir/getAllFiles')
    const data = await response.json()
    console.log(data);
    setFirCount(data.files.length);
    setFirData(data.files);
    let total = data.files.length+145;
    total.toString();
    setFirTotal(total);
  }

  useEffect(() => {
    getFirData()
  }, [])
  
  return (
    <div className="h-[100vh]" >
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"EFIRs filed"}
          subtitle={firCount}
        />
        
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"EFIRs remaining"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total EFIRs"}
          subtitle={totalFir}
        />
      </div>

      {/* Charts */}

     

      {/* Tables & Charts */}
      
      
      
      
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
  
      <ComplexTable tableData={tableDataComplex} />
        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TaskCard />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
