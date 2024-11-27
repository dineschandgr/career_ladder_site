import Carousel from 'react-bootstrap/Carousel';
// import hero from '../../asset/hero/hero.png'
// import hero2 from '../../asset/hero/hero2.png'
// import hero3 from '../../asset/hero/hero3.png'



function Hero() {
    return (
        <div>
            <div className="lg:block hidden">
                <Carousel >
                    <Carousel.Item >
                        <div>
                            <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-data-science.jpg')] bg-no-repeat bg-cover h-[70vh] mx-10 rounded-3xl">
                                {/* <img  src={hero} /> */}
                                
                                <h6 className='flex justify-center pt-48 text-blue-900 font-bold text-[250%]'></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div >
                        <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-full-stack.jpg')] h-[70vh] mx-10 rounded-3xl">
                                {/* <img src={hero2} /> */}
                                <h6></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item >
                        <div >
                        <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-ai.jpg')] h-[70vh] bg-no-repeat bg-cover mx-10 rounded-3xl">
                                {/* <img src={hero3} /> */}
                                <h6></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="lg:hidden block">
                <Carousel >
                    <Carousel.Item >
                        <div>
                            <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-data-science-mb.jpg')] bg-no-repeat bg-cover  h-[100vh] mx-1 rounded-3xl">
                                {/* <img  src={hero} /> */}
                                
                                <h6 className='flex justify-center pt-48 text-blue-900 font-bold text-[250%]'></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div >
                        <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-full-stack-mb.jpg')] h-[90vh] bg-no-repeat bg-cover  mx-1 rounded-3xl">
                                {/* <img src={hero2} /> */}
                                <h6></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item >
                        <div >
                        <div className="bg-[url('https://livewireindia.com/assets/banner/master-certificate-ai-mb.jpg')] h-[100vh] mx-1 rounded-3xl">
                                {/* <img src={hero3} /> */}
                                <h6></h6>
                                <p></p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            
        </div>
    )
}

export default Hero;