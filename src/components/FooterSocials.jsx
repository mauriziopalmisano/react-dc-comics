function FooterSocials() {
    const socialsEl = [
        {
            id: 1,
            url: '/img/footer-facebook.png'
        },
        {
            id: 2,
            url: 'img/footer-twitter.png'
        },
        {
            id: 1,
            url: '/img/footer-youtube.png'
        },
        {
            id: 1,
            url: '/img/footer-pinterest.png'
        },
        {
            id: 1,
            url: '/img/footer-periscope.png'
        }
    ]

    const socialsJSX = socialsEl.map(element => {
        const {id, url} = element;
        return <a key={id} href="#">
                    <img src={url} alt="" />
                </a>
    })


    return <>
        <div className="col-12 d-flex justify-content-between footer-socials bg-dark align-items-center px-5">
            <div>
                <button className="btn btn-outline-primary rounded-0 text-white border-3 fs-5 p-3 fw-bold">SIGN-UP NOW!</button>
            </div>
            <div className="d-flex justify-content-evenly  align-items-center gap-3">
                <span className="text-primary fs-3 fw-bold">FOLLOW US</span>
                {socialsJSX}
            </div>
        </div>
    </>
}


export default FooterSocials