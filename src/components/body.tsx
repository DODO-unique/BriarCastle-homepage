import './body.css'

export default function Body () {

    const castleWings = [
        {
            heading: "Laboratory",
            subHeading: "A collection of deployed projects",
            link: "labs.briarcastle.com"
        },
        {
            heading: "Garden",
            subHeading: "Stories, Essays, and Worlds",
            link: "garden.briaracastle.com"
        },
        {
            heading: "Resident",
            subHeading: "Meet the sole occupant of Briar Castle",
            link: "resident.briarcastle.com"
        }
    ]

    return (
        <>
            <div className="body-section">
                {
                    castleWings.map((wing) => {
                        // seperate them with flexbox
                        return (
                            <>

                                <div className="item-field">
                                    <div className='dotted-box'>
                                        <h6 className="dotted-box-heading">{wing.heading}</h6>
                                        <p className="dotted-box-subHeading">{wing.subHeading}</p>
                                        <p className='dotted-box-link'>Hosted on <a href={`https://${wing.link}`}>{wing.link}</a> subdomain</p>
                                    </div>
                                    <svg width="1547" height="345" viewBox="0 0 1547 345" fill="none" xmlns="http://www.w3.org/2000/svg" className='dotted-box-img' preserveAspectRatio='none'>
                                    <rect x="1.5" y="1.5" width="1544" height="342" fill="#1D2433" fill-opacity="0.51" stroke="#F4F7F5" stroke-width="3" stroke-dasharray="24 24"/>
                                    </svg>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}