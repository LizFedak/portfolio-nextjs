import Writingcard from './Writingcard';
import Listtitle from './Listtitle';

export default function Writinglist({writinglist, title}) {
    return (
        <div className="m-auto bg-white w-full mb-10">
            <Listtitle title={title}/>

            <div className="grid grid-cols-2 gap-10">
                {writinglist.map((article, index) => (
                    <Writingcard key={index} project={article} />
                ))}
            </div>
        </div>
        )
}