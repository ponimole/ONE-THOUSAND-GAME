import React, {useState} from 'react';
import Images from './images/images'
import Description from './text/description'
import './styles/LaunchPage.css'

function LaunchPage() {

    const [currentImage, setCurrentImage] = useState("")

    return (
        <div>
            <div className='LaunchPageContainer'>
                <div className='InstallSection'>
                    <div className='AppLogoContainer'>
                        <img className='AppLogoImage' src={Images['GREicon']}></img>
                        <div className='AppLogoText'>
                            <div>ONE THOUSAND</div>
                            <div style={{fontSize: 25, fontWeight: 400}}>Developer: Olufemi Onimole</div>
                        </div>
                    </div>

                    <div className="DownloadContainer">
                        <img className="AndroidLogo" src={Images['AndroidLogo']}></img>
                        <button className="DownloadButton">Download</button>
                    </div>
                </div>

                <div className="ScreenShotSection">
                    <img className="Screenshot" src={Images['Screenshot1']} onClick={() => setCurrentImage('Screenshot1')}></img>
                    <img className="Screenshot" src={Images['Screenshot2']} onClick={() => setCurrentImage('Screenshot2')}></img>
                    <img className="Screenshot" src={Images['Screenshot3']} onClick={() => setCurrentImage('Screenshot3')}></img>
                </div>

                <div className="DescriptionSection">
                    <div className="DescriptionLabel">Description</div>
                    <div className="DescriptionText">{Description.description}</div>
                    <div className="DescriptionLabel">About this game</div>
                    <div className="DescriptionText">{Description.text}</div>
                    <div className="DescriptionLabel">Developer Contact</div>
                    <div className="DescriptionText">{Description.contact}</div>
                </div>
            </div>
            <img className="currentImage" src={Images[currentImage]} onClick={() => setCurrentImage('')}></img>
        </div>

    );
}

export default LaunchPage;