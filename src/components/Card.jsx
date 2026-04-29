import comics from "./comics.js"

function Card() {
    let thumbReplece = null;
    comics.forEach(comic => {
        if (comic.id === 6){
            thumbReplece = comic.thumb;
        }
    });

    const cardInfoJSX = comics.map(element => {
        const { id, thumb, series } = element;
        return<div key={id} className="col-2 pt-5 ">
            <div  className="d-flex flex-column mx-3">
                <img className="img-thumb img-fluid rounded-1" src={id === 5 ? thumbReplece : thumb} alt={series} />
                <div className="flex-shrink-0">
                    <a className=" text-decoration-none text-white fs-5 fw-medium" href={`#${series}`}>{series}</a>
                </div>
            </div>
        </div>
    });



    return (
        <>
          {cardInfoJSX}
        </>
    )
}
export default Card