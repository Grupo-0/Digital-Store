const Section = ({ children, title, options}) => {
  return (
    <>
    <div>
      <h2 className="pb-3 pt-1 text-black font-bold font-oswald text-3xl ml-3">{title}</h2>
      <h3>{ options }</h3>
    </div>
    <div>
      { children }
    </div>
    </>
  )
}

export default Section