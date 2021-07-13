import { motion } from 'framer-motion'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

const Index = () => {
  return (
    <>
      <motion.div
        variants={imageVariants}
        className='single'
        initial='exit'
        animate='enter'
        exit='exit'
      >
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          orci lectus. Aliquam sed consequat tellus, et rhoncus felis. Duis
          justo risus, egestas vitae consequat id, faucibus eu ante. Morbi
          tristique, leo eget laoreet sollicitudin, leo massa efficitur dui, a
          lacinia nisi turpis vel nisi. Etiam pellentesque diam quam, luctus
          consequat nisi eleifend vel. Vivamus commodo metus ut auctor molestie.
          In erat turpis, imperdiet et ex non, luctus maximus augue. Suspendisse
          placerat tempus libero sit amet pretium. Sed tincidunt velit eget
          porta varius. Nunc sed vestibulum nibh. Quisque et elit ex. Donec
          venenatis id ante non iaculis. Etiam eget pretium ante, vitae aliquam
          metus.
        </p>

        <p>
          Maecenas mattis enim eget fringilla molestie. Etiam laoreet orci non
          purus dapibus, non egestas purus suscipit. Vivamus in turpis metus.
          Vivamus elementum pellentesque dolor, in condimentum felis viverra at.
          In quis est id sem pellentesque convallis. Quisque in aliquet arcu,
          quis pretium sem. Sed eget velit sagittis, pharetra tellus egestas,
          mollis lectus. Pellentesque pharetra pellentesque accumsan. Mauris
          egestas enim et ultrices laoreet. Mauris eget vestibulum ipsum.
          Pellentesque interdum turpis dignissim neque semper, eu ultricies
          justo mattis. Pellentesque arcu velit, volutpat consequat tempus
          vitae, convallis et elit. Pellentesque convallis mauris erat.
        </p>

        <p>
          Nulla tellus lorem, luctus nec tincidunt ut, sollicitudin sit amet
          lacus. Nulla ultricies, urna sit amet tristique scelerisque, leo diam
          egestas leo, ut tempor felis nisi id mauris. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Praesent a sodales nulla. Integer neque tellus, tempor eget ultricies
          ac, luctus varius elit. Ut sit amet ligula id purus cursus accumsan ut
          sed leo. In tempor, lorem vel fermentum consequat, tellus lacus
          pretium tellus, sit amet semper erat dui sit amet neque. Sed
          vestibulum luctus odio eu bibendum. In justo lectus, elementum ut
          molestie ac, iaculis ut ex. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Donec lacinia
          condimentum leo eget tempus. Donec iaculis urna tristique egestas
          sagittis.
        </p>
      </motion.div>
    </>
  )
}
export default Index
