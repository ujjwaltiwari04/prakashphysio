import React, { useEffect } from 'react';
import { Language } from '../types';
import { faqData, servingLocationsData, doctorData, treatmentsData } from '../data/clinicData';

interface SeoSchemaProps {
  lang: Language;
  currentPage?: string;
}

export const SeoSchema: React.FC<SeoSchemaProps> = ({ lang, currentPage = 'home' }) => {
  useEffect(() => {
    // 1. Update HTML Root Language Attribute
    document.documentElement.lang = lang;

    // 2. Dynamic Title & Meta Description based on Page & Language
    let pageTitle = 'Prakash Physiotherapy Clinic & Hospital | Dr. Abhay Prakash Tiwari | Bhimnagar, Supaul, Birpur, Nepal';
    let metaDescription = 'Leading Physiotherapy Hospital & Clinic in Supaul District, Bhimnagar, Birpur & Nepal border. Expert non-surgical care for Back Pain, Sciatica, Paralysis, Slip Disc, Joint Pain, Frozen Shoulder by Dr. Abhay Prakash Tiwari (M.P.T Ortho New Delhi). Call +91 9711700817.';

    if (currentPage === 'treatments') {
      pageTitle = lang === 'hi' 
        ? 'मुख्य इलाज व सेवाएं | प्रकाश फिजियोथेरेपी क्लिनिक एवं अस्पताल भीमनगर सुपौल' 
        : 'Treatments & Medical Services | Prakash Physiotherapy Clinic & Hospital Bhimnagar Supaul';
      metaDescription = lang === 'hi'
        ? 'कमर दर्द, साइटिका, स्लिप डिस्क, लकवा (पैरालिसिस), सर्वाइकल व घुटने के दर्द का भीमनगर-बीरपुर के प्रमुख क्लिनिक में बिना ऑपरेशन इलाज।'
        : 'Non-surgical physical therapy for back pain, sciatica, slip disc, paralysis stroke rehab, cervical spondylosis & knee joint arthritis in Bhimnagar, Birpur & Supaul.';
    } else if (currentPage === 'reviews') {
      pageTitle = lang === 'hi'
        ? 'मरीजों के अनुभव व एफएक्यू (FAQ) | प्रकाश फिजियोथेरेपी क्लिनिक एवं अस्पताल'
        : 'Patient Recovery Reviews & FAQs | Prakash Physiotherapy Hospital Bhimnagar';
      metaDescription = lang === 'hi'
        ? 'भीमनगर, बीरपुर, सुपौल व नेपाल बॉर्डर के संतुष्ट मरीजों की राय, गूगल रेटिंग (4.9★) एवं फिजियोथेरेपी अस्पताल परामर्श एफएक्यू।'
        : 'Verified patient recovery reviews, 4.9★ Google ratings & detailed FAQ answers for physiotherapy hospital consultation in Supaul District.';
    } else if (currentPage === 'contact') {
      pageTitle = lang === 'hi'
        ? 'अस्पताल पता व संपर्क | प्रकाश फिजियोथेरेपी क्लिनिक भीमनगर बीरपुर सुपौल'
        : 'Clinic Address & Appointment | Prakash Physiotherapy Hospital Bhimnagar Supaul';
      metaDescription = lang === 'hi'
        ? 'भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, सुपौल जिला। ओपीडी परामर्श एवं 24 घंटे घर पर इलाज (Home Visit) हेतु कॉल करें: +91 9711700817।'
        : 'Bhantabari Road, Bhimnagar, Birpur, Supaul. Contact +91 9711700817 for OPD appointment & 24/7 Home Visit emergency hospital care.';
    } else if (currentPage === 'seo-locations') {
      pageTitle = lang === 'hi'
        ? 'सुपौल जिला व नेपाल बॉर्डर 60+ सेवारत क्षेत्र | प्रकाश फिजियोथेरेपी अस्पताल'
        : '60+ Locations Directory | Prakash Physiotherapy Clinic & Hospital Supaul';
      metaDescription = lang === 'hi'
        ? 'भीमनगर, बीरपुर, सुपौल जिला, अररिया, नेपाल सीमा (सप्तरी/राजविराज) के 60+ गांवों हेतु ओपीडी एवं होम केयर फिजियोथेरेपी अस्पताल सेवाएं।'
        : 'OPD and Home Visit physiotherapy coverage across 60+ villages in Supaul district, Araria and Nepal border communities.';
    }

    document.title = pageTitle;

    // Update Meta Description
    const metaDescElem = document.querySelector('meta[name="description"]');
    if (metaDescElem) {
      metaDescElem.setAttribute('content', metaDescription);
    }

    // Update Open Graph Title & Description
    const ogTitleElem = document.querySelector('meta[property="og:title"]');
    if (ogTitleElem) {
      ogTitleElem.setAttribute('content', pageTitle);
    }
    const ogDescElem = document.querySelector('meta[property="og:description"]');
    if (ogDescElem) {
      ogDescElem.setAttribute('content', metaDescription);
    }

    // 3. Generate JSON-LD Schema Data
    
    // Area Served list for local SEO
    const areaServedList = servingLocationsData.map((loc) => ({
      "@type": "AdministrativeArea",
      "name": `${loc.nameEn}, ${loc.districtEn}`,
      "alternateName": `${loc.nameHi}, ${loc.districtHi}`
    }));

    // Available Services List
    const availableServicesList = treatmentsData.map((t) => ({
      "@type": "MedicalProcedure",
      "name": lang === 'hi' ? t.titleHi : t.titleEn,
      "description": lang === 'hi' ? t.shortDescHi : t.shortDescEn,
      "bodyLocation": t.category === 'spine' ? 'Spine & Back' : t.category === 'neuro' ? 'Nervous System & Brain' : 'Joints & Muscles'
    }));

    // Local Search Target Keywords List
    const baseKeywords = [
      "Physiotherapy in Supaul District",
      "Best Hospital in Bhimnagar",
      "Best Clinic in Bhimnagar",
      "Hospital near Birpur",
      "Clinic near Birpur",
      "Best Physiotherapist in Supaul",
      "Physiotherapy Hospital Supaul",
      "भीमनगर अस्पताल",
      "भीमनगर क्लिनिक",
      "बीरपुर अस्पताल",
      "सुपौल जिला अस्पताल"
    ];
    const keywordsList = [
      ...baseKeywords,
      ...servingLocationsData.map((loc) => `Physiotherapy in ${loc.nameEn}, ${loc.nameHi} Physiotherapist`)
    ].join(', ');

    // MedicalClinic & Physician & LocalBusiness & Hospital Schema
    const clinicSchema = {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "Hospital", "Physician", "LocalBusiness"],
      "name": "Prakash Physiotherapy Clinic & Hospital - Dr. Abhay Prakash Tiwari",
      "alternateName": "प्रकाश फिजियोथेरेपी क्लिनिक एवं अस्पताल भीमनगर (सुपौल)",
      "description": "Premier physiotherapy clinic & non-surgical rehabilitation hospital serving Bhimnagar, Birpur, Supaul District, and Nepal border region. Expert treatment for back pain, sciatica, slip disc, paralysis, and knee pain by Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi).",
      "image": [
        "https://prakashphysion.in/img/Prakash%20Physio%20Hero.webp",
        "https://prakashphysion.in/img/Abhay%20Prakash.webp",
        "https://prakashphysion.in/img/Therapy%20Session%201.webp",
        "https://prakashphysion.in/img/clinic%20photo.webp"
      ],
      "@id": "https://prakashphysion.in/#clinic",
      "url": "https://prakashphysion.in/",
      "telephone": ["+91-9711700817", "+91-9654874675", "+977-9819053588"],
      "priceRange": "₹₹ (Consultation ₹500, Session ₹300, Home Visit ₹700)",
      "currenciesAccepted": "INR, NPR",
      "paymentAccepted": "Cash, UPI, Google Pay, PhonePe",
      "sameAs": [
        "https://maps.app.goo.gl/9hx54wRLTqdXex5fA"
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Orthopedics",
        "Neurology",
        "SportsMedicine",
        "PediatricRehabilitation"
      ],
      "keywords": keywordsList,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhantabari Road, Bhimnagar (Shaileshpur)",
        "addressLocality": "Birpur, Supaul",
        "addressRegion": "Bihar",
        "postalCode": "854338",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.516236,
        "longitude": 86.959298
      },
      "hasMap": "https://maps.app.goo.gl/9hx54wRLTqdXex5fA",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "areaServed": areaServedList,
      "availableService": availableServicesList,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "154",
        "bestRating": "5",
        "worstRating": "1"
      },
      "physician": {
        "@type": "Physician",
        "name": doctorData.nameEn,
        "alternateName": doctorData.nameHi,
        "jobTitle": doctorData.titleEn,
        "medicalSpecialty": "Orthopedic & Neurological Physiotherapist",
        "alumniOf": [
          "New Delhi Institutes (M.P.T. Orthopedics)",
          "Magadh University (B.P.T.)"
        ],
        "identifier": doctorData.registrationNumbers,
        "image": "https://prakashphysion.in/img/Abhay%20Prakash.webp",
        "description": doctorData.aboutEn
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": lang === 'hi' ? faq.questionHi : faq.questionEn,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'hi' ? faq.answerHi : faq.answerEn
        }
      }))
    };

    // Google SiteName & WebSite Schema (Controls Top Brand Title in Google Search Cards)
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Prakash Physiotherapy Clinic",
      "alternateName": [
        "Prakash Physiotherapy Hospital",
        "प्रकाश फिजियोथेरेपी क्लिनिक",
        "Prakash Physio"
      ],
      "url": "https://prakashphysion.in/"
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": lang === 'hi' ? 'गृह पृष्ठ' : 'Home',
          "item": "https://prakashphysion.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": lang === 'hi' ? 'इलाज एवं सेवाएं' : 'Treatments',
          "item": "https://prakashphysion.in/#treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": lang === 'hi' ? 'संपर्क करें' : 'Contact',
          "item": "https://prakashphysion.in/#contact"
        }
      ]
    };

    // Inject JSON-LD Script Tags into Document Head cleanly
    const injectJsonLd = (id: string, schemaObj: object) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();

      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    injectJsonLd('jsonld-website', websiteSchema);
    injectJsonLd('jsonld-clinic', clinicSchema);
    injectJsonLd('jsonld-faq', faqSchema);
    injectJsonLd('jsonld-breadcrumb', breadcrumbSchema);

    return () => {
      ['jsonld-website', 'jsonld-clinic', 'jsonld-faq', 'jsonld-breadcrumb'].forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) elem.remove();
      });
    };
  }, [lang, currentPage]);

  return null;
};
