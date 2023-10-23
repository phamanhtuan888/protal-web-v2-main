import { useState, useEffect, useRef } from 'react';

const Arcontactus = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(0);

  useEffect(
    () => {
      const timeout = () => {
        setHide(prev => (prev ? 0 : 1));
      };
      setTimeout(timeout, 2500);
      if (open) return () => clearTimeout(timeout);

      return () => clearTimeout(timeout);
    },
    [open, hide]
  );
  const wrapperRef = useRef(null);

  useEffect(() => {
    const closeAr = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.body.addEventListener('click', closeAr);

    return () => {
      document.body.removeEventListener('click', closeAr);
    };
  }, []);

  return (
    <div
      id='arcontactus'
      className='arcontactus-widget arcontactus-message left lg active'
      ref={wrapperRef}
    >
      {/* <div className='callback-countdown-block' style={{ color: 'rgb(0, 135, 73)' }}>
        <div className='callback-countdown-block-close'>
          <svg
            width='12'
            height='13'
            viewBox='0 0 14 14'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g id='Canvas' transform='translate(-4087 108)'>
              <g id='Vector'>
                <use xlinkHref='#path0_fill' transform='translate(4087 -108)' fill='currentColor' />
              </g>
            </g>
            <defs>
              <path
                id='path0_fill'
                d='M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z'
              />
            </defs>
          </svg>
        </div>
        <div className='callback-countdown-block-phone'>
          <p>
            Please enter your phone number
            <br />
            and we call you back soon
          </p>
        </div>
        <div className='callback-countdown-block-timer'>
          <p>We are calling you to phone</p>
          <div className='callback-countdown-block-timer_timer' />
        </div>
        <div className='callback-countdown-block-sorry'>
          <p>
            Thank you.
            <br />
            We are call you back soon.
          </p>
        </div>
      </div> */}
      {/* <div className={`messangers-block lg ${open ? 'show-messageners-block' : ''}`}>
        <a
          className='messanger msg-item-envelope'
          id='msg-item-7'
          href='mailto:contact@vgasoft.vn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span style={{ backgroundColor: 'rgb(255, 100, 58)' }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path
                fill='currentColor'
                d='M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z'
              />
            </svg>
          </span>
          <p>Email us</p>
        </a>
        <a
          className='messanger msg-item-phone'
          id='msg-item-8'
          href='tel:0589929999'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span style={{ backgroundColor: 'rgb(234, 153, 3)' }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path
                fill='currentColor'
                d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
              />
            </svg>
          </span>
          <p>Hotline: 0589929999</p>
        </a>
      </div> */}
      {/* <div
        className='arcontactus-message-button'
        style={{ backgroundColor: 'rgb(0, 135, 73)' }}
        onClick={() => setOpen(prev => !prev)}
      >
        <div className={`static ${open || hide === 0 ? 'hide' : ''}`}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path
              fill='currentColor'
              d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
            />
          </svg>
          <p>Liên hệ</p>
        </div>
        <div className='callback-state' style={{ backgroundColor: 'rgb(0, 135, 73)' }}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path
              fill='currentColor'
              d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
            />
          </svg>
        </div>
        <div className={`icons ${open || hide === 1 ? 'hide' : ''}`}>
          <div className='icons-line'>
            <span style={{ color: 'rgb(0, 135, 73)' }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path
                  fill='currentColor'
                  d='M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z'
                />
              </svg>
            </span>
            <span style={{ color: 'rgb(0, 135, 73)' }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path
                  fill='currentColor'
                  d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className={`arcontactus-close ${open ? 'show-messageners-block' : ''}`}>
          <svg
            width='12'
            height='13'
            viewBox='0 0 14 14'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g id='Canvas' transform='translate(-4087 108)'>
              <g id='Vector'>
                <use xlinkHref='#path0_fill' transform='translate(4087 -108)' fill='currentColor' />
              </g>
            </g>
            <defs>
              <path
                id='path0_fill'
                d='M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z'
              />
            </defs>
          </svg>
        </div>
        <div className='pulsation' style={{ backgroundColor: 'rgb(0, 135, 73)' }} />
        <div className='pulsation' style={{ backgroundColor: 'rgb(0, 135, 73)' }} />
      </div> */}
      {/* <div className='arcontactus-prompt'>
        <div className='arcontactus-prompt-close' style={{ backgroundColor: 'rgb(0, 135, 73)' }}>
          <svg
            width='12'
            height='13'
            viewBox='0 0 14 14'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g id='Canvas' transform='translate(-4087 108)'>
              <g id='Vector'>
                <use xlinkHref='#path0_fill' transform='translate(4087 -108)' fill='currentColor' />
              </g>
            </g>
            <defs>
              <path
                id='path0_fill'
                d='M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z'
              />
            </defs>
          </svg>
        </div>
        <div className='arcontactus-prompt-inner'>Hello</div>
      </div> */}
    </div>
  );
};

export default Arcontactus;
