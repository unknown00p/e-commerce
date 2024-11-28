import image1 from "../assets/image1.jpg"
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.jpg'
import image16 from '../assets/image16.jpg'
import image17 from '../assets/image17.jpg'
import image18 from '../assets/image18.jpg'
import image19 from '../assets/image19.jpg'
import image20 from '../assets/image20.jpg'
import image21 from '../assets/image21.jpg'
import image22 from '../assets/image22.jpg'
import image23 from '../assets/image23.jpg'
import hero from '../assets/hero.jpg'
import image1bg_removed from '../assets/image1bg-removed.png'
import image2bg_removed from '../assets/image2bg-removed.png'
import Slider from 'react-slick'
import ContactForm from "../components/ContactUs"

function Home() {

    const featuredProductsFirstRow = [
        {
            producImage: image12,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image11,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image23,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image14,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
    ]

    const featuredProductsSecondRow = [
        {
            producImage: image15,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image16,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image17,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            imageClasses: 'h-[387px] w-full',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
        {
            producImage: image18,
            productName: 'Graphic Design',
            productDesc: 'English Department',
            productPriceOff: '$16.48',
            productPrice: '$6.48',
            productColor: [
                '#23A6F0',
                '#23856D',
                '#E77C40',
                '#252B42',
            ]
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='pt-20'>
            <main>
                <div className='hero1 bg-[#000000c0] bg-cover bg-no-repeat mx-auto'>
                    <div className='flex flex-col md:py-[112px] sm:justify-center items-center sm:items-start w-full lg:w-[60%] sm:w-[70%] mx-auto min-h-screen gap-4 sm:px-0 px-16 pt-9 sm:pt-0 text-[#ffffff] sm:pb-0 pb-3'>

                        <h3 className='sm:text-sm text-[16px] font-bold'>Winter 2024</h3>
                        <h1 className='sm:text-[58px] text-[40px] poppins-bold text-center'>NEW COLLECTION</h1>
                        <h4 className='sm:text-sm text-[20px] poppins-regular text-center'>We know how large objects will act, but things on a small scale...</h4>
                        <button className='transition duration-300 px-[40px] py-[15px] text-[24px] font-bold bg-[#5a791f] text-white hover:bg-[#0000] hover:border-2 border-2 border-[#5a791f] hover:border-[#5a791f]'>Shop now</button>

                    </div>
                </div>
            </main>

            <div className='max-w-[1124px] my-[80px] md:w-full mx-auto w-[325px] md:px-10 lg:px-0'>
                <div className='flex flex-col items-center gap-[10px]'>
                    <p className='text-[20px] text-[#737373]'>Featured Products</p>
                    <p className='text-[24px] font-bold text-[#252B42]'>BESTSELLER PRODUCTS</p>
                    <p className='text-sm text-[#737373]'>Problems trying to resolve the conflict between </p>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] sm:mt-20 mt-12'>
                        {
                            featuredProductsFirstRow.map((product, index) => (
                                <div className="bg-[#ffff] p-1" key={index}>
                                    <img className="h-96 w-full object-cover" src={product.producImage} alt="" />
                                    <div className='flex flex-col justify-center items-center gap-[10px] py-6 pt-6 pb-9'>
                                        <h5 className='text-[#252B42] text-lg poppins-bold '>{product.productName}</h5>
                                        <div className='flex gap-1 px-[3px] py-[5px]'>
                                            <h5 className='text-base font-bold text-[#BDBDBD] line-through'>{product.productPriceOff}</h5>
                                            <h5 className='text-base font-bold text-[#23856D]'>{product.productPrice}</h5>
                                        </div>
                                        <div className='flex gap-[6px]'>
                                            <button className='transition duration-300 px-10 py-2 border-[1.4px] border-[#424141] hover:bg-[#5a791f] hover:border-[#5a791f] hover:text-white'>ADD CART</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* <div className='hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] sm:mt-20'>
                        {
                            featuredProductsSecondRow.map((product, index) => (
                                <div key={index}>
                                    <img className={`${product.imageClasses}`} src={product.producImage} alt="" />
                                    <div className='flex flex-col justify-center items-center gap-[10px] py-6 pt-6 pb-9'>
                                        <h5 className='text-[#252B42] text-lg font-bold'>{product.productName}</h5>
                                        <p className='text-base font-bold text-[#737373]'>{product.productDesc}</p>
                                        <div className='flex gap-1 px-[3px] py-[5px]'>
                                            <h5 className='text-base font-bold text-[#BDBDBD] line-through'>{product.productPriceOff}</h5>
                                            <h5 className='text-base font-bold text-[#23856D]'>{product.productPrice}</h5>
                                        </div>
                                        <div className='flex gap-[6px]'>
                                            {
                                                product.productColor.map((code, index) => (
                                                    <button key={index} style={{ backgroundColor: code }} className="w-4 h-4 rounded-full"></button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}

                </div>
            </div>

            <div className='bg-[#852691] -z-10 sm:max-w-[1440px] sm:w-full max-w-[450px] overflow-hidden'>
                <div className='max-w-[1036px] w-full m-auto cursor-pointer'>
                    {/* <Slider
                        {...settings}
                    >

                        <div className='sm:!flex items-center'>
                            <div className='p-16 text-white flex flex-col gap-8'>
                                <h4 className='text-xl text-start'>SUMMER 2020</h4>
                                <h1 className='text-[58px] font-bold text-start'>Vita Classic Product</h1>
                                <p className='text-sm text-start'>We know how large objects will act, We know how are objects will act, We know</p>
                                <div className='flex items-center text-start gap-[34px]'>
                                    <h3 className='font-bold text-2xl'>$16.48</h3>
                                    <button className='font-bold text-sm px-10 py-4 bg-[#2DC071]'>ADD TO CART</button>
                                </div>
                            </div>

                            <div>
                                <img className='max-w-[510px] max-h-[685px]' src={hero} alt="" />
                            </div>
                        </div>


                        <div className='sm:!flex items-center'>
                            <div className='p-16 text-white flex flex-col gap-8'>
                                <h4 className='text-xl text-start'>SUMMER 2020</h4>
                                <h1 className='text-[58px] font-bold text-start'>Vita Classic Product</h1>
                                <p className='text-sm text-start'>We know how large objects will act, We know how are objects will act, We know</p>
                                <div className='flex items-center text-start gap-[34px]'>
                                    <h3 className='font-bold text-2xl'>$16.48</h3>
                                    <button className='font-bold text-sm px-10 py-4 bg-[#2DC071]'>ADD TO CART</button>
                                </div>
                            </div>

                            <div>
                                <img className='max-w-[510px] max-h-[685px]' src={image1bg_removed} alt="" />
                            </div>
                        </div>

                    </Slider> */}
                </div>
            </div>

            <div className='max-w-[1124px] md:w-full w-[325px] sm:flex mx-auto gap-7 bg-[#ffffff] items-center mt-5'>
                <div>
                    <img className='max-w-[704px] w-full' src={image1} alt="" />
                </div>
                <div className=''>
                    <h5 className='text-base font-bold text-[#BDBDBD] sm:text-start text-center'>SUMMER 2020</h5>
                    <h2 className='text-[40px] font-bold text-[#252B42] mt-[30px] sm:text-start text-center'>Part of the Neural Universe</h2>
                    <h4 className='text-xl text-[#737373] mt-[30px] sm:text-start text-center'>We know how large objects will act,
                        but things on a small scale.</h4>
                    <div className='flex gap-[10px] mt-[30px] sm:text-start text-center'>
                        <button className='px-10 py-4 bg-[#5a791f] text-sm font-bold text-white'>BUY NOW</button>
                        <button className='text-[#5a791f] px-10 py-4 text-sm font-bold border-[1px] border-[#5a791f]'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-20 max-w-[1050px] m-auto sm:py-20 py-28'>
                <div>
                    <h6 className='text-[#23A6F0] text-sm font-bold text-center'>Practice Advice</h6>
                    <h2 className='text-[#252B42] text-[40px] font-bold mt-[10px] text-center'>Featured Posts</h2>
                    <p className='text-[#737373] text-sm mt-[10px] text-center max-w-[463px] mx-auto'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
                    <div className='sm:w-full max-w-[328px] mx-auto bg-[#fff]'>
                        <img className='max-h-[300px] w-full h-full' src={image20} alt="" />
                        <div className='flex flex-col gap-[10px] px-6 pt-6 pb-9 shadow-md'>
                            <div className='flex gap-4 text-sm'>
                                <p className='text-[#8EC2F2]'>Google</p>
                                <p className='text-[#737373]'>Trending</p>
                                <p className='text-[#737373]'>New</p>
                            </div>

                            <h1 className='max-w-[247px] text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h1>
                            <p className='max-w-[280px] text-sm text-[#737373]'>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className='flex gap-[5px] justify-between'>
                                <div className='flex items-center gap-[5px]'>
                                    <img src="alarm.svg" alt="" />
                                    <p className='text-xs text-[#737373]'>22 April 2021</p>
                                </div>

                                <div className='flex items-center gap-[5px]'>
                                    <img src="chart.svg" alt="" />
                                    <p>10 comments</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-[10px]'>
                                <h1 className='text-sm font-bold text-[#737373]'>Learn More</h1>
                                <img className='' src="chevronRight.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='sm:w-full max-w-[328px] mx-auto bg-[#fff]'>
                        <img className='max-h-[300px] w-full h-full' src={image21} alt="" />
                        <div className='flex flex-col gap-[10px] px-6 pt-6 pb-9 shadow-md'>
                            <div className='flex gap-4 text-sm'>
                                <p className='text-[#8EC2F2]'>Google</p>
                                <p className='text-[#737373]'>Trending</p>
                                <p className='text-[#737373]'>New</p>
                            </div>

                            <h1 className='max-w-[247px] text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h1>
                            <p className='max-w-[280px] text-sm text-[#737373]'>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className='flex gap-[5px] justify-between'>
                                <div className='flex items-center gap-[5px]'>
                                    <img src="alarm.svg" alt="" />
                                    <p className='text-xs text-[#737373]'>22 April 2021</p>
                                </div>

                                <div className='flex items-center gap-[5px]'>
                                    <img src="chart.svg" alt="" />
                                    <p>10 comments</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-[10px]'>
                                <h1 className='text-sm font-bold text-[#737373]'>Learn More</h1>
                                <img className='' src="chevronRight.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='sm:w-full max-w-[328px] mx-auto bg-[#fff]'>
                        <img className='max-h-[300px] w-full h-full' src={image22} alt="" />
                        <div className='flex flex-col gap-[10px] px-6 pt-6 pb-9 shadow-md'>
                            <div className='flex gap-4 text-sm'>
                                <p className='text-[#8EC2F2]'>Google</p>
                                <p className='text-[#737373]'>Trending</p>
                                <p className='text-[#737373]'>New</p>
                            </div>

                            <h1 className='max-w-[247px] text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h1>
                            <p className='max-w-[280px] text-sm text-[#737373]'>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.
                            </p>

                            <div className='flex gap-[5px] justify-between'>
                                <div className='flex items-center gap-[5px]'>
                                    <img src="alarm.svg" alt="" />
                                    <p className='text-xs text-[#737373]'>22 April 2021</p>
                                </div>

                                <div className='flex items-center gap-[5px]'>
                                    <img src="chart.svg" alt="" />
                                    <p>10 comments</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-[10px]'>
                                <h1 className='text-sm font-bold text-[#737373]'>Learn More</h1>
                                <img className='' src="chevronRight.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm/>
        </div>
    )
}

export default Home

{/* <div className='my-[80px] max-w-[1124px] md:w-full w-[325px] m-auto md:px-10 lg:px-0'>
                <div>
                    <p className='text-[24px] font-bold text-[#252B42] text-center'>EDITOR'S PICK</p>
                    <p className='text-sm text-[#737373] text-center'>
                        Problems trying to resolve
                        the conflict between
                    </p>
                </div>

                <div className='mt-[48px] sm:flex'>

                    <div className='bg-image8 w-full relative bg-cover items-center h-[500px] z-[0]'>
                        <button className='ml-[-1px] absolute bottom-[21px] w-[170px] h-[48px] bg-white font-semibold text-lg'>MEN</button>
                    </div>

                    <div className='bg-image6 w-full sm:w-[510px] relative bg-cover bg-center mt-[30px] sm:mt-[0px] items-center h-[500px] sm:ml-[30px] ml[0px] z-[0]'>
                        <button className='ml-[-1px] absolute bottom-[21px] lg:w-[170px] w-[170px] md:w-28 h-[48px] bg-white font-semibold text-lg'>WOMEN</button>
                    </div>

                    <div className='sm:ml-[30px] ml-0 z-[0]'>
                        <div className='bg-image4 w-full sm:w-[240px] relative bg-cover bg-center mt-[30px] sm:mt-[0px] items-center h-[242px]'>
                            <button className='ml-[-1px] absolute bottom-[21px] w-[170px] h-[48px] bg-white font-semibold text-lg'>KID</button>
                        </div>

                        <div className='bg-image9 w-full sm:w-[240px] relative bg-cover bg-center mt-[30px] sm:mt-[16px] items-center h-[242px]'>
                            <button className='ml-[-1px] absolute bottom-[21px] w-[170px] h-[48px] bg-white font-semibold text-lg'>ACCESSORIES</button>
                        </div>
                    </div>

                </div>
</div> */}

