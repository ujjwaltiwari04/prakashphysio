import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const TODAY = '2026-10-11';
const BASE_URL = 'https://prakashphysio.in';

const treatments = [
  {
    slug: 'back-pain-treatment-bhimnagar',
    id: 'back-pain',
    titleHi: 'कमर दर्द व पीठ दर्द का बिना ऑपरेशन इलाज — भीमनगर, बीरपुर, सुपौल',
    titleEn: 'Back Pain & Lumbar Spine Physiotherapy Treatment in Bhimnagar, Birpur & Supaul',
    metaTitle: 'Back Pain Treatment in Bhimnagar, Birpur & Supaul | कमर दर्द का इलाज | Dr. Abhay Tiwari',
    metaDesc: 'Get permanent non-surgical back pain & lumbar spine relief at Prakash Physiotherapy Clinic, Bhimnagar (Supaul) by Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi). OPD ₹500, Home Visit available. Call +91 9711700817.',
    image: '/img/backpain.webp',
    shortHi: 'लंबे समय से कमर दर्द, झुकने में तकलीफ या रीढ़ की हड्डी में अकड़न का सटीक फिजियोथेरेपी इलाज।',
    shortEn: 'Comprehensive physical therapy for chronic lower back stiffness, postural stress, and lumbar spine dysfunction in Supaul District & Nepal border.',
    fullHi: 'कमर दर्द (Lower Back Pain) आज के समय में अत्यधिक वजन उठाने, गलत मुद्रा में बैठने या उम्र के साथ रीढ़ की हड्डी में घिसाव के कारण बहुत सामान्य है। प्रकाश फिजियोथेरेपी क्लिनिक (भंटाबारी रोड, भीमनगर, सुपौल) में डॉ. अभय प्रकाश तिवारी (M.P.T. Ortho, New Delhi) द्वारा कंप्यूटराइज्ड ट्रैक्शन, आईएफटी (IFT), कोर स्ट्रेंथेनिंग और मैनुअल थेरेपी द्वारा बिना किसी सर्जरी या दर्द निवारक गोलियों के कमर दर्द का जड़ से इलाज किया जाता है।',
    fullEn: 'Lower back pain affects daily work, sitting, and lifting. Using gentle computerized spinal traction, IFT electrotherapy, core stabilization exercises, and manual therapy, Dr. Abhay Prakash Tiwari restores natural spinal alignment and relieves deep muscle strain without surgery.',
    symptomsHi: ['कमर के निचले हिस्से में तेज या मीठा दर्द', 'झुकने या उठने-बैठने में कठिनाई', 'पैरों में भारीपन या खिंचाव', 'सुबह उठने पर पीठ में अत्यधिक अकड़न'],
    symptomsEn: ['Dull or sharp pain in lower spine', 'Difficulty bending forward or getting up from bed', 'Heaviness or tightness radiating to legs', 'Morning stiffness in lower lumbar area'],
    techniquesHi: ['कंप्यूटर संचालित स्पाइनल ट्रैक्शन', 'इंटरफेरेंशियल थेरेपी (IFT)', 'कोर मोबिलाइजेशन एक्सरसाइज', 'मुद्रा सुधार (Postural Correction)'],
    techniquesEn: ['Computerized Lumbar Traction', 'Interferential Therapy (IFT)', 'Core Muscle Rehabilitation', 'Postural Adjustment & Ergonomics']
  },
  {
    slug: 'sciatica-treatment-supaul',
    id: 'sciatica',
    titleHi: 'साइटिका नस दर्द का बिना ऑपरेशन इलाज — सुपौल, बीरपुर व भीमनगर',
    titleEn: 'Sciatica Nerve Pain & Leg Numbness Treatment in Supaul, Birpur & Bhimnagar',
    metaTitle: 'Sciatica Treatment in Supaul & Birpur | साइटिका दर्द का इलाज | Prakash Physiotherapy Clinic',
    metaDesc: 'Suffering from sciatica leg pain, tingling or pinched nerve in Supaul, Birpur, Bhimnagar or Nepal border? Expert nerve decompression therapy by Dr. Abhay Prakash Tiwari. Call +91 9711700817.',
    image: '/img/nerve compression therapy.webp',
    shortHi: 'कमर से लेकर पैर की उंगलियों तक जाने वाली नस के खिंचाव और झनझनाहट का सटीक समाधान।',
    shortEn: 'Targeted decompression therapy for sciatic nerve irritation radiating down the leg.',
    fullHi: 'साइटिका (Sciatica) में कमर की दबी हुई नस (L4-L5 / L5-S1) के कारण पूरे पैर में करंट जैसा तेज दर्द, चींटियां काटने जैसी झनझनाहट और सुन्नपन महसूस होता है। हमारी एडवांस्ड न्यूरो-मोबिलाइजेशन और लंबर डीकंप्रेशन तकनीक से दबी हुई नस का दबाव कम किया जाता है जिससे मरीज को बिना ऑपरेशन त्वरित राहत मिलती है।',
    fullEn: 'Sciatica occurs when the sciatic nerve is pinched in the lumbar spine. Our Bhimnagar clinic uses nerve gliding exercises, localized mechanical decompression, and targeted electrotherapy to relieve leg numbness and shooting pain.',
    symptomsHi: ['एक पैर में कमर से नीचे तक तेज करंट जैसा दर्द', 'पैर या तलवे में सुन्नपन व झनझनाहट', 'पैर में कमजोरी या चलने में लंगड़ापन'],
    symptomsEn: ['Sharp radiating pain along one leg', 'Numbness and tingling sensation in calf or foot', 'Weakness or difficulty placing weight on foot'],
    techniquesHi: ['न्यूरोडायनामिक्स (Nerve Gliding)', 'लंबर ट्रैक्शन डीकंप्रेशन', 'डीप टिश्यू मायोफेशियल रिलीज़', 'स्ट्रेचिंग गाइडेंस'],
    techniquesEn: ['Neurodynamic Nerve Gliding', 'Lumbar Mechanical Decompression', 'Deep Myofascial Release', 'Therapeutic Nerve Stretching']
  },
  {
    slug: 'slip-disc-treatment-birpur',
    id: 'slip-disc',
    titleHi: 'स्लिप डिस्क (Slip Disc) का गैर-सर्जिकल इलाज — बीरपुर, भीमनगर, सुपौल',
    titleEn: 'Non-Surgical Slip Disc & Herniated Disc Treatment in Birpur, Bhimnagar & Supaul',
    metaTitle: 'Slip Disc Treatment Without Surgery in Birpur & Supaul | स्लिप डिस्क का इलाज',
    metaDesc: 'Avoid spinal surgery! 90% of L4-L5 & L5-S1 slip disc cases recover with McKenzie therapy & computerized traction at Prakash Physiotherapy Clinic, Bhimnagar (Birpur, Supaul). Call +91 9711700817.',
    image: '/img/slip_disc.webp',
    shortHi: 'बिना ऑपरेशन रीढ़ की डिस्क को उसकी सही स्थिति में लाने के लिए विशिष्ट स्पाइनल रीहैब।',
    shortEn: 'Specialized spinal rehabilitation to retract herniated discs without invasive spinal surgery.',
    fullHi: 'जब रीढ़ की हड्डी के बीच की गद्दी (Disc) बाहर निकल आती है तो वह नसों को दबाने लगती है। सही समय पर मेकेंजी (McKenzie) विधि और स्पाइनल ट्रैक्शन द्वारा 90% से अधिक स्लिप डिस्क के मामलों को बिना सर्जरी के ठीक किया जा सकता है।',
    fullEn: 'Herniated or slipped discs cause intense nerve pressure. Through the renowned McKenzie protocol, computerized traction, and posture re-education, Dr. Tiwari helps patients avoid risky spinal operations.',
    symptomsHi: ['खांसने या छींकने पर कमर व पैर में तेज झटका', 'बिस्तर से उठने या सीधा बैठने में असहनीय दर्द', 'कमर झुकने में अड़चन'],
    symptomsEn: ['Aggravated pain on coughing or sneezing', 'Inability to lift legs or sit straight', 'Severe lower back stiffness'],
    techniquesHi: ['मेकेंजी स्पाइनल एक्सटेंशन', 'कंप्यूटर कंट्रोल ट्रैक्शन', 'कोर मसल री-एजुकेशन'],
    techniquesEn: ['McKenzie Spine Protocol', 'Computerized Traction System', 'Core Stability Re-education']
  },
  {
    slug: 'paralysis-stroke-physiotherapy-bihar',
    id: 'paralysis-stroke',
    titleHi: 'लकवा एवं ब्रेन स्ट्रोक पुनर्वास (Paralysis Rehab) — सुपौल, बिहार व नेपाल बॉर्डर',
    titleEn: 'Paralysis & Brain Stroke Neuro Physiotherapy Rehabilitation in Supaul, Bihar & Nepal Border',
    metaTitle: 'Paralysis & Stroke Physiotherapy in Supaul, Birpur & Nepal Border | लकवा का इलाज',
    metaDesc: 'Expert neurological physiotherapy for brain stroke, hemiplegia & paralysis recovery in Bhimnagar, Birpur, Supaul & Nepal border. Clinic OPD & Home Visit available. Call +91 9711700817.',
    image: '/img/stroke_paralysis.webp',
    shortHi: 'ब्रेन स्ट्रोक के बाद शरीर के अंगों की गति और चलने-फिरने की क्षमता वापस लाने की न्यूरो थेरेपी।',
    shortEn: 'Expert neurological rehabilitation restoring muscle strength, gait, and mobility after brain stroke.',
    fullHi: 'लकवा (Paralysis/Hemiplegia) होने के बाद मांसपेशियों का सुन्न होना या नियंत्रण खो जाना बहुत दुखद होता है। न्यूरो-फिजियोथेरेपी तकनीक (PNF, Bobath Concept) और इलेक्ट्रिकल स्टिम्यूलेशन द्वारा दिमाग की नसों को पुनर्जीवित करने का प्रयास किया जाता है ताकि मरीज फिर से अपने पैरों पर चल सके। होम विजिट सुविधा भी उपलब्ध है।',
    fullEn: 'Stroke rehabilitation requires specialized neurological exercise protocols. Using Bobath principles, PNF techniques, and electrical muscle stimulation (EMS), Dr. Abhay Prakash Tiwari helps stroke survivors regain walking and hand control.',
    symptomsHi: ['शरीर के एक तरफ का हाथ-पैर काम न करना (Hemiplegia)', 'मांसपेशियों में अत्यधिक ढीलापन या अकड़न', 'संतुलन खोना व चलने में असमर्थता'],
    symptomsEn: ['Weakness or paralysis on one side of body (Hemiplegia)', 'Muscle spasticity or flaccidity', 'Loss of balance and motor coordination'],
    techniquesHi: ['बॉबाथ कांसेप्ट (Bobath Concept)', 'पीएनएफ (PNF Pattern Therapy)', 'फंक्शनल इलेक्ट्रिकल स्टिम्यूलेशन (FES)', 'चाल व संतुलन अभ्यास (Gait Training)'],
    techniquesEn: ['Bobath Neuro Concept', 'PNF Therapeutic Patterns', 'Functional Electrical Muscle Stimulation', 'Gait & Balance Retraining']
  },
  {
    slug: 'neck-pain-physiotherapy-supaul',
    id: 'cervical-neck-pain',
    titleHi: 'गर्दन दर्द व सर्वाइकल स्पोंडिलाइटिस इलाज — सुपौल, बीरपुर, भीमनगर',
    titleEn: 'Cervical Spondylosis, Neck Pain & Vertigo Physiotherapy in Supaul & Birpur',
    metaTitle: 'Cervical & Neck Pain Physiotherapy in Supaul & Bhimnagar | गर्दन दर्द व सर्वाइकल इलाज',
    metaDesc: 'Effective cervical traction & manual therapy for neck stiffness, cervical spondylosis, dizziness & radiating arm pain at Prakash Physiotherapy Clinic, Bhimnagar. Call +91 9711700817.',
    image: '/img/Therapy Session 1.webp',
    shortHi: 'गर्दन में अकड़न, चक्कर आना और हाथों में दर्द जाने की सर्वाइकल समस्या का इलाज।',
    shortEn: 'Effective relief for cervical spondylosis, neck muscle spasm, and radiating arm numbness.',
    fullHi: 'गर्दन की हड्डियों में घिसाव (Cervical Spondylosis) से सिरदर्द, चक्कर और हाथों की उंगलियों तक झनझनाहट फैल सकती है। सर्वाइकल ट्रैक्शन, सॉफ्ट टिश्यू मोबिलाइजेशन और नेक आइसोमेट्रिक्स द्वारा मरीज को स्थायी आराम मिलता है।',
    fullEn: 'Cervical pain often causes dizziness, shoulder tension, and radiating hand tingling. Our cervical traction and isometric neck exercises relieve nerve pressure and restore neck posture.',
    symptomsHi: ['गर्दन घुमाने में तेज दर्द या अकड़न', 'सिर के पीछे दर्द या चक्कर आना (Vertigo)', 'हाथ की उंगलियों में सुन्नपन'],
    symptomsEn: ['Severe neck stiffness on turning head', 'Dizziness / Vertigo and tension headache', 'Tingling radiating down shoulder to fingers'],
    techniquesHi: ['सर्वाइकल ट्रैक्शन', 'आइसोमेट्रिक नेक एक्सरसाइज', 'मायोफेशियल रिलीज़', 'पोस्चर री-एजुकेशन'],
    techniquesEn: ['Cervical Traction Modality', 'Isometric Neck Strengthening', 'Myofascial Trigger Release', 'Ergonomic Correction']
  },
  {
    slug: 'joint-pain-treatment-supaul',
    id: 'joint-knee-pain',
    titleHi: 'घुटने का दर्द व गठिया (Arthritis) का इलाज — सुपौल, बीरपुर, भीमनगर',
    titleEn: 'Knee Joint Pain & Osteoarthritis Physiotherapy in Supaul, Birpur & Bhimnagar',
    metaTitle: 'Knee Pain & Arthritis Treatment in Supaul & Bhimnagar | घुटने के दर्द का इलाज',
    metaDesc: 'Avoid knee surgery! Advanced ultrasonic therapy & joint strengthening for knee osteoarthritis, swelling & stair-climbing pain in Bhimnagar, Birpur & Supaul. Call +91 9711700817.',
    image: '/img/knee_osteoarthritis.webp',
    shortHi: 'उम्र के साथ घुटने की गद्दी घिसने, कट-कट आवाज आने व सीढ़ी चढ़ने में दर्द का वैज्ञानिक इलाज।',
    shortEn: 'Targeted joint lubrication exercises, strengthening, and pain relief modalities for knee osteoarthritis.',
    fullHi: 'ऑस्टियोआर्थराइटिस (Osteoarthritis) में घुटने के अंदर का कार्टिलेज घिस जाता है। हमारे क्लिनिक में क्वाड्रीसेप्स मजबूती, अल्ट्रासाउंड थेरेपी और मोबिलाइजेशन से घुटने के ऑपरेशन को टाला जा सकता है।',
    fullEn: 'Knee arthritis causes pain while walking, sitting down, or climbing stairs. Specialized quadriceps strengthening and joint mobilization significantly improve knee cartilage health and prevent joint replacement.',
    symptomsHi: ['सीढ़ी चढ़ते/उतरते समय घुटने में तेज दर्द', 'घुटने से कट-कट की आवाज आना', 'घुटने में सूजन और मोड़ते समय अकड़न'],
    symptomsEn: ['Pain while stair climbing or squatting', 'Crepitus / clicking sound in knee', 'Swelling and morning knee stiffness'],
    techniquesHi: ['अल्ट्रासोनिक थेरेपी', 'क्वाड्रीसेप्स व हैमस्ट्रिंग मजबूती', 'जॉइंट मोबिलाइजेशन', 'नी टेपिंग'],
    techniquesEn: ['Therapeutic Ultrasound', 'Quadriceps Strengthening', 'Manual Joint Mobilization', 'Knee Taping & Alignment']
  },
  {
    slug: 'frozen-shoulder-treatment-bhimnagar',
    id: 'frozen-shoulder',
    titleHi: 'फ्रोजन शोल्डर / कंधा जाम का इलाज — भीमनगर, बीरपुर, सुपौल',
    titleEn: 'Frozen Shoulder & Stiff Shoulder Release Therapy in Bhimnagar, Birpur & Supaul',
    metaTitle: 'Frozen Shoulder Treatment in Bhimnagar & Supaul | कंधे के दर्द व जकड़न का इलाज',
    metaDesc: 'Can’t lift your arm or sleep due to shoulder pain? Complete frozen shoulder (adhesive capsulitis) mobilization & pulley rehab at Prakash Physiotherapy Clinic. Call +91 9711700817.',
    image: '/img/frozen_shoulder.webp',
    shortHi: 'कंधे का पूरी तरह जाम हो जाना, हाथ ऊपर न उठना और रात में सोने पर असहनीय दर्द।',
    shortEn: 'Gradual shoulder capsule release, range-of-motion restoration, and pain relief therapy.',
    fullHi: 'फ्रोजन शोल्डर (Adhesive Capsulitis) में कंधे की कैप्सूल सिकुड़ जाती है, विशेषकर शुगर (डायबिटीज) के मरीजों में। पैसिव मोबिलाइजेशन, शोल्डर पुली और अल्ट्रासाउंड थेरेपी से कंधे की गति पूरी तरह बहाल की जाती है।',
    fullEn: 'Frozen shoulder limits arm reach and causes agonizing night pain. Through gentle capsule mobilization, shoulder pulley workouts, and myofascial release, we restore complete shoulder range of motion.',
    symptomsHi: ['हाथ ऊपर उठाने या पीठ के पीछे ले जाने में असफलता', 'रात में कंधे के बल सोने पर तेज दर्द', 'कंधे की मांसपेशियों में जकड़न'],
    symptomsEn: ['Inability to lift arm above head or behind back', 'Severe night pain interrupting sleep', 'Tight shoulder joint capsule'],
    techniquesHi: ['पैसिव जॉइंट मोबिलाइजेशन', 'शोल्डर व्हील व पुली एक्सरसाइज', 'मायोफेशियल रिलीज़', 'डीप हीटिंग मोडैलिटीज़'],
    techniquesEn: ['Maitland Joint Mobilization', 'Shoulder Pulley & Wand Rehab', 'Myofascial Trigger Point Release', 'Thermal Modalities']
  },
  {
    slug: 'knee-replacement-rehabilitation',
    id: 'post-knee-replacement',
    titleHi: 'घुटने व कूल्हे के ऑपरेशन के बाद फिजियोथेरेपी (Post-Surgery Rehab)',
    titleEn: 'Post Knee Replacement (TKR) & Fracture Surgery Rehabilitation in Supaul',
    metaTitle: 'Post Surgery & Knee Replacement Physiotherapy in Supaul & Birpur | OPD & Home Visit',
    metaDesc: 'Regain full knee bending & walking independence after Total Knee Replacement (TKR), ACL or fracture surgery. Doorstep Home Visit & OPD rehab in Bhimnagar, Birpur & Supaul.',
    image: '/img/post_knee_rehab.webp',
    shortHi: 'घुटने का ऑपरेशन (TKR) या फ्रैक्चर के बाद फिर से बिना सहारे चलना और जोड़ मोड़ना सीखने का रीहैब।',
    shortEn: 'Step-by-step physical therapy to regain full knee flexion, walking balance, and independence post surgery.',
    fullHi: 'घुटने के रिप्लेसमेंट (TKR) या हड्डी के ऑपरेशन के बाद सही फिजियोथेरेपी ही ऑपरेशन की सफलता तय करती है। क्लिनिक ओपीडी और होम विजिट (₹700/सेशन) दोनों माध्यम से घुटना मोड़ने और चलने का अभ्यास कराया जाता है।',
    fullEn: 'Post TKR or orthopedic surgery requires structured exercise to bend the knee to 120°+, reduce postoperative swelling, and walk confidently without walkers.',
    symptomsHi: ['ऑपरेशन के बाद घुटना या जोड़ मोड़ने में जकड़न', 'मांसपेशियों में कमजोरी', 'चलने में लंगड़ापन'],
    symptomsEn: ['Stiffness and fear of bending post-surgery joint', 'Thigh muscle atrophy', 'Unsteady gait post operation'],
    techniquesHi: ['पैसिव फ्लेक्शन प्रोटोकॉल', 'गेज ट्रेनिंग (चलने का अभ्यास)', 'पटेला मोबिलाइजेशन', 'सूजन कम करने की थेरेपी'],
    techniquesEn: ['Passive Flexion Therapy', 'Gait & Balance Training', 'Patellar Glide Mobilization', 'Lymphatic Swelling Reduction']
  },
  {
    slug: 'bells-palsy-facial-physiotherapy',
    id: 'bell-palsy-facial',
    titleHi: 'बेल्स पाल्सी / मुंह के लकवे (Facial Paralysis) का इलाज — भीमनगर, सुपौल',
    titleEn: 'Bell’s Palsy & Facial Nerve Paralysis Physiotherapy in Bhimnagar, Birpur & Supaul',
    metaTitle: 'Bell’s Palsy (Facial Paralysis) Treatment in Supaul & Birpur | मुंह के लकवे का इलाज',
    metaDesc: 'Fast facial symmetry recovery for Bell’s Palsy (facial drooping, eye closure problem) with Galvanic Nerve Stimulation & facial exercises at Prakash Physiotherapy Clinic. Call +91 9711700817.',
    image: '/img/bells_palsy.webp',
    shortHi: 'मुंह का टेढ़ा होना, आंख बंद न होना या पानी बाहर निकलने का न्यूरो-स्टिम्यूलेशन इलाज।',
    shortEn: 'Targeted facial nerve electrical stimulation and biofeedback exercises for rapid facial symmetry recovery.',
    fullHi: 'बेल्स पाल्सी (Bell’s Palsy) में चेहरे की सातवीं नस (Facial Nerve) में सूजन के कारण चेहरे का एक हिस्सा सुन्न या टेढ़ा हो जाता है। गैल्वेनिक मसल स्टिम्युलेटर (GMS) और चेहरे की विशेष कसरत से 2 से 4 सप्ताह में चेहरा पुनः सामान्य हो जाता है।',
    fullEn: 'Bell’s Palsy affects facial expression, eye closure, and speech. Early facial nerve stimulation and biofeedback exercises produce fast recovery in facial symmetry.',
    symptomsHi: ['चेहरे का एक तरफ टेढ़ा हो जाना', 'एक आंख पूरी तरह बंद न होना', 'पानी पीते समय मुंह के कोने से गिरना'],
    symptomsEn: ['Facial drooping on one side', 'Inability to close eye or smile symmetrically', 'Fluid leaking from side of mouth'],
    techniquesHi: ['गैल्वेनिक मसल स्टिम्यूलेशन (GMS)', 'फेशियल न्यूरोमस्कुलर एक्सरसाइज', 'फेशियल काइनेसियो टेपिंग'],
    techniquesEn: ['Galvanic Nerve & Muscle Stimulation', 'Facial Neuromuscular Re-education', 'Facial Kinesio Taping']
  },
  {
    slug: 'sports-injury-physiotherapy-bihar',
    id: 'sports-injury',
    titleHi: 'स्पोर्ट्स इंजरी, लिगामेंट खिंचाव व मांसपेशी चोट का इलाज — सुपौल, बिहार',
    titleEn: 'Sports Injury, Ligament Sprain (ACL/MCL) & Muscle Strain Rehab in Supaul',
    metaTitle: 'Sports Injury Physiotherapy in Supaul & Birpur | Ligament, Ankle & Gym Injury Rehab',
    metaDesc: 'Gold-standard sports physiotherapy for cricket, football, running & gym lifting injuries in Bhimnagar, Birpur & Supaul by Dr. Abhay Prakash Tiwari (M.P.T. Ortho). Call +91 9711700817.',
    image: '/img/injury showcase.webp',
    shortHi: 'खेलने, जिम या दौड़ने में मांसपेशियों का खिंचाव, लिगामेंट चोट (ACL/MCL) और टखना मुड़ना।',
    shortEn: 'Rapid sports injury rehabilitation including ligament tears (ACL/MCL), ankle sprains, and hamstring pulls.',
    fullHi: 'खिलाड़ियों, युवाओं व जिम एथलीट्स के लिए लिगामेंट टियर, एंकल स्प्रेन, कंधे की चोट और हैमस्ट्रिंग स्ट्रेन का त्वरित इलाज। कपिंग थेरेपी, ड्राई नीडलिंग और काइनेसियोलॉजी टेपिंग से जल्द मैदान में वापसी करें।',
    fullEn: 'From ankle sprains to ACL strains and heavy lifting injuries, our customized sports rehab incorporates Kinesio taping, dry needling, and strength protocols.',
    symptomsHi: ['अचानक तेज खिंचाव या पॉप की आवाज', 'जोड़ पर सूजन व दर्द', 'भार रखने या हाथ उठाने पर दर्द'],
    symptomsEn: ['Sudden pop or tear sensation', 'Joint swelling and localized bruising', 'Pain on weight bearing or lifting'],
    techniquesHi: ['काइनेसियो टेपिंग', 'कपिंग व ड्राई नीडलिंग', 'प्लाइओमेट्रिक्स व स्ट्रेंथ रीहैब'],
    techniquesEn: ['Kinesiology Taping', 'Cupping & Dry Needling', 'Functional Plyometric Rehab']
  },
  {
    slug: 'dry-needling-therapy-bhimnagar',
    id: 'dry-needling',
    titleHi: 'ड्राई नीडलिंग थेरेपी (Dry Needling) — भीमनगर, बीरपुर, सुपौल',
    titleEn: 'Advanced Dry Needling & Trigger Point Therapy in Bhimnagar, Birpur & Supaul',
    metaTitle: 'Dry Needling Therapy in Supaul & Bhimnagar | मांसपेशियों की गांठ व पुराने दर्द का इलाज',
    metaDesc: 'Delhi-standard Trigger Point Dry Needling therapy in Bhimnagar, Birpur & Supaul for stubborn muscle knots, chronic back ache, neck spasm & sciatica. Call +91 9711700817.',
    image: '/img/dry_needling.webp',
    shortHi: 'मांसपेशियों के गहरे दर्दनाक ट्रिगर पॉइंट्स को सूक्ष्म सुई द्वारा तुरंत रिलैक्स करने की आधुनिक विधि।',
    shortEn: 'Targeted insertion of fine needles into muscular trigger points for immediate deep pain release.',
    fullHi: 'ड्राई नीडलिंग एक अत्यधिक प्रभावी आधुनिक तकनीक है जिसमें पतली स्टराइल सुइयों द्वारा मांसपेशियों में बने दर्दनाक गांठों (Trigger Points) को रिलैक्स किया जाता है। इससे सालों पुराना जकड़न व दर्द मिनटों में हल्का हो जाता है।',
    fullEn: 'Dry needling targets myofascial trigger points that cause stubborn knots and nerve tightness. It increases localized blood flow and releases chronic muscle spasms rapidly.',
    symptomsHi: ['मांसपेशी में छूने पर कड़ी गांठ महसूस होना', 'सालों पुराना मांसपेशीय दर्द', 'गर्दन, कंधे व कमर की गहरी जकड़न'],
    symptomsEn: ['Palpable tight knots in muscles', 'Chronic localized muscular ache', 'Deep neck, shoulder or lower back spasm'],
    techniquesHi: ['ट्रिगर पॉइंट ड्राई नीडलिंग', 'मायोफेशियल रिलीज़', 'इलेक्ट्रो-नीडलिंग'],
    techniquesEn: ['Trigger Point Needle Deactivation', 'Myofascial Tissue Release', 'Electro-Acupuncture Stimulation']
  },
  {
    slug: 'cupping-therapy-bhimnagar',
    id: 'cupping-therapy',
    titleHi: 'कपिंग थेरेपी (Cupping Therapy) — भीमनगर, बीरपुर, सुपौल',
    titleEn: 'Myofascial Vacuum Cupping Therapy in Bhimnagar, Birpur & Supaul',
    metaTitle: 'Cupping Therapy in Bhimnagar, Birpur & Supaul | कपिंग थेरेपी सेंटर | Dr. Abhay Tiwari',
    metaDesc: 'Professional myofascial vacuum cupping therapy in Bhimnagar, Birpur & Supaul for deep muscle stiffness, back pain, sports recovery & blood circulation. Call +91 9711700817.',
    image: '/img/cupping therapy.webp',
    shortHi: 'सक्शन कप द्वारा रक्त संचार बढ़ाकर मांसपेशियों की अकड़न और दर्द को दूर करने का इलाज।',
    shortEn: 'Suction cup therapy promoting deep tissue circulation, myofascial release, and inflammation reduction.',
    fullHi: 'कपिंग थेरेपी में त्वचा पर वैक्यूम कप लगाए जाते हैं जिससे जकड़ी हुई मांसपेशियां ढीली होती हैं और रक्त का संचार कई गुना बढ़ जाता है। पीठ, कंधे और जांघों की अकड़न में यह तुरंत राहत देता है।',
    fullEn: 'Vacuum cupping decompresses stiff fascial layers and enhances localized blood circulation, accelerating muscle tissue recovery and flushing out metabolic waste.',
    symptomsHi: ['कमर और कंधे में लगातार जकड़न', 'व्यायाम या काम के बाद भारीपन', 'मांसपेशियों का कड़ा होना'],
    symptomsEn: ['Persistent tightness in upper/lower back', 'Post-work muscular exhaustion', 'Restricted tissue flexibility'],
    techniquesHi: ['ड्राई वैक्यूम कपिंग', 'ग्लाइडिंग/डायनामिक कपिंग', 'सॉफ्ट टिश्यू डीकंप्रेशन'],
    techniquesEn: ['Dry Vacuum Cupping', 'Dynamic Gliding Cupping', 'Soft Tissue Decompression']
  }
];

