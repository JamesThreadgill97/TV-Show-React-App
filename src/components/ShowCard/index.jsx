export default function ShowCard({show}) {
    return (
      <div className="show-card">
        <div><img src={show.image.original}/></div>
        <div>
          <div>Rating: {show.rating.average}/10</div>
          <h2>{show.name}</h2>
          <em>{show.language}, {show.premiered}</em>
          <div  dangerouslySetInnerHTML={{__html: show.summary}}/>
        </div>
      </div>
    );
  }
