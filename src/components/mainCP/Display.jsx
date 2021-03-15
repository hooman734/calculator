import {useSelector} from "react-redux";
import {calculate} from "../../utils/calculator";
import _ from 'lodash';

const DisplayCP = () => {
  const histories = useSelector(state => state.history);
  const operations = useSelector(state => state.current);

  return (
    <div className="container mt-5 mb-3 mx-auto max-w-max">
      <div className="flex justify-center flex-col">

        <p className="text-4xl text-right text-blue-100 tabular-nums slashed-zero">{calculate(operations)}</p>

        <p className="text-4xl text-right text-blue-100 tabular-nums slashed-zero">
          <sub>
            {operations.length ? operations.join('') : (histories.length ? "➦ " + calculate(_.last(histories)) : '')}
          </sub>
        </p>
      </div>
    </div>
  );
}

export default DisplayCP;