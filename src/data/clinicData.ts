import { Treatment, RecoveryStory, DoctorProfile, GoogleReview, FAQItem, BlogPost, GalleryImage, ServingLocation } from '../types';

export const doctorData: DoctorProfile = {
  nameHi: "डॉ. अभय प्रकाश तिवारी",
  nameEn: "Dr. Abhay Prakash Tiwari",
  titleHi: "वरिष्ठ फिजियोथेरेपिस्ट एवं ऑर्थोपेडिक पुनर्वास विशेषज्ञ",
  titleEn: "Senior Physiotherapist & Orthopedic Rehab Specialist",
  qualificationsHi: [
    "एम.पी.टी. ऑर्थोपेडिक्स (नई दिल्ली)",
    "बी.पी.टी. (मगध विश्वविद्यालय)",
    "सदस्य: इंडियन एसोसिएशन ऑफ फिजियोथेरेपिस्ट्स (M.I.A.P. 42989)",
    "पंजीकृत फिजियोथेरेपिस्ट (G.A.P.T./22/G00562)"
  ],
  qualificationsEn: [
    "M.P.T. Orthopedics (New Delhi)",
    "B.P.T. (Magadh University)",
    "Member: Indian Association of Physiotherapists (M.I.A.P. 42989)",
    "Registered Physiotherapist (G.A.P.T./22/G00562)"
  ],
  registrationNumbers: ["M.I.A.P. 42989", "G.A.P.T./22/G00562"],
  experienceYears: 12,
  aboutHi: "डॉ. अभय प्रकाश तिवारी ने नई दिल्ली के प्रमुख चिकित्सा संस्थानों में वर्षों तक अपनी सेवाएं दी हैं। वे ऑर्थोपेडिक (हड्डी व जोड़) और न्यूरोलॉजिकल (नस व मस्तिष्क) पुनर्वास के विशेषज्ञ हैं। भीमनगर, सुपौल और बीरपुर क्षेत्र में आधुनिक, वैज्ञानिक एवं बिना किसी सर्जरी के स्थायी दर्द निवारक फिजियोथेरेपी इलाज उपलब्ध कराना उनका संकल्प है।",
  aboutEn: "Dr. Abhay Prakash Tiwari has served in top medical centers in New Delhi. Specialized in orthopedic and neurological rehabilitation, his mission is to offer Delhi-grade, scientific, and surgery-free physical therapy care locally to residents of Bhimnagar, Supaul, Birpur, and nearby Nepal.",
  missionHi: "ग्रामीण व सीमावर्ती क्षेत्र के मरीजों को महानगरों जैसा सर्वोत्तम और किफायती इलाज अपने घर के पास ही उपलब्ध कराना।",
  missionEn: "Providing metro-quality advanced physical rehabilitation to rural and border communities at affordable costs near home.",
  specializationsHi: [
    "स्लिप डिस्क व साइटिका बिना ऑपरेशन इलाज",
    "स्ट्रोक व लकवा (Paralysis) न्यूरो पुनर्वास",
    "घुटने व हिप रिप्लेसमेंट के बाद रिकवरी",
    "सर्वाइकल स्पोंडिलाइटिस व गर्दन दर्द",
    "ड्राई नीडलिंग व कपिंग थेरेपी (Myofascial Release)",
    "फ्रोजन शोल्डर व जोड़ों की अकड़न"
  ],
  specializationsEn: [
    "Non-Surgical Slip Disc & Sciatica Care",
    "Stroke & Paralysis Neuro Rehabilitation",
    "Post Knee & Hip Replacement Recovery",
    "Cervical Spondylosis & Neck Pain Therapy",
    "Dry Needling & Cupping Myofascial Release",
    "Frozen Shoulder & Joint Stiffness Release"
  ],
  image: "/img/Abhay Prakash.webp"
};

export const treatmentsData: Treatment[] = [
  {
    id: "back-pain",
    slug: "back-pain-treatment-bhimnagar",
    titleHi: "कमर दर्द व पीठ दर्द (Back Pain Therapy)",
    titleEn: "Back Pain & Lumbar Spine Therapy",
    category: "spine",
    iconName: "Activity",
    image: "/img/backpain.webp",
    shortDescHi: "लंबे समय से कमर दर्द, झुकने में तकलीफ या रीढ़ की हड्डी में अकड़न का सटीक फिजियोथेरेपी इलाज।",
    shortDescEn: "Comprehensive physical therapy for chronic lower back stiffness, postural stress, and lumbar spine dysfunction.",
    fullDescHi: "कमर दर्द (Back Pain) आज के समय में अत्यधिक वजन उठाने, गलत मुद्रा में बैठने या उम्र के साथ रीढ़ की हड्डी में घिसाव के कारण बहुत सामान्य है। हमारे क्लिनिक में आईएफटी, ट्रैक्शन, कोर स्ट्रेंथेनिंग और मैनुअल थेरेपी द्वारा बिना किसी सर्जरी या दर्द निवारक दवाइयों के कमर दर्द का जड़ से इलाज किया जाता है।",
    fullDescEn: "Lower back pain affects daily work, sitting, and lifting. Using gentle spinal traction, IFT electrotherapy, core stabilization exercises, and manual therapy, Dr. Abhay Prakash Tiwari restores natural spinal alignment and relieves deep muscle strain.",
    symptomsHi: ["कमर के निचले हिस्से में तेज या मीठा दर्द", "झुकने या उठने-बैठने में कठिनाई", "पैरों में भारीपन या खिंचाव", "सुबह उठने पर पीठ में अत्यधिक अकड़न"],
    symptomsEn: ["Dull or sharp pain in lower spine", "Difficulty bending forward or getting up from bed", "Heaviness or tightness radiating to legs", "Morning stiffness in lower lumbar area"],
    causesHi: ["भारी वजन उठाना या अचानक झटका लगना", "लगातार गलत तरीके से बैठना", "रीढ़ की हड्डी के डिस्क का घिसना", "कमजोर मांसपेशियां"],
    causesEn: ["Improper heavy lifting", "Prolonged poor sitting posture", "Age-related spinal disc degeneration", "Weak core and postural trunk muscles"],
    techniquesHi: ["कंप्यूटर संचालित स्पाइनल ट्रैक्शन", "इंटरफेरेंशियल थेरेपी (IFT)", "कोर मोबिलाइजेशन एक्सरसाइज", "मुद्रा सुधार (Postural Correction)"],
    techniquesEn: ["Computerized Lumbar Traction", "Interferential Therapy (IFT)", "Core Muscle Rehabilitation", "Postural Adjustment & Ergonomics"]
  },
  {
    id: "sciatica",
    slug: "sciatica-treatment-supaul",
    titleHi: "साइटिका दर्द का इलाज (Sciatica Pain Release)",
    titleEn: "Sciatica Nerve Compression Therapy",
    category: "spine",
    iconName: "Zap",
    image: "/img/nerve compression therapy.webp",
    shortDescHi: "कमर से लेकर पैर की उंगलियों तक जाने वाली नस के खिंचाव और झनझनाहट का सटीक समाधान।",
    shortDescEn: "Targeted decompression therapy for sciatic nerve irritation radiating down the leg.",
    fullDescHi: "साइटिका में कमर की दबी हुई नस के कारण पूरे पैर में तेज दर्द, चींटियां काटने जैसी झनझनाहट और सुन्नपन महसूस होता है। हमारी एडवांस्ड न्यूरो-मोबिलाइजेशन तकनीक से दबी हुई नस का दबाव कम किया जाता है जिससे मरीज को त्वरित राहत मिलती है।",
    fullDescEn: "Sciatica occurs when the sciatic nerve is pinched in the lumbar spine. Our clinic uses nerve gliding exercises, localized decompression, and targeted electrotherapy to relieve leg numbness and sharp shooting pains.",
    symptomsHi: ["एक पैर में कमर से नीचे तक तेज दर्द", "पैर में सुन्नपन या झनझनाहट", "पैर में कमजोरी या चलने में लंगड़ापन"],
    symptomsEn: ["Sharp radiating pain along one leg", "Numbness and tingling sensation in calf/foot", "Weakness or difficulty placing weight on foot"],
    causesHi: ["एल4-एल5 या एल5-एस1 डिस्क का दबना", "साइटिक नस पर सूजन", "रीढ़ की हड्डी का संकुचित होना (Stenosis)"],
    causesEn: ["L4-L5 / L5-S1 herniated disc compression", "Sciatic nerve inflammation", "Spinal canal narrowing"],
    techniquesHi: ["न्यूरोडायनामिक्स (Nerve Gliding)", "लंबर ट्रैक्शन", "डीप टिश्यू मायोफेशियल रिलीज़", "स्ट्रेचिंग गाइडेंस"],
    techniquesEn: ["Neurodynamic Nerve Gliding", "Lumbar Mechanical Decompression", "Deep Myofascial Release", "Therapeutic Nerve Stretching"]
  },
  {
    id: "slip-disc",
    slug: "slip-disc-treatment-birpur",
    titleHi: "स्लिप डिस्क का गैर-सर्जिकल इलाज (Slip Disc Rehab)",
    titleEn: "Non-Surgical Slip Disc Rehabilitation",
    category: "spine",
    iconName: "Disc",
    image: "/img/slip_disc.webp",
    shortDescHi: "बिना ऑपरेशन रीढ़ की डिस्क को उसकी सही स्थिति में लाने के लिए विशिष्ट स्पाइनल रीहैब।",
    shortDescEn: "Specialized spinal rehabilitation to retract herniated discs without invasive spinal surgery.",
    fullDescHi: "जब रीढ़ की हड्डी के बीच की गद्दी (Disc) बाहर निकल आती है तो वह नसों को दबाने लगती है। सही समय पर मेकेंजी (McKenzie) विधि और स्पाइनल ट्रैक्शन द्वारा 90% से अधिक स्लिप डिस्क के मामलों को बिना सर्जरी के ठीक किया जा सकता है।",
    fullDescEn: "Herniated or slipped discs cause intense nerve pressure. Through the renowned McKenzie protocol, computerized traction, and posture re-education, Dr. Tiwari successfully helps patients avoid risky spinal operations.",
    symptomsHi: ["खांसने या छींकने पर कमर व पैर में तेज झटका", "बिस्तर से उठने में असहनीय दर्द", "कमर झुकने में अड़चन"],
    symptomsEn: ["Aggravated pain on coughing or sneezing", "Inability to lift legs or sit straight", "Severe back stiffness"],
    causesHi: ["अचानक भारी सामान उठा लेना", "रीढ़ की हड्डी पर अचानक आघात या चोट", "कमर का लचीलापन समाप्त होना"],
    causesEn: ["Sudden strain during heavy lifting", "Traumatic spinal jerk", "Degenerative disc loss"],
    techniquesHi: ["मेकेंजी स्पाइनल एक्सटेंशन", "कंप्यूटर कंट्रोल ट्रैक्शन", "कोर मसल री-एजुकेशन"],
    techniquesEn: ["McKenzie Spine Protocol", "Computerized Traction System", "Core Stability Re-education"]
  },
  {
    id: "paralysis-stroke",
    slug: "paralysis-stroke-physiotherapy-bihar",
    titleHi: "लकवा एवं स्ट्रोक पुनर्वास (Paralysis & Stroke Rehab)",
    titleEn: "Paralysis & Stroke Neuro Rehabilitation",
    category: "neuro",
    iconName: "HeartPulse",
    image: "/img/stroke_paralysis.webp",
    shortDescHi: "ब्रेन स्ट्रोक के बाद शरीर के अंगों की गति और चलने-फिरने की क्षमता वापस लाने की न्यूरो थेरेपी।",
    shortDescEn: "Expert neurological rehabilitation restoring muscle strength, gait, and mobility after brain stroke.",
    fullDescHi: "लकवा (Paralysis/Hemiplegia) होने के बाद मांसपेशियों का सुन्न होना या नियंत्रण खो जाना बहुत दुखद होता है। न्यूरो-फिजियोथेरेपी तकनीक (PNF, Bobath Concept) द्वारा दिमाग की नसों को पुनर्जीवित करने का प्रयास किया जाता है ताकि मरीज आत्मनिर्भर बन सके।",
    fullDescEn: "Stroke rehabilitation requires patience and specialized neurological exercise protocols. Using Bobath principles, PNF techniques, and electrical muscle stimulation (EMS), we help stroke survivors regain independence.",
    symptomsHi: ["शरीर के एक तरफ का अंग काम न करना", "हाथ या पैर की मांसपेशियों में अत्यधिक ढीलापन या अकड़न", "संतुलन खोना व चलने में असमर्थता"],
    symptomsEn: ["Weakness or paralysis on one side of body (Hemiplegia)", "Muscle spasticity or flaccidity", "Loss of balance and motor coordination"],
    causesHi: ["मस्तिष्क में खून का थक्का जमना (Ischemic Stroke)", "ब्रेन हैमरेज या उच्च रक्तचाप", "मस्तिष्क नसों की क्षति"],
    causesEn: ["Ischemic stroke / blood clot", "Brain hemorrhage or severe hypertension", "Nerve pathways injury"],
    techniquesHi: ["बॉबाथ कांसेप्ट (Bobath Concept)", "पीएनएफ (PNF Pattern Therapy)", "फंक्शनल इलेक्ट्रिकल स्टिम्यूलेशन (FES)", "चाल व संतुलन अभ्यास"],
    techniquesEn: ["Bobath Neuro Concept", "PNF Therapeutic Patterns", "Functional Electrical Muscle Stimulation", "Gait & Balance Retraining"]
  },
  {
    id: "cervical-neck-pain",
    slug: "neck-pain-physiotherapy-supaul",
    titleHi: "गर्दन दर्द व सर्वाइकल (Cervical Pain Therapy)",
    titleEn: "Cervical Spondylosis & Neck Pain Care",
    category: "spine",
    iconName: "ShieldAlert",
    image: "/img/Therapy Session 1.webp",
    shortDescHi: "गर्दन में अकड़न, चक्कर आना और हाथों में दर्द जाने की सर्वाइकल समस्या का इलाज।",
    shortDescEn: "Effective relief for cervical spondylosis, neck muscle spasm, and radiating arm numbness.",
    fullDescHi: "गर्दन की हड्डियों में घिसाव (Cervical Spondylosis) या गलत तकिया लगाने से सिरदर्द, चक्कर और हाथों तक झनझनाहट फैल सकती है। सर्वाइकल ट्रैक्शन, सॉफ्ट टिश्यू मोबिलाइजेशन और नेक आइसोमेट्रिक्स द्वारा मरीज को स्थायी आराम मिलता है।",
    fullDescEn: "Cervical pain often causes dizziness, shoulder tension, and radiating hand tingling. Our cervical traction and isometric neck exercises relieve nerve pressure and restore neck posture.",
    symptomsHi: ["गर्दन घुमाने में तेज दर्द या अकड़न", "सिर के पीछे दर्द या चक्कर आना", "हाथ की उंगलियों में सुन्नपन"],
    symptomsEn: ["Severe neck stiffness on turning head", "Dizziness / Vertigo and tension headache", "Tingling radiating down shoulder to fingers"],
    causesHi: ["लगातार नीचे झुकाव रखना (मोबाइल/पढ़ाई)", "सर्वाइकल स्पाइन में घिसाव", "गर्दन की नसों पर दबाव"],
    causesEn: ["Forward head posture (text-neck)", "Degenerative cervical disc change", "Nerve root impingement"],
    techniquesHi: ["सर्वाइकल ट्रैक्शन", "आइसोमेट्रिक नेक एक्सरसाइज", "मायोफेशियल रिलीज़", "पोस्चर री-एजुकेशन"],
    techniquesEn: ["Cervical Traction Modality", "Isometric Neck Strengthening", "Myofascial Trigger Release", "Ergonomic Correction"]
  },
  {
    id: "joint-knee-pain",
    slug: "joint-pain-treatment-supaul",
    titleHi: "घुटने का दर्द व गठिया (Knee Osteoarthritis)",
    titleEn: "Knee Joint Pain & Osteoarthritis Therapy",
    category: "joint",
    iconName: "Activity",
    image: "/img/knee_osteoarthritis.webp",
    shortDescHi: "उम्र के साथ घुटने की गद्दी घिसने, कट-कट आवाज आने व सीढ़ी चढ़ने में दर्द का वैज्ञानिक इलाज।",
    shortDescEn: "Targeted joint lubrication exercises, strengthening, and pain relief modalities for knee osteoarthritis.",
    fullDescHi: "ऑस्टियोआर्थराइटिस (Osteoarthritis) में घुटने के अंदर का कार्टिलेज घिस जाता है जिससे हड्डियों का आपस में रगड होना शुरू हो जाता है। हमारे क्लिनिक में क्वाड्रीसेप्स मजबूती, लेजर/अल्ट्रासाउंड थेरेपी और मोबिलाइजेशन से घुटने के ऑपरेशन को टाला जा सकता है।",
    fullDescEn: "Knee arthritis causes pain while walking, sitting down, or climbing stairs. Specialized quadriceps strengthening and joint mobilization significantly improve knee cartilage health and prevent joint replacement.",
    symptomsHi: ["सीढ़ी चढ़ते/उतरते समय घुटने में तेज दर्द", "घुटने से कट-कट की आवाज आना", "घुटने में सूजन और मोड़ते समय अकड़न"],
    symptomsEn: ["Pain while stair climbing or squatting", "Crepitus / clicking sound in knee", "Swelling and morning knee stiffness"],
    causesHi: ["उम्र बढ़ने से कार्टिलेज का घिसना", "अत्यधिक वजन", "घुटने की पुरानी चोट या यूरिक एसिड"],
    causesEn: ["Age-related cartilage breakdown", "Excess body weight putting load on knees", "Past knee injury or high uric acid"],
    techniquesHi: ["अल्ट्रासोनिक थेरेपी", "क्वाड्रीसेप्स व हैमस्ट्रिंग मजबूती", "जॉइंट मोबिलाइजेशन", "वेट-बेयरिंग गाइडेंस"],
    techniquesEn: ["Therapeutic Ultrasound", "Quadriceps Strengthening", "Manual Joint Mobilization", "Knee Taping & Alignment"]
  },
  {
    id: "frozen-shoulder",
    slug: "frozen-shoulder-treatment-bhimnagar",
    titleHi: "फ्रोजन शोल्डर / कंधा जाम (Frozen Shoulder Rehab)",
    titleEn: "Frozen Shoulder & Adhesive Capsulitis",
    category: "joint",
    iconName: "Dumbbell",
    image: "/img/frozen_shoulder.webp",
    shortDescHi: "कंधे का पूरी तरह जाम हो जाना, हाथ ऊपर न उठना और रात में सोने पर असहनीय दर्द।",
    shortDescEn: "Gradual shoulder capsule release, range-of-motion restoration, and pain relief therapy.",
    fullDescHi: "फ्रोजन शोल्डर (Adhesive Capsulitis) में कंधे की कैप्सूल सिकुड़ जाती है। मरीज न तो कपड़े बदल पाता है और न ही हाथ पीछे ले जा पाता है। पैसिव मोबिलाइजेशन, शुल्डर पुली, लेजर थेरेपी और स्ट्रेचिंग से कंधे की गति पूरी तरह बहाल की जाती है।",
    fullDescEn: "Frozen shoulder limits arm reach and causes agonizing night pain. Through gentle capsule mobilization, shoulder pulley workouts, and myofascial release, we restore complete shoulder range of motion.",
    symptomsHi: ["हाथ ऊपर उठाने या पीछे ले जाने में असफलता", "रात में कंधे के बल सोने पर तेज दर्द", "कंधे की मांसपेशियों में जकड़न"],
    symptomsEn: ["Inability to lift arm above head or behind back", "Severe night pain interrupting sleep", "Tight shoulder joint capsule"],
    causesHi: ["डायबिटीज (शुगर) के मरीजों में अधिक संभावना", "कंधे की पुरानी चोट या प्लास्टर", "कंधे का कम इस्तेमाल"],
    causesEn: ["High prevalence in diabetic patients", "Post-traumatic shoulder immobilization", "Chronic tendon inflammation"],
    techniquesHi: ["पैसिव जॉइंट मोबिलाइजेशन", "शुल्डर व्हील व पुली एक्सरसाइज", "मायोफेशियल रिलीज़", "हीटिंग व मोडैलिटीज़"],
    techniquesEn: ["Maitland Joint Mobilization", "Shoulder Pulley & Wand Rehab", "Myofascial Trigger Point Release", "Thermal Modalities"]
  },
  {
    id: "post-knee-replacement",
    slug: "knee-replacement-rehabilitation",
    titleHi: "घुटने के ऑपरेशन के बाद फिजियो (Post Knee Surgery Rehab)",
    titleEn: "Post-Total Knee Replacement (TKR) Rehab",
    category: "rehab",
    iconName: "Activity",
    image: "/img/post_knee_rehab.webp",
    shortDescHi: "घुटने का ऑपरेशन (TKR) कराने के बाद फिर से बिना सहारे चलना और घुटना मोड़ना सीखने का रीहैब।",
    shortDescEn: "Step-by-step physical therapy to regain full knee flexion, walking balance, and independence post surgery.",
    fullDescHi: "घुटने के रिप्लेसमेंट (TKR) के बाद सही फिजियोथेरेपी ही ऑपरेशन की सफलता तय करती है। हमारे क्लिनिक पर या होम केयर मार्गदर्शन में घुटना मोड़ने का अभ्यास, सूजन कम करना और बिना लाठी चलना सिखाया जाता है।",
    fullDescEn: "Post TKR surgery requires structured exercise to bend the knee to 120°+, reduce postoperative swelling, and walk confidently without crutches or walkers.",
    symptomsHi: ["ऑपरेशन के बाद घुटना मोड़ने में डर", "पैर की मांसपेशियों में कमजोरी", "चलने में लंगड़ापन"],
    symptomsEn: ["Stiffness and fear of bending post-surgery knee", "Thigh muscle atrophy", "Unsteady gait post operation"],
    causesHi: ["टोटल नी रिप्लेसमेंट (TKR) सर्जरी", "घुटने का लिगामेंट या मेनिस्कस ऑपरेशन"],
    causesEn: ["Total Knee Arthroplasty (TKA)", "Ligament / Meniscus surgery"],
    techniquesHi: ["सीपीएम (CPM Protocol)", "गेज ट्रेनिंग (चलने का अभ्यास)", "पटेला मोबिलाइजेशन", "स्वेलिंग रिडक्शन मसाज"],
    techniquesEn: ["Passive Flexion Therapy", "Gait & Balance Training", "Patellar Glide Mobilization", "Lymphatic Swelling Reduction"]
  },
  {
    id: "bell-palsy-facial",
    slug: "bells-palsy-facial-physiotherapy",
    titleHi: "बेल्स पाल्सी / मुंह का लकवा (Bell's Palsy Care)",
    titleEn: "Bell's Palsy & Facial Nerve Rehabilitation",
    category: "neuro",
    iconName: "Smile",
    image: "/img/bells_palsy.webp",
    shortDescHi: "मुंह का टेढ़ा होना, आंख बंद न होना या थूक/पानी बाहर निकलने का न्यूरो-स्टिम्यूलेशन इलाज।",
    shortDescEn: "Targeted facial nerve electrical stimulation and biofeedback exercises for rapid facial symmetry recovery.",
    fullDescHi: "बेल्स पाल्सी (Bell's Palsy) में चेहरे की सातवीं नस (Facial Nerve) में सूजन के कारण चेहरे का एक हिस्सा सुन्न या टेढ़ा हो जाता है। गैल्वेनिक मसल स्टिम्युलेटर (GMS) और चेहरे की विशेष कसरत से 2 से 4 सप्ताह में चेहरा पुनः सामान्य हो जाता है।",
    fullDescEn: "Bell's Palsy affects facial expression, eye closure, and speech. Early facial nerve stimulation and biofeedback exercises produce fast recovery in facial symmetry.",
    symptomsHi: ["चेहरे का एक तरफ टेढ़ा हो जाना", "एक आंख पूरी तरह बंद न होना", "पानी पीते समय मुंह के कोने से पानी गिरना"],
    symptomsEn: ["Facial drooping on one side", "Inability to close eye or smile symmetrically", "Fluid leaking from side of mouth"],
    causesHi: ["फेशियल नस (7th Cranial Nerve) में सूजन", "अचानक ठंडी हवा या वायरल इंफेक्शन"],
    causesEn: ["Facial nerve inflammation / compression", "Viral infection or sudden cold exposure"],
    techniquesHi: ["गैल्वेनिक मसल स्टिम्यूलेशन (GMS)", "फेशियल एक्सप्रेशन एक्सरसाइज", "टेपिंग व फेशियल मसाज"],
    techniquesEn: ["Galvanic Nerve & Muscle Stimulation", "Facial Neuromuscular Re-education", "Facial Kinesio Taping"]
  },
  {
    id: "sports-injury",
    slug: "sports-injury-physiotherapy-bihar",
    titleHi: "स्पोर्ट्स इंजरी व मांसपेशियों का खिंचाव (Sports Injury Rehab)",
    titleEn: "Sports Injury & Muscle Strain Therapy",
    category: "specialized",
    iconName: "Trophy",
    image: "/img/injury showcase.webp",
    shortDescHi: "खेलने या दौड़ने में मांसपेशियों का फटना, लिगामेंट खिंचाव (ACL/MCL) और टखना मुड़ना।",
    shortDescEn: "Rapid sports injury rehabilitation including ligament tears (ACL/MCL), ankle sprains, and hamstring pulls.",
    fullDescHi: "खिलाड़ियों, युवाओं व एथलीट्स के लिए लिगामेंट टियर, एंकल स्प्रेन और हैमस्ट्रिंग स्ट्रेन का त्वरित इलाज। कपिंग थेरेपी, काइनेसियोलॉजी टेपिंग व एथलेटिक रीहैब से खिलाड़ी जल्द मैदान में वापसी करते हैं।",
    fullDescEn: "From ankle sprains to ACL strains, our customized sports rehab incorporates Kinesio taping, dry needling, and sports-specific strength protocols to safely get athletes back into the game.",
    symptomsHi: ["अचानक तेज खिंचाव या पॉप की आवाज", "जोड़ पर अत्यधिक सूजन व नीला पड़ना", "पैर पर वजन रखने पर तेज दर्द"],
    symptomsEn: ["Sudden pop or tear sensation", "Joint swelling and localized bruising", "Severe pain on weight bearing"],
    causesHi: ["दौड़ने/कूदने में गलत लैंडिंग", "लिगामेंट पर अत्यधिक तनाव", "मांसपेशियों की थकावट"],
    causesEn: ["Improper landing or twisting motion", "Overstretching of joint ligaments", "Acute muscular fatigue"],
    techniquesHi: ["काइनेसियो टेपिंग", "कपिंग व ड्राई नीडलिंग", "प्लाइओमेट्रिक्स रीहैब", "आइस व कम्प्रेशन प्रोटोकॉल"],
    techniquesEn: ["Kinesiology Taping", "Cupping & Dry Needling", "Functional Plyometric Rehab", "PRICE Protocol"]
  },
  {
    id: "dry-needling",
    slug: "dry-needling-therapy-bhimnagar",
    titleHi: "ड्राई नीडलिंग थेरेपी (Dry Needling Therapy)",
    titleEn: "Advanced Dry Needling & Trigger Point Therapy",
    category: "specialized",
    iconName: "Needle",
    image: "/img/dry_needling.webp",
    shortDescHi: "मांसपेशियों के गहरे दर्दनाक ट्रिगर पॉइंट्स को सूक्ष्म सुई द्वारा तुरंत रिलैक्स करने की आधुनिक विधि।",
    shortDescEn: "Targeted insertion of fine acupuncture needles into muscular trigger points for immediate deep pain release.",
    fullDescHi: "ड्राई नीडलिंग एक अत्यधिक प्रभावी तकनीक है जिसमें पतली सुइयों द्वारा मांसपेशियों में बने दर्दनाक गांठों (Trigger Points) को उत्तेजित कर रिलैक्स किया जाता है। इससे सालों पुराना दर्द मिनटों में हल्का हो जाता है।",
    fullDescEn: "Dry needling targets myofascial trigger points that cause stubborn knots and nerve tightness. It increases localized blood flow and releases chronic muscle spasms rapidly.",
    symptomsHi: ["मांसपेशी में छूने पर तेज गांठ महसूस होना", "सालों पुराना पुराना मांसपेशीय दर्द", "दबाने पर दूर तक फैलने वाला दर्द"],
    symptomsEn: ["Palpable tight knots in muscles", "Chronic localized muscular ache", "Referred pain patterns"],
    causesHi: ["पुरानी चोट या अत्यधिक तनाव", "मांसपेशियों में लैक्टिक एसिड जमा होना"],
    causesEn: ["Chronic overuse / muscle overload", "Postural spasm and lactic acid accumulation"],
    techniquesHi: ["ट्रिगर पॉइंट ड्राई नीडलिंग", "मायोफेशियल रिलीज़", "इलेक्ट्रो-नीडलिंग (यदि आवश्यक हो)"],
    techniquesEn: ["Trigger Point Needle Deactivation", "Myofascial Tissue Release", "Electro-Acupuncture Stimulation"]
  },
  {
    id: "cupping-therapy",
    slug: "cupping-therapy-bhimnagar",
    titleHi: "कपिंग थेरेपी (Myofascial Cupping Therapy)",
    titleEn: "Myofascial Vacuum Cupping Therapy",
    category: "specialized",
    iconName: "Sparkles",
    image: "/img/cupping therapy.webp",
    shortDescHi: "सक्शन कप द्वारा रक्त संचार बढ़ाकर मांसपेशियों की अकड़न और जहरीले तत्वों को दूर करने का इलाज।",
    shortDescEn: "Suction cup therapy promoting deep tissue circulation, myofascial release, and inflammation reduction.",
    fullDescHi: "कपिंग थेरेपी में त्वचा पर वैक्यूम कप लगाए जाते हैं जिससे जकड़ी हुई मांसपेशियां ढीली होती हैं और रक्त का संचार कई गुना बढ़ जाता है। पीठ, कंधे और जांघों की अकड़न में यह तुरंत चमत्कारिक राहत देता है।",
    fullDescEn: "Vacuum cupping decompresses stiff fascial layers and enhances localized blood circulation, accelerating muscle tissue recovery and flushing out metabolic waste.",
    symptomsHi: ["कमर और कंधे में लगातार जकड़न", "व्यायाम या काम के बाद भारीपन", "कमजोरी व सुस्ती"],
    symptomsEn: ["Persistent tightness in upper/lower back", "Post-work muscular exhaustion", "Restricted tissue flexibility"],
    causesHi: ["खराब ब्लड सर्कुलेशन", "मांसपेशियों का कड़ा होना"],
    causesEn: ["Poor localized microcirculation", "Deep tissue fascial adhesions"],
    techniquesHi: ["ड्राई वैक्यूम कपिंग", "ग्लाइडिंग/डायनामिक कपिंग", "मायोफेशियल रिलीज़"],
    techniquesEn: ["Dry Vacuum Cupping", "Dynamic Gliding Cupping", "Soft Tissue Decompression"]
  }
];

export const recoveryStoriesData: RecoveryStory[] = [
  {
    id: "case-1",
    patientInitials: "R. K. Yadav",
    age: 48,
    locationHi: "ग्राम - भीमनगर (सुपौल)",
    locationEn: "Bhimnagar Village (Supaul)",
    conditionHi: "गंभीर साइटिका व L4-L5 स्लिप डिस्क (3 महीने से चलने में असमर्थ)",
    conditionEn: "Severe Sciatica & L4-L5 Slip Disc (Unable to walk for 3 months)",
    treatmentDurationHi: "3 सप्ताह (21 दिन)",
    treatmentDurationEn: "3 Weeks (21 Days)",
    storyHi: "रमेश जी खेती का काम करते हैं। वजन उठाने से उनकी कमर की नस दब गई थी और डॉक्टरों ने ऑपरेशन की सलाह दी थी। प्रकाश फिजियोथेरेपी क्लिनिक में डॉ. अभय प्रकाश तिवारी द्वारा लंबर ट्रैक्शन, मेकेंजी एक्सरसाइज और ड्राई नीडलिंग दी गई।",
    storyEn: "Ramesh ji is a local farmer who sustained severe nerve compression while lifting loads. Surgery was recommended elsewhere. Under Dr. Tiwari's care using traction, McKenzie extension, and dry needling, he recovered without any operation.",
    outcomeHi: "बिना ऑपरेशन 100% दर्द मुक्त। अब वे पुनः खेत में बिना किसी लाठी या दर्द के सामान्य रूप से काम कर रहे हैं।",
    outcomeEn: "100% pain-free without surgery. He is now back to farming and daily activity comfortably.",
    rating: 5,
    verified: true
  },
  {
    id: "case-2",
    patientInitials: "Sunita Devi",
    age: 52,
    locationHi: "बीरपुर (बिहार)",
    locationEn: "Birpur Town (Bihar)",
    conditionHi: "दोनों कंधों में फ्रोजन शोल्डर (कंधे पूरी तरह जाम)",
    conditionEn: "Bilateral Frozen Shoulder (Severe range loss)",
    treatmentDurationHi: "4 सप्ताह",
    treatmentDurationEn: "4 Weeks",
    storyHi: "सुनीता जी लंबे समय से डायबिटीज से पीड़ित थीं। उनके दोनों कंधे इतने जाम हो चुके थे कि वे खुद से कपड़े भी नहीं बदल पाती थीं और रात में दर्द से सो नहीं पाती थीं।",
    storyEn: "Sunita Devi, a diabetic patient from Birpur, suffered from frozen shoulders restricting her arm movement completely and causing agonizing sleep disturbances.",
    outcomeHi: "कंधों की मूवमेंट पूरी तरह वापस आ गई। अब वे बिना किसी सहायता के दैनिक कार्य कर रही हैं।",
    outcomeEn: "Full shoulder range restored. She manages all household chores independently now.",
    rating: 5,
    verified: true
  },
  {
    id: "case-3",
    patientInitials: "M. A. Ansari",
    age: 61,
    locationHi: "राजविराज (नेपाल बॉर्डर)",
    locationEn: "Rajbiraj (Nepal Border Area)",
    conditionHi: "ब्रेन स्ट्रोक के बाद दायां अंग लकवाग्रस्त (Hemiplegia)",
    conditionEn: "Post Brain Stroke Right Side Paralysis (Hemiplegia)",
    treatmentDurationHi: "2 महीने का सतत न्यूरो रीहैब",
    treatmentDurationEn: "2 Months Continuous Neuro Rehab",
    storyHi: "अंसार साहब नेपाल से हमारे क्लिनिक आए थे। स्ट्रोक के बाद उनका दायां हाथ और पैर बिल्कुल बेजान हो चुका था। हमारे क्लिनिक में बॉबाथ न्यूरो रीहैब और गैल्वेनिक स्टिम्यूलेशन से इलाज हुआ।",
    storyEn: "Mr. Ansari traveled across the Nepal border for stroke rehabilitation. His right hand and leg lacked motor control. Through Bobath therapy and regular electrical nerve stimulation, muscle firing resumed.",
    outcomeHi: "अब वे बिना किसी सहारे के खुद चलकर दुकान जा पाते हैं और हाथ से वस्तुएं पकड़ पा रहे हैं।",
    outcomeEn: "He can now walk independently without a cane and hold objects comfortably with his right hand.",
    rating: 5,
    verified: true
  },
  {
    id: "case-4",
    patientInitials: "G. S. Thapa",
    age: 34,
    locationHi: "कोशी बैराज (नेपाल)",
    locationEn: "Kosi Barrage Area (Nepal)",
    conditionHi: "ACL लिगामेंट ऑपरेशन के बाद घुटने में अत्यधिक अकड़न",
    conditionEn: "Post ACL Surgery Knee Stiffness & Muscle Atrophy",
    treatmentDurationHi: "1 महीने की स्पोर्ट्स थेरेपी",
    treatmentDurationEn: "1 Month Sports Rehab",
    storyHi: "फुटबॉल खेलते समय घुटने की चोट का ऑपरेशन हुआ था लेकिन ऑपरेशन के बाद घुटना 90 डिग्री से ज्यादा नहीं मुड़ पा रहा था। काइनेसियो टेपिंग और नी मोबिलाइजेशन से रीहैब कराया गया।",
    storyEn: "Post ACL surgery, Mr. Thapa experienced restricted knee flexion. Through athletic mobilization and quadriceps retraining, knee flexion achieved 135 degrees.",
    outcomeHi: "घुटने की फ्लेक्सिबिलिटी 100% बहाल। पुनः दौड़ने व खेल में भाग लेने योग्य बने।",
    outcomeEn: "Achieved complete knee flexion and returned to active sports safely.",
    rating: 5,
    verified: true
  }
];

export const googleReviewsData: GoogleReview[] = [
  {
    id: "g-rev-1",
    authorName: "Ujjwal Tiwari",
    locationHi: "गूगल मैप्स समीक्षा (Google Review)",
    locationEn: "Google Maps Verified Review",
    rating: 5,
    timeAgoHi: "गूगल रीव्यू",
    timeAgoEn: "Google Verified Review",
    textHi: "यह क्लिनिक मेरे रिश्तेदार का है, लेकिन मेरी समीक्षा पूरी तरह से सच्ची है। क्रिकेट खेलते समय मेरे हाथ की मांसपेशी में चोट लग गई थी और मैंने यहाँ इलाज कराया। रिकवरी बहुत अच्छी रही और डॉक्टर साहब द्वारा बताए गए व्यायामों से बहुत बड़ा अंतर आया। कुछ ही हफ़्तों में मैं अपने हाथ का सामान्य रूप से इस्तेमाल करने लगा। कुल मिलाकर बहुत अच्छा अनुभव रहा। फिजियोथेरेपी के लिए इस क्लिनिक का निश्चित रूप से सुझाव दूंगा।",
    textEn: "Well, this clinic belongs to my relative. However, my review is very genuine. I had a hand muscle injury while playing cricket and got treated here. The recovery went really well, and the exercises they suggested made a big difference. Within a few weeks, I was able to use my hand normally again and get back to playing. Overall, a very good experience. Would definitely recommend this clinic for physiotherapy.",
    treatmentTagHi: "हाथ की मांसपेशीय चोट (Cricket Injury)",
    treatmentTagEn: "Hand Muscle Injury & Sports Rehab",
    source: "google"
  },
  {
    id: "g-rev-2",
    authorName: "SmaRty",
    locationHi: "गूगल मैप्स समीक्षा (Google Review)",
    locationEn: "Google Maps Verified Review",
    rating: 5,
    timeAgoHi: "गूगल रीव्यू",
    timeAgoEn: "Google Verified Review",
    textHi: "चाहे आप भारी वजन उठाने (Heavy Lifting) के खिंचाव से उबर रहे हों, अपनी मूवमेंट मेकैनिक्स को ठीक कर रहे हों या जिम में अपनी पीक परफॉर्मेंस हासिल करने की कोशिश कर रहे हों, डॉ. अभय प्रकाश तिवारी स्पोर्ट्स फिजियोथेरेपी में गोल्ड स्टैंडर्ड हैं। वे केवल दर्द ठीक नहीं करते—वे आपको और अधिक मजबूत और सुरक्षित रूप से वेट लिफ्टिंग करने के लिए तैयार करते हैं।",
    textEn: "Whether you are recovering from a heavy lifting strain, fixing your movement mechanics, or trying to hit peak performance in the gym, Dr. Abhay Prakash Tiwari is the absolute gold standard in sports physiotherapy. He doesn't just fix the pain—he gets you back to lifting stronger & safer.",
    treatmentTagHi: "स्पोर्ट्स फिजियो व स्ट्रेंथ रीहैब",
    treatmentTagEn: "Sports Physiotherapy & Gym Strain Rehab",
    source: "google"
  },
  {
    id: "rev-1",
    authorName: "Subhash Chandra Jha",
    locationHi: "सुपौल, बिहार",
    locationEn: "Supaul, Bihar",
    rating: 5,
    timeAgoHi: "2 सप्ताह पहले",
    timeAgoEn: "2 weeks ago",
    textHi: "डॉ. अभय प्रकाश तिवारी सर बहुत ही ज्ञानी और विनम्र हैं। मुझे 2 साल से कमर दर्द था, पटना और दिल्ली में दिखाया पर आराम नहीं मिला। प्रकाश फिजियोथेरेपी भीमनगर में 15 दिन के इलाज से मेरा दर्द गायब हो गया। बहुत-बहुत धन्यवाद!",
    textEn: "Dr. Abhay Prakash Tiwari sir is extremely knowledgeable and patient-friendly. My 2-year old chronic lower back pain was cured in just 15 days of physical therapy at Bhimnagar clinic.",
    treatmentTagHi: "कमर दर्द (Back Pain)",
    treatmentTagEn: "Back Pain",
    source: "patient"
  },
  {
    id: "rev-2",
    authorName: "Pradeep Kumar Sah",
    locationHi: "बीरपुर, बिहार",
    locationEn: "Birpur, Bihar",
    rating: 5,
    timeAgoHi: "1 महीने पहले",
    timeAgoEn: "1 month ago",
    textHi: "बीरपुर और भीमनगर इलाके के लिए डॉ. तिवारी साहब वरदान हैं। पिताजी को स्ट्रोक हुआ था और पैर उठ नहीं रहा था। डॉक्टर साहब के रोजाना फिजियो से अब पिताजी खुद टहलने लगे हैं।",
    textEn: "Dr. Tiwari is a blessing for Birpur and Bhimnagar. My father suffered a stroke and couldn't lift his leg. Thanks to daily neuro physio, he is walking independently now.",
    treatmentTagHi: "लकवा (Paralysis Care)",
    treatmentTagEn: "Paralysis Care",
    source: "patient"
  },
  {
    id: "rev-3",
    authorName: "Bishnu Prasad Pokhrel",
    locationHi: "सप्तरी, नेपाल",
    locationEn: "Saptari, Nepal",
    rating: 5,
    timeAgoHi: "3 सप्ताह पहले",
    timeAgoEn: "3 weeks ago",
    textHi: "नेपाल बोर्डरबाट नजिकै भीमनगरमा यति राम्रो फिजियोथेरेपी क्लिनिक पाउनु धेरै खुसीको कुरा हो। डाक्टर साहेबको व्यवहार र उपचार उत्कृष्ट छ। मेरो गर्दन दर्द ठीक भयो।",
    textEn: "Getting such an advanced physiotherapy clinic right across the Nepal border at Bhimnagar is great. Excellent doctor and effective cervical neck treatment.",
    treatmentTagHi: "गर्दन दर्द (Cervical)",
    treatmentTagEn: "Cervical Neck Pain",
    source: "patient"
  },
  {
    id: "rev-4",
    authorName: "Manju Kumari Singh",
    locationHi: "भीमनगर, सुपौल",
    locationEn: "Bhimnagar, Supaul",
    rating: 5,
    timeAgoHi: "1 महीने पहले",
    timeAgoEn: "1 month ago",
    textHi: "मेरा दाहिना कंधा पूरी तरह जाम था (Frozen shoulder)। हाथ ऊपर नहीं उठता था। क्लिनिक की आधुनिक मशीनों और व्यायाम से 20 दिन में हाथ पूरा खुलने लगा।",
    textEn: "My right shoulder was completely frozen. In 20 days of treatment with modern equipment and shoulder exercises, my arm mobility is completely restored.",
    treatmentTagHi: "फ्रोजन शोल्डर (Frozen Shoulder)",
    treatmentTagEn: "Frozen Shoulder",
    source: "patient"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-pricing-homevisit",
    category: "general",
    questionHi: "क्लिनिक ओपीडी परामर्श शुल्क और होम विजिट (Home Visit) की क्या दरें हैं?",
    questionEn: "What are the OPD consultation fees and Home Visit charges?",
    answerHi: "हमारे क्लिनिक पर प्रथम ओपीडी परामर्श एवं मूल्यांकन सत्र का शुल्क ₹500 है। इसके बाद के नियमित थेरेपी सत्र (Follow-up Sessions) की फीस ₹300 प्रति सेशन है। इसके अलावा, जो मरीज चलने-फिरने में असमर्थ हैं या घर पर ही इलाज चाहते हैं, उनके लिए होम विजिट (Home Visit) सुविधा उपलब्ध है जिसका शुल्क ₹700 प्रति सेशन है।",
    answerEn: "At our clinic, the 1st OPD Consultation & Assessment session fee is ₹500. Subsequent daily treatment sessions are ₹300 per session. For patients who cannot travel or prefer home treatment, Home Visit Physiotherapy is available across surrounding locations at ₹700 per session."
  },
  {
    id: "faq-1",
    category: "general",
    questionHi: "इलाज के लिए कितने सेशन (दिन) की आवश्यकता होती है?",
    questionEn: "How many sessions (days) of physiotherapy are usually required?",
    answerHi: "सामान्य मांसपेशियों के खिंचाव में 5 से 7 दिन, जबकि गंभीर स्लिप डिस्क, साइटिका या फ्रोजन शोल्डर में 2 से 3 सप्ताह लगते हैं। लकवा (Paralysis) व स्ट्रोक के मामलों में मरीज की स्थिति के अनुसार 1 से 2 महीने का न्यूरो रीहैब आवश्यक हो सकता है।",
    answerEn: "Mild strain usually improves within 5-7 sessions. Severe slip disc, sciatica, or frozen shoulder may require 2-3 weeks. Paralysis & stroke recovery depends on motor response and may span 1-2 months."
  },
  {
    id: "faq-2",
    category: "treatment",
    questionHi: "क्या फिजियोथेरेपी से कमर या घुटने का ऑपरेशन (Surgery) रुक सकता है?",
    questionEn: "Can physiotherapy help avoid spine or knee surgery?",
    answerHi: "जी हां! लगभग 85% से 90% स्लिप डिस्क, साइटिका और शुरुआती घुटने के आर्थराइटिस के मामलों में सही समय पर ली गई फिजियोथेरेपी से ऑपरेशन की आवश्यकता समाप्त हो जाती है। डॉ. अभय प्रकाश तिवारी द्वारा विशेष स्पाइनल ट्रैक्शन व एक्सरसाइज कराई जाती है।",
    answerEn: "Yes! In nearly 85-90% of herniated disc, sciatica, and knee arthritis cases, timely structured physical therapy and spinal traction eliminate the need for surgery."
  },
  {
    id: "faq-3",
    category: "treatment",
    questionHi: "क्या क्लिनिक पर लकवा (Paralysis/Stroke) के मरीजों का इलाज होता है?",
    questionEn: "Do you treat paralysis and brain stroke patients?",
    answerHi: "जी हां, डॉ. अभय प्रकाश तिवारी न्यूरो-फिजियोथेरेपी के विशेषज्ञ हैं। क्लिनिक पर बॉबाथ कांसेप्ट, PNF और इलेक्ट्रिकल स्टिम्यूलेशन मशीनों द्वारा लकवाग्रस्त अंगों में पुनः जान फूंकने का काम किया जाता है।",
    answerEn: "Yes, Dr. Tiwari specializes in neurological physical therapy using Bobath, PNF patterns, and electrical muscle stimulation for stroke and paralysis recovery."
  },
  {
    id: "faq-4",
    category: "location",
    questionHi: "क्या नेपाल, बीरपुर या सुपौल से आने वाले मरीजों के लिए सीधी सुविधा है?",
    questionEn: "Is the clinic conveniently accessible for patients from Nepal, Birpur, or Supaul?",
    answerHi: "जी हां, हमारा क्लिनिक मेन बीरपुर-भीमनगर रोड, भीमनगर चौक पर स्थित है जो नेपाल बॉर्डर (कोशी बैराज/राजविराज) से केवल 5 से 10 मिनट की दूरी पर है। बीरपुर से यह मात्र 3 किमी तथा सुपौल शहर से सीधी बस व ऑटो द्वारा सुलभ है।",
    answerEn: "Yes! The clinic is situated on Main Birpur-Bhimnagar Road, Bhimnagar Chowk — just 5-10 minutes from Kosi Barrage / Nepal border, 3 km from Birpur, and directly connected to Supaul."
  },
  {
    id: "faq-5",
    category: "timing",
    questionHi: "क्लिनिक का समय क्या है और क्या आपातकालीन सेवा उपलब्ध है?",
    questionEn: "What are the clinic timings and is emergency service available?",
    answerHi: "ओपीडी का नियमित समय प्रतिदिन सुबह 8:00 बजे से रात 8:00 बजे तक है। अत्यधिक दर्द, चोट या अचानक आई समस्या के लिए 24 घंटे आपातकालीन फिजियो सेवा उपलब्ध है। आने से पहले फोन (+91 9711700817) अवश्य करें।",
    answerEn: "Regular OPD runs daily from 8:00 AM to 8:00 PM. Emergency care for acute injury or pain is available 24/7. Prior appointment via call (+91 9711700817) is recommended."
  },
  {
    id: "faq-6",
    category: "general",
    questionHi: "क्या बुजुर्ग मरीजों के लिए फिजियोथेरेपी सुरक्षित है?",
    questionEn: "Is physical therapy safe for elderly senior citizens?",
    answerHi: "बिल्कुल! बुजुर्ग मरीजों के लिए हम अत्यधिक कोमल (Gentle) और सुरक्षित व्यायाम तकनीकों का उपयोग करते हैं। इससे बुजुर्गों के जोड़ों का दर्द, चलने में लंगड़ापन और गिरने का डर दूर होता है।",
    answerEn: "Absolutely! We customize gentle, non-painful mobilization and balance exercises specifically tailored for senior citizens to reduce fall risks and joint aches."
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    slug: "back-pain-relief-physiotherapy-bhimnagar",
    titleHi: "कमर दर्द (Back Pain) से तुरंत राहत के 5 आसान उपाय और फिजियोथेरेपी के फायदे",
    titleEn: "5 Simple Ways to Relieve Lower Back Pain & Benefits of Physiotherapy",
    summaryHi: "कमर दर्द से परेशान हैं? जानें बिना गोली-दवाई के कमर दर्द को जड़ से खत्म करने के डॉक्टरी सुझाव और सावधानियां।",
    summaryEn: "Suffering from chronic back ache? Learn evidence-based non-surgical physical therapy solutions and posture habits.",
    date: "15 जनवरी 2026",
    readTime: "4 मिनट पढ़ें",
    categoryHi: "कमर व स्पाइन",
    categoryEn: "Spine Care",
    image: "/img/Prakash Physio Hero.webp",
    keywords: ["कमर दर्द", "Back Pain Bhimnagar", "Slip Disc Treatment Supaul", "Spine Physiotherapy"],
    contentHi: `
### कमर दर्द क्यों होता है?
आजकल हमारी जीवनशैली में लंबे समय तक बैठकर काम करना, गलत तरीके से भारी वजन उठाना और व्यायाम न करना कमर दर्द का सबसे बड़ा कारण बन गया है। जब हमारी रीढ़ की हड्डी के बीच की गद्दी (Disc) पर अधिक दबाव पड़ता है, तो मांसपेशियों में जकड़न आने लगती है।

### कमर दर्द से राहत के 5 मुख्य डॉक्टरी सुझाव:
1. **झुककर वजन न उठाएं:** जमीन से कोई भी वस्तु उठाते समय घुटनों को मोड़कर नीचे बैठें, सीधे कमर न झुकाएं।
2. **सही गद्दे का चुनाव:** बहुत ज्यादा नरम गद्दे के बजाय मध्यम सख्त या समतल बेड पर सोएं।
3. **लगातार न बैठें:** हर 45 मिनट के बाद उठकर 2 मिनट टहलें।
4. **सिकाई का नियम:** यदि अचानक दर्द हुआ हो तो बर्फ (Ice Pack) लगाएं, और यदि पुराना दर्द हो तो गर्म पानी की बोतल से सिकाई करें।
5. **स्पाइनल एक्सटेंशन एक्सरसाइज:** डॉ. अभय प्रकाश तिवारी की देखरेख में मेकेंजी एक्सरसाइज का नियमित अभ्यास करें।

### प्रकाश फिजियोथेरेपी क्लिनिक में विशेष इलाज:
हमारे क्लिनिक पर लंबर स्पाइनल ट्रैक्शन, आईएफटी और कोर स्ट्रेंथेनिंग मशीनों द्वारा कमर दर्द का सटीक इलाज किया जाता है। यदि आपको भी कमर दर्द या पैर में सुन्नपन महसूस हो रहा है तो भीमनगर स्थित क्लिनिक पर संपर्क करें।
    `,
    contentEn: `
### Why Does Lower Back Pain Occur?
Lower back pain is often triggered by poor posture, sudden heavy lifting, or age-related intervertebral disc degeneration. When core muscles weaken, spinal nerves experience undue friction and pressure.

### 5 Expert Tips for Back Pain Relief:
1. **Lift with Your Legs:** Always bend your knees when lifting objects from the ground rather than hinging at your waist.
2. **Firm Mattress Support:** Avoid overly soft sagging mattresses that distort spinal alignment.
3. **Take Micro-Breaks:** Avoid continuous sitting for more than 45 minutes without a short walk.
4. **Heat vs. Ice Protocol:** Use ice packs for acute sudden injuries and moist heat for chronic stiff back muscles.
5. **McKenzie Extension:** Perform guided extension exercises under professional physiotherapist supervision.

### Specialized Care at Prakash Physiotherapy Clinic:
Our Bhimnagar clinic offers computerized lumbar traction, IFT electrotherapy, and core muscle re-education. Contact Dr. Abhay Prakash Tiwari for a complete spine evaluation today.
    `
  },
  {
    id: "blog-2",
    slug: "sciatica-treatment-without-surgery",
    titleHi: "साइटिका (Sciatica) के लक्षण, कारण और बिना ऑपरेशन सटीक इलाज",
    titleEn: "Sciatica Symptoms, Causes & Non-Surgical Physiotherapy Cure",
    summaryHi: "क्या कमर से लेकर पैर तक तेज नस खिंचाव और झनझनाहट होती है? जानें बिना सर्जरी साइटिका को कैसे ठीक करें।",
    summaryEn: "Experiencing radiating leg pain and numbness? Understand how nerve decompression therapy heals sciatic pain.",
    date: "28 जनवरी 2026",
    readTime: "5 मिनट पढ़ें",
    categoryHi: "नसों की बीमारी",
    categoryEn: "Nerve Disorders",
    image: "/img/Therapy Session 1.webp",
    keywords: ["Sciatica Treatment Supaul", "साइटिका का इलाज", "Nerve Pain Birpur"],
    contentHi: `
### साइटिका क्या है?
साइटिका (Sciatica) शरीर की सबसे लंबी नस है जो रीढ़ की हड्डी के निचले हिस्से से शुरू होकर दोनों पैरों तक जाती है। जब एल4-एल5 या एल5-एस1 डिस्क खिसककर इस नस को दबा देती है, तो पूरे पैर में करंट जैसा तेज दर्द और चींटियां काटने जैसा सुन्नपन होता है।

### साइटिका के प्रमुख लक्षण:
* एक पैर में ऊपर से नीचे तक दर्द जाना
* पैर में कमजोरी या चलने में लंगड़ापन
* बैठने या छींकने पर दर्द का अचानक बढ़ जाना

### बिना ऑपरेशन साइटिका का इलाज:
प्रकाश फिजियोथेरेपी क्लिनिक में **न्यूरोडायनामिक्स (Nerve Gliding)** और **डीकंप्रेशन ट्रैक्शन** तकनीक द्वारा दबी हुई नस का दबाव हटाया जाता है। 85% से अधिक मरीज बिना किसी ऑपरेशन के 2 से 3 सप्ताह में पूरी तरह ठीक हो जाते हैं।
    `,
    contentEn: `
### What is Sciatica?
Sciatica refers to irritation of the sciatic nerve running from the lower back down to the calves and toes. Herniated L4-L5/L5-S1 discs pinch this nerve, triggering shooting electric-like pain.

### Key Symptoms:
* Radiating sharp ache from hip to calf
* Leg numbness, pins and needles, or muscular weakness
* Pain aggravated while sitting or coughing

### Non-Surgical Recovery at Our Clinic:
Through neurodynamic nerve gliding exercises, localized traction, and myofascial release, Dr. Abhay Prakash Tiwari relieves nerve compression safely within 2-3 weeks.
    `
  },
  {
    id: "blog-3",
    slug: "stroke-paralysis-physiotherapy-recovery",
    titleHi: "लकवा (Paralysis) के बाद मरीज फिर से कैसे चलने लगे? न्यूरो फिजियोथेरेपी का रोल",
    titleEn: "How Stroke & Paralysis Patients Regain Walking Ability Through Neuro Physio",
    summaryHi: "ब्रेन स्ट्रोक के बाद शुरुआती 6 महीने सबसे महत्वपूर्ण होते हैं। जानें न्यूरो रीहैब से मरीज को आत्मनिर्भर बनाने के उपाय।",
    summaryEn: "Early rehabilitation after stroke restores nerve pathways. Discover Bobath and electrical muscle stimulation care.",
    date: "05 फरवरी 2026",
    readTime: "6 मिनट पढ़ें",
    categoryHi: "न्यूरो रीहैब",
    categoryEn: "Neuro Rehab",
    image: "/img/electrotherapy.webp",
    keywords: ["Paralysis Physiotherapy Bihar", "Stroke Rehab Supaul", "लकवा का इलाज"],
    contentHi: `
### स्ट्रोक के बाद फिजियोथेरेपी क्यों जरूरी है?
ब्रेन स्ट्रोक (मस्तिष्क का दौरा) होने से दिमाग के जो हिस्से शरीर के अंगों को नियंत्रित करते हैं, उन्हें नुकसान पहुंचता है। मस्तिष्क में **न्यूरोप्लास्टिसिटी (Neuroplasticity)** नाम का गुण होता है, जिससे सही कसरत कराने पर दिमाग की नई नसें काम संभाल लेती हैं।

### न्यूरो फिजियोथेरेपी के मुख्य चरण:
1. **पैसिव मूवमेंट:** शुरुआती दिनों में जोड़ों को कड़ा होने से बचाना।
2. **इलेक्ट्रिकल स्टिम्यूलेशन (GMS/FES):** सुन्न पड़ चुकी मांसपेशियों को बिजली की बारीक तरंगों द्वारा जागृत करना।
3. **बॉबाथ व PNF एक्सरसाइज:** हाथ और पैर के तालमेल को बहाल करना।
4. **संतुलन व चाल प्रशिक्षण (Gait Training):** मरीज को खड़े होने और बिना लाठी चलने का अभ्यास।

डॉ. अभय प्रकाश तिवारी (M.P.T Ortho/Neuro) भीमनगर स्थित प्रकाश फिजियोथेरेपी क्लिनिक में लकवाग्रस्त मरीजों के लिए विशेष न्यूरो रीहैब सुविधाएं प्रदान करते हैं।
    `,
    contentEn: `
### Why Neuro Physiotherapy is Vital Post-Stroke:
Stroke damages brain motor areas. However, through neuroplasticity, the brain can reorganize pathways when stimulated with targeted physical therapy routines.

### Key Phases of Stroke Rehab:
1. **Passive Range of Motion:** Prevents joint stiffness and contractures.
2. **Electrical Muscle Stimulation:** Activates dormant nerve-muscle pathways.
3. **Bobath & PNF Training:** Restores limb coordination and grip.
4. **Gait & Balance Retraining:** Helps survivors stand and walk independently.
    `
  }
];

