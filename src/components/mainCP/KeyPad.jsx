import Key from './Key';
import {useDispatch} from "react-redux";
import {operator} from "../../redux/actions";
import {useEffect} from "react";

const KeyPadCP = () => {
    const dispatch = useDispatch();
    const onEnter = icon => dispatch(operator(icon));

    const documentEventListener = (evt) => {
      const possibleKeys = {
        '49': '1',
        '50': '2',
        '51': '3',
        '52': '4',
        '53': '5',
        '54': '6',
        '55': '7',
        '56': '8',
        '57': '9',
        '48': '0',
        '8': 'AC',
        '46': 'AC',
        '107': '+',
        '109': '-'
      };

      if (evt.keyCode in possibleKeys) {
        onEnter(possibleKeys[evt.keyCode]);
      }
    }

    useEffect(() => {
      document.addEventListener('keypress', documentEventListener);

      return () => document.removeEventListener('keypress', documentEventListener);
    }, [documentEventListener]);

    return (
        <div className="container mx-auto max-w-max" >
            <div className="flex justify-center">
                <div className="m-0"><Key onEnter={onEnter} icon={"AC"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"+/-"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"%"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"/"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onEnter={onEnter} icon={"7"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"8"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"9"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"x"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onEnter={onEnter} icon={"4"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"5"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"6"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"-"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0"><Key onEnter={onEnter} icon={"1"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"2"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"3"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"+"}/></div>
            </div>
            <div className="flex justify-center">
                <div className="m-0 flex-grow"><Key icon={"0"}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"."}/></div>
                <div className="m-0"><Key onEnter={onEnter} icon={"="}/></div>
            </div>
        </div>
    );
}

export default KeyPadCP;