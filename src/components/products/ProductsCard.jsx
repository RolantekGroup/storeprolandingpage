import React from 'react'
import { FaGasPump, FaOilCan } from 'react-icons/fa'

function ProductsCard({icon:Icon, title, des}) {
    return (
        <div>
             <div className='flex flex-row gap-4 pt-16 pb-6 border-b-[1px] border-gray-500'>
                        <span className='bannerIcon'>
                        <Icon />
                        </span>
                        <div>
                            <h1 className='font-bold text-xl'>{title}</h1>
                            <p className='text-sm leading-1'>{des}</p>
                        </div>
                    </div>
        </div>
    )
}

export default ProductsCard
