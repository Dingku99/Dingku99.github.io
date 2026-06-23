// ===== LANGUAGE TRANSLATIONS =====
const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.thesis': 'Thesis',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': "Hi, I'm",
        'hero.title': 'Research Scholar in NLP | Project Associate | M.Tech CSE',
        'hero.phd': '🔬 Currently pursuing Ph.D in Natural Language Processing',
        'hero.thesisBtn': '📄 View My Thesis',
        'hero.contactBtn': 'Get in Touch',

        // About
        'about.title': 'About Me',
        'about.p1': "<strong>I'm a research scholar with a deep passion for Natural Language Processing (NLP), Medical Image Enhancement, and Wireless Sensor Networks.</strong>",
        'about.p2': 'My journey began with a <strong>B.E. in Computer Science & Engineering (2020)</strong>, where I worked on <strong>Energy Efficiency in Multipath Routing Protocols for Wireless Sensor Networks</strong>. I then completed my <strong>M.Tech in CSE (2022)</strong> with a thesis on <strong>Medical Image Enhancement based on Denoising</strong>.',
        'about.p3': "I've gained practical experience through a <strong>Work Based Learning Internship at NIELIT Imphal</strong> and as a <strong>Project Associate at MTU Manipur</strong> on a DST-funded project 'Smart Health Solutions for Cattles.'",
        'about.p4': "Currently, I'm pursuing my <strong>Ph.D in NLP</strong>, exploring the intersection of language, technology, and real-world applications.",
        'about.p5': '🔬 <strong>Research Interests:</strong> Natural Language Processing, Medical Imaging, Wireless Sensor Networks, Machine Learning, and AI for Social Good.',

        // Education
        'education.title': '🎓 Education',
        'education.phd.title': 'Ph.D in Natural Language Processing',
        'education.phd.date': '2024 – Present',
        'education.phd.desc': 'Currently pursuing doctoral research in NLP.',
        'education.phd.scholar': 'Google Scholar Profile',
        'education.mtech.title': 'M.Tech in Computer Science & Engineering',
        'education.mtech.date': '2020 – 2022',
        'education.mtech.thesisLabel': 'Thesis:',
        'education.mtech.thesis': '"Medical Image Enhancement based on Denoising"',
        'education.mtech.supervisorLabel': 'Supervisor:',
        'education.mtech.supervisor': 'Dr. Th. Ibungomacha Singh, Associate Professor, MIT',
        'education.mtech.desc': 'Focused on improving medical image quality using Wiener filtering and sharpening techniques.',
        'education.be.title': 'B.E. in Computer Science & Engineering',
        'education.be.date': '2016 – 2020',
        'education.be.projectLabel': 'Project:',
        'education.be.project': '"Energy Efficiency in Multipath Routing Protocol on Wireless Sensor Network with Static Sink (HSMRP)"',
        'education.be.supervisorLabel': 'Supervisor:',
        'education.be.supervisor': 'Takhellambam Sonamani Singh, Assistant Professor, MIT',
        'education.be.desc': 'Developed a hop count-based shortest path multipath routing protocol for WSNs.',
        'education.hs.title': 'Higher Secondary (Class XII)',
        'education.hs.date': '2016',
        'education.hs.school': 'Comet School, Changangei Ucheckon, Manipur',
        'education.high.title': 'High School (Class X)',
        'education.high.date': '2014',
        'education.high.school': 'Don Bosco School, Chingmeirong, Manipur',

        // Experience
        'experience.title': '💼 Professional Experience',
        'experience.associate.title': 'Project Associate',
        'experience.associate.org': 'MTU Manipur',
        'experience.associate.date': 'September 2024 – January 2025',
        'experience.associate.projectLabel': 'Project:',
        'experience.associate.project': '"Smart Health Solutions for Cattles"',
        'experience.associate.sponsorLabel': 'Sponsored by:',
        'experience.associate.sponsor': 'Department of Science and Technology (DST) & IIT Bhilai Innovation and Technology Foundation.',
        'experience.associate.desc': 'Developed IoT-based health monitoring solutions for livestock, integrating sensor networks and data analytics for early disease detection.',
        'experience.associate.downloadBtn': 'Download Paper (PDF)',
        'experience.intern.title': 'Intern (Work Based Learning Programme)',
        'experience.intern.org': 'NIELIT Imphal',
        'experience.intern.date': 'September 2023 – February 2024',
        'experience.intern.programLabel': 'Program:',
        'experience.intern.program': 'Work Based Learning Programme',
        'experience.intern.targetLabel': 'Target Group:',
        'experience.intern.target': 'SC, ST, EWS, and Women candidates',
        'experience.intern.desc': 'Acquired hands-on technical skills in emerging technologies to up-skill professional career as per industrial requirements.',

        // Projects
        'projects.title': '📂 Key Research Projects',
        'projects.medical.title': 'Medical Image Enhancement',
        'projects.medical.label': 'M.Tech Thesis',
        'projects.medical.desc': 'Enhanced medical images using Gaussian noise addition, Wiener filtering for denoising, and sharpening techniques. Evaluated using MSE, PSNR, and SNR metrics.',
        'projects.wsn.title': 'HSMRP: WSN Routing Protocol',
        'projects.wsn.label': 'B.E. Project',
        'projects.wsn.desc': 'Proposed a Hop count-based Shortest Multipath Routing Protocol (HSMRP) for Wireless Sensor Networks with static sink. Improved residual energy, live nodes, and packet delivery ratio.',
        'projects.smart.title': 'Smart Health Solutions for Cattles',
        'projects.smart.label': 'DST & IIT Bhilai Funded',
        'projects.smart.desc': 'Designed IoT-based health monitoring system for livestock, enabling early detection of diseases and improving cattle management practices.',
        'projects.nlp.title': 'NLP Research',
        'projects.nlp.label': 'Ph.D Research',
        'projects.nlp.desc': 'Currently exploring natural language processing techniques for analyzing and understanding complex linguistic patterns in regional languages.',
        'projects.viewThesis': '📄 View Thesis',
        'projects.downloadPaper': '📄 Download Paper',
        'projects.googleScholar': '🎓 Google Scholar',

        // Thesis
        'thesis.title': '📄 Thesis & Publications',
        'thesis.subtitle': 'My research work in Wireless Sensor Networks and Medical Image Processing',
        'thesis.mtech.label': 'M.Tech Thesis (2022)',
        'thesis.mtech.title': '"Medical Image Enhancement based on Denoising"',
        'thesis.mtech.supervisorLabel': 'Supervisor:',
        'thesis.mtech.supervisor': 'Dr. Th. Ibungomacha Singh, Associate Professor, MIT',
        'thesis.mtech.institutionLabel': 'Institution:',
        'thesis.mtech.institution': 'Manipur Institute of Technology, Manipur University',
        'thesis.mtech.abstractLabel': 'Abstract:',
        'thesis.mtech.abstract': 'Medical images often suffer from low contrast and noise. This thesis proposes a denoising-based enhancement approach using Gaussian noise addition, Wiener filtering for noise removal, and sharpening techniques. The enhanced images showed significant improvement in quality as measured by MSE, PSNR, and SNR metrics.',
        'thesis.mtech.download': '📄 Download M.Tech Thesis (PDF)',
        'thesis.be.label': 'B.E. Project Thesis (2020)',
        'thesis.be.title': '"Energy Efficiency in Multipath Routing Protocol on Wireless Sensor Network with Static Sink"',
        'thesis.be.supervisorLabel': 'Supervisor:',
        'thesis.be.supervisor': 'Takhellambam Sonamani Singh, Assistant Professor, MIT',
        'thesis.be.institutionLabel': 'Institution:',
        'thesis.be.institution': 'Manipur Institute of Technology, Manipur University',
        'thesis.be.abstractLabel': 'Abstract:',
        'thesis.be.abstract': 'Proposed a Hop count-based Shortest Multipath Routing Protocol (HSMRP) for WSNs with static sink. The protocol discovers multiple shortest paths using hop count, selecting the shortest as primary and the next shortest as alternate. Simulation results showed improved residual energy, more live nodes, and higher packet delivery ratio compared to existing protocols.',
        'thesis.be.download': '📄 Download B.E. Thesis (PDF)',

        // Contact
        'contact.title': '📬 Get in Touch',
        'contact.subtitle': 'Have a question, collaboration idea, or research opportunity? Reach out!',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.sendBtn': 'Send Message',
        'contact.emailLabel': 'Email:',
        'contact.googleScholar': '🎓 Google Scholar',

        // Footer
        'footer.copyright': '© 2026 Dingku Singh Oinam. Hosted on GitHub Pages.',
        'footer.thesis': 'Thesis'
    },
    hi: {
        // Navigation
        'nav.about': 'परिचय',
        'nav.education': 'शिक्षा',
        'nav.experience': 'अनुभव',
        'nav.projects': 'परियोजनाएँ',
        'nav.thesis': 'शोध',
        'nav.contact': 'संपर्क',

        // Hero
        'hero.greeting': 'नमस्ते, मैं हूँ',
        'hero.title': 'एनएलपी में शोधार्थी | परियोजना सहयोगी | एम.टेक सीएसई',
        'hero.phd': '🔬 वर्तमान में प्राकृतिक भाषा प्रसंस्करण में पीएचडी कर रहे हैं',
        'hero.thesisBtn': '📄 मेरा शोध देखें',
        'hero.contactBtn': 'संपर्क करें',

        // About
        'about.title': 'मेरे बारे में',
        'about.p1': "<strong>मैं एक शोधार्थी हूँ जिसे प्राकृतिक भाषा प्रसंस्करण (NLP), चिकित्सा छवि संवर्धन, और वायरलेस सेंसर नेटवर्क में गहरी रुचि है।</strong>",
        'about.p2': 'मेरी यात्रा <strong>कंप्यूटर विज्ञान और इंजीनियरिंग में B.E. (2020)</strong> से शुरू हुई, जहाँ मैंने <strong>वायरलेस सेंसर नेटवर्क के लिए मल्टीपाथ रूटिंग प्रोटोकॉल में ऊर्जा दक्षता</strong> पर काम किया। फिर मैंने <strong>CSE में M.Tech (2022)</strong> पूरा किया जिसका विषय <strong>डीनॉइज़िंग पर आधारित चिकित्सा छवि संवर्धन</strong> था।',
        'about.p3': 'मैंने <strong>NIELIT Imphal में वर्क बेस्ड लर्निंग इंटर्नशिप</strong> और <strong>MTU Manipur में परियोजना सहयोगी</strong> के रूप में व्यावहारिक अनुभव प्राप्त किया है, जो DST-वित्त पोषित परियोजना "Smart Health Solutions for Cattles" पर काम कर रहा था।',
        'about.p4': 'वर्तमान में, मैं <strong>NLP में अपना पीएचडी</strong> कर रहा हूँ, जिसमें भाषा, प्रौद्योगिकी और वास्तविक-विश्व अनुप्रयोगों के अंतर्संबंध की खोज कर रहा हूँ।',
        'about.p5': '🔬 <strong>शोध रुचियाँ:</strong> प्राकृतिक भाषा प्रसंस्करण, चिकित्सा इमेजिंग, वायरलेस सेंसर नेटवर्क, मशीन लर्निंग, और सामाजिक भलाई के लिए AI।',

        // Education
        'education.title': '🎓 शिक्षा',
        'education.phd.title': 'प्राकृतिक भाषा प्रसंस्करण में पीएचडी',
        'education.phd.date': '2024 – वर्तमान',
        'education.phd.desc': 'वर्तमान में NLP में डॉक्टरेट शोध कर रहे हैं।',
        'education.phd.scholar': 'गूगल स्कॉलर प्रोफ़ाइल',
        'education.mtech.title': 'कंप्यूटर विज्ञान और इंजीनियरिंग में एम.टेक',
        'education.mtech.date': '2020 – 2022',
        'education.mtech.thesisLabel': 'शोध प्रबंध:',
        'education.mtech.thesis': '"डीनॉइज़िंग पर आधारित चिकित्सा छवि संवर्धन"',
        'education.mtech.supervisorLabel': 'पर्यवेक्षक:',
        'education.mtech.supervisor': 'डॉ. थ. इबुंगोमचा सिंह, एसोसिएट प्रोफेसर, MIT',
        'education.mtech.desc': 'वीनर फ़िल्टरिंग और शार्पनिंग तकनीकों का उपयोग करके चिकित्सा छवि गुणवत्ता में सुधार पर केंद्रित।',
        'education.be.title': 'कंप्यूटर विज्ञान और इंजीनियरिंग में B.E.',
        'education.be.date': '2016 – 2020',
        'education.be.projectLabel': 'परियोजना:',
        'education.be.project': '"स्थिर सिंक के साथ वायरलेस सेंसर नेटवर्क पर मल्टीपाथ रूटिंग प्रोटोकॉल में ऊर्जा दक्षता (HSMRP)"',
        'education.be.supervisorLabel': 'पर्यवेक्षक:',
        'education.be.supervisor': 'तखेल्लाम्बम सोनमानी सिंह, सहायक प्रोफेसर, MIT',
        'education.be.desc': 'WSN के लिए हॉप काउंट-आधारित सबसे छोटा पथ मल्टीपाथ रूटिंग प्रोटोकॉल विकसित किया।',
        'education.hs.title': 'उच्च माध्यमिक (कक्षा XII)',
        'education.hs.date': '2016',
        'education.hs.school': 'कॉमेट स्कूल, चंगांगेई उचेकॉन, मणिपुर',
        'education.high.title': 'उच्च विद्यालय (कक्षा X)',
        'education.high.date': '2014',
        'education.high.school': 'डॉन बॉस्को स्कूल, चिंगमेइरॉन्ग, मणिपुर',

        // Experience
        'experience.title': '💼 व्यावसायिक अनुभव',
        'experience.associate.title': 'परियोजना सहयोगी',
        'experience.associate.org': 'MTU मणिपुर',
        'experience.associate.date': 'सितंबर 2024 – जनवरी 2025',
        'experience.associate.projectLabel': 'परियोजना:',
        'experience.associate.project': '"Smart Health Solutions for Cattles"',
        'experience.associate.sponsorLabel': 'प्रायोजक:',
        'experience.associate.sponsor': 'विज्ञान और प्रौद्योगिकी विभाग (DST) और IIT भिलाई इनोवेशन एंड टेक्नोलॉजी फाउंडेशन।',
        'experience.associate.desc': 'पशुओं के लिए IoT-आधारित स्वास्थ्य निगरानी समाधान विकसित किए, जिसमें प्रारंभिक रोग पहचान के लिए सेंसर नेटवर्क और डेटा एनालिटिक्स को एकीकृत किया गया।',
        'experience.associate.downloadBtn': 'पेपर डाउनलोड करें (PDF)',
        'experience.intern.title': 'इंटर्न (वर्क बेस्ड लर्निंग प्रोग्राम)',
        'experience.intern.org': 'NIELIT इंफाल',
        'experience.intern.date': 'सितंबर 2023 – फरवरी 2024',
        'experience.intern.programLabel': 'कार्यक्रम:',
        'experience.intern.program': 'वर्क बेस्ड लर्निंग प्रोग्राम',
        'experience.intern.targetLabel': 'लक्ष्य समूह:',
        'experience.intern.target': 'SC, ST, EWS, और महिला उम्मीदवार',
        'experience.intern.desc': 'उभरती प्रौद्योगिकियों में व्यावहारिक तकनीकी कौशल हासिल किया ताकि औद्योगिक आवश्यकताओं के अनुसार पेशेवर करियर को उन्नत किया जा सके।',

        // Projects
        'projects.title': '📂 प्रमुख शोध परियोजनाएँ',
        'projects.medical.title': 'चिकित्सा छवि संवर्धन',
        'projects.medical.label': 'एम.टेक शोध प्रबंध',
        'projects.medical.desc': 'गाऊसी शोर जोड़, डीनॉइज़िंग के लिए वीनर फ़िल्टरिंग, और शार्पनिंग तकनीकों का उपयोग करके चिकित्सा छवियों को संवर्धित किया। MSE, PSNR, और SNR मेट्रिक्स का उपयोग करके मूल्यांकन किया गया।',
        'projects.wsn.title': 'HSMRP: WSN रूटिंग प्रोटोकॉल',
        'projects.wsn.label': 'B.E. परियोजना',
        'projects.wsn.desc': 'स्थिर सिंक के साथ वायरलेस सेंसर नेटवर्क के लिए हॉप काउंट-आधारित सबसे छोटा पथ मल्टीपाथ रूटिंग प्रोटोकॉल (HSMRP) प्रस्तावित किया। अवशिष्ट ऊर्जा, जीवित नोड्स, और पैकेट वितरण अनुपात में सुधार किया।',
        'projects.smart.title': 'Smart Health Solutions for Cattles',
        'projects.smart.label': 'DST और IIT भिलाई द्वारा वित्त पोषित',
        'projects.smart.desc': 'पशुओं के लिए IoT-आधारित स्वास्थ्य निगरानी प्रणाली डिज़ाइन की, जिससे बीमारियों का शीघ्र पता लगाया जा सके और पशु प्रबंधन प्रथाओं में सुधार हो सके।',
        'projects.nlp.title': 'NLP अनुसंधान',
        'projects.nlp.label': 'पीएचडी अनुसंधान',
        'projects.nlp.desc': 'वर्तमान में क्षेत्रीय भाषाओं में जटिल भाषाई पैटर्न का विश्लेषण और समझने के लिए प्राकृतिक भाषा प्रसंस्करण तकनीकों की खोज कर रहे हैं।',
        'projects.viewThesis': '📄 शोध देखें',
        'projects.downloadPaper': '📄 पेपर डाउनलोड करें',
        'projects.googleScholar': '🎓 गूगल स्कॉलर',

        // Thesis
        'thesis.title': '📄 शोध प्रबंध और प्रकाशन',
        'thesis.subtitle': 'वायरलेस सेंसर नेटवर्क और चिकित्सा छवि प्रसंस्करण में मेरा शोध कार्य',
        'thesis.mtech.label': 'एम.टेक शोध प्रबंध (2022)',
        'thesis.mtech.title': '"डीनॉइज़िंग पर आधारित चिकित्सा छवि संवर्धन"',
        'thesis.mtech.supervisorLabel': 'पर्यवेक्षक:',
        'thesis.mtech.supervisor': 'डॉ. थ. इबुंगोमचा सिंह, एसोसिएट प्रोफेसर, MIT',
        'thesis.mtech.institutionLabel': 'संस्थान:',
        'thesis.mtech.institution': 'मणिपुर इंस्टिट्यूट ऑफ टेक्नोलॉजी, मणिपुर विश्वविद्यालय',
        'thesis.mtech.abstractLabel': 'सारांश:',
        'thesis.mtech.abstract': 'चिकित्सा छवियाँ अक्सर कम कंट्रास्ट और शोर से ग्रस्त होती हैं। यह शोध प्रबंध गाऊसी शोर जोड़, शोर हटाने के लिए वीनर फ़िल्टरिंग, और शार्पनिंग तकनीकों का उपयोग करके डीनॉइज़िंग-आधारित संवर्धन दृष्टिकोण प्रस्तावित करता है। MSE, PSNR, और SNR मेट्रिक्स द्वारा मापे गए अनुसार संवर्धित छवियों ने गुणवत्ता में महत्वपूर्ण सुधार दिखाया।',
        'thesis.mtech.download': '📄 एम.टेक शोध प्रबंध डाउनलोड करें (PDF)',
        'thesis.be.label': 'B.E. परियोजना शोध प्रबंध (2020)',
        'thesis.be.title': '"स्थिर सिंक के साथ वायरलेस सेंसर नेटवर्क पर मल्टीपाथ रूटिंग प्रोटोकॉल में ऊर्जा दक्षता"',
        'thesis.be.supervisorLabel': 'पर्यवेक्षक:',
        'thesis.be.supervisor': 'तखेल्लाम्बम सोनमानी सिंह, सहायक प्रोफेसर, MIT',
        'thesis.be.institutionLabel': 'संस्थान:',
        'thesis.be.institution': 'मणिपुर इंस्टिट्यूट ऑफ टेक्नोलॉजी, मणिपुर विश्वविद्यालय',
        'thesis.be.abstractLabel': 'सारांश:',
        'thesis.be.abstract': 'स्थिर सिंक के साथ WSN के लिए हॉप काउंट-आधारित सबसे छोटा पथ मल्टीपाथ रूटिंग प्रोटोकॉल (HSMRP) प्रस्तावित किया। प्रोटोकॉल हॉप काउंट का उपयोग करके कई सबसे छोटे पथों की खोज करता है, सबसे छोटे को प्राथमिक और अगले सबसे छोटे को वैकल्पिक के रूप में चुनता है। सिमुलेशन परिणामों ने मौजूदा प्रोटोकॉल की तुलना में बेहतर अवशिष्ट ऊर्जा, अधिक जीवित नोड्स, और उच्च पैकेट वितरण अनुपात दिखाया।',
        'thesis.be.download': '📄 B.E. शोध प्रबंध डाउनलोड करें (PDF)',

        // Contact
        'contact.title': '📬 संपर्क करें',
        'contact.subtitle': 'कोई प्रश्न, सहयोग विचार, या शोध अवसर? संपर्क करें!',
        'contact.name': 'नाम',
        'contact.email': 'ईमेल',
        'contact.message': 'संदेश',
        'contact.sendBtn': 'संदेश भेजें',
        'contact.emailLabel': 'ईमेल:',
        'contact.googleScholar': '🎓 गूगल स्कॉलर',

        // Footer
        'footer.copyright': '© 2026 दिंगकु सिंह ओइनाम। GitHub Pages पर होस्ट किया गया।',
        'footer.thesis': 'शोध'
    }
};

