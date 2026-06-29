import invertocat from '../assets/GitHub_Invertocat_White_Clearspace.svg'
import { Mail } from 'lucide-react'
import linkedIn from '../assets/InBug-White.png'
import './footer.css'

export default function Footer () {
    const links = [
        {
            icon: invertocat,
            title: "GitHub",
            uname: "DODO-unique",
            link: "https://github.com/DODO-unique"
        },
        {
            icon: <Mail className="lucide-mail" size={24} />,
            title: "Mail",
            uname: "maligaurav791@gmail.com",
            link: "mailto:maligaurav791@gmail.com"
        },
        {
            icon: linkedIn,
            title: "LinkedIn",
            uname: "Gaurav Mali",
            link: "https://www.linkedin.com/in/gaurav-mali-vicpress"
        }
    ]

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="links">
                    {
                        links.map((linkSet, index) => {
                            const isStringIcon = typeof linkSet.icon === 'string';
                            return (
                                <div className='link-set' key={index}>
                                    <div className='icon'>
                                        {isStringIcon ? (
                                            <img src={linkSet.icon as string} alt={linkSet.title} className="icon-img" />
                                        ) : (
                                            linkSet.icon
                                        )}
                                    </div>
                                    <div className='link-title'>
                                        {linkSet.title}
                                    </div>
                                    <a href={linkSet.link} target={linkSet.title !== 'Mail' ? '_blank' : undefined} rel="noopener noreferrer">
                                        {linkSet.uname}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} • Crafted by{' '}
                        <a href='https://about.briarcastle.com' target="_blank" rel="noopener noreferrer">
                            Gaurav Mali
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}