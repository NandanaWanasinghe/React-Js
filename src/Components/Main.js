
function Main({name, position, city, image}){
    return(
        <div>
            <img src={image?`${image}`:"https://media.istockphoto.com/id/505221662/photo/elephants-in-river.jpg?s=612x612&w=0&k=20&c=pd0-eIKu1knUVrwVJRqfIK8t_aFqSk6vnxnuZLFGvh4="} alt="myImage" />
            <div className="Main-details">
                <h1>{name}</h1>
                
                <span>{city}</span>
                <span>{position}</span>
                
            </div>
        </div>
        
            
    );       
}
export default Main;