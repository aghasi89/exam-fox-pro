import girl from "../../assets/images/g2.jpg"
import girl2 from "../../assets/images/g1.jpg"
import boy from "../../assets/images/g3.webp"


export const ContactUs = () => {
    return (
        <div className="wrapper">
            <div>
                <div className="item-wrapper">
                    <h2 className="title">FILEX</h2>
                    <div className="text">
                        <p className="discription">I just wanted to sincerely thank you for the opportunity to represent
                            Precision Nutrition
                            and the US at such an amazing event.
                        </p>
                    </div>
                </div>
                <img className="image" src={girl2} alt=""/>
            </div>

            <div>
                <img className="image" src={girl} alt=""/>
                <div style={{marginTop: '10px'}} className="item-wrapper">
                    <h2 className="title">IGNITING</h2>
                    <p className="discription">
                        I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and
                        the US
                        at such an amazing event.
                    </p>
                </div>
            </div>

            <div>
                <div className="item-wrapper">
                    <h2 className="title">PASSION</h2>
                    <p className="discription">
                        I just wanted to sincerely thank you for the opportunity to represent Precision Nutrition and
                        the US
                        at such an amazing event.
                    </p>
                </div>
                <img className="image" src={boy} alt=""/>
            </div>
        </div>
    )
}