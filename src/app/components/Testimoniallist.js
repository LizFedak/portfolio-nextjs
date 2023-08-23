import Testimonialcard from './Testimonialcard';
import Listtitle from './Listtitle';

export default function Testimoniallist({list, title}) {
    return (
        <div className="mb-5">
        <Listtitle title={title}/>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-10">
            {list.map((testimonial, index) => (
            <Testimonialcard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    )
}