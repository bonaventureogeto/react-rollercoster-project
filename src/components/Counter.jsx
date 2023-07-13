const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

          {/* {count > 10 ? <h2>Wow! You are becoming kind of a big deal in your buble</h2> : <h2>You are not famous!</h2>} */}
          
          {/* {count < 1 && <h2>Just QUIT social media!</h2>} */}
    </>
  );
};

export default Counter