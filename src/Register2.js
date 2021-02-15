import {Button} from 'react-bootstrap';

function Register2() {
    return (
 <div>
            <h1 className="text-center text-primary"><b>Simple Registration Form</b></h1><br/>
    <div className="row">
            <div className="col-lg-4">
            </div>
        <div className="col-lg-4">

                <div className="form-group">
                    <label>Email<span className='text-danger'>*</span></label>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" />

                </div>
                <div className="form-group">
                    <label>Password<span className='text-danger'>*</span></label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" />

                </div>
                <div className="form-group">
                    <Button className="btn btn-primary mx-auto d-block">Register</Button>
                </div>
        </div>
        
    </div>
    <div className="col-lg-4">
    
    </div>
</div>

    );
}
export default Register2