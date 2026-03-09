// Language detection utility
export interface LanguageConfig {
  code: string
  name: string
  direction: 'ltr' | 'rtl'
  locale: string
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  'en': {
    code: 'en',
    name: 'English',
    direction: 'ltr',
    locale: 'en_US'
  },
  'hi': {
    code: 'hi',
    name: 'हिन्दी',
    direction: 'ltr',
    locale: 'hi_IN'
  },
  'ta': {
    code: 'ta',
    name: 'தமிழ்',
    direction: 'ltr',
    locale: 'ta_IN'
  },
  'te': {
    code: 'te',
    name: 'తెలుగు',
    direction: 'ltr',
    locale: 'te_IN'
  },
  'ml': {
    code: 'ml',
    name: 'മലയാളം',
    direction: 'ltr',
    locale: 'ml_IN'
  },
  'kn': {
    code: 'kn',
    name: 'ಕನ್ನಡ',
    direction: 'ltr',
    locale: 'kn_IN'
  },
  'gu': {
    code: 'gu',
    name: 'ગુજરાતી',
    direction: 'ltr',
    locale: 'gu_IN'
  },
  'mr': {
    code: 'mr',
    name: 'मराठी',
    direction: 'ltr',
    locale: 'mr_IN'
  },
  'bn': {
    code: 'bn',
    name: 'বাংলা',
    direction: 'ltr',
    locale: 'bn_IN'
  },
  'pa': {
    code: 'pa',
    name: 'ਪੰਜਾਬੀ',
    direction: 'ltr',
    locale: 'pa_IN'
  },
  'ur': {
    code: 'ur',
    name: 'اردو',
    direction: 'rtl',
    locale: 'ur_IN'
  },
  'ar': {
    code: 'ar',
    name: 'العربية',
    direction: 'rtl',
    locale: 'ar_SA'
  }
}

/**
 * Detects user's preferred language from browser
 * Falls back to English if not supported
 */
export function detectLanguage(request?: Request): LanguageConfig {
  // Check if we have a request (server-side)
  if (request) {
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
      const preferredLanguage = parseAcceptLanguage(acceptLanguage)
      if (preferredLanguage && SUPPORTED_LANGUAGES[preferredLanguage]) {
        return SUPPORTED_LANGUAGES[preferredLanguage]
      }
    }
  }

  // Client-side detection
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0]
    if (browserLang) {
      const langCode = browserLang.split('-')[0].toLowerCase()
      if (SUPPORTED_LANGUAGES[langCode]) {
        return SUPPORTED_LANGUAGES[langCode]
      }
    }
  }

  // Default to English
  return SUPPORTED_LANGUAGES['en']
}

/**
 * Parses Accept-Language header
 */
function parseAcceptLanguage(acceptLanguage: string): string | null {
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=')
      return { code: code.split('-')[0].toLowerCase(), quality: parseFloat(q) }
    })
    .sort((a, b) => b.quality - a.quality)

  return languages[0]?.code || null
}

/**
 * Gets language-specific metadata
 */
