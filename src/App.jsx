import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Component } from 'react';
import Sidebar from './components/organisms/Sidebar';
import About from './pages/About'
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Awards from './pages/Awards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          name: 'About',
          link: "/about",
          active: true
        },
        {
          name: 'Experience',
          link: "/experience",
          active: false
        },
        {
          name: 'Education',
          link: "/education",
          active: false
        },
        {
          name: 'Skills',
          link: "/skills",
          active: false
        },
        {
          name: 'Interests',
          link: "/interest",
          active: false
        },
        {
          name: 'Awards',
          link: "/awards",
          active: false
        }
      ],
      profile: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        avatarSrc: 'https://media.licdn.com/dms/image/v2/D5603AQFqk3P0GpzaxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697174117380?e=1733961600&v=beta&t=wMidjxgrLn82np8uxG6IEthYwiOsVYlrP1HicSQ_YcQ',
      },
      about: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'About Nukman...',
      },
      experience: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'Experience Nukman...',
      },
      education: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'Education Nukman...',
      },
      skills: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'Skills Nukman...',
      },
      interest: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'Interest Nukman...',
      },
      awards: {
        name: 'Achmad Nukman Jaza',
        title: 'Fullstack Web Developer',
        phone: '+62-0123456789',
        email: 'loremipsum@gmail.com',
        description: 'Awards Nukman...',
      }
    };
  }

  handleMenuClick = (index) => {
    this.setState((prevState) => {
      const updatedMenuItems = prevState.menuItems.map((item, i) => ({
        ...item,
        active: i === index
      }));
      return { menuItems: updatedMenuItems };
    });
  };

  render() {
    const { menuItems, profile, about, experience, education, skills, interest, awards } = this.state;

    return (
      <>
        <div className="d-flex">
          <div className="sidebar">
            <div className="sidebar-top"></div>
            <div className="sidebar-middle">
              <Sidebar 
                menuItems={menuItems} 
                profile={profile}
                onMenuClick={this.handleMenuClick} />
            </div>
            <div className="sidebar-bottom"></div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" index element={<About about={about} />} />
              <Route path="/about" index element={<About about={about} />} />
              <Route path="/experience" element={<Experience experience={experience} />} />
              <Route path="/education" element={<Education education={education} />} />
              <Route path="/skills" element={<Skills skills={skills} />} />
              <Route path="/interest" element={<Interest interest={interest} />} />
              <Route path="/awards" element={<Awards awards={awards} />} />
            </Routes>
          </div>
        </div>

      </>
    )
  }
}

export default App
