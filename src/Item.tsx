interface ItemProps {
    title: string,
    text: string,
    img?: string
}

const Item = ({title, text, img}: ItemProps) => {
  return (
    <div className="text-start border-b-slate-600 mt-[2rem]">
          <h1 className="text-[2.2rem] borderB mb-[2rem]">{title}</h1>
            {img && <img 
        src={img} 
        alt="Фотографія Гарсіа"
        className='mb-[1rem] rounded object-contain max-w-[300px] max-h-[250px]'
         />}
          <p>{text}</p>
        </div>
  )
}

export default Item