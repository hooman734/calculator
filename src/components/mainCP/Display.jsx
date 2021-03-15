
const DisplayCP = props => {
    const { input } = props;

    return (
        <div className="container mt-5 mb-3 mx-auto max-w-max">
            <div className="flex justify-center">
            <p className="text-4xl text-right text-blue-100 tabular-nums slashed-zero">{ input }</p>
            </div>
        </div>
    );
}

export default DisplayCP;