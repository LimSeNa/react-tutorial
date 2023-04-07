import {Button, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {changeField, initializeForm, register} from "../../modules/auth";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {form} = useSelector(({auth}) => ({
        form: auth.register
    }));

    useEffect(() => {
        dispatch(initializeForm("register"));
    },[]);

    const onChange = e => {
        const {name, value} = e.target;
        dispatch(changeField({
            form: "register",
            key: name,
            value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        const {email, password, nickname} = form;
        dispatch(register({
            email, password, nickname
        }));
        navigate("/");
    }

    return (
        <>
            <Container className="mt-5">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" onChange={onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="text" placeholder="Enter nickname" name="nickname" onChange={onChange}/>
                    </Form.Group>

                    <Button variant="primary" onClick={onSubmit}>
                        회원가입
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default SignUpForm;