const locations = [
  {
    slug: 'physiotherapy-in-bhimnagar',
    areaHi: 'भीमनगर, शैलेशपुर एवं कोशी बैराज क्षेत्र',
    areaEn: 'Bhimnagar (Shaileshpur) & Kosi Barrage Area',
    metaTitle: 'Best Physiotherapy Clinic & Hospital in Bhimnagar | प्रकाश फिजियोथेरेपी क्लिनिक भीमनगर',
    metaDesc: 'Looking for the best hospital or physiotherapy clinic in Bhimnagar (Supaul)? Visit Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi) on Bhantabari Road, Bhimnagar. OPD ₹500, Home Visit ₹700. Call +91 9711700817.',
    towns: 'Bhimnagar (भीमनगर), Shaileshpur (शैलेशपुर), Bhimnagar Barrage (भीमनगर बैराज), Kosi Barrage (कोशी बैराज), Lalpur (लालपुर), Lalpatti (लालपट्टी), Kataiya (कटैया)',
    distanceNote: 'हमारा मुख्य क्लिनिक भंटाबारी रोड, भीमनगर (शैलेशपुर) में पुलिस चौकी के पास स्थित है। ओपीडी प्रतिदिन सुबह 8:00 से रात 8:00 बजे तक खुला रहता है तथा 24 घंटे आपातकालीन व होम विजिट सेवा उपलब्ध है।'
  },
  {
    slug: 'physiotherapy-in-birpur',
    areaHi: 'बीरपुर, बसंतपुर एवं आसपास के क्षेत्र',
    areaEn: 'Birpur, Birpur Bazar & Basantpur Block (Supaul)',
    metaTitle: 'Best Physiotherapist & Clinic Near Birpur, Supaul | बीरपुर के पास फिजियोथेरेपी अस्पताल',
    metaDesc: 'Top physiotherapy clinic just 5 mins (3 km) from Birpur & Basantpur! Non-surgical treatment for Back Pain, Sciatica, Slip Disc & Paralysis by Dr. Abhay Tiwari. OPD & Home Visit in Birpur. Call +91 9711700817.',
    towns: 'Birpur (बीरपुर), Birpur Bazar (बीरपुर बाजार), Basantpur (बसंतपुर), Hridaynagar (हृदयनगर), Balbhadarpur (बलभद्रपुर), Raghunathpur (रघुनाथपुर), कोचगामा, बनेलिपट्टी',
    distanceNote: 'बीरपुर बाजार से हमारा क्लिनिक मुख्य बीरपुर-भीमनगर रोड पर मात्र 3 किमी (5 से 8 मिनट की दूरी) पर स्थित है। बीरपुर और बसंतपुर के मरीजों के लिए घर पर आकर इलाज करने (Home Visit - ₹700/सेशन) की विशेष सुविधा उपलब्ध है।'
  },
  {
    slug: 'physiotherapy-in-supaul',
    areaHi: 'सुपौल जिला (प्रतापगंज, सरायगढ़, भपटियाही, पिपरा, किशनपुर)',
    areaEn: 'Supaul District (Supaul HQ, Pratapganj, Saraigarh, Bhaptiyahi, Pipra)',
    metaTitle: 'Best Physiotherapy Clinic in Supaul District | सुपौल का सर्वश्रेष्ठ फिजियोथेरेपी केंद्र',
    metaDesc: 'Trusted Delhi-grade physiotherapy clinic in Supaul District by Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi). Treating Back Pain, Sciatica, Slip Disc, Paralysis & Knee Arthritis. Call +91 9711700817.',
    towns: 'Supaul (सुपौल), Pratapganj (प्रतापगंज), Saraigarh (सरायगढ़), Bhaptiyahi (भपटियाही), Chhatapur (छातापुर), Pipra (पिपरा), Kishanpur (किशनपुर), Simri (सिमरी), Karjain Bazar (करजाइन बाजार)',
    distanceNote: 'सुपौल जिले के सभी प्रखंडों से NH-57 और मुख्य मार्ग द्वारा भीमनगर क्लिनिक सीधा जुड़ा हुआ है। दिल्ली के बड़े अस्पतालों जैसा आधुनिक इलाज (ट्रैक्शन, आईएफटी, लेजर, ड्राई नीडलिंग, कपिंग) अब आपके अपने सुपौल जिले में किफायती शुल्क पर उपलब्ध है।'
  },
  {
    slug: 'physiotherapy-near-nepal-border-rajbiraj-saptari',
    areaHi: 'नेपाल बॉर्डर, राजविराज, सप्तरी, हनुमाननगर व सुनसरी क्षेत्र',
    areaEn: 'Nepal Border — Rajbiraj, Saptari, Hanumannagar, Kanchanpur & Sunsari',
    metaTitle: 'Best Physiotherapy Clinic Near Nepal Border (Rajbiraj, Saptari, Kosi Barrage) | +977 9819053588',
    metaDesc: 'Nearest Indian specialist physiotherapy clinic for patients from Rajbiraj, Saptari, Hanumannagar, Kunauli & Sunsari (Nepal). Just 5 mins from Kosi Barrage at Bhimnagar! Nepal Helpline: +977 9819053588 / +91 9711700817.',
    towns: 'Rajbiraj (राजविराज), Saptari (सप्तरी), Hanumannagar (हनुमाननगर), Kunauli Border (कुनौली), Bhardaha (भारदह), Kanchanpur (कंचनपुर), Tilathi (तिलाठी), Rupani (रुपाणी), Bode Barsain (बोड़े बरसाइन), Inaruwa / Koshi Tappu',
    distanceNote: 'नेपाल के सप्तरी, राजविराज, हनुमाननगर और सुनसरी के मरीजों के लिए कोशी बैराज (भीमनगर बॉर्डर) पार करते ही मात्र 5 मिनट की दूरी पर दिल्ली-स्तर का सुपर-स्पेशलिटी फिजियोथेरेपी इलाज उपलब्ध है। भारतीय व नेपाली दोनों मुद्राएं स्वीकार्य हैं। नेपाल हेल्पलाइन: +977 9819053588।'
  },
  {
    slug: 'physiotherapy-in-forbesganj-araria',
    areaHi: 'फारबिसगंज, नरपतगंज, रानीगंज, जोगबनी (अररिया क्षेत्र)',
    areaEn: 'Forbesganj, Narpatganj, Raniganj & Jogbani (Araria Region)',
    metaTitle: 'Physiotherapy for Back Pain, Sciatica & Paralysis Near Narpatganj, Forbesganj & Araria',
    metaDesc: 'Advanced non-surgical spine, joint & paralysis physiotherapy near Narpatganj, Forbesganj, Raniganj & Araria by Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi). Call +91 9711700817.',
    towns: 'Narpatganj (नरपतगंज), Forbesganj (फारबिसगंज), Raniganj (रानीगंज), Jogbani (जोगबनी), Bathnaha (बथनाहा), Simrahi (सिमराही)',
    distanceNote: 'नरपतगंज, फारबिसगंज और रानीगंज से फोर-लेन हाईवे द्वारा भीमनगर क्लिनिक बेहद सुगम है। पुराने से पुराने कमर दर्द, साइटिका, स्लिप डिस्क और लकवे के इलाज के लिए आज ही अपॉइंटमेंट बुक करें।'
  },
  {
    slug: 'physiotherapy-in-triveniganj-raghopur-simrahi',
    areaHi: 'राघोपुर, सिमराही, त्रिवेणीगंज एवं निर्मली अनुमंडल',
    areaEn: 'Raghopur, Simrahi Bazar, Triveniganj & Nirmali Subdivision',
    metaTitle: 'Physiotherapy Clinic for Raghopur, Simrahi, Triveniganj & Nirmali | Dr. Abhay Tiwari',
    metaDesc: 'Specialized orthopedic & neuro physiotherapy for patients from Raghopur, Simrahi, Triveniganj & Nirmali. Cure Slip Disc, Sciatica, Frozen Shoulder & Paralysis without surgery. Call +91 9711700817.',
    towns: 'Raghopur (राघोपुर), Simrahi Bazar (सिमराही बाजार), Triveniganj (त्रिवेणीगंज), Nirmali (निर्मली), गणपतगंज, करजाइन, भपटियाही',
    distanceNote: 'राघोपुर (सिमराही), त्रिवेणीगंज और निर्मली क्षेत्र के हजारों मरीज बिना ऑपरेशन कमर दर्द, साइटिका, घुटने के दर्द और लकवे से राहत पा चुके हैं। आने से पहले +91 9711700817 पर कॉल कर अपना समय बुक करें।'
  }
];

