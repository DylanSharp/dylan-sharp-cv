import ghostLogo from '../assets/ghost_logo.png';
import hotjarLogo from '../assets/hotjar_logo.png';
import stratechLogo from '../assets/stratech_logo.png';
import modalityAppsLogo from '../assets/ma_logo.png';
import sabbaticalLogo from '../assets/sabatical_logo.jpeg';

const experienceItems = [
    {
        title: 'Software Engineer',
        company: 'Ghost',
        location: 'South Africa',
        dateRange: 'Oct 2022 - Present',
        logo: (
            <a href="https://ghost.org/" target="_blank" referrerPolicy="no-referrer">
                <img src={ghostLogo} alt="logo" className="w-10 h-10 object-contain"/>
            </a>
        ),
        description: 'This was a 3 month project-based contract to build an internal tool for the Ghost team.',
        bulletPoints: [
            'Built a React app to replace a CLI tool that the support team uses to manage users and accounts etc.',
            'Built a React app to replace a CLI tool that the support team uses to manage users and accounts etc.',
        ]
    },
    {
        title: 'Sabbatical',
        company: 'NA',
        location: 'South Africa',
        dateRange: 'March 2021 - Oct 2022',
        logo: <img src={sabbaticalLogo} alt="logo" className="w-10 h-10 object-contain scale-[1]"/>,
        description: 'I made the decision to take time off to spend with my family and recharge.',
        bulletPoints: [
            'Spent time with my my wife and (at the time) newborn son.',
            'Travelled in South Africa.',
            'Pursued hobbies.',
            'Learned new skills.',
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Hotjar',
        location: 'Malta, Remote',
        dateRange: 'Dec 2017 - March 2021',
        logo: (
            <a href="https://hotjar.com/" target="_blank" referrerPolicy="no-referrer">
                <img src={hotjarLogo} alt="logo" className="w-10 h-10 object-contain scale-[1.6]"/>
            </a>
        ),
        description: 'Hotjar is a very successful, data heavy product with over a million daily active users consuming data from tens of billions of site sessions a month.',
        bulletPoints: [
            'Worked primary on internal support tools including a React app, a chrome extension and other integrations.',
            'Built and maintained Rest APIs in Flask.',
            'Was an interim-team lead for 4 months as  while the other team lead was on paternity leave.',
            'Mentored more junior engineers in my own team and in the support department.',
            'Progressed well on the on internal development track and earned title of "Specialist" in my area.'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'Stratech',
        location: 'South Africa, Remote',
        dateRange: 'Nov 2016 - Oct 2017',
        logo: (
            <a href="https://stratech.co.za/" target="_blank" referrerPolicy="no-referrer">
                <img src={stratechLogo}
                     alt="logo"
                     className="w-10 h-10 object-contain rounded-lg"/>
            </a>
        ),
        description: 'Contracted engineering work building fintech related solutions for clients.',
        bulletPoints: [
            'Lead backend developer on several diverse projects in the fintech space.',
            'Systems architecture and planning.',
            'Front end developer on hybrid mobile applications using Ionic 2 (Angular 2).',
        ]
    },
    {
        title: 'Junior Software Engineer',
        company: 'Modality Apps',
        location: 'South Africa, Remote',
        dateRange: 'Mar 2015 - Oct 2016',
        logo: (
            <a href="https://modalityapps.com" target="_blank" referrerPolicy="no-referrer">
                <img src={modalityAppsLogo}
                     alt="logo"
                     className="w-10 h-10 object-contain rounded-lg"/>
            </a>
        ),
        description: 'Hybrid Mobile Apps for Business',
        bulletPoints: [
            'Primary full-stack developer on web apps to provide "back office" interfaces for hybrid mobile apps.',
            'Managed and setup all the infrastructure (small scale) in AWS.',
            'This is where I jumped in the deep end and learned how to code on the job.',
        ]
    },
];

function ExperienceBlock({item, index}) {
    return (
        <div key={index} className="mb-5 item-section">
            {item.logo}
            <div className="w-full space-y-5">
                <div className="item-header">
                    <div className="space-y-1.5">
                        <div className="font-medium">{item.title}</div>
                        <div className="flex space-x-5">
                            <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span>{item.company}</span>
                            </div>
                            <div className="item-header-info">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>{item.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                        <div className="job-item-badge">Full time</div>
                        <div className="item-header-info">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                            <span>{item.dateRange}</span>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <ul className="list-disc list-inside text-gray-600">
                    {item.bulletPoints.map((bulletPoint, index) => {
                        // Return list item that wraps but lines up with the text on the line above
                        return (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0">
                                    &bull;
                                </div>
                                <div className="ml-2">{bulletPoint}</div>
                            </li>
                        );
                    })}
                </ul>
                {/* Only show the divider if it's not the last element */}
                {index !== experienceItems.length - 1 && <div className="border-b border-gray-200 text-xs"></div>
                }
            </div>
        </div>);
}

const Experience = () => <div className="p-7 block-section">
    <h2 className="block-title">Experience</h2>
    {experienceItems.map((item, index) => <ExperienceBlock key={index} item={item} index={index}/>)}
</div>;
export default Experience;