// ===== LANGUAGE SWITCHER =====
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang]?.[key];
        if (translation !== undefined) {
            // Preserve HTML content if the translation contains HTML
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Store preference
    localStorage.setItem('preferred-language', lang);
}

// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== LANGUAGE SWITCHER EVENT LISTENERS =====
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// ===== CONTACT FORM =====
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = document.getElementById('name').value.trim();

        formStatus.textContent = '⏳ Sending...';
        formStatus.style.color = '#4A90D9';

        try {
            const response = await fetch('https://formspree.io/f/xjgqvkqo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                const successMsg = currentLang === 'hi'
                    ? '✅ धन्यवाद ' + name + '! आपका संदेश सफलतापूर्वक भेज दिया गया है।'
                    : '✅ Thanks ' + name + '! Your message was sent successfully.';
                formStatus.textContent = successMsg;
                formStatus.style.color = '#50C878';
                form.reset();
            } else {
                const errorMsg = currentLang === 'hi'
                    ? '❌ कुछ गड़बड़ हो गई। कृपया बाद में पुनः प्रयास करें।'
                    : '❌ Oops! Something went wrong. Please try again later.';
                formStatus.textContent = errorMsg;
                formStatus.style.color = '#FF6B6B';
            }
        } catch (error) {
            const errorMsg = currentLang === 'hi'
                ? '❌ नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें।'
                : '❌ Network error. Please check your connection.';
            formStatus.textContent = errorMsg;
            formStatus.style.color = '#FF6B6B';
        }
    });
}

// ===== DYNAMIC YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', year);
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        // Default to English
        setLanguage('en');
    }
});

console.log('🚀 Website loaded successfully!');
