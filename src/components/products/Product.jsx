import React from 'react'
import RolanCard from '../cards/RolanCard'
import { FaGasPump, FaOilCan } from 'react-icons/fa'
import {GiJerrycan} from 'react-icons/gi'
import ProductsCard from './ProductsCard'
import imageO6 from '../../assets/images/rolantek_img06.jpg'
import Product2 from './Product2'

function Product() {
    return (
        <div>
        <div className='mt-8 bg-slate-950 mb-3 m-auto rounded-tr-[80px] w-[95%]'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 px-[10px] gap- py-5'>
                 <div className='w-full b-green-600 '>
                 <div className='pl-12 hidden lg:block'>
                    <h1 className='font-bold text-orange-400 text-lg mt-8'>OUR PRODUCTS</h1>
                    <h2 className="text-3xl font-bold text-white">Quinetessential lifestyle <br />  sparked by innovation</h2>
                      <div className='mt-8 w-full'>
                      <RolanCard image={imageO6} width={24} />
                      </div>
                      
                    </div>

                    <Product2 />
                    
                 </div>

                 <div className='w-full b-yellow-500 text-white py-1 my-12'>
                   <ProductsCard
                    icon={FaGasPump} 
                    title='Petroleum' 
                    des='Premium petrol that offers exceptional engine performance efficiency
                        and reduced emissions, catering to both power enthusiasts and 
                        eco-conscious drivers'
                         />
                         <div className='-mt-8'>
                         <ProductsCard 
                    icon={GiJerrycan} 
                    title='Diesel'
                    des='Standing for power and efficiency, Our diesel ensures optimal performance and 
                    extended engine life,making it the prefered choice for diverse vehicles' 
                    />
                         </div>
                    <div className='-mt-6'>
                    <ProductsCard 
                    icon={FaOilCan} 
                    title='Liquidified Petroleum Gas (LPG)'
                    des='Experience the convenience and eco-friendliness of our clean burning LPG
                    ,ideal for cooking, heating, or as a cost-effective alternative fuel' 
                    />
                    </div>
                    <div className='-mt-6'>
                    <ProductsCard 
                    icon={GiJerrycan} 
                    title='Lubricants'
                    des='Our high-performance lubricants protect machinery and engines, reducing friction
                    and extending the life span of the machines for peak operational performance' 
                    />
                      </div>
                     
                    
                     

                   {/* <ProductsCard />
                   <ProductsCard /> */} 
                 </div>
            </div>
        </div>
        </div>
    )
}

export default Product
