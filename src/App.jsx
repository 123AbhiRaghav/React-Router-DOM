import { BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./Data/NavBar";
import All from "./Data/All";
import Carrer from "./Data/Carrer";
import DataScience from "./Data/DataScience";
import FullStack from "./Data/FullStack";
import Cyber from "./Data/Cyber";
import "./App.css"

const App = () => {
    let data = [
       {
        id:1,
        title: "Data Science",
        head: "All",
        description:
          "Are you someone who's not interested in coding, but wants to get placed in tech",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        date: "28 November 2023",
        comment: "No Comments",
       },
       {
        id: 1,
        title:
          "FullStack",
        head: "All",
        description:
          "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
        date: "22 January 2024",
        comment: "No Comments",
       },
       {
        id: 1,
        title: "CyberSecurity",
        head: "All",
        description:
          "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        date: "4 December 2023",
        comment: "No Comments",
       },
       {
        id: 1,
        title:
          "Career",
        head: "All",
        description:
          "If your New Year resolution consists of building a successful tech career in 2024, then",
        image:
          "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
        date: "19 January 2024",
        comment: "No Comments",
       },
      {
            id:1,
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            head: "DataScience",
            description:
              "Are you someone who's not interested in coding, but wants to get placed in tech",
            image:
              "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            date: "28 November 2023",
            comment: "No Comments",
        },
        {
            id: 2,
      title: "10 Best Data Science Frameworks in 2024",
      head: "DataScience",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
      date: "5 August 2023",
      comment: "No Comments",
        },
        {
            id: 1,
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      head: "FullStack",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      date: "22 January 2024",
      comment: "No Comments",
        },
        {
            id: 2,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      head: "FullStack",
      description:
        "When you're hiring a full-stack developer, what are the most important things you look for?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      date: "15 November 2023",
      comment: "No Comments",
        },
        {
            id: 1,
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            head: "Cyber",
            description:
              "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
            image:
              "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            date: "4 December 2023",
            comment: "No Comments",
        },
        {
            id: 2,
      title: "What Is Hacking? Types of Hacking & More",
      head: "Cyber",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      date: "25 September 2023",
      comment: "No Comments",
        },
        {
            id: 1,
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      head: "Carrer",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      date: "19 January 2024",
      comment: "No Comments",
        },
        {
            id: 2,
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      head: "Carrer",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      date: "14 November 2023",
      comment: "No Comments",
        },
      {

      }
       
       
    ];
    return (
        <div>
            <BrowserRouter>
            <div>
            <NavBar />
            </div>

            <Routes>
          <Route path="/All" element={<All data={data} />} />
          <Route path="/FullStack" element={<FullStack data={data} />} />
          <Route path="/DataScience" element={<DataScience data={data} />} />
          <Route path="/Cyber" element={<Cyber data={data} />} />
          <Route path="/Carrer" element={<Carrer data={data} />} />
        </Routes>
     </BrowserRouter>
        </div>
    )
}
export default App;