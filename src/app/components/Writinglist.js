import Writingcard from './Writingcard';
import Listtitle from './Listtitle';

export default function Writinglist({writinglist, title}) {
    return (
        <div className="m-auto w-full mb-10">
            <Listtitle title={title}/>

            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10 xs:gap-5">
                {writinglist.map((article, index) => (
                    <Writingcard key={index} project={article} />
                ))}
            </div>
        </div>
        )
}