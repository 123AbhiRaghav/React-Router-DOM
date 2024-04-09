import Card from './Card'

const Carrer = ({data}) => {
    const Carrer = data.filter((item) => item.head === "Carrer")
  return(
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
            {Carrer.map((item,index) => {
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
export default Carrer;