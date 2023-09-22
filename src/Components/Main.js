
function Main({name, position, city}){
    return(
        <div>
            <img src="/images/h1.jpg" alt="myImage" />
            <div>
                <h1>{name}</h1>
                <p>
                    <span>{city}</span>
                    <span>{position}</span>
                </p>
            </div>
        </div>
        
            
    );       
}
export default Main;