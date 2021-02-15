import {Form,Button} from 'react-bootstrap';

function Register1() {
    return (
      <div>
        <h1 className="text-center text-primary"><b>Registration Form</b></h1>
        <Form>
            <Form.Group>
                <Form.Label>Name<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="text" placeholder="Enter Your Full Name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="email" placeholder="Enter Your Email Address" />
                    <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                    </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Password<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="password" placeholder="Enter Your Password" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Mobile Number<span className='text-danger'>*</span></Form.Label>
                <Form.Control required type="number" placeholder="Enter Your Mobile Number" />
            </Form.Group>

           
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        <hr />
      </div>
    );
  }
  
  export default Register1;