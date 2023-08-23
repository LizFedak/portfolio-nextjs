import Customcard from './Customcard';
import Listtitle from './Listtitle';

export default function Cardlist({list, title}) {
    return (
        <div className="">
        <Listtitle title={title}/>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
            {list.map((article, index) => (
            <Customcard key={index} project={article} />
            ))}
        </div>
      </div>
    )
}