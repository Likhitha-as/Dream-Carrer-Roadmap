export default function QuestionCard({
  question,
  options,
  onSelect
}) {
  return (
    <div className="card">

      <h2>{question}</h2>

      {options.map((option, index) => (

        <button
          key={index}
          onClick={() => onSelect(index)}
          style={{
            width: "100%",
            marginTop: "15px"
          }}
        >
          {option}
        </button>

      ))}

    </div>
  );
}