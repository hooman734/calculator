
const HistoryCP = props => {
    const { previousActions } = props;
    const { prev1, prev2, prev3 } = previousActions;

    return (
        <div className="container mx-auto max-w-max mt-5">
            <div className="flex justify-center flex-col">
                <p className="text-blue-100 font-bold text-center my-2">Recent Calculations</p>
                <p className="text-blue-100 text-center my-1">{ prev1 }</p>
                <p className="text-blue-100 text-center text-opacity-50  my-0.5">{ prev2 }</p>
                <p className="text-blue-100 text-center text-opacity-25">{ prev3 }</p>
            </div>
        </div>
    );

}

export default HistoryCP;