import Image from 'next/image';
import React from 'react';
import logo from "@/assets/img/logo/logo-w.png";

import home_1 from "@/assets/img/demos/home1.jpg";
import home_2 from "@/assets/img/demos/home2.jpg";
import home_3 from "@/assets/img/demos/home3.jpg";
import home_4 from "@/assets/img/demos/home4.jpg";
import home_5 from "@/assets/img/demos/home5.jpg";


import shop from  "@/assets/img/demos/shop.jpg";
import product_details from  "@/assets/img/demos/product-details.jpg";
import cart from  "@/assets/img/demos/cart.jpg";
import about from  "@/assets/img/demos/about.jpg";
import service from  "@/assets/img/demos/service.jpg";
import service_details from  "@/assets/img/demos/service-details.jpg";
import appoin from  "@/assets/img/demos/appoin.jpg";
import doc01 from  "@/assets/img/demos/doc01.jpg";
import doctor_2 from  "@/assets/img/demos/doctor-2.jpg";
import portfolio_1 from  "@/assets/img/demos/portfolio-1.jpg";
import portfolio_2 from  "@/assets/img/demos/portfolio-2.jpg";
import blog from  "@/assets/img/demos/blog.jpg";
import blog_2 from  "@/assets/img/demos/blog-2.jpg";
import blog_details from  "@/assets/img/demos/blog-details.jpg";
import contact from  "@/assets/img/demos/contact.jpg";


// fetures images
import bootstrap from   "@/assets/img/icon/bootstrap.png";
import slick from   "@/assets/img/icon/slick.png";
import flat_icon from   "@/assets/img/icon/flat-icon.png";
import fontaersome from   "@/assets/img/icon/fontaersome.png";
import html5 from   "@/assets/img/icon/html5.png";
import css3 from   "@/assets/img/icon/css3.png";
import jquery from   "@/assets/img/icon/jquery.png";
import w3c_validation from   "@/assets/img/icon/w3c-validation.png";
import responsive from   "@/assets/img/icon/responsive.png";
import code from   "@/assets/img/icon/code.png";
import mail from   "@/assets/img/icon/mail.png";
import google_font from   "@/assets/img/icon/google-font.png";
import magnific_popup from   "@/assets/img/icon/magnific-popup.png";
import speed from   "@/assets/img/icon/speed.png";
import document from   "@/assets/img/icon/document.png";
import reactjs from   "@/assets/img/icon/react.png";
import nextjs from   "@/assets/img/icon/next-js.png";


import Link from 'next/link';


export const metadata = {
  title: "Prev MediDove React Next js Tempalte",
};


