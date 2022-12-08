import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import NavBar from "./NavBar.jsx";
import SocialLinks from "./SocialLinks.jsx";
import SkillsBlock from "./SkillsBlock.jsx";
import InformationBlock from "./InformationBlock.jsx";
import ProfileBlock from "./ProfileBlock.jsx";
import AboutMe from "./AboutMe.jsx";

const HomePage = () => {
    return (
        <>
            <main className="main-container">
                <div className="grid gap-5 lg:grid-cols-3">
                    {/* Side Panel */}
                    <div className="space-y-5">
                        <ProfileBlock/>
                        <InformationBlock/>
                        <SkillsBlock/>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-5 lg:col-span-2">

                        <div className="p-7 pb-0 block-section">
                            <AboutMe/>

                            <div className="flex flex-col items-center space-y-4">

                                <SocialLinks/>
                            </div>
                            <div className="border-t border-gray-200 my-5"></div>
                            <NavBar/>
                        </div>
                        <Experience/>
                        <Education/>
                    </div>
                </div>
            </main>
        </>
    )
};
export default HomePage;