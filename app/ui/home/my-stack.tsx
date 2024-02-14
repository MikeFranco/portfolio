import clsx from "clsx";
import { myStack } from "../../lib/data"
import Image from 'next/image';

const MyStack = () => {
  return (
    <div className="flex flex-col text-center pt-10">
      <p className="text-4xl py-8">My Stack</p>
      <div className="flex flex-row justify-evenly gap-24">
        {myStack.map((stack, index) =>
          <div key={`${stack.header} - ${index}`}>
            <p className="border-x-2 px-4">
              {stack.header}
            </p>
            <ul className="justify-start text-center mt-5">
              {stack.items.map((item, itemIndex) =>
                <div key={`${stack.header}-${index}-${itemIndex}`} className={clsx('flex flex-row p-3', {
                  'border-t-2 border-t-gradient-1': itemIndex !== stack.items.length - 1,
                  'border-y-2 border-y-gradient-1': itemIndex === stack.items.length - 1
                })}>
                  <Image className="mr-2" src={item.icon} width={20} height={20} alt={item.name} />
                  <li > {item.name}</li>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>)
}

export default MyStack