const Home = () => {
  return (
    <>
      <header>
        <div className="header-area pt-15 pb-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-6">
                <div className="logo">
                  <Link href="#"><Image src={logo} alt="logo" /></Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <div className="purchase-link text-end">
                  <Link href="#">Buy Now $16</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* /assets/img/bg/bg.jpg */}
      <div className="page-title-area tp_bg_img">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="intro-wrapper text-center">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">MediDove - Medical and Health <br /> React Next js Template</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Suitable for Hospitals, Dentists, Gynecologists, Physiatrists, Psychologists <br /> and Laboratories related website.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ready-demos gray-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="ready-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <h4>Stunning Homepages</h4>
                <p>Choose a homepage to start navigating MediDove. Build strong & impressive websites
                  using MediDove premade templates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-area pt-90 pb-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app" target="_blank">
                    <Image src={home_1} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app" target="_blank">Home Style 1</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/home-2" target="_blank">
                    <Image src={home_2} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/home-2" target="_blank">Home Style 2</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/home-3" target="_blank">
                    <Image src={home_3} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/home-3" target="_blank">Home Style 3</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/home-4" target="_blank">
                    <Image src={home_4} alt="" />
                    <span>View Demo</span>
                  </Link>
                  <span className="new-item">New</span>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/home-4" target="_blank">Home Style 4</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/home-5" target="_blank">
                    <Image src={home_5} alt="" />
                    <span>View Demo</span>
                  </Link>
                  <span className="new-item">New</span>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/home-5" target="_blank">Home Style 5</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ready-demos gray-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="ready-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <h4>Stunning Inner Pages</h4>
                <p>Choose a Innerpage to start navigating MediDove. Build strong & impressive websites
                  using MediDove premade templates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-area pt-90 pb-40">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/shop" target="_blank">
                    <Image src={shop} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/shop" target="_blank">Shop Page</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/product-details" target="_blank">
                    <Image src={product_details} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/product-details" target="_blank">Product Details</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/cart" target="_blank">
                    <Image src={cart} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/cart" target="_blank">Shopping Cart</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/about" target="_blank">
                    <Image src={about} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/about" target="_blank">About</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/service" target="_blank">
                    <Image src={service} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/service" target="_blank">Service</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/service-details" target="_blank">
                    <Image src={service_details} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/service-details " target="_blank">Service Details</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/appoinment" target="_blank">
                    <Image src={appoin} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/appoinment" target="_blank">Appoinment</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/doctor" target="_blank">
                    <Image src={doc01} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/doctor" target="_blank">Doctor 01</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/doctor-2" target="_blank">
                    <Image src={doctor_2} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/doctor-2" target="_blank">Doctor 02</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/portfolio-2" target="_blank">
                    <Image src={portfolio_1} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/portfolio-2" target="_blank">Portfolio 01</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/portfolio" target="_blank">
                    <Image src={portfolio_2} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/portfolio" target="_blank">Portfolio 02</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/blog" target="_blank">
                    <Image src={blog} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/blog" target="_blank">Blog Sidebar</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/blog-2-col" target="_blank">
                    <Image src={blog_2} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/blog-2-col" target="_blank">Blog 2 Column</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/blog-details" target="_blank">
                    <Image src={blog_details} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/blog-details" target="_blank">Blog Details</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="demo-wrapper text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="demo-thumb">
                  <Link href="https://medidove-nextjs.vercel.app/contact" target="_blank">
                    <Image src={contact} alt="" />
                    <span>View Demo</span>
                  </Link>
                </div>
                <div className="demo-title">
                  <h4><Link href="https://medidove-nextjs.vercel.app/contact" target="_blank">Contact</Link></h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="ready-demos gray-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="ready-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                <h4>MediDove Core Features</h4>
                <p>We Provide Impressive Freatures For your Website. You can easily manage Your website. You will love it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-features pt-90 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".2s">
                <Image src={reactjs}  style={{width: "70px", height: 'auto'}} alt="theme-pure" />
                  <h4>React js</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".2s">
                <Image src={nextjs} style={{width: "70px", height: 'auto'}} alt="theme-pure" />
                  <h4>Next js 13.4</h4>
              </div>
            </div> 


            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".2s">
                <Image src={bootstrap} alt="theme-pure" />
                  <h4>bootstrap v4</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".6s">
                <Image src={slick} alt="theme-pure" />
                  <h4>Slick Slider</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".2s">
                <Image src={fontaersome} alt="theme-pure" />
                  <h4>Fontawesome Icon</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".6s">
                <Image src={css3} alt="theme-pure" />
                  <h4>css3</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".4s">
                <Image src={responsive} alt="theme-pure" />
                  <h4>fully responsive</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".6s">
                <Image src={code} alt="theme-pure" />
                  <h4>Clean Code</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".2s">
                <Image src={google_font} alt="theme-pure" />
                  <h4>google font</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".4s">
                <Image src={magnific_popup} alt="theme-pure" />
                  <h4>magnific popup</h4>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".6s">
                <Image src={speed} alt="theme-pure" />
                  <h4>Speed Optimized</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mb-30">
              <div className="bakix-features wow fadeInUp" data-wow-delay=".8s">
                <Image src={document} alt="theme-pure" />
                  <h4>Well Documented</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-area pt-150 pb-150 footer_bg_img">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-text text-center">
                  <h2>Feeling in love? <i>Purchase MediDove !</i></h2>
                  <p>Impressive design, powerful features, and easy customization</p>
                  <Link href="#">Purchase Now $16</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;