const blogs = [
  {
    slug: 'back-pain-relief-physiotherapy-bhimnagar',
    id: 'blog-1',
    titleHi: 'कमर दर्द (Back Pain) से तुरंत राहत के 5 आसान उपाय और फिजियोथेरेपी के फायदे',
    titleEn: '5 Simple Ways to Relieve Lower Back Pain & Benefits of Physiotherapy',
    metaTitle: 'कमर दर्द से राहत के 5 उपाय | Back Pain Relief Tips by Dr. Abhay Prakash Tiwari',
    metaDesc: 'जानें बिना ऑपरेशन और बिना दर्द निवारक गोलियों के कमर दर्द व रीढ़ की जकड़न को जड़ से ठीक करने के 5 वैज्ञानिक उपाय — डॉ. अभय प्रकाश तिवारी (प्रकाश फिजियोथेरेपी क्लिनिक, भीमनगर)।',
    bodyHi: 'आजकल लंबे समय तक बैठकर काम करना, गलत तरीके से भारी वजन उठाना और व्यायाम न करना कमर दर्द का सबसे बड़ा कारण बन गया है। जमीन से कोई भी वस्तु उठाते समय घुटनों को मोड़कर नीचे बैठें, सीधे कमर न झुकाएं। मध्यम सख्त गद्दे पर सोएं और हर 45 मिनट में 2 मिनट टहलें। यदि दर्द पैर में जा रहा हो या 1 सप्ताह से अधिक रहे, तो प्रकाश फिजियोथेरेपी क्लिनिक (भीमनगर, सुपौल) में कंप्यूटराइज्ड लंबर ट्रैक्शन और मेकेंजी एक्सरसाइज से बिना सर्जरी इलाज कराएं।'
  },
  {
    slug: 'sciatica-treatment-without-surgery',
    id: 'blog-2',
    titleHi: 'साइटिका (Sciatica) के लक्षण, कारण और बिना ऑपरेशन सटीक इलाज',
    titleEn: 'Sciatica Symptoms, Causes & Non-Surgical Physiotherapy Cure',
    metaTitle: 'साइटिका का बिना ऑपरेशन इलाज | Sciatica Nerve Pain Relief in Supaul & Birpur',
    metaDesc: 'कमर से पैर तक करंट जैसा दर्द और सुन्नपन (Sciatica) क्यों होता है? जानें न्यूरोडायनामिक्स और लंबर ट्रैक्शन से बिना सर्जरी साइटिका का पक्का इलाज।',
    bodyHi: 'साइटिका शरीर की सबसे लंबी नस है जो रीढ़ की हड्डी के निचले हिस्से (L4-L5, L5-S1) से शुरू होकर दोनों पैरों तक जाती है। डिस्क खिसककर इस नस को दबाने पर पूरे पैर में तेज दर्द, झनझनाहट और सुन्नपन होता है। प्रकाश फिजियोथेरेपी क्लिनिक में न्यूरोडायनामिक्स (Nerve Gliding), ट्रैक्शन और मायोफेशियल रिलीज़ से 85-90% मरीज 2 से 3 सप्ताह में बिना ऑपरेशन पूरी तरह ठीक हो जाते हैं।'
  },
  {
    slug: 'stroke-paralysis-physiotherapy-recovery',
    id: 'blog-3',
    titleHi: 'लकवा (Paralysis) के बाद मरीज फिर से कैसे चलने लगे? न्यूरो फिजियोथेरेपी का रोल',
    titleEn: 'How Stroke & Paralysis Patients Regain Walking Ability Through Neuro Physio',
    metaTitle: 'लकवा (Paralysis/Stroke) के बाद रिकवरी कैसे करें? | Neuro Physiotherapy in Supaul',
    metaDesc: 'ब्रेन स्ट्रोक या लकवे के बाद शुरुआती 6 महीने सबसे महत्वपूर्ण होते हैं। जानें बॉबाथ तकनीक और इलेक्ट्रिकल स्टिम्यूलेशन से मरीज को फिर से चलाने के उपाय।',
    bodyHi: 'ब्रेन स्ट्रोक होने के बाद मस्तिष्क में न्यूरोप्लास्टिसिटी (Neuroplasticity) के जरिए सही कसरत कराने पर नई नसें काम संभाल लेती हैं। पैसिव मूवमेंट, इलेक्ट्रिकल मसल स्टिम्यूलेशन (GMS/FES), बॉबाथ एक्सरसाइज और गेज ट्रेनिंग (चलने का अभ्यास) से लकवाग्रस्त मरीज पुनः आत्मनिर्भर बन सकते हैं। हमारे भीमनगर क्लिनिक में ओपीडी और होम विजिट दोनों उपलब्ध हैं।'
  }
];

