export default function RoadmapCard({
week,
topic,
learn,
resources
}) {


return (

<div className="roadmap-card">


<h2>{week}</h2>

<h3>{topic}</h3>


<h4>📚 Learn</h4>

<ul>

{learn.map((item,i)=>
<li key={i}>{item}</li>
)}

</ul>



<h4>🌐 Learn From</h4>


<div className="tags">

{resources.map((item,i)=>

<span key={i}>
{item}
</span>

)}

</div>


</div>

)

}