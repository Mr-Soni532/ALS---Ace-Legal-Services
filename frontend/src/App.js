import './App.css';
import Lawyers from './pages/Lawyer/Lawyers';


function App() {
  const lawyersData = [
    {
      name: "John Smith",
      address: "123 Main St, Anytown, USA",
      profession: "Personal Injury Lawyer",
      bio: "John Smith is a personal injury lawyer with over 10 years of experience helping clients get the compensation they deserve. He is passionate about justice and fighting for the rights of his clients.",
      skills: ["Negotiation", "Litigation", "Mediation"],
      experience: "10+ years",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      languages: ["English", "Spanish"],
    },
    {
      name: "Jane Doe",
      address: "456 Oak St, Anytown, USA",
      profession: "Criminal Defense Lawyer",
      bio: "Jane Doe is a criminal defense lawyer with a proven track record of success in the courtroom. She has a deep understanding of criminal law and is passionate about defending her clients' rights.",
      skills: ["Trial Preparation", "Cross-Examination", "Plea Bargaining"],
      experience: "8+ years",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      languages: ["English", "French"],
    },
    {
      name: "David Lee",
      address: "789 Maple Ave, Anytown, USA",
      profession: "Corporate Lawyer",
      bio: "David Lee is a corporate lawyer with extensive experience advising businesses on legal matters. He is skilled at drafting contracts, negotiating deals, and providing legal guidance to clients.",
      skills: ["Contract Drafting", "Mergers & Acquisitions", "Corporate Governance"],
      experience: "15+ years",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      languages: ["English", "Mandarin"],
    },
    {
      name: "Karen Wilson",
      address: "234 Elm St, Anycity, USA",
      profession: "Immigration Lawyer",
      bio: "Karen Wilson is an immigration lawyer who is dedicated to helping clients navigate the complex immigration system.",
      skills: ["Visa applications", "Deportation defense", "Citizenship applications"],
      experience: "8+ years",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      languages: ["English", "Spanish", "Mandarin"]
    },
    {
      name: "Robert Johnson",
      address: "789 Pine St, Anystate, USA",
      profession: "Criminal Defense Lawyer",
      bio: "Robert Johnson is a criminal defense lawyer with a track record of successfully defending his clients.",
      skills: ["DUI defense", "Drug offenses", "Assault and battery"],
      experience: "15+ years",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      languages: ["English", "French"]
    },
    {
      name: "Samantha Lee",
      address: "456 Elm St, Anytown, USA",
      profession: "Immigration Lawyer",
      bio: "Samantha Lee is an immigration lawyer with a deep understanding of the complexities of immigration law.",
      skills: ["Green card applications", "Asylum cases", "Deportation defense"],
      experience: "7+ years",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      languages: ["English", "Mandarin"]
    },
    // Add more lawyers here as needed
  ];

  return (
    <div className="App">
      <Lawyers props={lawyersData} />
    </div>
  );
}

export default App;
