import Image from "next/image";
import React, { useState } from "react";
import img from "../../images/1.png";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import Model from "../shared/Model";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

type WorkProps = {};

const Work: React.FC<WorkProps> = () => {
  const works = [
    {
      id: 1,
      url: "https://moon-ecommerce-part-2-client.vercel.app/",
      title: "Moon Tech",
      clientCode: "https://github.com/Hasan-Rifat/moon-ecommerce-part-2-client",
      categories: ["eCommerce"],
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

      features: [
        "User-friendly interface: A well-designed e-commerce website should have an intuitive and user-friendly interface that makes it easy for customers to find and purchase products.",
        "Secure payment gateway: A reliable and secure payment gateway should be integrated into the website to ensure that customers' financial information is protected.",
        "Product catalog: The website should have a comprehensive product catalog with high-quality images, detailed descriptions, and pricing information.",
        "Search and filter options: The website should provide customers with the ability to search and filter products based on different criteria such as price, category, and brand.",
        "Customer reviews and ratings: Including customer reviews and ratings on the product pages can help build trust and increase conversions.",
        "Order management: The website should have a backend system to manage orders, track inventory, and process payments.",
        "Shipping and delivery options: The website should provide information about shipping and delivery options and allow customers to track their orders.",
        "Customer support: The website should provide customers with various customer support options such as email, phone, or chat, to assist them with any issues they may encounter.",
        "Mobile responsiveness: The website should be optimized for mobile devices, as more and more customers are using smartphones to shop online.",
        "Social media integration: The website should have social media integration, allowing customers to share products they like on social media platforms, which can help increase brand awareness and drive traffic to the website.",
      ],
      update: false,
    },
    {
      id: 2,
      url: "https://book-store-application.vercel.app/",
      title: "Book List",
      clientCode: "https://github.com/Hasan-Rifat/book-store-application",
      categories: ["eCommerce"],
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
      features: [
        "User-friendly interface: A well-designed book store application should have an easy-to-use interface that allows customers to browse, search for, and purchase books quickly and easily.",
        "Product catalog: The application should have a comprehensive catalog of books, including high-quality images, detailed descriptions, and pricing information.",
        "Search and filter options: The application should allow customers to search for books based on different criteria such as title, author, genre, and price range.",
        "Shopping cart: The application should allow customers to add books to their shopping cart and checkout when they are ready to purchase.",
        "Payment gateway: The application should integrate with a secure payment gateway to allow customers to make purchases securely and easily.",
        "User account management: The application should allow customers to create and manage their user accounts, including viewing their order history and tracking their shipments.",
        "Customer support: The application should provide customers with various customer support options, such as email, phone, or chat, to assist them with any issues they may encounter.",
        "Recommendations: The application can provide customers with personalized recommendations based on their purchase history and browsing behavior, which can help increase customer engagement and sales.",
        "Reviews and ratings: The application can allow customers to leave reviews and ratings for books they have purchased, which can help other customers make informed decisions about their purchases.",
        "Social media integration: The application can integrate with social media platforms, allowing customers to share their purchases and reviews on social media, which can help increase brand awareness and drive traffic to the application.",
      ],
    },
    {
      id: 3,
      url: "https://product-cart-appication.vercel.app/",
      title: "Product",
      clientCode: "https://github.com/Hasan-Rifat/Product-Cart-Appication",
      categories: ["eCommerce"],
      technology: ["react", "redux", "uuid", "react-redux", "tailwindcss"],
      descriptions:
        " add product and delete product and update product and search product and filter product and pagination and sort product and add to cart and delete from cart and checkout and payment gateway and order history and order details and a lot of features",
      serverCode: "",
      update: true,
      fullStack: false,
      features: [
        "Product catalog: A comprehensive catalog of products, including product images, descriptions, and prices.",
        "Shopping cart: A feature that allows users to add products to their cart, update the quantity of products, and remove products.",
        "Checkout: A checkout process that allows users to enter their shipping and billing information and complete their purchase.",
        "Payment gateway: Integration with a secure payment gateway to allow users to pay for their purchases securely and easily.",
        "User account management: The ability for users to create and manage their user accounts, including viewing their order history and tracking their shipments.",
        "Product filtering: A feature that allows users to filter products based on various criteria, such as price range, category, brand, and product type.",
        "Product search: A search feature that allows users to search for products by keywords, product names, or product codes.",
        "Wishlist: A feature that allows users to save products they are interested in for future purchases.",
        "Discounts and coupons: A feature that allows users to apply discounts and coupons to their purchases.",
        "Shipping and delivery options: The ability for users to choose their preferred shipping and delivery options, such as standard shipping, express shipping, or local pickup.",
      ],
    },
    {
      id: 4,
      url: "https://real-estate-hr.vercel.app/",
      title: "Real Estate",
      clientCode: "https://github.com/Hasan-Rifat/real-estate",
      categories: ["real estate"],
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

      features: [
        "Property Listings: A comprehensive database of property listings, including details about each property such as the location, size, price, and features.",
        "Property Search: A search feature that allows users to search for properties based on various criteria such as location, price range, property type, and amenities.",
        "Property Comparisons: A feature that allows users to compare multiple properties side-by-side to help them make informed decisions.",
        "Property Details: A detailed description of each property that includes photos, videos, floor plans, and other relevant information.",
        "Property Alerts: A feature that allows users to set up alerts for new properties that meet their specific criteria.",
        "Agent Profiles: A directory of real estate agents and brokers, including their contact information, experience, and specialties.",
        "Interactive Maps: Interactive maps that allow users to explore properties in specific areas and neighborhoods.",
        "Mortgage Calculator: A tool that allows users to calculate monthly mortgage payments based on the property price, down payment, and interest rate.",
        "Schedule Viewings: A feature that allows users to schedule property viewings with agents or brokers.",
        "User Account Management: The ability for users to create and manage their user accounts, including saving favorite properties, tracking property views and searches, and receiving notifications about new listings.",
      ],
    },
    {
      id: 5,
      url: "https://flight-booking-application-hr.vercel.app/",
      title: "Flight Booking",
      clientCode:
        "https://github.com/Hasan-Rifat/flight-booking-application-react",
      categories: ["eCommerce"],
      technology: ["Redux", "React", "React-Redux", "Tailwind"],
      descriptions:
        "flight booking application using react and redux and tailwind css ",
      serverCode: "",
      update: true,
      fullStack: false,
      features: [
        "Flight Search: A search feature that allows users to search for flights based on various criteria such as destination, date, time, and airline.",
        "Flight Comparison: A feature that allows users to compare multiple flights side-by-side to help them make informed decisions.",
        "Flight Details: A detailed description of each flight that includes the airline, flight number, departure and arrival times, and any layovers.",
        "Seat Selection: A feature that allows users to select their seats and preferences during the booking process.",
        "Flight Booking: A booking process that allows users to select their flights, enter their personal and payment information, and complete their booking.",
        "Flight Status: A feature that allows users to check the status of their flights, including delays, cancellations, and gate changes.",
        "Travel Alerts: A feature that allows users to set up alerts for changes in their flight status, such as delays or cancellations.",
        "Loyalty Programs: Integration with airline loyalty programs to allow users to earn and redeem rewards for their bookings.",
        "Car Rental and Hotel Booking: Integration with car rental and hotel booking services to allow users to book their entire travel itinerary in one place.",
        "User Account Management: The ability for users to create and manage their user accounts, including saving past and upcoming bookings, tracking flight searches and alerts, and receiving notifications about promotions and deals.",
      ],
    },
    {
      id: 6,
      url: "https://banking-website.vercel.app/",
      title: "banking website",
      clientCode: "https://github.com/Hasan-Rifat/banking-website",
      categories: ["banking website"],
      technology: ["Html", "Css", "Javascript"],
      descriptions: "banking website using html css and javascript",
      serverCode: "",
      update: true,
      fullStack: false,
      features: [
        "Account Management: The ability for customers to create and manage their accounts, including viewing their balance and transaction history.",
        "Online Banking: A feature that allows customers to perform banking transactions online, such as transferring funds between accounts or paying bills.",
        "Mobile Banking: Integration with a mobile banking application to allow customers to access their accounts and perform transactions from their smartphones.",
        "ATM Locator: A feature that allows customers to locate nearby ATMs or bank branches.",
        "Customer Support: Access to customer support services, such as live chat, email, or phone support.",
        "Account Security: Robust security measures to protect customer accounts and data, such as two-factor authentication, encryption, and fraud monitoring.",
        "Financial Planning: Resources to help customers plan their finances, such as calculators, budgeting tools, and investment advice.",
        "Credit Cards: Integration with credit card services to allow customers to apply for and manage their credit cards.",
        "Loans: Integration with loan services to allow customers to apply for and manage their loans.",
        "Investment Services: Integration with investment services to allow customers to invest in stocks, mutual funds, or other financial products.",
      ],
    },
    {
      id: 7,
      url: "https://jobbox-client-hr.vercel.app/",
      title: "Job Box",
      clientCode: "https://github.com/Hasan-Rifat/jobbox-client",
      descriptions:
        "A job portal is an online platform that connects job seekers with potential employers. To make the job search process easier, job portals offer a range of features such as advanced search filters, job search functionality, and job alerts and notifications. For employers, job portals provide tools such as applicant management, interview scheduling, and data analytics and reporting. Other features of job portals include career advice and resources for job seekers, company reviews and ratings, and employer branding opportunities. Mobile optimization, integration with social media, and video interviews are also becoming increasingly important features of modern job portals.",
      categories: ["Job Portal"],
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
      features: [
        "Job Listings: A comprehensive database of job listings, including details about each job such as the job title, location, salary, and requirements.",
        "Job Search: A search feature that allows users to search for jobs based on various criteria such as job title, location, salary range, and industry.",
        "Resume Submission: A feature that allows users to upload their resumes to apply for jobs.",
        "Job Applications Tracking: A feature that allows users to track their job applications and receive notifications about the status of their applications.",
        "Job Alerts: A feature that allows users to set up alerts for new jobs that match their specific criteria.",
        "Employer Profiles: A directory of employers, including their company information, job openings, and contact information.",
        "Application Materials: A feature that allows users to upload application materials such as cover letters, references, and writing samples.",
        "Company Reviews: A feature that allows users to read and write reviews of companies and their interview processes.",
        "Interview Preparation: Resources to help users prepare for job interviews, such as interview tips, sample interview questions, and salary negotiation advice.",
        "User Account Management: The ability for users to create and manage their user accounts, including saving job searches and favorite job listings, tracking job applications, and receiving notifications about new job openings.",
      ],
      serverCode: "https://github.com/Hasan-Rifat/jobbox-server",
      update: true,
    },
    {
      id: 8,
      url: "https://react-landing-page-ruby.vercel.app/",
      title: "Landing Page",
      clientCode: "https://github.com/Hasan-Rifat/FAFC-landing-page",
      descriptions:
        "An NFT landing page is a web page designed to promote and showcase a specific collection of non-fungible tokens (NFTs). NFTs are unique digital assets stored on a blockchain, and landing pages for NFT collections typically provide detailed information about the collection, including its theme, number of tokens available, and any exclusive benefits for token holders. The landing page may feature images or videos of the NFTs, as well as information on the artist or creator of the collection. It may also provide a platform for purchasing the NFTs, as well as information on how to trade or resell them. The goal of an NFT landing page is to generate interest and excitement in the collection, as well as to attract potential buyers and collectors.",
      categories: ["Landing Page"],
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
      features: [
        "Branding: A consistent and visually appealing design that reinforces the brand identity.",
        "Navigation: A clear and easy-to-use navigation menu that allows users to easily find the information they are looking for.",
        "Call-to-Action (CTA): Prominent and persuasive CTAs that encourage users to take action, such as signing up for a service or making a purchase.",
        "Responsive Design: A design that adapts to different screen sizes, ensuring that the website is accessible on desktop, tablet, and mobile devices.",
        "Content Sections: Well-organized content sections that provide users with the information they need in a clear and concise manner.",
        "Testimonials: Positive reviews or testimonials from satisfied customers that help establish credibility and trust.",
        "Social Media Integration: Links to social media profiles and feeds to help users engage with the brand on multiple platforms.",
        "Contact Information: Clear and easy-to-find contact information, such as a phone number or email address, to help users get in touch with the company.",
        "Images and Videos: High-quality images and videos that showcase the product or service being offered and help tell the brand's story.",
        "Analytics: Integration with analytics tools to track user behavior and monitor the effectiveness of the landing page.",
      ],
    },
    {
      id: 9,
      url: "https://electronic-tools-client.vercel.app/",
      title: "electronic tools",
      clientCode:
        "https://github.com/Hasan-Rifat/manufacturer-website-client-side",
      descriptions:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["eCommerce"],
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

      features: [
        "Product Listings: A comprehensive database of electronic tools and related products, including details about each product such as the name, specifications, and price.",
        "Product Search: A search feature that allows users to search for products based on various criteria such as product name, brand, and price range.",
        "Product Categories: A clear and easy-to-use categorization system that allows users to browse products by category.",
        "Product Comparison: A feature that allows users to compare multiple products side-by-side based on their specifications and features.",
        "Product Reviews: A feature that allows users to read and write reviews of products, helping other users make informed purchasing decisions.",
        "Shopping Cart: A feature that allows users to add products to a virtual shopping cart and checkout when they are ready to make a purchase.",
        "Order Tracking: A feature that allows users to track the status of their orders, including shipping and delivery updates.",
        "Payment Processing: Integration with payment processing services to allow users to securely and easily pay for their purchases.",
        "User Account Management: The ability for users to create and manage their user accounts, including saving their shipping and billing information, viewing their order history, and receiving notifications about their orders.",
        "Customer Support: Access to customer support services, such as live chat, email, or phone support, to help users with any questions or issues they may have while using the website.",
      ],
    },
    {
      id: 10,
      url: "https://warehouse-management-app.netlify.app/",
      title: "warehouse management",
      clientCode:
        "https://github.com/Hasan-Rifat/warehouse-management-client-side",
      descriptions:
        "This website is a powerful car inventory management system that allows you to add, update, and remove products with ease. Whether you are managing a small or large inventory, this website makes it simple to keep track of all your products in one place. You can easily add new products to your inventory and update them as needed, ensuring that your records are always accurate and up-to-date. With the ability to remove products that are no longer available, you can keep your inventory organized and avoid confusion. And with the 'My Items 'feature, you can easily see how many products you have added, helping you keep track of your inventory levels and make informed business decisions.",
      categories: ["eCommerce"],
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
      features: [
        "Inventory Management: A comprehensive database of all the items in the warehouse, including their location, quantity, and other relevant information.",
        "Barcode Scanning: The ability to scan barcodes on items to quickly and accurately add them to the inventory or update their location.",
        "Order Management: A system for managing customer orders, including order processing, picking and packing, and shipping.",
        "Shipping and Receiving: A feature that tracks incoming and outgoing shipments, including information such as carrier, tracking number, and delivery status.",
        "Reporting and Analytics: Tools for generating reports and analyzing data on inventory levels, order fulfillment, and other key metrics.",
        "Warehouse Layout Management: A visual representation of the warehouse layout, including the location of items and the flow of inventory through the warehouse.",
        "User Access Control: The ability to restrict access to certain features or data based on user roles and permissions.",
        "Real-Time Tracking: A feature that allows warehouse managers to track inventory in real-time, including updates on new arrivals, changes in stock levels, and order fulfillment.",
        "Mobile Compatibility: The ability to access the warehouse management application on mobile devices, including smartphones and tablets, to allow for greater flexibility and convenience.",
        "Integration with Other Systems: Integration with other systems such as accounting software or e-commerce platforms to streamline workflows and improve efficiency.",
      ],
    },
    {
      id: 11,
      url: "https://javascript-bank-list.vercel.app/",
      title: "Bank List",
      clientCode: "https://github.com/Hasan-Rifat/javascript-bank-list",
      descriptions: "bank list with javascript",
      categories: ["banking website", "javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      fullStack: false,
      features: [
        "Bank Listings: A comprehensive list of banks and related information, including the bank name, location, contact information, and services offered.",
        "Bank Search: A search feature that allows users to search for banks based on various criteria such as bank name, location, and services offered.",
        "Bank Categories: A clear and easy-to-use categorization system that allows users to browse banks by category, such as commercial banks, investment banks, and credit unions.",
        "Bank Comparison: A feature that allows users to compare multiple banks side-by-side based on their offerings, services, and fees.",
        "Bank Reviews: A feature that allows users to read and write reviews of banks, helping other users make informed decisions when choosing a bank.",
        "Financial Calculators: A suite of financial calculators, such as loan calculators, mortgage calculators, and savings calculators, to help users plan their finances and make informed decisions.",
        "User Account Management: The ability for users to create and manage their user accounts, including saving their banking preferences and viewing their transaction history.",
        "Payment Processing: Integration with payment processing services to allow users to securely and easily make transactions, such as deposits and transfers.",
        "Customer Support: Access to customer support services, such as live chat, email, or phone support, to help users with any questions or issues they may have while using the website.",
        "Security Features: Measures in place to ensure the security and privacy of users' information, such as SSL encryption, two-factor authentication, and compliance with data protection regulations.",
      ],
      update: false,
    },
    {
      id: 12,
      url: "https://javascript-pig-game-tawny.vercel.app/",
      title: "Javascript Pig game",
      clientCode: "https://github.com/Hasan-Rifat/javascript-pig-game",
      descriptions: "Javascript Pig game",
      categories: ["banking website", "javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      features: [
        "Two Players: The ability to play with two players, taking turns to roll the dice and accumulate points.",
        "Dice Rolling: A feature that simulates the rolling of a dice, generating a random number between 1 and 6.",
        "Current Score: A display that shows the current score of each player, including the points they have accumulated on their current turn.",
        "Total Score: A display that shows the total score of each player, including the points they have accumulated over multiple turns.",
        "Game Rules: Clear and concise game rules, including explanations of how to win, how to accumulate points, and how to lose.",
        "Hold Button: A button that allows players to 'hold' their current score and add it to their total score, ending their turn.",
        "New Game Button: A button that allows players to start a new game, resetting the scores and starting from scratch.",
        "User-Friendly Interface: An easy-to-use interface that is visually appealing and simple to navigate.",
        "Sound Effects: Sound effects that add excitement and engagement to the game, such as the sound of dice rolling or applause when a player wins.",
        "Mobile Compatibility: The ability to play the game on mobile devices, including smartphones and tablets, to allow for greater flexibility and convenience.",
      ],
    },
    {
      id: 13,
      url: "https://javascript-modal-snowy.vercel.app/",
      title: "Javascript Modal",
      clientCode: "https://github.com/Hasan-Rifat/javascript-modal",
      descriptions: "Javascript Modal",
      categories: ["Javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Modal Window: A pop-up window that appears on top of the current page, blocking the user's interaction with the page until the modal is closed.",
        "Customizable Content: The ability to customize the content of the modal window, including text, images, and other media.",
        "Modal Triggers: A way to trigger the modal to appear, such as clicking a button, a link, or an image.",
        "Modal Types: The ability to choose from different types of modals, such as informational modals, confirmation modals, and alert modals.",
        "Animation Effects: Animation effects that make the modal window appear and disappear smoothly and add visual appeal to the overall user experience.",
        "Customizable Styling: The ability to customize the styling of the modal window, including the size, color, font, and other visual elements.",
        "Accessibility: The modal should be accessible to all users, including those with disabilities, and should follow web accessibility guidelines.",
        "Keyboard Navigation: The ability to navigate the modal using keyboard shortcuts, including the ability to close the modal using the Esc key.",
        "Mobile Compatibility: The ability to use the modal on mobile devices, including smartphones and tablets, to allow for greater flexibility and convenience.",
        "Cross-Browser Compatibility: The modal should work across different browsers, including Chrome, Firefox, Safari, and Internet Explorer, to ensure a consistent user experience for all users.",
      ],
    },
    {
      id: 14,
      url: "https://guess-my-number-game-ten.vercel.app/",
      title: "Javascript Game Gush my number",
      clientCode: "https://github.com/Hasan-Rifat/Guess-My-Number-game",
      descriptions: "javascript game",
      categories: ["Javascript"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Random Number: The game generates a random number that the player has to guess.",
        "Input Field: A field where the player can enter their guess.",
        "Hint Text: A hint text that tells the player if their guess is too high or too low.",
        "Attempts Counter: A counter that keeps track of the number of attempts the player has made.",
        "Reset Button: A button that resets the game, generating a new random number and resetting the attempts counter.",
        "Difficulty Levels: The ability to choose different difficulty levels, such as easy, medium, and hard, with varying ranges of numbers to guess from.",
        "Time Limit: The ability to add a time limit to the game, adding an extra challenge for the player.",
        "Score System: A scoring system that rewards the player for guessing the number correctly in fewer attempts or within a shorter time limit.",
        "Sound Effects: Sound effects that add excitement and engagement to the game, such as the sound of a correct or incorrect guess.",
        "Mobile Compatibility: The ability to play the game on mobile devices, including smartphones and tablets, to allow for greater flexibility and convenience.",
      ],
    },
    {
      id: 15,
      url: "https://landinge-page-ins.vercel.app/",
      title: "Simple Landing page",
      clientCode: "https://github.com/Hasan-Rifat/landinge-page-ins",

      categories: ["Landing page"],
      technology: ["HTML", "CSS", "Javascript", "tailwindcss", "next js"],
      descriptions: "Landing page with next js",
      serverCode: "",
      update: true,
      fullStack: false,
      features: [
        "Headline: A clear and attention-grabbing headline that communicates the main message or value proposition of the product or service being offered.",
        "Call-to-Action (CTA): A prominent button or link that encourages visitors to take a specific action, such as signing up for a free trial, downloading an e-book, or making a purchase.",
        "Product or Service Features: A list of key features or benefits that highlights what makes the product or service unique and valuable.",
        "Testimonials: Social proof in the form of customer testimonials or reviews that add credibility and build trust.",
        "Visuals: High-quality images, graphics, or videos that showcase the product or service and help tell the brand's story.",
        "Branding: Consistent branding throughout the page, including colors, typography, and logo, that creates a cohesive and memorable experience.",
        "Navigation: Clear and simple navigation that helps visitors quickly find the information they're looking for and navigate to other pages on the site.",
        "Responsive Design: A design that is optimized for all screen sizes, including mobile and tablet devices, to ensure a seamless experience for all users.",
        "Contact Information: A way for visitors to contact the company, such as a contact form, phone number, or email address, that adds legitimacy and trustworthiness.",
        "Social Media Integration: Links to social media profiles and sharing buttons that allow visitors to easily share the page on their own social media accounts.",
      ],
    },
    {
      id: 16,
      url: "https://creative-agancy.vercel.app/",
      title: "creative agency",
      clientCode: "https://github.com/Hasan-Rifat/creative-agancy",
      descriptions:
        "As a creative agency, we offer a range of services that can help bring your brand to life. Whether you need web and mobile design, graphic design, or web development, we have the expertise to help you achieve your goals. Our team of skilled designers and developers work closely with you to understand your unique needs and create custom solutions that are tailored to your brand. From creating a beautiful and user-friendly website, to designing eye-catching graphics that grab your audience's attention, we take pride in delivering high-quality work that exceeds expectations. We are passionate about design and development and strive to stay up-to-date with the latest trends and technologies. Whether you are looking to launch a new website, rebrand your company, or create a mobile app, we are here to help you every step of the way. Get in touch with us today to learn more about how we can help bring your vision to life.",
      categories: ["creative agency"],
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

      features: [
        "Portfolio: A showcase of the agency's work, featuring images, descriptions, and links to case studies or client testimonials.",
        "About Us: A page that provides information about the agency, including its history, team members, and mission statement.",
        "Services: A list of services offered by the agency, along with descriptions and pricing information.",
        "Blog: A section of the website that features blog posts related to the agency's industry or expertise.",
        "Testimonials: Social proof in the form of customer testimonials or reviews that add credibility and build trust.",
        "Contact Us: A way for visitors to contact the agency, such as a contact form, phone number, or email address.",
        "Team Members: A page that features photos and bios of the agency's team members.",
        "Awards and Recognition: A showcase of the agency's awards and recognition from industry peers and organizations.",
        "Branding: Consistent branding throughout the site, including colors, typography, and logo, that creates a cohesive and memorable experience.",
        "Responsive Design: A design that is optimized for all screen sizes, including mobile and tablet devices, to ensure a seamless experience for all users.",
      ],
    },
    {
      id: 17,
      url: "https://independent-service-provider.vercel.app/",
      title: "Course website",
      clientCode: "https://github.com/Hasan-Rifat/independent-service-provider",
      descriptions:
        "Our course website offers a wide range of online courses, utilizing the latest in e-learning technology to provide students with a flexible and convenient learning experience. Our platform provides easy access to our course catalog, allowing students to browse courses by topic and level, and enroll in courses that interest them. Our Course Management System allows students to keep track of their progress, view course schedules and deadlines, and access course materials, including video lectures and homework assignments. The Student Dashboard provides a centralized location for students to manage their coursework and stay on track with their studies. Our Learning Management System (LMS) offers instructors a powerful set of tools for managing and delivering course content, including the ability to create course materials, track student progress, and provide feedback and grades. Instructor profiles allow students to learn more about their instructors and their expertise. Our platform offers a range of features to support student engagement and collaboration, including discussion forums and group projects. We are committed to providing a supportive and engaging learning environment for all of our students, and strive to deliver a high-quality education that is accessible to all. Whether you are looking to advance your career, pursue a new hobby, or simply learn something new, our online courses provide the flexibility and convenience you need to achieve your goals. Join our community of learners today and discover the power of online education!",
      categories: ["e-learning"],
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
      features: [
        "Easy sign-up process: The website allows for a quick and easy sign-up process, where independent service providers can create an account and start offering their services.",
        "Variety of services: The platform offers a wide range of services that independent service providers can offer, including web development, graphic design, writing, marketing, and more.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for both service providers and clients to navigate.",
        "Secure payment system: The website uses a secure payment system that allows clients to make payments to service providers for their work.",
        "Feedback system: The platform has a feedback system that enables clients to leave reviews for service providers, helping others to make informed decisions.",
        "Responsive support: The website provides responsive support to both service providers and clients, ensuring any issues are quickly resolved.",
      ],
    },
    {
      id: 18,
      url: "https://product-analysis-website-two.vercel.app/",
      title: "product-analysis-",
      clientCode: "https://github.com/Hasan-Rifat/product-analysis-website",
      categories: ["Landing page"],
      technology: ["react", "react-router-dom", "tailwindcss", "recharts"],
      descriptions:
        "Welcome to our watch landing page, where you will find a wide selection of high-quality watches to suit your style and needs.Our collection includes watches from top brands, carefully curated to offer you the best in style and function. From classic timepieces to modern designs, we have a watch for every taste and occasion.Our watches are made with the finest materials and precision engineering, ensuring reliable performance and long-lasting durability. Whether you are looking for a watch to wear every day or a special occasion, we have the perfect option for you. Our website is designed with you in mind, making it easy to browse our collection and find the perfect watch for you. We offer a range of features to help you make an informed decision, including detailed product descriptions, high-quality images, and customer reviews. Our secure checkout process ensures that your purchase is safe and easy, and our customer support team is always here to help with any questions or concerns. At our watch landing page, we are committed to offering the best in quality, style, and customer service. Browse our collection today and find the perfect watch for you!",
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "The quick brown fox jumps over the lazy dog.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim vel eros accumsan malesuada. Suspendisse tincidunt nibh eget mi ullamcorper faucibus.",
        "To be, or not to be: that is the question.",
        "In the middle of every difficulty lies opportunity.",
        "We cannot solve our problems with the same thinking we used when we created them.",
        "Education is the most powerful weapon which you can use to change the world.",
        "Life is what happens when you're busy making other plans.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      ],
    },
    {
      id: 19,
      url: "https://insta-shohor-silk.vercel.app/",
      title: "inista short",
      clientCode: "https://github.com/Hasan-Rifat/-insta-shohor",
      descriptions: "javascript",
      categories: ["javascript"],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product categories: The website offers a variety of product categories, including sarees, shawls, and accessories, allowing customers to browse and find the products they are interested in.",
        "High-quality images: The website displays high-quality images of each product, allowing customers to see the products in detail and make informed purchasing decisions.",
        "Product details: Each product on the website has detailed descriptions, providing customers with information about the materials used, size, and care instructions.",
        "Secure payment: The website uses a secure payment system that allows customers to make payments for their purchases without any security concerns.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for customers to navigate and find the products they are looking for.",
        "Responsive customer support: The website provides responsive customer support, allowing customers to reach out for assistance with their purchases or any other inquiries they may have.",
      ],
    },
    {
      id: 20,
      url: "https://phone-hunter-nine.vercel.app/",
      title: "phone hunter",
      clientCode: "https://github.com/Hasan-Rifat/-phone-hunter",
      descriptions:
        "Welcome to our latest mobile phones page, where you will find a comprehensive selection of the newest and most advanced smartphones on the market. Our collection includes the latest models from top brands, including Apple, Samsung, Google, and more. Each phone is carefully selected for its cutting-edge features, including high-quality cameras, fast processors, and long-lasting batteries. Our website is designed to make it easy for you to find the perfect phone for your needs, with features like detailed product descriptions, high-quality images, and customer reviews. We also offer a range of accessories to enhance your phone's performance and protect it from damage. Our secure checkout process ensures that your purchase is safe and easy, and our customer support team is always available to help with any questions or concerns. Whether you are looking for a phone with the latest technology or a budget-friendly option, we have something for everyone. At our latest mobile phones page, we are committed to offering the best in quality, selection, and customer service. Browse our collection today and find the perfect phone for you!",
      categories: ["eCommerce"],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Search by brand and model: The website allows users to search for a phone's specifications by selecting the brand and model of the phone they are interested in.",
        "Detailed specifications: The website provides users with detailed specifications of the phone, including information about the processor, display, camera, storage, and more.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and find the specifications they are looking for.",
        "Fast results: The website provides users with quick results, allowing them to find the phone specifications they need in a timely manner.",
        "Free to use: The website is free to use, making it accessible to anyone who needs to check mobile phone specifications.",
        "No registration required: The website does not require users to register or create an account, allowing them to quickly find the information they need without any additional steps.",
      ],
    },
    {
      id: 21,
      url: "https://money-master-five-green.vercel.app/",
      title: "phone hunter",
      clientCode: "https://github.com/Hasan-Rifat/money-master",
      descriptions: "Monthly expenses, Monthly income,Total balance",
      categories: ["banking website"],
      technology: ["HTML", "CSS", "javascript"],
      serverCode: "",
      fullStack: false,
      features: [
        "Blog articles: The website has a collection of blog articles on various personal finance topics, such as saving money, investing, and budgeting.",
        "Tools and calculators: The website provides users with tools and calculators to help them calculate their financial goals, such as debt payoff and retirement savings.",
        "Newsletter: The website offers a newsletter that users can subscribe to, providing them with updates on the latest financial news and tips.",
        "Resource center: The website has a resource center with links to helpful resources and tools related to personal finance.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and find the information they are looking for.",
        "Free to use: The website is free to use, making it accessible to anyone who wants to learn more about personal finance.",
      ],
      update: false,
    },
    {
      id: 22,
      url: "https://convention-center-seven.vercel.app/",
      title: "convention center",
      clientCode: "https://github.com/Hasan-Rifat/-convention-center",
      descriptions:
        "Welcome to our convention center booking page, where you can book a venue for your next event.Our convention center offers a variety of flexible spaces that can accommodate events of all sizes, from small meetings to large conferences and exhibitions. Our state-of-the-art facilities are equipped with the latest technology and amenities to ensure your event is a success.Our experienced event planning team is available to help you every step of the way, from choosing the right space to coordinating catering and audio-visual services. We are committed to making your event a seamless and unforgettable experience.Our website is designed to make it easy for you to find the perfect space for your event. You can browse our venues, view detailed floor plans, and check availability online. Our online booking system is simple and secure, ensuring that your reservation is confirmed quickly and easily. We also offer a range of customizable event packages to suit your needs and budget. Whether you are planning a business conference, trade show, or social event, we have the perfect package for you. At our convention center, we are committed to providing the best in service, technology, and amenities. Contact us today to book your next event at our state-of-the-art facility.",
      categories: ["Landing Page"],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Venue information: The website provides information about the convention center, including the location, available event spaces, and capacity.",
        "Event services: The website offers information on event services provided by the convention center, such as catering, audiovisual equipment, and event planning.",
        "Event calendar: The website displays an event calendar with upcoming events taking place at the convention center.",
        "Photo gallery: The website features a photo gallery showcasing the convention center's event spaces and facilities.",
        "Contact information: The website provides contact information for the convention center, including phone and email, as well as a contact form for event inquiries.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and find the information they need.",
      ],
    },
    {
      id: 23,
      url: "https://doctors-portal-2f74a.web.app/",
      title: "convention center",
      clientCode: "https://github.com/Hasan-Rifat/doctors-protal-clinent",
      descriptions:
        "Welcome to our online doctor appointment booking page, where you can easily schedule an appointment with a medical professional of your choice. Our platform offers a comprehensive list of doctors and medical professionals in various fields, from general practitioners to specialists. You can easily search for doctors by location, specialty, and availability, making it easy to find the right doctor for your needs. Our online booking system is user-friendly and secure, ensuring that your personal information is safe and your appointment is confirmed quickly and easily. You can choose a time and date that works for you, and receive confirmation of your appointment via email or text message. Our doctors are experienced professionals who are dedicated to providing the best possible care for their patients. They use the latest medical technology and techniques to provide accurate diagnoses and effective treatments. In addition to booking appointments, our platform also offers other features to help you manage your healthcare needs. You can access your medical records, view test results, and communicate with your doctor through secure messaging. At our online doctor appointment booking platform, we are committed to making healthcare more accessible and convenient for everyone. Book your next appointment today and experience the ease and convenience of our platform.",
      categories: ["appointment booking", "eCommerce"],
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
      features: [
        "Appointment scheduling: The website allows users to schedule and manage medical appointments for patients.",
        "Patient record management: The website provides tools for managing patient records, such as medical history, allergies, and medications.",
        "Doctor profiles: The website includes profiles of doctors or healthcare providers, which can include their specialties, availability, and contact information.",
        "Secure login: The website requires users to login to access the application, providing an added layer of security for patient information.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and manage appointments and patient records.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the application on their smartphones or tablets.",
      ],
    },
    {
      id: 24,
      url: "https://genius-car-services-bdea5.web.app/",
      title: "genius car service",
      clientCode: "https://github.com/Hasan-Rifat/genius-car-service",
      descriptions:
        "Engine and Transmission Repair involves repairing or replacing engine and transmission components, including tune-ups, oil changes, engine rebuilding, and transmission repair. Electrical System Repair involves repairing or replacing the electrical components of the car, including battery replacement, alternator repair, and wiring repair. Brake System Repair involves repairing or replacing brake system components, including brake pads, rotors, calipers, and brake lines. Suspension and Steering Repair involves repairing or replacing suspension and steering components, including shocks, struts, ball joints, tie rods, and steering racks. Cooling System Repair involves repairing or replacing cooling system components, including the radiator, water pump, thermostat, and hoses. Exhaust System Repair involves repairing or replacing exhaust system components, including the muffler, catalytic converter, and exhaust pipes. Fuel System Repair involves repairing or replacing fuel system components, including the fuel pump, fuel filter, and fuel injectors. Air Conditioning Repair involves repairing or replacing air conditioning system components, including the compressor, evaporator, and condenser. Wheel Alignment and Balancing involves adjusting the alignment and balancing of the wheels to ensure proper handling and reduce tire wear. Body and Paint Repair involves repairing or replacing the body and paint of the car, including dent repair, scratch repair, and repainting. Interior Repair involves repairing or replacing interior components of the car, including the seats, dashboard, and carpeting. Glass and Windshield Repair involves repairing or replacing the glass and windshield of the car, including chip repair and replacement.",
      categories: ["eCommerce"],
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

      features: [
        "Service information: The website provides information on the services offered by the car service company, such as oil changes, brake repair, and tire rotation.",
        "Appointment scheduling: The website allows users to schedule appointments for vehicle maintenance and repair services.",
        "Location information: The website provides location information for the car service company, such as address and phone number.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and find the information they need.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the application on their smartphones or tablets.",
        "Contact form: The website includes a contact form for users to send inquiries or feedback to the car service company.",
      ],
    },
    {
      id: 25,
      url: "https://ema-john-two.vercel.app/",
      title: "ema-john",
      clientCode: "https://github.com/Hasan-Rifat/ema-john",
      descriptions:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["eCommerce"],
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
      features: [
        "Product catalog: The website features a catalog of products that users can browse and purchase, including categories such as clothing, electronics, and home decor.",
        "Shopping cart: The website allows users to add products to a shopping cart and checkout to complete their purchase.",
        "Product search: The website includes a search function for users to find specific products.",
        "User accounts: The website provides users with the option to create an account and save their shipping and payment information for future purchases.",
        "User reviews: The website includes user reviews and ratings for products, providing additional information for potential buyers.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 26,
      url: "https://hasan-rifat-crypto-cafe.netlify.app/",
      title: "crypto cafe",
      clientCode: "https://github.com/Hasan-Rifat/Crypto-Cafe",
      descriptions:
        "A cryptocurrency website provides information and resources related to digital currencies such as Bitcoin and Ethereum. These websites offer real-time updates on prices, market capitalization, and trading volumes, as well as news and analysis about the cryptocurrency industry. Users can also access wallet services, exchanges, and other tools for buying, selling, and storing cryptocurrencies.",
      categories: ["eCommerce"],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Latest news: The website provides the latest news and updates on cryptocurrency, including market trends and industry developments.",
        "Blog articles: The website features blog articles on a variety of topics related to cryptocurrency, including investment strategies and blockchain technology.",
        "Glossary of terms: The website includes a glossary of terms related to cryptocurrency, which can be helpful for users who are new to the industry.",
        "User-friendly interface: The website has a clean and user-friendly interface, making it easy for users to navigate and find the information they need.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
        "Contact form: The website includes a contact form for users to send inquiries or feedback to the website owner.",
      ],
    },
    {
      id: 27,
      url: "https://tshirt-mania.vercel.app",
      title: "tshirt",
      clientCode: "https://github.com/Hasan-Rifat/tshirt-mania",
      descriptions:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["eCommerce"],
      technology: ["react", "react-router-dom", "tailwindcss"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product catalog: The website features a catalog of t-shirts and other clothing items that users can browse and purchase.",
        "Shopping cart: The website allows users to add products to a shopping cart and checkout to complete their purchase.",
        "Product search: The website includes a search function for users to find specific products.",
        "User accounts: The website provides users with the option to create an account and save their shipping and payment information for future purchases.",
        "User reviews: The website includes user reviews and ratings for products, providing additional information for potential buyers.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 28,
      url: "https://bank-blue-three.vercel.app/",
      title: "Bank",
      clientCode: "https://github.com/Hasan-Rifat/bank",
      descriptions: "Bank website",
      categories: ["banking website"],
      technology: ["HTML", "CSS", "Javascript"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Account login: The website provides users with the option to log in to their account using a username and password.",
        "Account balance: Once logged in, users can view their account balance and recent transactions.",
        "Money transfer: The website allows users to transfer money between accounts, possibly including other accounts held by the same user.",
        "Transaction history: Users can view their transaction history, including details such as the date, amount, and recipient.",
        "Contact information: The website includes contact information for customer support, including an email address and phone number.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 29,
      url: "https://kopa-samsu.vercel.app/",
      title: "kopa-samsu",
      clientCode: "https://github.com/Hasan-Rifat/-kopa-samsu",
      descriptions: "rifle website",
      categories: ["eCommerce"],
      technology: ["react", "react-icons", "react-modal"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product catalog: The website features a catalog of products that users can browse and purchase, including categories such as clothing, electronics, and home decor.",
        "Shopping cart: The website allows users to add products to a shopping cart and checkout to complete their purchase.",
        "Product search: The website includes a search function for users to find specific products.",
        "User accounts: The website provides users with the option to create an account and save their shipping and payment information for future purchases.",
        "User reviews: The website includes user reviews and ratings for products, providing additional information for potential buyers.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 30,
      url: "https://hasan-rifat.github.io/pandacommerce/",
      title: "panda eCommerce",
      clientCode: "https://github.com/Hasan-Rifat/pandacommerce",
      descriptions:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["eCommerce"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product catalog: The website features a catalog of products that users can browse and purchase.",
        "Shopping cart: The website allows users to add products to a shopping cart and checkout to complete their purchase.",
        "Product search: The website includes a search function for users to find specific products.",
        "User accounts: The website provides users with the option to create an account and save their shipping and payment information for future purchases.",
        "User reviews: The website includes user reviews and ratings for products, providing additional information for potential buyers.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
        "Contact information: The website includes contact information for customer support, including an email address and phone number.",
      ],
    },
    {
      id: 32,
      url: "https://influencer-products.vercel.app/",
      title: "Influencer products",
      clientCode: "https://github.com/Hasan-Rifat/Influencer-products",
      descriptions: "",
      categories: ["eCommerce"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product catalog: The website features a catalog of products that are likely to be popular among social media influencers.",
        "Product search: The website includes a search function for users to find specific products.",
        "Product details: Users can view product details, including images, descriptions, and prices.",
        "User accounts: The website provides users with the option to create an account and save their shipping and payment information for future purchases.",
        "Shopping cart: The website allows users to add products to a shopping cart and checkout to complete their purchases.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
        "Contact information: The website includes contact information for customer support, including an email address and phone number.",
      ],
    },
    {
      id: 33,
      url: "https://hasan-rifat.github.io/leader-bord/",
      title: "Leader board",
      clientCode: "https://github.com/Hasan-Rifat/leader-bord",
      descriptions: "Landing page",
      categories: ["Landing page"],
      technology: ["HTML", "CSS", "font awesome"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Scoreboard: The website displays a list of players and their current scores in a tabular format.",
        "Add and remove players: Users can add and remove players from the leaderboard.",
        "Edit scores: Users can edit the scores of individual players to update their position on the leaderboard.",
        "Reset scores: Users can reset the scores of all players to zero.",
        "Simple and intuitive design: The website has a simple and intuitive design, with a clean and uncluttered interface.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 34,
      url: "https://e-school-five.vercel.app/",
      title: "E School",
      clientCode: "https://github.com/Hasan-Rifat/e-school",
      descriptions:
        "Online courses are educational programs that are delivered entirely over the internet, allowing students to learn from anywhere with an internet connection. These courses can be self-paced or have structured schedules, and may include a variety of multimedia materials such as videos, interactive quizzes, and online forums for discussion and collaboration. Online courses can cover a wide range of topics and can be offered by universities, colleges, private institutions, or individual instructors. They provide flexibility and convenience for learners who cannot attend traditional in-person classes due to geographic, work, or other constraints.",
      categories: ["Landing page"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Course catalog: The website features a catalog of courses in various subjects, such as mathematics, science, and language arts.",
        "Course search: The website includes a search function for users to find specific courses.",
        "Course details: Users can view course details, including course description, instructor information, and course schedule.",
        "User accounts: The website provides users with the option to create an account and enroll in courses.",
        "Course progress tracking: Users can track their progress in each course, including completed assignments and grades.",
        "Discussion forum: The website includes a discussion forum for each course, where users can ask questions, share ideas, and collaborate with other students.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 35,
      url: "https://hot-gadgets-rho.vercel.app/",
      title: "hot-gadgets",
      clientCode: "https://github.com/Hasan-Rifat/hot-gadgets",
      descriptions:
        "An commerce online store is a website that allows businesses to sell their products or services online. Customers can browse product listings, add items to their shopping cart, and make purchases using a secure checkout system. eCommerce stores provide features such as product categorization, search functionality, reviews and ratings, and shipping and tax calculations. They also allow businesses to track inventory, manage orders, and process payments. eCommerce online stores enable businesses to expand their reach, improve their customer experience, and increase their revenue by tapping into the growing online shopping market.",
      categories: ["Landing page", "eCommerce"],
      technology: ["HTML", "CSS", "Bootstrap"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Product catalog: The website features a catalog of products, including smartphones, laptops, gaming consoles, and other electronics.",
        "Product search: The website includes a search function for users to find specific products.",
        "Product details: Users can view product details, including product descriptions, specifications, and pricing.",
        "User accounts: The website provides users with the option to create an account and save their billing and shipping information for future purchases.",
        "Add to cart and checkout: Users can add products to their shopping cart and checkout to complete their purchase.",
        "Payment options: The website appears to accept multiple payment options, including credit cards and PayPal.",
        "Shipping and delivery: The website provides users with information on shipping and delivery options, including estimated delivery times and shipping costs.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
    {
      id: 36,
      url: "https://portfolio-two-lovat-seven.vercel.app/",
      title: "portfolio",
      clientCode: "https://github.com/Hasan-Rifat/portfolio--two",
      descriptions: "portfolio website",
      categories: ["Portfolio", "Landing page"],
      technology: ["HTML", "CSS"],
      serverCode: "",
      update: false,
      fullStack: false,
      features: [
        "Home page: The website features a home page with a brief introduction to the website owner and links to other sections of the website.",
        "About page: The website includes an about page with more detailed information about the website owner, including their background, skills, and experience.",
        "Portfolio page: The website includes a portfolio page showcasing the website owner's past work, including web design projects and other creative works.",
        "Services page: The website includes a services page with information on the website owner's available services, such as web design and development, branding, and digital marketing.",
        "Testimonials page: The website features a testimonials page with reviews and feedback from previous clients.",
        "Contact page: The website includes a contact page with a contact form for users to get in touch with the website owner.",
        "Mobile-friendly: The website appears to be mobile-friendly, allowing users to access the website on their smartphones or tablets.",
      ],
    },
  ];
  const [search, setSearch] = useState<string>("all");
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  const data = works.map((work) =>
    work.categories.map((item) => item.toLowerCase())
  );
  const allCategory: any = new Set(data.flat());
  const unique = ["all", ...allCategory].sort();
  let count = open ? works.length : 8;
  return (
    <section className="py-[100px] dark:bg-[#212428] ">
      <div className="lg:container mx-auto px-[5%] py-[0.5%] relative">
        {/* portfolio catagories */}
        <div className="flex gap-3 flex-wrap justify-center mb-10 max-w-[100%] mx-auto ">
          {theme === "dark" && (
            <>
              <div className="absolute -right-10 h-[232px] w-[232px] rounded-[50%] opacity-50 blur-[115px] bg-[#7f11e0] z-10"></div>
              <div className="absolute bottom-0 left-0 h-[232px] w-[232px] rounded-[50%] opacity-50 blur-[115px] bg-[#ff5832] z-10"></div>
            </>
          )}
          {unique.map((item) => (
            <div className=" " key={item}>
              <button
                onClick={() => setSearch(item)}
                className={`text-[#1f1f1f] text-sm px-3 py-1 capitalize rounded-full
                shadow-lg shadow-indigo-500/40 
               
                ${item.length % 2 === 0 && "bg-[#ddf7e3]"}
                ${item.length % 2 !== 0 && "bg-[#f6f7c1]"}
                ${item.length % 3 !== 0 && "bg-[#ffd4d4] "}
        `}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* portfolios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {works

            .filter((item) => {
              if (search === "all") {
                return item;
              } else if (
                item.categories
                  .map((item) => item.toLowerCase())
                  .includes(search)
              ) {
                return item;
              }
            })
            .slice(0, count)
            .map((item) => (
              <div
                key={item.id}
                className={`dark:bg-[#212430] dark:text-[#fff] overflow-hidden group grid h-full w-full items-center rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[5px] rounded-br-[5px] shadow-lg shadow-indigo-500/40 dark:shadow-[0_0_50px_0_rgba(0,0,0,0.5)]
              hover:translate-y-[-10px] transition duration-500
              z-[99]
              `}
              >
                <Image src={img} className="w-full h-full " alt="portfolio" />

                <div className="p-6 flex justify-between items-center gap-1 ">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <Link
                    href={`/projects/${item.id}`}
                    className=" bg-[#fff0] hover:bg-primary hover:text-[#fff] font-medium border border-primary p-1.5 px-10 rounded-[50px] text-sm"
                  >
                    Details
                  </Link>
                  {/* {open && <Model open={open} setOpen={setOpen} item={item} />} */}
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center py-12">
          <button onClick={() => setOpen(!open)} className="btn">
            {open ? "See less" : "see more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Work), { ssr: false });
