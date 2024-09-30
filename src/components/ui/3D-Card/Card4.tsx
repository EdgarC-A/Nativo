import { cn } from "../../../utils/cn";
import ButtonBuy from "../button/ButtonBuy";

export function Card4() {
  return (
    <section className="flex flex-col justify-around mt-20 md:flex-col lg:flex-row ">
      <div className="flex-none group/card md:mt-10">
        <div
          className={cn(
            " bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/xzzK-4BWT8aMuBHBvBeAVA)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="object-cover w-10 h-10 border-2 rounded-full"
          /> */}
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal
              </p>
              <p className="text-sm text-gray-50">Bolivar</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Granos Secos
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Para un dia soleado, echo a mano de los mejores artezanos de
              bolivar.
            </p>
            <div className="z-20">
              <ButtonBuy />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none mt-10 group/card md:mt-10 ">
        <div
          className={cn(
            " bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/ZTHOjUT_QNSbRdtzEga1Og)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="object-cover w-10 h-10 border-2 rounded-full"
          /> */}
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal
              </p>
              <p className="text-sm text-gray-50">Bolivar</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Maiz Cocechado
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Para un dia soleado, echo a mano de los mejores artezanos de
              bolivar.
            </p>
            <div className="z-20">
              <ButtonBuy />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none mt-10 group/card md:mt-10 ">
        <div
          className={cn(
            " bg-center cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
            "bg-[url(https://ideogram.ai/assets/image/lossless/response/IQzsPwjKRn209DYo7dJ7aQ)] bg-cover"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="z-10 flex flex-row items-center space-x-4">
            {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src="/manu.png"
            className="object-cover w-10 h-10 border-2 rounded-full"
          /> */}
            <div className="flex flex-col ">
              <p className="relative z-10 text-base font-normal text-gray-50">
                Cascajal
              </p>
              <p className="text-sm text-gray-50">Bolivar</p>
            </div>
          </div>
          <div className="text content">
            <h1 className="relative z-10 text-xl font-bold md:text-2xl text-gray-50">
              Maiz Asado
            </h1>
            <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
              Para un dia soleado, echo a mano de los mejores artezanos de
              bolivar.
            </p>
            <div className="z-20">
              <ButtonBuy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
