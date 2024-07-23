export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const heroProfile = {
  title: "Profile Pic",
  description: "Image for Hero Section",
  email: "rushilayaan@gmail.com",
  img: "/hero.JPG",
  spareImg: "",
  imgClassName:
    "rounded-full lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] mx-auto object-cover",
};

export const gridItems = [
  {
    id: 1,
    title: "My Resume",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-40",
    titleClassName: "justify-end",
    img: "/Ayaan-Siddiqui-Resume-img.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I like to keep up with new technologies used globally",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Cryptocurrency Dashboard in SwiftUI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/crypto.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bitcoin Dashboard",
    des: "Discover this cutting-edge Bitcoin dashboard for real-time insights on hash rate and OLHC prices. Tailor your analysis with ease and stay ahead of the crypto trends. Try it now!",
    img: "/bitcoin.jpeg",
    iconLists: ["/streamlit.png", "/python.png"],
    link: "https://22ayaan-bitcoindashboard-finalapp-k44ptz.streamlitapp.com/",
  },
  {
    id: 2,
    title: "Citizen Satisfaction Survey",
    des: "Engage with over 100 million users on Swacch Bharat Mission's React-based survey and Avatar's secure facial recognition authentication. Experience the future now!",
    img: "/swachh.png",
    iconLists: ["/re.svg", "/js.svg", "/node.svg", "/express.svg"],
    link: "https://xd.adobe.com/view/84a1803c-7cc4-480b-a3a0-bc7b10b6d222-d1f2/screen/9451a33d-b3eb-490b-8047-c5e1ea9e9d54/?fullscreen",
  },
  {
    id: 3,
    title: "Image Classification Model",
    des: "Upload images on the Streamlit platform for accurate flower and jewelry predictions with this advanced machine learning model. Experience the future of AI today!",
    img: "/ml.jpeg",
    iconLists: ["/python.png", "/streamlit.png", "/tf.png"],
    link: "https://github.com/22ayaan/image_ML",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer Intern",
    company: "Tata Consultancy Services",
    location: "Kolkata, India",
    type: "On-site",
    dateStarted: "June 2022",
    dateEnded: "August 2022",
    desc: [
      "Integrated external devices with the local agent node server using their respective SDKs.",
      "Designed multiple React components for the Passport Seva Kendra Portal with over 400 passports printed in 2 cities.",
      "Implemented authentication for the Node.js server using JSON Web Token (JWT).",
      "Secured login credentials by encrypting them with the SHA-512 hashing algorithm using the bCrypt encryption library.",
    ],
    iconLists: [
      "/express.svg",
      "/re.svg",
      "/node.svg",
      "/bcrypt.png",
      "/jwt.svg",
      "/postgre.svg",
      "/js.svg",
      "/ts.svg",
    ],
  },
  {
    id: 4,
    title: "Undergraduate Peer Tutor",
    company: "University of Pittsburgh",
    location: "Pittsburgh, Pennsylvania",
    type: "On-site",
    dateStarted: "January 2024",
    dateEnded: "April 2024",
    desc: [
      "Tutored students in Java programming, enhancing their understanding and skills in object-oriented concepts, data manipulation, and software development.",
      "Guided students in mastering fundamental concepts of algorithms and data structures in Java, ensuring a strong foundation in computational theory and practical problem-solving skills.",
    ],
    iconLists: ["/java.svg"],
  },
  {
    id: 3,
    title: "SWE Intern",
    company: "ForcePower InfoTech",
    location: "Kolkata, India",
    type: "On-site",
    dateStarted: "June 2022",
    dateEnded: "August 2022",
    desc: [
      "Trained an image classification machine learning model to classify flower species and various jewelry artifacts using TensorFlow.",
      "Developed a UI for the image classification model and hosted it on Streamlit.",
      "Contributed to the design and implementation of an automated grocery billing system using image classification models to replace current barcode-reliant billing methods.",
    ],
    iconLists: ["/streamlit.png", "/python.png", "/tf.png"],
  },
  {
    id: 2,
    title: "Fullstack Developer Intern",
    company: "IndicSoft Technologies",
    location: "Noida, India",
    type: "Hybrid",
    dateStarted: "May 2022",
    dateEnded: "August 2022",
    desc: [
      "Developed multiple components in React for the Swachh Bharat Mission survey used by billions of citizens.",
      "Secured authentication using the state-of-the-art tool Avatar, debuted in front of over a million users.",
      "Contributed to the system design and screen layouts of a Carbon Trading project.",
    ],
    iconLists: ["/express.svg", "/re.svg", "/node.svg", "/js.svg", "/ts.svg"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/22ayaan",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/ayaanrushil",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/ayaan-r-siddiqui-473aa4222/",
  },
  {
    id: 4,
    img: "/leet.png",
    url: "https://leetcode.com/u/22ayaan/",
  },
];
