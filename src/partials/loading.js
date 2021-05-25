import "../css/loading.css"

function Loading() {
    return (
        <div className="loading_wrapper">
            <div className="loading_img">
                <img src="/public/img/logo-2.png" />
            </div>
            <div className="loading_wrap">
                <div class="loading"><div></div><div></div><div></div></div>
                {/* <div class="cssload-thecube">
                    <div class="cssload-cube cssload-c1"></div>
                    <div class="cssload-cube cssload-c2"></div>
                    <div class="cssload-cube cssload-c4"></div>
                    <div class="cssload-cube cssload-c3"></div>
                </div> */}
            </div>
        </div>
    )
}
export default Loading