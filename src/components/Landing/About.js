import { Hero } from "react-daisyui"

function AboutHero() {
  return(
    <>
      <Hero id="about">
        <Hero.Overlay className="bg-opacity-10" />
        <Hero.Content className="text-center">
          <img src="/img/MindGarden_Team.jpeg" alt="Hero" className="object-cover h-96 rounded-xl mt-10" />
          <div className="max-w-md">
              <p className="py-6 text-blue-600">
              About Us
            </p>
            <h1 className="text-5xl font-bold">We are here to help you improve and understand your mood. </h1>
          </div>
        </Hero.Content>
      </Hero>
    </>
  )
}

export default AboutHero;