"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/assets/carousel/pet-food.png",
    label: "主粮",
  },
  {
    src: "/assets/carousel/grooming-care.png",
    label: "洗护",
  },
  {
    src: "/assets/carousel/toys-accessories.png",
    label: "玩具配件",
  },
];

const storySlides = [
  {
    src: "/assets/carousel/grooming-care.png",
    alt: "宠物洗护护理产品陈列",
    label: "洗护护理",
  },
  {
    src: "/assets/carousel/toys-accessories.png",
    alt: "宠物玩具配件陈列",
    label: "玩具配件",
  },
  {
    src: "/assets/carousel/pet-food.png",
    alt: "宠物主粮和日常护理陈列",
    label: "主粮护理",
  },
];

const products = [
  {
    src: "/assets/carousel/samoyed-care.png",
    alt: "萨摩耶和店内宠物护理产品",
    title: "安心主粮",
    price: "¥59起",
    description: "覆盖幼宠、成宠和敏感肠胃需求，店员可按体重和口味帮你搭配。",
  },
  {
    src: "/assets/carousel/grooming-care.png",
    alt: "店内宠物洗护产品",
    title: "温和洗护",
    price: "¥39起",
    description: "从日常沐浴到毛发护理，适合不同肤质和季节换毛期使用。",
  },
  {
    src: "/assets/carousel/toys-accessories.png",
    alt: "店内宠物玩具和配件",
    title: "玩具配件",
    price: "¥19起",
    description: "牵引、项圈、互动玩具和小窝配件，兼顾耐用度和好看度。",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStorySlide, setActiveStorySlide] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(slideTimer);
  }, [activeSlide]);

  useEffect(() => {
    const storySlideTimer = window.setInterval(() => {
      setActiveStorySlide((currentSlide) => (currentSlide + 1) % storySlides.length);
    }, 3800);

    return () => window.clearInterval(storySlideTimer);
  }, [activeStorySlide]);

  function showSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  function showStorySlide(index: number) {
    setActiveStorySlide((index + storySlides.length) % storySlides.length);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 2200);
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="爪爪星球首页">
            <span className="brand-mark">P</span>
            <span>爪爪星球</span>
          </a>
          <div className="nav-links">
            <a href="#menu">产品</a>
            <a href="#story">护理</a>
            <a href="#visit">到店</a>
            <a className="nav-cta" href="#reserve">
              预约护理
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="爪爪星球产品轮播">
          <div className="hero-carousel" aria-hidden="true">
            {slides.map((slide, slideIndex) => (
              <div
                className={`hero-slide${slideIndex === activeSlide ? " is-active" : ""}`}
                key={slide.src}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <div className="hero-inner">
            <div className="eyebrow">Pet Care Store</div>
            <h1>爪爪星球</h1>
            <p className="hero-copy">
              精选主粮、温和洗护和耐玩的日常配件，为猫狗的每一次到店都准备得更舒服一点。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#menu">
                查看店内产品
              </a>
              <a className="button button-secondary" href="#visit">
                营业时间
              </a>
            </div>
          </div>
          <div className="carousel-controls" aria-label="产品轮播控制">
            <button
              className="carousel-arrow"
              type="button"
              aria-label="上一张"
              onClick={() => showSlide(activeSlide - 1)}
            >
              ‹
            </button>
            <div className="carousel-dots" role="tablist" aria-label="产品轮播页码">
              {slides.map((slide, slideIndex) => (
                <button
                  className={`carousel-dot${slideIndex === activeSlide ? " is-active" : ""}`}
                  type="button"
                  aria-label={slide.label}
                  aria-selected={slideIndex === activeSlide}
                  key={slide.label}
                  onClick={() => showSlide(slideIndex)}
                  role="tab"
                />
              ))}
            </div>
            <button
              className="carousel-arrow"
              type="button"
              aria-label="下一张"
              onClick={() => showSlide(activeSlide + 1)}
            >
              ›
            </button>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <div className="section-kicker">In Store Picks</div>
                <h2>主粮、洗护和玩具配件。</h2>
              </div>
              <p>按猫狗年龄、体型和生活习惯挑选店内商品，日常补货和护理预约都能一次安排好。</p>
            </div>

            <div className="menu-grid">
              {products.map((product) => (
                <article className="menu-card" key={product.title}>
                  <Image src={product.src} alt={product.alt} width={1672} height={941} />
                  <div className="menu-content">
                    <div className="menu-title">
                      <h3>{product.title}</h3>
                      <span className="price">{product.price}</span>
                    </div>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="story">
          <div className="section-inner story-grid">
            <div className="story-carousel" aria-label="护理服务轮播图">
              <div className="story-carousel-track">
                {storySlides.map((slide, slideIndex) => (
                  <div
                    className={`story-slide${slideIndex === activeStorySlide ? " is-active" : ""}`}
                    key={slide.src}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 850px) calc(100vw - 28px), 45vw"
                    />
                  </div>
                ))}
              </div>
              <div className="story-carousel-controls">
                <button
                  className="story-carousel-arrow"
                  type="button"
                  aria-label="上一张护理图"
                  onClick={() => showStorySlide(activeStorySlide - 1)}
                >
                  ‹
                </button>
                <div className="story-carousel-dots" role="tablist" aria-label="护理轮播页码">
                  {storySlides.map((slide, slideIndex) => (
                    <button
                      className={`story-carousel-dot${
                        slideIndex === activeStorySlide ? " is-active" : ""
                      }`}
                      type="button"
                      aria-label={slide.label}
                      aria-selected={slideIndex === activeStorySlide}
                      key={slide.label}
                      onClick={() => showStorySlide(slideIndex)}
                      role="tab"
                    />
                  ))}
                </div>
                <button
                  className="story-carousel-arrow"
                  type="button"
                  aria-label="下一张护理图"
                  onClick={() => showStorySlide(activeStorySlide + 1)}
                >
                  ›
                </button>
              </div>
            </div>

            <div>
              <div className="section-kicker">Care Service</div>
              <h2>洗护有耐心，挑选有建议。</h2>
              <p>
                爪爪星球把店内陈列和护理服务放在同一个动线里：先了解宠物习惯，再推荐合适用品，必要时也能预约基础清洁和毛发护理。
              </p>
              <div className="feature-list" aria-label="宠物店特色">
                <div className="feature">
                  <strong>3类</strong>
                  <span>核心产品专区</span>
                </div>
                <div className="feature">
                  <strong>10:00</strong>
                  <span>每日开门</span>
                </div>
                <div className="feature">
                  <strong>1对1</strong>
                  <span>护理建议</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="section-inner visit-grid">
            <div>
              <div className="section-kicker">Visit Us</div>
              <h2>带毛孩子来逛逛。</h2>
              <p>地址：福州市仓山区。店内提供产品选购、基础护理预约和宠物友好等候区。</p>

              <div className="hours" aria-label="营业时间">
                <div className="hours-row">
                  <strong>周一至周五</strong>
                  <span>10:00 - 20:30</span>
                </div>
                <div className="hours-row">
                  <strong>周六至周日</strong>
                  <span>10:00 - 21:30</span>
                </div>
                <div className="hours-row">
                  <strong>电话</strong>
                  <span>021-8848-1027</span>
                </div>
              </div>
            </div>

            <form id="reserve" className="contact-panel" onSubmit={handleSubmit}>
              <h3>预约护理</h3>
              <div className="field-group">
                <label htmlFor="name">姓名</label>
                <input id="name" name="name" type="text" placeholder="你的称呼" />
              </div>
              <div className="field-group">
                <label htmlFor="time">预约时间</label>
                <select id="time" name="time" defaultValue="明天 12:00">
                  <option>明天 12:00</option>
                  <option>今天 10:00 - 12:00</option>
                  <option>今天 14:00 - 16:00</option>
                  <option>今天 18:00 - 20:00</option>
                </select>
              </div>
              <div className="field-group">
                <label htmlFor="message">备注</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="宠物品种、体重、护理需求或想咨询的产品"
                />
              </div>
              <button className="button submit-button" type="submit" disabled={isSubmitted}>
                {isSubmitted ? "已收到预约" : "发送预约"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>爪爪星球 Pet Care</span>
          <span>宠物主粮 / 温和洗护 / 玩具配件</span>
        </div>
      </footer>
    </>
  );
}
