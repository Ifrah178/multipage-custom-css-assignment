import Image from "next/image";

export default function(){
  return(
    <div>
       <h1 className="home-heading">Stellarix Watches</h1> 
      
      <img src="heroImage.png" alt="" />
      <p>
      "A close-up of a luxurious watch resting on a sleek black marble surface, illuminated by soft, ambient lighting. The watch features a polished stainless steel case, an intricately detailed dial with Roman numerals, and a finely stitched leather strap. The background is elegantly blurred, drawing attention to the watch's craftsmanship and precision. Subtle reflections highlight the watch's sapphire crystal glass, exuding sophistication and timeless elegance. Perfect for a high-end brand or luxury lifestyle showcase, this hero image captures the essence of refined style and impeccable quality."
      </p>
      
      <Image src="photo1.png" alt="" />;
      <Image src="photo2.png" alt="" />;
      <Image src="photo3.png" alt="" />;
    </div>
  );
}

