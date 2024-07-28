import GradualSpacing from './magicui/gradual-spacing'
import { motion } from 'framer-motion'
const Loading = () => {
  return (
    <motion.div className='h-screen flex justify-center items-center'

    >
      <GradualSpacing
        className="font-display text-center text-2xl font-semibold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="Hello to the world of Unishare ✨"
        duration={2}
      />
    </motion.div>
  )
}

export default Loading
