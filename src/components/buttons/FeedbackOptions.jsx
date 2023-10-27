

export default function FeedbackOptions({options, onLeaveFeedback}) {
    return ( 
    <>
    {options.map(option => <button onClick={() => onLeaveFeedback(option)}>{option}</button>)}
    </>
    )
}


// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>