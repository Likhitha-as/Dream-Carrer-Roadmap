function ScoreCard({ score, level }) {

  return (
    <div className="card" style={{textAlign:"center"}}>

      <h2>Your Assessment Result</h2>

      <h1 style={{fontSize:"60px"}}>
        {score}%
      </h1>

      <h3>
        Level: {level}
      </h3>

    </div>
  );
}

export default ScoreCard;