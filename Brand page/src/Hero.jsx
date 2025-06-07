const Hero = () =>{
return(<>
<div className="hero-container">
    <div className="hero-content">
        <h1>
            YOUR FEET DESERVE THE BEST
        </h1>
        <p>
            YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="btn">
            <button className="shop-now btns">Shop Now</button>
            <button className="category btns">Category</button>
        </div>
        <div className="pltfrms">
            <p>Also Available on</p>
           <div className="pltfrm">
             <div className="pic">
                <img src="/images/amazon.png" alt="amz-logo"></img>
            </div>
            <div className="pic">
                <img src="/images/flipkart.png" alt="flpkrt-logo"></img>
            </div>
           </div>
        </div>
    </div>
    <div className="hero-img">
        <img src="/images/shoe_image.png" alt="shoe-image"></img>
    </div>
</div>
</>)
};
export default Hero;