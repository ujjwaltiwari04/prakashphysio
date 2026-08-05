export type Language = 'hi' | 'en';

export interface Treatment {
  id: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  shortDescHi: string;
  shortDescEn: string;
  fullDescHi: string;
  fullDescEn: string;
  symptomsHi: string[];
  symptomsEn: string[];
  causesHi: string[];
  causesEn: string[];
  techniquesHi: string[];
  techniquesEn: string[];
  image: string;
  category: 'spine' | 'neuro' | 'joint' | 'rehab' | 'specialized';
  iconName: string;
}

export interface RecoveryStory {
  id: string;
  patientInitials: string;
  age: number;
  locationHi: string;
  locationEn: string;
  conditionHi: string;
  conditionEn: string;
  treatmentDurationHi: string;
  treatmentDurationEn: string;
  storyHi: string;
  storyEn: string;
  outcomeHi: string;
  outcomeEn: string;
  rating: number;
  verified: boolean;
}

export interface DoctorProfile {
  nameHi: string;
  nameEn: string;
  titleHi: string;
  titleEn: string;
  qualificationsHi: string[];
  qualificationsEn: string[];
  registrationNumbers: string[];
  experienceYears: number;
  aboutHi: string;
  aboutEn: string;
  missionHi: string;
  missionEn: string;
  specializationsHi: string[];
  specializationsEn: string[];
  image: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  locationHi: string;
  locationEn: string;
  rating: number;
  timeAgoHi: string;
  timeAgoEn: string;
  textHi: string;
  textEn: string;
  treatmentTagHi: string;
  treatmentTagEn: string;
  source?: 'google' | 'patient';
}

export interface FAQItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  category: 'general' | 'treatment' | 'timing' | 'location';
}

export interface BlogPost {
  id: string;
  slug: string;
  titleHi: string;
  titleEn: string;
  summaryHi: string;
  summaryEn: string;
  contentHi: string;
  contentEn: string;
  categoryHi: string;
  categoryEn: string;
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
}

export interface GalleryImage {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'clinic' | 'equipment' | 'doctor' | 'exercise' | 'reception';
  url: string;
  alt: string;
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  villageLocation: string;
  condition: string;
  preferredDate: string;
  preferredTimeSlot: string;
  preferredLanguage: Language;
  notes: string;
}

export interface ServingLocation {
  id: string;
  nameEn: string;
  nameHi: string;
  districtEn: string;
  districtHi: string;
  category: 'primary' | 'supaul' | 'araria' | 'nepal' | 'barrage';
  distanceKm: string;
  estTravelTimeHi: string;
  estTravelTimeEn: string;
  taglineHi: string;
  taglineEn: string;
}
