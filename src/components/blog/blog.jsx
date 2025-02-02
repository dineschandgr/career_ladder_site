import React, { Component } from 'react';
import Nav from "../nav/nav";
import Nav2 from '../nav2/nav2';
import { Footer } from "../Footer/Footer";
import { Helmet } from 'react-helmet'; // For SEO optimizations
import WhatsAppButton from '../whatsapp/whatsapp';
import './blog.css'; // Ensure this CSS is properly linked
import ScrollToTopOnArrowPress from "../scrollup/scrollup.jsx";

export class Blog extends Component {
  constructor(props) {
    super(props);

    // Sample blog posts related to free software courses
    this.state = {
      posts: [
        {
          id: 1,
          title: "Data Analytics",
          content: "Data Analytics is the process of converting raw data into meaningful insights to help an organization make important decisions. It can range from analyzing a company’s performance for the past years, to analyzing stock prices, forex rates, financial markets, and so on. The below code example downloads data from the URL https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops. For more details, visit [Kaggle’s Data Science Tutorials](https://www.kaggle.com/learn).",
          image: "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for software development
          date: "Dec 15, 2024",
          link: "https://dineshchandgr.medium.com/everything-you-need-to-know-about-data-analytics-fcd0c6eea3cc?sk=7880c60c6566b45c3024edfa3ebdfc81", // Link for redirect
        },
        {
          id: 2,
          title: "Learn DevOps Engineer",
          content: " A DevOps Engineer should know programming, but they will program for the infrastructure whereas Developers program for the application. Earlier, system administrators would take care of infrastructure and development, but with the evolution of DevOps, the engineers. There are various models in Cloud Computing like IAAS, PAAS, and SAAS as follows. Learn more about DevOps on [freeCodeCamp](https://www.freecodecamp.org/learn).",
          image: "https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for Python/Data Science
          date: "Apr 7, 2024",
          link: "https://dineshchandgr.medium.com/the-roadmap-to-become-a-devops-engineer-dec1ee497364?sk=ec187142799a870e793bc4cf4f342ed4", // Link for redirect
        },
        {
          id: 3,
          title: "CyberSecurity, Ethical Hacking, and Penetration Testing!",
          content: " In this article, we are going to see what is CyberSecurity and different types of Cyber Attacks. We will then look at Hacking and its different types. Later we will dive into Ethical Hacking and VAPT (Vulnerability Assessment and Penetration Testing). Learn more about ethical hacking from the old types of attacks like DDoS and Ransomware are still used by hackers to exploit the systems.[OWASP](https://owasp.org/).",
          image: "https://img.freepik.com/free-photo/script-running-computer-secret-base-operations-used-by-hacker_482257-88615.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for Web Development
          date: "Jan 1, 2024",
          link: "https://dineshchandgr.medium.com/cybersecurity-ethical-hacking-and-penetration-testing-everything-you-need-to-know-cab96d2396e7?sk=840f2b71807eb584f344982bc088c9e9", // Link for redirect
        },
        {
          id: 4,
          title: "Artificial Intelligence vs Machine Learning vs Deep Learning vs Data Science ",
          content: "we are going to look at the buzzwords used in the field of software engineering —Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, and Data Science. We will also look at the various job roles in the field of Data Science namely Data Engineer, Data Scientist, and Data Analyst. Read more about AI and Machine Learning on [Towards Data Science](https://towardsdatascience.com/). Let's get started!!!.",
          image: "https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for JavaScript
          date: "Dec 18, 2023",
          link: "https://dineshchandgr.medium.com/artificial-intelligence-vs-machine-learning-vs-deep-learning-vs-data-science-everything-you-need-bdbe9239d238?sk=289eff0e4582e161b5a5ddcfb893a234", // Link for redirect
        },
        {
          id: 5,
          title: "The Roadmap for a Java / Senior Java Developer",
          content: "Machines are learning faster and they are more consistent than us. They almost never fail. But we humans cannot be as consistent as machines. We tend to be lethargic and we have hiccups at times. But that’s perfectly fine and that’s the human nature. Many firms are now undergoing digital transformation using leading technologies and hence it is the perfect time to update yourself. Learn more about Java development at [The Odin Project](https://www.theodinproject.com/).",
          image: "https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124097.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for Machine Learning
          date: "Apr 23, 2023",
          link: "https://dineshchandgr.medium.com/the-roadmap-for-a-java-senior-java-developer-6e7fa301837c?sk=270a5d55a33e768dee8f6b7a8da06601", // Link for redirect
        },
        {
            id: 6,
            title: "Linear Data Structures with Time Complexity ",
            content: "You might have come across or read about Data Structures a lot of times. I am writing my own version to simplify the understanding with visuals. In this article, we will be looking at the two most popular Linear Data Structures i.e Arrays, Linked Lists in detail. Once you are done with the above article, you can easily visualize the time complexity of the operations performed on the data structures. Check out this [Data Structures Guide on GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/).",
            image: "https://img.freepik.com/free-vector/big-data-processing-isometric-graph-diagram-inform-analysis-statistics-technology-objects_39422-910.jpg?ga=GA1.1.1943424079.1732703638&semt=ais_hybrid", // Freepik image for ML/AI
            date: "Oct 10, 2022",
            link: "https://medium.com/javarevisited/linear-data-structures-with-time-complexity-every-programmer-must-know-c58a446e06ac", // Link for redirect
        },
      ]
    };
  }

  render() {
    return (
      <div className="blog-page">
        <Nav />
        <Nav2 />
        <WhatsAppButton />
        <ScrollToTopOnArrowPress/>
        {/* SEO Optimization using Helmet */}
        <Helmet>
          <title>Free Software Development Courses Blog</title>
          <meta name="description" content="Explore the best free software development courses. Learn React, Python, JavaScript, and more with free tutorials and resources." />
          <meta name="keywords" content="free software courses, React tutorials, Python data science, JavaScript development, full stack web development" />
        </Helmet>

        <main>
          
          {/* Blog Post Section */}
          <section className="blog-post-section">
            {this.state.posts.map(post => (
              <article key={post.id} className="blog-post" style={{ border: '2px solid #ddd', padding: '15px', marginBottom: '20px' }}>
                <header>
                  <h2>{post.title}</h2>
                  <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
                </header>
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-post-image"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
                <p>{post.content}</p>
                {/* Backlink for redirection */}
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link" style={{ color: '#00000', textDecoration: 'underline' }}>
                  Learn More
                </a>
              </article>
            ))}
          </section>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    );
  }
}

export default Blog;
