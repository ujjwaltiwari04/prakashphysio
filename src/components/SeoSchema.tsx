import React, { useEffect } from 'react';
import { Language } from '../types';
import { faqData, servingLocationsData, doctorData, treatmentsData } from '../data/clinicData';

interface SeoSchemaProps {
  lang: Language;
  currentPage?: string;
}

export const SeoSchema: React.FC<SeoSchemaProps> = ({ currentPage = 'home' }) => {
  useEffect(() => {
    // 1. Set HTML Root Language Attribute to English
    document.documentElement.lang = 'en';

    // 2. Dynamic Title & Meta Description based on Page (English Only)
    let pageTitle = 'Prakash Physiotherapy Clinic | Dr. Abhay Tiwari | Bhimnagar, Supaul';
    let metaDescription = 'Top Physiotherapy Hospital & Clinic for Back Pain, Sciatica & Paralysis by Dr. Abhay Tiwari. Serving Birpur & Nepal border. Bhimnagar, Supaul.';

    if (currentPage === 'treatments') {
      pageTitle = 'Treatments & Medical Services | Prakash Physiotherapy Clinic Bhimnagar Supaul';
      metaDescription = 'Non-surgical physical therapy for back pain, sciatica, slip disc, paralysis stroke rehab, cervical spondylosis & knee joint arthritis in Bhimnagar, Birpur & Supaul.';
    } else if (currentPage === 'reviews') {
      pageTitle = 'Patient Recovery Reviews & FAQs | Prakash Physiotherapy Clinic Bhimnagar';
      metaDescription = 'Verified patient recovery reviews, 4.9★ Google ratings & detailed FAQ answers for physiotherapy consultation in Supaul District.';
    } else if (currentPage === 'contact') {
      pageTitle = 'Clinic Address & Appointment | Prakash Physiotherapy Clinic Bhimnagar Supaul';
      metaDescription = 'Bhantabari Road, Bhimnagar, Birpur, Supaul. Contact +91 9711700817 for OPD appointment & 24/7 Home Visit physiotherapy care.';
    } else if (currentPage === 'seo-locations') {
      pageTitle = '60+ Locations Directory | Prakash Physiotherapy Clinic Supaul';
      metaDescription = 'OPD and Home Visit physiotherapy coverage across 60+ villages in Supaul district, Araria and Nepal border communities.';
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

    // 3. Generate Clean English JSON-LD Schema Data
    const areaServedList = servingLocationsData.map((loc) => ({
      "@type": "AdministrativeArea",
      "name": `${loc.nameEn}, ${loc.districtEn}`
    }));

    const availableServicesList = treatmentsData.map((t) => ({
      "@type": "MedicalProcedure",
      "name": t.titleEn,
      "description": t.shortDescEn,
      "url": `https://prakashphysio.in/treatments/${t.slug}.html`,
      "bodyLocation": t.category === 'spine' ? 'Spine & Back' : t.category === 'neuro' ? 'Nervous System & Brain' : 'Joints & Muscles'
    }));

    const baseKeywords = [
      "Physiotherapy in Supaul District",
      "Best Hospital in Bhimnagar",
      "Best Clinic in Bhimnagar",
      "Hospital near Birpur",
      "Clinic near Birpur",
      "Best Physiotherapist in Supaul",
      "Physiotherapy Clinic Supaul",
      "Dr Abhay Prakash Tiwari"
    ];
    const keywordsList = [
      ...baseKeywords,
      ...servingLocationsData.map((loc) => `Physiotherapy in ${loc.nameEn}`)
    ].join(', ');

    const clinicSchema = {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "Hospital", "Physician", "LocalBusiness"],
      "name": "Prakash Physiotherapy Clinic - Dr. Abhay Prakash Tiwari",
      "alternateName": ["Prakash Physiotherapy Hospital", "Prakash Physio Bhimnagar"],
      "description": "Premier physiotherapy clinic & non-surgical rehabilitation center serving Bhimnagar, Birpur, Supaul District, and Nepal border region. Expert treatment for back pain, sciatica, slip disc, paralysis, and knee pain by Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi).",
      "image": [
        "https://prakashphysio.in/img/Prakash%20Physio%20Hero.webp",
        "https://prakashphysio.in/img/Abhay%20Prakash.webp",
        "https://prakashphysio.in/img/Therapy%20Session%201.webp",
        "https://prakashphysio.in/img/clinic%20photo.webp"
      ],
      "@id": "https://prakashphysio.in/#clinic",
      "url": "https://prakashphysio.in/",
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
        "jobTitle": doctorData.titleEn,
        "medicalSpecialty": "Orthopedic & Neurological Physiotherapist",
        "alumniOf": [
          "New Delhi Institutes (M.P.T. Orthopedics)",
          "Magadh University (B.P.T.)"
        ],
        "identifier": doctorData.registrationNumbers,
        "image": "https://prakashphysio.in/img/Abhay%20Prakash.webp",
        "description": doctorData.aboutEn
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.questionEn,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answerEn
        }
      }))
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Prakash Physiotherapy Clinic",
      "alternateName": [
        "Prakash Physiotherapy Hospital",
        "Prakash Physio"
      ],
      "url": "https://prakashphysio.in/"
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://prakashphysio.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Treatments",
          "item": "https://prakashphysio.in/#treatments"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://prakashphysio.in/#contact"
        }
      ]
    };

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
  }, [currentPage]);

  return null;
};
