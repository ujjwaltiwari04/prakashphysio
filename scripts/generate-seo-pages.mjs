import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');

const SITE_URL = 'https://prakashphysio.in';
const TODAY = '2026-10-11';

const treatments = [
  {
    id: 'back-pain',
    slug: 'back-pain-treatment-bhimnagar',
    titleEn: 'Back Pain & Lumbar Spine Therapy',
    category: 'Spine & Back Care',
    image: '/img/backpain.webp',
    shortDescEn: 'Comprehensive physical therapy for chronic lower back stiffness, postural stress, and lumbar spine dysfunction in Bhimnagar, Birpur & Supaul.',
    fullDescEn: 'Lower back pain affects daily work, sitting, and lifting. Using gentle computerized spinal traction, IFT electrotherapy, core stabilization exercises, and manual therapy, Dr. Abhay Prakash Tiwari restores natural spinal alignment and relieves deep muscle strain without surgery.',
    symptomsEn: [
      'Dull or sharp pain in lower spine',
      'Difficulty bending forward or getting up from bed',
      'Heaviness or tightness radiating to legs',
      'Morning stiffness in lower lumbar area'
    ],
    causesEn: [
      'Improper heavy lifting',
      'Prolonged poor sitting posture',
      'Age-related spinal disc degeneration',
      'Weak core and postural trunk muscles'
    ],
    techniquesEn: [
      'Computerized Lumbar Traction',
      'Interferential Therapy (IFT)',
      'Core Muscle Rehabilitation',
      'Postural Adjustment & Ergonomics'
    ]
  },
  {
    id: 'sciatica',
    slug: 'sciatica-treatment-supaul',
    titleEn: 'Sciatica Nerve Compression Therapy',
    category: 'Spine & Back Care',
    image: '/img/nerve compression therapy.webp',
    shortDescEn: 'Targeted decompression therapy for sciatic nerve irritation radiating down the leg in Supaul, Birpur & Bhimnagar.',
    fullDescEn: 'Sciatica occurs when the sciatic nerve is pinched in the lumbar spine. Our clinic uses nerve gliding exercises, localized mechanical decompression, and targeted electrotherapy to relieve leg numbness and sharp shooting pains without spinal surgery.',
    symptomsEn: [
      'Sharp radiating pain along one leg',
      'Numbness and tingling sensation in calf or foot',
      'Weakness or difficulty placing weight on foot',
      'Burning sensation while sitting or standing'
    ],
    causesEn: [
      'L4-L5 / L5-S1 herniated disc compression',
      'Sciatic nerve inflammation',
      'Spinal canal narrowing (Lumbar Stenosis)',
      'Piriformis muscle tightness'
    ],
    techniquesEn: [
      'Neurodynamic Nerve Gliding',
      'Lumbar Mechanical Decompression',
      'Deep Myofascial Release',
      'Therapeutic Nerve Stretching'
    ]
  },
  {
    id: 'slip-disc',
    slug: 'slip-disc-treatment-birpur',
    titleEn: 'Non-Surgical Slip Disc Rehabilitation',
    category: 'Spine & Back Care',
    image: '/img/slip_disc.webp',
    shortDescEn: 'Specialized spinal rehabilitation to retract herniated discs without invasive spinal surgery in Birpur, Bhimnagar & Supaul.',
    fullDescEn: 'Herniated or slipped discs cause intense nerve pressure. Through the renowned McKenzie protocol, computerized traction, and posture re-education, Dr. Abhay Prakash Tiwari helps over 90% of slip disc patients avoid risky spinal operations.',
    symptomsEn: [
      'Aggravated pain on coughing or sneezing',
      'Inability to lift legs or sit straight',
      'Severe lower back stiffness and spasm',
      'Radiating pain or numbness into buttocks and legs'
    ],
    causesEn: [
      'Sudden strain during heavy lifting',
      'Traumatic spinal jerk or fall',
      'Degenerative disc wear and tear',
      'Prolonged forward bending posture'
    ],
    techniquesEn: [
      'McKenzie Spine Extension Protocol',
      'Computerized Traction System',
      'Core Stability Re-education',
      'Ergonomic Spine Protection Training'
    ]
  },
  {
    id: 'paralysis-stroke',
    slug: 'paralysis-stroke-physiotherapy-bihar',
    titleEn: 'Paralysis & Stroke Neuro Rehabilitation',
    category: 'Neurological Rehabilitation',
    image: '/img/stroke_paralysis.webp',
    shortDescEn: 'Expert neurological rehabilitation restoring muscle strength, gait, and mobility after brain stroke across Supaul, Birpur & Nepal border.',
    fullDescEn: 'Stroke rehabilitation requires structured neurological exercise protocols. Using Bobath principles, PNF techniques, and Functional Electrical Stimulation (FES), we help stroke and paralysis survivors regain balance, hand function, and walking independence.',
    symptomsEn: [
      'Weakness or paralysis on one side of body (Hemiplegia)',
      'Muscle spasticity, stiffness, or flaccidity',
      'Loss of balance and motor coordination',
      'Difficulty walking or gripping objects'
    ],
    causesEn: [
      'Ischemic stroke / cerebral blood clot',
      'Brain hemorrhage or uncontrolled hypertension',
      'Neurological nerve pathway injury'
    ],
    techniquesEn: [
      'Bobath Neuro-Developmental Therapy',
      'PNF Therapeutic Patterns',
      'Functional Electrical Muscle Stimulation (FES)',
      'Gait & Balance Retraining'
    ]
  },
  {
    id: 'cervical-neck-pain',
    slug: 'neck-pain-physiotherapy-supaul',
    titleEn: 'Cervical Spondylosis & Neck Pain Care',
    category: 'Spine & Back Care',
    image: '/img/Therapy Session 1.webp',
    shortDescEn: 'Effective relief for cervical spondylosis, neck muscle spasm, vertigo, and radiating arm numbness in Supaul & Bhimnagar.',
    fullDescEn: 'Cervical pain often causes dizziness, shoulder tension, and radiating hand tingling. Our cervical traction, myofascial release, and isometric neck exercises relieve nerve root pressure and restore healthy neck posture.',
    symptomsEn: [
      'Severe neck stiffness when turning head',
      'Dizziness / Vertigo and tension headache',
      'Tingling radiating down shoulder to fingers',
      'Upper back and trapezius muscle knots'
    ],
    causesEn: [
      'Forward head posture (prolonged mobile/desk use)',
      'Degenerative cervical disc changes',
      'Cervical nerve root impingement'
    ],
    techniquesEn: [
      'Cervical Traction Modality',
      'Isometric Neck Strengthening',
      'Myofascial Trigger Release',
      'Ergonomic Posture Correction'
    ]
  },
  {
    id: 'joint-knee-pain',
    slug: 'joint-pain-treatment-supaul',
    titleEn: 'Knee Joint Pain & Osteoarthritis Therapy',
    category: 'Joint & Ortho Care',
    image: '/img/knee_osteoarthritis.webp',
    shortDescEn: 'Targeted joint lubrication exercises, strengthening, and pain relief modalities for knee osteoarthritis in Supaul & Birpur.',
    fullDescEn: 'Knee arthritis causes pain while walking, sitting down, or climbing stairs. Specialized quadriceps strengthening, therapeutic ultrasound, and manual joint mobilization significantly improve knee function and help avoid knee replacement surgery.',
    symptomsEn: [
      'Pain while climbing stairs or squatting',
      'Crepitus / clicking sound in knee joint',
      'Swelling and morning knee stiffness',
      'Reduced knee bending or straightening'
    ],
    causesEn: [
      'Age-related cartilage wear (Osteoarthritis)',
      'Excess body weight placing load on knees',
      'Past knee ligament injury or high uric acid'
    ],
    techniquesEn: [
      'Therapeutic Ultrasound & IFT',
      'Quadriceps & Hamstring Strengthening',
      'Manual Joint Mobilization',
      'Knee Taping & Alignment Correction'
    ]
  },
  {
    id: 'frozen-shoulder',
    slug: 'frozen-shoulder-treatment-bhimnagar',
    titleEn: 'Frozen Shoulder & Adhesive Capsulitis',
    category: 'Joint & Ortho Care',
    image: '/img/frozen_shoulder.webp',
    shortDescEn: 'Gradual shoulder capsule release, range-of-motion restoration, and night pain relief therapy in Bhimnagar & Birpur.',
    fullDescEn: 'Frozen shoulder limits arm reach and causes severe night pain. Through gentle Maitland joint mobilization, shoulder pulley workouts, and myofascial release, we restore complete pain-free shoulder range of motion.',
    symptomsEn: [
      'Inability to lift arm above head or behind back',
      'Severe night pain interrupting sleep',
      'Tight, restricted shoulder joint capsule'
    ],
    causesEn: [
      'High prevalence in diabetic patients',
      'Post-injury or post-surgical shoulder immobilization',
      'Chronic rotator cuff or capsule inflammation'
    ],
    techniquesEn: [
      'Maitland Joint Mobilization',
      'Shoulder Pulley & Wand Rehab',
      'Myofascial Trigger Point Release',
      'Deep Thermal & Electro Modalities'
    ]
  },
  {
    id: 'post-knee-replacement',
    slug: 'knee-replacement-rehabilitation',
    titleEn: 'Post-Total Knee Replacement (TKR) Rehab',
    category: 'Post-Surgery Rehabilitation',
    image: '/img/post_knee_rehab.webp',
    shortDescEn: 'Step-by-step physical therapy to regain full knee flexion, walking balance, and independence after knee surgery.',
    fullDescEn: 'Post-TKR surgery requires structured exercise to bend the knee beyond 120°, reduce post-operative swelling, and walk confidently without walkers or sticks. Available both at our Bhimnagar OPD and via Home Visit service.',
    symptomsEn: [
      'Stiffness and difficulty bending knee after surgery',
      'Quadriceps and thigh muscle weakness',
      'Unsteady gait or reliance on walker'
    ],
    causesEn: [
      'Total Knee Arthroplasty (TKR)',
      'ACL / Meniscus or fracture fixation surgery'
    ],
    techniquesEn: [
      'Progressive Knee Flexion Protocol',
      'Gait & Balance Training',
      'Patellar Glide Mobilization',
      'Post-Operative Swelling Reduction'
    ]
  },
  {
    id: 'bell-palsy-facial',
    slug: 'bells-palsy-facial-physiotherapy',
    titleEn: "Bell's Palsy & Facial Nerve Rehabilitation",
    category: 'Neurological Rehabilitation',
    image: '/img/bells_palsy.webp',
    shortDescEn: 'Targeted facial nerve electrical stimulation and neuromuscular exercises for rapid facial symmetry recovery.',
    fullDescEn: "Bell's Palsy affects facial expression, eye closure, and speech due to 7th cranial nerve inflammation. Early galvanic facial nerve stimulation and mirror biofeedback exercises produce rapid recovery in facial symmetry.",
    symptomsEn: [
      'Facial drooping or weakness on one side',
      'Inability to close eye completely or smile evenly',
      'Difficulty drinking or speaking clearly'
    ],
    causesEn: [
      'Facial nerve (7th cranial nerve) inflammation',
      'Viral infection or sudden cold exposure'
    ],
    techniquesEn: [
      'Galvanic Nerve & Muscle Stimulation',
      'Facial Neuromuscular Re-education',
      'Facial Kinesio Taping & Massage'
    ]
  },
  {
    id: 'sports-injury',
    slug: 'sports-injury-physiotherapy-bihar',
    titleEn: 'Sports Injury & Muscle Strain Therapy',
    category: 'Specialized Therapy',
    image: '/img/injury showcase.webp',
    shortDescEn: 'Rapid sports injury rehabilitation including ligament tears (ACL/MCL), ankle sprains, and hamstring pulls in Supaul & Bihar.',
    fullDescEn: 'From ankle sprains to ACL ligament strains, our customized sports rehabilitation incorporates Kinesio taping, dry needling, cupping therapy, and strength conditioning for a safe return to sports.',
    symptomsEn: [
      'Sudden pop or muscle tear sensation during activity',
      'Joint swelling, instability, and bruising',
      'Pain on weight bearing or running'
    ],
    causesEn: [
      'Improper landing or twisting motion',
      'Overstretching of joint ligaments',
      'Acute muscular overload or fatigue'
    ],
    techniquesEn: [
      'Kinesiology Taping',
      'Cupping & Dry Needling',
      'Functional Plyometric Rehab',
      'Cryotherapy & Compression Protocol'
    ]
  },
  {
    id: 'dry-needling',
    slug: 'dry-needling-therapy-bhimnagar',
    titleEn: 'Advanced Dry Needling & Trigger Point Therapy',
    category: 'Specialized Therapy',
    image: '/img/dry_needling.webp',
    shortDescEn: 'Targeted insertion of fine sterile filaments into muscular trigger points for immediate deep pain release in Bhimnagar.',
    fullDescEn: 'Dry needling targets myofascial trigger points that cause stubborn muscle knots and nerve tightness. Performed by certified specialist Dr. Abhay Prakash Tiwari, it increases blood flow and releases chronic muscle spasms rapidly.',
    symptomsEn: [
      'Tight, painful muscle knots on touch',
      'Chronic neck, shoulder, or lower back ache',
      'Referred pain radiating along muscle bands'
    ],
    causesEn: [
      'Chronic postural overload or repetitive strain',
      'Deep myofascial trigger point formation'
    ],
    techniquesEn: [
      'Deep Trigger Point Dry Needling',
      'Electro-Acupuncture Stimulation',
      'Post-Needling Myofascial Stretch'
    ]
  },
  {
    id: 'cupping-therapy',
    slug: 'cupping-therapy-bhimnagar',
    titleEn: 'Cupping Therapy & Myofascial Decompression',
    category: 'Specialized Therapy',
    image: '/img/cupping_therapy.webp',
    shortDescEn: 'Vacuum myofascial decompression to boost blood circulation, remove toxins, and relieve deep back and shoulder stiffness.',
    fullDescEn: 'Cupping therapy uses controlled negative pressure to lift tight fascia, boost local blood flow, and relax deep muscular stiffness in the back, neck, shoulders, and legs.',
    symptomsEn: [
      'Deep muscular tightness in back and shoulders',
      'Post-workout or occupational muscle fatigue',
      'Restricted fascial mobility'
    ],
    causesEn: [
      'Fascial adhesions and poor local circulation',
      'Heavy physical exertion or prolonged sitting'
    ],
    techniquesEn: [
      'Static & Dynamic Gliding Cupping',
      'Myofascial Tissue Decompression',
      'Combined Heat & Mobilization Therapy'
    ]
  }
];

