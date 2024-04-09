import Card from './Card'

const Cyber = ({data}) => {
    const Cyber = data.filter((item) => item.head === "Cyber")
  return(
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
            {Cyber.map((item,index) => {
                return(
                    <>
                    <Card key = {index} item={item} />
                    </>
                )
            })}
        </div>
    </div>
  );
}; 
export default Cyber;