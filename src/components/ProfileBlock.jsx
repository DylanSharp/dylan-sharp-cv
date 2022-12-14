import profilePhoto from "../assets/profile_photo.jpg";
import resumePdf from "../assets/dylan_sharp_resume.pdf";
import coverImage from "../assets/cover.jpg";

const ProfileBlock = () => {
    const onClickDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'dylan-sharp-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hideDownload = urlParams.get('hide-download') === 'true';

    return (
        <div className="shadow rounded-xl overflow-hidden">
            <div className="h-32 bg-cover bg-center"
                 style={{backgroundImage: `url(${coverImage})`}}>
            </div>
            <div className="pt-14 p-7 bg-white relative">
                <span className="status-badge bg-yellow-200">Available</span>
                <img src={profilePhoto} alt="Avatar"
                     className="w-20 h-20 border-opacity-50 border-2 rounded-2xl border-white shadow absolute -top-10 z-20 transition duration-200 ease-in-out hover:translate-x-[90px] hover:scale-[3] hover:border-none"/>
                <div className="text-2xl font-semibold mb-1.5">Dylan Sharp</div>
                <div className={`text-md text-gray-400 ${hideDownload ? 'mb-0' : 'mb-7'}`}>Fullstack<br/>Software Engineer</div>
                {!hideDownload && (
                    <div className="flex group">
                        <button
                            onClick={onClickDownload}
                            className="download-btn print:hidden">Download CV
                        </button>
                        <button
                            onClick={onClickDownload}
                            className="download-btn-icon print:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileBlock;