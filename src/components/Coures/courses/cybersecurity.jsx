import React from 'react';
import { motion } from 'framer-motion';
// import Nav from '../../nav/nav';
import { Footer } from '../../Footer/Footer';
import Nav2 from '../../nav2/nav2';

const CybersecurityBlog = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Nav2 />

      {/* Hero Section */}
      <div className="relative bg-[#F3F4F6] px-6 lg:px-16 py-24 mb-16">
        <div className="text-center text-black z-10">
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Protect Your Future with Our Cybersecurity Course
          </motion.h1>
          <motion.h6
            className="text-xl lg:text-2xl font-medium text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Learn to safeguard digital systems and networks from evolving cyber threats
          </motion.h6>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="px-6 lg:px-16 py-16 max-w-screen-xl mx-auto">
        {/* Introduction */}
        <section className="mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            What is Cybersecurity and Why is It Critical in Today's World?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, damage, or unauthorized access.
            As we become increasingly reliant on digital systems, the importance of safeguarding sensitive information has never been greater.
          </motion.p>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            With cyber threats continuously evolving, businesses, governments, and individuals all face significant risks. As a result, the need for cybersecurity professionals to defend against cyberattacks is at an all-time high.
          </motion.p>
        </section>

        {/* Why Choose Cybersecurity? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Why Choose Cybersecurity?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1 }}
          >
            Cybersecurity offers rewarding career opportunities, the chance to make a significant impact, and the satisfaction of helping protect the digital world. Below are some key reasons why cybersecurity is a smart career choice:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1 }}
          >
            <li><strong>Critical for Every Industry:</strong> Cybersecurity is essential for all sectors, including finance, healthcare, government, and retail, as they all rely on secure data and systems.</li>
            <li><strong>High Demand for Professionals:</strong> Cybersecurity professionals are in high demand worldwide, with roles in ethical hacking, security analysis, and threat mitigation.</li>
            <li><strong>Lucrative Salary Potential:</strong> Cybersecurity professionals are among the highest-paid IT specialists, with strong job security and excellent career progression.</li>
          </motion.ul>
        </section>

        {/* What Will You Learn? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1 }}
          >
            What Will You Learn in Our Cybersecurity Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Our cybersecurity course is designed to equip you with the skills and knowledge necessary to defend against cyber threats and safeguard digital systems. Here's a breakdown of what you’ll learn:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 1 }}
          >
            <li><strong>Cybersecurity Fundamentals:</strong> Understand the core concepts of cybersecurity, including risk management, security protocols, and network defense.</li>
            <li><strong>Ethical Hacking:</strong> Learn ethical hacking techniques to identify vulnerabilities and secure networks before they can be exploited by malicious hackers.</li>
            <li><strong>Network Security:</strong> Explore how to protect and secure network infrastructures using firewalls, encryption, and intrusion detection systems.</li>
            <li><strong>Incident Response:</strong> Gain hands-on experience in detecting, responding to, and mitigating cybersecurity incidents and breaches.</li>
            <li><strong>Security Tools and Technologies:</strong> Learn to use industry-standard tools for vulnerability scanning, penetration testing, and network monitoring.</li>
            <li><strong>Cybersecurity Compliance:</strong> Study key regulations and frameworks such as GDPR, HIPAA, and NIST that help guide cybersecurity practices.</li>
          </motion.ul>
        </section>

        {/* Tools Used in Cybersecurity */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 1 }}
          >
            Tools Used in Cybersecurity
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.9, duration: 1 }}
          >
            In the field of cybersecurity, professionals use a variety of tools to detect, prevent, and respond to cyber threats. Here are some essential tools you'll learn to use in our course:
          </motion.p>
          <div className="flex justify-around items-center mb-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 1 }}
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/9141/9141492.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Kali Linux"
                className="w-20 h-20 mb-4 mx-auto"
              />
              {/* <p className="text-lg">Kali Linux</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1 }}
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/16165/16165188.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Wireshark"
                className="w-20 h-20 mb-4 mx-auto"
              />
              {/* <p className="text-lg">Wireshark</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8, duration: 1 }}
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/4335/4335070.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Metasploit"
                className="w-20 h-20 mb-4 mx-auto"
              />
              {/* <p className="text-lg">Metasploit</p> */}
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.1, duration: 1 }}
            >
              <img
                src="https://cdn-icons-png.freepik.com/256/5991/5991497.png?ga=GA1.1.2056715411.1734277242&semt=ais_hybrid"
                alt="Nmap"
                className="w-20 h-20 mb-4 mx-auto"
              />
              {/* <p className="text-lg">Nmap</p> */}
            </motion.div>
          </div>
        </section>

        {/* How This Course Can Change Your Career */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.4, duration: 1 }}
          >
            How This Course Can Change Your Career
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.7, duration: 1 }}
          >
            Completing this course will prepare you for a wide range of cybersecurity roles, such as security analyst, ethical hacker, penetration tester, and security consultant. You'll gain the hands-on experience and knowledge needed to protect businesses and individuals from the growing threat of cyberattacks.
          </motion.p>
        </section>

        {/* Who Should Take This Course? */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6, duration: 1 }}
          >
            Who Should Take This Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.3, duration: 1 }}
          >
            This course is perfect for anyone looking to break into the world of cybersecurity or strengthen their existing knowledge. Whether you're a beginner or an IT professional, our course provides the tools and techniques you need to succeed.
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.6, duration: 1 }}
          >
            <li><strong>Aspiring Cybersecurity Professionals:</strong> If you're interested in building a career in cybersecurity, this course will give you the foundational skills you need to get started.</li>
            <li><strong>IT Professionals:</strong> If you're already working in IT and want to specialize in cybersecurity, this course is perfect for expanding your expertise.</li>
            <li><strong>Anyone Concerned About Digital Security:</strong> If you're an individual who wants to protect personal data and systems, this course provides valuable insights into cybersecurity best practices.</li>
          </motion.ul>
        </section>

        {/* What's Included in the Course */}
        <section className="mb-16">
          <motion.h3
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.9, duration: 1 }}
          >
            What’s Included in the Course?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.2, duration: 1 }}
          >
            Our cybersecurity course includes a wide range of resources to ensure your success. Here's a quick overview of what's included:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.5, duration: 1 }}
          >
            <li><strong>Video Lessons:</strong> In-depth lectures covering key cybersecurity topics.</li>
            <li><strong>Hands-On Labs:</strong> Practical exercises that allow you to apply your knowledge in real-world scenarios.</li>
            <li><strong>Quizzes & Assessments:</strong> Regular quizzes to help you test your knowledge and track your progress.</li>
            <li><strong>Career Support:</strong> Resume building, interview preparation, and career coaching to help you land your first cybersecurity job.</li>
          </motion.ul>
        </section>

        {/* Contact Us Button */}
        <div className="text-center my-12">
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-2xl hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.8, duration: 1 }}
          >
            Contact Us
          </motion.a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CybersecurityBlog;
