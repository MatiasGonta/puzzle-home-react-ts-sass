import { TimerContext } from '@/context';
import { Image } from '@/models';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export interface PuzzleSuccessMessageInterface {
  props: Image;
  onPuzzleReset: ()=> void;
}

const PuzzleSuccessMessage: React.FC<PuzzleSuccessMessageInterface> = ({ props, onPuzzleReset }) => {
  const { seconds, minutes, hours, handleResetTimer, handleStopTimer } = useContext(TimerContext);

  const handleOnClick = () => {
    onPuzzleReset();
    handleResetTimer();
  }

  return (
    <div className="success-message" onLoad={handleStopTimer}>
      <h4>Congratulations, you completed the puzzle!</h4>
      <div className="separator"></div>
      <img src={props.src} alt={props.alt} />
      <div className="separator"></div>
      <div id="success-time">
        <p>Your Time</p>
        <span>{`${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`}</span>
      </div>
      <div>
        <Link to='/'>
          <button onClick={handleOnClick}>Next Puzzle</button>
        </Link>
        <button onClick={handleOnClick}>Restart Puzzle</button>
      </div>
    </div>
  );
}

export default PuzzleSuccessMessage