import {useDispatch, useSelector} from "react-redux";
import {calculate} from "../../utils/calculator";
import lodash from 'lodash';
import {changeHistory} from "../../redux/actions";

const HistoryCP = () => {

  const dispatch = useDispatch();
  const histories = useSelector(state => state.history);

  return (
    <div className="container mx-auto max-w-max mt-5">
      <div className="flex justify-center flex-col">
        <p className="text-blue-100 font-bold text-center my-2">Recent Calculations</p>
        {
          lodash.take(histories)
            .map((x, i) => {
              const classNameSuffix = i === 0 ? '100 my-1' : (i === 1 ? '50 my-0.5' : '25');
              return (<p
                onClick={() => dispatch(changeHistory(histories.indexOf(x)))}
                className={`text-blue-100 text-center text-opacity-${classNameSuffix}`}
                key={i}>{`${x.join('')} = ${calculate(x)}`}</p>);
            })
        }
      </div>
    </div>
  );

}

export default HistoryCP;