
const ItemCP = props => {

    const { iconClass } = props;
    return (
        <div className="p-1.5 select-none">
            <button className="h-16 w-16 min-w-full p-3.5 bg-gray-700 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                <div className="text-blue-100 text-center font-bold text-3xl"><i className={ iconClass }/></div>
            </button>
        </div>


    );
}

export default ItemCP;