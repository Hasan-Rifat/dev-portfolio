import React from "react";

type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  const works = [
    {
      id: 1,
      url: "https://moon-ecommerce-part-2-client.vercel.app/",
      title: "Moon Tech",
      clientCode: "https://github.com/Hasan-Rifat/moon-ecommerce-part-2-client",
      description: "",
      categories: ["commerce", "shopping-cart", "shop", "e-commerce", "cart"],
      technology: [
        "react",
        "redux",
        "react-redux",
        "redux-thunk",
        "react-router-dom",
        "tailwindcss",
        "react-hook-form",
        "cors",
        "dotenv",
        "express",
        "mongodb",
        "nodejs",
      ],
      descriptions: " commerce website using react and redux and tailwind css",
      serverCode: "https://github.com/Hasan-Rifat/moon-ecommerce-part-2-server",
      fullStack: true,
      update: false,
    },
    {
      id: 2,
      url: "https://book-store-application.vercel.app/",
      title: "Book List",
      clientCode: "https://github.com/Hasan-Rifat/book-store-application",
      description: "",
      categories: ["booking", "book", "book-list", "book-store"],
      technology: [
        "react",
        " react-redux",
        "redux-thunk",
        "uuid",
        "tailwindcss",
      ],
      descriptions:
        " book list application using react and redux and tailwind css",
      serverCode: "",
      update: true,
      fullStack: false,
    },
    {
      id: 3,
      url: "https://product-cart-appication.vercel.app/",
      title: "add Product",
      clientCode: "https://github.com/Hasan-Rifat/Product-Cart-Appication",
      description: "",
      categories: [
        "add-product",
        "product",
        "product-cart",
        "product-list",
        "cart",
      ],
      technology: ["react", "redux", "uuid", "react-redux", "tailwindcss"],
      descriptions:
        " add product and delete product and update product and search product and filter product and pagination and sort product and add to cart and delete from cart and checkout and payment gateway and order history and order details and a lot of features",
      serverCode: "",
      update: true,
      fullStack: false,
    },
    {
      id: 4,
      url: "https://real-estate-hr.vercel.app/",
      title: "Real Estate",
      clientCode: "https://github.com/Hasan-Rifat/real-estate",
      description: "",
      categories: [
        "real estate business",
        "real estate agent",
        "real estate investment",
        "real estate websites",
        "domain real estate",
        "real estate for sale",
        "real estate industry",
      ],
      technology: [
        "react",
        "redux",
        "nodejs",
        "javascript",
        "typescript",
        "html5",
        "mongodb",
        "css3",
        "mongoose",
        "nextjs",
        "expressjs",
        "tailwind",
        "tailwindcss",
        "redux-toolkit",
        "vercel",
        "redux-toolkit-query",
        "bcryptjs",
        "cors",
        "dotenv",
        "express",
        "jsonwebtoken",
        "mongodb",
        "mongoose",
        "nodemon",
        "stripe",
        "Node.js",
      ],
      descriptions:
        " real estate website using react and redux and tailwind css features is login and logout and add property and delete property and update property and search property and filter property and pagination and sort property and add to cart and delete from cart and checkout and payment gateway and order history and order details and admin panel and admin can add property and delete property and update property and admin can see all order and admin can change order status and admin can see all user and admin can delete user and admin can see all property and admin can delete property and admin can see all review and admin can delete review and admin can see all message and admin can delete message and admin can see all booking and admin can delete booking and admin can see all payment and admin can delete payment and a lot of features",
      serverCode: "https://github.com/Hasan-Rifat/real-estate-server",
      update: true,
      fullStack: true,
    },
    {
      id: 5,
      url: "https://flight-booking-application-hr.vercel.app/",
      title: "Flight Booking",
      clientCode:
        "https://github.com/Hasan-Rifat/flight-booking-application-react",
      description: "",
      categories: [
        "flight",
        "booking",
        "flight-booking",
        "flight-list",
        "flight-cart",
      ],
      technology: ["Redux", "React", "React-Redux", "Tailwind"],
      descriptions:
        "flight booking application using react and redux and tailwind css ",
      serverCode: "",
      update: true,
      fullStack: false,
    },
    {
      id: 6,
      url: "https://banking-website.vercel.app/",
      title: "banking website",
      clientCode: "https://github.com/Hasan-Rifat/banking-website",
      description: "",
      categories: ["banking", "banking website", "banking website"],
      technology: ["Html", "Css", "Javascript"],
      descriptions: "banking website using html css and javascript",
      serverCode: "",
      update: true,
      fullStack: false,
    },
    {
      id: 7,
      url: "https://jobbox-client-hr.vercel.app/",
      title: "Job Box",
      clientCode: "https://github.com/Hasan-Rifat/jobbox-client",
      description:
        "A job portal is an online platform that connects job seekers with potential employers. To make the job search process easier, job portals offer a range of features such as advanced search filters, job search functionality, and job alerts and notifications. For employers, job portals provide tools such as applicant management, interview scheduling, and data analytics and reporting. Other features of job portals include career advice and resources for job seekers, company reviews and ratings, and employer branding opportunities. Mobile optimization, integration with social media, and video interviews are also becoming increasingly important features of modern job portals.",
      categories: [
        "Accounting/Finance",
        "Admin/Human Resources",
        "Arts/Media/Communications",
        "Building/Construction",
        "Computer/Information Technology",
        "Education/Training",
        "Engineering",
        "Healthcare",
        "Hospitality/Restaurant",
        "Manufacturing/Production",
        "Sales/Marketing",
        "Science/Technology",
        "Transportation/Logistics",
        "Others",
      ],
      technology: [
        "React",
        "Redux",
        "React-redux",
        "React-hook-form",
        "React-hot-toast",
        "react-icons",
        "firebase",
        "gsap",
        "tailwindcss",
      ],
      descriptions: "",
      serverCode: "https://github.com/Hasan-Rifat/jobbox-server",
      update: true,
    },
    {
      id: 8,
      url: "https://react-landing-page-ruby.vercel.app/",
      title: "Landing Page",
      clientCode: "https://github.com/Hasan-Rifat/FAFC-landing-page",
      description:
        "An NFT landing page is a web page designed to promote and showcase a specific collection of non-fungible tokens (NFTs). NFTs are unique digital assets stored on a blockchain, and landing pages for NFT collections typically provide detailed information about the collection, including its theme, number of tokens available, and any exclusive benefits for token holders. The landing page may feature images or videos of the NFTs, as well as information on the artist or creator of the collection. It may also provide a platform for purchasing the NFTs, as well as information on how to trade or resell them. The goal of an NFT landing page is to generate interest and excitement in the collection, as well as to attract potential buyers and collectors.",
      categories: ["Landing Page", "NFT", "NFT Landing Page"],
      technology: [
        "React",
        "react-icon",
        "react-bootstrap",
        "Bootstrap",
        "cors",
        "dotenv",
        "express",
        "mongodb",
        "mongoose",
        "nodemon",
        "stripe",
        "Node.js",
      ],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 9,
      url: "https://electronic-tools-client.vercel.app/",
      title: "electronic tools",
      clientCode:
        "https://github.com/Hasan-Rifat/manufacturer-website-client-side",
      description:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["tools", "electronic tools", "manufacturer, eCommerces"],
      technology: [
        "daisyui",
        "firebase",
        "react",
        "react-firebase-hooks",
        "react-hook-form",
        "react-icons",
        "react-query",
        "react-router-dom",
        "react-toastify",
        "tailwindcss",
        "cors",
        "dotenv",
        "express",
        "mongodb",
      ],
      serverCode: "https://github.com/Hasan-Rifat/manufacturer-website-server",
      update: true,
      fullStack: true,
    },
    {
      id: 10,
      url: "https://warehouse-management-app.netlify.app/",
      title: "warehouse management",
      clientCode:
        "https://github.com/Hasan-Rifat/warehouse-management-client-side",
      description:
        "This website is a powerful car inventory management system that allows you to add, update, and remove products with ease. Whether you are managing a small or large inventory, this website makes it simple to keep track of all your products in one place. You can easily add new products to your inventory and update them as needed, ensuring that your records are always accurate and up-to-date. With the ability to remove products that are no longer available, you can keep your inventory organized and avoid confusion. And with the 'My Items 'feature, you can easily see how many products you have added, helping you keep track of your inventory levels and make informed business decisions.",
      categories: [
        "New Cars",
        "Used Cars",
        "Trucks",
        "SUVs",
        "Vans",
        "Motorcycles",
        "Boats",
        "Classic Cars",
        "Exotic Cars",
        "Luxury Cars",
        "Sports Cars",
        "Electric Cars",
        "Hybrid Cars",
        "Compact Cars",
        "Midsize Cars",
        "Full-Size Cars",
        "Convertibles",
        "Coupes",
        "Sedans",
        "Hatchbacks",
        "Wagons",
        "Commercial Vehicles",
      ],
      technology: [
        "axios",
        "bootstrap",
        "firebase",
        "react",
        "react-bootstrap",
        "react-firebase-hooks",
        "react-router-dom",
        "cors",
        "dotenv",
        "express",
        "mongodb",
      ],
      serverCode: "https://github.com/Hasan-Rifat/warehouse-management-server",
      update: true,
    },
    {
      id: 11,
      url: "https://javascript-bank-list.vercel.app/",
      title: "Bank List",
      clientCode: "https://github.com/Hasan-Rifat/javascript-bank-list",
      description: "bank list with javascript",
      categories: ["bank list", "javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      fullStack: false,
      update: false,
    },
    {
      id: 12,
      url: "https://javascript-pig-game-tawny.vercel.app/",
      title: "Javascript Pig game",
      clientCode: "https://github.com/Hasan-Rifat/javascript-pig-game",
      description: "Javascript Pig game",
      categories: ["bank list", "javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
    },
    {
      id: 13,
      url: "https://javascript-modal-snowy.vercel.app/",
      title: "Javascript Modal",
      clientCode: "https://github.com/Hasan-Rifat/javascript-modal",
      description: "Javascript Modal",
      categories: ["Javascript", "Modal"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 14,
      url: "https://guess-my-number-game-ten.vercel.app/",
      title: "Javascript Game Gush my number",
      clientCode: "https://github.com/Hasan-Rifat/Guess-My-Number-game",
      description: "javascript game",
      categories: ["Javascript", "Game"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 15,
      url: "https://landinge-page-ins.vercel.app/",
      title: "Simple Landing page",
      clientCode: "https://github.com/Hasan-Rifat/landinge-page-ins",
      description: "",
      categories: ["landing page", "simple"],
      technology: ["HTML", "CSS", "Javascript", "tailwindcss", "next js"],
      descriptions: ["Landing page with next js"],
      serverCode: "",
      update: true,
      fullStack: false,
    },
    {
      id: 16,
      url: "https://creative-agancy.vercel.app/",
      title: "creative agency",
      clientCode: "https://github.com/Hasan-Rifat/creative-agancy",
      description:
        "As a creative agency, we offer a range of services that can help bring your brand to life. Whether you need web and mobile design, graphic design, or web development, we have the expertise to help you achieve your goals. Our team of skilled designers and developers work closely with you to understand your unique needs and create custom solutions that are tailored to your brand. From creating a beautiful and user-friendly website, to designing eye-catching graphics that grab your audience's attention, we take pride in delivering high-quality work that exceeds expectations. We are passionate about design and development and strive to stay up-to-date with the latest trends and technologies. Whether you are looking to launch a new website, rebrand your company, or create a mobile app, we are here to help you every step of the way. Get in touch with us today to learn more about how we can help bring your vision to life.",
      categories: [
        "Design Services",
        "Web & Mobile Design",
        "Graphic Design",
        "Development Services",
        "Web Development",
      ],
      technology: [
        "aos",
        "axios",
        "daisyui",
        "firebase",
        "react",
        "react-firebase-hooks",
        "react-icons",
        "swiper",
        "tailwindcss",
      ],
      serverCode: "https://github.com/Hasan-Rifat/creative-agancy-server",
      update: false,
      fullStack: true,
    },
    {
      id: 17,
      url: "https://independent-service-provider.vercel.app/",
      title: "Course website",
      clientCode: "https://github.com/Hasan-Rifat/independent-service-provider",
      description:
        "Our course website offers a wide range of online courses, utilizing the latest in e-learning technology to provide students with a flexible and convenient learning experience. Our platform provides easy access to our course catalog, allowing students to browse courses by topic and level, and enroll in courses that interest them. Our Course Management System allows students to keep track of their progress, view course schedules and deadlines, and access course materials, including video lectures and homework assignments. The Student Dashboard provides a centralized location for students to manage their coursework and stay on track with their studies. Our Learning Management System (LMS) offers instructors a powerful set of tools for managing and delivering course content, including the ability to create course materials, track student progress, and provide feedback and grades. Instructor profiles allow students to learn more about their instructors and their expertise. Our platform offers a range of features to support student engagement and collaboration, including discussion forums and group projects. We are committed to providing a supportive and engaging learning environment for all of our students, and strive to deliver a high-quality education that is accessible to all. Whether you are looking to advance your career, pursue a new hobby, or simply learn something new, our online courses provide the flexibility and convenience you need to achieve your goals. Join our community of learners today and discover the power of online education!",
      categories: [
        "Online Learning",
        "E-Learning",
        "Distance Education",
        "Course Catalog",
        "Course Management System",
        "Student Dashboard",
        "Learning Management System (LMS)",
        "Online Courses",
        "Course Schedule",
        "Enrollment",
        "Instructor Profiles",
        "Student Progress Tracking",
        "Video Lectures",
        "Homework Assignments",
        "Discussion Forums",
      ],
      technology: [
        "bootstrap",
        "firebase",
        "react",
        "react-bootstrap",
        "react-firebase-hooks",
        "react-router-dom",
        "react-toastify",
        "tailwindcss",
      ],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 18,
      url: "https://product-analysis-website-two.vercel.app/",
      title: "product-analysis-",
      clientCode: "https://github.com/Hasan-Rifat/product-analysis-website",
      description: "",
      categories: ["Landing page", "simple", "watch"],
      technology: ["react", "react-router-dom", "tailwindcss", "recharts"],
      descriptions:
        "Welcome to our watch landing page, where you will find a wide selection of high-quality watches to suit your style and needs.Our collection includes watches from top brands, carefully curated to offer you the best in style and function. From classic timepieces to modern designs, we have a watch for every taste and occasion.Our watches are made with the finest materials and precision engineering, ensuring reliable performance and long-lasting durability. Whether you are looking for a watch to wear every day or a special occasion, we have the perfect option for you. Our website is designed with you in mind, making it easy to browse our collection and find the perfect watch for you. We offer a range of features to help you make an informed decision, including detailed product descriptions, high-quality images, and customer reviews. Our secure checkout process ensures that your purchase is safe and easy, and our customer support team is always here to help with any questions or concerns. At our watch landing page, we are committed to offering the best in quality, style, and customer service. Browse our collection today and find the perfect watch for you!",
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 19,
      url: "https://insta-shohor-silk.vercel.app/",
      title: "inista short",
      clientCode: "https://github.com/Hasan-Rifat/-insta-shohor",
      description: "javascript",
      categories: ["javascript"],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 20,
      url: "https://phone-hunter-nine.vercel.app/",
      title: "phone hunter",
      clientCode: "https://github.com/Hasan-Rifat/-phone-hunter",
      description:
        "Welcome to our latest mobile phones page, where you will find a comprehensive selection of the newest and most advanced smartphones on the market. Our collection includes the latest models from top brands, including Apple, Samsung, Google, and more. Each phone is carefully selected for its cutting-edge features, including high-quality cameras, fast processors, and long-lasting batteries. Our website is designed to make it easy for you to find the perfect phone for your needs, with features like detailed product descriptions, high-quality images, and customer reviews. We also offer a range of accessories to enhance your phone's performance and protect it from damage. Our secure checkout process ensures that your purchase is safe and easy, and our customer support team is always available to help with any questions or concerns. Whether you are looking for a phone with the latest technology or a budget-friendly option, we have something for everyone. At our latest mobile phones page, we are committed to offering the best in quality, selection, and customer service. Browse our collection today and find the perfect phone for you!",
      categories: [
        "Brand",
        "Operating System",
        "Features",
        "Price Range",
        "Camera Quality",
        "Battery Life",
      ],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 21,
      url: "https://money-master-five-green.vercel.app/",
      title: "phone hunter",
      clientCode: "https://github.com/Hasan-Rifat/money-master",
      description: ["Monthly expenses", "Monthly income", "Total balance"],
      categories: ["Monthly expenses", "Monthly income", "Total balance"],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      fullStack: false,
      update: false,
    },
    {
      id: 22,
      url: "https://convention-center-seven.vercel.app/",
      title: "convention center",
      clientCode: "https://github.com/Hasan-Rifat/-convention-center",
      description:
        "Welcome to our convention center booking page, where you can book a venue for your next event.Our convention center offers a variety of flexible spaces that can accommodate events of all sizes, from small meetings to large conferences and exhibitions. Our state-of-the-art facilities are equipped with the latest technology and amenities to ensure your event is a success.Our experienced event planning team is available to help you every step of the way, from choosing the right space to coordinating catering and audio-visual services. We are committed to making your event a seamless and unforgettable experience.Our website is designed to make it easy for you to find the perfect space for your event. You can browse our venues, view detailed floor plans, and check availability online. Our online booking system is simple and secure, ensuring that your reservation is confirmed quickly and easily. We also offer a range of customizable event packages to suit your needs and budget. Whether you are planning a business conference, trade show, or social event, we have the perfect package for you. At our convention center, we are committed to providing the best in service, technology, and amenities. Contact us today to book your next event at our state-of-the-art facility.",
      categories: ["Landing Page", "convention center"],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 23,
      url: "https://doctors-portal-2f74a.web.app/",
      title: "convention center",
      clientCode: "https://github.com/Hasan-Rifat/doctors-protal-clinent",
      description:
        "Welcome to our online doctor appointment booking page, where you can easily schedule an appointment with a medical professional of your choice. Our platform offers a comprehensive list of doctors and medical professionals in various fields, from general practitioners to specialists. You can easily search for doctors by location, specialty, and availability, making it easy to find the right doctor for your needs. Our online booking system is user-friendly and secure, ensuring that your personal information is safe and your appointment is confirmed quickly and easily. You can choose a time and date that works for you, and receive confirmation of your appointment via email or text message. Our doctors are experienced professionals who are dedicated to providing the best possible care for their patients. They use the latest medical technology and techniques to provide accurate diagnoses and effective treatments. In addition to booking appointments, our platform also offers other features to help you manage your healthcare needs. You can access your medical records, view test results, and communicate with your doctor through secure messaging. At our online doctor appointment booking platform, we are committed to making healthcare more accessible and convenient for everyone. Book your next appointment today and experience the ease and convenience of our platform.",
      categories: [
        "Medical Specialties",
        "Location",
        "Doctor Ratings",
        "Availability",
        "Insurance Accepted",
        "Virtual Appointments",
        "Languages Spoken",
        "Gender",
        "Years of Experience",
      ],
      technology: [
        "react",
        "react-router-dom",
        "tailwindcss",
        "react-hook-form",
        "cors",
        "dotenv",
        "express",
        "mongodb",
        "nodejs",
      ],
      serverCode: "https://github.com/Hasan-Rifat/doctors-protal-server",
      update: false,
      fullStack: true,
    },
    {
      id: 24,
      url: "https://genius-car-services-bdea5.web.app/",
      title: "genius car service",
      clientCode: "https://github.com/Hasan-Rifat/genius-car-service",
      description:
        "Engine and Transmission Repair involves repairing or replacing engine and transmission components, including tune-ups, oil changes, engine rebuilding, and transmission repair. Electrical System Repair involves repairing or replacing the electrical components of the car, including battery replacement, alternator repair, and wiring repair. Brake System Repair involves repairing or replacing brake system components, including brake pads, rotors, calipers, and brake lines. Suspension and Steering Repair involves repairing or replacing suspension and steering components, including shocks, struts, ball joints, tie rods, and steering racks. Cooling System Repair involves repairing or replacing cooling system components, including the radiator, water pump, thermostat, and hoses. Exhaust System Repair involves repairing or replacing exhaust system components, including the muffler, catalytic converter, and exhaust pipes. Fuel System Repair involves repairing or replacing fuel system components, including the fuel pump, fuel filter, and fuel injectors. Air Conditioning Repair involves repairing or replacing air conditioning system components, including the compressor, evaporator, and condenser. Wheel Alignment and Balancing involves adjusting the alignment and balancing of the wheels to ensure proper handling and reduce tire wear. Body and Paint Repair involves repairing or replacing the body and paint of the car, including dent repair, scratch repair, and repainting. Interior Repair involves repairing or replacing interior components of the car, including the seats, dashboard, and carpeting. Glass and Windshield Repair involves repairing or replacing the glass and windshield of the car, including chip repair and replacement.",
      categories: [
        "Engine and Transmission Repair",
        "Electrical System Repair",
        "Brake System Repair",
        "Suspension and Steering Repair",
        "Cooling System Repair",
        "Exhaust System Repair",
        "Fuel System Repair",
        "Air Conditioning Repair",
        "Wheel Alignment and Balancing",
        "Body and Paint Repair",
        "Interior Repair",
        "Glass and Windshield Repair",
      ],
      technology: [
        "react",
        "react-router-dom",
        "tailwindcss",
        "react-hook-form",
        "cors",
        "dotenv",
        "express",
        "mongodb",
        "nodejs",
      ],
      serverCode: "https://github.com/Hasan-Rifat/genius-car-service-server",
      update: false,
      fullStack: true,
    },
    {
      id: 25,
      url: "https://ema-john-two.vercel.app/",
      title: "ema-john",
      clientCode: "https://github.com/Hasan-Rifat/ema-john",
      description:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: [
        "Apparel and Accessories",
        "Electronics",
        "Home and Garden",
        "Beauty and Personal Care",
        "Toys and Games",
        "Sports and Outdoors",
        "Books, Music, and Movies",
        "Food and Beverage",
        "Automotive and Industrial",
        "Health and Wellness",
        "Pet Supplies",
        "Office Supplies and Equipment",
        "Travel and Luggage",
        "Arts and Crafts",
        "Business and Industrial",
        "Education and Training",
        "eCommerce",
        "shopping",
        "online store",
        "shopping cart",
        "checkout",
        "payment",
        "inventory",
        "orders",
      ],
      technology: [
        "react",
        "firebase",
        "react-firebase-hooks",
        "react-router-dom",
        "tailwindcss",
      ],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 26,
      url: "https://hasan-rifat-crypto-cafe.netlify.app/",
      title: "crypto cafe",
      clientCode: "https://github.com/Hasan-Rifat/Crypto-Cafe",
      description:
        "A cryptocurrency website provides information and resources related to digital currencies such as Bitcoin and Ethereum. These websites offer real-time updates on prices, market capitalization, and trading volumes, as well as news and analysis about the cryptocurrency industry. Users can also access wallet services, exchanges, and other tools for buying, selling, and storing cryptocurrencies.",
      categories: [
        "Market Data",
        "News and Analysis",
        "Wallet Services",
        "Exchanges",
        "Payment Services",
        "Education and Resources",
        "ICO Listings",
        "Community and Social",
        "Blockchain",
        "cryptocurrency",
        "bitcoin",
        "ethereum",
        "litecoin",
        "ripple",
        "bitcoin cash",
        "eos",
        "stellar",
        "cardano",
        "crypto website",
      ],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 27,
      url: "https://tshirt-mania.vercel.app",
      title: "tshirt",
      clientCode: "https://github.com/Hasan-Rifat/tshirt-mania",
      description:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: [
        "Apparel and Accessories",
        "Electronics",
        "Home and Garden",
        "Beauty and Personal Care",
        "Toys and Games",
        "Sports and Outdoors",
        "Books, Music, and Movies",
        "Food and Beverage",
        "Automotive and Industrial",
        "Health and Wellness",
        "Pet Supplies",
        "Office Supplies and Equipment",
        "Travel and Luggage",
        "Arts and Crafts",
        "Business and Industrial",
        "Education and Training",
        "eCommerce",
        "shopping",
        "online store",
        "shopping cart",
        "checkout",
        "payment",
        "inventory",
        "orders",
      ],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 28,
      url: "https://bank-blue-three.vercel.app/",
      title: "Bank",
      clientCode: "https://github.com/Hasan-Rifat/bank",
      description: "Bank website",
      categories: ["Bank"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 29,
      url: "https://kopa-samsu.vercel.app/",
      title: "kopa-samsu",
      clientCode: "https://github.com/Hasan-Rifat/-kopa-samsu",
      description: "rifle website",
      categories: ["eCommerce, shopping, online store, shopping cart"],
      technology: ["react", "react-icons", "react-modal"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 30,
      url: "https://hasan-rifat.github.io/pandacommerce/",
      title: "panda eCommerce",
      clientCode: "https://github.com/Hasan-Rifat/pandacommerce",
      description:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["eCommerces"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 32,
      url: "https://influencer-products.vercel.app/",
      title: "Influencer products",
      clientCode: "https://github.com/Hasan-Rifat/Influencer-products",
      description: "",
      categories: ["influencer-products, shopping, online store, eCommerce"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 33,
      url: "https://hasan-rifat.github.io/leader-bord/",
      title: "Leader board",
      clientCode: "https://github.com/Hasan-Rifat/leader-bord",
      description: "Landing page",
      categories: ["Landing page"],
      technology: ["HTML", "CSS", "font awesome"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 34,
      url: "https://e-school-five.vercel.app/",
      title: "E School",
      clientCode: "https://github.com/Hasan-Rifat/e-school",
      description:
        "Online courses are educational programs that are delivered entirely over the internet, allowing students to learn from anywhere with an internet connection. These courses can be self-paced or have structured schedules, and may include a variety of multimedia materials such as videos, interactive quizzes, and online forums for discussion and collaboration. Online courses can cover a wide range of topics and can be offered by universities, colleges, private institutions, or individual instructors. They provide flexibility and convenience for learners who cannot attend traditional in-person classes due to geographic, work, or other constraints.",
      categories: ["Landing page"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 35,
      url: "https://hot-gadgets-rho.vercel.app/",
      title: "hot-gadgets",
      clientCode: "https://github.com/Hasan-Rifat/hot-gadgets",
      description:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["landing page, eCommerce, shopping, online store"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
    {
      id: 36,
      url: "https://portfolio-two-lovat-seven.vercel.app/",
      title: "portfolio",
      clientCode: "https://github.com/Hasan-Rifat/portfolio--two",
      description: "portfolio website",
      categories: ["Portfolio", "Landing page"],
      technology: ["HTML", "CSS"],
      serverCode: "",
      update: false,
      fullStack: false,
    },
  ];
  return (
    <div>
      <div className=""></div>
    </div>
  );
};
export default Work;