const locationHubs = [
  {
    slug: 'physiotherapy-in-bhimnagar',
    name: 'Bhimnagar',
    region: 'Birpur, Supaul District, Bihar',
    distance: '0 km (Main Clinic Location at Bhantabari Road, Bhimnagar)',
    title: 'Best Physiotherapy Clinic in Bhimnagar | Prakash Physiotherapy Clinic',
    description: 'Looking for the best physiotherapist in Bhimnagar? Visit Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi) on Bhantabari Road, Bhimnagar for non-surgical Back Pain, Sciatica & Paralysis treatment.',
    townsCovered: ['Bhimnagar', 'Shaileshpur', 'Bhantabari Road', 'Bhimnagar Chowk', 'Bhimnagar Barrage Area', 'Kataiya', 'Lalpur']
  },
  {
    slug: 'physiotherapy-in-birpur',
    name: 'Birpur',
    region: 'Supaul District, Bihar',
    distance: '3 km from Birpur Main Market (5 Mins Drive)',
    title: 'Best Physiotherapy Clinic Near Birpur | Dr. Abhay Prakash Tiwari',
    description: 'Top-rated physiotherapy & rehabilitation center near Birpur, Supaul. Expert non-surgical care for Slip Disc, Sciatica, Knee Pain & Paralysis. OPD & Home Visit available in Birpur.',
    townsCovered: ['Birpur', 'Birpur Main Market', 'Koshipur', 'Balua Bazar', 'Basantpur', 'Hridaynagar', 'piprahi']
  },
  {
    slug: 'physiotherapy-in-supaul',
    name: 'Supaul District',
    region: 'Kosi Division, Bihar',
    distance: 'Direct Highway Connectivity Across Supaul District',
    title: 'Best Physiotherapist in Supaul District | Prakash Physiotherapy Clinic',
    description: 'Delhi-qualified M.P.T. (Ortho) specialist Dr. Abhay Prakash Tiwari offers advanced physiotherapy in Supaul District for Back Pain, Sciatica, Stroke Paralysis, and Joint Rehab.',
    townsCovered: ['Supaul', 'Karjain Bazar', 'Pratapganj', 'Nirmali', 'Kishanpur', 'Saraigarh Bhaptiyahi', 'Pipra', 'Marauna']
  },
  {
    slug: 'physiotherapy-near-nepal-border-rajbiraj-saptari',
    name: 'Nepal Border (Kosi Barrage, Rajbiraj, Inaruwa & Saptari)',
    region: 'Indo-Nepal Border Region',
    distance: 'Just 5 km from Kosi Barrage & Nepal Border Checkpost',
    title: 'Physiotherapy Clinic Near Nepal Border (Kosi Barrage, Rajbiraj, Inaruwa, Saptari)',
    description: 'Trusted physiotherapy clinic just 5 km from Kosi Barrage & Nepal Border. Serving patients from Rajbiraj, Saptari, Inaruwa, Sunsari, Bhardaha & Hanumannagar. Nepal Helpline: +977 9819053588.',
    townsCovered: ['Kosi Barrage', 'Bhantabari Border', 'Rajbiraj', 'Saptari', 'Inaruwa', 'Sunsari', 'Bhardaha', 'Kanchanrup', 'Hanumannagar', 'Itahari', 'Lahan']
  },
  {
    slug: 'physiotherapy-in-forbesganj-araria',
    name: 'Forbesganj & Araria Region',
    region: 'Araria District, Bihar',
    distance: 'Easy NH-27 / Border Road Access from Narpatganj & Forbesganj',
    title: 'Physiotherapy Center for Forbesganj, Narpatganj & Araria Patients',
    description: 'Advanced spine, joint, and neuro physiotherapy by Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi) for patients from Narpatganj, Forbesganj, Chhatapur, and Raniganj.',
    townsCovered: ['Narpatganj', 'Forbesganj', 'Chhatapur', 'Raniganj', 'Bathnaha', 'Jogbani', 'Araria', 'Fulkaha', 'bhargama']
  },
  {
    slug: 'physiotherapy-in-triveniganj-raghopur-simrahi',
    name: 'Simrahi Bazar, Raghopur & Triveniganj',
    region: 'Supaul District, Bihar',
    distance: '15–35 Mins via NH-27 / Birpur-Simrahi Road',
    title: 'Best Physiotherapy for Simrahi Bazar, Raghopur & Triveniganj',
    description: 'Specialized non-surgical treatment for Back Pain, Sciatica, Slip Disc, and Stroke Paralysis for patients from Simrahi Bazar, Raghopur, Ganpatganj, and Triveniganj.',
    townsCovered: ['Simrahi Bazar', 'Raghopur', 'Ganpatganj', 'Triveniganj', 'Lalitgram', 'Partapganj', 'Jadia', 'Chhatapur']
  }
];

const blogPosts = [
  {
    slug: 'back-pain-relief-physiotherapy-bhimnagar',
    title: '5 Simple Habits & Exercises to Relieve Chronic Lower Back Pain',
    description: 'Learn how proper posture, core strengthening, and non-surgical spinal decompression at Prakash Physiotherapy Clinic Bhimnagar can permanently relieve chronic lower back pain.',
    date: '2026-09-15',
    image: '/img/backpain.webp',
    content: [
      'Chronic lower back pain is one of the most common reasons patients across Bhimnagar, Birpur, Supaul, and the Nepal border visit our clinic. Prolonged sitting, heavy lifting, and weak core muscles place excessive pressure on the lumbar discs (L4-L5 and L5-S1).',
      'Instead of relying on daily painkillers that only mask pain temporarily, evidence-based physiotherapy corrects the root mechanical cause. At Prakash Physiotherapy Clinic, Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics, New Delhi) uses computerized lumbar traction, Interferential Therapy (IFT), and McKenzie spinal extension protocols to decompress pinched nerves naturally.',
      '5 Daily Habits to Protect Your Spine: (1) Avoid bending forward with straight knees when lifting heavy buckets or bags; (2) Keep lower back support while sitting on chairs or driving; (3) Perform gentle Bhujangasana (prone lumbar extension) if advised by your physiotherapist; (4) Sleep on a medium-firm mattress; (5) Seek early physiotherapy assessment if back pain radiates down your leg.'
    ]
  },
  {
    slug: 'sciatica-treatment-without-surgery',
    title: 'How Physiotherapy Cures Sciatica & Slip Disc Without Surgery',
    description: 'Understand the symptoms of sciatica nerve compression and how over 90% of slip disc patients recover without surgery through specialized physiotherapy.',
    date: '2026-09-25',
    image: '/img/slip_disc.webp',
    content: [
      'When a spinal disc bulges or herniates in the lower back, it presses on the sciatic nerve root, causing sharp shooting pain, tingling, or numbness from the lower back down the hip, calf, and foot.',
      'Clinical studies show that more than 90% of slip disc and sciatica patients do not require spinal surgery. Targeted mechanical spinal decompression creates negative intradiscal pressure, helping retract the bulging disc away from the nerve root.',
      'Combined with neurodynamic nerve gliding, deep myofascial release, and progressive core stabilization at Prakash Physiotherapy Clinic in Bhimnagar, most patients experience significant relief within 1 to 3 weeks of structured therapy.'
    ]
  },
  {
    slug: 'stroke-paralysis-physiotherapy-recovery',
    title: 'Importance of Early Neuro-Physiotherapy After Brain Stroke & Paralysis',
    description: 'Why the first 3 to 6 months after a brain stroke are critical for neuroplasticity, walking recovery, and hand function rehabilitation.',
    date: '2026-10-05',
    image: '/img/stroke_paralysis.webp',
    content: [
      'After an ischemic or hemorrhagic brain stroke, patients often experience hemiplegia (weakness or paralysis on one side of the body). The brain possesses a remarkable ability called neuroplasticity—healthy brain pathways can be trained to take over lost motor functions.',
      'Starting specialized neuro-physiotherapy immediately after hospital discharge prevents joint contractures, shoulder subluxation, and muscle wasting. Using Bobath neuro-developmental techniques, PNF patterns, and Functional Electrical Stimulation (FES), we guide stroke survivors step by step from bed mobility to sitting balance, standing, and independent walking.',
      'For paralyzed patients who cannot travel easily, Prakash Physiotherapy Clinic also provides dedicated Home Visit Physiotherapy across Bhimnagar, Birpur, Supaul, and nearby areas.'
    ]
  }
];

