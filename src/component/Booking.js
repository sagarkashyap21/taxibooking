import React,{useState} from 'react'
// import { json } from 'react-router';

export default function Booking() {
    const [data, setdata] = useState({name:"",phone:"",email:"",date:"",place:"",destination:"",passenger:"",flight:"",comment:""})
    const Input=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        // const [name,value]=e.target;
        setdata({...data,[name]:value});
        localStorage.setItem(`userdata`,JSON.stringify(data));
        
    }
    const book=(e)=>{
        e.preventDefault();
        const message=`Are you sure about the booking detail ! if yes press ok else cancel`;
        let res=window.confirm(message);
        console.log(res)
        if(res===true){
            alert("Thanks for booking!")
            setdata("")
        }
        
    }
    const cancel=(e)=>{
        // e.preventDefault();
    }
    return (
        <div className="booking">
            <form class="row g-3 needs-validation" >
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label"> Name</label>
                    <input type="text" name="name" value={data.name} onChange={Input}  class="form-control" id="validationCustom01" placeholder="Name" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Phone Number</label>
                    <input type="number" name="phone" value={data.phone} onChange={Input} class="form-control" id="validationCustom02" placeholder="Phone Number" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">E-mail</label>
                    <div class="input-group has-validation">
                        <input type="email" name="email" value={data.email}  onChange={Input} placeholder="E-mail" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Pick up Date</label>
                    <input type="date" name="date" value={data.date} onChange={Input} placeholder="Pick up Date" class="form-control" id="validationCustom02"  required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Pick up Place</label>
                    <input type="text" name="place" value={data.place} onChange={Input} placeholder="Pick up Place" class="form-control" id="validationCustom02"  required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Drop off Destination</label>
                    <input type="text" name="Destination" value={data.Destination} onChange={Input} placeholder="Drop off Destination" class="form-control" id="validationCustom02" required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Number of passengers</label>
                    <input type="number" name="passenger" value={data.passenger} onChange={Input} placeholder="Number of passengers" class="form-control" id="validationCustom02"  required />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Flight Number</label>
                    <input type="text" name="Flight" value={data.Flight} onChange={Input} placeholder="Flight Number ( OPTIONAL )" class="form-control" id="validationCustom02"   />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Any other requirement</label>
                    <textarea class="form-control" name="comment" value={data.comment} onChange={Input} id="exampleFormControlTextarea1" rows="4" ></textarea>
                </div>
                
                <div class="col-12 button">
                    <button class="btn btn-primary" onClick={book}>BOOK NOW</button>
                    <button class="btn btn-primary" onClick={cancel}>CANCEL</button>
                </div>
            </form>
        </div>
    )
}
