import propTypes from 'prop-types';

const Greeting = (props) => {
    function handleButtonClick() {
        alert('Klikki');
    }
    return (
    <>
    <h1>Hello, {props.name}!</h1>
    <p>Miten menee?</p>
    <button onClick={handleButtonClick}>nappi</button>
    </>
    );
  };

  Greeting.propTypes= {
    name: propTypes.string.isRequired,
  }

export default Greeting;