function renderLayout({ title, description, canonicalPath, ogImage, schemaObj, bodyHtml }) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const fullImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.replace(/ /g, '%20')}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Dr. Abhay Prakash Tiwari" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="theme-color" content="#0F4C81" />
  <link rel="canonical" href="${canonicalUrl}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:site_name" content="Prakash Physiotherapy Clinic" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${fullImage}" />
  <meta property="og:locale" content="en_IN" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${fullImage}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  <script type="application/ld+json">${JSON.stringify(schemaObj)}</script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.6; }
    h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; color: #0f172a; line-height: 1.25; }
    a { color: #0F4C81; text-decoration: none; }
    .topbar { background: #0F4C81; color: #fff; font-size: 12px; padding: 8px 16px; border-bottom: 1px solid #075985; }
    .topbar-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; }
    .topbar-btns { display: flex; gap: 8px; align-items: center; }
    .btn-top { background: #0284c7; color: #fff; padding: 4px 10px; border-radius: 6px; font-weight: 700; font-size: 12px; }
    .navbar { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 14px 16px; position: sticky; top: 0; z-index: 30; }
    .navbar-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
    .brand { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 18px; color: #0F4C81; }
    .brand span { display: block; font-size: 11px; font-weight: 600; color: #64748b; }
    .nav-links { display: flex; gap: 16px; font-size: 14px; font-weight: 600; flex-wrap: wrap; }
    .nav-links a { color: #334155; }
    .nav-links a:hover { color: #0F4C81; }
    .hero-banner { background: linear-gradient(90deg, #0F4C81, #125996); color: #fff; padding: 40px 16px; }
    .hero-inner { max-width: 1100px; margin: 0 auto; }
    .badge { display: inline-block; background: rgba(255,255,255,0.12); color: #fcd34d; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 999px; margin-bottom: 10px; }
    .hero-banner h1 { color: #fff; font-size: clamp(24px, 4vw, 38px); margin-bottom: 10px; }
    .hero-banner p { color: #e0f2fe; max-width: 760px; font-size: 15px; }
    .container { max-width: 1100px; margin: 0 auto; padding: 32px 16px; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .list { list-style: none; margin-top: 12px; }
    .list li { padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; display: flex; gap: 8px; align-items: flex-start; }
    .list li::before { content: "✓"; color: #0F4C81; font-weight: 800; }
    .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }
    .btn-primary { background: #0F4C81; color: #fff; padding: 12px 22px; border-radius: 12px; font-weight: 700; font-size: 14px; display: inline-block; }
    .btn-secondary { background: #f0f9ff; color: #0F4C81; border: 1px solid #bae6fd; padding: 12px 22px; border-radius: 12px; font-weight: 700; font-size: 14px; display: inline-block; }
    .fee-strip { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 16px; margin: 20px 0; display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; font-size: 14px; }
    .links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 14px; }
    .links-grid a { background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 600; color: #1e293b; }
    .links-grid a:hover { border-color: #0F4C81; color: #0F4C81; background: #f0f9ff; }
    footer { background: #0f172a; color: #cbd5e1; padding: 36px 16px; font-size: 13px; margin-top: 40px; }
    .footer-inner { max-width: 1100px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="topbar-inner">
      <div>Bhantabari Road, Bhimnagar (Shaileshpur), Birpur, Supaul-854338, Bihar | OPD Hours: 8:00 AM - 8:00 PM (Daily)</div>
      <div class="topbar-btns">
        <a class="btn-top" href="tel:+919711700817">Call Now: +91 9711700817</a>
        <a class="btn-top" href="https://wa.me/919711700817?text=Hello%20Dr.%20Abhay%20Prakash%20Tiwari,%20I%20want%20to%20book%20a%20physiotherapy%20consultation.">WhatsApp</a>
      </div>
    </div>
  </div>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="/" class="brand">Prakash Physiotherapy Clinic<span>Dr. Abhay Prakash Tiwari • M.P.T. (Ortho) New Delhi</span></a>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/#doctor">About Doctor</a>
        <a href="/#treatments">Treatments</a>
        <a href="/#reviews">Reviews &amp; FAQ</a>
        <a href="/#contact">Contact Us</a>
      </div>
    </div>
  </nav>
  ${bodyHtml}
  <footer>
    <div class="footer-inner">
      <div>
        <strong style="color:#fff;">Prakash Physiotherapy Clinic</strong><br/>
        Dr. Abhay Prakash Tiwari (M.P.T. Ortho New Delhi, B.P.T., M.I.A.P. 42989)<br/>
        Bhantabari Road, Bhimnagar, Birpur, District Supaul - 854338, Bihar
      </div>
      <div>
        Helpline: <a href="tel:+919711700817" style="color:#38bdf8;">+91 9711700817</a> | Nepal: <a href="tel:+9779819053588" style="color:#38bdf8;">+977 9819053588</a><br/>
        <a href="/" style="color:#94a3b8;">← Back to Main Clinic Website</a>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// Ensure output directories exist
for (const dir of ['treatments', 'locations', 'blog']) {
  fs.mkdirSync(path.join(PUBLIC_DIR, dir), { recursive: true });
}

// 1. Generate Treatment Pages
for (const t of treatments) {
  const canonicalPath = `/treatments/${t.slug}.html`;
  const pageTitle = `${t.titleEn} in Bhimnagar, Birpur & Supaul | Dr. Abhay Tiwari`;
  const schemaObj = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: pageTitle,
    description: t.shortDescEn,
    url: `${SITE_URL}${canonicalPath}`,
    mainEntity: {
      '@type': 'MedicalCondition',
      name: t.titleEn,
      description: t.fullDescEn,
      possibleTreatment: t.techniquesEn.map((tech) => ({ '@type': 'MedicalTherapy', name: tech }))
    },
    provider: {
      '@type': 'MedicalClinic',
      name: 'Prakash Physiotherapy Clinic',
      telephone: '+91-9711700817',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bhantabari Road, Bhimnagar (Shaileshpur)',
        addressLocality: 'Birpur, Supaul',
        addressRegion: 'Bihar',
        postalCode: '854338',
        addressCountry: 'IN'
      }
    }
  };

  const bodyHtml = `
  <section class="hero-banner">
    <div class="hero-inner">
      <span class="badge">${t.category} • Non-Surgical Care</span>
      <h1>${t.titleEn} in Bhimnagar, Birpur &amp; Supaul</h1>
      <p>${t.shortDescEn}</p>
    </div>
  </section>
  <main class="container">
    <article class="card">
      <h2>Condition Overview &amp; Physiotherapy Solution</h2>
      <p style="margin-top:10px;">${t.fullDescEn}</p>
      <div class="fee-strip">
        <div><strong>Doctor:</strong> Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi)</div>
        <div><strong>Clinic OPD Fee:</strong> 1st Visit ₹500 | Follow-up ₹300/session</div>
        <div><strong>Home Visit:</strong> ₹700/session</div>
      </div>
      <div class="cta-row">
        <a class="btn-primary" href="tel:+919711700817">Call Now (+91 9711700817)</a>
        <a class="btn-primary" href="https://wa.me/919711700817?text=${encodeURIComponent(`Hello Dr. Abhay Prakash Tiwari, I want to consult for ${t.titleEn}.`)}">Book via WhatsApp</a>
        <a class="btn-secondary" href="/?treatment=${t.slug}">Open Interactive Clinic View</a>
      </div>
    </article>

    <div class="grid-2">
      <section class="card">
        <h3>Key Symptoms We Treat</h3>
        <ul class="list">
          ${t.symptomsEn.map((s) => `<li>${s}</li>`).join('')}
        </ul>
      </section>
      <section class="card">
        <h3>Common Underlying Causes</h3>
        <ul class="list">
          ${t.causesEn.map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </section>
    </div>

    <section class="card">
      <h3>Treatment Modalities &amp; Rehabilitation Protocols</h3>
      <ul class="list">
        ${t.techniquesEn.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
    </section>

    <section class="card">
      <h3>Other Specialized Treatments at Prakash Physiotherapy Clinic</h3>
      <div class="links-grid">
        ${treatments
          .filter((other) => other.slug !== t.slug)
          .map((other) => `<a href="/treatments/${other.slug}.html">${other.titleEn}</a>`)
          .join('')}
      </div>
    </section>
  </main>`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'treatments', `${t.slug}.html`),
    renderLayout({
      title: pageTitle,
      description: t.shortDescEn,
      canonicalPath,
      ogImage: t.image,
      schemaObj,
      bodyHtml
    }),
    'utf8'
  );
}

// 2. Generate Location Hub Pages
for (const loc of locationHubs) {
  const canonicalPath = `/locations/${loc.slug}.html`;
  const schemaObj = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `Prakash Physiotherapy Clinic — Serving ${loc.name}`,
    description: loc.description,
    url: `${SITE_URL}${canonicalPath}`,
    telephone: ['+91-9711700817', '+977-9819053588'],
    areaServed: loc.townsCovered.map((town) => ({ '@type': 'City', name: town })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhantabari Road, Bhimnagar (Shaileshpur)',
      addressLocality: 'Birpur, Supaul',
      addressRegion: 'Bihar',
      postalCode: '854338',
      addressCountry: 'IN'
    }
  };

  const bodyHtml = `
  <section class="hero-banner">
    <div class="hero-inner">
      <span class="badge">${loc.region} • ${loc.distance}</span>
      <h1>Physiotherapy Clinic for ${loc.name}</h1>
      <p>${loc.description}</p>
    </div>
  </section>
  <main class="container">
    <article class="card">
      <h2>Expert Non-Surgical Physiotherapy Serving ${loc.name}</h2>
      <p style="margin-top:10px;">Patients from <strong>${loc.townsCovered.join(', ')}</strong> visit <strong>Prakash Physiotherapy Clinic</strong> (Bhantabari Road, Bhimnagar, Birpur, Supaul) for Delhi-standard orthopedic and neurological rehabilitation under <strong>Dr. Abhay Prakash Tiwari (M.P.T. Orthopedics New Delhi, 12+ Years Experience)</strong>. Both Clinic OPD and Doorstep Home Visit physiotherapy services are available.</p>
      <div class="fee-strip">
        <div><strong>Clinic OPD Fee:</strong> 1st Visit ₹500 | Follow-up ₹300/session</div>
        <div><strong>Home Visit Service:</strong> ₹700/session</div>
        <div><strong>OPD Timings:</strong> 8:00 AM – 8:00 PM Daily</div>
      </div>
      <div class="cta-row">
        <a class="btn-primary" href="tel:+919711700817">Call India Helpline (+91 9711700817)</a>
        <a class="btn-primary" href="https://wa.me/919711700817?text=${encodeURIComponent(`Hello Dr. Abhay Prakash Tiwari, I am from ${loc.name} and want to book a physiotherapy consultation.`)}">Book via WhatsApp</a>
        <a class="btn-secondary" href="https://maps.app.goo.gl/9hx54wRLTqdXex5fA" target="_blank" rel="noopener noreferrer">Get Google Maps Directions</a>
      </div>
    </article>

    <section class="card">
      <h3>Towns &amp; Villages Covered in ${loc.name}</h3>
      <ul class="list">
        ${loc.townsCovered.map((town) => `<li>OPD &amp; Home Visit Physiotherapy for <strong>${town}</strong></li>`).join('')}
      </ul>
    </section>

    <section class="card">
      <h3>Available Physiotherapy Treatments</h3>
      <div class="links-grid">
        ${treatments.map((t) => `<a href="/treatments/${t.slug}.html">${t.titleEn}</a>`).join('')}
      </div>
    </section>

    <section class="card">
      <h3>Other Regional Service Areas</h3>
      <div class="links-grid">
        ${locationHubs
          .filter((other) => other.slug !== loc.slug)
          .map((other) => `<a href="/locations/${other.slug}.html">Physiotherapy in ${other.name}</a>`)
          .join('')}
      </div>
    </section>
  </main>`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'locations', `${loc.slug}.html`),
    renderLayout({
      title: loc.title,
      description: loc.description,
      canonicalPath,
      ogImage: '/img/Prakash Physio Hero.webp',
      schemaObj,
      bodyHtml
    }),
    'utf8'
  );
}

// 3. Generate Blog Pages
for (const post of blogPosts) {
  const canonicalPath = `/blog/${post.slug}.html`;
  const pageTitle = `${post.title} | Prakash Physiotherapy Clinic`;
  const schemaObj = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Dr. Abhay Prakash Tiwari',
      jobTitle: 'Senior Physiotherapist (M.P.T. Orthopedics New Delhi)'
    },
    publisher: {
      '@type': 'MedicalClinic',
      name: 'Prakash Physiotherapy Clinic',
      url: SITE_URL
    }
  };

  const bodyHtml = `
  <section class="hero-banner">
    <div class="hero-inner">
      <span class="badge">Patient Education Article • By Dr. Abhay Prakash Tiwari</span>
      <h1>${post.title}</h1>
      <p>${post.description}</p>
    </div>
  </section>
  <main class="container">
    <article class="card">
      ${post.content.map((p) => `<p style="margin-bottom:16px;font-size:16px;">${p}</p>`).join('')}
      <div class="cta-row">
        <a class="btn-primary" href="tel:+919711700817">Consult Dr. Tiwari (+91 9711700817)</a>
        <a class="btn-primary" href="https://wa.me/919711700817?text=${encodeURIComponent(`Hello Dr. Abhay Prakash Tiwari, I read your article "${post.title}" and want to book a consultation.`)}">Ask on WhatsApp</a>
        <a class="btn-secondary" href="/">Visit Main Clinic Page</a>
      </div>
    </article>

    <section class="card">
      <h3>Related Physiotherapy Treatments</h3>
      <div class="links-grid">
        ${treatments.slice(0, 6).map((t) => `<a href="/treatments/${t.slug}.html">${t.titleEn}</a>`).join('')}
      </div>
    </section>
  </main>`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'blog', `${post.slug}.html`),
    renderLayout({
      title: pageTitle,
      description: post.description,
      canonicalPath,
      ogImage: post.image,
      schemaObj,
      bodyHtml
    }),
    'utf8'
  );
}

// 4. Generate Clean English Sitemap (22 URLs)
const sitemapUrls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
  ...treatments.map((t) => ({
    loc: `${SITE_URL}/treatments/${t.slug}.html`,
    priority: '0.9',
    changefreq: 'weekly'
  })),
  ...locationHubs.map((l) => ({
    loc: `${SITE_URL}/locations/${l.slug}.html`,
    priority: '0.9',
    changefreq: 'weekly'
  })),
  ...blogPosts.map((b) => ({
    loc: `${SITE_URL}/blog/${b.slug}.html`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls
  .map((u, idx) => {
    const imagesBlock =
      idx === 0
        ? `
    <image:image>
      <image:loc>${SITE_URL}/img/Abhay%20Prakash.webp</image:loc>
      <image:title>Dr. Abhay Prakash Tiwari - M.P.T. Orthopedics Physiotherapist in Bhimnagar Supaul</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/img/Prakash%20Physio%20Hero.webp</image:loc>
      <image:title>Prakash Physiotherapy Clinic Bhimnagar Birpur Supaul</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE_URL}/img/clinic%20photo.webp</image:loc>
      <image:title>Prakash Physiotherapy Clinic Exterior Signboard Bhimnagar</image:title>
    </image:image>`
        : '';
    return `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${imagesBlock}
  </url>`;
  })
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(
  `Generated ${treatments.length} treatment pages, ${locationHubs.length} location pages, ${blogPosts.length} blog pages, and updated sitemap.xml with ${sitemapUrls.length} URLs.`
);
