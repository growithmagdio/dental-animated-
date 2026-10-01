export const CLINIC_CONFIG = {
  name: "Jerush Dental Clinic",
  tagline: "Gentle, modern dental care for the whole family.",
  phone: "+1 (555) 234-5678",
  phoneRaw: "+15552345678",
  whatsappNumber: "15552345678", // Clean number format for wa.me link
  email: "care@jerushdentalclinic.com",
  address: "124 Healthcare Boulevard, Suite 300, Metropolis, NY 10001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164417!2d-73.98784412342416!3d40.75797873483988!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  
  hours: [
    { days: "Monday - Friday", time: "9:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Emergency Only (By Call)" }
  ],

  stats: [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 12500, suffix: "+", label: "Happy Smiles Transformed" },
    { value: 18000, suffix: "+", label: "Painless Procedures Done" }
  ],

  whyChooseUs: [
    {
      id: "painless",
      icon: "Sparkles",
      title: "Painless Treatment",
      description: "Advanced gentle techniques and modern local anesthesia make your visit completely stress-free."
    },
    {
      id: "modern",
      icon: "Cpu",
      title: "Modern Equipment",
      description: "State-of-the-art 3D imaging, digital scanners, and precision laser dentistry."
    },
    {
      id: "experienced",
      icon: "Award",
      title: "Experienced Dentists",
      description: "Board-certified specialists with over 15 years of expert clinical excellence."
    },
    {
      id: "affordable",
      icon: "ShieldCheck",
      title: "Affordable Care",
      description: "Transparent pricing, flexible payment plans, and acceptance of major insurance schemes."
    }
  ],

  services: [
    {
      id: "checkup",
      icon: "Stethoscope",
      title: "General Check-up & Cleaning",
      description: "Comprehensive oral exams, digital X-rays, and thorough scaling for optimal health."
    },
    {
      id: "whitening",
      icon: "Smile",
      title: "Teeth Whitening",
      description: "Professional laser whitening for up to 8 shades brighter smile in just one session."
    },
    {
      id: "implants",
      icon: "Crown",
      title: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements with titanium post precision."
    },
    {
      id: "root-canal",
      icon: "Activity",
      title: "Root Canal Treatment",
      description: "Single-sitting pain-free endodontic therapy to save natural tooth structure."
    },
    {
      id: "braces",
      icon: "Grid",
      title: "Braces & Clear Aligners",
      description: "Invisible aligners and aesthetic ceramics to align your smile seamlessly."
    },
    {
      id: "veneers",
      icon: "Sparkle",
      title: "Smile Makeover / Veneers",
      description: "Custom porcelain veneers designed to correct shape, color, and symmetry."
    },
    {
      id: "kids",
      icon: "HeartHandshake",
      title: "Kids Dentistry",
      description: "Gentle pediatric dental care in a playful, friendly environment."
    },
    {
      id: "extraction",
      icon: "Scissors",
      title: "Tooth Extraction",
      description: "Gentle wisdom tooth removal and surgical extractions with fast recovery."
    }
  ],

  doctors: [
    {
      id: 1,
      name: "Dr. Sarah Jerush",
      qualification: "BDS, MDS (Cosmetic Dentistry & Prosthodontics)",
      specialty: "Chief Dental Surgeon & Smile Architect",
      bio: "Over 16 years specializing in full-mouth rehabilitations, porcelain veneers, and digital smile design.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Dr. Marcus Vance",
      qualification: "DDS, MS (Implantology & Periodontics)",
      specialty: "Senior Dental Implant Specialist",
      bio: "Internationally trained in keyhole implant surgery and bone grafting techniques with 99.4% success rate.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Dr. Elena Rostova",
      qualification: "BDS, MDS (Pediatric Dentistry)",
      specialty: "Pediatric & Orthodontic Care Lead",
      bio: "Passionate about making dental visits joyful and stress-free for children and teens alike.",
      image: "https://images.unsplash.com/photo-1594824813566-7885a3964515?auto=format&fit=crop&q=80&w=800"
    }
  ],

  beforeAfter: {
    title: "Real Smile Transformations",
    subtitle: "Drag the slider to see how our customized cosmetic dental care restores confidence.",
    // Premium quality before and after illustration images
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    labelBefore: "Before Treatment",
    labelAfter: "After Jerush Makeover"
  },

  reviews: [
    {
      id: 1,
      name: "Emily Watson",
      treatment: "Smile Makeover & Veneers",
      rating: 5,
      comment: "I used to hide my smile in every photo. Dr. Sarah and her team completely changed my life! The procedure was painless and the result looks 100% natural.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "David Chen",
      treatment: "Dental Implant & Crown",
      rating: 5,
      comment: "I had a phobia of dentists after a bad experience elsewhere. Jerush Dental Clinic made me feel completely relaxed. My implant feels just like my natural tooth!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      treatment: "Invisalign & Whitening",
      rating: 5,
      comment: "The atmosphere is so tranquil and clinical hygiene is top tier. The clear aligners worked wonders in under 8 months. Highly recommend Jerush Clinic!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 4,
      name: "Robert Taylor",
      treatment: "Painless Root Canal",
      rating: 5,
      comment: "Walked in with severe tooth pain and walked out smiling. Zero pain during the root canal procedure. Incredible skill and warmth from all staff.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ],

  social: {
    facebook: "https://facebook.com/jerushdental",
    instagram: "https://instagram.com/jerushdental",
    twitter: "https://twitter.com/jerushdental",
    youtube: "https://youtube.com/jerushdental"
  }
};
