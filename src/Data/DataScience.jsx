import Card from './Card'

const DataScience = ({data}) => {
    const DataScience = data.filter((item) => item.head === "DataScience")
  return(
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
            {DataScience.map((item,index) => {
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
export default DataScience;