
const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div>
                <input 
                        type='button' 
                        value={`Show products`}
                        className='btn btn-block'/>
                </div>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage