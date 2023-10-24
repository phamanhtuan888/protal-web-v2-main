'use client';

/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
import { getResponsiveImage } from '@/componentWebs/ImageNew';
import { Switch } from 'antd';

const Templates1 = ({ data, dataResult, isMobile }) => {
  const particles = cookie.get('particles');
  const [tab, setTab] = useState(0);
  const [animate, setAnimate] = useState(!(particles && particles === 'false'));
  const { list } = dataResult;

  useEffect(
    () => {
      if (animate && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
          particles: {
            number: {
              value: isMobile ? 50 : 100,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: '#fff',
            },
            shape: {
              type: 'circle',
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#fff',
              "opacity": 0.6,
              "width": 0
            },
            move: {
              enable: true,
              speed: 10,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      };
      cookie.set('particles', animate)
    },
    [animate],
  );
  return (
    <>
      <section className="banner">
        {animate && <div id="particles-js" />}
        <img
          className="banner-bg ls-is-cached lazyloaded"
          alt="Doanh nghiệp"
          src={getResponsiveImage(data?.images[0]?.file || '', [600, 900, 1600])}
        />
        <img
          className="banner-bg-1 moveInRight ls-is-cached lazyloaded"
          alt="Doanh nghiệp"
          key={tab}
          src={
            ['/static/vga_soft/images/V.png', '/static/vga_soft/images/G.png', '/static/vga_soft/images/A.png'][tab % 3]
          }
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="banner-text">
                <div className="banner__main-text">
                  <div className="banner__main-text__content" key={tab}>
                    <div className="banner__main-text__content__heading moveInLeft">
                      {list?.[tab]?.title?.split('@').map((text, idx) => <p key={idx}>{text}</p>)}
                    </div>
                    <div className="banner__main-text__content__description moveInRight">
                      {list?.[tab]?.description}
                    </div>
                  </div>
                  <div className="titlesbar">
                    {list?.map((item, index) => (
                      <div
                        className={`titlesbar__item ${index === tab ? 'titlesbar__item--active' : ''}`}
                        onClick={() => setTab(index)}
                        key={index}
                      >
                        {item?.title.split('@')[0]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="banner-img">
                <img
                  className="banner-img__layer-2 moveInBottom ls-is-cached lazyloaded"
                  alt={list?.[tab]?.title.split('@')[0] || ''}
                  src={getResponsiveImage(list?.[tab]?.images[0].file, [380, 450, 540])}
                  key={tab}
                />
              </div>
            </div>
          </div>
        </div>
        <Switch
          checkedChildren="on"
          unCheckedChildren="off"
          checked={animate}
          onChange={(checked) => setAnimate(checked)}
          style={{ position: 'absolute', bottom: '30px', right: '30px', zIndex: 3 }}
        />
      </section>
      <img
        className="liquid-background ls-is-cached lazyloaded"
        src="/static/vga_soft/images/liquid.svg"
        alt="liquid"
      />
    </>
  );
};
export default connect()(Templates1);
