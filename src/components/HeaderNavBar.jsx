function HeaderNavBar() {
    const navbarHeaderEl = [
        {
            id: 1,
            title: 'Characters'
        },
        {
            id: 2,
            title: 'Comics'
        },
        {
            id: 3,
            title: 'Movies'
        },
        {
            id: 4,
            title: 'Tv'
        },
        {
            id: 5,
            title: 'Games'
        },
        {
            id: 6,
            title: 'Collectibles'
        },
        {
            id: 7,
            title: 'Videos'
        },
        {
            id: 8,
            title: 'Fans'
        },
        {
            id: 9,
            title: 'News'
        },
        {
            id: 10,
            title: 'Shop'
        }
    ];

    const navbarListItems = navbarHeaderEl.map(element => {
        const {id, title} = element;

        return <li key={id} className="d-flex mx-3 navbar-line align-items-center">
                <a className="text-decoration-none color-black text-style" href={`#${title}`}>{title.toUpperCase()}</a>
            </li>
    })

    

    return <>
        <ul className="col d-flex justify-content-center">
            {navbarListItems}
        </ul>
    </>
}

export default HeaderNavBar