import './HomePage.css'
import card_img1 from '../Shoping-page/images/card_1.avif'
import card_img2 from '../Shoping-page/images/card_2.avif'
import card_img3 from '../Shoping-page/images/card_3.webp'
import card_img4 from '../Shoping-page/images/card_4.avif'
import card_img5 from '../Shoping-page/images/card_1.avif'
import slide_img1 from '../Shoping-page/images/slide1.jpg'
import slide_img2 from '../Shoping-page/images/slide2.png'
import slide_img3 from '../Shoping-page/images/slide3.jpg'
export default function HomePage() {
    return (
        <>

            <header>
                <h1>My Shopping Site</h1>
            </header>
            <nav className='hover'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Cart</a></li>
                    <li><a href="/">Account</a></li>
                </ul>
                
            </nav>

            <section className="banner">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide_img1} class="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slide_img2} class="d-block" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slide_img3} class="d-block" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <div className="container">
                <div className="product-grid">

                    <div className="product-card">
                        <div className="card_img">
                            <img src={card_img1} alt="" />
                        </div>
                        <div className="title">
                            <h3>Product 4</h3>
                        </div>
                        <div className="description">
                            <p>Description of Product 4</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={card_img2} alt="" />
                        </div>
                        <div className="title">
                            <h3>Product 4</h3>
                        </div>
                        <div className="description">
                            <p>Description of Product 4</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={card_img3} alt="" />
                        </div>
                        <div className="title">
                            <h3>Product 4</h3>
                        </div>
                        <div className="description">
                            <p>Description of Product 4</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={card_img4} alt="" />
                        </div>
                        <div className="title">
                            <h3>Product 4</h3>
                        </div>
                        <div className="description">
                            <p>Description of Product 4</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="card_img">
                            <img src={card_img5} alt="" />
                        </div>
                        <div className="title">
                            <h3>Product 4</h3>
                        </div>
                        <div className="description">
                            <p>Description of Product 4</p>
                        </div>
                        <div className="butt-card">
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}