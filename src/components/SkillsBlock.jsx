const skills = [
    'JavaScript',
    'React',
    'React Native',
    'Tailwind CSS',
    'PostgreSQL',
    'Node.js',
    'Express',
    'Python',
    'Django',
    'Flask',
]

const SkillsBlock = () => (
    <div className="p-7 block-section flow-root group">
        <h2 className="block-title">Skills</h2>
        <div className="-m-2 flex flex-wrap">
            {skills.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
        </div>
    </div>);
export default SkillsBlock;