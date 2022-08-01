import GoodsItem from "./GoodsItem";


function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    } else {
        return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
    }
    
}

export default GoodsList;