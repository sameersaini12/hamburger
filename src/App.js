import logo from './logo.svg';
import {useState} from "react"

function App() {

  const [isOpen , setOpen] = useState(true);
  const [isSelected , setSelected] = useState(0)

  const openf = (select) => {
    if(isSelected==1 || isSelected==2 || isSelected==3 || isSelected==4) {
      setSelected(0)
    }else 
    setSelected(select)
  }

  return (
    <div className="App">
      <div style={{backgroundColor : "white" , height : "95vh" , width: "60vw" , position: "absolute" , left : `${isOpen ? '0' : '-60vw'}` , padding : `${isOpen ? '20px' : '0'}` , display : "flex" , justifyContent : "space-between" , flexDirection : "column" , zIndex: "2" }}>
          <div style={{}}>
            <div style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
                <img style={{height : "100px" , width : "100px"}} src={logo} />
                <div onClick={() => setOpen(!isOpen)} style={{cursor : "pointer", color : "black" , position : "absolute" , marginLeft : "90%" , marginBottom : "30%"}}>
                  <svg width="15" height="13" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.704698 0.845414C0.676651 0.899336 0.663818 0.959878 0.667576 1.02054C0.671335 1.08121 0.691542 1.1397 0.726031 1.18975L3.72603 5.52308C3.75671 5.56736 3.79766 5.60355 3.84538 5.62854C3.8931 5.65353 3.94616 5.66659 4.00003 5.66659C4.0539 5.66659 4.10696 5.65353 4.15468 5.62854C4.2024 5.60355 4.24335 5.56736 4.27403 5.52308L7.27403 1.18975C7.30863 1.13974 7.3289 1.08122 7.33262 1.02052C7.33635 0.959821 7.32341 0.899259 7.29518 0.845391C7.26696 0.791523 7.22454 0.746402 7.17252 0.714914C7.12049 0.683425 7.06084 0.666769 7.00003 0.666748L1.00003 0.666748C0.939185 0.666738 0.879497 0.683382 0.827437 0.714877C0.775376 0.746372 0.73293 0.791515 0.704698 0.845414Z" fill="#8C8C8C"/>
                  </svg>
                </div>
            </div>

            <hr />
            
            <div style={{color : "#4F72BD" , fontFamily: 'Montserrat',
fontWeight: "600" ,
fontSize: "20px",
display : "flex-start",
marginTop : "20px",
marginLeft : "10px",
marginBottom : "20px"

}}>
                Hi Admin
            </div>

            <div style={{
background: "linear-gradient(90deg, #364D7F 0%, #5378C6 106.25%)" ,
borderRadius: "4px" ,
color : 'white',
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
cursor : "pointer" }}>
                <div>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H7V9H1V1ZM1 13H7V17H1V13ZM11 9H17V17H11V9ZM11 1H17V5H11V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div style={{marginLeft : "10px"}}>
                  DashBoard
                </div>
                
            </div>

            <div onClick={()=> openf(1)} style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z" fill="#8C8C8C"/>
<path d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z" fill="#8C8C8C"/>
</svg>


                </div>
                <div style={{marginLeft : "10px"}}>
                  Inventory
                </div>
                <div style={{marginLeft : "8px"}}>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.84517 7.2953C0.899092 7.32335 0.959634 7.33618 1.0203 7.33242C1.08096 7.32867 1.13946 7.30846 1.1895 7.27397L5.52284 4.27397C5.56712 4.24329 5.6033 4.20234 5.62829 4.15462C5.65329 4.1069 5.66634 4.05384 5.66634 3.99997C5.66634 3.9461 5.65329 3.89304 5.62829 3.84532C5.6033 3.7976 5.56712 3.75665 5.52284 3.72597L1.1895 0.725969C1.1395 0.691367 1.08097 0.671104 1.02028 0.667375C0.959577 0.663647 0.899015 0.676594 0.845147 0.704815C0.791279 0.733037 0.746158 0.775457 0.71467 0.827482C0.683181 0.879508 0.666524 0.939156 0.666504 0.999969V6.99997C0.666494 7.06081 0.683138 7.1205 0.714633 7.17256C0.746128 7.22462 0.791271 7.26707 0.84517 7.2953Z" fill="#8C8C8C"/>
              </svg>

                </div>
            </div>

            <div style={{ display : `${(isSelected==1) ? "flex" : "none" }` , flexDirection : "column" , marginLeft : "20%" }}>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                View Items
              </div>
              <div style={{color : "#565656" }}>
                Issue Items
              </div>
            </div>

            <div onClick={()=> openf(2)} style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z" fill="#8C8C8C"/>
<path d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z" fill="#8C8C8C"/>
</svg>


                </div>
                <div style={{marginLeft : "10px"}}>
                  Stock
                </div>
                <div style={{marginLeft : "8px"}}>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.84517 7.2953C0.899092 7.32335 0.959634 7.33618 1.0203 7.33242C1.08096 7.32867 1.13946 7.30846 1.1895 7.27397L5.52284 4.27397C5.56712 4.24329 5.6033 4.20234 5.62829 4.15462C5.65329 4.1069 5.66634 4.05384 5.66634 3.99997C5.66634 3.9461 5.65329 3.89304 5.62829 3.84532C5.6033 3.7976 5.56712 3.75665 5.52284 3.72597L1.1895 0.725969C1.1395 0.691367 1.08097 0.671104 1.02028 0.667375C0.959577 0.663647 0.899015 0.676594 0.845147 0.704815C0.791279 0.733037 0.746158 0.775457 0.71467 0.827482C0.683181 0.879508 0.666524 0.939156 0.666504 0.999969V6.99997C0.666494 7.06081 0.683138 7.1205 0.714633 7.17256C0.746128 7.22462 0.791271 7.26707 0.84517 7.2953Z" fill="#8C8C8C"/>
              </svg>

                </div>
            </div>

            <div style={{ display : `${(isSelected==2) ? "flex" : "none" }` , flexDirection : "column" , marginLeft : "20%" }}>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Add Role
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Edit Role
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Add Bora
              </div>
              <div style={{color : "#565656" }}>
                Edit Role
              </div>
            </div>

            <div onClick={()=> openf(3)} style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z" fill="#8C8C8C"/>
<path d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z" fill="#8C8C8C"/>
</svg>


                </div>
                <div style={{marginLeft : "10px"}}>
                  Dispatch
                </div>
                <div style={{marginLeft : "8px"}}>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.84517 7.2953C0.899092 7.32335 0.959634 7.33618 1.0203 7.33242C1.08096 7.32867 1.13946 7.30846 1.1895 7.27397L5.52284 4.27397C5.56712 4.24329 5.6033 4.20234 5.62829 4.15462C5.65329 4.1069 5.66634 4.05384 5.66634 3.99997C5.66634 3.9461 5.65329 3.89304 5.62829 3.84532C5.6033 3.7976 5.56712 3.75665 5.52284 3.72597L1.1895 0.725969C1.1395 0.691367 1.08097 0.671104 1.02028 0.667375C0.959577 0.663647 0.899015 0.676594 0.845147 0.704815C0.791279 0.733037 0.746158 0.775457 0.71467 0.827482C0.683181 0.879508 0.666524 0.939156 0.666504 0.999969V6.99997C0.666494 7.06081 0.683138 7.1205 0.714633 7.17256C0.746128 7.22462 0.791271 7.26707 0.84517 7.2953Z" fill="#8C8C8C"/>
              </svg>

                </div>
            </div>

            <div style={{ display : `${(isSelected==3) ? "flex" : "none" }` , flexDirection : "column" , marginLeft : "20%" }}>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Dispatch Role
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Delete Dispatch Role
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Roll Packing List
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Dispatch Bora
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Delete Dispatch Bora
              </div>
              <div style={{ color : "#565656" }}>
                Bora Packing List
              </div>
              
            </div>
            <div onClick={()=> openf(4)} style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z" fill="#8C8C8C"/>
<path d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z" fill="#8C8C8C"/>
</svg>


                </div>
                <div style={{marginLeft : "10px"}}>
                  Setup
                </div>
                <div style={{marginLeft : "8px"}}>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.84517 7.2953C0.899092 7.32335 0.959634 7.33618 1.0203 7.33242C1.08096 7.32867 1.13946 7.30846 1.1895 7.27397L5.52284 4.27397C5.56712 4.24329 5.6033 4.20234 5.62829 4.15462C5.65329 4.1069 5.66634 4.05384 5.66634 3.99997C5.66634 3.9461 5.65329 3.89304 5.62829 3.84532C5.6033 3.7976 5.56712 3.75665 5.52284 3.72597L1.1895 0.725969C1.1395 0.691367 1.08097 0.671104 1.02028 0.667375C0.959577 0.663647 0.899015 0.676594 0.845147 0.704815C0.791279 0.733037 0.746158 0.775457 0.71467 0.827482C0.683181 0.879508 0.666524 0.939156 0.666504 0.999969V6.99997C0.666494 7.06081 0.683138 7.1205 0.714633 7.17256C0.746128 7.22462 0.791271 7.26707 0.84517 7.2953Z" fill="#8C8C8C"/>
              </svg>

                </div>
            </div>
            <div style={{ display : `${(isSelected==4) ? "flex" : "none" }` , flexDirection : "column" , marginLeft : "20%" }}>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Inventory Master
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Stock Master
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Customer Master
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Supplier Master
              </div>
              <div style={{marginBottom :"10px" , fontSize : "16px" , color : "#565656" }}>
                Printer Setting
              </div>
              <div style={{ color : "#565656" }}>
               Scangun Setting
              </div>
              
            </div>

            <div style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div style={{marginLeft : "10px"}}>
                  About Us
                </div>
            </div>

            <div style={{
display : "flex",
flexDirection : "row",
alignItems: "center",
padding : "11px",
color : "#8C8C8C",
cursor : "pointer" }}>
                <div style={{marginLeft : "10px"}}>
                  Logout
                </div>
            </div>

          </div>

          <div>
              <div style={{color : "#8C8C8C" , fontWeight: "500" , fontSize: "12px"}}>
                  Version
              </div>
              <div style={{color : "#FF5757" , fontWeight: "500" , fontSize: "12px"}}>
                Scaleeasy 4.2.0
              </div>
          </div>
      </div>
        <div style={{display : "flex" , flexDirection : "row" , justifyContent : "flex-start" , background: "#FF5757" , padding: "12px" , opacity : `${isOpen ? '0.8' : '1'}` , zIndex : "1"}}>
            <div onClick={() => setOpen(!isOpen)} style={{cursor : "pointer"}}>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.125 13.375H16.875M1.125 7.375H16.875M1.125 1.375H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div style={{marginLeft :  "10px" , color : "white"}}>
              Dashboard
            </div>
        </div>
    </div>
  );
}

export default App;
