import clsx from "clsx";
import { myStack } from "../../lib/data"
import Image from 'next/image';

const MyStack = () => {
  return myStack.map((stack) =>
    <div>
      <p className="border-x-2 px-4">
        {stack.header}
      </p>
      <ul className="justify-start text-center mt-5">
        {stack.items.map((item, index) =>
          <div className={clsx('flex flex-row p-3', {
            'border-t-2 border-t-gradient-1': index !== stack.items.length - 1,
            'border-y-2 border-y-gradient-1': index === stack.items.length - 1
          })}>
            <Image className="mr-2" src={item.icon} width={20} height={20} alt={item.name} />
            <li > {item.name}</li>
          </div>
        )}
      </ul>
    </div>
  )
}

export default MyStack