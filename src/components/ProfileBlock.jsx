import profilePhoto from "../assets/profile_photo.png";

const ProfileBlock = () => <div className="shadow rounded-xl overflow-hidden">
    <div className="h-32 bg-gradient-to-r from-orange-300 to-fuchsia-500"></div>
    <div className="pt-14 p-7 bg-white relative">
        <span className="status-badge bg-green-200 text-gray-900">Available</span>
        <a href="/"><img src={profilePhoto} alt="Avatar" className="user-photo"/></a>
        <div className="text-2xl font-semibold mb-1.5">Dylan Sharp</div>
        <div className="text-md text-gray-400 mb-7">Fullstack<br/>Software Engineer</div>
        {/*<div className="flex group">*/}
        {/*    <button className="download-btn">Download CV</button>*/}
        {/*    <button className="download-btn-icon">*/}
        {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*/}
        {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
        {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"*/}
        {/*                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>*/}
        {/*        </svg>*/}
        {/*    </button>*/}
        {/*</div>*/}
    </div>
</div>;

export default ProfileBlock;