import Card from './Card'

const FullStack = ({data}) => {
    const FullStack = data.filter((item) => item.head === "FullStack")
  return(
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
            {FullStack.map((item,index) => {
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
export default FullStack;