import { Button } from "@/components/ui/button"


const Authentic = ({ }) => {
    return (
        <section className="w-full flex justify-center items-center py-12 md:py-32 px-4 overflow-hidden bg-background z-30">
            <div className="relative w-full max-w-[1300px] flex flex-col justify-center items-center gap-10">
                <div className="absolute hidden md:flex w-full h-full left-0 top-0 z-10"
                    style={{
                        backgroundImage: "url('/images/home/authentic/1.png'),url('/images/home/authentic/2.png'),url('/images/home/authentic/3.png')",
                        backgroundPosition: "center left, top right, bottom right",
                        backgroundSize: "15%, 15%, 20%",
                        backgroundRepeat: "no-repeat, no-repeat, no-repeat"
                    }}
                ></div>
                <p className="w-full max-w-[650px] text-center text-primary-foreground uppercase text-2xl md:text-5xl font-[600] font-cormorant lg:leading-[60px] z-20">Step into an oasis
                    of minimal & modern decor with lush greenery, rustic wood accents and authentic hand made pottery.</p>
                <Button className="font-cormorant uppercase text-white bg-primary-foreground font-[600] px-8 py-7 text-lg rounded-none">View Menu</Button>
            </div>
        </section >
    )
}

export default Authentic