function renderCommonStyles() {
  return `
  <style>
    :root { --primary: #0F4C81; --green: #25D366; --red: #dc2626; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', 'Noto Sans Devanagari', system-ui, -apple-system, sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.65; padding-bottom: 80px; }
    .topbar { background: #0F4C81; color: #fff; font-size: 13px; padding: 8px 16px; text-align: center; font-weight: 600; }
    .topbar a { color: #fde047; text-decoration: none; font-weight: 700; margin-left: 8px; }
    header { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 14px 20px; position: sticky; top: 0; z-index: 30; }
    .nav-wrap { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
    .brand { font-size: 18px; font-weight: 800; color: #0F4C81; text-decoration: none; }
    .brand span { display: block; font-size: 12px; color: #475569; font-weight: 600; }
    .nav-ctas { display: flex; gap: 8px; flex-wrap: wrap; }
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none; transition: 0.2s; }
    .btn-call { background: #dc2626; color: #fff; }
    .btn-wa { background: #25D366; color: #fff; }
    .btn-primary { background: #0F4C81; color: #fff; }
    .container { max-width: 1000px; margin: 0 auto; padding: 28px 16px; }
    .breadcrumb { font-size: 13px; color: #64748b; margin-bottom: 16px; }
    .breadcrumb a { color: #0F4C81; text-decoration: none; font-weight: 600; }
    .hero-card { background: #fff; border-radius: 20px; padding: 24px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(15,76,129,0.06); margin-bottom: 24px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0F4C81; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-bottom: 10px; }
    h1 { font-size: clamp(24px, 4vw, 36px); color: #0f172a; line-height: 1.25; margin-bottom: 8px; font-weight: 800; }
    h2 { font-size: clamp(19px, 3vw, 24px); color: #0F4C81; margin: 20px 0 10px; font-weight: 700; }
    h3 { font-size: 17px; color: #0f172a; margin: 14px 0 6px; font-weight: 700; }
    p { margin-bottom: 12px; font-size: 15px; color: #334155; }
    .cta-box { background: #f0fdf4; border: 2px solid #86efac; border-radius: 16px; padding: 18px; margin: 20px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; }
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
    ul { padding-left: 20px; margin-bottom: 12px; }
    li { margin-bottom: 6px; font-size: 14.5px; color: #334155; }
    .fee-strip { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 14px; padding: 16px; margin: 20px 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
    .fee-item { background: #fff; padding: 12px; border-radius: 10px; border: 1px solid #dbeafe; }
    .fee-item strong { color: #0F4C81; font-size: 18px; display: block; }
    .doc-card { display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; margin: 20px 0; flex-wrap: wrap; }
    .doc-card img { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #0F4C81; }
    .links-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .links-grid a { background: #fff; border: 1px solid #cbd5e1; color: #0F4C81; padding: 6px 12px; border-radius: 8px; font-size: 13px; text-decoration: none; font-weight: 600; }
    .links-grid a:hover { background: #0F4C81; color: #fff; }
    .sticky-bar { position: fixed; bottom: 0; left: 0; right: 0; background: #0f172a; padding: 10px 12px; display: flex; justify-content: center; gap: 10px; z-index: 50; }
    .sticky-bar a { flex: 1; max-width: 220px; text-align: center; padding: 12px 10px; border-radius: 10px; font-weight: 800; font-size: 14px; text-decoration: none; color: #fff; }
    footer { background: #0f172a; color: #cbd5e1; padding: 32px 16px; margin-top: 40px; font-size: 13px; text-align: center; }
    footer a { color: #38bdf8; text-decoration: none; }
  </style>`;
}

function renderTreatmentPage(t) {
  const canonicalUrl = `${BASE_URL}/treatments/${t.slug}.html`;
  const waMsg = encodeURIComponent(`नमस्ते डॉ. अभय प्रकाश तिवारी, मुझे "${t.titleHi}" के इलाज के लिए अपॉइंटमेंट/परामर्श चाहिए।`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": t.metaTitle,
    "description": t.metaDesc,
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "MedicalCondition",
      "name": t.titleEn,
      "alternateName": t.titleHi,
      "PossibleTreatment": t.techniquesEn.map(tech => ({ "@type": "PhysicalTherapy", "name": tech }))
    },
    "provider": {
      "@type": "MedicalClinic",
      "name": "Prakash Physiotherapy Clinic",
      "telephone": "+91-9711700817",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhantabari Road, Bhimnagar (Shaileshpur)",
        "addressLocality": "Birpur, Supaul",
        "addressRegion": "Bihar",
        "postalCode": "854338",
        "addressCountry": "IN"
      }
    }
  };

  return `<!doctype html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.metaTitle}</title>
  <meta name="description" content="${t.metaDesc}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${t.metaTitle}" />
  <meta property="og:description" content="${t.metaDesc}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${BASE_URL}${encodeURI(t.image)}" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  ${renderCommonStyles()}
</head>
<body>
  <div class="topbar">
    📍 भंटाबारी रोड, भीमनगर (बीरपुर, सुपौल) | ओपीडी: सुबह 8:00 - रात 8:00 | <a href="tel:+919711700817">📞 +91 9711700817</a> | <a href="tel:+9779819053588">🇳🇵 +977 9819053588</a>
  </div>
  <header>
    <div class="nav-wrap">
      <a href="/" class="brand">
        प्रकाश फिजियोथेरेपी क्लिनिक (Prakash Physiotherapy Clinic)
        <span>डॉ. अभय प्रकाश तिवारी • M.P.T. Orthopedics (New Delhi)</span>
      </a>
      <div class="nav-ctas">
        <a href="tel:+919711700817" class="btn btn-call">📞 Call +91 9711700817</a>
        <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp बुकिंग</a>
        <a href="/?treatment=${t.id}" class="btn btn-primary">🏠 मुख्य वेबसाइट खोलें</a>
      </div>
    </div>
  </header>

  <main class="container">
    <nav class="breadcrumb">
      <a href="/">होम (Home)</a> &rsaquo; <a href="/#treatments">इलाज व सेवाएं (Treatments)</a> &rsaquo; <span>${t.titleEn}</span>
    </nav>

    <article class="hero-card">
      <span class="badge">✓ बिना ऑपरेशन वैज्ञानिक फिजियोथेरेपी इलाज (Non-Surgical Care)</span>
      <h1>${t.titleHi}</h1>
      <h2 style="margin-top:4px;font-size:20px;color:#0F4C81;">${t.titleEn}</h2>
      <p><strong>${t.shortHi}</strong> (${t.shortEn})</p>

      <div class="cta-box">
        <div>
          <strong style="color:#0f172a;font-size:16px;display:block;">क्या आप या आपके परिवार में कोई इस समस्या से परेशान है?</strong>
          <span style="font-size:13.5px;color:#334155;">डॉ. अभय प्रकाश तिवारी (12+ वर्ष अनुभव, पूर्व दिल्ली अस्पताल विशेषज्ञ) से आज ही परामर्श लें।</span>
        </div>
        <div class="nav-ctas">
          <a href="tel:+919711700817" class="btn btn-call">📞 अभी फोन करें: +91 9711700817</a>
          <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp पर अपॉइंटमेंट लें</a>
        </div>
      </div>

      <h2>बीमारी एवं फिजियोथेरेपी समाधान (Overview & Treatment)</h2>
      <p>${t.fullHi}</p>
      <p>${t.fullEn}</p>

      <div class="grid-2">
        <div class="box">
          <h3>प्रमुख लक्षण (Key Symptoms):</h3>
          <ul>
            ${t.symptomsHi.map((s, idx) => `<li>${s} (${t.symptomsEn[idx] || ''})</li>`).join('')}
          </ul>
        </div>
        <div class="box">
          <h3>उपलब्ध आधुनिक थेरेपी तकनीकें (Modalities Used):</h3>
          <ul>
            ${t.techniquesHi.map((tech, idx) => `<li><strong>${tech}</strong> — ${t.techniquesEn[idx] || ''}</li>`).join('')}
          </ul>
        </div>
      </div>

      <h2>पारदर्शी परामर्श एवं थेरेपी शुल्क (Transparent Clinic & Home Visit Fees)</h2>
      <div class="fee-strip">
        <div class="fee-item">
          <span>प्रथम ओपीडी परामर्श (1st OPD Visit)</span>
          <strong>₹500</strong>
          <small>संपूर्ण जांच व प्रथम फिजियोथेरेपी सेशन</small>
        </div>
        <div class="fee-item">
          <span>आगे के ओपीडी सेशन (Follow-up OPD)</span>
          <strong>₹300 / सेशन</strong>
          <small>नियमित मशीन व एक्सरसाइज थेरेपी</small>
        </div>
        <div class="fee-item">
          <span>होम विजिट सुविधा (Home Visit Care)</span>
          <strong>₹700 / सेशन</strong>
          <small>मरीज के घर जाकर फिजियोथेरेपी इलाज</small>
        </div>
      </div>

      <div class="doc-card">
        <img src="/img/Abhay Prakash.webp" alt="Dr. Abhay Prakash Tiwari" />
        <div>
          <h3 style="margin:0;">डॉ. अभय प्रकाश तिवारी (Dr. Abhay Prakash Tiwari)</h3>
          <p style="margin:2px 0;font-weight:700;color:#0F4C81;">M.P.T. Orthopedics (New Delhi) • B.P.T. (Magadh University)</p>
          <p style="margin:0;font-size:13px;">Reg: M.I.A.P. 42989 | G.A.P.T./22/G00562 | 12+ वर्षों का अनुभव | भीमनगर, बीरपुर, सुपौल व नेपाल बॉर्डर</p>
        </div>
      </div>

      <h2>अन्य संबंधित इलाज (Other Specialized Treatments)</h2>
      <div class="links-grid">
        ${treatments.map(other => `<a href="/treatments/${other.slug}.html">${other.titleHi.split('—')[0].trim()}</a>`).join('')}
      </div>

      <h2>हमारे सेवारत क्षेत्र (Locations Served in Bihar & Nepal)</h2>
      <div class="links-grid">
        ${locations.map(loc => `<a href="/locations/${loc.slug}.html">${loc.areaEn}</a>`).join('')}
      </div>
    </article>
  </main>

  <div class="sticky-bar">
    <a href="tel:+919711700817" style="background:#dc2626;">📞 कॉल करें (+91 9711700817)</a>
    <a href="https://wa.me/919711700817?text=${waMsg}" style="background:#25D366;" target="_blank" rel="noopener">💬 WhatsApp परामर्श</a>
  </div>

  <footer>
    <p><strong>प्रकाश फिजियोथेरेपी क्लिनिक (Prakash Physiotherapy Clinic)</strong> — भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, जिला - सुपौल (बिहार) - 854338</p>
    <p style="margin-top:6px;"><a href="/">मुख्य वेबसाइट (Home)</a> • <a href="/#treatments">सभी इलाज</a> • <a href="/#reviews">मरीजों की राय (4.9★)</a> • <a href="/#contact">संपर्क व मैप</a></p>
  </footer>
</body>
</html>`;
}

function renderLocationPage(loc) {
  const canonicalUrl = `${BASE_URL}/locations/${loc.slug}.html`;
  const waMsg = encodeURIComponent(`नमस्ते डॉ. अभय प्रकाश तिवारी, मैं "${loc.areaHi}" से हूँ और मुझे फिजियोथेरेपी परामर्श/अपॉइंटमेंट चाहिए।`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `Prakash Physiotherapy Clinic — Serving ${loc.areaEn}`,
    "url": canonicalUrl,
    "telephone": ["+91-9711700817", "+91-9654874675", "+977-9819053588"],
    "areaServed": loc.towns.split(',').map(t => t.trim()),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhantabari Road, Bhimnagar (Shaileshpur)",
      "addressLocality": "Birpur, Supaul",
      "addressRegion": "Bihar",
      "postalCode": "854338",
      "addressCountry": "IN"
    }
  };

  return `<!doctype html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${loc.metaTitle}</title>
  <meta name="description" content="${loc.metaDesc}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${loc.metaTitle}" />
  <meta property="og:description" content="${loc.metaDesc}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="${BASE_URL}/img/Prakash%20Physio%20Hero.webp" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  ${renderCommonStyles()}
</head>
<body>
  <div class="topbar">
    📍 भंटाबारी रोड, भीमनगर (बीरपुर, सुपौल) | ओपीडी व होम विजिट सेवा | <a href="tel:+919711700817">📞 +91 9711700817</a> | <a href="tel:+9779819053588">🇳🇵 +977 9819053588</a>
  </div>
  <header>
    <div class="nav-wrap">
      <a href="/" class="brand">
        प्रकाश फिजियोथेरेपी क्लिनिक (Prakash Physiotherapy Clinic)
        <span>डॉ. अभय प्रकाश तिवारी • M.P.T. Orthopedics (New Delhi)</span>
      </a>
      <div class="nav-ctas">
        <a href="tel:+919711700817" class="btn btn-call">📞 Call +91 9711700817</a>
        <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp बुकिंग</a>
        <a href="/" class="btn btn-primary">🏠 मुख्य वेबसाइट</a>
      </div>
    </div>
  </header>

  <main class="container">
    <nav class="breadcrumb">
      <a href="/">होम (Home)</a> &rsaquo; <a href="/#locations">सेवा क्षेत्र (Service Areas)</a> &rsaquo; <span>${loc.areaEn}</span>
    </nav>

    <article class="hero-card">
      <span class="badge">✓ ओपीडी एवं घर पर इलाज (OPD & Home Visit Physiotherapy)</span>
      <h1>${loc.areaHi} के मरीजों के लिए विशेषज्ञ फिजियोथेरेपी क्लिनिक एवं अस्पताल</h1>
      <h2 style="margin-top:4px;font-size:20px;color:#0F4C81;">Best Physiotherapy Clinic & Rehabilitation Care for ${loc.areaEn}</h2>
      <p>${loc.distanceNote}</p>

      <div class="cta-box">
        <div>
          <strong style="color:#0f172a;font-size:16px;display:block;">कमर दर्द, साइटिका, स्लिप डिस्क, लकवा या जोड़ों के दर्द से परेशान हैं?</strong>
          <span style="font-size:13.5px;color:#334155;">बिना ऑपरेशन दिल्ली-स्तर का फिजियोथेरेपी इलाज। अभी फोन या व्हाट्सएप से अपॉइंटमेंट बुक करें।</span>
        </div>
        <div class="nav-ctas">
          <a href="tel:+919711700817" class="btn btn-call">📞 कॉल करें: +91 9711700817</a>
          <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp अपॉइंटमेंट</a>
        </div>
      </div>

      <h2>प्रमुख सेवारत शहर, बाजार व पंचायत (Covered Localities)</h2>
      <p><strong>${loc.towns}</strong></p>

      <h2>हमारे क्लिनिक में उपलब्ध मुख्य इलाज (Key Treatments Offered)</h2>
      <div class="links-grid">
        ${treatments.map(tr => `<a href="/treatments/${tr.slug}.html">${tr.titleHi.split('—')[0].trim()}</a>`).join('')}
      </div>

      <h2>पारदर्शी शुल्क संरचना (Consultation & Home Visit Charges)</h2>
      <div class="fee-strip">
        <div class="fee-item">
          <span>प्रथम ओपीडी परामर्श (1st OPD Visit)</span>
          <strong>₹500</strong>
          <small>संपूर्ण जांच व प्रथम फिजियोथेरेपी सेशन</small>
        </div>
        <div class="fee-item">
          <span>आगे के ओपीडी सेशन (Follow-up OPD)</span>
          <strong>₹300 / सेशन</strong>
          <small>नियमित मशीन व एक्सरसाइज थेरेपी</small>
        </div>
        <div class="fee-item">
          <span>होम विजिट सुविधा (Home Visit Care)</span>
          <strong>₹700 / सेशन</strong>
          <small>मरीज के घर जाकर फिजियोथेरेपी इलाज</small>
        </div>
      </div>

      <h2>अन्य क्षेत्रीय सेवा पेज (Other Regional Service Pages)</h2>
      <div class="links-grid">
        ${locations.map(l => `<a href="/locations/${l.slug}.html">${l.areaEn}</a>`).join('')}
      </div>
    </article>
  </main>

  <div class="sticky-bar">
    <a href="tel:+919711700817" style="background:#dc2626;">📞 कॉल करें (+91 9711700817)</a>
    <a href="https://wa.me/919711700817?text=${waMsg}" style="background:#25D366;" target="_blank" rel="noopener">💬 WhatsApp परामर्श</a>
  </div>

  <footer>
    <p><strong>प्रकाश फिजियोथेरेपी क्लिनिक (Prakash Physiotherapy Clinic)</strong> — भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, जिला - सुपौल (बिहार) - 854338</p>
    <p style="margin-top:6px;"><a href="/">मुख्य वेबसाइट (Home)</a> • <a href="/#treatments">सभी इलाज</a> • <a href="/#contact">संपर्क व गूगल मैप</a></p>
  </footer>
</body>
</html>`;
}

function renderBlogPage(b) {
  const canonicalUrl = `${BASE_URL}/blog/${b.slug}.html`;
  const waMsg = encodeURIComponent(`नमस्ते डॉ. अभय प्रकाश तिवारी, मैंने आपका लेख "${b.titleHi}" पढ़ा और मुझे परामर्श चाहिए।`);

  return `<!doctype html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${b.metaTitle}</title>
  <meta name="description" content="${b.metaDesc}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  ${renderCommonStyles()}
</head>
<body>
  <div class="topbar">
    📍 प्रकाश फिजियोथेरेपी क्लिनिक, भीमनगर (सुपौल) | <a href="tel:+919711700817">📞 +91 9711700817</a>
  </div>
  <header>
    <div class="nav-wrap">
      <a href="/" class="brand">
        प्रकाश फिजियोथेरेपी क्लिनिक (Prakash Physiotherapy Clinic)
        <span>डॉ. अभय प्रकाश तिवारी • M.P.T. Orthopedics (New Delhi)</span>
      </a>
      <div class="nav-ctas">
        <a href="tel:+919711700817" class="btn btn-call">📞 Call +91 9711700817</a>
        <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>
  </header>
  <main class="container">
    <nav class="breadcrumb">
      <a href="/">होम (Home)</a> &rsaquo; <a href="/#blog">स्वास्थ्य ब्लॉग (Blog)</a> &rsaquo; <span>${b.titleEn}</span>
    </nav>
    <article class="hero-card">
      <span class="badge">लेखक: डॉ. अभय प्रकाश तिवारी (M.P.T. Ortho New Delhi)</span>
      <h1>${b.titleHi}</h1>
      <h2 style="margin-top:4px;font-size:19px;color:#0F4C81;">${b.titleEn}</h2>
      <p>${b.bodyHi}</p>
      <div class="cta-box">
        <div>
          <strong>डॉ. अभय प्रकाश तिवारी से सीधे परामर्श लें</strong>
          <p style="margin:0;font-size:13.5px;">भंटाबारी रोड, भीमनगर (शैलेशपुर), बीरपुर, सुपौल | ओपीडी ₹500 | होम विजिट ₹700</p>
        </div>
        <div class="nav-ctas">
          <a href="tel:+919711700817" class="btn btn-call">📞 +91 9711700817</a>
          <a href="https://wa.me/919711700817?text=${waMsg}" class="btn btn-wa" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
      </div>
      <h2>मुख्य इलाज पेज देखें</h2>
      <div class="links-grid">
        ${treatments.map(tr => `<a href="/treatments/${tr.slug}.html">${tr.titleHi.split('—')[0].trim()}</a>`).join('')}
      </div>
    </article>
  </main>
</body>
</html>`;
}

