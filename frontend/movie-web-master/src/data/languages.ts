const languages = [
    { "iso_639_1": "ab", "english_name": "Abkhazian", "name": "" },
    { "iso_639_1": "aa", "english_name": "Afar", "name": "" },
    { "iso_639_1": "af", "english_name": "Afrikaans", "name": "Afrikaans" },
    { "iso_639_1": "ak", "english_name": "Akan", "name": "" },
    { "iso_639_1": "sq", "english_name": "Albanian", "name": "shqip" },
    { "iso_639_1": "am", "english_name": "Amharic", "name": "" },
    { "iso_639_1": "ar", "english_name": "Arabic", "name": "العربية" },
    { "iso_639_1": "an", "english_name": "Aragonese", "name": "" },
    { "iso_639_1": "hy", "english_name": "Armenian", "name": "Հայերեն" },
    { "iso_639_1": "as", "english_name": "Assamese", "name": "" },
    { "iso_639_1": "av", "english_name": "Avaric", "name": "" },
    { "iso_639_1": "ae", "english_name": "Avestan", "name": "" },
    { "iso_639_1": "ay", "english_name": "Aymara", "name": "" },
    { "iso_639_1": "az", "english_name": "Azerbaijani", "name": "Azərbaycan" },
    { "iso_639_1": "bm", "english_name": "Bambara", "name": "" },
    { "iso_639_1": "ba", "english_name": "Bashkir", "name": "" },
    { "iso_639_1": "eu", "english_name": "Basque", "name": "euskera" },
    { "iso_639_1": "be", "english_name": "Belarusian", "name": "беларуская мова" },
    { "iso_639_1": "bn", "english_name": "Bengali", "name": "বাংলা" },
    { "iso_639_1": "bh", "english_name": "Bihari", "name": "" },
    { "iso_639_1": "bi", "english_name": "Bislama", "name": "" },
    { "iso_639_1": "bs", "english_name": "Bosnian", "name": "bosanski jezik" },
    { "iso_639_1": "br", "english_name": "Breton", "name": "" },
    { "iso_639_1": "bg", "english_name": "Bulgarian", "name": "български език" },
    { "iso_639_1": "my", "english_name": "Burmese", "name": "" },
    { "iso_639_1": "ca", "english_name": "Catalan", "name": "Català" },
    { "iso_639_1": "km", "english_name": "Khmer", "name": "" },
    { "iso_639_1": "ch", "english_name": "Chamorro", "name": "" },
    { "iso_639_1": "ce", "english_name": "Chechen", "name": "" },
    { "iso_639_1": "ny", "english_name": "Chichewa; Nyanja", "name": "" },
    { "iso_639_1": "zh", "english_name": "Chinese", "name": "中文" },
    { "iso_639_1": "cv", "english_name": "Chuvash", "name": "" },
    { "iso_639_1": "kw", "english_name": "Cornish", "name": "" },
    { "iso_639_1": "co", "english_name": "Corsican", "name": "" },
    { "iso_639_1": "cr", "english_name": "Cree", "name": "" },
    { "iso_639_1": "hr", "english_name": "Croatian", "name": "Hrvatski" },
    { "iso_639_1": "cs", "english_name": "Czech", "name": "česky" },
    { "iso_639_1": "da", "english_name": "Danish", "name": "Dansk" },
    { "iso_639_1": "dv", "english_name": "Divehi", "name": "" },
    { "iso_639_1": "nl", "english_name": "Dutch", "name": "Nederlands" },
    { "iso_639_1": "dz", "english_name": "Dzongkha", "name": "" },
    { "iso_639_1": "en", "english_name": "English", "name": "English" },
    { "iso_639_1": "eo", "english_name": "Esperanto", "name": "Esperanto" },
    { "iso_639_1": "et", "english_name": "Estonian", "name": "Eesti" },
    { "iso_639_1": "ee", "english_name": "Ewe", "name": "" },
    { "iso_639_1": "fo", "english_name": "Faroese", "name": "" },
    { "iso_639_1": "fj", "english_name": "Fijian", "name": "" },
    { "iso_639_1": "fi", "english_name": "Finnish", "name": "suomi" },
    { "iso_639_1": "fr", "english_name": "French", "name": "Français" },
    { "iso_639_1": "ff", "english_name": "Fulah", "name": "" },
    { "iso_639_1": "gl", "english_name": "Galician", "name": "Galego" },
    { "iso_639_1": "ka", "english_name": "Georgian", "name": "ქართული" },
    { "iso_639_1": "de", "english_name": "German", "name": "Deutsch" },
    { "iso_639_1": "el", "english_name": "Greek", "name": "ελληνικά" },
    { "iso_639_1": "gn", "english_name": "Guarani", "name": "" },
    { "iso_639_1": "gu", "english_name": "Gujarati", "name": "ગુજરાતી" },
    { "iso_639_1": "ht", "english_name": "Haitian; Haitian Creole", "name": "" },
    { "iso_639_1": "ha", "english_name": "Hausa", "name": "Hausa" },
    { "iso_639_1": "he", "english_name": "Hebrew", "name": "עִבְרִית" },
    { "iso_639_1": "hz", "english_name": "Herero", "name": "" },
    { "iso_639_1": "hi", "english_name": "Hindi", "name": "हिन्दी" },
    { "iso_639_1": "ho", "english_name": "Hiri Motu", "name": "" },
    { "iso_639_1": "hu", "english_name": "Hungarian", "name": "Magyar" },
    { "iso_639_1": "is", "english_name": "Icelandic", "name": "Íslenska" },
    { "iso_639_1": "io", "english_name": "Ido", "name": "" },
    { "iso_639_1": "ig", "english_name": "Igbo", "name": "" },
    { "iso_639_1": "id", "english_name": "Indonesian", "name": "Bahasa indonesia" },
    { "iso_639_1": "ia", "english_name": "Interlingua", "name": "" },
    { "iso_639_1": "ie", "english_name": "Interlingue", "name": "" },
    { "iso_639_1": "iu", "english_name": "Inuktitut", "name": "" },
    { "iso_639_1": "ik", "english_name": "Inupiaq", "name": "" },
    { "iso_639_1": "ga", "english_name": "Irish", "name": "Gaeilge" },
    { "iso_639_1": "it", "english_name": "Italian", "name": "Italiano" },
    { "iso_639_1": "ja", "english_name": "Japanese", "name": "日本語" },
    { "iso_639_1": "jv", "english_name": "Javanese", "name": "" },
    { "iso_639_1": "kl", "english_name": "Kalaallisut", "name": "" },
    { "iso_639_1": "kn", "english_name": "Kannada", "name": "ಕನ್ನಡ" },
    { "iso_639_1": "kr", "english_name": "Kanuri", "name": "" },
    { "iso_639_1": "ks", "english_name": "Kashmiri", "name": "" },
    { "iso_639_1": "kk", "english_name": "Kazakh", "name": "қазақ" },
    { "iso_639_1": "ki", "english_name": "Kikuyu", "name": "" },
    { "iso_639_1": "rw", "english_name": "Kinyarwanda", "name": "Ikinyarwanda" },
    { "iso_639_1": "ky", "english_name": "Kirghiz", "name": "кыргыз тили" },
    { "iso_639_1": "kv", "english_name": "Komi", "name": "" },
    { "iso_639_1": "kg", "english_name": "Kongo", "name": "" },
    { "iso_639_1": "ko", "english_name": "Korean", "name": "한국어/조선말" },
    { "iso_639_1": "ku", "english_name": "Kurdish", "name": "Kurdî" },
    { "iso_639_1": "kj", "english_name": "Kwanyama", "name": "" },
    { "iso_639_1": "la", "english_name": "Latin", "name": "Latin" },
    { "iso_639_1": "lb", "english_name": "Letzeburgesch", "name": "" },
    { "iso_639_1": "lo", "english_name": "Lao", "name": "" },
    { "iso_639_1": "lt", "english_name": "Lithuanian", "name": "Lietuvių" },
    { "iso_639_1": "lv", "english_name": "Latvian", "name": "Latviešu" },
    { "iso_639_1": "mg", "english_name": "Malagasy", "name": "" },
    { "iso_639_1": "mh", "english_name": "Marshall", "name": "" },
    { "iso_639_1": "mi", "english_name": "Maori", "name": "" },
    { "iso_639_1": "mk", "english_name": "Macedonian", "name": "македонски јазик" },
    { "iso_639_1": "ml", "english_name": "Malayalam", "name": "മലയാളം" },
    { "iso_639_1": "mn", "english_name": "Mongolian", "name": "монгол" },
    { "iso_639_1": "mr", "english_name": "Marathi", "name": "मराठी" },
    { "iso_639_1": "ms", "english_name": "Malay", "name": "Bahasa melayu" },
    { "iso_639_1": "mt", "english_name": "Maltese", "name": "Malti" },
    { "iso_639_1": "nb", "english_name": "Norwegian Bokmål", "name": "Bokmål" },
    { "iso_639_1": "ne", "english_name": "Nepali", "name": "नेपाली" },
    { "iso_639_1": "nl", "english_name": "Dutch", "name": "Nederlands" },
    { "iso_639_1": "nn", "english_name": "Norwegian Nynorsk", "name": "Norsk Nynorsk" },
    { "iso_639_1": "no", "english_name": "Norwegian", "name": "Norsk" },
    { "iso_639_1": "om", "english_name": "Oromo", "name": "" },
    { "iso_639_1": "or", "english_name": "Oriya", "name": "ଓଡ଼ିଆ" },
    { "iso_639_1": "os", "english_name": "Ossetian", "name": "" },
    { "iso_639_1": "pa", "english_name": "Punjabi", "name": "ਪੰਜਾਬੀ" },
    { "iso_639_1": "pi", "english_name": "Pali", "name": "" },
    { "iso_639_1": "pl", "english_name": "Polish", "name": "Polski" },
    { "iso_639_1": "ps", "english_name": "Pushto", "name": "پښتو" },
    { "iso_639_1": "pt", "english_name": "Portuguese", "name": "Português" },
    { "iso_639_1": "qu", "english_name": "Quechua", "name": "" },
    { "iso_639_1": "rm", "english_name": "Raeto-Romance", "name": "" },
    { "iso_639_1": "rn", "english_name": "Kirundi", "name": "" },
    { "iso_639_1": "ro", "english_name": "Romanian", "name": "Română" },
    { "iso_639_1": "ru", "english_name": "Russian", "name": "Pусский" },
    { "iso_639_1": "rw", "english_name": "Kinyarwanda", "name": "Ikinyarwanda" },
    { "iso_639_1": "se", "english_name": "Northern Sami", "name": "" },
    { "iso_639_1": "sg", "english_name": "Sango", "name": "" },
    { "iso_639_1": "si", "english_name": "Sinhalese", "name": "සිංහල" },
    { "iso_639_1": "sk", "english_name": "Slovak", "name": "Slovenčina" },
    { "iso_639_1": "sl", "english_name": "Slovenian", "name": "Slovenščina" },
    { "iso_639_1": "sm", "english_name": "Samoan", "name": "" },
    { "iso_639_1": "sn", "english_name": "Shona", "name": "" },
    { "iso_639_1": "so", "english_name": "Somali", "name": "Soomaali" },
    { "iso_639_1": "sq", "english_name": "Albanian", "name": "shqip" },
    { "iso_639_1": "sr", "english_name": "Serbian", "name": "српски језик" },
    { "iso_639_1": "st", "english_name": "Sotho", "name": "" },
    { "iso_639_1": "su", "english_name": "Sundanese", "name": "" },
    { "iso_639_1": "sv", "english_name": "Swedish", "name": "svenska" },
    { "iso_639_1": "sw", "english_name": "Swahili", "name": "Kiswahili" },
    { "iso_639_1": "ta", "english_name": "Tamil", "name": "தமிழ்" },
    { "iso_639_1": "te", "english_name": "Telugu", "name": "తెలుగు" },
    { "iso_639_1": "tg", "english_name": "Tajik", "name": "" },
    { "iso_639_1": "th", "english_name": "Thai", "name": "ไทย" },
    { "iso_639_1": "ti", "english_name": "Tigrinya", "name": "" },
    { "iso_639_1": "tk", "english_name": "Turkmen", "name": "" },
    { "iso_639_1": "tl", "english_name": "Tagalog", "name": "" },
    { "iso_639_1": "tn", "english_name": "Tswana", "name": "" },
    { "iso_639_1": "to", "english_name": "Tonga", "name": "" },
    { "iso_639_1": "tr", "english_name": "Turkish", "name": "Türkçe" },
    { "iso_639_1": "ts", "english_name": "Tsonga", "name": "" },
    { "iso_639_1": "tt", "english_name": "Tatar", "name": "" },
    { "iso_639_1": "tw", "english_name": "Twi", "name": "" },
    { "iso_639_1": "ty", "english_name": "Tahitian", "name": "" },
    { "iso_639_1": "ug", "english_name": "Uighur", "name": "ئۇيغۇرچە" },
    { "iso_639_1": "uk", "english_name": "Ukrainian", "name": "Український" },
    { "iso_639_1": "ur", "english_name": "Urdu", "name": "اردو" },
    { "iso_639_1": "uz", "english_name": "Uzbek", "name": "ozbek" },
    { "iso_639_1": "ve", "english_name": "Venda", "name": "" },
    { "iso_639_1": "vi", "english_name": "Vietnamese", "name": "Tiếng Việt" },
    { "iso_639_1": "vo", "english_name": "Volapük", "name": "" },
    { "iso_639_1": "wa", "english_name": "Walloon", "name": "" },
    { "iso_639_1": "wo", "english_name": "Wolof", "name": "Wolof" },
    { "iso_639_1": "xh", "english_name": "Xhosa", "name": "" },
    { "iso_639_1": "yi", "english_name": "Yiddish", "name": "ייִדיש" },
    { "iso_639_1": "yo", "english_name": "Yoruba", "name": "Èdè Yorùbá" },
    { "iso_639_1": "za", "english_name": "Zhuang", "name": "" },
    { "iso_639_1": "zh", "english_name": "Chinese", "name": "中文" },
    { "iso_639_1": "zu", "english_name": "Zulu", "name": "isiZulu" }
];
  
  export default languages;
  