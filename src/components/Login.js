import React from 'react';
import { useNavigate , Link } from 'react-router-dom';

function login()
{
    const navigate = useNavigate();
    const clickbtn = () => navigate("/sistema/datos");

    return (
        <div className="width20">
            <div className="padding2">
                <span className="material-icons icon-session">person_pin</span>
                <form>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Contraseña"/>
                    </div>
                    <button type="button" className="btn btn-info" onClick={clickbtn}>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
            <div className="forget">
                <Link to="/restore">¿Has olvidado tu contraseña?</Link>
                {/* <a onClick={ () => navigate('restore') }>¿Has olvidado tu contraseña?</a> */}
            </div>
        </div>
    )
}

export default login;