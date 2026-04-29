function DettagliCard({infoCard, chiudiCard}) {
    const {title, description, thumb, price, sale_date:reliase, type} = infoCard;


  return (
    <div className="col-12" onClick={chiudiCard}>
        <img src={thumb} alt="" />
        <ul>
            <li>
                <h4>{title}</h4>
            </li>
            <li>
                <p>{description}</p>
            </li>
            <li>
                <p>{reliase}</p>
            </li>
            <li>
                <p>{type}</p>
            </li>
            <li>
                <p>{price}</p>
            </li>
        </ul>
    </div>
  )
}
export default DettagliCard