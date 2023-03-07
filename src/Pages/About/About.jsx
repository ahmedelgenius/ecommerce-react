import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import cartIcon from "../../images/icons/shopping-cart.svg";
import cardIcon from "../../images/icons/card.svg";
import headphoneIcon from "../../images/icons/headphone.svg";
import carIcon from "../../images/icons/truck-fast.svg";
import clintImg from "../../images/reviwe/Ellipse 92.png";
import ReactStars from "react-rating-stars-component";
import { useTranslation } from "react-i18next";
import "./About.css";
const aboutData = {
  desc1: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged`,
  desc1_ar: `لوريم إيبسوم هو ببساطة نص شكلي للطباعة والتنضيد
  صناعة. لوريم إيبسوم هو النص الوهمي القياسي في الصناعة
  منذ القرن الخامس عشر الميلادي ، عندما استولت طابعة غير معروفة على لوح
  اكتبه وادفعه لعمل كتاب عينة من النوع. لديها
  نجا ليس فقط خمسة قرون ، ولكن أيضا القفزة إلى
  التنضيد الإلكتروني ، يبقى بشكل أساسي دون تغيير`,
  desc2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  `,
  desc2_ar: `لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، عندما أخذت طابعة غير معروفة لوحًا من النوع وتدافعت عليه لعمل كتاب عينة.`,
};
const clintsReview = [
  {
    id: 1,
    reviewerName: "Buyer Name",
    reviewerName_ar: "اسم المشتري",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
    desc_ar: `هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سيستخدم لوريم إيبسوم ويشتت انتباهه بالمحتوى المقروء`,
  },
  {
    id: 2,
    reviewerName: "Buyer Name",
    reviewerName_ar: "اسم المشتري",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
    desc_ar: `هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سيستخدم لوريم إيبسوم ويشتت انتباهه بالمحتوى المقروء`,
  },
  {
    id: 3,
    reviewerName: "Buyer Name",
    reviewerName_ar: "اسم المشتري",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
    desc_ar: `هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سيستخدم لوريم إيبسوم ويشتت انتباهه بالمحتوى المقروء`,
  },
  {
    id: 4,
    reviewerName: "Buyer Name",
    reviewerName_ar: "اسم المشتري",
    rating: 4,
    reviewerPic: clintImg,
    desc: `It is a long established fact that a reader will be using Lorem Ipsu
    distracted by the readable content `,
    desc_ar: `هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سيستخدم لوريم إيبسوم ويشتت انتباهه بالمحتوى المقروء`,
  },
];
const About = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="about">
        {i18n.language === "ar" ? (
          <BreadCrumb title="معلومات عنا" />
        ) : (
          <BreadCrumb title="About us" />
        )}

        <div className="container">
          <div className="row">
            <section className="section-heading-start py-3">
              <h3 className="text-uppercase heading-start-title">
                {t("our_story")}
              </h3>
              <span className="heading-start-line"></span>
            </section>
          </div>

          <div className="">
            <p className="about-desc">
              {i18n.language === "ar" ? aboutData.desc1_ar : aboutData.desc1}
            </p>
            <p className="about-desc">
              {i18n.language === "ar" ? aboutData.desc2_ar : aboutData.desc2}
            </p>
          </div>
        </div>
      </section>
      <section className="why-choose my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start py-5">
                <h3 className="text-uppercase heading-start-title">
                  {t("why_choose_us")}
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
          </div>
          <div className="row px-4  ">
            <div className="col-md-3">
              <div className="feature-card text-center  d-flex  justify-content-center align-items-center flex-column">
                <div className="feature-icon py-3 bg-main-color">
                  <img src={cartIcon} alt="" />
                </div>
                <h3 className="feature-title"> {t("feature_title_1")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={headphoneIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_2")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={cardIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_3")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center d-flex justify-content-center align-items-center flex-column">
                <div className="feature-icon bg-main-color">
                  <img src={carIcon} alt="" />
                </div>
                <h3 className="feature-title">{t("feature_title_4")}</h3>

                <p className="feature-desc">{t("feature_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clints my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section className="section-heading-start py-3">
                <h3 className="text-uppercase heading-start-title">
                  {t("happy_clients")}
                </h3>
                <span className="heading-start-line"></span>
              </section>
            </div>
            <div className="row px-3">
              {clintsReview.map((item) => (
                <div className="col-md-6 col-sm-12">
                  <div className="client-card m-3" key={item.id}>
                    <div className="card-head pb-2 d-flex gap-15 flex-row  ">
                      <div className="client-image">
                        <img src={item.reviewerPic} className="w-100" alt="" />
                      </div>
                      <div className="card-details pt-1 d-flex gap-15 ">
                        <h5 className="client-name">
                          {i18n.language === "ar"
                            ? item.reviewerName_ar
                            : item.reviewerName}
                        </h5>
                        <div className=" testimonial-card-rating pt-2 ">
                          <ReactStars
                            count={5}
                            value={item.rating}
                            edit={false}
                            size={20}
                            activeColor="#F5BC4C"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="card-client-desc">
                      {i18n.language === "ar" ? item.desc_ar : item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
