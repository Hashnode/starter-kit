import { HTMLMotionProps, motion } from 'framer-motion'

export default function SplitText({ text, ...rest }: HTMLMotionProps<"div"> & {
    text: string
  }) {
    let words = text.split(' ')
    return words.map((word, i) => {
      return (
        <div
          key={text + i}
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          <motion.div
            {...rest}
            style={{ display: 'inline-block', willChange: 'transform' }}
            custom={i}
            dangerouslySetInnerHTML={{ __html: word + (i !== words.length - 1 ? '\u00A0' : '') }}
          >
          </motion.div>
        </div>
      )
    })
  }