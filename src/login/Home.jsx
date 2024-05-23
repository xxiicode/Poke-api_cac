import React from 'react';

const Home = () => {
    const logOut = () =>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <h2 className='googleado'>Google account</h2>
            <div className='botonIng'><button className="btn btn-info" onClick={logOut}>Logout</button></div>
        </div>
    )
}
export default Home