import Key from './Key';

const KeyPadCP = () => {

    return (
        <div className="container mx-auto max-w-max" >
            <div className="flex justify-center">
                <div className="m-0"><Key icon={"AC"}/></div>
                <div className="m-0"><Key icon={"+/-"}/></div>
                <div className="m-0"><Key icon={"%"}/></div>
                <div className="m-0"><Key icon={"/"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key icon={"7"}/></div>
                <div className="m-0"><Key icon={"8"}/></div>
                <div className="m-0"><Key icon={"9"}/></div>
                <div className="m-0"><Key icon={"x"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key icon={"4"}/></div>
                <div className="m-0"><Key icon={"5"}/></div>
                <div className="m-0"><Key icon={"6"}/></div>
                <div className="m-0"><Key icon={"-"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key icon={"1"}/></div>
                <div className="m-0"><Key icon={"2"}/></div>
                <div className="m-0"><Key icon={"3"}/></div>
                <div className="m-0"><Key icon={"+"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0 flex-grow"><Key icon={"0"}/></div>
                <div className="m-0"><Key icon={"."}/></div>
                <div className="m-0"><Key icon={"="}/></div>
            </div>
        </div>
    );
}

export default KeyPadCP;