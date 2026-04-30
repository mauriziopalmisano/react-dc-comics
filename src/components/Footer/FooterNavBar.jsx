function FooterNavBar (){
    const navbarFooterEl = [
        {
            id: 1,
            url: '/img/buy-comics-digital-comics.png',
            title: 'Digital Comics'
        },
        {
            id: 2,
            url: '/img/buy-comics-merchandise.png',
            title: 'DC merchandise'
        },
        {
            id: 3,
            url: '/img/buy-comics-subscriptions.png',
            title: 'subscriptions'
        },
        {
            id: 4,
            url: '/img/buy-comics-shop-locator.png',
            title: 'Comics Shop locator'
        },
        {
            id: 5,
            url: '/img/buy-dc-power-visa.svg',
            title: 'DC Power Visa'
        }
    ]


    const navbarFooterListItem = navbarFooterEl.map(element => {
        const {id, url, title} = element;
        return <div key={id} className="col d-flex align-items-center footer-navbar ">
                    <img className="footer-navbar-img" src={url} alt={title} />
                <a className="text-white text-decoration-none text-nowrap p-2" href={`#${title}`}>{title.toUpperCase()}</a>
            </div>
    })

    return <div className="row row-cols-5 ">
            {navbarFooterListItem}
    </div>
    
}

export default FooterNavBar