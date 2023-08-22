import Writingcard from './Writingcard';
import Listtitle from './Listtitle';

export default function Writinglist({writinglist, title}) {
    return (
        <div className="m-auto bg-white">
        <Listtitle title={title}/>

        <div className="grid grid-cols-2 gap-10 mx-20">
            {writinglist.map((article, index) => (
                <Writingcard key={index} project={article} />
            ))}
        </div>
      </div>
    )
}