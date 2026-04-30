import Card from "./CardsList"

function Main() {
    return <>
        <main className="row bg-dark ">
            <Card />
            <div className="col-12 d-flex justify-content-center py-4">
                <button className="btn rounded-0 btn-primary fs-5 fw-medium">Load More</button>
            </div>
        </main>
    </>
}


export default Main