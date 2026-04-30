import footerInfoListEl from "../../data/infoList";

function FooterInfoList() {
    

    const infoListJSX = footerInfoListEl.map(element => {
        const { id, category, links } = element;
        return <ul key={id} className="text-white list-unstyled px-2 mx-3">
            <h4>{category.toUpperCase()}</h4>
            {links.map(link => {
                const { id, title } = link;
                return <li key={id}>
                    <a href="#" className="text-decoration-none text-white-50">{title}</a>
                </li>
            })}
        </ul>
    })

    return <>
    <div className="row ">
        <div className="col-6 d-flex flex-wrap flex-column align-content-start pt-5 col-h">
            {infoListJSX}
        </div>
    </div>
    </>
}

export default FooterInfoList