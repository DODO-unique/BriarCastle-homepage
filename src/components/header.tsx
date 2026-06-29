import siteIcon from '../assets/android-chrome-192x192.png';
import './header.css'

export default function Header () {
    return (
        <>
            <div className="header-rect">
                <div className='site-icon'>
                    <img src={siteIcon} className='site-icon-img'/>
                </div>
                <p className='icon-scribble'>
                    Our icon!
                </p>
            </div>
        </>
    )
}