
const KeyCP = props => {

    const { icon } = props;
    return (
            <div className="p-1.5 select-none">
                <button className="w-14 min-w-full p-3.5 bg-gray-700 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    <div className="text-blue-100 text-center font-bold">{ icon }</div>
                </button>
            </div>


    );
}

export default KeyCP;