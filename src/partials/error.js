import "../css/error.css"

function ErrPage() {

    return (
        <div className="err_container">
            <div className="top_err">
                <img src="/public/icons/404-error.svg" />

            </div>
            <div className="bottom_err">
                <h1>Aradığınız sayfa bulunamadı, <br/> ama merak etmeyin HALA HER ŞEY MÜKEMMEL!</h1>

            </div>
        </div>
    )
}


export default ErrPage