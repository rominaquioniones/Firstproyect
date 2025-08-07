import { CircularProgress, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import fondoWpp from './assets/fondoWpp.jpg';
import mixpanel from './mixpanel';

// Facebook Pixel functions
declare global {
  interface Window {
    fbq: any;
  }
}

// Initialize Facebook Pixel
const initFacebookPixel = () => {
  // Create script element
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src='https://connect.facebook.net/en_US/fbevents.js';
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script');
    fbq('init', '1232972198323270');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  // Create noscript element for fallback
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.setAttribute('height', '1');
  img.setAttribute('width', '1');
  img.style.display = 'none';
  img.src = 'https://www.facebook.com/tr?id=1232972198323270&ev=PageView&noscript=1';
  noscript.appendChild(img);
  document.head.appendChild(noscript);
};

// Track legitimate Facebook events
const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

function App() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Initialize Facebook Pixel (PageView is tracked automatically)
    initFacebookPixel();
    mixpanel.track('Page View'); // Evento de llegada

    // Show spinner after a short delay
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(true);
    }, 500);

    // Show text after spinner appears
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    // Nuevo delay: 5-7 segundos para mayor demora
    let randomDelay = Math.random() * 2000 + 5000; // 5-7 segundos
    
    // Random phone number selection
    const phoneNumbers = [
      '+5491134306939'
    ];
    const randomPhoneNumber = phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
    
    console.log(`Redirect will happen in ${(randomDelay / 1000).toFixed(2)} seconds to number: ${randomPhoneNumber}`);

    // Track landingauto event after random delay (simulated but más natural)
    const clickTrackingTimer = setTimeout(() => {
      trackFacebookEvent('landingauto');
    }, randomDelay - 100);

    // Redirect to WhatsApp after random delay
    const redirectTimer = setTimeout(() => {
      mixpanel.track('redirect', {
        phone: randomPhoneNumber
      });
      const message = 'Hola quiero mas informacion y mi bono del 50%';
      const whatsappUrl = `https://wa.me/${randomPhoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Redirect without additional tracking
      window.location.href = whatsappUrl;
    }, randomDelay);

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(textTimer);
      clearTimeout(clickTrackingTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${fondoWpp})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // 10% opacity for mobile
          zIndex: 1,
          '@media (min-width: 768px)': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // 20% opacity for desktop
          }
        }
      }}
    >
      {/* Content container with higher z-index */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '200px' // Fixed height container
        }}
      >
        {/* MUI Circular Progress with slide-in animation - Fixed position */}
        {showSpinner && (
          <Box
            className="animate__animated animate__slideInDown"
            sx={{
              position: 'absolute',
              top: '20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <CircularProgress
              size={60}
              thickness={2}
              sx={{
                color: '#25D366'
              }}
            />
          </Box>
        )}
        
        {/* Text with slide-in animation - Fixed position */}
        {showText && (
          <Typography
            variant="h5"
            className="animate__animated animate__slideInUp"
            sx={{
              position: 'absolute',
              bottom: '20px',
              color: '#25D366',
              fontWeight: 500,
              textAlign: 'center',
              whiteSpace: 'nowrap',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          >
            Preparando tu bono...
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default App 