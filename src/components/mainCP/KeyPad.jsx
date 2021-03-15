import Key from './Key';

const KeyPadCP = props => {

    const { onClick } = props;

    return (
        <div className="container mx-auto max-w-max" >
            <div className="flex justify-center">
                <div className="m-0"><Key onClick={onClick} icon={"AC"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"+/-"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"%"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"/"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onClick={onClick} icon={"7"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"8"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"9"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"x"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onClick={onClick} icon={"4"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"5"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"6"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"-"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onClick={onClick} icon={"1"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"2"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"3"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"+"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0 flex-grow"><Key icon={"0"}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"."}/></div>
                <div className="m-0"><Key onClick={onClick} icon={"="}/></div>
            </div>
        </div>
    );
}

export default KeyPadCP;