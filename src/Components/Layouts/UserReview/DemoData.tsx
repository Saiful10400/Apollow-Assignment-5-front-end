import user1 from "../../../assets/advertisement/user1.jpg"
import user2 from "../../../assets/advertisement/user2.jpg"
import user3 from "../../../assets/advertisement/user3.jpg"
import user4 from "../../../assets/advertisement/user4.jpg"
import user5 from "../../../assets/advertisement/user5.jpg"
import user6 from "../../../assets/advertisement/user6.jpg"
import user7 from "../../../assets/advertisement/user7.jpg"

/* eslint-disable react-refresh/only-export-components */
type Tdata = {
    user:{
        name:string,
        designation:string
    }
    photo: string;
    review: number;
    testimonial:string
  }[];
  

  
const ReviewData: Tdata =  [
    {
      user: {
        name: "Aisha Rahman",
        designation: "Software Engineer"
      },
      photo: user1,
      review: 5,
      testimonial: "This product has been a game changer in my workflow! The features are exactly what I needed, and the performance is smooth and reliable. It has significantly increased my productivity, and I can't imagine going back to my previous tools. Highly recommended for anyone looking for a versatile and user-friendly solution."
    },
    {
      user: {
        name: "Rafiq Ahmed",
        designation: "Project Manager"
      },
      photo: user2,
      review: 4,
      testimonial: "The team really benefited from using this tool, especially in managing complex projects with multiple stakeholders. The integration capabilities and task management features are outstanding, making it easy to track progress. While there are a few areas for improvement, overall, this tool has been a huge help in keeping our projects on schedule and within budget."
    },
    {
      user: {
        name: "Sara Khan",
        designation: "UI/UX Designer"
      },
      photo: user3,
      review: 5,
      testimonial: "The interface is incredibly intuitive and easy to use. From the design aspect, I appreciate the attention to detail in the user experience, which makes navigating through the various features a breeze. I especially love the customization options, which allow me to tailor the tool to my specific needs. It's a fantastic product for designers looking for a sleek and efficient workflow."
    },
    {
      user: {
        name: "Imran Hossain",
        designation: "Data Scientist"
      },
      photo: user4,
      review: 5,
      testimonial: "The analytics capabilities are excellent and easy to implement, even with large datasets. It offers powerful features for data visualization, making it much easier to communicate insights to non-technical stakeholders. I also appreciate the strong customer support and frequent updates, which ensure that the tool stays relevant and competitive."
    },
    {
      user: {
        name: "Laila Siddiqui",
        designation: "Marketing Executive"
      },
      photo: user5,
      review: 4,
      testimonial: "This tool helped streamline our marketing efforts with ease. The automation features saved us hours of manual work, and the reporting dashboards gave us clear insights into our campaign performance. While there are some features I'd like to see added, it's an overall great investment for any marketing team looking to optimize their workflow."
    },
    {
      user: {
        name: "Tanvir Islam",
        designation: "DevOps Engineer"
      },
      photo: user6,
      review: 5,
      testimonial: "Great support and continuous updates, love working with it. As a DevOps engineer, I'm always looking for tools that offer reliability and integration with our existing infrastructure. This tool ticks all the boxes and more! The deployment process is seamless, and the real-time monitoring helps us address issues before they become major problems. Highly recommended for any DevOps team."
    },
    {
      user: {
        name: "Farah Akhtar",
        designation: "HR Specialist"
      },
      photo: user7,
      review: 4,
      testimonial: "Helped us optimize internal processes and increase efficiency across various departments. The onboarding process for new employees has become so much smoother, and the reporting features provide valuable insights into team performance. There are still some functionalities that can be improved, but overall, it's a great tool that has streamlined many of our HR operations."
    }
  ];
  
  const getReviewData = () => {
    return ReviewData;
  };
  export default getReviewData