export function getLanguageMetadata(language: LanguageConfig, settings: any) {
  const titles: Record<string, string> = {
    'en': `${settings.name} | Premium Beauty & Hair Services`,
    'hi': `${settings.name} | प्रीमियम सौंदर्य और बाल सेवाएं`,
    'ta': `${settings.name} | பிரீமியம் அழகு மற்றும் முடி சேவைகள்`,
    'te': `${settings.name} | ప్రీమియం అందం మరియు జుట్టు సేవలు`,
    'ml': `${settings.name} | പ്രീമിയം സൗന്ദര്യവും മുടി സേവനങ്ങളും`,
    'kn': `${settings.name} | ಪ್ರೀಮಿಯಂ ಸೌಂದರ್ಯ ಮತ್ತು ಕೂದಲು ಸೇವೆಗಳು`,
    'gu': `${settings.name} | પ્રીમિયમ સૌંદર્ય અને વાળ સેવાઓ`,
    'mr': `${settings.name} | प्रीमियम सौंदर्य आणि केशभूषा सेवा`,
    'bn': `${settings.name} | প্রিমিয়াম সৌন্দর্য এবং চুলের পরিষেবা`,
    'pa': `${settings.name} | ਪ੍ਰੀਮੀਅਮ ਸੁੰਦਰਤਾ ਅਤੇ ਵਾਲ ਸੇਵਾਵਾਂ`,
    'ur': `${settings.name} | پریمیوم بیوٹی اور بال کی خدمات`,
    'ar': `${settings.name} | خدمات التجميل والشعر المتميزة`
  }

  const descriptions: Record<string, string> = {
    'en': settings.description || 'Experience luxury beauty services at our premium salon. Expert stylists, premium products, and personalized care.',
    'hi': settings.description || 'हमारे प्रीमियम सैलून में लक्ज़री सौंदर्य सेवाओं का अनुभव करें। विशेषज्ञ स्टाइलिस्ट, प्रीमियम उत्पाद, और व्यक्तिगत देखभाल।',
    'ta': settings.description || 'எங்களின் பிரீமியம் அழகு நிலையத்தில் அருமையான அழகு சேவைகளை அனுபவிக்கவும். நிபுணர்கள், பிரீமியம் தயாரிப்புகள், மற்றும் தனிப்பயனாக்கப்பட்ட பராமரிப்பு.',
    'te': settings.description || 'మా ప్రీమియం సెలూన్‌లో లగ్జరీ అందం సేవలను అనుభవించండి. నిపుణులైన స్టైలిస్ట్‌లు, ప్రీమియం ఉత్పత్తులు, మరియు వ్యక్తిగత శ్రద్ధ.',
    'ml': settings.description || 'ഞങ്ങളുടെ പ്രീമിയം സലൂണിൽ ആഡംബര സൗന്ദര്യ സേവനങ്ങൾ അനുഭവിക്കുക. വിദഗ്ദ്ധരായ സ്റ്റൈലിസ്റ്റുകൾ, പ്രീമിയം ഉൽപ്പന്നങ്ങൾ, വ്യക്തിഗത പരിചര്യ.',
    'kn': settings.description || 'ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಸ್ಯಲೂನ್‌ನಲ್ಲಿ ಐಷಾರಾಮಿ ಸೌಂದರ್ಯ ಸೇವೆಗಳನ್ನು ಅನುಭವಿಸಿ. ತಜ್ಞರಾದ ಸ್ಟೈಲಿಸ್ಟ್‌ಗಳು, ಪ್ರೀಮಿಯಂ ಉತ್ಪನ್ನಗಳು, ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆ.',
    'gu': settings.description || 'અમારા પ્રીમિયમ સેલૂનમાં વૈભવી સૌંદર્ય સેવાઓનો અનુભવ કરો. નિષ્ણાત સ્ટાઇલિસ્ટ, પ્રીમિયમ ઉત્પાદનો, અને વ્યક્તિગત સંભાળ.',
    'mr': settings.description || 'आमच्या प्रीमियम सेलूनमध्ये लक्झरी सौंदर्य सेवांचा अनुभव घ्या. तज्ञ्या स्टाइलिस्ट, प्रीमियम उत्पादने, आणि वैयक्तिक काळजी.',
    'bn': settings.description || 'আমাদের প্রিমিয়াম সেলুনে বিলাসী সৌন্দর্য পরিষেবা অনুভব করুন। বিশেষজ্ঞ স্টাইলিস্ট, প্রিমিয়াম পণ্য, এবং ব্যক্তিগত যত্ন।',
    'pa': settings.description || 'ਸਾਡੇ ਪ੍ਰੀਮੀਅਮ ਸੈਲੂਨ ਵਿੱਚ ਲਗਜ਼ਰੀ ਸੁੰਦਰਤਾ ਸੇਵਾਵਾਂ ਦਾ ਅਨੁਭਵ ਕਰੋ। ਮਾਹਰ ਸਟਾਈਲਿਸਟ, ਪ੍ਰੀਮੀਅਮ ਉਤਪਾਦ, ਅਤੇ ਨਿੱਜੀ ਦੇਖਭਾਲ।',
    'ur': settings.description || 'ہمارے پریمیئم سالون میں لگژری بیوٹی سروسز کا تجربہ کریں۔ ماہر اسٹائلسٹ، پریمیئم مصنوعات، اور ذاتی دیکھ بھال۔',
    'ar': settings.description || 'جرب خدمات التجميل الفاخرة في صالوننا المميز. مصففون خبراء، منتجات فاخرة، ورعاية شخصية.'
  }

  return {
    title: titles[language.code] || titles['en'],
    description: descriptions[language.code] || descriptions['en']
  }
}
