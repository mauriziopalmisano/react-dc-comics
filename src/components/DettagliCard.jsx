function DettagliCard({infoCard, chiudiCard}) {
    const {title, description, thumb, price, sale_date:reliase, type} = infoCard;


  return (
    <div className="col-12 position-relative d-flex my-5">
        <button className="btn btn-outline-primary position-absolute close-btn-position rounded-0 fw-bold border-3" onClick={chiudiCard}>X</button>
        <img className="img-detail" src={thumb} alt="" />
        <ul>
            <li className="mb-4">
                <h4 className="text-white">{title}</h4>
            </li>
            <li>
                <span className="text-white fw-bold fs-5">Description</span>
                <p className="text-white fs-5">{description}</p>
            </li>
            <li>
                <span className="text-white fw-bold fs-5">Reliase Date</span>
                <p className="text-white fs-4\">{reliase}</p>
            </li>
            <li>
                <span className="text-white fw-bold fs-5">Type</span>
                <p className="text-white fs-5">{type}</p>
            </li>
            <li>
                <span className="text-white fw-bold fs-5">Price</span>
                <p className="text-white fs-4">{price}</p>
            </li>
        </ul>
    </div>
  )
}
export default DettagliCard