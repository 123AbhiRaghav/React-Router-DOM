import Card from './Card'

const All = ({data}) => {
  const All = data.filter((item) => item.head === "All")
  return(
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
            {All.map((item,index) => {
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
export default All;