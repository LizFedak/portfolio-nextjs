import Writingcard from './Writingcard';
import Listtitle from './Listtitle';

export default function Writinglist({writinglist, title}) {
    return (
        <div className="m-auto w-full mb-10">
            <Listtitle title={title}/>

            <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10 xs:gap-5">
                {writinglist.map((article, index) => (
                    <Writingcard key={index} project={article} />
                ))}
            </div>
        </div>
        )
}