export const galleryData: GalleryImage[] = [
  {
    id: "gal-1",
    titleHi: "कमर दर्द फिजियोथेरेपी व लंबर स्पाइन केयर",
    titleEn: "Lumbar Spine & Back Pain Physiotherapy",
    category: "clinic",
    url: "/img/backpain.webp",
    alt: "Back pain physical therapy assessment and spine rehab"
  },
  {
    id: "gal-2",
    titleHi: "साइटिका व नसों का दबाव हटाने की थेरेपी",
    titleEn: "Sciatica & Nerve Compression Decompression Therapy",
    category: "equipment",
    url: "/img/nerve compression therapy.webp",
    alt: "Nerve compression decompression therapy session"
  },
  {
    id: "gal-3",
    titleHi: "मायोफेशियल वैक्यूम कपिंग थेरेपी सत्र",
    titleEn: "Myofascial Vacuum Cupping Therapy Session",
    category: "equipment",
    url: "/img/cupping therapy.webp",
    alt: "Cupping therapy session for muscle relaxation"
  },
  {
    id: "gal-4",
    titleHi: "विशेषज्ञ मैनुअल थेरेपी व नसों की मोबिलाइजेशन थेरेपी - डॉ. अभय प्रकाश तिवारी",
    titleEn: "Expert Manual Therapy & Joint Mobilization Session by Dr. Tiwari",
    category: "doctor",
    url: "/img/Therapy Session 1.webp",
    alt: "Dr. Abhay Prakash Tiwari conducting manual physical therapy session"
  },
  {
    id: "gal-5",
    titleHi: "चोट व स्किन बर्न रीहैब - हाथ व टिश्यू पुनर्वास जांच",
    titleEn: "Specialized Injury & Post-Burn Hand Rehabilitation Examination",
    category: "exercise",
    url: "/img/injury showcase.webp",
    alt: "Specialized post-burn hand injury recovery examination by Dr. Tiwari"
  },
  {
    id: "gal-6",
    titleHi: "बाल रोग एवं फिजियोथेरेपी उपचार - डॉ. अभय प्रकाश तिवारी मरीजों के साथ",
    titleEn: "Pediatric Physical Therapy & Patient Care by Dr. Abhay Prakash Tiwari",
    category: "doctor",
    url: "/img/child therapy.webp",
    alt: "Pediatric physiotherapy care session with Dr. Tiwari and family"
  },
  {
    id: "gal-7",
    titleHi: "एडवांस्ड इलेक्ट्रोथेरेपी एवं नसों की उत्तेजना उपचार",
    titleEn: "Advanced Electrotherapy & Electrical Nerve Stimulation Care",
    category: "equipment",
    url: "/img/electrotherapy.webp",
    alt: "Child electrotherapy nerve stimulation treatment session"
  },
  {
    id: "gal-8",
    titleHi: "प्रकाश फिजियोथेरेपी क्लिनिक - बाहरी दृश्य एवं साइनबोर्ड",
    titleEn: "Prakash Physiotherapy Clinic - Exterior Entrance & Signboard",
    category: "clinic",
    url: "/img/clinic photo.webp",
    alt: "Prakash Physiotherapy Clinic Bhimnagar Signboard and Entrance"
  }
];

