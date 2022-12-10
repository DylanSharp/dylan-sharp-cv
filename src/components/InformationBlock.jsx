function RowItem({label, value}) {
    return <div className="flex justify-between">
        <div className="text-gray-400">{label}</div>
        <div className="font-medium text-right text-gray-600">{value}</div>
    </div>;
}

const InformationBlock = () => <div className="p-7 block-section">
    <h2 className="block-title">Information</h2>
    <div className="space-y-4">
        <RowItem label="Location" value="South Africa"/>
        <RowItem label="Experience" value="6+ years"/>
        <RowItem label="Available from" value="Jan 2023"/>
        <RowItem label="Relocation" value="No"/>
        <RowItem label="Age" value="33"/>
    </div>
</div>;
export default InformationBlock;