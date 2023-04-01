
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import Widget from "components/widget/Widget";

import ComplexTable from "views/admin/default/components/ComplexTable";

import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck";
import tableDataComplex from "./variables/tableDataComplex";

const Dashboard = () => {
  return (
    <div className="h-[100vh]" >
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"EFIRs filed"}
          subtitle={"340"}
        />
        
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"EFIRs remaining"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total EFIRs"}
          subtitle={"485"}
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
