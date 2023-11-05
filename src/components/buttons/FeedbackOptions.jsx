export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
      ))}
    </>
  );
}


