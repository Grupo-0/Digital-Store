const Section = ({ children, title}) => {
  return (
    <div className="w-4/5">
      <div className="flex max-w-[1440px]" >
        <h2 className="pb-3 pt-1 text-black font-bold font-oswald text-3xl">{title}</h2>

      </div>
      <div> 
        { children }
      </div>
    </div>
  )
}
// text-align center justify-between w-full m-x-10 size-full

export default Section