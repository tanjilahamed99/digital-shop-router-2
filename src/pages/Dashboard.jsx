import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex my-32 p-5">
            <div className="flex flex-col w-[30%] space-y-5 font-bold text-xl border-r-2">
                <Link className="" to={'/dashboard'}>dashboard</Link>
                <Link to={'/dashboard/profile'}>profile</Link>
                <Link to={'/dashboard/editProfile'}>Edit Profile</Link>
            </div>
            <div className="w-[70%] ml-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;