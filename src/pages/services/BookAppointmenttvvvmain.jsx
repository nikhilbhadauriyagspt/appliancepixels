import React, { useEffect } from 'react';
import './BookAppointment.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';

import { FaPhoneAlt } from 'react-icons/fa';

const BookAppointmentPage = () => {

    const settings = useSettings();

    useEffect(() => {
        // Dynamically load Bootstrap
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        link.id = 'bootstrap-css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        script.id = 'bootstrap-js';
        document.body.appendChild(script);

        // Initialize Swiper if needed
        const swiperLink = document.createElement('link');
        swiperLink.rel = 'stylesheet';
        swiperLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        swiperLink.id = 'swiper-css';
        document.head.appendChild(swiperLink);

        const swiperScript = document.createElement('script');
        swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        swiperScript.id = 'swiper-js';
        document.body.appendChild(swiperScript);

        swiperScript.onload = () => {
            if (window.Swiper) {
                new window.Swiper(".mySwiper", {
                    loop: true,
                    spaceBetween: 20,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    breakpoints: {
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 }
                    }
                });
            }
        };

        return () => {
            document.getElementById('bootstrap-css')?.remove();
            document.getElementById('bootstrap-js')?.remove();
            document.getElementById('swiper-css')?.remove();
            document.getElementById('swiper-js')?.remove();
        };
    }, []);

    return (
        <div className="book-appointment-wrapper">
            <Helmet>
                <title>Appliance Repair - Book Appointment</title>
            </Helmet>


            <header id="header" className="header fixed-top">
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/" className="logo d-flex align-items-center">
                            <h1 className="sitename">Customer Support</h1>
                        </a>
                        <nav id="navmenu" className="navmenu">
                            <div className="d-flex align-items-center gap-3 text-start">
                                {/* Phone Block */}
                                <a href={`tel:${settings.contact_phone || "+14028485586"}`} className="d-flex align-items-center gap-3 text-decoration-none" style={{ cursor: 'pointer' }}>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                        <FaPhoneAlt size={18} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bold text-uppercase" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.2' }}>Call Anytime</span>
                                        <span className="fw-bold text-nowrap" style={{ fontSize: '20px', color: '#ffffff', lineHeight: '1.2' }}>{settings.contact_phone || "+1-402-848-5586"}</span>
                                    </div>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>


            <main className="sl-main" id="home">
                <div className="service-best">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" style={{ paddingBottom: '60px' }}>
                                <Link to="/service/book-appointment"> <img src="/tvreapir/banner-wn.png" className="img-fluid border-set-radius w-100" alt="Explore Our Services" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="about" className="about section">
                    <div className="container">
                        <div className="about-box">
                            <div className="row align-items-center" style={{ minHeight: '400px' }}>
                                <div className="col-lg-7">
                                    <div className="content text-start">
                                        <h3>Expertise That Spans Every Industry</h3>
                                        <h2>Who we are?</h2>
                                        <p className="para-text">
                                            Our Platform is your trusted destination for expert assistance—covering everything from home appliances and security systems to smart home technology. We’re more than just a service provider; we’re a team of certified professionals dedicated to delivering fast, personalized solutions whenever you need them. With 24/7 availability and in-depth knowledge of today’s connected living spaces, Our Platform ensures you’re never left without reliable help.
                                        </p>

                                    </div>
                                </div>

                                <div className="col-lg-5" style={{ position: 'relative' }}>
                                    <img src="/tvreapir/call-support.png" className="img-fluid border-set-radius w-100"
                                        alt="ask expert" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sl-main-section pb-5">
                    <div className="container about-box" style={{ background: '#e0e6ef' }}>
                        <div className="row px-3">
                            <div className="col-lg-12 col-xl-12">
                                <div className="sl-sectionHead">
                                    <h2 style={{ paddingBottom: '4%' }}>Testimonials</h2>

                                    <div className="swiper mySwiper">
                                        <div className="swiper-wrapper mb-5">

                                            {/* Slide 1 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Jose Mendez</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Operations Management</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "The personalized attention I received from Our Platform was outstanding. They truly made me feel like my issue mattered and didn’t rest until everything was working perfectly. Exceptional service!"
                                                </p>
                                            </div>

                                            {/* Slide 2 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Danielle Williams</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Business Analyst</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "I had a complex issue with my home security system, but Our Platform handled it with ease. Their technician quickly identified the problem and delivered a solution that gave me peace of mind. Highly recommended!"
                                                </p>
                                            </div>

                                            {/* Slide 3 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>David Miller</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Sr. Manager</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "Our Platform’s 24/7 availability is a game-changer. I reached out late at night and was amazed to speak to someone right away. They resolved the issue fast—I felt so relieved and grateful."
                                                </p>
                                            </div>

                                            {/* Slide 4 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Jeffrey York</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Real Estate</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "Getting help from Our Platform is always quick and effortless. They genuinely care about their customers and take the time to explain everything clearly. It’s great knowing help is just a call away."
                                                </p>
                                            </div>

                                            {/* Slide 5 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Veronica Hannon</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Store Manager</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "The team at Our Platform is incredibly responsive. I had an issue with my security cameras, and they walked me through a fix immediately. Their knowledge and professionalism are second to none."
                                                </p>
                                            </div>

                                            {/* Slide 6 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Jennifer Austin</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Finance Management</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "My printer kept jamming and I couldn’t figure out why—until I contacted Our Platform. Not only did their technician fix the problem, but they also explained the cause and how to prevent it. Fantastic experience!"
                                                </p>
                                            </div>

                                            {/* Slide 7 */}
                                            <div className="swiper-slide" style={{ textAlign: 'center' }}>
                                                <img src="/tvreapir/profile.png" style={{ width: '54px', paddingBottom: '16px', margin: '0 auto' }} alt="profile" />
                                                <span style={{ fontSize: '18px', display: 'block' }}>Nicholas Duris</span>
                                                <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Relationship Manager</p>
                                                <p>
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                    <i className="ti-star" style={{ color: '#ffcc00' }} />
                                                </p>
                                                <p className="para-text">
                                                    "When my laptop suddenly crashed, Our Platform came to the rescue. The technician arrived quickly, diagnosed the issue with precision, and had everything up and running in no time. Truly impressive service!"
                                                </p>
                                            </div>

                                        </div>

                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="promo_content promo_content_bg text-center">
                                    <img class="shap_one" src="/tvreapir/shapes.png" alt="" />
                                    <img class="shap_two" src="/tvreapir/zigzag.png" alt="" />
                                    <h2 class="title-animation">Need Quick, Dependable Help with Your Devices?</h2>
                                    <p>
                                        From smart home setups and security system repairs to network troubleshooting, Our Platform connects you with certified professionals who deliver expert support—whenever and wherever you need it.
                                    </p>

                                    <a onClick={() => window.jivo_api && window.jivo_api.open()} class="saas_btn cursor-pointer">
                                        <div class="btn_text"><span>Start with a Free Consultation</span></div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </main>


        </div>
    );
};

export default BookAppointmentPage;
