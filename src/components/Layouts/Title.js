const Title = ({ des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      
      <h1 className="text-2xl text-gray-300 md:text-4xl font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title