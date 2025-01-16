'use client'

const Map = ({ }) => {

    return (
        <section id="ora" className="flex w-full items-center justify-center bg-transparent z-30">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.0897846028593!2d-0.40036209999999994!3d51.658192500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1b6bad547%3A0x6aab586ed516f809!2sJard%C3%ADn%20Mexican%20Cocina%20%26%20Tequila%20Bar!5e0!3m2!1sen!2sin!4v1737039569321!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[600px]"
            ></iframe>
        </section >
    )
}

export default Map 
