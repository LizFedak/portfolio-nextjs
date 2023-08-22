import Customcard from './Customproductcard';
import Listtitle from './Listtitle';

export default function Productlist({list, title}) {
    return (
        <div className="bg-white">
        <Listtitle title={title}/>

        <div className="grid grid-cols-1 gap-10">
            {list.map((article, index) => (
            <Customcard key={index} project={article} />
            ))}
        </div>
      </div>
    )
}