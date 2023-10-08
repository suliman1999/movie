import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import App from '../App';
import slogo from '../images/slogo.png';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
    const navigate=useNavigate();
    const [showButton, setShowButton] = useState(false);

    const logoSpringProps = useSpring({
        from: { transform: 'translateY(-100%) scale(0.5)' },
        to: { transform: 'translateY(0) scale(1)' },
        config: { tension: 200, friction: 100 },
        onRest: () => navigate('/') // يتم تعيين قيمة showButton إلى true بعد انتهاء التحريك للشعار
    });

    const buttonSpringProps = useSpring({
        opacity: showButton ? 1 : 0, // يتم تعيين الشفافية إلى 1 عندما يكون showButton هو true
        marginTop: showButton ? 10 : -10, // يتم تعيين الهامش العلوي للزر عندما يكون showButton هو true
        delay: 1000 // تأخير ظهور الزر بعد انتهاء التحريك للشعار بمقدار 1000 مللي ثانية (1 ثانية)
    });

    return (
        <div className="splash-screen ">
            <animated.img src={slogo} alt='a' className="splash-logo" style={logoSpringProps} />
            <animated.button
                
                style={{ 
                backgroundColor: "#5B9690", 
                border: "none",
                width: '20',
                opacity: buttonSpringProps.opacity,
                marginTop: buttonSpringProps.marginTop,
                fontSize: '26px',
                paddingLeft:'26px'
                // position: 'relative',
                // top: '50px' 
                }}
                className="btn btn-primary p-5 my-5 ">
                Start Watch Movies {"-->"}
            </animated.button>
            
        </div>
    );
}

export default SplashScreen;