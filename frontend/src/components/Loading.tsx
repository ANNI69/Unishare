import GradualSpacing from './magicui/gradual-spacing'
const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'
     
    >
      <GradualSpacing
        className="font-display text-center text-2xl font-semibold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="Hello to the world of Unishare ✨"
        duration={2}
      />
    </div>
  )
}

export default Loading
