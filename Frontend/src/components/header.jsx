import { useNavigate } from "react-router-dom";

function Header() {
    const nav = useNavigate()

    return (  
        <>
        <div className="w-full h-16 px-6 flex justify-between items-center text-[#ffffff] bg-[#030712] border-b-2 border-[#1e2939]">
            <div className="text-lg font-bold">100XGROW</div>
            <div className="flex items-center gap-6">
                <p onClick={() => nav('/')} className="font-semibold cursor-pointer">Home</p>
                <p onClick={() => nav('/buildresume')} className="font-semibold cursor-pointer">BuildResume</p>
                <p onClick={() => nav('/ratemyresume')} className="font-semibold cursor-pointer">RateMyResume</p>
                <p onClick={() => nav('/magicats')} className="font-semibold cursor-pointer">MagicATS</p>
                <p onClick={() => nav('/findjob')} className="font-semibold cursor-pointer">FindJob</p>
                <div onClick={() => nav('/profile')} className="h-8 w-8 rounded-full bg-[#292e3d] cursor-pointer overflow-hidden border-2 border-white">
                    <img className="h-8 w-8 object-center object-cover" src="https://images.unsplash.com/photo-1662492953475-3aeae94525d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2MXx8fGVufDB8fHx8fA%3D%3D" alt="profile pic" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;