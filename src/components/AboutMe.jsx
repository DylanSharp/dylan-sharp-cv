const HighlightedText = ({text}) => {
    const inkStyles = {
        transform: `skew(15deg)  rotate(-2deg)`,
        height: '1rem',
        mixBlendMode: 'multiply',
        width: `11rem`,
        top: `40%`,
        right: `1%`,
    };
    return (
        <span className="relative">
            <span className="relative z-10">{text}</span>
            <span style={inkStyles}
                  className={`absolute z-0 bg-gradient-to-tr from-[#ffe500] to-[#fffb0070] opacity-100 rounded-md hover:skew-y-12`}/>
        </span>
    );
};

const AboutMe = () => <>
    <h2 className="block-title">About me</h2>
    <p className="text-gray-600">Mechanical Engineer turned Software Engineer.</p>
    <p className="text-gray-600">I'm <HighlightedText text='passionate about bitcoin'/> and deep down the rabbit hole.
        🐇🕳️</p>
    <p className="text-gray-600">I thrive on learning new things and solving challenging problems.</p>
    <p className="text-gray-600 mb-5">I'm married to an amazing woman and father to a wonderful boy.</p>
    <div className="flex flex-col center">
        <a href="mailto:dylan@dmsapps.co.za" target="_blank" className="mail-link social-link-hover">
            <i className='bx bx-at text-xl'></i>
            <span>dylan@dmsapps.co.za</span>
        </a>
    </div>
</>;
export default AboutMe;