// 1. Write Treatment Pages
const treatmentsDir = path.join(publicDir, 'treatments');
fs.mkdirSync(treatmentsDir, { recursive: true });
for (const t of treatments) {
  fs.writeFileSync(path.join(treatmentsDir, `${t.slug}.html`), renderTreatmentPage(t), 'utf8');
}

// 2. Write Location Pages
const locationsDir = path.join(publicDir, 'locations');
fs.mkdirSync(locationsDir, { recursive: true });
for (const loc of locations) {
  fs.writeFileSync(path.join(locationsDir, `${loc.slug}.html`), renderLocationPage(loc), 'utf8');
}

// 3. Write Blog Pages
const blogDir = path.join(publicDir, 'blog');
fs.mkdirSync(blogDir, { recursive: true });
for (const b of blogs) {
  fs.writeFileSync(path.join(blogDir, `${b.slug}.html`), renderBlogPage(b), 'utf8');
}

// 4. Generate Comprehensive Multi-Page Sitemap
const urlsXml = [
  `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="hi" href="${BASE_URL}/?lang=hi" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/?lang=en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
    <image:image>
      <image:loc>${BASE_URL}/img/Abhay%20Prakash.webp</image:loc>
      <image:title>Dr. Abhay Prakash Tiwari - M.P.T. Orthopedics Physiotherapist in Bhimnagar Supaul</image:title>
    </image:image>
    <image:image>
      <image:loc>${BASE_URL}/img/Prakash%20Physio%20Hero.webp</image:loc>
      <image:title>Prakash Physiotherapy Clinic Bhimnagar Birpur Supaul</image:title>
    </image:image>
    <image:image>
      <image:loc>${BASE_URL}/img/clinic%20photo.webp</image:loc>
      <image:title>Prakash Physiotherapy Clinic Exterior Signboard Bhimnagar</image:title>
    </image:image>
  </url>`,
  ...treatments.map(t => `  <url>
    <loc>${BASE_URL}/treatments/${t.slug}.html</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`),
  ...locations.map(l => `  <url>
    <loc>${BASE_URL}/locations/${l.slug}.html</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`),
  ...blogs.map(b => `  <url>
    <loc>${BASE_URL}/blog/${b.slug}.html</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
].join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlsXml}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log(`Generated ${treatments.length} treatment pages, ${locations.length} location pages, ${blogs.length} blog pages, and updated sitemap.xml with ${1 + treatments.length + locations.length + blogs.length} URLs.`);
