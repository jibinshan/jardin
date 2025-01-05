'use client'

const Contact = ({ }) => {

    return (
        <section id="ora" className="flex w-full items-center justify-center bg-transparent">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8982009132355!2d-0.3649722239962183!3d51.643389371844535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876156c4ad8af4b%3A0xc70fe1d6707238c0!2sVu%20Lounge!5e0!3m2!1sen!2sin!4v1733298204427!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[350px] invert grayscale"
            ></iframe>
        </section >
    )
}

export default Contact