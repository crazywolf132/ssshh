import React from "react"
import "../css/footer.css"


const Footer = () => {

    return (
        <div>
            <footer class="footer_wrap_wrapper">
                <div class="footer_wrap">
                    <div id="footer_parts">
                        <a href="/">
                            <h1>Egg</h1>
                        </a>
                        <p>Telif hakkı © 2021</p>
                    </div>

                    <div id="footer_parts">
                        <li>
                            <a href="/">
                                <ul>Ana Sayfa</ul>
                            </a>
                            <a href="/guilds">
                                <ul>Dashboard</ul>
                            </a>
                        </li>
                    </div>

                    <div id="footer_parts">
                        <li>

                            <a href="/terms">
                                <ul>Şartlar</ul>
                            </a>
                            <a href="/privacy">
                                <ul>Gizlilik</ul>
                            </a>
                            <a href="/contact">
                                <ul>İletişim</ul>
                            </a>
                            <a href="/changes">
                                <ul>Değişim Kaydı</ul>
                            </a>
                        </li>

                    </div>
                    <div id="footer_parts">
                        <h1 class="signature">From StreoidVoid</h1>
                    </div>






                </div>
            </footer>
        </div>


    )

}


export default Footer