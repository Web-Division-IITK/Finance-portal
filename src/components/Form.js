import React from 'react'
import iitklogo from '../assets/images/iitklogo.jpeg';
import gymkhana from '../assets/images/gymkhana.jpeg';
import TextField from '../components/TextField'
import '../assets/css/Practice.css';
class Form extends React.Component {
  state={
    n2:5,
    n3:1,
    n4:1,
    n5:1
  }
   addRows=(e)=>{

    e.preventDefault();
    switch(e.target.name)
    {
      case "table2": this.setState({n2:this.state.n2+1})
      break;
      case "table3": this.setState({n3:this.state.n3+1})
      break;
      case "table4": this.setState({n4:this.state.n4+1})
      break;
      case "table5": this.setState({n5:this.state.n5+1})
      
    }
    
  }
  render(){
    
   
    return (
      <div className="p-3 mb-2 bg-light text-dark container-fluid white">
      <div className="top">
        <img src={iitklogo} className="iitklogo  img-responsive " alt="iitklogo" />
        <div className="heading">
          <h1 className>Bill Clearance FORM – SG2 </h1>
          <h1>Indian Institute of Technology Kanpur</h1>
          <h4  style={{fontWeight:"250", letterSpacing:"4px"}}>Students Gymkhana Account</h4>
        </div>
        <div>
        <img src={gymkhana} style={{width:"300px"}}className="gymkhana  img-responsive img-fluid" alt="gymkhana" />
        <div className="container-fluid" > 
       <h5 className="img_tag"style={{fontWeight:".8",fontSize:".5rem",textAlign:"center"}}>Student's Gymkhana</h5>
      <h6 style={{textAlign:"center",fontWeight:"1",fontSize:".6rem"}}>IIT Kanpur</h6>
      </div>
      </div>
      </div>
      <div className="container-fluid">
      <form className="white" >
        <div className="checkbox container-fluid" >
          <label htmlFor="reimbursment"className="tick_text ">Reimbursement</label>
          <input type="checkbox" id="reimbursment" className="tick"/>
          <label htmlFor="vendor"className=" tick_text">Payment to vendor</label>
          <input type="checkbox" className="tick"id="vendor" />
        </div>
        <div className="table-responsive">
        <table className=" table1">
          <tr>
            <td className="">Name of Council/Cell:</td>
            <td className="">
              <input type="text" />
            </td>
            <td className="">Name of Club/Head</td>
            <td className="">
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Name of Executive:</td>
            <td>
              <input type="text" />
            </td>
            <td>Name of Coordinator:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Roll No.</td>
            <td>
              <input type="text" />
            </td>
            <td>Roll No.</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Contact no. </td>
            <td>
              <input type="text" />
            </td>
            <td>Contact no. </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        </div>
        <div className="table-responsive-sm">
        <table className="table2">
          <tr className="th-header">
            <td>Date </td>
            <td>Bill /VR. No</td>
            <td>Brief Particulars of Transaction</td>
            <td>Amount (In <span className="ruppee">₹</span> )</td>
          </tr>
          <TextField rows={this.state.n2} cols={4}/>
          <tr>
            <td><input type="text" style={{width:"100%"}}/></td>
            <td>
              <input type="text" />
            </td>
            <td  style={{display:"flex", border:"0px"}}>
             <span className="total"> Total:</span>
              <input type="text" id="total" style={{marginLeft:"4rem"},{width:"100%"}} />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        <button className="btn btn-secondary mt-2 mx-1" name="table2" onClick={this.addRows}>Add more rows</button>
        </div>
        <div className="para container-fluid">
          <h3 style={{ marginLeft: "12%"}}>In case of expenditure below ₹25,000:</h3>
          <p>
            “I am personally satisfied that these goods purchased are of the
            requisite quality and purchased from a reliable supplier at a
            reasonable price “
          </p>
          <h3 style={{ marginLeft: "9.5%",fontWeight:"900"}}>In case of expenditure above ₹25,000 and below ₹2,50,000:</h3>
          <div id="headline">
             The LPC form has to be attached along with this form.
          </div>
        </div>
        <div  className="table-responsive">
        <table className="table3">
          <tr className="th-header">
            <td>Chairperson/President/Genera, UG,PG- Secretary</td>
            <td>
              Chairperson, Students' Senate (Only in Case of Senator Seed Fund)
            </td>
            <td>(Approved by) Faculty Counsellor</td>
          </tr>
          <TextField rows={this.state.n3} cols={3}/>
        </table>
        <button className="btn btn-secondary mt-2 mx-1" name="table3" onClick={this.addRows}>Add more rows</button>
        </div>
        <div id="headline2_div">
        <h4 id="headline2">To be filled by Finance Convener / FC Member</h4>
        </div>
        <div  className="table-responsive">
        <table className="table4">
          <tr className="th-header">
            <td>Balance in Club/Head</td>
            <td>Balance in Council/Cell:</td>
            <td>Remarks (if any):</td>
            <td>Verified for <span className="ruppee">₹:</span></td>
          </tr>
          <TextField rows={this.state.n4} cols={3}/>
        </table>
        <button className="btn btn-secondary mt-2 mx-1" name="table4" onClick={this.addRows}>Add more rows</button>
        </div>
        <div  className="table-responsive">
        <table className="table5">
          <tr className="th-header">
            <td>Gymkhana Office</td>
            <td>Finance Convener</td>
          </tr>
          <TextField rows={this.state.n5} cols={2}/>
        </table>
        <button className="btn btn-secondary mt-2 mx-1" name="table5" onClick={this.addRows}>Add more rows</button>
        </div>
        <button type="button" className="btn btn-secondary" id="submit" onClick={this.props.handlePrint}>Save as Pdf</button>
      </form>
      </div>
    </div>
   
  );
  }
   
}

export default Form;