export const servingLocationsData: ServingLocation[] = [
  // Primary Clinic & Immediate Vicinity
  {
    id: "loc-bhimnagar",
    nameEn: "Bhimnagar (Shaileshpur)",
    nameHi: "भीमनगर (शैलेशपुर)",
    districtEn: "Birpur, Supaul-854338",
    districtHi: "बीरपुर, सुपौल-854338",
    category: "primary",
    distanceKm: "0 km",
    estTravelTimeHi: "क्लिनिक भंटाबारी रोड पर स्थित है",
    estTravelTimeEn: "Clinic at Bhantabari Road",
    taglineHi: "मुख्य क्लिनिक पता: भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, सुपौल-854338",
    taglineEn: "Main Clinic: Bhantabari Road, Bhimnagar (Shaileshpur), Birpur, Supaul-854338"
  },
  {
    id: "loc-birpur",
    nameEn: "Birpur",
    nameHi: "बीरपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "primary",
    distanceKm: "3.5 km",
    estTravelTimeHi: "5 से 8 मिनट (ऑटो/बाइक)",
    estTravelTimeEn: "5-8 mins (Auto/Bike)",
    taglineHi: "बीरपुर से सीधी ऑटो व बस सेवा सुलभ",
    taglineEn: "Direct auto & bus connectivity from Birpur"
  },
  {
    id: "loc-birpur-bazar",
    nameEn: "Birpur Bazar",
    nameHi: "बीरपुर बाजार",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "primary",
    distanceKm: "3 km",
    estTravelTimeHi: "5 मिनट (मुख्य बीरपुर रोड)",
    estTravelTimeEn: "5 mins via Main Birpur Road",
    taglineHi: "बीरपुर बाजार के मरीजों हेतु निकटतम आधुनिक फिजियो सेंटर",
    taglineEn: "Nearest modern physio center for Birpur Bazar"
  },
  {
    id: "loc-basantpur",
    nameEn: "Basantpur",
    nameHi: "बसंतपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "primary",
    distanceKm: "5 km",
    estTravelTimeHi: "8 से 10 मिनट",
    estTravelTimeEn: "8-10 mins",
    taglineHi: "बसंतपुर प्रखंड के मरीजों के लिए सर्वोत्तम इलाज",
    taglineEn: "Best physio care for Basantpur block residents"
  },
  {
    id: "loc-basantpur-bazar",
    nameEn: "Basantpur Bazar",
    nameHi: "बसंतपुर बाजार",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "primary",
    distanceKm: "5.5 km",
    estTravelTimeHi: "10 मिनट",
    estTravelTimeEn: "10 mins",
    taglineHi: "बसंतपुर बाजार चौक से सीधा संपर्क",
    taglineEn: "Direct connectivity from Basantpur Bazar Chowk"
  },
  {
    id: "loc-kosi-barrage",
    nameEn: "Kosi Barrage Area",
    nameHi: "कोशी बैराज क्षेत्र",
    districtEn: "Bihar / Nepal Border",
    districtHi: "बिहार / नेपाल बॉर्डर",
    category: "barrage",
    distanceKm: "2 km",
    estTravelTimeHi: "3 से 5 मिनट",
    estTravelTimeEn: "3-5 mins",
    taglineHi: "कोशी बैराज क्रॉसिंग के निकटतम फिजियो क्लिनिक",
    taglineEn: "Closest physio clinic near Kosi Barrage crossing"
  },
  {
    id: "loc-bhimnagar-barrage",
    nameEn: "Bhimnagar Barrage",
    nameHi: "भीमनगर बैराज",
    districtEn: "Bihar / Nepal Border",
    districtHi: "बिहार / नेपाल बॉर्डर",
    category: "barrage",
    distanceKm: "1.5 km",
    estTravelTimeHi: "3 मिनट",
    estTravelTimeEn: "3 mins",
    taglineHi: "भीमनगर बैराज गेट के ठीक पास",
    taglineEn: "Just near Bhimnagar Barrage gate"
  },

  // Surrounding Villages & Blocks in Supaul District
  {
    id: "loc-lalpur",
    nameEn: "Lalpur",
    nameHi: "लालपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "6 km",
    estTravelTimeHi: "10 से 12 मिनट",
    estTravelTimeEn: "10-12 mins",
    taglineHi: "लालपुर ग्रामवासियों के लिए विशेषज्ञ फिजियो",
    taglineEn: "Expert physiotherapy for Lalpur residents"
  },
  {
    id: "loc-raghunathpur",
    nameEn: "Raghunathpur",
    nameHi: "रघुनाथपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "7.5 km",
    estTravelTimeHi: "12 से 15 मिनट",
    estTravelTimeEn: "12-15 mins",
    taglineHi: "रघुनाथपुर पंचायत हेतु बिना ऑपरेशन कमर-जोड़ इलाज",
    taglineEn: "Non-surgical joint care for Raghunathpur"
  },
  {
    id: "loc-shibnagar",
    nameEn: "Shibnagar",
    nameHi: "शिवनगर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "8 km",
    estTravelTimeHi: "15 मिनट",
    estTravelTimeEn: "15 mins",
    taglineHi: "शिवनगर क्षेत्र हेतु समर्पित फिजियोथेरेपी सेवा",
    taglineEn: "Dedicated physical therapy for Shibnagar"
  },
  {
    id: "loc-khantaha",
    nameEn: "Khantaha",
    nameHi: "खांताहा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "9 km",
    estTravelTimeHi: "15 से 18 मिनट",
    estTravelTimeEn: "15-18 mins",
    taglineHi: "खांताहा के मरीजों हेतु आधुनिक स्पाइनल ट्रैक्शन",
    taglineEn: "Advanced spinal traction for Khantaha"
  },
  {
    id: "loc-madhora",
    nameEn: "Madhora",
    nameHi: "मधोरा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "10 km",
    estTravelTimeHi: "18 से 20 मिनट",
    estTravelTimeEn: "18-20 mins",
    taglineHi: "मधोरा क्षेत्र हेतु विश्वसनीय ऑर्थो व न्यूरो इलाज",
    taglineEn: "Trusted ortho & neuro physio for Madhora"
  },
  {
    id: "loc-dubiahi",
    nameEn: "Dubiahi",
    nameHi: "दुबियाही",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "11 km",
    estTravelTimeHi: "20 मिनट",
    estTravelTimeEn: "20 mins",
    taglineHi: "दुबियाही के निवासियों हेतु लकवा व साइटिका रीहैब",
    taglineEn: "Sciatica & paralysis rehab for Dubiahi"
  },
  {
    id: "loc-parmanandpur",
    nameEn: "Parmanandpur",
    nameHi: "परमानंदपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "12 km",
    estTravelTimeHi: "20 से 22 मिनट",
    estTravelTimeEn: "20-22 mins",
    taglineHi: "परमानंदपुर के लिए दिल्ली ग्रेड फिजियो थेरेपी",
    taglineEn: "Delhi-grade physical therapy for Parmanandpur"
  },
  {
    id: "loc-banaili-patti",
    nameEn: "Banaili Patti",
    nameHi: "बनैली पट्टी",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "10.5 km",
    estTravelTimeHi: "20 मिनट",
    estTravelTimeEn: "20 mins",
    taglineHi: "बनैली पट्टी क्षेत्र हेतु घुटने व कमर दर्द विशेषज्ञ",
    taglineEn: "Knee & back pain care for Banaili Patti"
  },
  {
    id: "loc-bhagwanpur",
    nameEn: "Bhagwanpur",
    nameHi: "भगवानपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "13 km",
    estTravelTimeHi: "22 से 25 मिनट",
    estTravelTimeEn: "22-25 mins",
    taglineHi: "भगवानपुर निवासियों हेतु ड्राई नीडलिंग व कपिंग",
    taglineEn: "Dry needling & cupping therapy for Bhagwanpur"
  },
  {
    id: "loc-balbhadarpur",
    nameEn: "Balbhadarpur",
    nameHi: "बलभद्रपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "14 km",
    estTravelTimeHi: "25 मिनट",
    estTravelTimeEn: "25 mins",
    taglineHi: "बलभद्रपुर क्षेत्र हेतु सर्वाइकल व कंधे का इलाज",
    taglineEn: "Cervical & shoulder rehab for Balbhadarpur"
  },
  {
    id: "loc-sahewan",
    nameEn: "Sahewan",
    nameHi: "सहेवान",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "12.5 km",
    estTravelTimeHi: "22 मिनट",
    estTravelTimeEn: "22 mins",
    taglineHi: "सहेवान पंचायत हेतु बिना ऑपरेशन स्लिप डिस्क इलाज",
    taglineEn: "Slip disc non-surgical cure for Sahewan"
  },
  {
    id: "loc-bharava",
    nameEn: "Bharava",
    nameHi: "भरवा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "11.5 km",
    estTravelTimeHi: "20 मिनट",
    estTravelTimeEn: "20 mins",
    taglineHi: "भरवा के निवासियों हेतु आधुनिक इलेक्ट्रोथेरेपी",
    taglineEn: "Advanced electrotherapy for Bharava"
  },
  {
    id: "loc-panchpandariya",
    nameEn: "Panchpandariya",
    nameHi: "पांचपांडरिया",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "13.5 km",
    estTravelTimeHi: "25 मिनट",
    estTravelTimeEn: "25 mins",
    taglineHi: "पांचपांडरिया हेतु बुजुर्गों के आर्थराइटिस का इलाज",
    taglineEn: "Senior arthritis care for Panchpandariya"
  },
  {
    id: "loc-dadha",
    nameEn: "Dadha",
    nameHi: "दाढ़ा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "15 km",
    estTravelTimeHi: "25 से 28 मिनट",
    estTravelTimeEn: "25-28 mins",
    taglineHi: "दाढ़ा क्षेत्र के निवासियों के लिए सुविधाजनक पहुंच",
    taglineEn: "Easy access for Dadha region patients"
  },
  {
    id: "loc-narpatpatti",
    nameEn: "Narpatpatti",
    nameHi: "नरपतपट्टी",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "14.5 km",
    estTravelTimeHi: "25 मिनट",
    estTravelTimeEn: "25 mins",
    taglineHi: "नरपतपट्टी हेतु विशेष न्यूरो व ऑर्थो क्लिनिक",
    taglineEn: "Specialized neuro & ortho clinic for Narpatpatti"
  },
  {
    id: "loc-korhli",
    nameEn: "Korhli",
    nameHi: "कोढ़ली",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "16 km",
    estTravelTimeHi: "28 मिनट",
    estTravelTimeEn: "28 mins",
    taglineHi: "कोढ़ली के निवासियों हेतु लकवा एवं स्ट्रोक थेरेपी",
    taglineEn: "Stroke & paralysis therapy for Korhli"
  },
  {
    id: "loc-chittiahi",
    nameEn: "Chittiahi",
    nameHi: "चित्तियाही",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "17 km",
    estTravelTimeHi: "30 मिनट",
    estTravelTimeEn: "30 mins",
    taglineHi: "चित्तियाही निवासियों हेतु कमर व रीढ़ की हड्डी का इलाज",
    taglineEn: "Spine & back therapy for Chittiahi"
  },
  {
    id: "loc-baisa",
    nameEn: "Baisa",
    nameHi: "बैसा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "18 km",
    estTravelTimeHi: "30 से 32 मिनट",
    estTravelTimeEn: "30-32 mins",
    taglineHi: "बैसा क्षेत्र हेतु फ्रोजन शोल्डर व नसों की जकड़न का इलाज",
    taglineEn: "Frozen shoulder & nerve care for Baisa"
  },
  {
    id: "loc-boptiyahi",
    nameEn: "Boptiyahi (Bhaptiyahi)",
    nameHi: "भपटियाही / बोपटियाही",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "22 km",
    estTravelTimeHi: "35 मिनट (एनएच 57 हाईवे द्वारा)",
    estTravelTimeEn: "35 mins via NH 57 Highway",
    taglineHi: "भपटियाही एनएच 57 चौक से सीधा संपर्क",
    taglineEn: "Direct highway link from Bhaptiyahi Chowk"
  },
  {
    id: "loc-kakhai",
    nameEn: "Kakhai",
    nameHi: "कखाई",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "15.5 km",
    estTravelTimeHi: "26 मिनट",
    estTravelTimeEn: "26 mins",
    taglineHi: "कखाई गांव के मरीजों हेतु किफायती फिजियोथेरेपी",
    taglineEn: "Affordable physical therapy for Kakhai"
  },
  {
    id: "loc-baraiya",
    nameEn: "Baraiya",
    nameHi: "बरैया",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "16.5 km",
    estTravelTimeHi: "28 मिनट",
    estTravelTimeEn: "28 mins",
    taglineHi: "बरैया पंचायत निवासियों हेतु स्पोर्ट्स व जॉइंट रीहैब",
    taglineEn: "Sports & joint rehab for Baraiya"
  },
  {
    id: "loc-nemua",
    nameEn: "Nemua",
    nameHi: "नेमुआ",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "19 km",
    estTravelTimeHi: "32 मिनट",
    estTravelTimeEn: "32 mins",
    taglineHi: "नेमुआ क्षेत्र हेतु साइटिका व नसों का खिंचाव इलाज",
    taglineEn: "Sciatica & nerve pain therapy for Nemua"
  },
  {
    id: "loc-dumra",
    nameEn: "Dumra",
    nameHi: "दुमरा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "20 km",
    estTravelTimeHi: "35 मिनट",
    estTravelTimeEn: "35 mins",
    taglineHi: "दुमरा के निवासियों हेतु आधुनिक आईएफटी व लेजर थेरेपी",
    taglineEn: "Modern IFT & laser therapy for Dumra"
  },
  {
    id: "loc-majhaul",
    nameEn: "Majhaul",
    nameHi: "मझौल",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "18.5 km",
    estTravelTimeHi: "32 मिनट",
    estTravelTimeEn: "32 mins",
    taglineHi: "मझौल पंचायत निवासियों हेतु घुटने का आर्थराइटिस इलाज",
    taglineEn: "Knee arthritis physical therapy for Majhaul"
  },
  {
    id: "loc-misraulia",
    nameEn: "Misraulia",
    nameHi: "मिसरौलिया",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "17.5 km",
    estTravelTimeHi: "30 मिनट",
    estTravelTimeEn: "30 mins",
    taglineHi: "मिसरौलिया हेतु गर्दन व पीठ दर्द का सटीक समाधान",
    taglineEn: "Neck & back pain solution for Misraulia"
  },

  // Major Townships & Subdivisions in Supaul & Araria
  {
    id: "loc-pratapganj",
    nameEn: "Pratapganj",
    nameHi: "प्रतापगंज",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "20 km",
    estTravelTimeHi: "30 से 35 मिनट",
    estTravelTimeEn: "30-35 mins",
    taglineHi: "प्रतापगंज बाजार व ब्लॉक निवासियों हेतु मुख्य केंद्र",
    taglineEn: "Main physio referral center for Pratapganj"
  },
  {
    id: "loc-raghopur",
    nameEn: "Raghopur",
    nameHi: "राघोपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "24 km",
    estTravelTimeHi: "35 से 40 मिनट",
    estTravelTimeEn: "35-40 mins",
    taglineHi: "राघोपुर (सिमराही) क्षेत्र हेतु विशेषज्ञ रीहैब केंद्र",
    taglineEn: "Specialized rehab center for Raghopur Simrahi"
  },
  {
    id: "loc-chhatapur",
    nameEn: "Chhatapur",
    nameHi: "छातापुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "28 km",
    estTravelTimeHi: "40 से 45 मिनट",
    estTravelTimeEn: "40-45 mins",
    taglineHi: "छातापुर ब्लॉक के मरीजों हेतु बिना ऑपरेशन इलाज",
    taglineEn: "Non-surgical therapy for Chhatapur block"
  },
  {
    id: "loc-pipra",
    nameEn: "Pipra",
    nameHi: "पिपरा",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "32 km",
    estTravelTimeHi: "45 मिनट",
    estTravelTimeEn: "45 mins",
    taglineHi: "पिपरा बाजार व आसपास के गांवों हेतु फिजियो सेवा",
    taglineEn: "Physiotherapy services for Pipra region"
  },
  {
    id: "loc-nirmali",
    nameEn: "Nirmali",
    nameHi: "निर्मली",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "38 km",
    estTravelTimeHi: "50 मिनट (कोशी ब्रिज हाईवे)",
    estTravelTimeEn: "50 mins via Kosi Bridge Highway",
    taglineHi: "निर्मली अनुमंडल के मरीजों के लिए सुलभ केंद्र",
    taglineEn: "Accessible physio hub for Nirmali subdivision"
  },
  {
    id: "loc-saraigarh",
    nameEn: "Saraigarh",
    nameHi: "सरायगढ़",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "25 km",
    estTravelTimeHi: "35 मिनट",
    estTravelTimeEn: "35 mins",
    taglineHi: "सरायगढ़ भपटियाही क्षेत्र हेतु उच्च स्तरीय इलाज",
    taglineEn: "High standard physio care for Saraigarh"
  },
  {
    id: "loc-kishanpur",
    nameEn: "Kishanpur",
    nameHi: "किशनपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "35 km",
    estTravelTimeHi: "45 से 50 मिनट",
    estTravelTimeEn: "45-50 mins",
    taglineHi: "किशनपुर क्षेत्र हेतु रीढ़ व घुटने का इलाज",
    taglineEn: "Spine & knee rehab for Kishanpur"
  },
  {
    id: "loc-marauna",
    nameEn: "Marauna",
    nameHi: "मरौना",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "42 km",
    estTravelTimeHi: "55 मिनट",
    estTravelTimeEn: "55 mins",
    taglineHi: "मरौना ब्लॉक के मरीजों हेतु समर्पित फिजियो थेरेपी",
    taglineEn: "Dedicated therapy care for Marauna block"
  },
  {
    id: "loc-triveniganj",
    nameEn: "Triveniganj",
    nameHi: "त्रिवेणीगंज",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "32 km",
    estTravelTimeHi: "45 मिनट",
    estTravelTimeEn: "45 mins",
    taglineHi: "त्रिवेणीगंज अनुमंडल के मरीजों का पसंदीदा क्लिनिक",
    taglineEn: "Preferred clinic for Triveniganj subdivision"
  },
  {
    id: "loc-supaul",
    nameEn: "Supaul",
    nameHi: "सुपौल (जिला मुख्यालय)",
    districtEn: "Supaul HQ (Bihar)",
    districtHi: "सुपौल जिला (बिहार)",
    category: "supaul",
    distanceKm: "45 km",
    estTravelTimeHi: "60 मिनट (सीधी बस/टैक्सी)",
    estTravelTimeEn: "60 mins (Direct Bus/Taxi)",
    taglineHi: "सुपौल जिला मुख्यालय से सीधे बस/टैक्सी द्वारा सुलभ",
    taglineEn: "Directly accessible from Supaul District HQ"
  },

  // Araria District Border Towns
  {
    id: "loc-raniganj",
    nameEn: "Raniganj",
    nameHi: "रानीगंज",
    districtEn: "Araria (Bihar)",
    districtHi: "अररिया (बिहार)",
    category: "araria",
    distanceKm: "35 km",
    estTravelTimeHi: "45 से 50 मिनट",
    estTravelTimeEn: "45-50 mins",
    taglineHi: "रानीगंज क्षेत्र के मरीजों हेतु विशेषज्ञ ऑर्थो रीहैब",
    taglineEn: "Specialized ortho rehab for Raniganj residents"
  },
  {
    id: "loc-narpatganj",
    nameEn: "Narpatganj",
    nameHi: "नरपतगंज",
    districtEn: "Araria (Bihar)",
    districtHi: "अररिया (बिहार)",
    category: "araria",
    distanceKm: "28 km",
    estTravelTimeHi: "35 से 40 मिनट",
    estTravelTimeEn: "35-40 mins",
    taglineHi: "नरपतगंज बाजार व फोरलेन हाईवे से आसान रास्ता",
    taglineEn: "Easy four-lane access from Narpatganj"
  },
  {
    id: "loc-forbesganj",
    nameEn: "Forbesganj",
    nameHi: "फारबिसगंज",
    districtEn: "Araria (Bihar)",
    districtHi: "अररिया (बिहार)",
    category: "araria",
    distanceKm: "38 km",
    estTravelTimeHi: "50 मिनट",
    estTravelTimeEn: "50 mins",
    taglineHi: "फारबिसगंज शहर व रेल जंक्शन से सुलभ पहुंच",
    taglineEn: "Conveniently reachable from Forbesganj Junction"
  },
  {
    id: "loc-jogbani",
    nameEn: "Jogbani",
    nameHi: "जोगबनी",
    districtEn: "Araria / Nepal Border",
    districtHi: "अररिया / नेपाल बॉर्डर",
    category: "araria",
    distanceKm: "45 km",
    estTravelTimeHi: "60 मिनट",
    estTravelTimeEn: "60 mins",
    taglineHi: "जोगबनी अंतर्राष्ट्रीय सीमा क्षेत्र हेतु विश्वसनीय फिजियो",
    taglineEn: "Trusted physio care for Jogbani border point"
  },

  // Neighboring Nepal Border Localities (Saptari District)
  {
    id: "loc-kunauli",
    nameEn: "Kunauli",
    nameHi: "कुनौली",
    districtEn: "Nepal Border Point",
    districtHi: "नेपाल बॉर्डर पॉइंट",
    category: "nepal",
    distanceKm: "8 km",
    estTravelTimeHi: "12 से 15 मिनट",
    estTravelTimeEn: "12-15 mins",
    taglineHi: "कुनौली नेपाल बॉर्डर चेकपोस्ट के समीप",
    taglineEn: "Very close to Kunauli Nepal border checkpost"
  },
  {
    id: "loc-lalpatti",
    nameEn: "Lalpatti",
    nameHi: "लालपट्टी",
    districtEn: "Supaul / Nepal Border",
    districtHi: "सुपौल / नेपाल बॉर्डर",
    category: "primary",
    distanceKm: "6.5 km",
    estTravelTimeHi: "10 से 12 मिनट",
    estTravelTimeEn: "10-12 mins",
    taglineHi: "लालपट्टी क्षेत्र निवासियों हेतु उत्तम फिजियोथेरेपी",
    taglineEn: "Top physical therapy for Lalpatti residents"
  },
  {
    id: "loc-simri",
    nameEn: "Simri",
    nameHi: "सिमरी",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "7 km",
    estTravelTimeHi: "12 मिनट",
    estTravelTimeEn: "12 mins",
    taglineHi: "सिमरी गांव के लिए सुलभ व किफायती इलाज",
    taglineEn: "Accessible & affordable treatment for Simri"
  },
  {
    id: "loc-kataiya",
    nameEn: "Kataiya",
    nameHi: "कटैया",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "9 km",
    estTravelTimeHi: "15 मिनट",
    estTravelTimeEn: "15 mins",
    taglineHi: "कटैया पंचायत हेतु साइटिका व कमर दर्द फिजियो",
    taglineEn: "Sciatica & back therapy for Kataiya"
  },
  {
    id: "loc-rajbiraj",
    nameEn: "Rajbiraj",
    nameHi: "राजविराज (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी जिला (नेपाल)",
    category: "nepal",
    distanceKm: "12 km",
    estTravelTimeHi: "15 से 20 मिनट (भीमनगर बैराज मार्ग)",
    estTravelTimeEn: "15-20 mins via Bhimnagar Barrage Route",
    taglineHi: "राजविराज शहर के मरीजों हेतु निकटतम भारतीय सुपर-स्पेशलिटी फिजियो",
    taglineEn: "Closest Indian super-speciality physio center for Rajbiraj"
  },
  {
    id: "loc-hanumannagar",
    nameEn: "Hanumannagar",
    nameHi: "हनुमाननगर (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "6 km",
    estTravelTimeHi: "10 मिनट",
    estTravelTimeEn: "10 mins",
    taglineHi: "हनुमाननगर कंकालिनी क्षेत्र से मात्र 10 मिनट की दूरी",
    taglineEn: "Just 10 mins away from Hanumannagar Kankalini"
  },
  {
    id: "loc-saptari",
    nameEn: "Saptari District",
    nameHi: "सप्तरी जिला (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "10-25 km",
    estTravelTimeHi: "20 से 30 मिनट",
    estTravelTimeEn: "20-30 mins",
    taglineHi: "नेपाल के सप्तरी जिले के निवासियों का भरोसेमंद स्वास्थ्य केंद्र",
    taglineEn: "Trusted healthcare destination for Saptari district, Nepal"
  },
  {
    id: "loc-tilathi",
    nameEn: "Tilathi",
    nameHi: "तिलाठी (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "14 km",
    estTravelTimeHi: "22 मिनट",
    estTravelTimeEn: "22 mins",
    taglineHi: "तिलाठी कोइलाडी क्षेत्र हेतु सुलभ फिजियोथेरेपी",
    taglineEn: "Accessible physiotherapy for Tilathi Koiladi"
  },
  {
    id: "loc-kanchanpur",
    nameEn: "Kanchanpur",
    nameHi: "कंचनपुर (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "18 km",
    estTravelTimeHi: "28 मिनट",
    estTravelTimeEn: "28 mins",
    taglineHi: "कंचनपुर रुपनी राजमार्ग से सीधा भीमनगर रास्ता",
    taglineEn: "Direct Bhimnagar road from Kanchanpur Rupani Highway"
  },
  {
    id: "loc-bode-barsain",
    nameEn: "Bode Barsain",
    nameHi: "बोड़े बरसाइन (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "22 km",
    estTravelTimeHi: "35 मिनट",
    estTravelTimeEn: "35 mins",
    taglineHi: "बोड़े बरसाइन के मरीजों हेतु दिल्ली-स्तरीय फिजियो इलाज",
    taglineEn: "Delhi-standard physical therapy for Bode Barsain"
  },
  {
    id: "loc-rupani",
    nameEn: "Rupani",
    nameHi: "रुपाणी (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "20 km",
    estTravelTimeHi: "30 मिनट",
    estTravelTimeEn: "30 mins",
    taglineHi: "रुपाणी चौक नेपाल से सीधा संपर्क",
    taglineEn: "Direct connection from Rupani Chowk Nepal"
  },
  {
    id: "loc-mahadeva",
    nameEn: "Mahadeva",
    nameHi: "महादेवा (नेपाल)",
    districtEn: "Saptari (Nepal)",
    districtHi: "सप्तरी (नेपाल)",
    category: "nepal",
    distanceKm: "16 km",
    estTravelTimeHi: "25 मिनट",
    estTravelTimeEn: "25 mins",
    taglineHi: "महादेवा क्षेत्र हेतु विशेषज्ञ पैरालिसिस व रीहैब क्लिनिक",
    taglineEn: "Specialized paralysis & rehab care for Mahadeva"
  },
  {
    id: "loc-koshi-tappu",
    nameEn: "Koshi Tappu Area",
    nameHi: "कोशी टप्पु क्षेत्र (नेपाल)",
    districtEn: "Saptari / Sunsari (Nepal)",
    districtHi: "सप्तरी / सुनसरी (नेपाल)",
    category: "nepal",
    distanceKm: "15 km",
    estTravelTimeHi: "20 से 25 मिनट",
    estTravelTimeEn: "20-25 mins",
    taglineHi: "कोशी टप्पु वन्यजंतु आरक्ष क्षेत्र के समीपस्थ क्लिनिक",
    taglineEn: "Nearest advanced clinic near Koshi Tappu reserve area"
  },
  {
    id: "loc-baijnathpur",
    nameEn: "Baijnathpur",
    nameHi: "बैजनाथपुर",
    districtEn: "Supaul (Bihar)",
    districtHi: "सुपौल (बिहार)",
    category: "supaul",
    distanceKm: "8.5 km",
    estTravelTimeHi: "15 मिनट",
    estTravelTimeEn: "15 mins",
    taglineHi: "बैजनाथपुर पंचायत निवासियों हेतु स्पाइन व जॉइंट केयर",
    taglineEn: "Spine & joint care for Baijnathpur residents"
  }
];

