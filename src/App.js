import logo from './images/logo.svg';
import './App.css';
import Home from './components/Home';
import Company from './components/Company';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Contact from './components/Contact';
import foot from './images/foot.svg';
import certified from './images/certified.png';
import nasscom from './images/nasscom.png';
import linkedin from './images/linkedin.svg';
import mail from './images/mail.svg';
import phone from './images/phone.svg';
import location from './images/location.svg';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App overflow-x-hidden">
      
      <header className="flex flex-row items-center">
        <img src={logo} alt="Logo" className="w-1/6 mt-4 ml-10" />
        
        <ul className="flex flex-row items-center justify-center gap-16 mt-4 font-sans ml-52">
          <li><Link to='/' className='hover:gradient-text'>Home</Link></li>
          <Company /> {/* Include the dropdown component here */}
          {/* <li><a href='/solutions' className='hover:gradient-text'>Solutions</a></li> */}
          <Solutions/>
          <Partners/>
          {/* <li><a href='/partners' className='hover:gradient-text'>Partners</a></li> */}
          <li><Link to='/contact' className="bg-customPurple text-white p-3 rounded-xl hover:bg-purple-700 transition duration-200">Contact Us</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-purple-950 w-full relative h-140'>
        <div className='grid grid-cols-5 gap-10'>
          <div>
              <img src={foot} alt="footerlogo" className="w-1/6 mt-16 ml-28 absolute" />
              <p className="text-white w-80 absolute mt-36 ml-28 text-justify">We ensure better services 
                and better quality at every product you might be interested in and we shall help grow better.</p>
              <img src={certified} alt="certified" className="w-1/3 mt-64 ml-28"/>
              <img src={nasscom} alt="nasscom" className="w-2/4 mt-4  ml-28"/>
              <div className='flex flex-row mt-4 items-center'>
                <p className="text-white ml-28">Follow us on</p>
                <a href="https://www.linkedin.com/company/gwcdataai/mycompany/"><img src={linkedin} alt="Linkedin" className='ml-4'/></a>
              </div>
          </div>
          <div className='text-white mt-16'>
            <h2 className='ml-40 text-justify mb-8 text-lg font-bold'>QUICK LINKS</h2>
            <ul className='ml-40 text-justify'>
              <li className='mb-3 hover:gradient-text cursor-pointer'>Home</li>
              <li className='mb-3 hover:gradient-text cursor-pointer'>About Us</li>
              <li className='mb-3 hover:gradient-text cursor-pointer'>Contact Us</li>
              <li className='mb-3 hover:gradient-text cursor-pointer'>Blogs</li>
              <li className='mb-3 hover:gradient-text cursor-pointer'>Case Studies</li>
            </ul>
          </div>
          <div className='text-white mt-16'>
            <h2 className='ml-8 text-justify mb-8 text-lg font-bold'>PARTNERS</h2>
              <ul className='ml-8 text-justify'>
                <li className='mb-3 hover:gradient-text cursor-pointer'>DOMO</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>GCP</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Salesforce</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Snowflake</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Fivetran</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>DBT</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Boomi</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Looker</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Tableau</li>
                <li className='mb-3 hover:gradient-text cursor-pointer'>Alation</li>
              </ul>
          </div>

          <div className='text-white mt-16'> 
              <h2 className='-ml-28 text-justify mb-8 text-lg font-bold'>SOLUTIONS</h2>
                  <ul className='-ml-28 text-justify'>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Data Strategy & Engineering</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Data Governance</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Business Intelligence & Analytics</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>BI Migration & Modernization</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Cloud Transformation</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Artificial Intelligence</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Industrial Internet of Things</li>
                    <li className='mb-3 hover:gradient-text cursor-pointer'>Salesforce Implementation</li>
                  </ul>
          </div>

          <div className='text-white mt-16'>
              <h2 className='-ml-28 text-justify mb-8 text-lg font-bold'>CONTACT US</h2>
              <div>
                  <img src={location} alt="location" className='-ml-28'/>
                  <p className='-ml-28 text-justify hover:gradient-text'>#46/4 Novel Tech Park, Kudlu Gate,</p>
                  <p className='-ml-28 text-justify hover:gradient-text'>Hosur Rd, HSR Extension, Bangalore,</p>
                  <p className='-ml-28 text-justify hover:gradient-text'>Karnataka, India 560068</p>
              </div>
              <div>
                  <img src={mail} alt="mail" className='-ml-28 mt-4'/>
                  <p className='-ml-28 text-justify hover:gradient-text cursor-pointer'>indiahr@gwcdata.ai</p>
              </div>
              <div>
                <img src={phone} alt="phone" className='-ml-28 mt-4'/>
                <p className='-ml-28 text-justify hover:gradient-text cursor-pointer'>+91 95914 33122 | +91 99861 68512</p>
              </div>
          </div>

        </div>
        <hr className="ml-20 mr-20 mt-10 border-t-2 border-gray-300" />

        <div className='flex mt-10 text-white gap-96 ml-20'>
          <p className='mr-40'>© 2023 GWC. All rights reserved.</p>
          <p className='ml-96 cursor-pointer'>Privacy | Terms & Conditions</p>
        </div>
        
      </footer>
    </div> 
  </BrowserRouter>
  );
}

export default App;
