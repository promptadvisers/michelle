import React from 'react'
import "./Products.css"
import shoe2 from '../../assets/shoe-2.jpeg';
import shoe3 from '../../assets/shoe-3.jpeg';
import shoe4 from '../../assets/shoe-4.jpeg';
import shoe5 from '../../assets/shoe-5.jpeg';
import shoe6 from '../../assets/shoe-6.jpeg';
import shoe7 from '../../assets/shoe-7.jpeg';
import shoe8 from '../../assets/shoe-8.jpeg';
import shoe9 from '../../assets/shoe-9.jpeg';
import { LuShare } from 'react-icons/lu';
import { FaStar,FaCartPlus } from 'react-icons/fa6';


const Products = () => {
  return (
    <section id='products'>
      <div className="container">
        <h1 className="heading-1" data-aos="fade-left">
          Flash <span className="gradient-text">Deals</span>
        </h1>
        <div className="products-container">

          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe2} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$23</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}


          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe3} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$52</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}

          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe4} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$119</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}


          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe5} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$45</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}


          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe6} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$80</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}



          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe7} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$122</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}

          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe8} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$56</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}


          {/* Product start */}
          <div className="flex product" data-aos="fade-left">
            <div className="top picture">
              <img src={shoe9} alt="" />
              <div className="flex-center btn share-btn">
                <LuShare/>
              </div>
            </div>
            <div className="middle details">
              <div className="flex row">
                <div className="flex-center">
                  <h3 className="rating">4.5</h3>
                  <div className="star flex-center">
                    <FaStar/>
                  </div>
                </div>
                <h1 className='price'>$10.8</h1>
              </div>
              <p className="muted clamp-2 title">
                Step into Comfort: Premium Leather Sneakers
              </p>
            </div>
            <div className="bottom">
              <a href="#" className='btn flex-center'>Add to card <FaCartPlus/></a>
            </div>
          </div>
          {/* Product end */}
        </div>
      </div>
    </section>
  )
}

export default Products
