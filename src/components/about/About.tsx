import ImgOne from "../../assets/images/gallery/image-29.jpeg";
import ImgTwo from "../../assets/images/gallery/image-59.jpeg";
import ImgThree from "../../assets/images/gallery/image-79.jpeg";
import ImgFour from "../../assets/images/gallery/image-99.jpeg";

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
          "Travel with Us" is a passion-driven collaboration between four
          talented individuals who share a profound love for travel and web
          development. Let's meet the team:
          <br/>
          <br/>
           Shivang – The Developer: With a
          flair for coding and a commitment to technical excellence, Shivang
          plays a crucial role in building the website's foundation using his
          expertise in web development. 
          <br/>
          <br/>
          Shubham – The UI/UX Designer: As the
          visionary behind the website's intuitive user experience and polished
          interface, Shubham ensures that "Travel with Us" is aesthetically
          pleasing and user-friendly, captivating visitors with his creative
          design skills. 
          <br/>
          <br/>
          Virendra – The Traveler and Visual Storyteller: Armed
          with a camera and a passion for exploration, Virendra captures the
          soul-stirring beauty of diverse landscapes and the essence of each
          destination, inspiring wanderlust in every visitor to "Travel with
          Us." 
          <br/>
          <br/>
          Rohit – The Content Creator and Writer: With a way with words and
          an eye for storytelling, Rohit weaves enchanting narratives that
          transport readers to distant lands and make them feel the magic of
          each travel experience. His captivating content brings life and depth
          to "Travel with Us." Together, this dynamic quartet forms a harmonious
          fusion of travel and code, united by their shared love for
          exploration, technical expertise, and attention to detail. Join them
          on this extraordinary journey through "Travel with Us," where
          captivating visuals, exceptional web development, and mesmerizing
          storytelling come together to create an unforgettable experience.
          <br/>
          <br/>
          Thank you for being part of our community; we can't wait to share the
          magic of travel, the beauty of coding, and the power of storytelling
          with you! Embark on this adventure with us and let's explore the world
          through "Travel with Us."
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Gudauri"
          />
          <p className="font-bold">Gudauri</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Sighnaghi"
          />
          <p className="font-bold">Sighnaghi</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Stepantsminda"
          />
          <p className="font-bold">Stepantsminda</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="Batumi"
          />
          <p className="font-bold">Batumi</p>
        </section>
      </section>
    </article>
  );
};

export default About;
