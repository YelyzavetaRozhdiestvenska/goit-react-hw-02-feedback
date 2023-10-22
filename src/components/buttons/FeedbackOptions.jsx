

export function FeedbackOptions({handleState}) {
    return ( 
    <>
    <button onClick={() => handleState("good")}>Good</button>
    <button onClick={() => handleState("neutral")}>Neutral</button>
    <button onClick={() => handleState("bad")}>Bad</button>
    </>
    )
}


// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>