

const SelectUserType = ({ handleChange, userType }: {handleChange: Function, userType: string}) => {
    return (
        <form className="flex justify-center items-center mt-3" >
            <fieldset className="px-4 flex items-center">
                <input type="radio" value={"particulier"} name="type"
                    className="w-4 h-4" checked={userType === "particulier"}
                    onChange={e => handleChange(e.target.value)}
                />
                <label className="ml-2 text-sm font-medium text-gray-900">Particulier</label>
            </fieldset>
            <fieldset className="px-4">
                <input type="radio" value={"pro"} name="type" className="w-4 h-4"
                    checked={userType === "pro"} onChange={e => handleChange(e.target.value)} />
                <label className="ml-2 text-sm font-medium text-gray-900">Professionnel</label>
            </fieldset>
        </form>
    );
}
export default SelectUserType;