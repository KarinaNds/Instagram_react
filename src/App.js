import img from './bt21_.png';
import img2 from './bottons2.png';
import img3 from './MAMAMOO_.png';
import img4 from './dog.png';
import img5 from './Proa_.png';
import img6 from './tzb.png';
import img7 from './icon.jpg';
import meme from './memes_dev.png';
import meme1 from './meme1.jpg';
import Proa from './Proa.jpg';
import icons3 from './icons3.png';
import icons2 from './icons2.png';
import rm_ from './rm-perfil.jpg';
import rap_monster from './rm.jpg'
import { AiOutlineSearch, AiFillHome  } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { IconContext } from 'react-icons';


import './App.css';


function App() {
  return (
    <div className="App">
      <div className="main">

         <div className="cabecalho">
        <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>

        <div className="input-fake">
          <input />
          </div>
      

        <div className="icons">

          <IconContext.Provider value={{ size: '26px' }}>
            <div>
            <AiFillHome />
            </div>

            <div>
            <RiMessengerLine />
            </div>

            <div>
            <BsPlusSquare />
            </div>

            <div>
            <MdOutlineExplore />
            </div>

            <div>
            <FiHeart />
            </div>
            
            
            </IconContext.Provider>

            <a href="#"><img src={img7} /> </a>   
          
         
        </div>


       </div>


        <div className="status">
         <a href="#"><img src={img} /></a> 
         <a href="#"><img src={img2} /></a>
         <a href="#"><img src={img3} /></a>
         <a href="#"><img src={img4} /></a>
         <a href="#"><img src={img5} /></a>
         <a href="#"><img src={img6} /></a>
         <a href="#"><img src={meme} /></a>



        </div>

          <div className="sugestao">

             <a href="#"><img src={img7} /></a> 
             <p>Karinask8__</p> <a href="#">Mudar</a>
               
               <div className="sugestoes">
 
              </div>
              
            

          
      

          </div>  



        <div className="Feed"> 
        
        <div className="perfil_proa">
          
        <a href="#"><img src={img5} /> </a> <p>Instituto Proa</p> 

        </div>

      
        <img src={Proa} />

        <div className="icons3">
          <img src={icons3} />

          <p> instituto.proa Hoje (30/4), aconteceu a segunda edição do PROA TECH do 1º semestre de 2022 do PROPROFISSÃO 👩🏽‍💻👨🏻‍💻
              👉 Os PROANES tiveram a oportunidade de ouvir as histórias inspiradoras de grandes referências na área de tecnologia:
              Adriana Kira - @drikira (@bancopan), Diego Paris - dparis_ (@banqiapp - @fundacaocasasbahia) e Laura Castro (@bloombergservice).</p>
          
        </div>
        
        
        
        </div>
        
        <div className="Feed2">
          <div className="perfil1">
          <img src={meme} /> <p>Memes_dev_ofc</p>
          </div>

          <img src={meme1} />

          <div className="icons3">
          <img src={icons3} />

         <br /> <p>Expectativa vs Realidade  </p>
          
        </div>

        </div>

          <div className="Feed3">
        <div className="perfil2">
          <img src={rm_} /> <p>rkive</p>
        </div>
          
       

        <img src={rap_monster} /> 

             <div className="icons2">
              <img src={icons2} />

              <p> ⛰🏔🗻 </p>
          
               
             </div>

        
           </div>

    </div>
      
     
   </div>
   
  )
}

export default App;


