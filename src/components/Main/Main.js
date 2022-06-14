import blip from '../../img/blip.png';
import './Main.css';

function Main(props) {
  return (
    <main>
      <div className='main--card'>
        <img className='places--img' src={props.imageUrl} alt='img' />
        <div className='info--container'>
          <img className='blip--img' src={blip} alt='' />
          <span className='country--name'>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
          <h2>{props.title}</h2>
          <span className='span--date'>
            {props.startDate} - {props.endDate}
          </span>
          <p>{props.description}</p>
        </div>
        <div className='border'></div>
      </div>
    </main>
  );
}
export default Main;
