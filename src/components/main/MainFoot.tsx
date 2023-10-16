import React from "react";
function MainFoot(){
    return(
            <footer style={{backgroundColor: "#f5f7fa"}} className="mt-auto">
                <ul className="nav justify-content-center border-bottom pb-2 pt-4 mb-3 mt-5">
                    <li className="nav-item mx-3 text-muted">
                        <p>Telefono: Mty +52 (81) 8351 3861 y (81) 8351 3862</p>
                    </li>
                    <li className="nav-item mx-3 text-muted">
                        <p>Email: contacto@sismex.com</p>
                    </li>
                </ul>
                <p className="text-center text-muted pb-3">© SISMEX | Derechos Reservados</p>
            </footer>
    );
}
export default MainFoot