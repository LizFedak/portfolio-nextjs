export default function Listtitle({title}) {
  return (
    <div className="w-full md:justify-end flex lg:justify-end my-">
      <div id={title} className="text-black w-full sm:text-2xl md:text-3xl lg:text-4xl md:text-right sm:text-center">{title}</div>
    </div>
  )
}